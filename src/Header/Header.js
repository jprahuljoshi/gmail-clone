import React from 'react'
import './Header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import { Avatar, IconButton } from '@material-ui/core';
import { logout, selectUser } from '../features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../Firebase/firebase';

const Header = () => {

    const user = useSelector(selectUser)

    const dispatch = useDispatch()

    const signOut = () => {
        auth.signOut().then(() => {
            dispatch(logout())

        })
    }

    return (
        <div className='header'>
            <div className='header__left'>
                <IconButton>
                    <MenuIcon></MenuIcon>
                </IconButton>
                <img src='https://cdn.vox-cdn.com/thumbor/g_nyLm8AT_WA7a79K-EhRZV0sE0=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67587450/newgmaillogo.0.jpg'
                    alt=''></img>
            </div>
            <div className='header__middle'>
                <SearchIcon></SearchIcon>
                <input type='text' placeholder='Search mail'></input>
                <ArrowDropDownIcon className='header__inputCaret'></ArrowDropDownIcon>
            </div>
            <div className='header__right'>
                <IconButton>
                    <AppsIcon></AppsIcon>
                </IconButton>

                <IconButton>
                    <NotificationsIcon></NotificationsIcon>
                </IconButton>

                <Avatar onClick={signOut} src={user?.photoUrl}></Avatar>
            </div>
        </div>
    )
}

export default Header
