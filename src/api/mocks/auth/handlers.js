import { http, HttpResponse } from "msw";

const USER_LOGIN_DATA = {
  email: "test@test.com",
  password: "test1234",
};

export const USER_DATA = {
  user_id: "1",
  user_name: "김오즈",
};

export const handlers = [
  http.post(`/login`, async ({ request }) => {
    const { email, password } = await request.clone().json();

    if (
      email !== USER_LOGIN_DATA.email ||
      password !== USER_LOGIN_DATA.password
    ) {
      return HttpResponse.json(
        { message: "로그인 정보가 다릅니다." },
        { status: 400 }
      );
    }

    const response = {
      data: {
        authentication: {
          access_token: "abcdefg1234",
          refresh_token: "aabbcddwecqw123",
        },
        ...USER_DATA,
      },
      message: "로그인 성공",
    };
    return HttpResponse.json(response);
  }),
  http.get("/user-info", () => {
    return HttpResponse.json({
      user_info: USER_DATA,
    });
  }),
];
