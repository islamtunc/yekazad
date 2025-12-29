// Bismillahirrahmanirrahim


// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/auth";

type Body = { action: "toggleAdmin" | "toggleDisable" | "delete" };

export async function POST(request: Request, { params }: { params: { id: string } }) {
  const maybe = await requireAdmin();
  if (maybe instanceof NextResponse) return maybe;

  const id = params.id;
  const body = (await request.json()) as Body;
  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

  if (body.action === "toggleAdmin") {
    const updated = await prisma.user.update({ where: { id }, data: { role: user.role === "ADMIN" ? "USER" : "ADMIN" } });
    return NextResponse.json(updated);
  }
  if (body.action === "toggleDisable") {
    const updated = await prisma.user.update({ where: { id }, data: { disabled: !user.disabled } });
    return NextResponse.json(updated);
  }
  if (body.action === "delete") {
    await prisma.user.delete({ where: { id } });
    return NextResponse.json({ success: true });
  }
  return NextResponse.json({ error: "Invalid action" }, { status: 400 });
}