import CommentCreate from "./Comment.create";
import CommentItemList from "./Comment.ItemList";
import CommentTitle from "./Comment.Title";

const dummy = {
  comments: [
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
  ],
  comments_number: 2,
};

export const Comments = () => {
  return (
    <section className="mx-56 mt-10 pb-20 font-gamja">
      <CommentTitle>댓글({dummy.comments_number ?? 0})</CommentTitle>
      <CommentItemList commentList={dummy.comments} />
      <CommentCreate />
    </section>
  );
};
