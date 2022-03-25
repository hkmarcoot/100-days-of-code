import styles from "./chatBoxEvent.module.css"

function ChatBoxEvent(){
    return (
        <>
            <div className={styles.chatBoxEvent} data-testid='chatboxeventcontainertesting'>
                <div className={styles.chatBoxContainer}>
                    {/* this is chat section
                    for socket.io */}
                </div>          
            </div>
        </>
    )
}

export default ChatBoxEvent;