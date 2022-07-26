const BASE_URL = "http://fakeapi.jsonparseronline.com/users/1";

const UserServices = {
    getUsers: () => fetch(BASE_URL)

}

export default UserServices;