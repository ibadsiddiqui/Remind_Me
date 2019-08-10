import React from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from '../../redux/dispatchers';
import { View, Text, Dimensions, TextInput } from 'react-native'
import Colors, { renderColoredCircle, coloredCategoryButton } from '../../constants/Colors';
import HeaderForTaskDetails from '../../components/EditTask/header';
import Layout from '../../constants/Layout';
const { height, width } = Dimensions.get('window');
import { Label, Item, Content, Textarea, Form } from "native-base";
import ThemeButton from '../../components/General/ThemeButton';
class EditTaskScreen extends React.Component {
    render() {
        const item = this.props.navigation.getParam("itemDetails", "").item;
        return (
            <View style={styles.container}>
                <HeaderForTaskDetails {...this.props} />
                <View style={{ flex: 0.25, flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View style={[Layout.tableCell, { flex: 0.6 }]}>
                        <Text style={{ fontSize: 17, fontFamily: "rubik-medium" }}>Created on: </Text>
                    </View>
                    <View style={[Layout.tableCell, { flex: 1.6, alignItems: 'flex-start', paddingTop: 2, alignSelf: 'flex-start' }]}>
                        <Text style={{ textAlign: 'left', fontFamily: "rubik-regular" }}>{item.taskDate}</Text>
                    </View>
                </View>
                <View style={{ flex: 0.25, flexDirection: 'row', paddingHorizontal: 10 }}>
                    <View style={[Layout.tableCell, { flex: 0.6 }]}>
                        <Text style={{ fontSize: 17, fontFamily: "rubik-medium", paddingTop: 5 }}>Category: </Text>
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <View style={[Layout.tableCell, {
                            flex: 1.6,
                            alignSelf: 'flex-start',
                            justifyContent: 'center',
                            backgroundColor: coloredCategoryButton(item.taskFlag).backgroundColor,
                            width: 70,
                            height: 40,
                            borderRadius: 5
                        }]}>
                            <Text style={{
                                textAlign: 'center',
                                fontFamily: "rubik-regular",
                                fontSize: 16,
                                color: Colors.white
                            }}>{item.taskFlag}</Text>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 2 }}>
                    <Content padder>
                        <Form>
                            <Label>Description:</Label>
                            <Textarea rowSpan={8} bordered
                                returnKeyType="done"
                                value={item.taskDescription}
                                style={{ borderRadius: 10, elevation: 2, padding: 10, fontFamily: "rubik-regular" }}
                                placeholder="Enter here..." />
                        </Form>
                    </Content>
                </View>
                <ThemeButton btnContainerStyle={{ marginTop: -30, margniBottom: 0, flex: 1.5 }}
                    onPress={() => { }} title="Update" />
                <View style={{ flex: 0.25 }} />
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