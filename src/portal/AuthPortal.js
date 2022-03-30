import ReactDOM from "react-dom";
import { Dialog, Transition } from "@headlessui/react";
import {Fragment, useContext, useEffect, useState} from "react";
import LoginFormConfig from "../config/form/LoginFormConfig";
import {FormContext} from "../context/FormContext";
import RegistrationFormConfig from "../config/form/RegistrationFormConfig";
import {useForm} from 'react-hook-form'
import {yupResolver} from '@hookform/resolvers/yup'

 const AuthPortal = ({displayState,toggle}) => {

     const {storeInfo,formMode,setFormMode} = useContext(FormContext)
     const {loginSchema,loginForm,login} = LoginFormConfig()
     const {registrationSchema,registrationForm} = RegistrationFormConfig()
     const [open, setOpen] = useState(false);
     const schemaState = (formMode) ? registrationSchema : loginSchema
     const {register,handleSubmit,formState:{errors}} = useForm({resolver:yupResolver(schemaState)})

     const formBody = (formMode) ? registrationForm : loginForm
     console.log(errors)


     useEffect(() => {
         setFormMode(formMode)
         setOpen(displayState)
     }, [displayState]);


     return ReactDOM.createPortal(
         <Transition.Root show={open} as={Fragment}>
             <Dialog
                 as="div"
                 className="fixed inset-0 overflow-hidden"
                 onClose={toggle}
             >
                 <div className="absolute inset-0 overflow-hidden">
                     <Dialog.Overlay className="absolute inset-0" />

                     <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10 sm:pl-16">
                         <Transition.Child
                             as={Fragment}
                             enter="transform transition ease-in-out duration-500 sm:duration-700"
                             enterFrom="translate-x-full"
                             enterTo="translate-x-0"
                             leave="transform transition ease-in-out duration-500 sm:duration-700"
                             leaveFrom="translate-x-0"
                             leaveTo="translate-x-full"
                         >
                             <div className="pointer-events-auto w-screen max-w-md">
                                 <form onSubmit={handleSubmit(login)} className="flex h-full flex-col divide-y divide-gray-200 bg-white shadow-xl">
                                     <div className="h-0 flex-1 overflow-y-auto">
                                         <div className="bg-black py-6 px-4 sm:px-6 ">
                                             <div className="flex items-center justify-between">
                                                 <Dialog.Title className="text-lg font-medium text-white"></Dialog.Title>
                                                 <div className="ml-3 flex h-7 items-center">
                                                     <button
                                                         type="button"
                                                         className="rounded-md bg-indigo-700 text-indigo-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-white"
                                                         onClick={() => setOpen(false)}
                                                     >
                                                         <span className="sr-only">Close panel</span>
                                                     </button>
                                                 </div>
                                             </div>
                                             <div className="mt-1">
                                                 <p className="text-sm text-indigo-300"></p>
                                             </div>
                                         </div>
                                         <div className="flex flex-1 flex-col justify-between">
                                             <div className="divide-y divide-gray-200 px-4 sm:px-6">
                                                 <div className="space-y-4 pt-6 pb-5">
                                                     {formBody.map((input) => (
                                                         <div key={input.id}>

                                                             <label
                                                                 htmlFor="project-name"
                                                                 className="block text-sm font-medium text-gray-900"
                                                             >
                                                                 {input.label}
                                                             </label>
                                                             <div className="mt-1">
                                                                 <input
                                                                     type={input.type}
                                                                     {...register(input.name)}
                                                                     id={input.id}
                                                                     value={input.value}
                                                                     onChange={storeInfo}
                                                                     className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                                 />
                                                             </div>
                                                         </div>
                                                     ))}
                                                 </div>
                                             </div>
                                         </div>
                                     </div>
                                     <div className="flex flex-shrink-0 justify-end px-4 py-4">
                                         <button
                                             type="button"
                                             className="rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                             onClick={() => setOpen(false)}
                                         >
                                             Cancel
                                         </button>
                                         <button
                                             type="submit"
                                             className="ml-4 inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                         >
                                             Login
                                         </button>
                                     </div>
                                 </form>
                             </div>
                         </Transition.Child>
                     </div>
                 </div>
             </Dialog>
         </Transition.Root>,
         document.getElementById("portal")
     );}

export default AuthPortal


