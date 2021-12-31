import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import './styles/UserDetails.css';

const UserDetails = ({usersData}) => {
    //Get the username from the query params:
    const {username} = useParams();

    //Find, beautify, and render:
    const LoadUser = () => {
        const [isShown, setIsShown] = useState(false);
        return usersData.map(user => {
            if(user.login.username === username) {
            return (
                <div className="wrapper">
                    <div className='primary'>
                        <div key={username} className="userDetailsContainer">
                            <div className='userDetailsHeader'>
                                <img src={user.picture.medium} alt="profilePic" className="profile-img"/>
                                <h2>{`${user.name.first} ${user.name.last}`}</h2>
                            </div>
                            <p><strong>Gender:</strong> {user.gender}</p>
                            <p><strong>Age:</strong> {user.dob.age}</p>
                            <p><strong>Phone Number: </strong>{user.cell}</p> <br />
                            <strong>Email:</strong><a href={`mailto:${user.email}`} onMouseEnter={
                            () => setIsShown(true)
                        }
                        onMouseLeave={
                            () => setIsShown(false)
                    }>
                      <span className='email'>{user.email}</span>  {
                        isShown && (
                            <div className="send-email">
                                Click me to send an Email!
                            </div>
                        )
                    } </a>
                        </div>
                    </div>
                    <div className='secondary'>
                        <iframe title="map" src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDFNfDSiSu9cxB0c6hYqErp9T40oTn-F6U&q=${user.location.coordinates.latitude},${user.location.coordinates.longitude}`}/>
                    </div>
                </div>
            )
        }
        }
    )
}
    

    return (
        <div className='pageContainer'>
            <h1>User Details</h1>
            <h2><i class="bi bi-person"></i> Username: {username}</h2>
            <LoadUser />
            <Link className="backLink" to="/"><i class="bi bi-arrow-left"></i> Back to main page</Link>
        </div>
    )
}

export default UserDetails;


