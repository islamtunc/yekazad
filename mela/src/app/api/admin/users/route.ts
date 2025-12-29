// Bismillahirrahmanirrahim


// Elhamdulillahi Rabbil Alamin
// Essalatu vesselamu ala Resulina Muhammedin 
// Allah U Ekber, Allah U Ekber, Allah U Ekber, La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { requireAdmin } from "@/auth";

export async function GET(request: Request) {
  const maybe = await requireAdmin();
  if (maybe instanceof NextResponse) return maybe; // unauthorized/forbidden returned
  // maybe is the admin db user
  const users = await prisma.user.findMany({
    orderBy: { createdAt: "desc" },
    select: { id: true, name: true, email: true, role: true, disabled: true, createdAt: true },
  });
  return NextResponse.json(users);
}