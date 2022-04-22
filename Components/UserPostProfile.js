import React from "react";
import { View, Image, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import { FakeDataPicture } from '../FakeDataPicture'

const UserPostProfile = (props) => {

    const Story = (props) => {
        return(
            <TouchableOpacity style={{}}>
                <View>
                    <Image source={{uri: props.image}} style={styles.image}/>
                </View>
            </TouchableOpacity>
        )
    }

    return(
        <View>
            <FlatList
                data={FakeDataPicture}
                renderItem={({item}) => <Story image={item.url} name={item.name}/>}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false}
                numColumns = {3}
                scrollEnabled={false} 
            />
        </View>
    )
}
export default UserPostProfile;

const styles = StyleSheet.create({
    image: {
        width: 130,
        height: 130,
    },
    text: {
        textAlign: 'center',
    }
})