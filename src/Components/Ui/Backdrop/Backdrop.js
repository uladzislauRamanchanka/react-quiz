import React from 'react'
import classes from './Backdrop.module.css'

const Backdrop = props => <div className={classes.Backdrop} onClick={props.onClick}></div>
export default Backdrop