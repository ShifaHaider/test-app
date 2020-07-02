import React, { Component } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native'
import RoutesKey from '../../navigation/routeskey'



export default class Button extends Component {
    render() {
        // console.warn("PROPSs",this.props.keys)

        return (
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
                onPress={() => this.props.props.navigation.navigate(this.props.keys)}>
                <Text style={{ color: '#fff' }}>{this.props.title}</Text>
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
        )
    }
}

const styles = StyleSheet.create({})
