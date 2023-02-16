import { useContext, useEffect} from "react";
import Colours from "./Colours";
import Login from "./signin";
import { UserContext } from "./Context";
import { getCookie } from "../utils/cookies";

const Home = () => {
    const { userContext, setUserContext } = useContext(UserContext);

    useEffect(() => {
      if (!userContext) {
        setUserContext(getCookie("user_id"));
      }
    }, [userContext]);

	return (
		<>
      {userContext && <Colours/> }
      {!userContext && <Login/> }
		</>
	);
};

export default Home;