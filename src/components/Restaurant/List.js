import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    Text, Image,
    View, TouchableOpacity,
    SafeAreaView,
    SectionList
} from "react-native";
import RoutesKey from '../../navigation/routeskey';

const DATA = [
    {
        title: "Allout Deal",
        data: ["Pizza", "Burger", "Risotto"]
    },
    {
        title: "Sides",
        data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    },
    {
        title: "Drinks",
        data: ["Water", "Coke", "Beer"]
    },
    {
        title: "Desserts",
        data: ["Cheese Cake", "Ice Cream"]
    }
];


const Item = ({ title, buttonFun }) => (
    <View style={styles.item}>
        <View>

            <Image
                style={{
                    height: 80,
                    width: 80,
                    borderRadius: 5,
                    resizeMode: 'cover',
                }}
                source={require('../../assets/Images/img-1.png')}
            />
        </View>
        <View style={{ flex: 1, marginLeft: 4 }}>
            <Text style={styles.title}>{title}(6 inch)</Text>
            <View style={{ flex: 1, }}>
                <Text style={{ color: "#a8acb7" }}>Any Sandwich (6 inch) + Cookies
                (2 pcs)/Lays Chips + Soft Drink</Text>
            </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* <View style={styles.add}>
                <Text style={styles.addtxt}>Add</Text>
            </View> */}

            <TouchableOpacity style={styles.view} onPress={buttonFun}>

                <TouchableOpacity style={{
                    marginHorizontal: 3
                }}
                >


                    <Icon name="minus-circle" style={styles.icon} />
                </TouchableOpacity>

                <Text style={{ color: "#5baa5b", fontWeight: "bold" }}>1</Text>
                <TouchableOpacity style={{
                    marginHorizontal: 3
                }}>


                    <Icon name="plus-circle" style={styles.icon} />
                </TouchableOpacity>
            </TouchableOpacity>
            <Text style={styles.asd}>20 AED</Text>
        </View>
    </View>
);

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }

    render() {

        return (
            <SafeAreaView style={styles.container}>
                <SectionList
                    sections={DATA}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item title={item} buttonFun={() => { this.props.navigation.navigate(RoutesKey.RESTURANT_PRODUCT_FILTER) }} />}
                    renderSectionHeader={({ section: { title } }) => (
                        <Text style={styles.header}>{title}</Text>
                    )}
                />



            </SafeAreaView>
        )
    }
}

export default List;

const styles = StyleSheet.create({
    addtxt: { paddingHorizontal: 15, color: "#5baa5b", },
    add: { borderRadius: 20, borderWidth: 1, padding: 3, margin: 2, borderColor: "#5baa5b" },
    asd: { color: "#f3525c", fontWeight: "bold" },
    icon: { color: "#5baa5b", fontSize: 20 },
    container: {
        flex: 1,
        marginHorizontal: 6
    },
    item: {
        backgroundColor: "#fff",
        marginVertical: 2,
        borderBottomColor: "#f9f9f9",
        borderBottomWidth: 2,
        flexDirection: "row"
    },
    header: {
        fontSize: 18,
        // backgroundColor: "#fff"
    },
    title: {
        fontSize: 18,

    },
    view: { justifyContent: "center", alignItems: "center", borderRadius: 20, flexDirection: "row", justifyContent: "space-around", borderWidth: 1, padding: 3, margin: 2, borderColor: "#5baa5b" },
});