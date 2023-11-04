import{createStore,combineReducers} from 'redux'
import toggleReducer from '../Reducers/toggleReducer'

const rootReducer=combineReducers({
    toggle:toggleReducer,
})

const store=createStore(rootReducer);

export default store;