import { useState, useEffect } from 'react'
import potion from './../../assets/images/potion.svg';
import styles from './styles/Homepage.module.css';

import { Link } from 'react-router-dom';

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
  []);

  return (
    <>
    <header className={styles.hero}>
      <section className={styles.heroTextContainer}>
         <h1>Game like a girl.</h1>
         <p>Welcome to HerUniverse! Here you can, join a thriving community where female gamers and streamers shine. Whether you’re a seasoned pro or just starting out, everyone is welcome to embark on their adventure here</p>
         <section className="grid">
          <Link
          to="/add">
            <button className={styles.addNewButton}>Add New Creator</button>
          </Link>
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
