import React, { Component } from 'react';
import { MaterialIcons } from '@expo/vector-icons'
import { View, Text, FlatList, Dimensions } from 'react-native';
import NoTask from '../../components/Home/NoTask';
import Header from '../../components/Home/Header';
import { connect } from 'react-redux'
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
import Colors from '../../constants/Colors';
import Layout from '../../constants/Layout';
import { renderColoredCircle } from '../../components/General/ListofTag';

const { width, height } = Dimensions.get('window')

class HomeScreen extends Component {
    render() {

        return (
            <View style={styles.container}>
                <Header />
                {
                    this.props.TaskList.length !== 0 &&
                    <View style={{ flex: 1, marginTop: height * 0.195 }} />
                }
                {
                    this.props.TaskList.length === 0 ?
                        <NoTask /> :
                        <FlatList
                            style={{ height: height * 0.8, width }}
                            data={[...this.props.ListOfDaysSelected]}
                            renderItem={({ item, index }) =>
                                <View style={{ flex: 1, marginTop: 16 }} key={index}>
                                    <Text style={{
                                        fontSize: 13,
                                        fontFamily: "rubik-medium",
                                        color: "#8B87B3",
                                        marginHorizontal: 10,
                                    }}> {item}</Text>
                                    {
                                        this.props.TaskList.map((_item, _index) => {
                                            if (item !== _item.taskDate) return null
                                            else return (
                                                <View style={{ flex: 1, marginTop: 16 }} key={_index}>
                                                    <View style={{
                                                        width: width * 0.9,
                                                        height: 55.21,
                                                        paddingTop: 5,
                                                        borderWidth: 0.5,
                                                        borderLeftWidth: 5,
                                                        borderLeftColor: renderColoredCircle(_item.taskFlag).backgroundColor,
                                                        borderTopColor: Colors.transparent,
                                                        borderBottomColor: Colors.transparent,
                                                        borderRightColor: Colors.transparent,
                                                        elevation: 1,
                                                        paddingHorizontal: 10,
                                                        borderRadius: 5,
                                                        ...Layout.tableRow,
                                                        alignSelf: 'center',
                                                    }}>
                                                        <View style={[Layout.tableCell, { justifyContent: 'center', flex: 0.1 }]}>
                                                            <MaterialIcons name="radio-button-unchecked" color={Colors.uncheckedCirlce} size={20} />
                                                        </View>
                                                        <View style={[Layout.tableCell, { justifyContent: 'center', flex: 0.3 }]}>
                                                            <Text style={{ fontSize: 12, color: Colors.inactiveTintColor, fontFamily: "rubik-regular" }}>{_item.taskStartTime}</Text>
                                                        </View>
                                                        <View style={[Layout.tableCell, { justifyContent: 'center' }]}>
                                                            <Text style={{ fontSize: 14.5, fontFamily: "rubik-medium", color: Colors.headingColor }}>{_item.taskDescription}</Text>
                                                        </View>
                                                    </View>
                                                </View>
                                            )
                                        })
                                    }
                                </View>
                            }
                        />
                }
            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
    },
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)