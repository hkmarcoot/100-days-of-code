import styles from "./attendingEventPriceUser.module.css"
function AttendingEventPriceUser({dataprice}){
    const price = dataprice;
    
    return (
      <>
        <div className={styles.attendingEventPrice}>
          <p className={styles.specificP}>
            Price :
            <span>
              {price !== 'FREE' ? `£${price}` : price} 
            </span>
          </p>
        </div>
      </>
    );
}

export default AttendingEventPriceUser