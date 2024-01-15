import React from 'react'

function Login() {
    return (
        <section className='flex justify-center items-center'>

            {/* Login Form */}
            <div className='px-4'>
                <h2>Login</h2>
                <form id='login-form'>
                    <div className='my-3'>
                        <label className='pr-3' for='email-login'>Email:</label>
                        <input className='px-2' id='email-login' type='email' placeholder='john@johndoe.com' />
                    </div>
                    <div className='my-3'>
                        <label className='pr-3' for='passowrd-login'>Password:</label>
                        <input className='px-2' id='passowrd-login' type='passowrd' placeholder='password'/>
                    </div>
                    <button>Login</button>
                </form>
            </div>

            {/* SignUp Form */}
            <div className='px-4'>
                <h2>Signup</h2>
                <form id='signup-form'>
                    <div className='my-3'>
                        <label className='pr-3' for='email-signup'>Email:</label>
                        <input className='px-2' id='email-signup' type='email' placeholder='john@johndoe.com' />
                    </div>
                    <div className='my-3'>
                        <label className='pr-3' for='passowrd-signup'>Password:</label>
                        <input className='px-2' id='passowrd-signup' type='passowrd' placeholder='password'/>
                    </div>
                    <button>SignUp</button>
                </form>
            </div>
        </section>
    )
}

export default Login
