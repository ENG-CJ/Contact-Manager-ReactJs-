import classes from "./detail.module.css"
import {Link, useHistory, useParams} from 'react-router-dom'
import { useEffect, useState } from "react";
import { confirmAlert } from "react-confirm-alert";
import { toast } from "react-toastify";


const Detail=()=>{
    const history=useHistory()
    const {id}=useParams();
    const [users ,setUsers]=useState([]);
    
    useEffect(()=>{
        fetch(`http://localhost:8000/contacts/${id}`)
        .then(data=> {
           return data.json()
        })
        .then(user=>{
            setUsers(user)
            console.log(user)
        })
    },[])

    // deletion
    const handleDelete=(e)=>{
        confirmAlert({
            title: "Confirm To Delete",
            message: "Are Your Sure To Delete This Contact?",
            buttons:[
                {
                    label : "Yes",
                    onClick : ()=>{
                        fetch(`http://localhost:8000/contacts/${id}`,{
                            method : "DELETE"
                        }).then(()=>{
                            toast.success("Contact Successfully Deleted")
                            history.replace('/')
                        })
                    }
                },
                {
                    label : "No",
                    onClick: ()=>{
                        return;
                    }
                }
            ]
        })
        
    }
        
        
    
   return(
      
       <>
       
    <div className={classes.detail_container}>
            <div className={classes.user_profile}>
                <div className={classes.user_img}>
                    <img src={`${users.avatar}`}/>
                </div>
                <div className={classes.user_title}>
                    <h2>{users.username}</h2>
                </div>
                <div className={classes.actions}>
                    <button onClick={handleDelete} className={classes.delete}><i class="fa-solid fa-trash-can"></i></button>
                    <Link to={`/Contacts/Edit/${users.id}`}><button className={classes.edit}><i class="fa-solid fa-pen-to-square"></i></button></Link>
                </div>
            </div>

            <div className={classes.about_user}>
                <div className={classes.user_email}>
                    <h4>Email</h4>
                    <p>{users.gmail}</p>
                    
                </div>
                <div className={classes.user_email}>
                    <h4>Number</h4>
                    <p>{users.number}</p>
                    
                </div>
                <div className={classes.user_university}>
                    <h4>University</h4>
                    <p>{users.university}</p>
                </div>
                <div className={classes.user_track}>
                    <h4>Position</h4>
                    <p>{users.track}</p>
                </div>
                <div className={classes.about}>
                   <h4>About User</h4>
                   <p>{users.about}</p>
                </div>
            </div>
     </div>
           

       </>
     
   )
}
export default Detail;