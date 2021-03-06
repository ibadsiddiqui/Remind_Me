import React from 'react';
import { Text, View } from 'react-native';
import Categories from '../../../constants/CategoryTabs';
import Tab from './Tab';

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
                {firstRow.map((item, key) => <Tab key={key} item={item} {...props} />)}
            </View>
            <View style={styles.rowContainer}>
                {secondRow.map((item, key) => <Tab key={key} item={item} {...props} />)}
            </View>
            <View style={styles.rowContainer}>
                {thirdRow.map((item, key) => <Tab key={key} item={item} {...props} />)}
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