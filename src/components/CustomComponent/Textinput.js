import React, { Component } from 'react'
import { Text, View, TextInput, Image } from 'react-native'

export default class Textinput extends Component {
    onChange(name, val) {
        this.setState({ [name]: val });
    }
    render() {
        return (
            <View style={{
                marginVertical: 10,
                flexDirection: 'row',
                width: '90%',
                alignItems: "center",
                borderBottomColor: "#b2b2b2",
                borderBottomWidth: 1,
                height: 40,
            }}>
                {!this.props.iconNotAvailable && <Image
                    style={{
                        width: 20,
                        height: 20,
                        alignSelf: 'center',
                        resizeMode: 'contain',
                    }}
                    source={this.props.iconImage}
                />}
                <View style={{ flex: 1, paddingHorizontal: 10 }}>
                    <Text style={{ color: "#f3525c", fontWeight: "bold" }}>{this.props.heading}</Text>
                    <TextInput
                        underlineColorAndroid="transparent"
                        style={{
                            color: 'grey',
                            marginRight: 10,
                        }}
                        placeholder={this.props.placeholder}
                        placeholderTextColor="#b2b2b2"
                        onChangeText={(val) => this.props.onChange(this.props.onChangeKey, val)}
                        value={this.props.val}
                    />
                </View>

            </View>
        )
    }
}
