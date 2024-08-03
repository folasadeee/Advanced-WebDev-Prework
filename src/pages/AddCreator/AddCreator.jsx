import AddCreatorForm from "../components/AddCreatorForm";

import styles from './AddCreator.module.css';

const AddCreator = () =>

    {

    return (
        <>

        <div className={styles.formContainer}>
        <AddCreatorForm />
        </div>

        </>
    )

}

export default AddCreator;