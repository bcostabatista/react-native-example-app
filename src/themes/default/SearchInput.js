import * as React from 'react'
import { View, TextInput } from 'react-native'
import Styles, { Colors, Icon } from './Styles'

export class CustomSearchInput extends React.Component {
    render() {
        return (
            <View style={{ 
                flexDirection: 'row', 
                borderBottomColor: Colors.borderDarkGrey,
                borderBottomWidth: 0.8,
                marginBottom: 25
            }}>
                <TextInput
                    {...this.props}
                    style={[Styles.searchInput, {width: '90%', height: 30}]}
                    placeholderTextColor={Colors.placeholderGrey}
                    autoCapitalize={'words'}
                    underlineColorAndroid="transparent"
                />
                <Icon 
                    name={'search'} 
                    size={15}
                    color={Colors.white} 
                    style={{
                        width: '10%', 
                        height: 30,
                        marginTop: 50
                    }} 
                />
            </View>
        )
    }
}