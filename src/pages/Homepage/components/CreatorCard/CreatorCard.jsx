import styles from './CreatorCard.module.css';
import React from 'react';
import { Link } from 'react-router-dom';

const CreatorCard = (props) => {

    return (
        <div className={styles.creatorCard}>
        <Link
        to={`/details/${props.id}`}
        key={props.id}>
        <img src={props.avatar} alt="creator-avatar" />
        </Link>

        <div className={styles.creatorCardText}>
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        <Link 
        to={`/details/${props.id}`}
        key={props.id}>
        <button>View Creator</button>
        </Link>
            </div>

            
     
        </div>
    );
}

export default CreatorCard;