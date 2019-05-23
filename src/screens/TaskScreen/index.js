import React, { Component } from 'react';
import { View, Text, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import Header from '../../components/Home/Header';
import Images from '../../assets/images';

const { height } = Dimensions.get('window')

export default class TaskScreen extends Component {
    constructor() {
        super();
        this.state = {
            firstRow: ['Personal', "Work"],
            secondRow: ["Meeting", "Shopping"],
            thirdRow: ["Party", "Study"]
        }
    }

    conditionForRowImages = (category: string) => {
        switch (category) {
            case "Personal":
                return Images.listOfTasks.personal;
            case "Work":
                return Images.listOfTasks.work;
            case "Meeting":
                return Images.listOfTasks.meeting;
            case "Shopping":
                return Images.listOfTasks.shopping;
            case "Party":
                return Images.listOfTasks.party;
            case "Study":
                return Images.listOfTasks.study;
            default:
                break;
        }
    }

    conditionForCategoryImageContainerStyle = (category: string) => {
        const style = {
            width: 70,
            height: 70,
            borderRadius: 50,
            alignItems: 'center',
            justifyContent: 'center'
        }
        switch (category) {
            case "Personal":
                return {
                    ...style,
                    backgroundColor: "rgba(255,238,155,0.36)",
                };
            case "Work":
                return {
                    ...style,
                    backgroundColor: "rgba(181,255,155,0.36)",
                };
            case "Meeting":
                return {
                    ...style,
                    backgroundColor: "rgba(255,155,205,0.36)"
                };
            case "Shopping":
                return {
                    ...style,
                    backgroundColor: "rgba(255,208,155,0.36)"
                };
            case "Party":
                return {
                    ...style,
                    backgroundColor: "rgba(155,255,248,0.36)",
                };
            case "Study":
                return {
                    ...style,
                    backgroundColor: "rgba(245,155,255,0.36)"
                };
            default:
                break;
        }
    }

    render() {
        const { firstRow, secondRow, thirdRow } = this.state
        return (
            <View style={styles.container}>
                <Header />
                <View style={{ flex: 5 }}>

                    <ScrollView contentContainerStyle={styles.contentContainer}>
                        <View style={styles.gridContainer}>
                            <View style={styles.headingTopContainer}>
                                <View style={styles.headingContainer}>
                                    <Text style={styles.headingCategory}>Category</Text>
                                </View>
                            </View>
                            <View style={styles.rowContainer}>
                                {firstRow.map((item, key) =>
                                    <View style={styles.insideRowContainer}>
                                        <TouchableOpacity style={styles.categoryBtn}>
                                            <View style={styles.btnContainer}>
                                                <View style={this.conditionForCategoryImageContainerStyle(item)}>
                                                    <Image source={this.conditionForRowImages(item)} style={styles.btnIcon} />
                                                </View>
                                                <Text style={styles.btnText}>{item}</Text>
                                                <Text style={styles.headingNumberOfTask}>24 Task</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                            <View style={styles.rowContainer}>
                                {secondRow.map((item, key) =>
                                    <View style={styles.insideRowContainer}>
                                        <TouchableOpacity style={styles.categoryBtn}>
                                            <View style={styles.btnContainer}>
                                                <View style={this.conditionForCategoryImageContainerStyle(item)}>
                                                    <Image source={this.conditionForRowImages(item)} style={styles.btnIcon} />
                                                </View>
                                                <Text style={styles.btnText}>{item}</Text>
                                                <Text style={styles.headingNumberOfTask}>24 Task</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                            <View style={styles.rowContainer}>
                                {thirdRow.map((item, key) =>
                                    <View style={styles.insideRowContainer}>
                                        <TouchableOpacity style={styles.categoryBtn}>
                                            <View style={styles.btnContainer}>
                                                <View style={this.conditionForCategoryImageContainerStyle(item)}>
                                                    <Image source={this.conditionForRowImages(item)} style={styles.btnIcon} />
                                                </View>
                                                <Text style={styles.btnText}>{item}</Text>
                                                <Text style={styles.headingNumberOfTask}>24 Task</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                )}
                            </View>
                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const styles = {
    contentContainer: {
        height: height 
    },
    container: {
        flex: 1,
        justifyContent: 'center',
    },
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
        marginTop: 5
    },
    rowContainer: {
        flex: 1.8,
        alignSelf: 'stretch',
        flexDirection: 'row',
        marginVertical: 7.5,
    },

    insideRowContainer: {
        flex: 1.8,
        alignSelf: 'stretch',
        justifyContent: 'center',
        marginHorizontal: 7,
        // shadowColor: '#000',
        // shadowOffset: {width: 0, height: 2 },
        elevation: 1,
        borderRadius: 10,
        // borderColor: "transparent",
    },

    categoryBtn: {
        justifyContent: 'center',
        alignSelf: 'center',
        width: 159,
        height: 180,
    },
    btnContainer: {
        alignItems: 'center'
    },
    btnIcon: {
        width: 35,
        height: 42
    },
    btnText: {
        fontSize: 18,
        fontFamily: "rubik-medium",
        color: "#686868",
    },
    headingNumberOfTask: {
        color: "#A1A1A1",
        fontFamily: "rubik-regular",
        fontSize: 12,
        marginTop:5
    }
}