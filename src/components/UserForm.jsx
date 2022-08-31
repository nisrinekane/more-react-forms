import React, { useState } from 'react';
import styles from './UserForm.module.css';


const UserForm = () => {
    // create appropriate useState for each component
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [hasBeenSubmitted, setHasBeenSubmitted] = useState(false);
    // handling errors
    const [inputError, setInputError] = useState("");
    

    // create user
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { firstName, lastName, email, password };
        console.log("Welcome", newUser);
        setHasBeenSubmitted(true)
};

// putting set components inside validation to do it both at the same time
// or else it will generate a double field for each label

    // validate first name
    const handleFirstName = (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setInputError("first name is required!");
        } else if(e.target.value.length < 3) {
            setInputError("first name must be 3 characters or longer!");
        } else {
            setInputError("");
        }
    }

    // validate names fields
    const handleLastName = (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setInputError("last name is required!");
        } else if(e.target.value.length < 3) {
            setInputError("last name must be 3 characters or longer!");
        } else {
            setInputError("");
        }
    }

    // validate names fields
    const handlePassword = (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setInputError("password is required!");
        } else if(e.target.value.length < 3) {
            setInputError("password must be 3 characters or longer!");
        } else {
            setInputError("");
        }
    }

    // check if form submitted
    const formMessage = () => {
        if( hasBeenSubmitted ) {
        return "Thank you for submitting the form!";
    } else {
        return "Welcome, please submit the form";
    }
}


    return (
        <div>
            <form onSubmit={createUser}>
            <h3>{ formMessage() }</h3>

            <div>
                <fieldset className = {styles.inputField}>
                    <label>First Name: </label>
                    <input type="text" onChange={ handleFirstName } />
                {
                    inputError ?
                    <p style={{color:'red'}}>{ inputError }</p> :
                    ''
                }
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Last Name: </label>
                    <input type="text" onChange={ handleLastName } />
                {
                    inputError ?
                    <p style={{color:'red'}}>{ inputError }</p> :
                    ''
                }
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Email Address: </label>
                    <input type="text" onChange={(e) => setEmail(e.target.value)} />
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Password: </label>
                    <input type="text" onChange={ handlePassword } />
                {
                    inputError ?
                    <p style={{color:'red'}}>{ inputError }</p> :
                    ''
                }
                </fieldset>
            </div>
            <div>
                <fieldset className = {styles.inputField}>
                    <label>Confirm Password: </label>
                    {/* <input type="text" onChange={ handleInput } />
                {
                    inputError ?
                    <p style={{color:'red'}}>{ inputError }</p> :
                    ''
                } */}
                    <input type="password" onChange={(e) => setPassword(e.target.value)} />
                </fieldset>
            </div>
            <input type="submit" value="Create User" />
        </form>
        <h4>Your form data</h4>
        <div>
            first Name : {firstName}
        </div>
        <div>
            lastName : {lastName}
        </div>
        <div>
            email : {email}
        </div>
        <div>
            password : password
        </div>
        <div>
            password : password
        </div>
        </div>
    );
};

export default UserForm;