import React from 'react'
import Link from 'next/link';

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

const Login = () => {
  return (
    <div className='flex h-screen justify-center items-center'>
        <Card className='w-[350px] border-customSecondary'>
            <CardHeader className='items-center'>
                <CardTitle className="text-2xl text-customPrimary">Space Traders</CardTitle>
            </CardHeader>
            <CardContent className='flex flex-col items-center'>
                <button type='button' className='my-5 w-32'>Login</button>
                <div className='flex w-full border-t border-customAccent'></div>
                <button className='my-5 w-32'>Register</button>
            </CardContent>
        </Card>
    </div>
  )
}

export default Login