import {applyMiddleware, combineReducers, createStore} from "redux";
import {narutoReducer} from "../narutoReducer";
import {actualQuestionCountReducer} from "../actualQuestionCounterReducer";
import thunk from "redux-thunk";
import {loadState, saveState} from "../utils/localstorage-utils";


let rootReducer = combineReducers({
    testMembers: narutoReducer,
    actualQuestionCounter: actualQuestionCountReducer
})

export const store = createStore(rootReducer, loadState(), applyMiddleware(thunk))



store.subscribe( () => {
    saveState({
        actualQuestionCounter: store.getState().actualQuestionCounter,
        testMembers: store.getState().testMembers
    })

})



//@ts-ignore
window.store = store

export type AppRootStateType = ReturnType<typeof rootReducer>