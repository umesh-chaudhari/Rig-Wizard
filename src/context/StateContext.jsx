import {createContext, useState} from "react";

export const CPUContext = createContext(null)
export const GPUContext = createContext(null)
export const RAMContext = createContext(null)
export const StorageContext = createContext(null)
export const PowerSupplyContext = createContext(null)
export const PcCaseContext = createContext(null)
export const MotherboardContext = createContext(null)
export const CoolerContext = createContext(null)


export const GlobalStateProvider = ({children}) => {
    const [cooler, setCooler] = useState()
    const [motherboard, setMotherboard] = useState()
    const [cpu, setCpu] = useState( )
    const [gpu, setGpu] = useState()
    const [ram, setRam] = useState()
    const [storage, setStorage] = useState()
    const [powerSupply, setPowerSupply] = useState()
    const [pcCase, setPcCase] = useState()


    return (
        <CPUContext.Provider value={ {cpu, setCpu}}>
            <GPUContext.Provider value={{gpu, setGpu}}>
                <RAMContext.Provider value={{ram, setRam}}>
                    <StorageContext.Provider value={{storage, setStorage}}>
                        <PowerSupplyContext.Provider value={{powerSupply, setPowerSupply}}>
                            <PcCaseContext.Provider value={{pcCase,setPcCase}}>
                                <MotherboardContext.Provider value={{motherboard, setMotherboard}}>
                                    <CoolerContext.Provider value={{cooler, setCooler}}>
                                        {children}
                                    </CoolerContext.Provider>
                                </MotherboardContext.Provider>
                            </PcCaseContext.Provider>
                        </PowerSupplyContext.Provider>
                    </StorageContext.Provider>
                </RAMContext.Provider>

            </GPUContext.Provider>
        </CPUContext.Provider>
    )
}