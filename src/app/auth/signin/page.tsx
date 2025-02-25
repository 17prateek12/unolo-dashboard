import React from 'react'
import Image from 'next/image'
import logo from '../../../asset/unolologo.png';
import SignInButton from '@/components/SignInButton';

const SignIn = () => {
  return (
    <div className='w-full min-h-screen flex justify-center items-center'>
        <div className='flex flex-col justify-center items-center gap-4'>
            <Image src={logo} alt='..' className='w-[10rem] h-[10rem] object-contain' />
            <div className='px-8 py-4 bg-gray-100 border rounded-3xl'>
            <SignInButton />
            </div>
            
        </div>
    </div>
  )
}

export default SignIn