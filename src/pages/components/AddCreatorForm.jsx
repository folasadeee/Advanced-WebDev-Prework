import React from 'react';
import { supabase } from '../../client';

const AddCreatorForm = () => {

    const handleSubmit = async (event) => {
        event.preventDefault();

        console.log(event.target.name.value);
        console.log(event.target.url.value);
        console.log(event.target.description.value);
        console.log(event.target.imageURL.value);

        const { data, error } = await supabase
        .from('creators')
        .insert([
            { 
                name: event.target.name.value,
                url: event.target.url.value,
                description: event.target.description.value,
                imageURL: event.target.imageURL.value
            }
        ])

        if (error) {
            console.log('error', error);
        }

        else {
            console.log('data', data);
            alert('Creator added successfully!');
            window.location.href = '/';
        }


    }

    return (
        <>

        <form onSubmit={handleSubmit}>
        <h1>Add New Creator</h1>
        <p>
            Use this form to add a new creator to the Creatorverse!
        </p>
            <label>
                Name
                <input type="text" name="name" id="name" required />
            </label>
            <label>
                Url
                <input type="text" name="url" id="url" required />
            </label>
            <label>
                Description
                <textarea type="text" name="description" id="description" rows="5" cols="33" required />
            </label>

            <label>
                Image URL
                <input type="text" name="imageURL" id="imageURL" />
            </label>

            <button type="submit">Add Creator</button>
            <button type="reset">Clear Form</button>
            </form>
        </>
    )
}

export default AddCreatorForm;