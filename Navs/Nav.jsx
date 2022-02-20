import classes from "./nav.module.css"
import {Link} from "react-router-dom"
import {Avatar} from '@mui/material'
const Nav = () => {
    return (
        <>
            <div className={classes.header}>
                <div className={classes.logo}>
                    <Link className={classes.title}>Contact Manager</Link>
                </div>
                <div className={classes.avatar_container}>
                    <Avatar className={classes.avatar} src="/images/cj2.jpg"/>
                </div>

                <nav>
                   <ul>
                        <Link to={'/'} className={classes.links}><li>Home</li></Link>
                       <li>Developer</li>
                      
                   </ul>
                </nav>

            </div>
        </>

    )
}
export default Nav;