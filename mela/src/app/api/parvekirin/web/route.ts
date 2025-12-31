// Bismillahirahmanirahim
// Elhamdullillahirabbulalemin
//Es-selatu vesselamu ala rasulina Muhammedin
// La ilaha illallah, Muhammadan rasulullah
// Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin
// LA ILAHE ILLALLAHU WALLAHU EKBER


import prisma from "@/pirtukxane/prisma";
import { getWebInclude, WebsPage } from "@/pirtukxane/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const pageSize = 10;

   

    const posts = await prisma.web.findMany({
      include: getWebInclude(""),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: WebsPage = {
      webs: posts.slice(0, pageSize),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
