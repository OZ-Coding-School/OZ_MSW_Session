import { http, HttpResponse } from "msw";

let COMMENT_LIST = [
  {
    comment_id: 1,
    content: "좋은 글 감사합니다",
    author: {
      user_id: 4,
      username: "username",
    },
  },
  {
    comment_id: 2,
    content: "comment content",
    author: {
      user_id: 2,
      username: "user2",
    },
  },
];

export const handlers = [
  // Read
  http.get("/comment", () => {
    const response = {
      comments: COMMENT_LIST,
      comments_number: COMMENT_LIST.length,
    };

    return HttpResponse.json({ ...response });
  }),

  // Create
  http.post("/comment", async ({ request }) => {
    const token = request.headers.get("authorization");

    if (!token?.includes("bearer")) {
      return HttpResponse.json({ message: "Token Expired" }, { status: 401 });
    }
    const { content } = await request.clone().json();

    COMMENT_LIST.push({
      comment_id: COMMENT_LIST.length + 1,
      content,
      author: { user_id: 1, username: "김오즈" },
    });
    return HttpResponse.json({ message: "댓글 생성 성공" }, { status: 201 });
  }),

  // Update
  http.patch("/comment/:comment_id", async ({ request, params }) => {
    const token = request.headers.get("authorization");

    if (!token?.includes("bearer")) {
      return HttpResponse.json({ message: "Token Expired" }, { status: 401 });
    }
    const { comment_id } = params;
    const { new_content } = await request.clone().json();
    console.log(new_content);
    COMMENT_LIST[+comment_id - 1].content = new_content;

    return HttpResponse.json(
      {
        data: { comment_id, content: new_content },
        message: "Comment updated Successfully",
      },
      { status: 200 }
    );
  }),
  // Delete
  http.delete("/comment/:comment_id", ({ request, params }) => {
    const token = request.headers.get("authorization");
    if (!token?.includes("bearer")) {
      return HttpResponse.json({ message: "Token Expired" }, { status: 401 });
    }
    const { comment_id } = params;

    COMMENT_LIST = COMMENT_LIST.filter((comment) => {
      return comment.comment_id !== Number(comment_id);
    });

    return HttpResponse.json({}, { status: 204 });
  }),
];
