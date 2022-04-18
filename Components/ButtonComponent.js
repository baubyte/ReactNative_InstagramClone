import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";


ButtonComponent = (props) => {

    return (
        <TouchableOpacity style={styles.button}>
            <Text style={styles.text} >{props.buttonName}</Text>
        </TouchableOpacity>
    );
}
export default ButtonComponent;

const styles = StyleSheet.create({
    button: {
        borderWidth: 1,
        borderColor: 'gray',
        height: 30,
        borderRadius: 5,
        marginHorizontal: 15,
        justifyContent: 'center',
    },
    text: {
        fontWeight: 'bold',
        textAlign: 'center',
    }
});