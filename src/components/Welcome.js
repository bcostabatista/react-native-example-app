import React from 'react'
import {
    ScrollView,
    View,
    Image
} from 'react-native'
import { Colors } from '../themes/default/Styles'
import { Button } from '../themes/default'
import Navigation from '../utils/Navigation'
import { LinearGradient } from 'expo'

export default class WelcomeScreen extends React.Component {

    constructor(props) {
        super(props)
        this._nav = new Navigation(this.props.navigator)
    }

    auth = () => {
        this._nav.push('homeScreen')
    }

    render() {
        return (
            <LinearGradient 
                colors={['#fff', '#bcbcbc']} 
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
            >
                <ScrollView contentContainerStyle={{
                    flex: 1,
                    paddingHorizontal: 20
                }}>
                    <View style={{alignItems: 'center' }}>
                        <Image
                            source={require('../../assets/images/icon.png')}
                            style={{ 
                                margin: 150,
                                width: 150, 
                                height: 150 
                            }}
                        />
                    </View>
                    <View style={{
                        justifyContent: 'flex-end'
                    }}>
                        <Button 
                            color={Colors.white}
                            backgroundColor={Colors.reddishPink}
                            borderColor={'transparent'}
                            action={this.auth}
                            text={'Let me in'}
                        />
                    </View>
                </ScrollView>
            </LinearGradient>
        )
    }
}