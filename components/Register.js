import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const Register = () => {

    const [fname,setFname]=useState("");
    const [lname,setLname]=useState("");
    const [job,setJob]=useState("");
    const [organization,setOrganization]=useState("");
    const [website,setWebsite]=useState("");
    const [email,setEmail]=useState("");
    const [phone,setPhone]=useState("");   
    const [password,setPassword]=useState("");
    const [confirmPassword,setConfirmPassword]=useState("");
    const [city,setCity]=useState(""); 
    // const [gender,setGender]=useState("female");

    const navigate =useNavigate();
    
    const handleSubmit=(e)=>{
        e.preventDefault(); 
        let regobj={fname,lname,job,organization,website,email,phone,password,confirmPassword,city} ;
        console.log(regobj);
        
        fetch("http://localhost:8000/posts",{
            method:"POST",
            headers:{'content-type':'application/json'},
            body:JSON.stringify(regobj)
        }).then((res)=>{
           toast.success('Registered successfully.');
           navigate('/login');
        }).catch((err)=>{
            toast.error('Failed:'+err.message);

        });

    }
  return (  
  <div>

       

            <div className='w-1/4 border-2 mx-auto px-12 py-16'>
                <div className='card mx-1/4 '>
                    
                    
                    <div className='card-header border-2'>
                        <h1 className='text-3xl mb-4'>User Registration</h1>
                        <p className='mb-4'>Create your account. Its free and only take a minute</p>
                    </div>


                    <div className='card-body border-2'>
                        <form className='container flex flex-col' onSubmit={handleSubmit}>



                            <div className='grid grid-cols-2'>
                               
                                <input type='text' value={fname} onChange={e=>setFname(e.target.value)} placeholder='FirstName*'  className='border-gray-400 py-1 px-2 '/>
                                <input type='text' value={lname} onChange={e=>setLname(e.target.value)} placeholder='SurName*'  className='border-gray-400 py-1 px-2'/>
                            </div>

                            <div className='mt-5'>
                                <input type='text' value={job} onChange={e=>setJob(e.target.value)} placeholder='Job title*' className='border-gray-400 py-1 px-2 w-full' />
                                <input type='text' value={organization} onChange={e=>setOrganization(e.target.value)} placeholder='Organzation*' className='border-gray-400 py-1 px-2 w-full' />
                            </div>

                            <div className='mt-5'>
                                <input type='text' value={website} onChange={e=>setWebsite(e.target.value)} placeholder='Website*' className='border-gray-400 py-1 px-2 w-full' />
                                <input type='text' value={email} onChange={e=>setEmail(e.target.value)} placeholder='Email*' className='border-gray-400 py-1 px-2 w-full' />
                            </div>

                            <div className='mt-5'>
                            <input type='text' value={phone} onChange={e=>setPhone(e.target.value)} placeholder='Phone Number*' className='border-gray-400 py-1 px-2 w-full' />
                            <input type='text' value={city} onChange={e=>setCity(e.target.value)} placeholder='city*' className='border-gray-400 py-1 px-2 w-full' />
                            </div>

                            <div className='mt-5'>
                            <input type='text' value={password} onChange={e=>setPassword(e.target.password)} placeholder='Password*' className='border-gray-400 py-1 px-2 w-full' />
                            <input type='text' value={confirmPassword} onChange={e=>setConfirmPassword(e.target.value)} placeholder='Confirm Password' className='border-gray-400 py-1 px-2 w-full' />
                            </div>

                            {/* <div className='mt-5'>
                                <label>Gender</label>
                                <br></br>
                                <input type='radio' checked={gender==='male'} value={male} onChange={e=>setGender(e.target.value)} />
                                <label>Male</label>
                                
                                <input type='radio' checked={gender='female'} value={female} onChange={e=>setGender(e.target.value)} />
                                <label>Female</label>

                            </div> */}

                            
                    <div className='card-footer border-2'>
                        <button type='submit' className=' bg-indigo-500 px-4 py-2 text-white rounded-full'>Register</button>                      
                    </div>


                        
                    </form>                        
                    </div>

                 
            </div>
            </div>

      

    </div>
  )
}

export default Register