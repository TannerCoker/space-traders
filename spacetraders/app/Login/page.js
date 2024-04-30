'use client'

import React, { useState } from 'react'
import { useFormState, useFormStatus } from 'react-dom'
import RegisterForm from '@/components/RegisterForm'

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'


const Login = () => {
    const [displayedCard, setDisplayedCard] = useState();
    
    
    const switchView = (view) => {
        setDisplayedCard(view);
    }

    const cardContent = () => {
        switch(displayedCard) {
            case 'login':
                return (
                    <div className=''>
                        
                        <button type='button' onClick={() => {switchView('')}}>back</button>
                    </div>
                )
            case 'register':
                return (
                    <div className=''>
                        <RegisterForm view={switchView}/>
                    </div>
                )
            default: 
                return (
                    <div className='flex flex-col w-full items-center'>
                        <button type='button' className='my-5 w-32' onClick={() => {switchView('login')}}>Login</button>
                        <div className='flex w-full border-t border-customAccent'></div>
                        <button className='my-5 w-32' onClick={() => {switchView('register')}}>Register</button>
                    </div>
                )
        }
    }

    return (
        <div className='flex h-screen justify-center items-center'>
            <Card className='w-[350px] border-customSecondary'>
                <CardHeader className='items-center'>
                    <CardTitle className="text-2xl text-customPrimary">Space Traders</CardTitle>
                </CardHeader>
                <CardContent>
                    {cardContent()}
                </CardContent>
            </Card>
        </div>
    )
}

export default Login