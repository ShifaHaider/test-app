import React, { Component } from 'react'
import { Text, View, ScrollView, Dimensions, Image, CheckBox, TextInput, ImageBackground, Modal, StatusBar } from 'react-native'
import { Button } from "../CustomComponent/index"
// import SearchHeader from "./searchHeader"
import styles from './Style'
import Icon from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';


export default class RestaurantProductFilter extends Component {

    constructor() {
        super()
        this.state = {
            request: true,
            products: [{
                Image: require("../../assets/Images/image.png"),
                Name: "Burgers"
            },
            {
                Image: require("../../assets/Images/image.png"),
                Name: "Pizza"
            },
            {
                Image: require("../../assets/Images/image.png"),
                Name: "Asian"
            },
            {
                Image: require("../../assets/Images/image.png"),
                Name: "Dessert"
            },
            {
                Image: require("../../assets/Images/image.png"),
                Name: "Breakfast"
            },
            {
                Image: require("../../assets/Images/image.png"),
                Name: "Mexican"
            },

            ],
            searchText: '',

            choiceOfSub: [
                { name: "Breaaded Chicken", id: 1, price: "+5.0 AED" },
                { name: "Chicken Teriyaki", id: 2, price: "+6.0 AED" },
                { name: "Chicken Tikka", id: 3, price: "+7.0 AED" },
                { name: "Italian B.m.t Sandwich", id: 4, price: "+2.0 AED" },
                { name: "Oven Roasted Chicken", id: 5, price: "+5.0 AED" },
                { name: "Peri Peri Chicken", id: 6, price: "+8.0 AED" },
                { name: "Roast beef", id: 7, price: "+2.0 AED" },
                { name: "Smoked Turkey Sandwich", id: 8, price: "+3.0 AED" },

            ],
            choiceOfBread: [
                { name: "Flat Bread", id: 1 },
                { name: "Honey Oat Bread", id: 2 },
                { name: "Italian Bread (White Bread)", id: 3 },
                { name: "Paramean Oregono Bread", id: 4 },
                { name: "Sesame Bread", id: 5 },
                { name: "Wheat Bread (Brown Bread)", id: 6 },

            ],


            choiceOfChese: [
                { name: "Cheddar Cheese (Yellow Cheese)", id: 1 },
                { name: "Low Fat Cheese (White Cheese)", id: 2 },
                { name: "NO Cheese", id: 3 },
            ],

            choiceOfVeggies: [
                { name: "Cucumber", id: 1 },
                { name: "Green Pepper", id: 2 },
                { name: "Jalapeno", id: 3 },
                { name: "Lettuce", id: 4 },
                { name: "Onion", id: 5 },
                { name: "No Vergetables", id: 6 },
            ],

            choiceOfDressing: [
                { name: "Bbq Sauce", id: 1 },
                { name: "Chiptle Southwest", id: 2 },
                { name: "Hot Sauce", id: 3 },
                { name: "Ketchup", id: 4 },
                { name: "Mayonnaise", id: 5 },
                { name: "Vinegar", id: 6 },
                { name: "No Dressing", id: 7 },
            ],

            ChoiceOfToasting: [
                { name: "Not Toasted", id: 1 },
                { name: "Toasted", id: 2 },
            ],

            laysCookies: [
                { name: "Chilli Lays", id: 1 },
                { name: "Double Chocolate Cookie", id: 2 },
                { name: "Labneh & Mint Lays", id: 3 },
                { name: "Raspbery Cheesecake Cookie", id: 4 },
                { name: "Salt & Vinagar Lays", id: 5 },
                { name: "Macademia Cookie", id: 6 },
                { name: "Oatmeal Rasin Cookie", id: 7 },
            ],
            softDrink: [
                { name: "Coke", id: 1 },
                { name: "DoubleDiet Coke", id: 2 },
                { name: "Fanta", id: 3 },
                { name: "Sprite", id: 4 },
            ],
            OptionalAddOn: [
                { name: "Cheese ", id: 1, price: "+2.0AED" },
                { name: "Double Meat", id: 2, price: "+5.0AED" },
                { name: "Extra Pepperoni", id: 3, price: "+3.0AED" },
                { name: "Turkey Bacon", id: 4, price: "+3.0AED" },
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
                    barStyle={"dark-content"}
                />

                <View >
                    <ScrollView style={{ marginBottom: 70 }}>
                        <View style={{ backgroundColor: "white", flex: 1 }}>

                            <View style={{ backgroundColor: "#f3525c", flexDirection: "row", padding: 20, borderTopRightRadius: 12, borderTopLeftRadius: 12 }}>
                                <Icon onPress={() => { this.props.navigation.goBack() }} size={20} name="ios-arrow-down" color="white" style={{ paddingHorizontal: 15 }} />
                                <Text style={{ color: 'white' }}>Customized Your Meal</Text>
                            </View>


                            <View style={{ padding: 15, }}>
                                <Text style={{ fontWeight: "bold" }}>Combo Meal(6 Inch)</Text>
                                <Text style={{ fontWeight: "400", color: "lightgray" }}>Meals and combos</Text>
                                <Text style={{ fontWeight: "400", color: "lightgray" }}>**Any sandwich(6 Inch) + cookies (2 pcs)/ Lays chips + Soft Drink</Text>
                            </View>










                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Choice of Sub</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                            </View>


                            {
                                this.state.choiceOfSub.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                                <Text style={{ alignSelf: "center", color: "green", paddingLeft: 5 }}>{m.price}</Text>
                                            </View>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }



                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Choice of Bread</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                            </View>


                            {
                                this.state.choiceOfBread.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                                <Text style={{ alignSelf: "center", color: "green", paddingLeft: 5 }}>{m.price}</Text>
                                            </View>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }


                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Choice of Cheese</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                            </View>

                            {
                                this.state.choiceOfChese.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }



                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Choice of Veggies</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                            </View>

                            {
                                this.state.choiceOfVeggies.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }



                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Choice of Dressing</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                                <Text style={{ fontSize: 10, marginLeft: 5, borderRadius: 50, alignSelf: "center", paddingHorizontal: 5, backgroundColor: "#f3525c", color: "white" }}>multiple</Text>
                            </View>

                            {
                                this.state.choiceOfVeggies.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }




                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Soft Drink</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                                <Text style={{ fontSize: 10, marginLeft: 5, borderRadius: 50, alignSelf: "center", paddingHorizontal: 5, backgroundColor: "#f3525c", color: "white" }}>multiple</Text>
                            </View>

                            {
                                this.state.softDrink.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }





                            <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                <Text style={{ fontSize: 16 }}>Optional Add On</Text>
                                <Text style={{ fontSize: 16, color: "#f3525c" }}>*</Text>
                                <Text style={{ fontSize: 10, marginLeft: 5, borderRadius: 50, alignSelf: "center", paddingHorizontal: 5, backgroundColor: "#f3525c", color: "white" }}>multiple</Text>

                            </View>


                            {
                                this.state.OptionalAddOn.map((m, i) => {
                                    return (
                                        <View key={i} style={{ margin: 15, marginBottom: 0, marginTop: 10, flexDirection: "row", borderWidth: 1, borderColor: "lightgray", borderRadius: 5, padding: 10, justifyContent: "space-between" }} >
                                            <View style={{ flexDirection: "row" }}>
                                                <Text style={{ alignSelf: "center" }}>{m.name}</Text>
                                                <Text style={{ alignSelf: "center", color: "green", paddingLeft: 5 }}>{m.price}</Text>
                                            </View>
                                            <Image source={require("../../assets/Images/check.png")} style={{ alignSelf: "center", width: 20, height: 20 }} />
                                        </View>
                                    )
                                })
                            }





                            <View style={{ padding: 15, }}>
                                <Text style={{ fontWeight: "bold" }}>Special Instruction</Text>
                                <Text style={{ fontWeight: "400", paddingTop: 5, color: "lightgray" }}>Meals and combos</Text>
                                <Text style={{ fontWeight: "400", paddingTop: 5, color: "lightgray" }}>Please let us know if you allergic to anything of if we need to avoid anything</Text>


                                <TextInput
                                    multiline={true}
                                    numberOfLines={5}
                                    onChangeText={(text) => this.setState({ text })}
                                    value={this.state.text}
                                    style={{ marginTop: 5, backgroundColor: "#eff0f1", borderRadius: 10, justifyContent: "flex-start", textAlignVertical: 'top' }}
                                    placeholder="Additional Comments.."
                                />
                            </View>








                            {/* 
                                    <View style={{ padding: 15, marginTop: 0, flexDirection: "row" }}>
                                        <Text style={{ fontSize: 16 }}>CUISINES</Text>
                                        <Icon size={16} name="ios-arrow-up" color="black" style={{ paddingLeft: 5, alignSelf: "center" }} />
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
                                    } */}












                        </View>
                    </ScrollView>

                    <View style={{ position: 'absolute', left: 0, right: 0, bottom: 0, backgroundColor: "black", flexDirection: "row", padding: 20, justifyContent: "space-between" }}>
                        <View style={{ flexDirection: "row", alignSelf: "center" }}>
                            <Image source={require("../../assets/Images/otherIcon/minus_red.png")} style={{ marginRight: 20, alignSelf: "center" }} />

                            <Text style={{ color: "white" }} >1</Text>
                            <Image source={require("../../assets/Images/otherIcon/plus_red.png")} style={{ marginLeft: 20, alignSelf: "center" }} />
                        </View>
                        <View>
                            <TouchableOpacity style={{ backgroundColor: "#f3525c", paddingVertical: 10, paddingHorizontal: 15, alignSelf: "center", borderRadius: 50 }}>
                                <Text style={{ color: 'white' }}>Add to Cart</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>







            </View >

        )

    }
}
