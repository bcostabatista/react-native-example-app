import {
    createRouter
} from '@expo/ex-navigation'
import WelcomeScreen from './src/components/Welcome'
import HomeScreen from './src/components/Home'

module.exports = Routes = createRouter(() => ({
    welcomeScreen: () => WelcomeScreen,
    homeScreen: () => HomeScreen
  }), {
    ignoreSerializableWarnings: true
})