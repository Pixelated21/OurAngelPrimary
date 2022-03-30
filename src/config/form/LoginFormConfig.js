import {useState,useContext} from "react";
import * as yup from 'yup';
import {FormContext} from "../../context/FormContext";
import AuthAPI from "../../api/AuthAPI";


const loginSchema = yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().required('Password is required'),
})



const LoginFormConfig = () => {

    const {login} = AuthAPI()

    const {loginForm} = useContext(FormContext)

    const loginConfig = {
        loginForm,
        loginSchema,
        login: login,
    }

    return {...loginConfig}


}

export default LoginFormConfig





