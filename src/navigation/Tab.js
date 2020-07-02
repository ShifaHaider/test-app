import React, { Component } from 'react';
import {
    Button, Text, View, TouchableOpacity, Image, ImageBackground
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Routeskey from "../navigation/routeskey"
import Home from "../components/home/home"
import CustomerMoods from "../components/CustomerMoods/CustomerMoods"
import Order from "../components/Order/Order"
import Icon from 'react-native-vector-icons/FontAwesome';
import Mycart from "../components/cart/cart"
import Search from "../components/search/searchRestaurant"
import RoutesKey from '../navigation/routeskey';
import colors from '../utils/colorConstant';


function Second() {
    return (
        <View>
            <Text>Second</Text>
        </View>

    );
}

export default class Tab extends Component {
    constructor(props) {
        super(props);
        this.state = {
            params: ""

        };
    }


    render() {
        const Tab = createBottomTabNavigator();
        // const { navigate } = this.props.navigation;
        let params = this.props.route.params && this.props.route.params.params
        console.log("PROPS", this.props)


        return (
            <View style={{ flex: 1 }}>
                <Tab.Navigator
                    initialRouteName={this.state.params}

                    screenOptions={({ route }) => ({

                        tabBarIcon: ({ focused, }) => {
                            let iconName = ""

                            if (route.name === 'Home') {

                                iconName = focused
                                    ? require("../assets/Images/home-red.png")
                                    : require("../assets/Images/home.png")
                            }
                            else if (route.name === 'Moods') {

                                iconName = focused
                                    ? require("../assets/Images/mood-red.png")
                                    : require("../assets/Images/mood.png")
                            }
                            else if (route.name === 'Order') {

                                iconName = focused
                                    ? require("../assets/Images/order-red.png")
                                    : require("../assets/Images/order.png")
                            }
                            else if (route.name === 'My Cart') {

                                iconName = focused
                                    ? require("../assets/Images/cart-red.png")
                                    : require("../assets/Images/cart.png")
                            }
                            else {
                                iconName = 'home';
                            }

                            // You can return any component that you like here!
                            return <Image source={iconName} style={{ height: 25, width: 25 }} />

                        },
                    })}


                    tabBarOptions={{
                        activeTintColor: "#f3525c",
                        inactiveTintColor: "#fff",
                        allowFontScaling: true,
                        labelStyle: { fontSize: 12 },
                        tabStyle: { alignItems: "center" },
                        style: { height: 80, paddingBottom: 20, paddingTop: 10, backgroundColor: "#393939", paddingHorizontal: 15, borderTopColor: "#393939", },
                    }}
                >
                    <Tab.Screen name="Home" component={Home}

                    />
                    <Tab.Screen name="Moods" component={CustomerMoods} />



                    <Tab.Screen name="Settings"
                        options={{
                            tabBarButton: () => (<TouchableOpacity

                                activeOpacity={1}
                                onPress={() => {
                                    this.props.navigation.jumpTo("Settings")

                                }}
                                style={{
                                    marginTop: -25,
                                    height: 70,
                                    width: 70,

                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 5
                                    },
                                    shadowOpacity: 0.34,
                                    shadowRadius: 6.27,
                                    // position: "absolute",
                                    bottom: 15,
                                    overflow: "hidden",

                                }}>
                                <View style={{ width: 60, height: 60, alignItems: "center", justifyContent: "center", backgroundColor: colors.RED_THEME_COLOR, borderRadius: 50 }} >

                                    {/* <ImageBackground source={require("../assets/Images/Path6073.png")} style={{ width: 60, height: 60, alignItems: "center", justifyContent: "center" }}> */}

                                    {/* <Icon name="search" style={{ color: "#fff", fontSize: 32, fontWeight: "100", }} /> */}
                                    <Image source={require('../assets/Images/search-tab-icon.png')} style={{ height: 32, width: 32 }} />
                                </View>

                                {/* </ImageBackground> */}

                            </TouchableOpacity>),
                        }}
                        component={Search} />















                    {/* <Tab.Screen name="Settings"
                        options={{
                            tabBarButton: () => (<TouchableOpacity

                                activeOpacity={1}
                                onPress={() => { this.props.navigation.navigate(RoutesKey.SEARCH) }}
                                style={{
                                    marginTop: -30,
                                    height: 70,
                                    width: 70,
                                    borderRadius: 70 / 2,
                                    borderTopColor: "transparent",
                                    borderBottomColor: "#ededed",
                                    borderLeftColor: "#ededed",
                                    borderRightColor: "#ededed",
                                    borderBottomWidth: 8,
                                    borderTopWidth: 8,
                                    borderLeftWidth: 10,
                                    borderRightWidth: 8,
                                    backgroundColor: "#f3525c",
                                    // transform: [{ rotate: "180deg" }],
                                    alignSelf: "center",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 5
                                    },
                                    shadowOpacity: 0.34,
                                    shadowRadius: 6.27,
                                    // position: "absolute",
                                    bottom: 15,
                                    overflow: "hidden",

                                }}

                            >
                                <Icon name="search" style={{ color: "#fff", fontSize: 32 }} />

                            </TouchableOpacity>),
                        }}
                        component={Second} /> */}

                    <Tab.Screen name="Order" component={Order} />
                    <Tab.Screen name="My Cart" component={Mycart} />
                </Tab.Navigator>
            </View>
        );
    }
}