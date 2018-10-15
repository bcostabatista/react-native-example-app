/* @flow */

import * as React from 'react'
import { TouchableOpacity, Text, ActivityIndicator } from 'react-native'
import styles, { Colors } from './Styles'

export const CustomButton = ({ text, action, color, backgroundColor, borderColor, isLoading }) => <TouchableOpacity
    onPress={() => { (typeof action !== 'undefined') ? action() : null } }
    style={[styles.btnDefault, {backgroundColor: backgroundColor, borderColor: borderColor}] }
    >
    {(isLoading) ? <ActivityIndicator color={Colors.white}/>
        : <Text style={[{color: color, top: 3}, styles.textMedium, styles.avenir]}>
            { text }
        </Text>
    }
</TouchableOpacity>
