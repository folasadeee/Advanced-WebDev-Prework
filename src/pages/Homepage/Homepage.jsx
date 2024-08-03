import { useState } from 'react'
import potion from './../../assets/images/potion.svg';
import styles from './styles/Homepage.module.css';

import CreatorCard from './components/CreatorCard/CreatorCard';

const Homepage = () => {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className={styles.hero}>
      <section className={styles.heroTextContainer}>
         <h1>Mitch is cool.</h1>
         <p>Discover, connect, and share your gaming journey. Join a community of gamers and streamers, showcase your profile, and find new friends. Your adventure starts here!</p>
         <section className="grid">
          <button>One</button>
          <button className="secondary">Two</button>
         </section>
        </section>
          <img src={potion} alt="potion" />
    </header>
     <main>
     
     <section className={styles.creatorCardContainer}>

     <CreatorCard name="Folasade Goddard" description="I love puppy" />
     <CreatorCard name="Folasade Goddard" description="I love puppy" />
     <CreatorCard name="Folasade Goddard" description="I love puppy" />
      </section>
      </main>
    </>
  )
}

export default Homepage;
