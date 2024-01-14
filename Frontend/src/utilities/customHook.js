import { useState } from "react";

export const useForm = (callback, initialState ={}) => {
    // Password , email for input 
    // For each input, goes through the values and change 
    // The event.value will be updated accordingly with the new value and then assigned to event.target.name(email, password)

    // {"password": "", "email": ""} -> this object changes his state accordingly to the current value
    const [values, setValues] = useState(initialState);

    const onChange = (event) => {
        setValues({ ...values, [event.target.name]: event.target.value });
        console.log(values);
    };

    const onSubmit = (event) => {
        event.preventDefault();
        callback(); // if we submit the form, we callback the login functionality from graphQL
    }

    return {
        onChange,
        onSubmit,
        values
    }
}