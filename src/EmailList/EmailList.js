import { Checkbox, IconButton } from '@material-ui/core'
import { ArrowDropDown } from '@material-ui/icons'
import React, { useEffect, useState } from 'react'
import './EmailList.css'
import RefreshIcon from '@material-ui/icons/Refresh';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleIcon from '@material-ui/icons/People';
import LocalOfferIcon from '@material-ui/icons/LocalOffer';
import Section from '../Section/Section';
import EmailRow from '../EmailRow/EmailRow';
import { db } from '../Firebase/firebase';

const EmailList = () => {

    const [emails, setEmails] = useState([])

    useEffect(() => {
        db.collection('emails').orderBy('timestamp', 'desc').onSnapshot(
            (snapshot) => setEmails(snapshot.docs.map((doc) => ({
                id: doc.id,
                data: doc.data(),
            }))))
    }, [])

    return (
        <div className='emailList'>
            <div className='emailList__settings'>
                <div className='emailList__settingsLeft'>
                    <Checkbox></Checkbox>
                    <IconButton>
                        <ArrowDropDown></ArrowDropDown>
                    </IconButton>
                    <IconButton>
                        <RefreshIcon></RefreshIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>
                <div className='emailList__settingsRight'>
                    <IconButton>
                        <ChevronLeftIcon></ChevronLeftIcon>
                    </IconButton>
                    <IconButton>
                        <ChevronRightIcon></ChevronRightIcon>
                    </IconButton>
                    <IconButton>
                        <KeyboardIcon></KeyboardIcon>
                    </IconButton>
                    <IconButton>
                        <ArrowDropDown></ArrowDropDown>
                    </IconButton>
                </div>
            </div>

            <div className='emailList__section'>
                <Section Icon={InboxIcon} title='Primary' color='#d93025' selected></Section>
                <Section Icon={PeopleIcon} title='Social' color='#1a73eb'></Section>
                <Section Icon={LocalOfferIcon} title='Promotions' color='#188038'></Section>
            </div>

            <div className='emailList__list'>
                {emails.map(({ id, data: { to, subject, message, timestamp } }) => {
                    return (
                        <EmailRow
                            id={id}
                            key={id}
                            title={to}
                            subject={subject}
                            description={message}
                            time={new Date(timestamp?.seconds * 1000).toUTCString()}
                        ></EmailRow>
                    )
                })}


            </div>
        </div>
    )
}

export default EmailList
