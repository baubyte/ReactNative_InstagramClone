import { ScrollView,View, Text } from "react-native";
import { useSelector } from "react-redux";
import UserPictureAndFollows from "../Components/UserPictureAndFollows";
import UserInfo from "../Components/UserInfo";
import ButtonComponent from "../Components/ButtonComponent";
import StoryComponent from "../Components/StoryComponent";
import UserPostProfile from "../Components/UserPostProfile";


const ProfileScreen = () =>{
    const user = useSelector(state => state.user);
    return(
        <ScrollView style ={{backgroundColor: '#fff', flex: 1}}>
            <UserPictureAndFollows user= {user}></UserPictureAndFollows>
            <UserInfo user= {user}/>
            <ButtonComponent buttonName={'Editar Perfil'}></ButtonComponent>
            <StoryComponent></StoryComponent>
            <UserPostProfile></UserPostProfile>
        </ScrollView>
    )
}


export default ProfileScreen;