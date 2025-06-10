export const Auth = {
  login() {
    return "/login";
  },
  logout() {
    return "logout";
  },
};

export const Comment = {
  default() {
    return "/comment";
  },
  detail(id) {
    return `/comment/${id}`;
  },
};
