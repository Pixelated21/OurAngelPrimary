import { createContext, useState } from "react";

export const FormContext = createContext(undefined);

const FormContextProvider = ({ children }) => {


    const [formMode, setFormMode] = useState(true);

    const [fields, setFields] = useState({
        name: "",
        email: "",
        date_of_birth: "",
        phone_number: "",
        password: "",
        confirm_password: "",
    });

    const loginForm = [
        { id: 1, type: "email", name: "email", label: "Email", value: fields.email },
        { id: 2, type: "password", name: "password", label: "Password", value: fields.password },
    ];

    const registrationForm = [
        { id: 1, type: "text", name: "name", label: "Full Name", value: fields.name },
        { id: 2, type: "email", name: "email", label: "Email", value: fields.email },
        { id: 3, type: "date", name: "date_of_birth", label: "Date Of Birth", value: fields.date_of_birth },
        { id: 4, type: "password", name: "password", label: "Password", value: fields.password },
        { id: 5, type: "password", name: "confirm_password", label: "Password Confirmation", value: fields.confirm_password },

    ];


    console.log(fields.email)
    console.log(fields.password)




    const resetFields = () => {
        setFields({
            name: "",
            email: "",
            date_of_birth: "",
            phone_number: "",
            password: "",
            confirm_password: "",
        })
    };

    const storeInfo = (event) => {
        const { name, value } = event.target;

        setFields((previous) => ({
            ...previous,
            [name]: value
        }));
    };




    const config = {
        loginForm,
        registrationForm,
        formMode,
        setFormMode,
        storeInfo,
        resetFields,
    };

    return (
        <FormContext.Provider value={{ ...config }}>
            {children}
        </FormContext.Provider>
    );
};

export default FormContextProvider;
