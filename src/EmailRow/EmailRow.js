import { Checkbox, IconButton } from '@material-ui/core'
import React from 'react'
import './EmailRow.css'
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import { LabelImportantOutlined } from '@material-ui/icons';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { selectMail } from '../features/mailSlice';

const EmailRow = ({ id, title, subject, description, time }) => {

    const history = useHistory()

    const dispatch = useDispatch()

    const openMail = () => {
        dispatch(
            selectMail({
                id, title, subject, description, time,
            }))

        history.push('/mail')
    }

    return (
        <div onClick={openMail} className='emailRow'>
            <div className='emailRow__options'>
                <Checkbox></Checkbox>
                <IconButton>
                    <StarOutlineIcon></StarOutlineIcon>
                </IconButton>
                <IconButton>
                    <LabelImportantOutlined></LabelImportantOutlined>
                </IconButton>
            </div>
            <h3 className='emailRow__title'>
                {title}
            </h3>
            <div className='emailRow__message'>
                <h4>{subject}
                    <span className='emailRow__description'> - {description}</span>
                </h4>

            </div>
            <p className='emailRow__time'>
                {time}
            </p>
        </div>
    )
}

export default EmailRow
