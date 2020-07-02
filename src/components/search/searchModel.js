
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    Modal,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground,
    Animated
} from 'react-native';
import Style from "./searchStyle"

export default class SearchModel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0,
            request: true
        };
    }

    render() {

        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.state.request}
                onRequestClose={() => {
                    this.setState({ request: false })
                }}
            >
                <View>
                    <Text>asd</Text>
                </View>
            </Modal>
        );
    }
}
