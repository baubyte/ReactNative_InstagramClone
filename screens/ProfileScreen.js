import { View, Text } from "react-native";
import { useSelector } from "react-redux";
import UserPictureAndFollows from "../Components/UserPictureAndFollows";
import UserInfo from "../Components/UserInfo";
import ButtonComponent from "../Components/ButtonComponent";
import StoryComponent from "../Components/StoryComponent";

const ProfileScreen = () =>{
    const user = useSelector(state => state.user);
    return(
        <View>
            <UserPictureAndFollows user= {user}></UserPictureAndFollows>
            <UserInfo user= {user}/>
            <ButtonComponent buttonName={'Editar Perfil'}></ButtonComponent>
            <StoryComponent></StoryComponent>
        </View>
    )
}


export default ProfileScreen;