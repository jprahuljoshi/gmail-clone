import { Button, IconButton } from '@material-ui/core'
import React from 'react'
import './Sidebar.css'
import InboxIcon from '@material-ui/icons/Inbox';
import AddIcon from '@material-ui/icons/Add';
import SidebarOption from '../SidebarOption/SidebarOption';
import StarIcon from '@material-ui/icons/Star';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import SendIcon from '@material-ui/icons/Send';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PersonIcon from '@material-ui/icons/Person';
import DuoIcon from '@material-ui/icons/Duo';
import CallIcon from '@material-ui/icons/Call';
import VideocamIcon from '@material-ui/icons/Videocam';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import { useDispatch } from 'react-redux';
import { openSendMessage } from '../features/mailSlice';


const Sidebar = () => {

    const dispatch = useDispatch()

    return (
        <div className='sidebar'>
            <Button startIcon={<AddIcon fontSize='large' />}
                className='sidebar__compose'
                onClick={() => dispatch(openSendMessage())}>Compose</Button>

            <div className='sidebar__top'>
                <SidebarOption Icon={InboxIcon} title='Inbox' number='54' selected={true}></SidebarOption>
                <SidebarOption Icon={StarIcon} title='Starred' number='54'></SidebarOption>
                <SidebarOption Icon={WatchLaterIcon} title='Snoozed' number='54'></SidebarOption>
                <SidebarOption Icon={SendIcon} title='Sent' number='54'></SidebarOption>
                <SidebarOption Icon={InsertDriveFileIcon} title='Drafts' number='54'></SidebarOption>
                <SidebarOption Icon={ExpandMoreIcon} title='More'></SidebarOption>
            </div>

            <div className='sidebar__middle'>
                <h3>Meet</h3>
                <SidebarOption Icon={VideocamIcon} title='New meeting'></SidebarOption>
                <SidebarOption Icon={KeyboardIcon} title='Join a meeting'></SidebarOption>
            </div>

            <div className='sidebar__footer'>
                <div className='sidebar__footerIcons'>
                    <IconButton>
                        <PersonIcon></PersonIcon>
                    </IconButton>
                    <IconButton>
                        <DuoIcon></DuoIcon>
                    </IconButton>
                    <IconButton>
                        <CallIcon></CallIcon>
                    </IconButton>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
