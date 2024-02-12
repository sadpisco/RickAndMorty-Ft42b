import axios from 'axios';
//CHARACTER ACTIONS
export const ALL_CHARACTERS = 'ALL_CHARACTERS';
export const PAGINATION_CHARACTERS = 'PAGINATION_CHARACTERS';
export const FIRST_CHARACTERS = 'FIRST_CHARACTERS';
export const ADD_CHARACTER = 'ADD_CHARACTER';

//LOCATION ACTIONS
export const ALL_LOCATIONS = 'ALL_LOCATIONS';
export const FIRST_LOCATIONS = 'FIRST_LOCATIONS';

//EPISODE ACTIONS
export const ALL_EPISODES = 'ALL_EPISODES';

//CHARACTERS FUNCTIONS
export function allCharacters(){
    const endPoint = `http://localhost:3015/characters`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: ALL_CHARACTERS,
                payload: data.foundCharacters
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};
export function firstCharacters(){
    const endPoint = `http://localhost:3015/firstCharacters`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: FIRST_CHARACTERS,
                payload: data,
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};
export function paginatedCharacters(page, cardsPerPage){
    return {
        type: PAGINATION_CHARACTERS,
        payload: {
            page: page,
            cardsPerPage: cardsPerPage,
        }
    };
};
export function addCharacter(id){
    return {
        type: ADD_CHARACTER,
        payload: id
    };
};

//LOCATIONS
export function allLocations(){
    const endPoint = `http://localhost:3015/locations`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: ALL_LOCATIONS,
                payload: data.foundLocations
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};

//EPISODES
export function allEpisodes(){
    const endPoint = `http://localhost:3015/episodes`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: ALL_EPISODES,
                payload: data.foundEpisodes
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};
