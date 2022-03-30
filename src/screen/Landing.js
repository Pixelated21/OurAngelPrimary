import { useContext, useState} from 'react'
import AuthPortal from "../portal/AuthPortal";
import config from "../config/landingPageConfig";

import {FormContext} from "../context/FormContext";
import Navigation from "../component/Navigation";
const {metrics,footerNavigation,features} = config




export default function Landing() {

    const [loginPortalState, setLoginPortalState] = useState(false);
    const {setFormMode} = useContext(FormContext)

    const authPortalToggle = () => {
        setLoginPortalState((previous) => !previous)
    }

    const authPortalType  = (type) => {
       (type === 'login') ? (setFormMode(false)) : setFormMode(true)
        authPortalToggle()
    }


    return (
        <>
            <AuthPortal displayState={loginPortalState} toggle={authPortalToggle} />

            <div className="bg-gray-200">

                <Navigation triggers={authPortalType}/>

                <main>
                    {/* Hero section */}
                    <div className="relative">
                        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-200" />
                        <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                            <div className="relative shadow-xl sm:rounded-2xl sm:overflow-hidden">
                                <div className="absolute inset-0">
                                    <img
                                        className="h-full w-full object-cover"
                                        src="https://image.shutterstock.com/z/stock-vector-fast-food-seamless-pattern-in-hand-drawn-doodle-style-with-sketh-objects-on-junk-kitchen-theme-with-770613382.jpg"
                                        alt="People working on laptops"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-red-700 mix-blend-multiply" />
                                </div>
                                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                                        <span className="block text-white">Take control of your</span>
                                        <span className="block text-indigo-200">children nutrition</span>
                                    </h1>
                                    <p className="mt-6 max-w-lg mx-auto text-center text-xl text-indigo-200 sm:max-w-3xl">
                                        With our e-voucher system you will have a reliable and trackable way of ensuring
                                        your child gets the nutrition they need to be a change in the world.
                                    </p>
                                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                                        <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-1 sm:gap-5">
                                            <a
                                                href="#"
                                                className="flex duration-300 items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-20"
                                            >
                                                Get started
                                            </a>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Logo Cloud */}
                    <div className="bg-gray-200">
                        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                            <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                                Trusted by various schools around the world
                            </p>
                            <div className="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img className="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage" />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                                        alt="StaticKit"
                                    />
                                </div>
                                <div className="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                                        alt="Transistor"
                                    />
                                </div>
                                <div className="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
                                    <img
                                        className="h-12"
                                        src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                                        alt="Workcation"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Gradient Feature Section */}
                    <div className="bg-gradient-to-r from-purple-800 to-red-700">
                        <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 sm:pt-20 sm:pb-24 lg:max-w-7xl lg:pt-24 lg:px-8">
                            <h2 className="text-3xl font-extrabold text-white tracking-tight">Built for your ease of mind!</h2>
                            <p className="mt-4 max-w-3xl text-lg text-purple-200">
                                With all the features you need and more easily and readily available at your fingertips, without any hassle
                            </p>
                            <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
                                {features.map((feature) => (
                                    <div key={feature.id}>
                                        <div>
                    <span className="flex items-center justify-center h-12 w-12 rounded-md bg-white bg-opacity-10">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                    </span>
                                        </div>
                                        <div className="mt-6">
                                            <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                                            <p className="mt-2 text-base text-purple-200">{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>



                    {/* CTA Section */}
                    <div className="bg-gray-200">
                        <div className="max-w-4xl mx-auto py-16 px-4 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 lg:flex lg:items-center lg:justify-between">
                            <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                                    <span className="block">Ready to get started?</span>
                                <span className="-mb-1 pb-1 block bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
                    login or create an account.
              </span>
                            </h2>
                            <div className="mt-6 space-y-4 sm:space-y-0 sm:flex sm:space-x-5">
                                <button
                                    onClick={() => authPortalType('login')}
                                    className="flex items-center justify-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-origin-border px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white hover:from-purple-700 hover:to-indigo-700"
                                >
                                    Login
                                </button>
                                <button
                                    onClick={() => authPortalType('register')}
                                    className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-indigo-800 bg-indigo-50 hover:bg-indigo-100"
                                >
                                    Register
                                </button>
                            </div>
                        </div>
                    </div>


                    {/* Stats section */}
                    <div className="relative bg-gray-900">
                        <div className="h-80 absolute inset-x-0 bottom-0 xl:top-0 xl:h-full">
                            <div className="h-full w-full xl:grid xl:grid-cols-2">
                                <div className="h-full xl:relative xl:col-start-2">
                                    <img
                                        className="h-full w-full object-cover opacity-25 xl:absolute xl:inset-0"
                                        src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2830&q=80&sat=-100"
                                        alt="People working on laptops"
                                    />
                                    <div
                                        aria-hidden="true"
                                        className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-900 xl:inset-y-0 xl:left-0 xl:h-full xl:w-32 xl:bg-gradient-to-r"
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8 xl:grid xl:grid-cols-2 xl:grid-flow-col-dense xl:gap-x-8">
                            <div className="relative pt-12 pb-64 sm:pt-24 sm:pb-64 xl:col-start-1 xl:pb-24">
                                <p className="mt-3 text-3xl font-extrabold text-white">
                                    Need more reasons to join us?
                                </p>
                                <p className="mt-5 text-lg text-gray-300">
                                    Trusted around the globe and used by millions of student each day
                                </p>
                                <div className="mt-12 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2">
                                    {metrics.map((item) => (
                                        <p key={item.id}>
                                            <span className="block text-2xl font-bold text-white">{item.stat}</span>
                                            <span className="mt-1 block text-base text-gray-300">
                      <span className="font-medium text-white">{item.emphasis}</span> {item.rest}
                    </span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>

                <footer className="bg-gray-300" aria-labelledby="footer-heading">
                    <h2 id="footer-heading" className="sr-only">
                        Footer
                    </h2>
                    <div className="max-w-7xl mx-auto pt-16  pb-8 px-4 sm:px-6 lg:pt-24 lg:px-8">
                        <div className="xl:grid xl:grid-cols-1 xl:gap-8">
                            <div className=" grid grid-cols-2 gap-8 xl:col-span-2">
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Solutions</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.solutions.map((item) => (
                                                <li key={item.id}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Support</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.support.map((item) => (
                                                <li key={item.id}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                                <div className="md:grid md:grid-cols-2 md:gap-8">
                                    <div>
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Company</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.company.map((item) => (
                                                <li key={item.id}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="mt-12 md:mt-0">
                                        <h3 className="text-sm font-semibold text-gray-400 tracking-wider uppercase">Legal</h3>
                                        <ul role="list" className="mt-4 space-y-4">
                                            {footerNavigation.legal.map((item) => (
                                                <li key={item.id}>
                                                    <a href={item.href} className="text-base text-gray-500 hover:text-gray-900">
                                                        {item.name}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-12 border-t border-gray-200 pt-8 md:flex md:items-center md:justify-between lg:mt-16">
                            <div className="flex space-x-6 md:order-2">
                                {footerNavigation.social.map((item) => (
                                    <a key={item.id} href={item.href} className="text-gray-400 hover:text-gray-500">
                                        <span className="sr-only">{item.name}</span>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                ))}
                            </div>
                            <p className="mt-8 text-base text-gray-400 md:mt-0 md:order-1">
                                &copy; 2020 Workflow, Inc. All rights reserved.
                            </p>
                        </div>
                    </div>
                </footer>
            </div>

        </>
    )
}
