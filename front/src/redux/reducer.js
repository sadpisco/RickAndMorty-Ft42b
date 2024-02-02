import { ALL_CHARACTERS, ALL_EPISODES, ALL_LOCATIONS, PAGINATION_CHARACTERS, FIRST_CHARACTERS, ADD_CHARACTER} from "./actions"

const initialState = {
    allCharacters: [],
    paginatedCharacters: [],
    searchCharacters: [],
    allEpisodes: [],
    allLocations: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case ALL_CHARACTERS:
            return { ...state, allCharacters: action.payload};
        case PAGINATION_CHARACTERS:
            let firstValue = (action.payload.page - 1) * action.payload.cardsPerPage;
            let secondValue = action.payload.page * action.payload.cardsPerPage;
            let result = state.allCharacters?.slice(firstValue, secondValue);
            return { ...state, paginatedCharacters: result};
        case FIRST_CHARACTERS:
            return { ...state, searchCharacters: action.payload};
        case ADD_CHARACTER:
            let filtered = state.allCharacters?.find((element) => element.id == action.payload);
            state.searchCharacters.unshift(filtered);
            return { ...state};
            
        case ALL_EPISODES:
            return { ...state, allEpisodes: action.payload};
        case ALL_LOCATIONS:
            return { ...state, allLocations: action.payload};
        default:
            return {
                ...state,
            }
    };
};

export default rootReducer;