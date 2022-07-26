const BASE_URL = `http://fakeapi.jsonparseronline.com/users`;

const UserService = {
  getAllUsers: () => fetch(BASE_URL),
  getUsers: (page, limit) => fetch(`${BASE_URL}?_page=${page}&_limit=${limit}`),
};

export default UserService;
