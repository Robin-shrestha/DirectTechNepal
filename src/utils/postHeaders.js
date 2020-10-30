export const jsonHeader = () => {
  return {
    headers: {
      "Content-Type": "application/json",
    },
  };
};

export const tokenConfig = (getState) => {
  //  get token from state
  const token = getState().auth.token;
  // create header/
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  //   addtoken to header for authorization if token exist
  if (token) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
};
