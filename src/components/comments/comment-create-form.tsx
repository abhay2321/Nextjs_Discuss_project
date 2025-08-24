"use client";

import React, { useActionState } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { createComment } from "@/actions/create-comment";
import { Loader2 } from "lucide-react";

type CommentCreateFormProps = {
  postId: string;
  parentId?: string;
  startOpen?: boolean;
};

const CommentCreateForm: React.FC<CommentCreateFormProps> = ({
  postId,
  parentId,
  startOpen,
}) => {
  const [open, setOpen] = React.useState(startOpen);
  const [formState, action, isPending] = useActionState(
    createComment.bind(null, { postId, parentId }),
    { errors: {} }
  );

  return (
    <div>
      <Button size={"sm"} variant={"link"} onClick={() => setOpen(!open)}>
        Reply
      </Button>
      {open && (
        <div className="border-l-2 border-gray-300 pl-2 mt-2">
          <form action={action} className="space-y-2">
            <Textarea
              name="content"
              placeholder="Write your comment here..."
              className=" bg-gray-100 focus-visible:ring-0"
            />

            {formState.errors.content && (
              <p className="text-red-500 text-sm">
                {formState.errors.content.join(", ")}
              </p>
            )}

            {formState.errors.formError && (
              <div className="bg-red-200 border border-red-600 text-sm p-2 rounded">
                {formState.errors.formError.join(", ")}
              </div>
            )}

            <Button
              disabled={isPending}
              size={"sm"}
              variant={"secondary"}
              type="submit"
            >
              {isPending ? (
                <>
                  <Loader2 />
                  Please wait...
                </>
              ) : (
                "Save"
              )}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default CommentCreateForm;
