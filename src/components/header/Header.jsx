import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { IoIosNotificationsOutline, IoMdSettings } from "react-icons/io";
import Blogo from '../../photos/blogo.webp'
import './header.css'
import Sidebar from '../sidebar/Sidebar'

const Header = () => {
  return (
    <>
      <header className='header'>
        <nav className='navbar'>
            <div className='navbar_logo'>
                <img src={Blogo} onClick={() => {}} alt="logo" className='logo' />
                <button className='navbar_button'> + new </button>
            </div>
            <form className='navbar_form' action="">
                <input type="text" className='navbar_inputSearch' placeholder='Search group and join' />
            </form>
            <div className='navbar_item'>
                <button className='navbar_itemch'>
                    <AiOutlineLoading3Quarters />
                </button>
                <button className='navbar_itemch'>
                    <IoIosNotificationsOutline />
                </button>
                <button className='navbar_itemch'>
                    <IoMdSettings />
                </button>
            </div>

        </nav>
      </header>
    </>
  )}

export default Header;
