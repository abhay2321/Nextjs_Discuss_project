// src/components/topics/topic-list.tsx
"use client";

import Link from "next/link";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "../ui/button";
import { Topic } from "@prisma/client";

interface TopicListProps {
  topics: Topic[];
}

const TopicList = ({ topics }: TopicListProps) => {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button className="bg-gray-400">Topics</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="flex flex-col gap-2">
          {topics.map((topic) => (
            <Link
              href={`/topics/${topic.slug}`}
              key={topic.id}
              className="hover:underline"
            >
              {topic.slug}
            </Link>
          ))}
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default TopicList;