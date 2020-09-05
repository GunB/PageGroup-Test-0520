import actions from './actions'

const initialState = {}

export default function sampleReducer(state = initialState, action) {
    switch (action.type) {
        case actions.LOAD:
            return action.payload
        default:
            return state
    }
}