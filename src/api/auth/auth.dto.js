export const authDto = (rawData) => {
  const userInfo = {
    id: rawData.user_id,
    username: rawData.user_name,
  };
  const authTokens = {
    access: rawData.authentication.access_token,
    refresh: rawData.authentication.refresh_token,
  };
  return { userInfo, authTokens };
};
