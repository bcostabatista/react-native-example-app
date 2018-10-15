export default class Navigation {
    constructor(navigator) {
        this._nav = navigator
    }
    push = (route, params = null) => {
        if(!params) {
            this._nav.push(route)
        } else {
            this._nav.push(route, params)
        }
    }
    pop = () => {
        this._nav.pop()
    }
    replace = (route, params = null) => {
        if(!params) {
            this._nav.replace(route)
        } else {
            this._nav.replace(route, params)
        }
    }
}