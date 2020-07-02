import React, { Component } from 'react'
import { TouchableOpacity, Text, View, ScrollView, Image, CheckBox, TextInput, ImageBackground, Modal, StatusBar } from 'react-native'
import { Button } from "../CustomComponent/index"
import SearchHeader from "./searchHeader"
import styles from './searchStyle'
import Icon from 'react-native-vector-icons/Ionicons';
import SearchModel from './searchModel'
import colors from '../../utils/colorConstant'

export default class CustomizedSearch extends Component {

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

                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.request}
                    onRequestClose={() => { this.setState({ request: false }) }}>

                    <View style={{ top: "30%", backgroundColor: "white", flex: 1 }}>


                        {/* <ScrollView
                                 stickyHeaderIndices={[1]}
                                 showsVerticalScrollIndicator={false}> */}
                        <View style={{ backgroundColor: "#f3525c", flexDirection: "row", padding: 20, borderTopRightRadius: 12, borderTopLeftRadius: 12 }}>
                            <Icon onPress={() => { this.setState({ request: false }) }} size={20} name="ios-arrow-down" color="white" style={{ paddingHorizontal: 15 }} />
                            <Text style={{ color: 'white' }}>Customized Search</Text>
                        </View>

                        <View style={{ padding: 15, }}>
                            <Text style={{ color: "lightgray", fontWeight: "bold" }}>SEARCH FILTERS</Text>
                        </View>

                        <View style={{ padding: 15, paddingVertical: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>BUDGET</Text>

                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />

                        </View>

                        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-evenly" }}>
                            <Text style={[styles.budgetBox, { backgroundColor: "white" }]}>$</Text>
                            <Text style={styles.budgetBox}>$$</Text>
                            <Text style={styles.budgetBox}>$$$</Text>
                        </View>


                        <View style={{ padding: 15, paddingVertical: 0, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16 }}>Receiving Food In</Text>
                            <Image source={require("../../assets/Images/otherIcon/dropdown_up_arrow.png")} style={{ alignSelf: "center", marginLeft: 5, height: 10, width: 10 }} />

                        </View>

                        <View style={{ padding: 15, flexDirection: "row", justifyContent: "space-between" }}>
                            <Text style={[styles.foodBox, { backgroundColor: "white" }]}>Thermal Packaging</Text>
                            <Text style={styles.foodBox}>Plastic Plates</Text>
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




                        {/* </ScrollView> */}

                    </View>

                </Modal>


            </View >
        )
    }
}
