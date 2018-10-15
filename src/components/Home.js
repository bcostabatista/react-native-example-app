import React from 'react'
import {
    Text,
    View,
    StatusBar,
    ScrollView
} from 'react-native'
import { SearchInput, Card } from '../themes/default'
import Styles, { Colors } from '../themes/default/Styles'
import Navigation from '../utils/Navigation'
import { removeDiacritics } from '../utils/removeDiacritics'
import { PROFESSIONS } from '../utils/Professions'
import { LinearGradient } from 'expo'

export default class HomeScreen extends React.Component {

    state = {
        professions: PROFESSIONS,
        professionsCopy: PROFESSIONS
    }

    _nav = new Navigation(this.props.navigator)

    search(value) {
        let professions = this.state.professionsCopy.filter(p => removeDiacritics(p.profession.toLowerCase()).includes((value ? removeDiacritics(value.toLowerCase()) : value)))
        this.setState({professions: professions})
    }

    render() {
        return (
            <LinearGradient
                colors={['#4c669f', '#3b5998', '#192f6a']} 
                style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    top: 0,
                    height: '100%'
                }}
            >
                <View style={Styles.defaultContainer}>
                    <StatusBar barStyle={'light-content'} />
                    <SearchInput
                        onChangeText={(value) => this.search(value)}
                        placeholder={'Find a profession'}
                    />
                    <ScrollView>
                        {!this.state.professions.length ? 
                            <Text style={[
                                Styles.center,
                                Styles.textMedium,
                                {color: Colors.lightGrey, marginTop: 40}
                            ]}>Nothing found :(</Text>
                        : 
                            this.state.professions.map(p => (
                                    <Card
                                        key={p.id}
                                        title={p.profession}
                                        description={p.description}
                                    />
                                )
                            )
                        }
                    </ScrollView>
                </View>
            </LinearGradient>
        )
    }
}