import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
import { View, Text, Dimensions, TextInput } from 'react-native'
import { renderColoredCircle } from '../../constants/Colors';
import HeaderForTaskDetails from '../../components/EditTask/header';
import Layout from '../../constants/Layout';
const { height, width } = Dimensions.get('window');
import { Label, Item, Content, Textarea, Form } from "native-base";
class EditTaskScreen extends React.Component {
    render() {
        const item = this.props.navigation.getParam("itemDetails", "").item;
        console.log("item.taskFlag ", item.taskFlag);

        return (
            <View style={styles.container}>
                <HeaderForTaskDetails {...this.props} />
                <View style={{ flex: 0.25, flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View style={[Layout.tableCell, { flex: 0.4 }]}>
                        <Text>Created on: </Text>
                    </View>
                    <View style={[Layout.tableCell, { flex: 1.6, alignItems: 'flex-start', alignSelf: 'flex-start' }]}>
                        <Text style={{ textAlign: 'left' }}>{item.taskDate}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.25, flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View style={[Layout.tableCell, { flex: 0.4 }]}>
                        <Text>Category: </Text>
                    </View>
                    <View style={[Layout.tableCell, { flex: 0.2, alignItems: 'center', marginVertical: 2 }]}>
                        <View style={[renderColoredCircle(item.taskFlag), { width: 15, height: 15 }]} />
                    </View>
                    <View style={[Layout.tableCell, { flex: 1.6, alignItems: 'flex-start', alignSelf: 'flex-start' }]}>
                        <Text style={{ textAlign: 'left' }}>{item.taskFlag}</Text>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Content padder>
                        <Form>
                            <Label>Description:</Label>
                            <Textarea rowSpan={8}
                            style={{borderRadius:10}}
                                bordered
                                value={item.taskDescription}
                                placeholder="Enter here..."  />
                        </Form>
                    </Content>
                </View>
                <View style={{ flex: 2.25 }} />
            </View >
        );
    }
}

EditTaskScreen.propTypes = {

};

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(EditTaskScreen);