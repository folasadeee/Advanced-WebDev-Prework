import { useState } from 'react'
import potion from './assets/images/potion.svg'
import './App.css'

import CreatorCard from './pages/Homepage/components/CreatorCard/CreatorCard';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <header className="hero">
      <section className="hero-text-container">
         <h1>Welcome to Creatorverse.</h1>
         <p>Discover, connect, and share your gaming journey. Join a community of gamers and streamers, showcase your profile, and find new friends. Your adventure starts here!</p>
         <section className="grid">
          <button>One</button>
          <button className="secondary">Two</button>
         </section>
        </section>
          <img src={potion} alt="potion" />
    </header>
     <main>
     
     <section className="creator-card-container">

     <CreatorCard name="Folasade Goddard" description="I love puppy" />
     <CreatorCard name="Folasade Goddard" description="I love puppy" />
     <CreatorCard name="Folasade Goddard" description="I love puppy" />
      </section>
      </main>
    </>
  )
}

export default App;
