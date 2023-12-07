import React from 'react'

function Login() {
    return (
        <section className='flex flex-col justify-center items-center'>
            <h1 className='mb-12'>Login</h1>
            <div className='w-2/5'>
                <form className='flex flex-col'>
                    <div className='flex justify-between my-2'>
                        <label for='email'>Email</label>
                        <input className='border border-black ml-4 px-3 py-1 w-2/3' placeholder='john@johndoe.com' name='email' type='email'></input>
                    </div>
                    <div className='flex justify-between my-2'>
                        <label for='password'>Password</label>
                        <input className='border border-black ml-4 px-3 py-1 w-2/3' placeholder='password123' name='password' type='password'></input>
                    </div>
                    <button className='mt-8' type='submit'>Login</button>
                </form>
            </div>
        </section>
    )
}

export default Login;
