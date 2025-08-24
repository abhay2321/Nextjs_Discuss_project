import { cache } from "react";
import { prisma } from "..";
import type { Comment } from "@prisma/client";

export type CommentWithUser = Comment & {
  user: { name: string | null; image: string | null };
};

export const fetchCommentsByPostId = cache ((
  postId: string
): Promise<CommentWithUser[]> => {

// console.log("**************************  Fetching comments for postId: *********************");

  return prisma.comment.findMany({
    where: { postId },
    include: {
      user: {
        select: {
          name: true,
          image: true,
        },
      },
    },
  });
});
