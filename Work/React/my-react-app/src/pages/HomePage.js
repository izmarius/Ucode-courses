import React from "react";
import UserProfile from "../components/UserProfile";
import Form from "../components/Form";

function HomePage() {
  // const users = [
  //     {name: 'Marius', age: 28, email: 'marius@gmail.com'},
  //     {name: 'Mark', age: 30, email: 'mark12@hotmail.com'},
  //     {name: 'Andy', age: 20, email: 'andyyy@gmail.com'}
  // ];

  // return (
  //     <div>
  //         <h1>Home Page</h1>
  //         {users.map((user, index) => <UserProfile user = {user} key = {index}></UserProfile>
  //         )
  //         }
  //     </div>
  // );

  // const authenticated = true;

  // if (authenticated) {
  //     return <h1>You are logged in.</h1>;
  // }
  // return <h1>Please log in</h1>;

  return (
    <div>
      <h1>Home Page</h1>
      <Form></Form>
    </div>
  );
}

export default HomePage;