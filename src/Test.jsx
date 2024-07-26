import React, {useEffect} from 'react';
import {CPUContext, GlobalStateProvider, GPUContext} from "./context/StateContext.jsx";
import AutocompleteWithCard from "./AutocompleteWithCard.jsx";
import {useContext} from "react";
import cpuData from "/public/data/filtered_processors.json"
import {Button} from "@mui/material";


const Test = () => {
    const {cpu, setCpu} = useContext(CPUContext)
    const {gpu, setGpu} = useContext(GPUContext)

    useEffect(() => {
        console.log(cpu)
    }, []);


    return (
       <GlobalStateProvider>
           <AutocompleteWithCard
               label="CPU"
               placeholder="Select Your CPU"
               filterKeys={["name"]}
               contextSetter={setCpu}
               contextState={cpu}
               imageUrl="/images/processor.png"
               jsonData={cpuData} />
       </GlobalStateProvider>
    );
};

export default Test;