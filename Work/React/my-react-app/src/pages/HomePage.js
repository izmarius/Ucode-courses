import React from 'react';
import UserProfile from '../components/UserProfile';

function HomePage() {
    const users = [{name: 'Marius', age: 28}];

    return (
        <div>
            <h1>Home Page</h1>
            {users.map((user, index) => (<UserProfile user = {user} key = {index}></UserProfile>
            ))
            }
        </div>

    );
}

export default HomePage;