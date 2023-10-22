import React from 'react'
import {LOGO_URL_header} from '../utils/constants'

import Body from './Body'

const Header = () => {
  return (
    <div className="flex justify-between bg-pink-50 shadow-sm ">
        <div className='flex items-center'>
            <img className='w-1/2 m-4' src={LOGO_URL_header} />
        </div>

        <div className='flex items-center'>
        <ul className='flex p-4 m-4 '>

        <li className='px-4'> <a href='https://augmntx.com/why'>why</a>   </li>
        <li className='px-4'> <a href='https://augmntx.com/profile/php-developer-rajput-b/axo2637#'>industries</a> </li>
        <li className='px-4'> <a href='https://augmntx.com/profiles'>Find Dev</a> </li>
        <li className='px-4'> <a href='https://augmntx.com/join'>Apply as Vendor</a></li>
        <li><button className='bg-blue-600 px-4 rounded-full text-white'> Hire Dev</button></li>
        <li className='px-4'> <a href='https://augmntx.com/admin/auth/login'>Login</a></li>       
         
        </ul>

        </div>
        

     
    </div>
    
    




  )
}

export default Header