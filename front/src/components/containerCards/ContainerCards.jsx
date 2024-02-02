import React from 'react';
import styles from './ContainerCards.module.css'
import CharCard from '../CharCards/CharCard/CharCard';
import { useDispatch } from 'react-redux';
import { paginatedCharacters } from '../../redux/actions';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import { useState } from 'react';

export default function ContainerCards({characters, initialPage, charsPerPage, numberOfPages}){
    const [pageNumber, setPageNumber ] = useState(initialPage);
    const dispatch = useDispatch();
    const handlePrevious = function(){
        if (pageNumber == 1){
            return ;
        } else if ( pageNumber > 1){
            dispatch(paginatedCharacters(pageNumber - 1, charsPerPage));
            setPageNumber(pageNumber - 1);
        };
    };
    const handleNext = function(){
        if (pageNumber == numberOfPages) {
            return ;
        } else if (pageNumber < numberOfPages){
            dispatch(paginatedCharacters(pageNumber + 1, charsPerPage));
            setPageNumber(pageNumber + 1);
        };
    };

    return(
        <div className = {styles.holeContainer}>
        <div className = {styles.divContainer}>
        {characters?.map((element)=> <CharCard character = {element} key = {element.id}/>)}
        </div>
        <div className = {styles.divPaginacion}>
            <button onClick = {handlePrevious} className = {styles.paginationBtn}><NavigateBeforeIcon/><p className = {styles.btnText}>Previous</p></button>
            <button onClick = {handleNext} className = {styles.paginationBtn}><p className = {styles.btnText}>Next</p><NavigateNextIcon/></button>

        </div>
        </div>
    );
};