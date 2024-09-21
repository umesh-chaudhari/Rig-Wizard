import {createContext, useState} from "react";

export const CPUContext = createContext(null)
export const GPUContext = createContext(null)
export const RAMContext = createContext(null)
export const StorageContext = createContext(null)
export const PowerSupplyContext = createContext(null)
export const PcCaseContext = createContext(null)
export const MotherboardContext = createContext(null)
export const CoolerContext = createContext(null)

export const PcContext = createContext(null)


export const GlobalStateProvider = ({children}) => {
    const [cooler, setCooler] = useState()
    const [motherboard, setMotherboard] = useState()
    const [cpu, setCpu] = useState()
    const [gpu, setGpu] = useState()
    const [ram, setRam] = useState()
    const [storage, setStorage] = useState()
    const [powerSupply, setPowerSupply] = useState()
    const [pcCase, setPcCase] = useState()
    return (
        <PcContext.Provider value={
            {
                cooler: [cooler, setCooler],
                cpu: [cpu, setCpu],
                motherboard: [motherboard, setMotherboard],
                gpu: [gpu, setGpu],
                ram: [ram, setRam],
                storage: [storage, setStorage],
                powerSupply: [powerSupply, setPowerSupply],
                pcCase: [pcCase, setPcCase]
            }
        } >
            {children}
        </PcContext.Provider>
    )
}