// Bismillahirrahmanirrahim
// Elhamdulillahirabbulalemin
// Es-selatu vesselamu ala resulina Muhammedin 
"use server";

import { validateRequest } from "@/auth";
import prisma from "@/pirtukxane/prisma";
import { getPesdebirInclude } from "@/pirtukxane/types";
import { createPostSchema } from "@/pirtukxane/validation";

export async function submitPost(input: {
  content: string[];
  mediaIds: string[];
}) {
  const { user } = await validateRequest();

  if (!user) throw new Error("Unauthorized");

  const { content, mediaIds } = createPostSchema.parse(input);

  const newPost = await prisma.pesdebir.create({
    data: {
      content, // Convert string[] to a single string
      userId: user.id,
      attachments: {
        connect: mediaIds.map((id) => ({ id })),
      },
    },
    include: getPesdebirInclude(user.id),
  });

  return newPost;
}
