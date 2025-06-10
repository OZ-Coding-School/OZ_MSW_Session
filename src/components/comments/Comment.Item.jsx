import { useUserInfo } from "../../contexts/UserContext";
import { UserCard } from "../_common/userCard";
import CommentControlBtn from "./Comment.ControlBtn";

const CommentItem = ({ comment }) => {
  const { userInfo } = useUserInfo();
  return (
    <div className="font-gamja">
      <div className="flex items-baseline justify-between">
        <UserCard userInfo={comment.author} />
        {userInfo.id === comment.author?.id && (
          <CommentControlBtn commentId={comment.id} />
        )}
      </div>
      <div className="rounded-lg bg-gray-100 py-4 px-2 resize-none border-0">
        {comment.content}
      </div>
    </div>
  );
};

export default CommentItem;
