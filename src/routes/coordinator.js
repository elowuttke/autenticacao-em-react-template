export const navigateToHome = (navigate) => {
  navigate("/");
};

export const navigateToAdmin = (navigate, id) => {
  navigate(`/admin/${id}`);
};

export const navigateToLogin = (navigate) => {
  navigate("/login");
};

export const navigateToCreate = (navigate) => {
  navigate("/create");
};
