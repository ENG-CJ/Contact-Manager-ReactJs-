import { Avatar } from '@mui/material'
import { Link, useHistory } from 'react-router-dom'
import Card from '../Card/Card'
import classes from './contact.module.css'
import {confirmAlert} from 'react-confirm-alert'
import Home from '../Home/Home'

const Contacts=({data})=>{

    return(
        <>
       
        <div className={classes.buttons}>
            <Link to={'/Contacts/New-Contact'}><button className={classes.add}>Add Contact</button></Link>
        </div>
        {data.map((value)=>{
            return(
                <Card>
           <div className={classes.user_content}>
               <div className={classes.user_details}>
                  <div className={classes.user_img}>
                        <Avatar src={`${value.avatar}`}/>
                  </div>  
                  <div className={classes.user_title}>
                            <div className={classes.title}>
                                <h2>{value.username}</h2>
                            </div>
                            
                    </div>  
               </div>

               <div className={classes.actions}>

                <Link to={`/Contacts/Contact-Details/${value.id}`} className={classes.tag}> <i class="fa-solid fa-eye"></i></Link>

               </div>
           </div>
        </Card>
        
                //end
            )
        })}
        
        </>
       
    )
}
export default Contacts