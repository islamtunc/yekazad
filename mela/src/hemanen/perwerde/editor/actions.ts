// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin ve ala alihi ve sahbihi ecmain
// La ilahe illallah
// Subhanallah, Elhamdulillah, Allahu Ekber

"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getPostDataInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  const newPost = await prisma.mmkinc.create({
    data: {
      content, // Convert string[] to a single string
      userId: user.id,
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
    },
    include: getPostDataInclude(user.id),
  });

  return newPost;
}
