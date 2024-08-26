import React, { useState, useEffect } from 'react';
import { supabase } from '../../client';
import { useParams, useNavigate } from 'react-router-dom';

import styles from './EditCreator.module.css';

const EditCreator = () => {
    let { userId } = useParams();
    const navigate = useNavigate();

    const [creatorDetails, setCreatorDetails] = useState({
        id: null,
        name: "",
        url: "",
        description: "",
        imageURL: ""
    });


    useEffect(() => {
        const fetchCreatorDetails = async () => {
            const { data, error } = await supabase
                .from('creators')
                .select()
                .eq('id', userId);

            if (error) {
                console.log('error', error);
            } else if (data && data.length > 0) {
                setCreatorDetails({
                    id: data[0].id,
                    name: data[0].name,
                    url: data[0].url,
                    description: data[0].description,
                    imageURL: data[0].imageURL
                });
            }
        };

        fetchCreatorDetails();
    }, [userId]);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCreatorDetails({ ...creatorDetails, [name]: value });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const { data, error } = await supabase
            .from('creators')
            .update({
                name: creatorDetails.name,
                url: creatorDetails.url,
                description: creatorDetails.description,
                imageURL: creatorDetails.imageURL
            })
            .eq('id', userId);

        if (error) {
            console.log('error', error);
        } else {
            console.log('data', data);
            navigate(`/details/${userId}`);
        }
    };

    const showModal = () => {
        const modal = document.getElementsByTagName('dialog')[0];
        modal.open = true;
    };

    const hideModal = () => {
        const modal = document.getElementsByTagName('dialog')[0];
        modal.open = false;
    };

    const deleteCreator = async () => {
        const { data, error } = await supabase.from('creators').delete().eq('id', userId);

        if (error) {
            console.log('error', error);
        } else {
            console.log('data', data);
            alert('Creator deleted successfully!');
            navigate('/');
        }
    };

    return (
        <div className={styles.editCreatorForm}>
            <h1>Edit Creator</h1>
         
            <form onSubmit={handleSubmit}>
                <label>
                    Name
                    <input 
                        type="text" 
                        name="name" 
                        value={creatorDetails.name} 
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label>
                    Url
                    <input 
                        type="text" 
                        name="url" 
                        value={creatorDetails.url} 
                        onChange={handleInputChange} 
                        required 
                    />
                </label>
                <label>
                    Description
                    <textarea 
                        name="description" 
                        value={creatorDetails.description} 
                        onChange={handleInputChange} 
                        rows="5"
                        required 
                    />
                </label>
                <label>
                    Image URL
                    <input 
                        type="text" 
                        name="imageURL" 
                        value={creatorDetails.imageURL} 
                        onChange={handleInputChange} 
                    />
                </label>
                <button type="submit">Save Changes</button>
                <button type="button" onClick={showModal} className={styles.deleteCreatorButton}>Delete Creator</button>
            </form>

            <dialog id="modal">
                <article>
                    <header>
                        <button aria-label="Close" rel="prev" onClick={hideModal}></button>
                        <p>
                            <strong>Are you sure you want to delete this creator?</strong>
                        </p>
                    </header>
                    <p>
                        This will delete creator <strong>{creatorDetails.name}</strong> from the database. This action cannot be undone.
                    </p>
                    <div className={styles.modalButtons}>
                        <button onClick={hideModal} className={styles.cancelButton}>Go Back</button>
                        <button onClick={deleteCreator} className={styles.deleteCreatorButton}>Delete Creator</button>
                    </div>
                </article>
            </dialog>
        </div>
    );
};

export default EditCreator;
