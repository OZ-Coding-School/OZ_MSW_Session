export const commentsDTO = (rawData) =>
  rawData.comments.map((comment) => ({
    id: comment.comment_id,
    content: comment.content,
    author: {
      id: author.user_id,
      username: author.username,
    },
  }));
