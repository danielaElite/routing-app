import Card from '../../ui/Card';
import React from 'react';
import classes from'./MeetupItem.module.css';
function MeetupItem(props){
    return (<li className={classes.item}>
        <Card>
        <div className={classes.image}>
            <img src={props.image} alt={props.tittle}/>
        </div>
        <div className={classes.content}>
            <h3>{props.tittle}</h3>
            <adress>{props.adress}</adress>
            <p>{props.description}</p>
            <div className={classes.actions}>
                <button>To Favorites</button>
            </div>
        </div>
        </Card>
    </li>
    );
}

export default MeetupItem;