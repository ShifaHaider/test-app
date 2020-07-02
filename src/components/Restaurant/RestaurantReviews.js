
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import About, { Review } from './AboutAndReviews';

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground,
    Animated
} from 'react-native';
import Style from "./Style"
import List from "./List"
export default class RestaurantReviews extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0
        };
    }

    render() {

        return (
            <View>

                <ScrollView
                    scrollEventThrottle={16}
                    onScroll={event => {
                        let a = event.nativeEvent.contentOffset.y;
                        this.setState({ yOffset: a })
                        console.log(a)
                    }}
                >

                    <ImageBackground
                        style={{ height: 250 }}
                        resizeMode="cover"
                        // resizeMode="contain"
                        source={require('../../assets/Images/image1.png')}>
                        <View >

                            <Back color="red" props={this.props} />
                        </View>

                    </ImageBackground >
                    <View style={{
                        height: 60, backgroundColor: "#fff", borderTopRightRadius: 50,
                        borderTopLeftRadius: 50, marginTop: -25,
                    }}>
                        <View style={{ marginTop: -15, padding: 10, alignItems: "center", borderRadius: 10, backgroundColor: "#f3525c", width: "80%", alignSelf: "center", }}>
                            <Text style={{ color: "#fff", fontSize: 20 }}>SUBWAY - DISCO</Text>
                            <View style={{ alignItems: "center", flexDirection: "row" }}>
                                <Icon name="star" style={{ color: "#fff", fontSize: 20 }} />
                                <Text style={{ color: "#fff", }}> 4.5 (2k+) </Text>
                                <Text style={{ color: "#fff" }}> 20+  Reviews </Text>
                            </View>
                        </View>
                    </View>




                    <View style={{ width: "100%", backgroundColor: "#fff" }}>
                        {/* <NavigationContainer> */}
                            <Tab />
                        {/* </NavigationContainer> */}
                    </View>

                </ScrollView>

            </View >
        );
    }
}

class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }


    render() {
        const Tab = createMaterialTopTabNavigator();
        // const {navigate} = this.props.navigation;


        return (
            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    tabBarOptions={{
                        // scrollEnabled: true,
                        indicatorStyle: { backgroundColor: '#f3525c' },
                        activeTintColor: "#f3525c",
                        inactiveTintColor: "#f3525c",
                        labelStyle: { fontSize: 16, paddingTop: 5, justifyContent: "space-around", },
                        tabStyle: { justifyContent: "space-around" },
                        style: { height: 50, marginVertical: 5, backgroundColor: "#f9f9f9", },
                    }}

                >
                    <Tab.Screen name="About Subways" component={About}

                    />


                    <Tab.Screen name="Reviews" component={Review} />
                </Tab.Navigator>
            </View>
        );
    }
}


