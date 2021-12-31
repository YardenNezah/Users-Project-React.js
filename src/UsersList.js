import React, {useState} from 'react';
import { useParams } from "react-router-dom";
import PageSelector from './PageSelector';
import SearchAndFilter from './SearchAndFilter';
import User from './User';
import './styles/UsersList.css';

const UsersList = ({usersData}) => {
    //Input states:
    const [genderInput, setGenderInput] = useState("All");
    const [searchInput, setSearchInput] = useState("");
    const [ageInput, setAgeInput] = useState("");
    
    //Get the page number (default value: 1):
    let {page} = useParams();
    if(!page) {
        page = 1;
    }

    //Filtering and mapping the users:
    const UsersMapping = () => {
        let filteredUsers = usersData.filter(user => user.name.first.toLowerCase().includes(searchInput.toLowerCase()));
        if (genderInput !== "All") {
            filteredUsers = filteredUsers.filter(user => user.gender === genderInput);
        }
        if (ageInput !== "") {
            filteredUsers = filteredUsers.filter(user => user.dob.age === parseInt(ageInput));
        } 

        return (
            filteredUsers.slice((page * 10 - 10), (page * 10 - 1)).map(user => (
                <User key={user.cell} user={user} />
            ))
    )}
    
    
    return (
        <div className='main'>
            <h1>All Users</h1>
            
            <SearchAndFilter
                searchInput={searchInput}
                ageInput={ageInput}
                genderInput={genderInput}
                setSearchInput={setSearchInput}
                setAgeInput={setAgeInput}
                setGenderInput={setGenderInput}
                UsersMapping={UsersMapping} />

            <table className='tableContainer'>
                <thead>
                    <tr className="tableHeader">
                        <th>Picture</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Gender</th>
                        <th>Age</th>
                    </tr>
                </thead>
                <tbody>
                    <UsersMapping />
                </tbody>
            </table>
            <PageSelector />
        </div>
    )
}

export default UsersList;
