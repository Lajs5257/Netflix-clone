import { useCallback, useState } from 'react';
import Image from 'next/image'
import Input from './components/Input';
const Auth = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');

    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
    }, []);

    

    return (
        <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
            <div className="bg-black w-full h-full lg:bg-opacity-50">
                <nav className="px-12 pt-5">
                    <img src="/images/logo.png" className="h-12" alt="Logo" />
                </nav>
                <div className="flex justify-center">
                    <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
                        <h2 className="text-white text-4xl mb-8 font-semibold">
                            {variant === 'login' ? 'Sign In' : 'Register'}
                        </h2>
                        <div className="flex flex-col gap-4">
                            {variant === 'register' && (
                                <Input
                                    label='Username'
                                    id='name'
                                    value={name}
                                    onChange={(ev: any) => setName(ev.target.value)}
                                />
                            )}
                            <Input
                                label='Email Address'
                                id='email'
                                value={email}
                                onChange={(ev: any) => setEmail(ev.target.value)}
                                type='email'
                            />
                            <Input
                                label='Password'
                                id='password'
                                value={password}
                                onChange={(ev: any) => setPassword(ev.target.value)}
                                type='password'
                            />
                        </div>
                        <button className="bg-red-600 text-white px-6 py-2 rounded-md w-full mt-10 hover:bg-red-700">
                         
                            {variant === 'login' ? 'Login' : 'Sign Up'}
                        </button>
                        <p className='text-neutral-500 mt-12'>
                            {variant === 'login' ? 'First time using Netflix?': 'Already have an account?'}
                            <span onClick={toggleVariant} className='text-white ml-1 hover:underline cursor-pointer'>
                                {variant === 'login' ? 'Create an account': 'Login'}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth;