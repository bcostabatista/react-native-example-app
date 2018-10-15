import * as React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import { Colors, Icon } from './Styles'

export const CustomHeader = ({ title, icon, action, hasBorder }) => <View
    style={[{marginBottom: 10, marginTop: 40}]}>
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <TouchableOpacity style={[{width: 28, height: 28}]} onPress={() => { typeof action !== 'undefined' ? action() : null }}>
            <Icon
                name={icon}
                size={18}
                color={Colors.white}
            />
        </TouchableOpacity>
        <View style={[{flex: 1, left: -15}]}>
            <Text style={{
                textAlign: 'center',
                fontSize: 20,
                color: Colors.white,
                fontFamily: 'avenir'
            }}>{title}</Text>
        </View>
    </View>
    {(typeof hasBorder !== 'undefined' && hasBorder) ? 
        <View style={[{width: '100%', height: 0.6, backgroundColor: '#898989', marginTop: 10}]}></View>
    : null}
</View>