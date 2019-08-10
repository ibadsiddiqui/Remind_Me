import { FontAwesome } from "@expo/vector-icons";
import React from 'react';
import { Dimensions, Image, Text, TouchableOpacity, View } from 'react-native';
import Images from '../../../assets/images';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';
import { profileImagePicker } from "../../../helpers/pickerhelpers";
const { width } = Dimensions.get('window');

const HeaderForTaskDetails = (props) => {
    const { header } = Images.Dashboard;
    const { profileImage } = props;
    return (
        <View style={[Layout.tableRow]}>
            <Image source={header} style={{ width, position: 'absolute' }} />
            <View style={[Layout.tableCell, { paddingHorizontal: 10, marginTop: width * 0.15 }]}>
                <Text style={styles.greeting}>Task Details</Text>
            </View>
            <View style={[Layout.tableCell, { alignItems: 'flex-end' }]}>
                <TouchableOpacity onPress={() => profileImagePicker(props)}
                    style={styles.userIconContainer}
                >
                    {
                        (profileImage !== "" && typeof profileImage !== "undefined") ?
                            <Image source={{ uri: profileImage }} style={Layout.profileImage} />
                            : <FontAwesome name="user-circle-o" size={40} color="white" />
                    }
                </TouchableOpacity>
            </View>
        </View >
    )
};

const styles = {
    centered: {
        alignSelf: 'center'
    },
    userIconContainer: {
        alignItems: 'flex-end',
        marginTop: width * 0.12,
        marginRight: 15,
        width: 45,
        height: 45,
    },
    headerContainer: {
        justifyContent: 'center',
        top: 50
    },
    greeting: {
        fontFamily: "rubik-medium",
        fontSize: 17,
        color: Colors.white,
    },
    headerImage: {
        flex: 1,
        width: width,
        height: 106,
    },
    rowView: {
        flexDirection: 'row',
        paddingHorizontal: 20,
    },
    taskStatus: {
        fontFamily: "rubik-regular",
        fontSize: 12,
        color: Colors.white,
    },
};

export default HeaderForTaskDetails;