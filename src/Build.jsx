import {useContext, useState} from 'react';
import {
    Container,
    Typography,
    Stepper,
    Step,
    StepLabel,
    Button,
    Box, Card,
} from '@mui/material';
import {styled} from "@mui/system"
import {PcContext} from "./context/StateContext.jsx";
import Cpu from "./pc_components/Cpu.jsx";
import Gpu from "./pc_components/Gpu.jsx";
import InternalStorage from "./pc_components/InternalStorage.jsx";
import Ram from "./pc_components/Ram.jsx";
import PcCase from "./pc_components/PcCase.jsx";
import PowerSupply from "./pc_components/PowerSupply.jsx";
import Motherboard from "./pc_components/Motherboard.jsx";
import Cooler from "./pc_components/Cooler.jsx";
import AnimatedTipCard from "./AnimatedTipCard.jsx";
import {useNavigate} from "react-router-dom";


const steps = ['CPU','Motherboard' ,'Cooler', 'GPU', 'Storage', 'RAM', 'Cabinet', 'Power Supply']

const ContentInStep = ({stepIndex}) => {
    switch (stepIndex) {
        case 0:
            return (
                <Cpu />
            );
        case 1:
            return (
                <Motherboard />
            );
        case 2:
            return (
                <Cooler />
            );
        case 3:
            return (
                <Gpu/>
            );

        case 4:
            return (
                <InternalStorage/>
            )
        case 5:
            return (
                <Ram/>
            )
        case 6:
            return (
                <PcCase/>
            )
        case 7:
            return (
                <PowerSupply />
            )
        default:
            return ("Unknown Step...");
    }
}


const Build = () => {

    const {cpu, gpu, motherboard, pcCase, cooler, storage, ram, powerSupply} = useContext(PcContext)
    const [cpuValue, setCpuValue] = cpu
    const [gpuValue, setGpuValue] = gpu
    const [powerSupplyValue, setPowerSupplyValue] = powerSupply
    const [coolerValue, setCoolerValue] = cooler
    const [ramValue, setRamValue] = ram
    const [motherboardValue, setMotherboardValue] = motherboard
    const [pcCaseValue, setPcCaseValue] = pcCase
    const [storageValue, setStorageValue] = storage
    const navigate = useNavigate()

    const [activeStep, setActiveStep] = useState(0);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset =  (e) => {
        setActiveStep(0);
        setPowerSupplyValue(null)
        setGpuValue(null)
        setCpuValue(null)
        setCoolerValue(null)
        setMotherboardValue(null)
        setPcCaseValue(null)
        setRamValue(null)
        setStorageValue(null)

    };

    const handleFinish = () => {
        navigate("/final")
            console.log("Context Values in Build....", cpuValue)
            console.log("Context Values in Build....", gpuValue)
            console.log("Context Values in Build....", ramValue)
            console.log("Context Values in Build....", coolerValue)
            console.log("Context Values in Build....", motherboardValue)
            console.log("Context Values in Build....", pcCaseValue)
            console.log("Context Values in Build....", storageValue)
            console.log("Context Values in Build....", powerSupplyValue)
    }


    return (

            <Container>
                <Box my={2}>
                    <Typography variant="h3" align="center" gutterBottom>
                        Build Your Custom PC
                    </Typography>
                    <Typography variant="h6" align="center" gutterBottom>
                        Select components to build your dream machine.
                    </Typography>
                </Box>
                <Stepper activeStep={activeStep} alternativeLabel >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel>{label}</StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box mt={-5}>
                    {activeStep === steps.length ? (
                        <Box textAlign="center">
                            <Typography variant="h5" gutterBottom>
                                All steps completed - you&apos;re finished
                            </Typography>
                            <Button onClick={handleReset} variant="contained" color="secondary">
                                Reset
                            </Button>
                        </Box>
                    ) : (
                        <Box>
                                <ContentInStep stepIndex={activeStep}/>
                            <Box display="flex" justifyContent="center" alignItems="center" mt={-9} width="100%">
                            <AnimatedTipCard/>
                            </Box>
                            <Box mt={4} display="flex" justifyContent="space-between">
                                <Button disabled={activeStep === 0} onClick={handleBack} variant="outlined">
                                    Back
                                </Button>
                                {activeStep === steps.length - 1 && <Button color="error" onClick={() => {
                                    setActiveStep(0)
                                }}>Reset</Button>}
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={activeStep === steps.length -1 ? handleFinish : handleNext}
                                >
                                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                </Button>

                            </Box>
                        </Box>
                    )}
                </Box>
                <Box mt={4}>

                </Box>
            </Container>
    );
};


export default Build;