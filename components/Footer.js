import React from 'react'
import { LOGO_URL_footer } from '../utils/constants'

const Footer = () => {
  return (
    <div className='footer bg-black my-5'>
        
        <div className='footer-container'>
        <div className='flex border-b border-gray-400 '>

            <div> <img className='w-1/4' src={LOGO_URL_footer}/> </div>

            <div className='text-white '>
                <div>Information</div>
                <div> <a href='https://augmntx.com/about-us' > About us</a> </div>
                <div> <a href='https://augmntx.com/corporate-information' > Corporate Information </a> </div>
                <div> <a href='https://augmntx.com/press' > Press</a> </div>
                <div> <a href='https://augmntx.com/careers' > Careers</a> </div>
                <div> <a href='https://blog.augmntx.com/' > Blog</a> </div>
                <div> <a href='https://augmntx.com/contact-us' > Contact Us</a> </div>                
            </div>  

            <div className='text-white'>
                <div>Augmntx</div>
                <div> <a href='https://augmntx.com/profiles' > View Profiles</a> </div>
                <div> <a href='https://augmntx.com/discover' > Discover </a> </div>
                <div> <a href='https://augmntx.com/on-demand-talent' > On Demand Talent</a> </div>
                <div> <a href='https://augmntx.com/pricing' > Pricing</a> </div>               
            </div>

            <div className='text-white'>
                <div>Vendor</div>
                <div> <a href='https://augmntx.com/profiles' > Apply As Vendor</a> </div>
                <div> <a href='https://augmntx.com/discover' > Vendor Login </a> </div>
                <div> <a href='https://augmntx.com/on-demand-talent' > Remote Jobs</a> </div>
                <div> <a href='https://augmntx.com/pricing' > Resources</a> </div>               
            </div>           
        
         
        </div>

        <div className='text-white py-5 flex justify-between'>

        <div>
            <span>© 2022 - 2023</span>
            <span className='px-10px text-2xl'>AugmntX</span> -
            <span className='px-10px'>Labor Omnia Vincit</span> ⚡ by
            <span className='px-10px'><a href='https://superlabs.co/' >SuperLabs</a></span>            
        </div>
        <div className='flex items-center'>
            <span className='px-10px'><a href='https://augmntx.com/terms-and-conditions' >Terms of Use</a></span>
            <span className='px-10px'><a href='https://augmntx.com/privacy-policy' >Privacy Policy</a></span>
        </div>

        </div>


        </div>

        <div className='small-container'></div>
    </div>
    
  )
}

export default Footer