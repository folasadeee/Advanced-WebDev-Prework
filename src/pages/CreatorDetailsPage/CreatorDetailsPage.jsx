import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useState } from 'react';

import { supabase } from '../../client';

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
        <div>
            <h1>Creator Details Page</h1>
            {creatorDetails.name && (
                <div>
                    {creatorDetails.name}
                    </div>
                    )}
        </div>
    )
}

export default CreatorDetailsPage;