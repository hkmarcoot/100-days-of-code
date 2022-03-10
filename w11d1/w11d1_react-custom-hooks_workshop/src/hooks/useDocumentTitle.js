const { useEffect } = require("react");

export function useDocument(newTitle){

    useEffect(()=> {
        document.title=newTitle
    }, [newTitle])
}