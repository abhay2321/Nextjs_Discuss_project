import { prisma } from "..";
import type { Topic } from "@prisma/client";

export const fetchAllTopics = (): Promise<Topic[]> => {
  return prisma.topic.findMany();
};