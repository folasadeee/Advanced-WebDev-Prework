import { useState, useEffect } from 'react'
import potion from './../../assets/images/potion.svg';
import styles from './styles/Homepage.module.css';

import { supabase } from '../../client.js';

import CreatorCard from './components/CreatorCard/CreatorCard';

const Homepage = () => {

  const [creators, setCreators] = useState([]);

  useEffect(
    
    () => {
    const fetchCreators = async () => {
      let {data: creators, error} = await supabase.from('creators').select('*').order('created_at', {ascending: true});
      
      if (error) console.log('error', error);

      setCreators(creators);
    }
    fetchCreators();
  } 
  ,
  [creators]);

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

      {creators.map((creator) => (
        <CreatorCard 
          key={creator.id}
          id={creator.id}
          avatar={creator.imageURL}
          url={creator.url}
          name={creator.name}
          description={creator.description}
        />
      ))}
    

      </section>
      </main>
    </>
  )
}

export default Homepage;
