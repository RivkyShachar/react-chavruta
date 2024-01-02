import { getUserInfo } from "../redux/featchers/userSlice";
import { setLoggedIn, setUserRole,setUserId } from "../redux/featchers/authSlice";
export const handleUserInfo = async (dispatch) => {
    try {
      const data = await dispatch(getUserInfo());
    console.log("in util");
    console.log(data);
      if (data) {
        dispatch(setLoggedIn(true));
        dispatch(setUserRole(data.payload.data.role));
        dispatch(setUserId(data.payload.data._id));
      } else {
        dispatch(setLoggedIn(false));
        dispatch(setUserRole(null));
        dispatch(setUserId(null));
      }
    } catch (error) {
      console.error('Error fetching user info:', error);
    }
  };