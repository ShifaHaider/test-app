import React, { Component } from 'react';

import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
} from '@react-navigation/drawer';
import { View, Image, StyleSheet, Text, TouchableOpacity, Share } from "react-native"
import RoutesKey from './routeskey';
import Global from "../utils/global"
import Constant from "../utils/constant"
// import Advertiser from '../components/admin/Advertiser';
const LogOut = (props) => {
    // Global.removeStorage(Constant.USER_DATA_KEY)
    // console.log("PROPS", props)

    props.navigation.navigate(RoutesKey.LOGIN)
}
// const navigation = useNavigation();
// import { TouchableOpacity } from 'react-native-gesture-handler';



class CustomDrawerContent extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const loginData = [
            {
                name: "Dashboard",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.DASHBOARD
            },
            {
                name: "Driver Accounts",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.ACCOUNT
            },
            {
                name: "Get Reports",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.REPORT
            },
            {
                name: "Help",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.HELP
            },
            {
                name: "Advertisers",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.ADVERTISER
            }]


        const Advertisers = [
            {
                name: "Profile",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.PROFILE
            },
            {
                name: "Ads and Areas",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.MY_ADD
            },
            {
                name: "Settings",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.SETTING
            },
            {
                name: "Rate App",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.RATE
            },
            {
                name: "Terms And Condition",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.ADVERTISER
            },
        ]


        const Driver = [
            {
                name: "Profile",
                icon: require("../assets/Images/home.png"),
                key: RoutesKey.PROFILE
            },
            {
                name: "My Bus Stops",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.USER_MY_BUS_STOP
            },
            {
                name: "Settings",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.SETTING
            },
            {
                name: "Rate App",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.RATE
            },
            {
                name: "Terms And Condition",
                icon: require("../assets/Images/logo.png"),
                key: RoutesKey.TERMS_AND_CONDITION
            },
        ]



        let data = []
  

    }

    render() {
        const { data } = this.state

        return (
            <DrawerContentScrollView {...this.props}



                style={{ flex: 1, padding: 20, backgroundColor: "#393939", }}
            >

                {/* <DrawerItemList {...props} /> */}
                <View style={{ flex: 1 }}>
                    <View style={styles.MainContainer}>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PROFILE)} style={styles.RoundImage}>
                            <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/01/2_img.png' }}
                                style={{ width: 50, height: 50, borderRadius: 150 / 2 }} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PROFILE)} style={styles.NameAndRole}>
                            <Text style={styles.Namee}>Jomes Doen</Text>
                            <Text style={styles.Rolee}>jamesdoen@gmail.com</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={{ flex: 1 }}>

                    {/* <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.USER_DETAIL, { namwe: "check" })} style={styles.Link} >
                            <Image source={require("../assets/Images/logo.png")}
                            style={{ width: 20, height: 20, }} />
                            <Text style={styles.LinkName}>{"Profile"}</Text>
                        </TouchableOpacity> */}
                    {[
                        {
                            name: "Home",
                            icon: require("../assets/Images/drawer/home.png"),
                            key: RoutesKey.HOME
                        },
                        {
                            name: "Profile",
                            icon: require("../assets/Images/drawer/profile.png"),
                            key: RoutesKey.PROFILE
                        },
                        {
                            name: "My Orders",
                            icon: require("../assets/Images/drawer/order.png"),
                            key: RoutesKey.ORDER
                        },
                        {
                            name: "My Favourities",
                            icon: require("../assets/Images/drawer/menu_fav.png"),
                            key: RoutesKey.MY_FAVOURIT
                        },
                        {
                            name: "Contact Us",
                            icon: require("../assets/Images/drawer/contactus.png"),
                            key: RoutesKey.CONTACT_US
                        },
                        {
                            name: "Notification",
                            icon: require("../assets/Images/drawer/notification.png"),
                            key: RoutesKey.NOTIFICATION
                        },
                        {
                            name: "About the app",
                            icon: require("../assets/Images/drawer/about.png"),
                            key: RoutesKey.ABOUT
                        },
                        {
                            name: "My Cart",
                            icon: require("../assets/Images/drawer/cart.png"),
                            key: RoutesKey.MY_CART
                        },

                    ].map(v =>

                        <TouchableOpacity style={[styles.Link, { marginVertical: 5 }, v.name == "Home" ? { backgroundColor: "#f3525c" } : {}]} onPress={() => this.props.navigation.navigate(v.key)}>
                            <Image source={v.icon}
                                style={{ width: 20, height: 20, }} />

                            <Text style={[styles.LinkName]}>{v.name}</Text>
                        </TouchableOpacity>)}

                </View>


                <TouchableOpacity onPress={() => {
                    Share.share({
                        message: 'Share All Out',
                        url: '#',
                        title: 'All Out'
                    }, {
                        // Android only:
                        dialogTitle: 'Share Us',
                        // iOS only:
                        excludedActivityTypes: [
                            'com.apple.UIKit.activity.PostToTwitter'
                        ]
                    })
                }} style={styles.LinkLogout} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/Images/drawer/share.png")}
                            style={{ width: 20, height: 20 }} />

                        <Text style={styles.LinkName}>{"Share with friends"}</Text>
                    </View>
                </TouchableOpacity>


                <TouchableOpacity onPress={() => LogOut(this.props)} style={[styles.LinkLogout, { marginTop: 20 }]} >
                    <View style={{ flexDirection: "row" }}>
                        <Image source={require("../assets/Images/drawer/logout.png")}
                            style={{ width: 20, height: 20, }} />

                        <Text style={styles.LinkName}>{"Logout"}</Text>
                    </View>
                </TouchableOpacity>




            </DrawerContentScrollView >
        );
    }
}
export default CustomDrawerContent

const styles = StyleSheet.create(
    {
        MainContainer:
        {
            // backgroundColor: "yellow",
            flex: 1,
            flexDirection: "row",
            justifyContent: 'center',
            alignItems: 'center',

            // margin: 5,
            paddingBottom: 20,
            marginTop: 30,
            paddingTop: (Platform.OS === 'ios') ? 20 : 0,
            // borderBottomWidth: 1 / 2,
            // borderBottomColor: "gray"

        },
        RoundImage: {
            // backgroundColor: "pink"
        },
        NameAndRole: {
            // backgroundColor: "blue",
            flex: 1,
            paddingHorizontal: 6

        },
        Namee: {
            fontWeight: "bold",
            // fontSize:30,
            // backgroundColor:"pink",
            color: "white"
        },
        Rolee: {
            fontWeight: "100",
            fontSize: 10,
            color: "white",
            opacity: 0.7

        },
        Link: {
            // flex:1,
            flexDirection: "row",
            // backgroundColor: "yellow",
            marginTop: 10,
            paddingVertical: 10,
            borderRadius: 50,
            paddingHorizontal: 20,

        },
        LinkLogout: {
            flex: 1,
            paddingHorizontal: 20,

            flexDirection: "column",
            // backgroundColor: "yellow",
            marginTop: 10,
            paddingVertical: 10,
            justifyContent: "flex-end",
            // alignItems:"flex-end",
            // alignSelf: "flex-end"
        },
        LinkName: {
            paddingHorizontal: 10,
            fontSize: 12,
            textAlignVertical: "center",
            color: "white",
            fontWeight: "normal",
            fontFamily: "Poppins-Regular",
            

        }

    });