import { StyleSheet } from 'react-native'

import { createIconSetFromFontello } from '@expo/vector-icons'
import fontelloConfig from '../../../assets/fonts/fontello/config.json'
export const Icon = createIconSetFromFontello(fontelloConfig, 'icomoon')

export const Colors = {
    lightGrey: '#f5f6f6',
    white: '#FFF',
    reddishPink: '#ff3671',
    darkBlue: '#394766',
    darkestBlue: '#303b5e',
    placeholderGrey: '#CCC',
    borderDarkGrey: '#898989'
}

export const inheritance = {
    defaultText: {
        fontFamily: 'avenir'
    }
}

export default StyleSheet.create({
    center: {
        alignItems: 'center', 
        alignContent: 'center', 
        alignSelf: 'center'
    },
    content: {
        marginHorizontal: 10
    },
    contentPadding: {
        paddingHorizontal: 10
    },
    avenir: {
        fontFamily: 'avenir'
    },
    regularFont: {
        fontFamily: 'avenir',
        color: Colors.darkestGrey,
    },
    textSmall: {
        ...inheritance.defaultText,
        fontSize: 14
    },
    textMedium: {
        ...inheritance.defaultText,
        fontSize: 18
    },
    textLarge: {
        ...inheritance.defaultText,
        fontSize: 48
    },
    btnDefault: {
        padding: 14,
        paddingHorizontal: 40,
        borderRadius: 3,
        alignItems: 'center',
        borderWidth: 0.8
    },
    searchInput: {
        color: Colors.lightGrey,
        marginTop: 45,
        paddingBottom: 10,
    },
    defaultContainer: {
        flex: 1,
        paddingHorizontal: 10
    },
    cardContainer: {
        paddingBottom: 10
    },
    card: {
        borderBottomColor: Colors.lightGrey,
        borderBottomWidth: 0.2,
        borderRadius: 5,
        padding: 10,
        backgroundColor: Colors.white
    },
    cardTitle: {
        fontFamily: 'avenir',
        fontSize: 20,
        color: Colors.darkestBlue
    },
    cardDescription: {
        fontFamily: 'avenir',
        fontSize: 15,
        color: Colors.darkGrey,
        paddingTop: 5,
        paddingBottom: 5,
        borderBottomWidth: 0.2
    }
})
