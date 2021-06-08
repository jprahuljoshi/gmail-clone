import { IconButton } from '@material-ui/core'
import React from 'react'
import './Mail.css'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArchiveIcon from '@material-ui/icons/Archive';
import ReportIcon from '@material-ui/icons/Report';
import DeleteIcon from '@material-ui/icons/Delete';
import MailIcon from '@material-ui/icons/Mail';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import LabelIcon from '@material-ui/icons/Label';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import UnfoldMoreIcon from '@material-ui/icons/UnfoldMore';
import PrintIcon from '@material-ui/icons/Print';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import LabelImportantIcon from '@material-ui/icons/LabelImportant';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';
//import { selectOpenMail } from '../features/mailSlice'


const Mail = () => {

    const history = useHistory()

    const selectedMail = useSelector(state => {
        //console.log(state.mail.selectedMail)
        return state.mail.selectedMail
    })

    //console.log(selectOpenMail.state)

    return (
        <div className='mail'>
            <div className='mail__tools'>
                <div className='mail__toolsLeft'>
                    <IconButton onClick={() => history.push('/')}>
                        <ArrowBackIcon></ArrowBackIcon>
                    </IconButton>
                    <IconButton>
                        <ArchiveIcon></ArchiveIcon>
                    </IconButton>
                    <IconButton>
                        <ReportIcon></ReportIcon>
                    </IconButton>
                    <IconButton>
                        <DeleteIcon></DeleteIcon>
                    </IconButton>
                    <IconButton>
                        <MailIcon></MailIcon>
                    </IconButton>
                    <IconButton>
                        <WatchLaterIcon></WatchLaterIcon>
                    </IconButton>
                    <IconButton>
                        <CheckCircleIcon></CheckCircleIcon>
                    </IconButton>
                    <IconButton>
                        <LabelIcon></LabelIcon>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon></MoreVertIcon>
                    </IconButton>
                </div>

                <div className='mail__toolsRight'>
                    <IconButton>
                        <UnfoldMoreIcon></UnfoldMoreIcon>
                    </IconButton>
                    <IconButton>
                        <PrintIcon></PrintIcon>
                    </IconButton>
                    <IconButton>
                        <ExitToAppIcon></ExitToAppIcon>
                    </IconButton>
                </div>
            </div>
            <div className='mail__body'>
                <div className='mail__bodyHeader'>
                    <h2>{selectedMail?.subject}</h2>
                    <LabelImportantIcon className='mail__important'></LabelImportantIcon>
                    <p>{selectedMail?.title}</p>
                    <p className='mail__time'>
                        {selectedMail?.time}
                    </p>
                </div>
                <div className='mail__message'>
                    <p>{selectedMail?.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Mail
