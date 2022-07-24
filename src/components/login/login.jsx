import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import img from '../assets/images/Signup.png'

function Login() {
    const [value, setValue] = useState('');
    const navigate = useNavigate()
    function Form(e) {
        e.preventDefault();
        console.log('hello');
    }
    const changeName = (e) =>{
        setValue(e.target.value)
    }
    const Yubor = ()=>{
        if (value === '') {
            navigate('/')
        }
        else{
            localStorage.setItem('test', 'true')
            navigate('/sectionOne')
        }
    }
    return (
    <div className='flex w-full h-screen bg-white'>
        <div className=' flex justify-center xs:hidden sm:flex sm:w-[50%] items-center bg-[#C9AC8CED]'>
            <img src={img} alt='rasm' />
        </div>
        <div className=' flex flex-col justify-center items-center md:w-[50%] xs:w-[100%]'>
            <div>
                <h1 className='text-3xl sm:text-xl xs:text-lg text-black font-bold '>Sign up</h1>
                <h1 className='text-black flex sm:text-sm xs:text-[13px] mt-2'>Already have an account? <p className='text-[13px] mt-[2px] ml-2  text-[#549FF9]'> Sign in </p></h1>
            </div>
            <form onSubmit={Form} className='flex flex-col mt-5'>
                <input onChange={changeName}  placeholder='First name' className='xs:w-[80%] sm:w-[200px] border md:w-[270px] lg:w-[270px] xl:w-[270px]  outline-none text-sm p-2 px-6 rounded' type="text" />
                <input onChange={changeName}  placeholder='Last name' className='xs:w-[80%] sm:w-[200px] border md:w-[270px] lg:w-[270px] xl:w-[270px] outline-none text-sm p-2 px-6 mt-3  rounded' type="text" />
                <input onChange={changeName} placeholder='Phone' className='xs:w-[80%] sm:w-[200px] border md:w-[270px] lg:w-[270px] xl:w-[270px] outline-none text-sm p-2 px-6 mt-3  rounded' type="text" />
                <input onChange={changeName} placeholder='Email' className='xs:w-[80%] sm:w-[200px] border md:w-[270px] lg:w-[270px] xl:w-[270px] outline-none text-sm p-2 px-6 mt-3  rounded' type="text" />
                <input onChange={changeName} placeholder='Password' className='xs:w-[80%] sm:w-[200px] border md:w-[270px] lg:w-[270px] xl:w-[270px] outline-none text-sm p-2 px-6 mt-3  rounded' type="text" />
                <button type='Submit' onClick={Yubor}  className='w-[200px rounded-2xl text-white mt-8 p-2 bg-[#152540]'>Next step</button>
            </form>
        </div>
    </div>
  );
}

export default Login;