import { useSelector } from 'react-redux'

const useUserDetails = () => {
    const userDetails = useSelector(state => state.userDetails);

    return userDetails;
}

export default useUserDetails