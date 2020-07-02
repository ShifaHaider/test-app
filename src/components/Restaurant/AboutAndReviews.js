import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/Fontisto';

import {
    Text,
    View,
    TextInput, Image,
    KeyboardAvoidingView,
    ActivityIndicator,
    TouchableOpacity,
    ScrollView,
    Platform,
    StyleSheet,
} from 'react-native';


export class Review extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <View style={{
                backgroundColor: "#fff",
                flex: 1
            }}>
                <Text style={{ padding: 20 }}>10 Reviews</Text>
                {[2, 34, 4].map((key, val) => {
                    return (
                        <View style={{
                            padding: 10
                        }}>

                            <View style={styles.view}>
                                <View style={{ flexDirection: "row" }}>
                                    <View style={styles.iconView}>
                                        <Image
                                            source={require('../../assets/Images/32.jpg')}
                                            style={styles.image}
                                        />
                                    </View>
                                    <View >
                                        <View style={styles.row}>
                                            <Text style={styles.txt}>Ahsan khan </Text>
                                            <Icon name="star" style={{ color: "#ffc000", fontSize: 16 }} />
                                            <Text style={{ color: "grey" }}> 4.5 </Text>
                                        </View>
                                        <Text style={{ color: "grey" }}>May 4 ,2020</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 1, }}>

                                    <Text style={styles.p}>
                                        United States address complete with street, city, state, zip codes. Be careful though: some of these could end up being real addresses
                              </Text>
                                </View>
                            </View>

                        </View>
                    )
                })

                }
            </View>
        );
    }
}

class About extends Component {
    constructor() {
        super();
        this.state = {};
    }
    componentDidMount() { }

    render() {
        return (
            <View style={{
                backgroundColor: "#fff",
                flex: 1
            }}>
                <View style={{
                    flexDirection: "row", padding: 10
                }}>
                    <Icon name="map-marker-alt" style={{ marginHorizontal: 20, color: "#f3525c", fontSize: 20 }} />
                    <View style={{ flex: 1, }}>

                        <Text style={{ flex: 1, color: "#b2b2b2" }}>
                            United States address complete with street, city, state, zip codes. Be careful though: some of these could end up being real addresses
                </Text>
                    </View>
                </View>
                <View style={{
                    flexDirection: "row", padding: 10
                }}>
                    <Icon name="stopwatch" style={{ marginHorizontal: 20, color: "#f3525c", fontSize: 20 }} />
                    <View style={{ flex: 1, }}>

                        <Text style={{ flex: 1, color: "#b2b2b2" }}>
                            United States address complete with street, city, state, zip codes. Be careful though: some of these could end up being real addresses
                </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    view: {
        padding: 10, borderTopColor: "#f2f2f2",
        borderTopWidth: 2,
    },
    iconView: {
        width: 52,
        height: 52,
        borderRadius: Platform.OS === 'ios' ? 52 / 2 : 52,
        borderWidth: 1,
        borderColor: '#d3d3d3',
        marginRight: 15
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: Platform.OS === 'ios' ? 50 / 2 : 50,
    },
    row: { flexDirection: "row", alignItems: "center", },
    txt: { color: "grey", fontSize: 18 },
    p: { flex: 1, color: "#b2b2b2" },


});

export default About;
