import { Font } from 'expo'
import React from 'react'
import {
  NavigationProvider,
  StackNavigation,
} from '@expo/ex-navigation';
import Router from './Routes'
import { LocalStorage } from './src/utils/Storage'
import { setToken } from './src/utils/RestClient'

export default class App extends React.Component {
   
    state = {
        isReady: false,
        hasToken: false
    }

    async componentWillMount() {
        await Font.loadAsync({
            'avenir': require('./assets/fonts/AvenirLTStd-Book.otf'),
            'icomoon': require('./assets/fonts/fontello/font/icomoon.ttf')
        })
        this._storage = new LocalStorage()
        //Retrieving user info
        await this._storage._getUserInfo().then(async res => {
            if(res) {
                await setToken(res[0].token)
                this.setState({hasToken: true})
            }
        })
        this.setState({isReady: true})
    }

    render() {
        if(this.state.isReady) {
            let initialRoute = (!this.state.hasToken ? 'welcomeScreen' : 'homeScreen')
            return (
                <NavigationProvider router={Router}>
                    <StackNavigation initialRoute={initialRoute} />
                </NavigationProvider>
            )
        } else {
            return null
        }
    }
}
