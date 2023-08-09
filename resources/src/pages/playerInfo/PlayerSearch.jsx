import React, { memo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { onSearch } from './../../store/modules/playerInfoSlice';
import { BsSearch } from 'react-icons/bs';

const PlayerSearch = memo(() => {
    const dispatch = useDispatch()
    const [searchValue, setSearchValue] = useState('')
    const onSubmit = (e) => {
        e.preventDefault()
        dispatch(onSearch(searchValue))
        setSearchValue("")
    }
    const onChange = (e) => {
        const value = e.target.value
        setSearchValue(value)
    }
    return (
        <form action="" onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="" className='hide'>선수검색</label>
            <input type="text" value={searchValue} onChange={(e) => onChange(e)} placeholder='선수를 검색하세요' />
            <button type='submit'><BsSearch /></button>
        </form>
    );
});

export default PlayerSearch;