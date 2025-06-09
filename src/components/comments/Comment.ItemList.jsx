import { twMerge } from "tailwind-merge";
import CommentItem from "./Comment.Item";

const CommentItemList = ({ commentList, containerClassName }) => {
  return (
    <div className={twMerge("flex flex-col gap-2", containerClassName)}>
      {commentList?.map((comment) => (
        <CommentItem key={comment.id} comment={comment} />
      ))}
    </div>
  );
};

export default CommentItemList;
