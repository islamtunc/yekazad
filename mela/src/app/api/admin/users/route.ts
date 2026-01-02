// Bismillahirrahmanirrahim 
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala rasulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
// La ilahe illallah, Muhammedur Resulullah
// Allah U Ekber ve lillahi'l-hamd

import { NextRequest } from "next/server";
import prisma from "@/pirtukxane/prisma";
import { requireAdmin } from "@/auth";

export async function GET(req: NextRequest) {
  // ensure the caller is an admin
  const adminCheck = await requireAdmin();
  if ((adminCheck as any)?.status) return adminCheck;

  const users = await prisma.user.findMany({
    select: {
      id: true,
      username: true,
      displayName: true,
      email: true,
      role: true,
      disabled: true,
      createdAt: true,
    },
    orderBy: { createdAt: "desc" },
    take: 200,
  });

  return Response.json({ users });
}

export async function POST(req: NextRequest) {
  const adminCheck = await requireAdmin();
  if ((adminCheck as any)?.status) return adminCheck;

  const body = await req.json().catch(() => ({}));
  const { userId, role } = body as { userId?: string; role?: string };

  if (!userId || !role) {
    return Response.json({ error: "Missing userId or role" }, { status: 400 });
  }

  if (!["USER", "ADMIN"].includes(role)) {
    return Response.json({ error: "Invalid role" }, { status: 400 });
  }

  try {
    const updated = await prisma.user.update({
      where: { id: userId },
      data: { role: role as any },
      select: { id: true, username: true, role: true },
    });

    return Response.json({ user: updated });
  } catch (err) {
    console.error(err);
    return Response.json({ error: "Failed to update user" }, { status: 500 });
  }
}
