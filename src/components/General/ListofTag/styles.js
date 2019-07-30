import { Dimensions } from 'react-native';
import Colors from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

const { width } = Dimensions.get('window')
const { transparent, personalFlag, meetingFlag, partyFlag, shoppingFlag, studyFlag, workFlag } = Colors;

const styles = {
    container: {
        width: width * 0.95,
        borderWidth: 1,
        borderColor: Colors.transparent,
        borderBottomColor: Colors.inputBorders,
        paddingVertical: 2.5,
        height: 100,
    },
    cancelBtnContainer: {
        flex: 1,
        alignSelf: 'center',
        alignItems: 'center'
    },
    personalBtn: (condition) => {
        return {
            height: 40,
            alignSelf: 'center',
            backgroundColor: condition ? transparent : personalFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    workBtn: (condition) => {
        return {
            height: 40,
            alignSelf: 'center',
            backgroundColor: condition ? transparent : workFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    meetingBtn: (condition) => {
        return {
            height: 40,
            alignSelf: 'center',
            backgroundColor: condition ? transparent : meetingFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    studyBtn: (condition) => {
        return {
            height: 40,
            alignSelf: 'center',
            backgroundColor: condition ? transparent : studyFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    shoppingBtn: (condition) => {
        return {
            height: 40,
            alignSelf: 'center',
            backgroundColor: condition ? transparent : shoppingFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    partyBtn: (condition) => {
        return {
            height: 40,
            alignSelf: 'center',
            backgroundColor: condition ? transparent : partyFlag,
            ...Layout.centered,
            borderRadius: 5
        }
    },
    reminderTypeContainer: {
        marginHorizontal: 10,
        padding: 5,
        flexDirection: 'row',
    },
    reminderTypeText: (notFocused) => {
        return {
            fontFamily: "rubik-regular",
            fontSize: 17.5,
            color: notFocused ? "#8E8E8E" : Colors.white,
        }
    },
}
export default styles;