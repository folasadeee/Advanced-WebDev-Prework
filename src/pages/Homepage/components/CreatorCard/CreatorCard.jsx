import styles from './CreatorCard.module.css';

const CreatorCard = (props) => {

    return (
        <div className={styles.creatorCard}>
        <img src={props.avatar} alt="creator-avatar" />
        <h3>{props.name}</h3>
        <p>{props.description}</p>
        </div>
    );
}

export default CreatorCard;