import React from 'react';
import './styles/UsersList.css';

const SearchAndFilter = ({searchInput, ageInput, genderInput, setAgeInput, setSearchInput, setGenderInput, UsersMapping}) => {

    //Handling remove filters request
    const removeFilters = (e) => {
        e.preventDefault();
        setGenderInput("All");
        setAgeInput("");
        setSearchInput("");
    };
    
    return (
        <form className='searchAndFilterContainer'>
            <input value={searchInput} onChange={(e) => setSearchInput(e.target.value) && UsersMapping()} type="text" className="searchAndFilterInput" placeholder="Search by name or email"/>
            <input value={ageInput} onChange={(e) => setAgeInput(e.target.value) && UsersMapping()} type="number" min="18" className="searchAndFilterInput ageInput" placeholder='Age'/>
            <select defaultValue={genderInput} onChange={(e) => setGenderInput(e.target.value) && UsersMapping()} className="searchAndFilterInput genderSelect">
                <option value="All" disabled hidden className='gender'>Gender</option>
                <option value="All">All</option>
                <option value="male">male</option>
                <option value="female">female</option>
            </select>
            <button onClick={(e) => removeFilters(e)} className="removeFiltersBtn">Remove filters</button>
        </form>
    )
}

export default SearchAndFilter;
