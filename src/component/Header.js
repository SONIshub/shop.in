import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AutorenewIcon from '@mui/icons-material/Autorenew';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import React from 'react'
import logo from './logo.png'
const Header = () => {
  return (
    <div >
    <div className='w-full flex justify-between justify-items-stretch'>
      <div className='img-logo mt-6 ml-48'>
      <div className='logo-1 flex justify-center relative left-20  '>
      <img className='logo mr-32 relative right-10' src={logo} alt='logo' width={152} height={36} />
      <div className='border border-gray-100'>
      <input className='p-2' type='text'  placeholder='Search Product...' />
      <input className=' p-2 border-l-2 h-5 ' type='text'  placeholder='All  Categories'  />
      </div>
      <button className='w-24 bg-yellow-500 p-2 hover:bg-yellow-300'>Search</button>
      <div className='mt-2 ml-28 '>
      <span className='mr-4'><AutorenewIcon /></span>
      <span className='mr-4'><FavoriteBorderIcon/></span>
      <span className='mr-4'><WorkOutlineIcon/></span>
      <span className='mr-4'><PermIdentityIcon /></span>
      </div>
      </div>
      </div>
      </div>
      <div className='header-1 bg-yellow-500 mt-3 flex justify-center items-center'>
        <ul className='flex mt-3  font-bold '>
            <li className='p-1 mr-7'>Homepage<span><ExpandMoreIcon/></span></li>
            <li className='p-1 mr-7'>Shop<span><ExpandMoreIcon/></span></li>
            <li className='p-1 mr-7'>Pages<span><ExpandMoreIcon/></span></li>
            <li className='p-1 mr-7'>About</li>
            <li className='p-1 mr-7'>Blog</li>
            <li className='p-1 mr-7'>Contact</li>
        </ul>
 

        <button className='btn1 bg-black text-white p-2 w-48'>Become a Seller</button>
        
      </div>
  
    </div>
  )
}

export default Header
