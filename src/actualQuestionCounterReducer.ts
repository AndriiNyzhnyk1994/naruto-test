
export type QuestionCounterStateType = {
    value: number
}

let initialState: QuestionCounterStateType = {
    value: 0
}

type SetValueFromLocalStorageActionType = {
    type: 'SET-VALUE-FROM-LOCAL-STORAGE'
    newValue: number
}
type ChooseAnswerType = {
    type: 'CHOOSE-ANSWER'
}
export type QuestionCounterActionType = ChooseAnswerType | SetValueFromLocalStorageActionType




export const actualQuestionCountReducer = (state: QuestionCounterStateType  = initialState, action: QuestionCounterActionType) => {
 switch (action.type) {
     case 'CHOOSE-ANSWER': {
         let stateCopy = {...state}
         if(state.value === 12) { //                  CHANGE    CHANE    CHANGE
             return {value: 0}
         }
          else return {value: stateCopy.value + 1}
     }

     default: return  state
 }
}

