import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window')

const styles = {
    listContainer: { height: height * 0.8, width },
    dayHeadingContainer: { flex: 1, marginTop: 10 },
    dayHeadingText: {
        fontSize: 13,
        fontFamily: "rubik-medium",
        color: "#8B87B3",
        marginHorizontal: 10,
    }
}
export default styles;