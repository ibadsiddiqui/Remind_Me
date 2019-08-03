import { Dimensions } from 'react-native';
import Colors, { renderColoredCircle } from '../../../constants/Colors';
import Layout from '../../../constants/Layout';

const { width } = Dimensions.get('window')

const styles = {
    container: { flex: 1, marginTop: 16 },
    iconContainer: { ...Layout.tableCell, justifyContent: 'center', flex: 0.1 },
    timeDateContainer: { ...Layout.tableCell, justifyContent: 'center', flex: 0.3 },
    timeDateTxt: { fontSize: 12, color: Colors.inactiveTintColor, fontFamily: "rubik-regular" },
    headingTxt: (status) => {
        return {
            fontSize: 14.5,
            fontFamily: "rubik-medium",
            color: status ? Colors.inactiveTintColor : Colors.headingColor,
            textDecorationLine: status ? 'line-through' : 'none'
        }
    },
    styledRow: (flag) => {
        return {
            width: width * 0.9,
            height: 55.21,
            paddingTop: 5,
            borderWidth: 0.5,
            borderLeftWidth: 5,
            borderLeftColor: renderColoredCircle(flag).backgroundColor,
            borderTopColor: Colors.transparent,
            borderBottomColor: Colors.transparent,
            borderRightColor: Colors.transparent,
            elevation: 2,
            paddingHorizontal: 10,
            borderRadius: 5,
            marginBottom: 2.5,
            alignSelf: 'center',
        }
    }
}

export default styles;