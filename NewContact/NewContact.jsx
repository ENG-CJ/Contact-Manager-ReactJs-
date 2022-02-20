import { Button, Snackbar, Alert } from '@mui/material';
import { useState, useRef, useEffect } from 'react';
import { useHistory } from "react-router-dom"
import { toast } from "react-toastify"
import Card from '../Card/Card';
import classes from "./new.module.css"
const NewContact = () => {
    // states
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [track, setTrack] = useState('');
    const [university, setUniversity] = useState('');
    const [about, setAbout] = useState('');
    const [avatarUrl, setAvatarUrl] = useState('');
    const [number, setNumber] = useState('');
    const history = useHistory();
    const [isAdding, setIsAdding] = useState(false)

    // function
    const addContact = (e) => {
        e.preventDefault();
        const contactsData = {
            username: username, gmail: email, track: track
            , university: university, about: about, avatar: avatarUrl, number: number
        };

        // request api
        // set timeout
        setIsAdding(true)
        setTimeout(() => {
            // fecthing data
            fetch("http://localhost:8000/contacts", {
                method: "POST",
                body: JSON.stringify(contactsData),
                headers: { "Content-Type": "application/json" }
            }).then(() => {
                setIsAdding(false)
                history.replace('/')
                toast.success("Contact Added Successfully")
            }).catch(err => console.log(err.message))


        }, 2000)

    }
    return (

        <form onSubmit={addContact}>
            <Card padding={25 + "px"} >
                <div className={classes.form_content}>
                    <label htmlFor="title">Username</label>
                    <input type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        placeholder='Enter Contact Name' id='title' />
                </div>
                <div className={classes.form_content}>
                    <label htmlFor="title">Email</label>
                    <input type="text" name='title'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='example@email.com' id='title' />
                </div>
                <div className={classes.form_content}>
                    <label htmlFor="title">Phone Number</label>
                    <input type="text" name='title'
                        value={number}
                        onChange={(e) => setNumber(e.target.value)}
                        placeholder='+252-615178163' id='title' />
                </div>
                <div className={classes.form_content}>
                    <label htmlFor="title">Occupation</label>
                    <input type="text" name='title'
                        value={track}
                        onChange={(e) => setTrack(e.target.value)}
                        placeholder='Enter His/She Track' id='title' />
                </div>
                <div className={classes.form_content}>
                    <label htmlFor="title">University</label>
                    <input type="text" name='title'
                        value={university}
                        onChange={(e) => setUniversity(e.target.value)}
                        placeholder='University Name' id='title' />
                </div>
                <div className={classes.form_content}>
                    <label htmlFor="title">About</label>
                    <input type="text" name='title'
                        value={about}
                        onChange={(e) => setAbout(e.target.value)}
                        placeholder='About Contact' id='title' />
                </div>
                <div className={classes.form_content}>
                    <label htmlFor="title">Avatar Image</label>
                    <input type="text" name='title'
                        value={avatarUrl}
                        onChange={(e) => setAvatarUrl(e.target.value)}
                        placeholder='Past Here  The Avatar Image Url ' id='title' />
                </div>
                <div className={classes.form_content}>
                    {!isAdding && <button className={classes.add}>Add</button>}
                    {isAdding && <button disabled className={classes.add}>
                        <i class="fas fa-circle-notch fa-spin"></i>
                    </button>}

                </div>
            </Card>

        </form>



    )

}
export default NewContact