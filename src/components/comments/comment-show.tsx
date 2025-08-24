import { fetchCommentsByPostId } from "@/lib/query/comment";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import React from "react";
import CommentCreateForm from "./comment-create-form";


type CommentShowProps = {
    postId: string;
    commentId: string;
}

const CommentShow : React.FC<CommentShowProps> = async({postId, commentId}) => {

    const comments = await fetchCommentsByPostId(postId);
    const comment = comments.find((c) => c.id === commentId);
    if(!comment) return null;

    const children = comments.filter((c) => c.parentId === comment.id);
    

  return (
   <div className="m-3 p-2 border bg-red-50">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage src={comment.user.image || ""} className="size-9 rounded-full"/>
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <p className="text-gray-500 text-sm font-medium">
            {comment.user.name}
          </p>
          <p className="text-gray-800">{comment.content}</p>
          <CommentCreateForm postId={comment.postId} parentId={comment.id} />
        </div>
      </div>
      {children.map((comment) => (
        <CommentShow  key={comment.id} postId={postId} commentId={comment.id} />
      ))}
    </div>
  );
};

export default CommentShow;
