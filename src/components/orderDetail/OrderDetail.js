
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Back } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground,
    StatusBar,
    Dimensions,
    Button
} from 'react-native';
import styles from "./orderStyles"
import RoutesKey from '../../navigation/routeskey';
import Colors from "../../utils/colorConstant"
export default class OrderDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
        };
    }

    render() {

        return (

            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />

                <ScrollView>

                    <View style={{ height: 250 }}>
                        <Image
                            source={require("../../assets/Images/search/img-1.png")}
                            style={{ width: "100%", height: 250 }} />
                        <View style={{ position: "absolute", top: 12 }}>
                            <Back color="red" props={this.props} />
                        </View>
                    </View>


                    <View style={{ marginTop: "-30%" }}>

                        <View style={{ alignItems: "center", marginBottom: 20 }}>

                            <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.MY_FAVOURIT)} style={{ flexDirection: "row", width: "30%", padding: 5, borderRadius: 20, borderColor: "white", borderWidth: 1 }}>
                                <Icon name="heart" style={{ color: "#f3525c", fontSize: 18, alignSelf: "center", paddingLeft: 3 }} />
                                <Text style={{ paddingLeft: 10, color: "white" }}>Faviourite</Text>
                            </TouchableOpacity>
                        </View>




                        <View style={{ backgroundColor: "white", borderTopRightRadius: 70, borderTopLeftRadius: 70 }}>
                            <View style={{ alignItems: "center" }}>
                                <View style={{ width: "80%", backgroundColor: "#f3525c", padding: 12, alignItems: "center" }}>

                                    <Text style={{ color: "white" }}>BURGER LAB - JOHAR</Text>
                                </View>
                            </View>



                            <View style={{ alignItems: "center", marginTop: 15 }}>
                                <View style={{ width: "90%", backgroundColor: Colors.LIGHT_GRAY_BACKGROUND, padding: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#a8acb7" }}>Order Number</Text>
                                    <Text style={{ fontSize: 12 }}>#s2vo-g73s</Text>
                                </View>
                                <View style={{ width: "90%", backgroundColor: Colors.LIGHT_GRAY_BACKGROUND, padding: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#a8acb7" }}>Delivery Address</Text>
                                    <Text style={{ fontSize: 12, paddingBottom: 10 }}>1, Block 6 Gulshan-e-Iqbal, karachi city, sindh, pakistan</Text>
                                </View>

                                <View style={styles.deliverBox}>

                                    <Text style={{ color: "#a8acb7" }}>Delivery Time</Text>
                                    <Text style={{ fontSize: 12 }}>Now (35 min)</Text>

                                </View>



                            </View>




                            <View style={{ alignItems: "center", marginTop: 15 }}>



                                <View style={[styles.deliverBox, { padding: 6 }]}>

                                    <Text style={{ fontSize: 20 }}>Buy one and get free Deal</Text>
                                    <View style={{ flexDirection: "row" }}>

                                        <Text style={{ alignSelf: "center", paddingRight: 4 }}> x</Text>
                                        <Text style={{ color: "black", padding: 6, backgroundColor: "lightgray", borderRadius: 7 }}> 1</Text>
                                    </View>

                                </View>

                                <View style={{ width: "90%", backgroundColor: Colors.LIGHT_GRAY_BACKGROUND, padding: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#a8acb7" }}>Burger Fires</Text>
                                    <Text style={{ color: "#a8acb7" }}>Buy one Doppler and get free</Text>
                                    <Text style={{ color: "#a8acb7" }}>Courmet Fries</Text>
                                </View>





                                <View style={styles.sumaryBox}>

                                    <Text style={{ color: "#a8acb7" }}>Subtotal</Text>
                                    <Text style={{ fontSize: 12 }}>19.00 AED</Text>

                                </View>

                                <View style={[styles.sumaryBox, { paddingTop: 0 }]}>
                                    <Text style={{ color: "#a8acb7" }}>Delivery Fee</Text>
                                    <Text style={{ fontSize: 12 }}>0.00 AED</Text>
                                </View>



                                <View style={{ width: "90%", backgroundColor: Colors.LIGHT_GRAY_BACKGROUND, paddingHorizontal: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#f3525c", textAlign: "left", paddingBottom: 5 }}>Do you have a voucher?</Text>
                                </View>




                                <View style={{ width: "90%", height: 80, paddingBottom: 0, }}>
                                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/Images/recipt_bottom_panel.png')}>

                                        <View style={{ width: "100%", flex: 1, padding: 12, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>

                                            <Text style={{ color: "white", alignSelf: "center" }}>Total(incl.VAT)</Text>
                                            <Text style={{ color: "white", alignSelf: "center" }}>19.00 AED</Text>
                                        </View>
                                    </ImageBackground>


                                </View>

                                {/* 
                                <View style={{ alignItems: "center", width: "90%", }}>
                                    <View style={{ width: "100%", backgroundColor: "#f3525c", padding: 12, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>

                                        <Text style={{ color: "white" }}>Total(incl.VAT)</Text>
                                        <Text style={{ color: "white" }}>19.00 AED</Text>
                                    </View>
                                </View> */}



                            </View>







                        </View>


                    </View>



                </ScrollView>

            </View >

        );
    }
}
