import {useState,useContext} from "react";
import * as yup from 'yup';
import {FormContext} from "../../context/FormContext";


const registrationSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})


const RegistrationFormConfig = () => {

    const {registrationForm} = useContext(FormContext)

    const registrationConfig = {
        registrationForm,
        registrationSchema
    }

    return {...registrationConfig}


}

export default RegistrationFormConfig





