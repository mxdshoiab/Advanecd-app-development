import React from 'react'


const Register = () => {
    
    return (
        <>
            <div className='fixed top-0 left-0 h-screen w-screen flex justify-center items-center flex-col bg-login-background bg-cover'>
            <h1 className='text-green-50 font-serif text-4xl '>REGISTER</h1>
                <form className='flex flex-col gap-5 bg-slate-50/80 h-3/6 w-[30%] items-center justify-center rounded-md shadow-md shadow-orange-100'>
                    <input type="text" name="" id="" placeholder='Name' className='bg-emerald-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="number" name="" id="" placeholder='Phone' className='bg-emerald-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="email" name="" id="" placeholder='Email' className='bg-emerald-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <input type="password" name="" id="" placeholder='Password' className='bg-emerald-100/50 outline-none border-2 border-transparent focus:border-b-2 focus:border-b-orange-300 rounded-sm w-[80%] text-black placeholder:text-black p-2 shadow-sm' />
                    <button type="submit" className='w-[80%] bg-emerald-500 text-white p-2 rounded-sm font-bold mt-4 shadow-md shadow-emerald-500/40'>Register</button>
                    
                </form>
            </div>
        </>
    )
}

export default Register