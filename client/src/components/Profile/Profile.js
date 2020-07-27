import React from "react";
import { Jumbotron } from "react-bootstrap";

const Profile = ({ user }) => {
    return (
        <Jumbotron>
            <h1>Hello, {user.nickname}</h1>
            <p>
                You have entered the realm.
            </p>
        </Jumbotron>
    );
};

export default Profile;