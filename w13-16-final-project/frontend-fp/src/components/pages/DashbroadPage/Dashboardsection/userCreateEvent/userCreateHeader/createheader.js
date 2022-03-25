import styles from "./createHeader.module.css"


function CreateHeader({Title}){
    return(
        <>
            <div className={styles.headerContainer}>
                <h2>{Title}</h2>
            </div>
        </>
    )
}

export default CreateHeader;