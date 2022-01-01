import React from 'react';
import { Link } from 'react-router-dom';
import './styles/UserDetails.css';

//Render each individual user as an row in a table:
const User = ({user}) => {
    return (
            <tr>
                <td>
                    <Link to={`/users/${user.login.username}`}>
                        <img src={user.picture.thumbnail} alt="profilePic" className='profilePic' />
                    </Link>
                </td>
                <td>
                    <Link to={`/users/${user.login.username}`}>
                        {user.name.first[0] + user.name.last}
                    </Link>
                </td>
                <td className='emailTd'>
                    <a href={`mailto:${user.email}`} className="email"> {user.email}</a>
                </td>
                <td>{user.gender}</td>
                <td>{user.dob.age}</td>
            </tr>
    )
}

export default User;
