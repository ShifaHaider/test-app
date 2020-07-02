import React, { Component } from 'react'
import { Text, View, StatusBar, ImageBackground, Image, TouchableOpacity, ScrollView, Dimensions } from 'react-native'
import styles from "./cartStyle"
import { TransparentHeader } from "../CustomComponent/index"
import Global from "../../utils/global"
import Icon from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../utils/colorConstant'
import Routeskey from '../../navigation/routeskey';
import RoutesKey from '../../navigation/routeskey'

export default class Cart extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cartItems: [
                { qty: 0, price: 100 },
                { qty: 0, price: 150 },
            ]
        };
    }
    quantityHandler = (action, index) => {
        const newItems = [...this.state.cartItems];
        let currentQty = newItems[index]['qty'];

        if (action == 'more') {
            newItems[index]['qty'] = currentQty + 1;
        } else if (action == 'less') {
            newItems[index]['qty'] = currentQty > 0 ? currentQty - 1 : 0;
        }

        this.setState({ cartItems: newItems }); // set new state
    }
    subtotalPrice = () => {
        const { cartItems } = this.state;
        if (cartItems) {
            return cartItems.reduce((sum, item) => sum + (true ? item.qty * item.price : 0), 0);
        }
        return 0;
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={true}
                />




                <ImageBackground
                    resizeMethod="scale"
                    source={require("../../assets/Images/Verification.png")}
                    style={{ flex: 1 }}
                >
                    <ScrollView style={{ flex: 1 }}>
                        <TransparentHeader fun={() => { this.props.navigation.navigate(Routeskey.HOME) }} title={"My Cart"} style={{ marginTop: Global.STATUSBAR_HEIGHT }} />




                        <View style={[styles.Box, { top: 50, marginBottom: 50 }]}>



                            <View style={{ marginTop: "12%" }}>
                                <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>MY CART ITEMS</Text>
                            </View>
                            {

                                this.state.cartItems.map((v, k) => {
                                    return (
                                        <View style={styles.item}>

                                            <View style={{
                                                shadowColor: 'lightgray',
                                                shadowOffset: { width: 0, height: 10 },
                                                shadowOpacity: 0.8,
                                                shadowRadius: 5,
                                                elevation: 3,
                                            }} >

                                                <Image
                                                    style={{
                                                        height: 50,
                                                        width: 50,
                                                        borderRadius: 12,
                                                        resizeMode: 'cover',


                                                    }}
                                                    source={require('../../assets/Images/image1.png')}
                                                />
                                            </View>
                                            <View style={{ flex: 1, marginLeft: 4 }}>
                                                <View style={{ flex: 1 }}>
                                                    <Text style={{ paddingLeft: 5, fontSize: 13 }}>Subway - Disco</Text>
                                                    <Text style={{ color: "#a8acb7", paddingLeft: 5, fontSize: 13 }}>Combo Meal(6 Inch)</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: "center", justifyContent: "center" }}>
                                                <View style={styles.view}>

                                                    <View style={{ borderColor: "#f3525c", borderWidth: 1, paddingVertical: 3, borderRadius: 50 }}>
                                                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                                                            <TouchableOpacity
                                                                onPress={() => this.quantityHandler('less', k)}
                                                            >

                                                                <AntDesign size={22} name="minus" color="#f3525c" style={{ paddingHorizontal: 15 }} />
                                                            </TouchableOpacity>
                                                            <Text style={{ color: "black" }} >{v.qty}</Text>
                                                            <TouchableOpacity
                                                                onPress={() => this.quantityHandler('more', k)}
                                                            >
                                                                <Icon size={22} name="add" color="#f3525c" style={{ paddingHorizontal: 15 }} />
                                                            </TouchableOpacity>
                                                        </View>

                                                        {/* <TouchableOpacity style={{ backgroundColor: "#f3525c", borderRadius: 20, paddingHorizontal: 15, paddingVertical: 4, }}><Text style={{ color: "white", fontSize: 10 }}>Recorder</Text></TouchableOpacity> */}


                                                    </View>
                                                    <Text style={styles.asd}>{v.price} AED</Text>
                                                </View>
                                            </View>
                                        </View>

                                    )
                                })
                            }














                            <View style={{ alignItems: "center", marginTop: 15 }}>

                                <View style={styles.sumaryBox}>
                                    <Text style={{ color: "#a8acb7" }}>Subtotal</Text>
                                    <Text style={{ fontSize: 12 }}>{this.subtotalPrice()} AED</Text>
                                </View>


                                <View style={[styles.sumaryBox, { paddingTop: 0 }]}>
                                    <Text style={{ color: "#a8acb7" }}>Delivery Fee</Text>
                                    <Text style={{ fontSize: 12 }}>0.00 AED</Text>
                                </View>

                                <View style={{ width: "90%", backgroundColor: colors.LIGHT_GRAY_BACKGROUND, paddingHorizontal: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#f3525c", textAlign: "left", paddingBottom: 5 }}>Do you have a voucher?</Text>
                                </View>
                                <View style={{ width: "90%", height: 80, paddingBottom: 0, }}>
                                    <ImageBackground style={{ flex: 1 }} source={require('../../assets/Images/recipt_bottom_panel.png')}>

                                        <View style={{ width: "100%", flex: 1, padding: 12, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }}>

                                            <Text style={{ color: "white" }}>Total(incl.VAT)</Text>
                                            <Text style={{ color: "white" }}>{this.subtotalPrice()} AED</Text>
                                        </View>
                                    </ImageBackground>


                                </View>


                            </View>









                            <View style={{ alignItems: "center", marginTop: 15 }}>
                                <View style={{ width: "90%", backgroundColor: colors.LIGHT_GRAY_BACKGROUND, padding: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#a8acb7" }}>Contact Info</Text>
                                    <Text style={{ fontSize: 12 }}>James.deon@gmail.com</Text>
                                </View>
                                <View style={{ width: "90%", backgroundColor: colors.LIGHT_GRAY_BACKGROUND, padding: 12, paddingBottom: 0 }}>
                                    <Text style={{ color: "#a8acb7" }}>Delivery Detail</Text>
                                    <Text style={{ fontSize: 12, paddingBottom: 10 }}>1, Block 6 Gulshan-e-Iqbal, karachi city, sindh, pakistan</Text>
                                </View>

                                <View style={styles.deliverBox}>

                                    <Text style={{ color: "#a8acb7" }}>Delivery Time</Text>
                                    <Text style={{ fontSize: 12 }}>Now (35 min)</Text>

                                </View>



                            </View>



                            <View style={{ marginTop: "5%" }}>
                                <Text style={{ color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>PAYMENT METHOD</Text>
                            </View>




                            <View style={{ flexDirection: "row", padding: 15 }}>
                                {/* <Icon size={22} name="add" color="#f3525c"  /> */}
                                <Image source={require("../../assets/Images/otherIcon/plus_red.png")} style={{ marginLeft: 15, marginRight: 5 }} />

                                <Text>Add a payment method</Text>
                            </View>



                            <View style={{ flexDirection: "row", padding: 15 }}>
                                <Text style={{ color: "lightgray", paddingLeft: 15 }}>By completing this order, I agree to all Terms & Conditions.</Text>
                            </View>

                            <View style={{ flexDirection: "row", padding: 15, paddingTop: 0 }}>
                                <Text style={{ color: "lightgray", paddingLeft: 15 }}>I agree and i demand that you execute the ordered service before the end of the revocation period. I am aware that after complete fulfilment of the service lost my right of rescission</Text>
                            </View>





                            <View style={{ alignItems: "center", width: "100%", }}>
                                <View style={{ width: "100%", backgroundColor: "#f3525c", padding: 12, alignItems: "center", }}>
                                    <View style={{ width: "100%", backgroundColor: "#f3525c", padding: 12, alignItems: "center", flexDirection: "row", justifyContent: "space-evenly" }}>
                                        <View style={{ backgroundColor: "white", paddingHorizontal: 10, paddingVertical: 5, borderRadius: 10 }}>

                                            <Text style={{ color: "black" }}>1</Text>
                                        </View>

                                        <TouchableOpacity onPress={() => this.props.navigation.navigate(RoutesKey.PAYMWNT_METHOD)}>
                                            <Text style={{ color: "white", fontWeight: "bold", }}>Place Order</Text>
                                        </TouchableOpacity>
                                        <Text style={{ color: "white", fontWeight: "bold" }}>{this.subtotalPrice()} AED</Text>
                                    </View>
                                </View>
                            </View>

                        </View>

                    </ScrollView>
                </ImageBackground>



            </View>
        )
    }
}
