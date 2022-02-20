import classes from "./Flag.module.css"


const FlagMessages=()=>{
    return(
        <div>
            <div className={classes.flag_container}>
                <div className={classes.flag_title}>
                <div className="fa-3x" style={{textAlign: "center"}}>
                <i class="fas fa-spinner fa-pulse"></i>
                </div>
                </div>
            </div>
        </div>
    )
}
export default FlagMessages;