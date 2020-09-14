import React from 'react';

function UserProfile(props) {
    console.log(props);
    return (
        <div>
            <h2>{props.user.name}</h2>
            <h3>{props.user.age}</h3>
        </div>
    );
}

export default UserProfile;