import { useEffect, useState } from "react";

export default function usePersistedState(key,initialState){

    const [state,setState]= useState(() =>{
        const storageState = localStorage.getItem(key);

        if(storageState)
            return JSON.parse(storageState);
        else
            return initialState;
    });


    useEffect(() =>{
        localStorage.setItem(key,JSON.stringify(state));
    },[key,state]);

    return [state,setState];
}