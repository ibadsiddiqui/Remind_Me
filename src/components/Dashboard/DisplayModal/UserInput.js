import React from 'react'
import { View, Dimensions, TextInput } from 'react-native';

const { width, height } = Dimensions.get('window')
const UserInput = (props) => {
    const { setTaskDescription } = props;
    return (
        <View style={styles.container}>
            <View style={styles.textInputContainer}>
                <TextInput style={styles.textInput}
                    placeholder="Enter task here"
                    onChangeText={(text) => setTaskDescription(text)}
                />
            </View>
        </View>
    )
}
const styles = {
    container: {
        flex: 1,
        alignSelf: 'flex-start',
        flexDirection: 'row'
    },
    textInputContainer: {
        flex: 1,
        alignSelf: 'flex-start',
        alignItems: 'center'
    },
    textInput: {
        width: width * 0.95,
        height: height * 0.1,
        paddingBottom: 20,
        paddingHorizontal: 5,
        textDecorationLine: "none",
        fontSize: 32,
        fontFamily: "rubik-regular",
        borderWidth: 1,
        borderColor: "transparent",
        borderBottomColor: "#CFCFCF"
    },
}

export default UserInput;