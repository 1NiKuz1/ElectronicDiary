class TokenService {
  getToken() {
    const user = JSON.parse(localStorage.getItem("user"));
    return user?.token;
  }

  setUser(user) {
    localStorage.setItem("user", JSON.stringify(user));
  }

  removeUser() {
    localStorage.removeItem("user");
  }
}

export default new TokenService();
