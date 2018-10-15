import Store from 'react-native-store'

const DB = {
    'user': Store.model('user')
}

export class LocalStorage {

    _setUserInfo = async (params) => {
        await DB.user.add({
            id: params.id,
            token: params.token,
            email: params.email,
            name: params.name
        })
    }
    _getUserInfo = async () => {
        return DB.user.find()
    }
    _clear = async () => {
        await DB.user.destroy()
    }

}