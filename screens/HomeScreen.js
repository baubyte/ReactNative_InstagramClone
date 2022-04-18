import React, {useEffect, useState} from "react";
import { View, Text } from "react-native";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from '../redux/slices/userSlice';



const HomeScreen = () =>{
    /**
     * Poner datos en el storage
     */
    const dispatch = useDispatch();
    /**
     * Usar datos en el storage
     */
    const user = useSelector(state => state.user);
    /**
     * Cuando se carga la aplicación
     */
    useEffect(() => {
        getUser();
      }, []);

    /**
     * Obtener el usuario
     */
    const getUser = async () => {
        /**
         * Datos del usuario
         */
        const user = await axios.get('https://randomuser.me/api/');
        /**
         * Nuevo usuario
         */
        const newUser = {
          username: user.data.results[0].login.username,
          profilePicture: user.data.results[0].picture.large,
        }
        /**
         * Usar los reducer del slice
         */
        dispatch(setUser(newUser));
      }
    return(
        <View>
            <Text>
                Home Screen
            </Text>
            <Text>
                {user.username}
            </Text>
        </View>
    )
}


export default HomeScreen;