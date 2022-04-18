import React from "react";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { View, Text, StyleSheet} from "react-native";
import { useSelector } from 'react-redux'


const ProfileHeader = ()=>{
    //Seleccionamos el redux
    const user = useSelector(state => state.user)
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{user.username}</Text>
            <View style={{flexDirection: 'row'}}>
                <MaterialIcons name="add-box" size={30} color="black" />
                <Ionicons name="menu" size={30} color="black" style={{marginLeft:12}} />                  
            </View>

        </View>
    );
}
/**
 * Estilos
 */
const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "space-between"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold",
    }
});
export default ProfileHeader;