import React from 'react';
import { Text, View } from 'react-native';
import Categories from '../../../constants/CategoryTabs';
import { tabMappers } from '../../../helpers/listHelpers';

const GridView = (props) => {
    const { firstRow, secondRow, thirdRow } = Categories
    return (
        <View style={styles.gridContainer}>
            <View style={styles.headingTopContainer}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headingCategory}>Category</Text>
                </View>
            </View>
            <View style={styles.rowContainer}>
                {tabMappers(firstRow, props)}
            </View>
            <View style={styles.rowContainer}>
                {tabMappers(secondRow, props)}
            </View>
            <View style={styles.rowContainer}>
                {tabMappers(thirdRow, props)}
            </View>
        </View>
    )
}

const styles = {
    gridContainer: {
        flex: 3.5,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 5
    },
    headingTopContainer: {
        flex: 0.2,
        alignSelf: 'stretch',
        flexDirection: 'row'
    },
    headingContainer: {
        flex: 1,
        alignSelf: 'stretch'
    },
    headingCategory: {
        fontSize: 13,
        fontFamily: "rubik-medium",
        color: "#8B87B3",
        marginHorizontal: 10,
        marginTop: 10
    },
    rowContainer: {
        flex: 1.8,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginVertical: 7.5,
    },
}

export default GridView;