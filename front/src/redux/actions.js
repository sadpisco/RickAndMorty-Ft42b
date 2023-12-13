import axios from 'axios';
//CHARACTER ACTIONS
export const FIRST_CHARACTERS = 'FIRST_CHARACTERS';
export const LANDING_CHARACTERS = 'LANDING_CHARACTERS';
export const CHAR_BY_ID = 'CHAR_BY_ID';
export const CHAR_DETAIL = 'CHAR_DETAIL';
export const EMPTY_CHARS = 'EMPTY_CHARS';
export const RESTORE_CHARS = 'RESTORE_CHARS';

//LOCATION ACTIONS
export const FIRST_LOCATIONS = 'FIRST_LOCATIONS';

//EPISODE ACTIONS
export const FIRST_EPISODES = 'FIRST_EPISODES';

//CHARACTERS FUNCTIONS
export function landingCharacters(){
    const endPoint = `http://localhost:3015/first20Characters`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            console.log(data);
            dispatch({
                type: LANDING_CHARACTERS,
                payload: data
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};

export function firstCharacters(){    
    const endPoint = `http://localhost:3015/first20Characters`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: FIRST_CHARACTERS,
                payload: data
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};

export function charactersById(id){
    const endPoint = `http://localhost:3015/IndividualCharacterId/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: CHAR_BY_ID,
                payload:data
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};

export function emptyChars (){
    return{
        type: EMPTY_CHARS,
        payload: 1
    };
};

export function restoreChars(){
    const endPoint = `http://localhost:3015/first20Characters`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            console.log(data);
            dispatch({
                type: RESTORE_CHARS,
                payload: data
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};

export function charactersDetail(id){
    const endPoint = `http://localhost:3015/IndividualCharacterId/${id}`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: CHAR_DETAIL,
                payload:data
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };

}

//LOCATIONS
export function firstLocations(){
    const endPoint = `http://localhost:3015/first20Locations`;
    return async (dispatch) => {
        try {
            const { data } = await axios.get(endPoint);
            dispatch({
                type: FIRST_LOCATIONS,
                payload: data
            });
        } catch (error) {
            console.log(error);
            return {error: error.message};
        };
    };
};

//EPISODES
export function firstEpisodes(){
    return{
        type: FIRST_LOCATIONS,
        payload: 2,
    };
};
