const BASE_URL = 'http://fakeapi.jsonparseronline.com/users';

const UserService = {
    getUser: (id) => fetch(`${BASE_URL}/${id}`)
        .then(data => data.json())
}

export default UserService;