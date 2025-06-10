import { Comment } from "../config";
import { instance } from "../instance";
import { commentsDTO } from "./comments.dto";

// 댓글 가져오기 get
export const getComments = async () => {
  const response = await instance.get(Comment.default());
  // return commentsDTO(response.data);
  return [
    {
      id: 1,
      content: "comment content",
      author: {
        id: 1,
        username: "user name",
      },
    },
    {
      id: 2,
      content: "comment content",
      author: {
        id: 2,
        username: "user name",
      },
    },
  ];
};

// 댓글 생성하기 post
export const createComment = async (newComment) => {
  await instance.post(Comment.default(), newComment);
};

// 댓글 수정하기 patch
export const updateComment = async (commentId, newComment) => {
  await instance.patch(Comment.detail(commentId), newComment);
};

// 댓글 삭제하기 delete
export const deleteComment = async (commentId) => {
  await instance.delete(Comment.detail(commentId));
};
