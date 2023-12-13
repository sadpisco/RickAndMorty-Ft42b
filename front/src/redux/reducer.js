import { FIRST_CHARACTERS, FIRST_LOCATIONS, FIRST_EPISODES, CHAR_BY_ID, EMPTY_CHARS, RESTORE_CHARS, LANDING_CHARACTERS, CHAR_DETAIL } from "./actions"

const initialState = {
    firstCharacters: [],
    characters: [],
    charactersDetail: [],
    episodes: [],
    locations: []
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FIRST_CHARACTERS:
            if(state.firstCharacters.length == 0){
                return { ...state, firstCharacters: action.payload};
            } else if (!state.firstCharacters.length == 0){
                return { ...state };
            };
        case CHAR_BY_ID:
            const result = state.firstCharacters.find((element)=> element.id == action.payload.id);
            if(result == undefined){
                state.firstCharacters.unshift(action.payload);
                return { ...state };
            } else {
                alert(`Character number ${action.payload.id} has already been added`);
                return { ...state };
            }
        case EMPTY_CHARS:
            return { ...state, firstCharacters: []};
        case RESTORE_CHARS:
            return { ...state, firstCharacters: action.payload};
        case LANDING_CHARACTERS:
            return { ...state, characters: action.payload};
        case CHAR_DETAIL:
            return { ...state, charactersDetail: action.payload};
        case FIRST_LOCATIONS:
            return { ...state,  locations: action.payload };
        case FIRST_EPISODES:
            return { ...state, episodes: action.payload};
        default:
            return {
                ...state,
            }
    };
};

export default rootReducer;