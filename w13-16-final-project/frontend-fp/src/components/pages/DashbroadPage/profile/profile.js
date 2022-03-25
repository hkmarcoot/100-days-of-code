import styles from "./profile.module.css"
import { useAuthState } from '../../../Context/index.js'

const image = 'https://i.stack.imgur.com/34AD2.jpg'
function Profile() {
    const userDetails = useAuthState()

    return(<>
        <div className={styles.profileContainer}>
                <img className={styles.profileImg} src={image} alt ="" />

                <div className={styles.inputStyle}>
                    <p>{userDetails.username}</p>
                </div>

                <div className={styles.inputStyle}>
                <p>{userDetails.name} {userDetails.surname} </p>
                </div>

                <div className={styles.inputStyle}>
                    <p>{userDetails.email}</p>
                </div>
        </div>
    </>)
}

export default Profile;