// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilaha illallah, Muhammadan rasulullah
// Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin
// LA ILAHE ILLALLAHU WALLAHU EKBER


import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getPesdebirInclude, PesdebirsPage } from "@/pirtukxane/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const pageSize = 10;

    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const pesdebirs = await prisma.pesdebir.findMany({
      include: getPesdebirInclude(user.id),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = pesdebirs.length > pageSize ? pesdebirs[pageSize].id : null;

    const data: PesdebirsPage = {
      pesdebirs: pesdebirs.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
