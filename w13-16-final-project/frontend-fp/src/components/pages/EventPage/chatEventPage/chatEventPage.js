import ChatBoxEvent from './chatBoxEvent/chatBoxEvent';
import SuggestionEvent from './suggestionEvent/suggestionEvent';
import styles from './chatEventPage.module.css'

function ChatEventPage({RandomData}){
    
    return (
        <>
            <div className={styles.chatEventPage} data-testid="chatboxeventtesting">
                <div className={styles.chatEventPageMain}>
                    {/* <ChatBoxEvent/> */}
                    <SuggestionEvent DataToRender={RandomData}/>
                </div>
            </div>
        </>
    )   
}

export default ChatEventPage;