import { CustomButton } from "../_common/buttons";

const CommentCreate = () => {
  return (
    <div className="mt-4 flex flex-col gap-1.5">
      <h1 className="text-xl">댓글 작성</h1>
      <textarea
        id="comment"
        name="comment"
        className="bg-gray-200 rounded-lg resize-none focus:outline-0 p-4 w-full"
      />
      <div className="flex justify-end">
        <CustomButton mode="text">저장</CustomButton>
      </div>
    </div>
  );
};

export default CommentCreate;
