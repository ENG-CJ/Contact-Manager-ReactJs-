import classes from './card.module.css'

const Card=(props)=>{
    const {padding,margin,borderRadius, border}=props
    return(
        <div className={classes.cards}>
        <div className={classes.card} style={{padding: padding}}>
            {props.children}
        </div>
        </div>
        
    )
}
export default Card;