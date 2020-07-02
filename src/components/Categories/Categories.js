import React, { Component } from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, ImageBackground, Modal, StatusBar } from 'react-native'
import { AddressHeader, TextInput, Button } from "../CustomComponent/index"
import styles from './style'


export default class Categories extends Component {

    constructor() {
        super()
        this.state = {
            request: false,
            itemDetail: "",
            itemName: "",
            itemTime: ""
        }
        this.onChange = this.onChange.bind(this)

    }

    onChange(name, val) {
        this.setState({ [name]: val });
    }
    render() {
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor="white" barStyle="dark-content" />
                <ScrollView>
                    <AddressHeader props={this.props} />
                    <View style={{ flex: 1, paddingHorizontal: 20 }}>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", paddingVertical: 20 }}>
                            <Text style={{
                                color: "#575757",
                                fontWeight: "bold",
                                fontSize: 18
                            }}>Categories</Text>
                            <TouchableOpacity
                                onPress={() => this.setState({ request: true })}
                                style={{
                                    backgroundColor: "#f3525c",
                                    borderRadius: 50,
                                    paddingVertical: 5,
                                    paddingHorizontal: 15
                                }}
                            ><Text style={{
                                color: "#fff"
                            }}
                            >Special Request</Text></TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: "row", flexWrap: "wrap", justifyContent: "space-around" }}>
                            {[{
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            },
                            {
                                Image: require("../../assets/justforui.jpg"),
                                Name: "Fresh Meat"
                            }
                            ].map((v, i) => <View
                                key={i} style={{ height: 100, width: 140, borderRadius: 10, marginBottom: 20 }}>
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
                    {/* {this.Model()}
                     */}

                </ScrollView>
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={this.state.request}
                    onRequestClose={() => {
                        this.setState({ request: false })
                    }}
                >
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                        <TouchableOpacity activeOpacity={1} onPress={() => this.setState({ request: false })} style={{ width: "100%", backgroundColor: `rgba(0, 0, 0, ${0.7})`, position: "absolute" }} >
                            <View style={{ height: 1000 }}></View>
                        </TouchableOpacity>

                        <View style={styles.Box}>
                            <Text style={styles.Heading}>Special Request </Text>
                            <View style={styles.CodeBox}>

                                <TextInput heading="ITEM NAME" placeholder={"Type item name"} val={this.state.itemNmae} iconNotAvailable={true} onChange={this.onChange} onChangeKey={"itemName"} />
                                <TextInput heading="TYPE PICKUP DETAILS" placeholder={"Type pickup details"} val={this.state.itemDetails} iconNotAvailable={true} onChange={this.onChange} onChangekey={"itemDetails"} />
                                <TextInput heading="PICKUP TIME" placeholder={"Select time"} iconNotAvailable={true} val={this.state.itemTime} onChange={this.onChange} onChangeKey={"itemTime"} />

                            </View>

                            <TouchableOpacity
                                activeOpacity={1}
                                style={{
                                    backgroundColor: '#393939',
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
                                onPress={() => {
                                    this.setState({ request: false })
                                }}>
                                <Text style={{ color: '#fff' }}>Continue</Text>
                                <Image
                                    style={{
                                        width: 40,
                                        height: 40,
                                        alignSelf: 'center',
                                        resizeMode: 'contain',
                                        position: "absolute",
                                        right: 5
                                    }}
                                    source={require('../../assets/Images/right-arrow.png')}
                                />
                            </TouchableOpacity>

                        </View>



                    </View>






                </Modal>

            </View>
        )
    }
}
