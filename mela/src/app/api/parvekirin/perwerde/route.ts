// Bismillahirahmanirahim
// Elhamdulillahirabbulalemin
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilaha illallah, Muhammadan rasulullah
// Allahumma salli 'ala Muhammadin wa 'ala ali Muhammadin
// LA ILAHE ILLALLAHU WALLAHU EKBER


import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getPerwerdeInclude, PerwerdesPage } from "@/pirtukxane/types";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const cursor = req.nextUrl.searchParams.get("cursor") || undefined;

    const pageSize = 10;

    const { user } = await validateRequest();

    if (!user) {
      return Response.json({ error: "Unauthorized" }, { status: 401 });
    }

    const posts = await prisma.mmkinc.findMany({
      include: getPerwerdeInclude(user.id),
      orderBy: { createdAt: "desc" },
      take: pageSize + 1,
      cursor: cursor ? { id: cursor } : undefined,
    });

    const nextCursor = posts.length > pageSize ? posts[pageSize].id : null;

    const data: PerwerdesPage = {
      posts: posts.slice(0, pageSize).map(post => ({
        ...post,
        content: Array.isArray(post.content) ? post.content : [post.content],
      })),
      nextCursor,
    };

    return Response.json(data);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
