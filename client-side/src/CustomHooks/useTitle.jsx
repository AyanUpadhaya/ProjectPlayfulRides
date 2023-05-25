import React, { useEffect } from 'react';

const useTitle = (text) => {
    useEffect(()=>{
        document.title = text;
        return ()=>document.title = "PlayfulRides";
    },[text])
};

export default useTitle;