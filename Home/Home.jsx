import { useEffect, useState } from 'react';
import Contacts from '../ContactList/Contacts';
import Errors from '../Errors/Error';
import FlagMessages from '../Flags/FlagMessage';
import classes from './home.module.css'


const Home=()=>{
    const [contacts,setContacts]=useState([])
    const [isFetching, setIsFetching]=useState(true)
    const  [error, setError] = useState(null);
    

    // use effect
    useEffect(()=>{
       setTimeout(()=>{
            fetch('http://localhost:8000/contacts')
            .then(data =>{
                if (!data.ok){
                    throw Error("Could Not Fetch This Data")
                }else{
                    return data.json()
                }
            })
            .then(response=>{
                setContacts(response)
                setIsFetching(false)
                setError(null)
            }).catch(err=>{
                setContacts(null)
                setIsFetching(false)
                setError(err.message)
            })
           // end fetch
       },900)
    },[])

    return(
        <>
            {isFetching && <FlagMessages/>}

            {error && <Errors message={error}/>}
            {/* <Contacts data={contacts && contacts}/> */}
            {contacts && <Contacts data={contacts}/>}
        </>
    )
}
export default Home;