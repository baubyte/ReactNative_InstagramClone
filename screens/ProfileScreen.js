import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import UserPictureAndFollows from "../Components/UserPictureAndFollows";
import UserInfo from "../Components/UserInfo";

const ProfileScreen = () =>{
    const user = useSelector(state => state.user);
    return(
        <View>
            <UserPictureAndFollows user= {user}></UserPictureAndFollows>
            <UserInfo user= {user}/>
        </View>
    )
}


export default ProfileScreen;