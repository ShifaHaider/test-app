import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    Text,
    View,
    TextInput, Image,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native';
import RoutesKey from '../navigation/routeskey';

export class Heart extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <View style={{
                position: "absolute", top: 20, right: 10,
                marginRight: 10,
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "space-around", alignItems: "center",
                flexDirection: "row",
                // paddingHorizontal: 5

            }}>
                <TouchableOpacity
                    activeOpacity={1}
                    style={{ marginRight: 20 }}
                    onPress={this.props.function}>

                    <Icon name="heart-o" style={{ color: "#fff", fontSize: 20 }} />

                </TouchableOpacity>
                <TouchableOpacity
                    activeOpacity={1}

                    onPress={this.props.function}>
                    <Icon name="info" style={{ color: "#fff", fontSize: 20 }} />
                </TouchableOpacity>
            </View>
        );
    }
}
export class Back extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={[{
                    marginTop: 30,
                    position: "absolute", top: 20, left: 10,
                    width: 30, marginRight: 15, marginLeft: 15,
                    height: 30, alignSelf: "center",
                    borderRadius: 30 / 2,
                    alignItems: "center",
                    justifyContent: "center", alignItems: "center"
                }, this.props.color ? { backgroundColor: "#f3525c" } : { backgroundColor: "#ffa5ab" }]}
                onPress={() => this.props.props.navigation.goBack()}>

                <Image
                    style={{
                        width: 20,
                        height: 20,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        position: "absolute", right: 5
                    }}
                    source={require('../assets/Images/back.png')}
                />
            </TouchableOpacity>
        );
    }
}

class Button extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <TouchableOpacity
                activeOpacity={1}
                style={styles.ButtonStyle}
                onPress={this.props.function}>
                <Text style={{ color: '#fff' }}>{this.props.title}</Text>

                <Image
                    style={{
                        width: 40,
                        height: 40,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                        position: "absolute", right: 5
                    }}
                    source={require('../assets/Images/right-arrow.png')}
                />
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    button: {
        flexDirection: 'column',
        flex: 10,
        paddingBottom: 10,
    },

    ButtonStyle: {
        backgroundColor: '#393939',
        width: '70%',
        alignItems: 'center',
        color: 'blue',
        borderRadius: 50,
        alignSelf: 'center',
        marginVertical: 10,
        justifyContent: 'center',
        paddingVertical: 15,
    },

});

export default Button;
