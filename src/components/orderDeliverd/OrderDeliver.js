
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Back } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';
import StarRating from 'react-native-star-rating'

import {
    View,
    Text,
    StyleSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground,
    StatusBar,
    Dimensions,
    TextInput,
    Modal,

} from 'react-native';
import styles from "./orderStyle"
import { Button } from "../CustomComponent/index"
import RoutesKey from '../../navigation/routeskey';
import Colors from "../../utils/colorConstant"

export default class OrderDetail extends Component {
    constructor(props) {
        super(props);

        this.state = {
            request: false
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
                            <Back props={this.props} color="red" />
                        </View>
                    </View>


                    <View style={{ marginTop: "-25%" }}>

                        <View style={{ alignItems: "center", marginBottom: 20, flexDirection: "row", justifyContent: "center" }}>

                            <TouchableOpacity onPress={() => { this.setState({ request: true }) }} style={{ flexDirection: "row", width: "40%", padding: 5, marginRight: 25, borderRadius: 20, borderColor: "white", borderWidth: 1 }}>
                                {/* <Icon name="heart" style={{ color: "#f3525c", fontSize: 18, }} /> */}
                                <Image source={require("../../assets/Images/like_fill.png")} style={{ alignSelf: "center", marginLeft: 3, width: 18, height: 18 }} />
                                <Text style={{ paddingLeft: 10, color: "white" }}>Add Reviews</Text>
                            </TouchableOpacity>
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

                                    <Text style={{ color: "green" }}>Deliverd</Text>

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



                                <View style={{ alignItems: "center", width: "90%", }}>
                                    <View style={{ width: "100%", backgroundColor: "#f3525c", padding: 12, alignItems: "center", }}>
                                        <Text style={{ color: "white" }}>Reorder</Text>
                                    </View>
                                </View>



                            </View>







                        </View>


                    </View>



                </ScrollView>




                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.request}
                    onRequestClose={() => {
                        this.setState({ request: false })
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: `rgba(0, 0, 0, ${0.7})` }} >

                        <View style={styles.Box}>

                            <View style={{ alignItems: "center", padding: 20 }}>
                                <Image source={require("../../assets/Images/Group9589.png")} />
                            </View>
                            <View style={{ paddingVertical: 3, alignSelf: "center" }}>
                                <StarRating
                                    disabled={true}
                                    maxStars={5}
                                    fullStarColor={"#f89a00"}
                                    rating={3}
                                    starSize={24}
                                />
                            </View>


                            <Text style={{ textAlign: "center", fontSize: 18 }}> Share your experience with us</Text>

                            <Text style={{ textAlign: "center", paddingTop: 15, color: "#a8acb7" }}>Your feedback will help to improve our services experience</Text>

                            <View style={{ paddingVertical: 15 }}>

                                <TextInput
                                    multiline={true}
                                    numberOfLines={5}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                    style={{ backgroundColor: "#eff0f1", borderRadius: 10, justifyContent: "flex-start", textAlignVertical: 'top' }}
                                    placeholder="Additional Comments.."
                                />

                            </View>



                            {/* <Button title="Submit Review" /> */}



                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    backgroundColor: '#f3525c',
                                    width: '100%',
                                    alignItems: 'center',
                                    color: 'blue',
                                    borderRadius: 50,
                                    alignSelf: 'center',
                                    marginVertical: 10,
                                    justifyContent: 'center',
                                    paddingVertical: 15,
                                    // paddingRight: 40,
                                }}
                                onPress={() => { this.setState({ request: false }) }}>
                                <Text style={{ color: '#fff' }}>Submit Review</Text>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40,
                                        alignSelf: 'center',
                                        resizeMode: 'contain',
                                        position: "absolute",
                                        right: 5
                                    }}
                                    source={require('../../assets/Images/right_arrow_circle.png')}
                                />
                            </TouchableOpacity>




                        </View>



                    </View>
                </Modal>


            </View >

        );
    }
}
