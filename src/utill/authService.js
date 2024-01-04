import { getUserInfo } from "../redux/featchers/userSlice";
export const handleUserInfo = async (dispatch) => {
    try {
      const data = await dispatch(getUserInfo());
   
      if (data) {
        localStorage.setItem('USER_ID', data.payload.data._id);
        localStorage.setItem('ROLE', data.payload.data.role);
      } else {
        localStorage.clear();
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };