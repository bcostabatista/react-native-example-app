import * as React from 'react'
import { View, Image, Text, TouchableHighlight } from 'react-native'
import Styles from './Styles'

export default class CustomCard extends React.Component {
    render() {
        return (
            <TouchableHighlight onPress={this.props.action} style={Styles.cardContainer}>
                <View style={Styles.card}>
                    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <Text style={Styles.cardTitle}>{this.props.title}</Text>
                    </View>
                    <Text style={Styles.cardDescription}>{this.props.description}</Text>
                    {(this.props.cover ? 
                        <Image style={Styles.cardCover} source={{uri: this.props.cover}} width={'100%'} height={150}/>
                    : null )}
                </View>
            </TouchableHighlight>
        )

    }
}