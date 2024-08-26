import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';

import { supabase } from '../../client';

import styles from './CreatorDetailsPage.module.css';

const CreatorDetailsPage = () => {

    let { userId } = useParams();

    const [creatorDetails, setCreatorDetails] = useState({  
        id: null,
        name: "",
        url: "",
        description: "",
        imageURL: "",
    });

    useEffect(() => {
        const fetchCreatorDetails = async () => {
            const { data, error } = await supabase
            .from('creators')
            .select()
            .eq('id', userId);
            
            setCreatorDetails(
                {
                    id: data[0].id,
                    name: data[0].name,
                    url: data[0].url,
                    description: data[0].description,
                    imageURL: data[0].imageURL
                }
            );
        }

        fetchCreatorDetails();
         }
    , []);




    return (
        <div className={styles.creatorDetailsContainer}>
            {creatorDetails && (
                <div className={styles.creatorCard}>
                    <img src={creatorDetails.imageURL} alt="creator-avatar" className={styles.creatorAvatar}/>
                    <h1 className={styles.creatorName}>{creatorDetails.name}</h1>
                   <p className={styles.creatorDescription}>
                    {creatorDetails.description}
                    </p>

                    <div className={styles.buttonContainer}>
                    <Link
                    to={creatorDetails.url}>
                    <button>Visit Creator</button>
                    </Link>
                    <Link 
                    to={`/edit/${creatorDetails.id}`}
                    key={creatorDetails.id}
                    ><button class="secondary">Edit Details</button>
                        </Link>
                        </div>

                    </div>
                    )}
                    
        </div>
    )
}

export default CreatorDetailsPage;