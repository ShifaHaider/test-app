import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    StyleSheet,
    Text, Image,
    View, TouchableOpacity,
    SafeAreaView,
    SectionList
} from "react-native";

const DATA = [
    {
        title: "NEWEST ORDER ",
        data: [
            {
                title: "Subway - Disco",
                detail: "Combo Meal (6 inch)",
                date: "May 04 2020 - 08:30 Pm"
            }
        ]
    },
    {
        title: "PREVIOUS ORDER ",
        data: [
            {
                title: "Subway - Disco",
                detail: "Combo Meal (6 inch)",
                date: "May 04 2020 - 08:30 Pm"
            },
            {
                title: "Subway - Disco",
                detail: "Combo Meal (6 inch)",
                date: "May 04 2020 - 08:30 Pm"
            },
            {
                title: "Subway - Disco",
                detail: "Combo Meal (6 inch)",
                date: "May 04 2020 - 08:30 Pm"
            },
            {
                title: "Subway - Disco",
                detail: "Combo Meal (6 inch)",
                date: "May 04 2020 - 08:30 Pm"
            },
            {
                title: "Subway - Disco",
                detail: "Combo Meal (6 inch)",
                date: "May 04 2020 - 08:30 Pm"
            }

        ]
    }
    // {
    //     title: "PREVIOUS ORDER",
    //     data: ["French Fries", "Onion Rings", "Fried Shrimps"]
    // },

];


const Item = ({ data }) => (
    <View style={styles.item}>
        {console.log("asdasdas", data)}

        <View style={{}}>

            <Image
                style={{
                    height: 70,
                    width: 70,
                    borderRadius: 5,
                    resizeMode: 'cover',


                }}
                source={require('../../assets/Images/image.png')}
            />
        </View>
        <View style={{ flex: 1, marginLeft: 4 }}>
            <Text style={styles.title}>{data.title}</Text>
            <View style={{ flex: 1, paddingTop: 10 }}>
                <Text style={{ color: "#a8acb7" }}>{data.detail}</Text>
                <Text style={{ color: "#a8acb7" }}>{data.date}</Text>

            </View>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
            {/* <View style={styles.add}>
                <Text style={styles.addtxt}>Add</Text>
            </View> */}

            <View style={styles.view}>
                <Text style={{ color: "gray", fontWeight: "bold" }}>Canceled</Text>
                <TouchableOpacity style={{ backgroundColor: "#f3525c", borderRadius: 20, paddingHorizontal: 15, paddingVertical: 4, }}><Text style={{ color: "white", fontSize: 10 }}>Recorder</Text></TouchableOpacity>
                <Text style={styles.asd}>20 AED</Text>
            </View>
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
                    style={{}}
                    keyExtractor={(item, index) => item + index}
                    renderItem={({ item }) => <Item data={item} />}
                    renderSectionHeader={({ section: { title } }) => (

                        <View style={{ marginVertical: "4%" }}>
                            <Text style={{ fontSize: 15, color: "#b4b8c2", fontWeight: "bold", paddingHorizontal: "8%" }}>{title}</Text>
                        </View>
                        // <Text style={styles.header}>{title}</Text>
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
    asd: { color: "#f3525c", fontWeight: "bold", fontSize: 12 },
    icon: { color: "#5baa5b", fontSize: 20 },
    container: {
        flex: 1,
        marginHorizontal: 6,
        backgroundColor: "white"
    },
    item: {
        // backgroundColor: "red",
        // padding: 20,
        // marginVertical: 2,
        borderBottomColor: "gray",
        borderBottomWidth: 0.4,
        flexDirection: "row",
        marginLeft: "7%",
        marginRight: "5%",
        paddingVertical: 10



    },
    header: {
        fontSize: 24,
        // backgroundColor: "#fff"
    },
    title: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#575757"

    },
    view: { flex: 1, alignItems: "center", justifyContent: "space-between" },
});