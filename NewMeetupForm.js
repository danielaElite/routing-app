import React from "react";
import Card from "../../ui/Card";
import classes from './NewMeetupForm.module.css'
function NewMeetupForm(){
    return <Card>
        <form className={classes.form}>
        <div className={classes.control}>
           <label htmlFor="tittle"> meetup tittle</label>
           <input type="text" required id="tittle"/>
        </div>
        <div className={classes.control}>
           <label htmlFor="image"> meetup image</label>
           <input type="url" required id="image"/>
        </div>
        <div className={classes.control}>
           <label htmlFor="address"> meetup address</label>
           <input type="text" required id="address"/>
        </div>
        <div className={classes.control}>
           <label htmlFor="description"> meetup description</label>
            <textarea id="description" required rows='5'></textarea>
        </div>
        <div className={classes.actions}>
            <button>Add meetup</button>
        </div>
        </form>
    </Card>
}

export default NewMeetupForm;