
import React, { Component } from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Button, { Back, Heart } from '../../utils/Button';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    View,
    Text,
    StyleFavSheet,
    ScrollView, TouchableOpacity,
    Image, ImageBackground, FlatList,
    Animated
} from 'react-native';
import StyleFav from "./Style"
import Style from './Style';
export default class MyFavourites extends Component {
    constructor(props) {
        super(props);

        this.state = {
            scrollY: new Animated.Value(0),
            yOffset: 0
        };
    }


    renderItem({ item, index }) {
        let des = `Any Sandwich (6 inch) + Cookies
(2 pcs)/Lays Chips + Soft Drink`;
        return (
            <View style={StyleFav.item}>
                <View >

                    <ImageBackground
                        imageStyle={{ borderRadius: 5 }}
                        style={{
                            height: 90,
                            width: 90,
                            resizeMode: 'contain',
                        }}
                        source={require('../../assets/Images/image1.png')}
                    >
                        <View style={StyleFav.uptoView}>

                            <Text style={StyleFav.upto}>Up to 20% off</Text></View>

                    </ImageBackground>
                </View>
                <View style={{ flex: 1, marginLeft: 10 }}>
                    <Text style={[StyleFav.title, { fontSize: 16 }]}>Subway - Disco</Text>
                    <View style={{ flex: 1, }}>
                        <Text style={{ color: "#a8acb7" }}>
                            {des.substr(0, 30) + '...'}
                        </Text>
                        <Text style={{ color: "#8a8a8a", fontSize: 16 }}>
                            2.00 AED Delivery free
                        </Text>
                    </View>
                    <View style={{ flex: 1, flexDirection: "row", paddingRight: 10, alignItems: "center", justifyContent: "space-between" }}>
                        <View style={StyleFav.row}>
                            <View style={StyleFav.add}>
                                <Text style={StyleFav.addtxt}>30 min</Text>
                            </View>
                            <Icon name="star" style={StyleFav.icon} />
                            <Text>4.5(2k+)</Text>
                        </View>
                        <TouchableOpacity>
                            <Icon name="heart" style={StyleFav.icon} />
                        </TouchableOpacity>
                    </View>
                </View>

            </View >
        )
    };

    render() {

        return (



            <ImageBackground
                style={{ flex: 1 }}
                resizeMode="cover"
                // resizeMode="contain"
                source={require('../../assets/Images/bg1.png')}>
                <View style={{ padding: 30 }}>
                    <Back props={this.props} />
                    <Text style={{ justifyContent: "center", alignSelf: "center", color: "#fff", fontSize: 18 }}>My Favourites</Text>
                </View>
                <View style={StyleFav.main}>
                    <Text style={[Style.heading, { fontSize: 16 }]}>FAVOURITE RESTAURANT</Text>
                    <View style={StyleFav.container}>
                        <FlatList
                            data={[12, 12, 2, 2, 324, 34534, 545]}
                            renderItem={this.renderItem.bind(this)}
                            keyExtractor={(item, index) => { return index.toString() }}
                            onEndThreshold={0}

                        />
                    </View>
                </View>


            </ImageBackground >






        );
    }
}
