import styles from "./dashboardgoingsectiontile.module.css"
import { useEffect, useState } from 'react'
import {useAuthState} from '../../../../../Context/index.js'
import {API_URL} from '../../../../../../config/index.js'
function DashboardGoingSectionTile() {
    const [dataSets, setDataSets] = useState([])
    const userDetails = useAuthState()


    const fetchDataSet = async () => {
        const res = await fetch(`${API_URL}/events/user/joined/${userDetails.id}`)
        const data = await res.json()
        console.log(data)
        setDataSets(data)
    }


    useEffect(() => {
        fetchDataSet()
    }, [])
    return(<>
                {dataSets.map((input)=>{
                    return(
                        <div className={styles.tileContainer}>
                            <div className={styles.tileContainerMain}>
                                <p className={styles.tileTitleNDate}>{input.title}</p>
                                <p className={styles.tileTitleNDate}>{input.date}</p>
                            </div>
                        </div>
                    )
                })}  
    </>)
}

export default DashboardGoingSectionTile