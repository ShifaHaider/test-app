import React, { Component } from 'react'
import { Dimensions, Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import styles from "./homeStyle"
import HomeHeader from "./homeHeader"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from "react-native-vector-icons/Ionicons"
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons"
import Entypo from "react-native-vector-icons/Entypo"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import RoutesKey from "../../navigation/routeskey"
import moment from "moment"
import colors from '../../utils/colorConstant'
export default class EstimatedDeliverTime extends Component {

    constructor(props) {
        super(props)
        this.state = {
            visa: false,
            master: true,
            cash: false,
            day: true
        }
    }

    componentDidMount() {
        this.checkingTime()
    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }

    checkingTime() {
        console.log(moment().hour(), "hours")
        if (moment().hour() > 18 || moment().hour() < 12) {
            this.setState({ day: false })
            console.log("night")

            return true
        }
        else {
            this.setState({ day: true })
            console.log("day")
            return false
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />





                <View style={{ height: 100 }}>
                    {
                        this.state.day == false ? (
                            <Image
                                source={require("../../assets/Images/night-bg.png")}
                                style={{ width: "100%", height: 100 }} />
                        ) : (
                                <Image
                                    source={require("../../assets/Images/day-bg.png")}
                                    style={{ width: "100%", height: 100 }} />
                            )
                    }
                    <HomeHeader props={this.props} dayOrNight={this.state.day} keys={RoutesKey.MAP} />
                </View>



                <ScrollView vertical={true} style={{ backgroundColor: "#F0F0F0" }}>



                    <View style={{ flexDirection: "row", justifyContent: "center" }}>

                        {/* <ScrollView horizontal={true} > */}


                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.CATEGORIES) }} style={styles.smallBoxHead} >
                            <View style={styles.deliveryBox}>
                                <Image source={require("../../assets/Images/all-out-delivery.png")} />

                                <Text style={styles.topHeading}>All out</Text>
                                <Text style={styles.deliveryHeading}>Delivery</Text>

                                <View style={styles.borderBox}>

                                    <Text style={styles.orderHead}>
                                        Order Now
                                    </Text>
                                    <Image style={styles.orderIcon} source={require("../../assets/Images/arrow-circle-right.png")} />
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.CATEGORIES) }} style={styles.smallBoxHead}>
                            <View style={styles.deliveryBox}>

                                <Image source={require("../../assets/Images/home-made-delivery.png")} />


                                <Text style={styles.topHeading}>Home Made</Text>
                                <Text style={styles.deliveryHeading}>Delivery</Text>

                                <View style={styles.borderBox}>

                                    <Text style={styles.orderHead}>
                                        Order Now
                                    </Text>
                                    <Image style={styles.orderIcon} source={require("../../assets/Images/arrow-circle-right.png")} />
                                </View>

                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.CATEGORIES) }} style={[styles.smallBoxHead, { paddingRight: 0 }]}>
                            <View style={styles.deliveryBox}>
                                <Image source={require("../../assets/Images/groceries-delivery.png")} />

                                <Text style={styles.topHeading}>Groceries</Text>
                                <Text style={styles.deliveryHeading}>Delivery</Text>

                                <View style={styles.borderBox}>

                                    <Text style={styles.orderHead}>
                                        Order Now
                                    </Text>
                                    <Image style={styles.orderIcon} source={require("../../assets/Images/arrow-circle-right.png")} />
                                </View>

                            </View>
                        </TouchableOpacity>






                        {/* </ScrollView> */}

                    </View>



                    <View style={styles.nearHeadingView}>
                        <Text style={styles.nearText}>Near by Restaurent</Text>
                        <Text style={styles.viewAllText}> View all</Text>

                    </View>



                    <View>

                        <ScrollView horizontal={true} >



                            <View style={styles.offersHead}>
                                <Image
                                    source={require("../../assets/Images/pizza-hut.png")} style={styles.offerImage} />
                                <View style={styles.offerDetail}>
                                    <View>
                                        <Text style={styles.textRate}>Top Rated</Text>
                                        <Text style={styles.offerName}>Pizza Hut</Text>
                                        <Text style={styles.textRate}>Delivery at your doorsteps</Text>
                                    </View>
                                    <View style={styles.offerButton}>
                                        <Text style={styles.offerButtonText}>Order Now</Text>
                                    </View>
                                </View>
                            </View>

                            <View style={styles.offersHead}>
                                <Image
                                    source={require("../../assets/Images/pizza-hut.png")} style={styles.offerImage} />
                                <View style={styles.offerDetail}>
                                    <View>
                                        <Text style={styles.textRate}>Top Rated</Text>
                                        <Text style={styles.offerName}>Pizza Hut</Text>
                                        <Text style={styles.textRate}>Delivery at your doorsteps</Text>
                                    </View>
                                    <View style={styles.offerButton}>
                                        <Text style={styles.offerButtonText}>Order Now</Text>
                                    </View>
                                </View>
                            </View>


                            <View style={styles.offersHead}>
                                <Image
                                    source={require("../../assets/Images/pizza-hut.png")} style={styles.offerImage} />
                                <View style={styles.offerDetail}>
                                    <View>
                                        <Text style={styles.textRate}>Top Rated</Text>
                                        <Text style={styles.offerName}>Pizza Hut</Text>
                                        <Text style={styles.textRate}>Delivery at your doorsteps</Text>
                                    </View>
                                    <View style={styles.offerButton}>
                                        <Text style={styles.offerButtonText}>Order Now</Text>
                                    </View>
                                </View>
                            </View>



                        </ScrollView>
                    </View>





                    <View style={[styles.nearHeadingView, { marginTop: 20 }]}>
                        <Text style={styles.nearText}>Recommeded Items</Text>
                        <Text style={styles.viewAllText}> View all</Text>

                    </View>







                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.RESTAURANT) }} style={styles.recommedHead} style={styles.recommedHead}>
                        <ImageBackground
                            source={require("../../assets/Images/image1.png")} style={{ width: "100%", height: 180 }} resizeMethod="scale" >

                            <View style={{ position: "absolute", bottom: 40, left: 15, backgroundColor: colors.RED_THEME_COLOR }}>
                                <Text style={{ color: "white", fontSize: 12, padding: 5 }}>30 MIN</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 10, left: 15 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Subway - Disco</Text>
                            </View>
                        </ImageBackground>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 15, paddingLeft: 5, paddingRight: 5 }}>
                            <Text style={{ width: "80%", color: "gray" }} numberOfLines={1} >$$$, Fast Food, Allout Delivery, Super Discount,..</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/star.png")} style={{ alignSelf: "center" }} />
                                <Text>4.5(2k+)</Text>
                            </View>
                        </View>
                        <Text style={{ paddingLeft: 5, paddingRight: 5 }}>2.0 AED Delivery fee</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.RESTAURANT) }} style={styles.recommedHead} style={styles.recommedHead}>
                        <ImageBackground
                            source={require("../../assets/Images/image1.png")} style={{ width: "100%", height: 180 }} resizeMethod="scale" >

                            <View style={{ position: "absolute", bottom: 40, left: 15, backgroundColor: colors.RED_THEME_COLOR }}>
                                <Text style={{ color: "white", fontSize: 12, padding: 5 }}>30 MIN</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 10, left: 15 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Subway - Disco</Text>
                            </View>
                        </ImageBackground>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 15, paddingLeft: 5, paddingRight: 5 }}>
                            <Text style={{ width: "80%", color: "gray" }} numberOfLines={1} >$$$, Fast Food, Allout Delivery, Super Discount,..</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/star.png")} style={{ alignSelf: "center" }} />
                                <Text>4.5(2k+)</Text>
                            </View>
                        </View>
                        <Text style={{ paddingLeft: 5, paddingRight: 5 }}>2.0 AED Delivery fee</Text>
                    </TouchableOpacity>


                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.RESTAURANT) }} style={styles.recommedHead} style={styles.recommedHead}>
                        <ImageBackground
                            source={require("../../assets/Images/image1.png")} style={{ width: "100%", height: 180 }} resizeMethod="scale" >

                            <View style={{ position: "absolute", bottom: 40, left: 15, backgroundColor: colors.RED_THEME_COLOR }}>
                                <Text style={{ color: "white", fontSize: 12, padding: 5 }}>30 MIN</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 10, left: 15 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Subway - Disco</Text>
                            </View>
                        </ImageBackground>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 15, paddingLeft: 5, paddingRight: 5 }}>
                            <Text style={{ width: "80%", color: "gray" }} numberOfLines={1} >$$$, Fast Food, Allout Delivery, Super Discount,..</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/star.png")} style={{ alignSelf: "center" }} />
                                <Text>4.5(2k+)</Text>
                            </View>
                        </View>
                        <Text style={{ paddingLeft: 5, paddingRight: 5 }}>2.0 AED Delivery fee</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.RESTAURANT) }} style={styles.recommedHead} style={styles.recommedHead}>
                        <ImageBackground
                            source={require("../../assets/Images/image1.png")} style={{ width: "100%", height: 180 }} resizeMethod="scale" >

                            <View style={{ position: "absolute", bottom: 40, left: 15, backgroundColor: colors.RED_THEME_COLOR }}>
                                <Text style={{ color: "white", fontSize: 12, padding: 5 }}>30 MIN</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 10, left: 15 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Subway - Disco</Text>
                            </View>
                        </ImageBackground>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 15, paddingLeft: 5, paddingRight: 5 }}>
                            <Text style={{ width: "80%", color: "gray" }} numberOfLines={1} >$$$, Fast Food, Allout Delivery, Super Discount,..</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/star.png")} style={{ alignSelf: "center" }} />
                                <Text>4.5(2k+)</Text>
                            </View>
                        </View>
                        <Text style={{ paddingLeft: 5, paddingRight: 5 }}>2.0 AED Delivery fee</Text>
                    </TouchableOpacity>



                    <TouchableOpacity onPress={() => { this.props.navigation.navigate(RoutesKey.RESTAURANT) }} style={styles.recommedHead} style={styles.recommedHead}>
                        <ImageBackground
                            source={require("../../assets/Images/image1.png")} style={{ width: "100%", height: 180 }} resizeMethod="scale" >

                            <View style={{ position: "absolute", bottom: 40, left: 15, backgroundColor: colors.RED_THEME_COLOR }}>
                                <Text style={{ color: "white", fontSize: 12, padding: 5 }}>30 MIN</Text>
                            </View>
                            <View style={{ position: "absolute", bottom: 10, left: 15 }}>
                                <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>Subway - Disco</Text>
                            </View>
                        </ImageBackground>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", paddingTop: 15, paddingLeft: 5, paddingRight: 5 }}>
                            <Text style={{ width: "80%", color: "gray" }} numberOfLines={1} >$$$, Fast Food, Allout Delivery, Super Discount,..</Text>
                            <View style={{ flexDirection: "row" }}>
                                <Image source={require("../../assets/Images/star.png")} style={{ alignSelf: "center" }} />
                                <Text>4.5(2k+)</Text>
                            </View>
                        </View>
                        <Text style={{ paddingLeft: 5, paddingRight: 5 }}>2.0 AED Delivery fee</Text>
                    </TouchableOpacity>




                </ScrollView>















            </View >
        )
    }
}
