import React from 'react';

const Newpassword = () => {


    return (


        <div className="container mx-auto">
            <div className="flex justify-center px-6 my-12">
                {/* Row */}
                <div className="w-full xl:w-3/4 lg:w-11/12 flex">
                    {/* Col */}
                    <div className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover rounded-l-lg" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1566299589192-bdf059d4b0be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fHNyaSUyMGxhbmthfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60")'}} />
                    {/* Col */}
                    <div className="w-full lg:w-1/2 bg-white p-5 rounded-lg lg:rounded-l-none">
                        <div className="px-8 mb-4 text-center">
                            <h3 className="pt-4 mb-2 text-2xl">Create New Password</h3>
                            <p className="mb-4 text-sm text-gray-700">
                                You can create a new password, and log in to the account again!
                            </p>
                        </div>
                        <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">

                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-2">
                                    <label htmlFor className="text-xs font-semibold px-1">New Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="Password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="********" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex -mx-3">
                                <div className="w-full px-3 mb-4">
                                    <label htmlFor className="text-xs font-semibold px-1">Confirm New Password</label>
                                    <div className="flex">
                                        <div className="w-10 z-10 pl-1 text-center pointer-events-none flex items-center justify-center"></div>
                                        <input type="Password" className="w-full -ml-10 pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500" placeholder="********" />
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 text-center">
                                <button className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline" type="button">
                                    Reset Password
                                </button>
                            </div>
                            <hr className="mb-6 border-t" />
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./register.html">
                                    Create an Account!
                                </a>
                            </div>
                            <div className="text-center">
                                <a className="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800" href="./index.html">
                                    Already have an account? Login!
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default Newpassword;