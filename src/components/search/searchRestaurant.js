import React, { Component } from 'react'
import { TouchableOpacity, Text, View, ScrollView, Image, CheckBox, TextInput, ImageBackground, Modal, StatusBar } from 'react-native'
import { Button } from "../CustomComponent/index"
import SearchHeader from "./searchHeader"
import styles from './searchStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import SearchModel from './searchModel'
import colors from '../../utils/colorConstant'

export default class SearchRestaurant extends Component {

    constructor() {
        super()
        this.state = {
            request: false,
            products: [{
                Image: require("../../assets/Images/search/img-1.png"),
                Name: "Burgers"
            },
            {
                Image: require("../../assets/Images/search/img-2.png"),
                Name: "Pizza"
            },
            {
                Image: require("../../assets/Images/search/img-3.png"),
                Name: "Asian"
            },
            {
                Image: require("../../assets/Images/search/img-4.png"),
                Name: "Dessert"
            },
            {
                Image: require("../../assets/Images/search/img-5.png"),
                Name: "Breakfast"
            },
            {
                Image: require("../../assets/Images/search/img-6.png"),
                Name: "Mexican"
            },

            ],
            searchText: '',

            offers: [
                { name: "Accept vouchers", id: 1 },
                { name: "Free delivery", id: 2 },
                { name: "Deals", id: 3 },
                { name: "Online Payment available", id: 4 },
            ],
            cuisines: [
                { name: "American", id: 1 },
                { name: "Greek", id: 2 },
                { name: "Pakistani", id: 3 },
                { name: "Asian", id: 4 },
                { name: "Healthy", id: 5 },
                { name: "Pizza", id: 6 },
                { name: "Bevarage", id: 7 },
                { name: "Indian", id: 8 },
                { name: "Sandwiches", id: 9 },
                { name: "Burgers", id: 10 },
                { name: "Indonesian", id: 11 },
                { name: "Seafood", id: 12 },
                { name: "Cake & Bakrey", id: 13 },
                { name: "International", id: 14 },
                { name: "Singaporean", id: 15 },
                { name: "Chinese", id: 16 },
                { name: "Italian", id: 17 },
                { name: "Fast Food", id: 18 },
                { name: "Vergetarian", id: 19 },
                { name: "Maxican", id: 20 },
                { name: "Dessert", id: 21 },
                { name: "Japanese", id: 22 },
            ],





























            attributes: [
                { name: "Arabic", id: 1 },
                { name: "Halwa", id: 2 },
                { name: "Prawns", id: 3 },
                { name: "BBQ", id: 4 },
                { name: "Home Based", id: 5 },
                { name: "Puffs", id: 6 },
                { name: "Ramadan Deals", id: 7 },
                { name: "Home Chef", id: 8 },
                { name: "Biryani", id: 9 },
                { name: "Broast", id: 10 },
                { name: "Home cooked", id: 11 },
                { name: "Restaurant Own delivery", id: 12 },
                { name: "Rice", id: 13 },
                { name: "Ice Cream", id: 14 },
                { name: "Chips", id: 15 },
                { name: "Ice Cream Shakes", id: 16 },
                { name: "Roll Paratha", id: 17 },
                { name: "Coffee", id: 18 },
                { name: "Juices", id: 19 },
                { name: "Karhai", id: 20 },
                { name: "Cold Cuts", id: 21 },
                { name: "Shakes", id: 22 },
            ]
        }
    }



