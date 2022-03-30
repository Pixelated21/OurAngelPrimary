import react, {useContext} from 'react'
import {FormContext} from "../context/FormContext";

const endpoint = 'http://127.0.0.1:8000/api/'

 const AuthAPI = () => {

     const {fields} = useContext(FormContext);

     const login = async () => {

     }

    return {login}

}

export default AuthAPI


