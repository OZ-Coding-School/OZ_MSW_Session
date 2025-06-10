import { CustomButton } from "../_common/buttons";

const CommentControlBtn = ({ commentId }) => {
  const handleDelete = () => {
    console.log(commentId, "삭제");
  };

  const handleUpdate = () => {
    console.log(commentId, "수정");
  };
  return (
    <div className="flex gap-1 justify-baseline items-center">
      <CustomButton mode="text" onClick={handleUpdate}>
        수정
      </CustomButton>
      <CustomButton
        mode="text"
        className="text-error-100"
        onClick={handleDelete}
      >
        삭제
      </CustomButton>
    </div>
  );
};

export default CommentControlBtn;