    render() {
        return (
            <View style={styles.Container}>

                <StatusBar
                    backgroundColor={"transparent"}
                    barStyle={"light-content"}
                    translucent={false}
                />

                <ScrollView >

                    <SearchHeader prop={this.props} />
                    <View style={{ paddingHorizontal: 20 }}>



                        <View
                            style={{
                                flexDirection: "row",
                                backgroundColor: "white",
                                marginTop: 20,
                                shadowColor: 'white',
                                shadowOffset: { width: 0, height: 10 },
                                shadowOpacity: 0.8,
                                shadowRadius: 2,
                                elevation: 3,
                                padding: 5
                            }}
                        >
                            <Image source={require("../../assets/Images/search_icon.png")} style={{ marginLeft: 5, alignSelf: "center" }} />

                            <TextInput
                                style={{
                                    width: "80%",
                                    paddingLeft: 10
                                }}
                                placeholder="Find something you like"
                                onChangeText={(val) => { this.setState({ searchText: val }) }}
                            />
                            <View style={{ alignSelf: "center" }}>

                                <TouchableOpacity onPress={() => { this.setState({ request: true }) }} >
                                    <Image source={require("../../assets/Images/filter_icon.png")} style={{ marginLeft: 5, alignSelf: "center" }} style={{ marginLeft: 5, alignSelf: "center" }} />
                                </TouchableOpacity>
                            </View>

                        </View>


                        {
                            this.state.searchText.trim() != "" ? (
                                <View>
                                    <View style={{ justifyContent: "space-between", paddingVertical: 20 }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>Search Result</Text>

                                    </View>
                                    <View style={styles.recommedHead}>
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
                                    </View>

                                    <View style={styles.recommedHead}>
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
                                    </View>

                                    <View style={styles.recommedHead}>
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
                                    </View>


                                    <View style={styles.recommedHead}>
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
                                    </View>


                                </View>


                            )
                                :
                                <View>
                                    <View style={{ justifyContent: "space-between", paddingVertical: 20 }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>Recent Search</Text>

                                    </View>




                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <Image source={require("../../assets/Images/timer.png")} style={{ alignSelf: "center" }} />
                                        <Text style={{ paddingLeft: 5, color: "gray" }}>Burger Lab</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <Image source={require("../../assets/Images/timer.png")} style={{ alignSelf: "center" }} />
                                        <Text style={{ paddingLeft: 5, color: "gray" }}>Subway</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <Image source={require("../../assets/Images/timer.png")} style={{ alignSelf: "center" }} />
                                        <Text style={{ paddingLeft: 5, color: "gray" }}>Pizza</Text>
                                    </View>

                                    <View style={{ flexDirection: "row", marginTop: 10 }}>
                                        <Image source={require("../../assets/Images/timer.png")} style={{ alignSelf: "center" }} />
                                        <Text style={{ paddingLeft: 5, color: "gray" }}>Hard Rock Coffee</Text>
                                    </View>






                                    <View style={{ justifyContent: "space-between", paddingVertical: 20 }}>
                                        <Text style={{
                                            fontSize: 18
                                        }}>Categories</Text>

                                    </View>







                                    <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                                        {this.state.products.map((v, i) => <View
                                            key={i} style={{ backgroundColor: "blue", height: 100, width: 140, borderRadius: 10, marginBottom: 20 }}>
                                            <ImageBackground
                                                source={v.Image}
                                                style={{ flex: 1, borderRadius: 10, overflow: "hidden", justifyContent: "flex-end" }}
                                                resizeMode="cover"
                                            >
                                                <View style={{ flexDirection: "row", alignItems: "center" }}>
                                                    <Text style={{ color: "#f3525c", fontWeight: "bold", paddingHorizontal: 5, alignSelf: 'center', textAlignVertical: "center", fontSize: 45 }}>.</Text>
                                                    <Text style={{ color: "white", alignSelf: "flex-end", paddingBottom: 8 }}>{v.Name}</Text>
                                                </View>

                                            </ImageBackground>

                                        </View>)}
                                    </View>

                                </View>
                        }





                    </View>
                    {/* {this.Model()} */}


                </ScrollView>

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.request}
                    onRequestClose={() => {
                        this.setState({ request: false })
                    }}>
                    {/* <View style={{ backgroundColor: "white", }}> */}

                    <View style={{ padding: 20, top: "40%", backgroundColor: "#f3525c", flexDirection: "row", borderTopRightRadius: 12, borderTopLeftRadius: 12, }}>
                        <Icon onPress={() => { this.setState({ request: false }) }} size={20} name="ios-arrow-down" color="white" style={{ paddingHorizontal: 15 }} />
                        <Text style={{ color: 'white' }}>Customized Search</Text>
                    </View>

                    <ScrollView style={{ height: "60%", marginTop: "40%", backgroundColor: "white" }}>

                        <View style={{ padding: 15, }}>
                            <Text style={{ color: "lightgray", fontWeight: "bold" }}>SEARCH FILTERS</Text>
                        </View>

                        <View style={{ padding: 15, paddingVertical: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>BUDGET</Text>

                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />

                        </View>

                        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
                            <Text style={[styles.budgetBox, { backgroundColor: "white" }]}>$</Text>
                            <Text style={[styles.budgetBox, { borderWidth: 0 }]}>$$</Text>
                            <Text style={[styles.budgetBox, { borderWidth: 0 }]}>$$$</Text>
                        </View>


                        <View style={{ padding: 15, paddingVertical: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>Receiving Food In</Text>
                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />

                        </View>

                        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={[styles.foodBox, { backgroundColor: "white" }]}>Thermal Packaging</Text>
                            <Text style={[styles.foodBox, { borderWidth: 0 }]}>Plastic Plates</Text>
                        </View>







                        <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>OFFERS</Text>
                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />
                        </View>


                        {
                            this.state.offers.map((m, i) => {
                                return (
                                    <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5 }} >

                                        <CheckBox
                                        />
                                        <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                    </View>
                                )
                            })
                        }

                        <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>CUISINES</Text>
                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />
                        </View>


                        {
                            this.state.cuisines.map((m, i) => {
                                return (
                                    <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5 }} >

                                        <CheckBox
                                        />
                                        <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                    </View>
                                )
                            })
                        }






                        <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>ATTRIBUTES</Text>
                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />
                        </View>

                        <View style={{ marginBottom: 10 }}>
                            {
                                this.state.attributes.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5 }} >

                                            <CheckBox
                                            />
                                            <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                        </View>
                                    )
                                })
                            }
                        </View>

                    </ScrollView>

                    {/* </View> */}

                </Modal>


            </View >
        )
    }
}
