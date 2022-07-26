const BASE_URL = "http://fakeapi.jsonparseronline.com/users"

const UserService = {
    getUser: (id) => fetch(`${BASE_URL}?id=${id}`)
}

export default UserService