import classes from "./error.module.css"
import { Link } from "react-router-dom";

const Errors=({message})=>{
    return(
        <>
            <div className={classes.error_container}>
                <div className={classes.error_icon}>
                <i class="fa-solid fa-triangle-exclamation"></i>
                </div>
                <div className={classes.error_content}>
                            <h3 className={classes.content}>
                                {message}

                            </h3>
                            <p>Please Make Sure The API That You Want To Access Lets <Link to={"/Help"}>Help</Link></p>

                </div>
            </div>
        </>
    )
}
export default Errors;