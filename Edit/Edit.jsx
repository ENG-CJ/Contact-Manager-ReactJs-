import { useEffect, useRef, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import classes from "./edit.module.css"
import Card from "../Card/Card";
import { toast } from "react-toastify";



const Edit=()=>{
    const initial={
        username : '',
        gmail : '',
        avatar : '',
        track :'',
        university : '',
        number : '',
        about : ''
    }
    const history=  useHistory();
    const {id}=useParams();
    const [user,setUser]=useState(initial);
    const {username,gmail,avatar,track,university,number,about}=user;


    useEffect(()=>{
        
    fetch(`http://localhost:8000/contacts/${id}`)
    .then(data=> {
        return data.json()
    })
    .then(users=>{
        setUser(users)
    })
        
    },[])
   
    
    // const onValueChange=(e)=>{
    //     setUser({...user,[e.target.name]: e.target.value})
    //     console.log(username)
    // }

    const editHandler=(e)=>{
            e.preventDefault()
            fetch(`http://localhost:8000/contacts/${id}`,{
                method: "PUT",
                body: JSON.stringify(user),
                headers:{"Content-Type": "application/json"}
            }).then(()=>{
                toast.success("Edit Success Fully");
                history.push(`/Contacts/Contact-Details/${id}`)
               
            })
            

    }
  


    // end
    return(
        <form onSubmit={editHandler}>
            <Card padding={25+"px"} >
            <div className={classes.form_content}>
                <label >Username</label>
                <input type="text" 
                 name="username"
                 onChange={(e)=> setUser({...user ,[e.target.name]: e.target.value })}
                    value={username}
              
             
                placeholder='Enter Contact Name'/>
            </div>
             <div className={classes.form_content}>
                <label htmlFor="title">Email</label>
                <input type="text" 
                 value={gmail}
                 name="gmail"
                 onChange={(e)=> setUser({...user,[e.target.name]: e.target.value})}
                placeholder='example@email.com' id='title' />
            </div>
           
             <div className={classes.form_content}>
                <label htmlFor="title">Phone Number</label>
                 <input type="text" name='title' 
                 name="number"
                 value={number}
                 onChange={(e)=> setUser({...user, [e.target.name]: e.target.value})}
                placeholder='+252-615178163' id='title' />
            </div>
            <div className={classes.form_content}>
                <label htmlFor="title">Occupation</label>
                <input type="text" name='track' 
                  value={track}
                  onChange={(e)=> setUser({...user,[e.target.name]: e.target.value})}
                placeholder='Enter His/She Track' id='title' />
            </div>
            <div className={classes.form_content}>
                <label htmlFor="title">University</label>
                <input type="text" name='university'
                 value={university}
                 onChange={(e)=> setUser({...user,[e.target.name]: e.target.value})}
                 placeholder='University Name' id='title' />
            </div>
            <div className={classes.form_content}>
                <label htmlFor="title">About</label>
                <input type="text" name='about'
                  value={about}
                  onChange={(e)=> setUser({...user,[e.target.name]: e.target.value})}
                 placeholder='About Contact' id='title' />
            </div>
            <div className={classes.form_content}>
                <label htmlFor="title">Avatar Image</label>
                <input type="text" name='avatar'
                 value={avatar}
                 onChange={(e)=> setUser({...user,[e.target.name]: e.target.value})}
                 placeholder='Past Here  The Avatar Image Url ' id='title' />
             </div>
            <div className={classes.form_content}>
             
                  <button className={classes.add}>
                      Update
                  </button>
            </div> 
            </Card>
            
        </form>
    )
     {/* {!adding &&  <button className={classes.add}>Add</button>} */}
              {/* {adding &&  <button className={classes.add}>
                <i class="fas fa-circle-notch fa-spin"></i>
                  </button>} */}
    
}

export default Edit;