import Button from "../_common/buttons/Button";

const CommentControlBtn = ({ commentId }) => {
  const handleDelete = () => {
    console.log(commentId, "삭제");
  };
  const handleUpdate = () => {
    console.log(commentId, "수정");
  };
  return (
    <div className="flex gap-1 justify-baseline items-center">
      <Button mode="text" onClick={handleUpdate}>
        수정
      </Button>
      <Button mode="text" className="text-error-100" onClick={handleDelete}>
        삭제
      </Button>
    </div>
  );
};

export default CommentControlBtn;
