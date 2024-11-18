import {
    Box,
    Button,
    Container,
    Step,
    StepLabel,
    Stepper,
    Typography,
} from "@mui/material";
import { useState } from "react";
import Cpu from "../pcParts/Cpu.jsx";
import Gpu from "../pcParts/Gpu.jsx";
import InternalStorage from "../pcParts/InternalStorage.jsx";
import PcCase from "../pcParts/PcCase.jsx";
import Ram from "../pcParts/Ram.jsx";

import PowerSupply from "../pcParts/PowerSupply.jsx";

import { useNavigate } from "react-router-dom";
import Cooler from "../pcParts/Cooler.jsx";
import Motherboard from "../pcParts/Motherboard.jsx";

import { usePcBuilderStore } from "../../context/PcStore.jsx";
import Loader from "@/components/common/Loader.jsx";

const steps = [
    "CPU",
    "Motherboard",
    "Cooler",
    "GPU",
    "Storage",
    "RAM",
    "Cabinet",
    "Power Supply",
];
const ContentInStep = ({ stepIndex }) => {
    switch (stepIndex) {
        case 0:
            return <Cpu />;
        case 1:
            return <Motherboard />;
        case 2:
            return <Cooler />;
        case 3:
            return <Gpu />;
        case 4:
            return <InternalStorage />;
        case 5:
            return <Ram />;
        case 6:
            return <PcCase />;
        case 7:
            return <PowerSupply />;
        default:
            return "Unknown Step...";
    }
};

const Build = () => {
    const { resetParts } = usePcBuilderStore();
    const [activeStep, setActiveStep] = useState(0);
    const [loading, setLoading] = useState(false);
    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const handleReset = () => {
        resetParts();
        setActiveStep(0);
    };
    const handleFinish = async () => {
        setLoading(true);
        setTimeout(()=> {
            navigate("/final-build");
            setLoading(false);
        }, 1000)
    };
    const navigate = useNavigate();
    return (loading ? <Loader/> :
        <Container>
            <Box my={2}>
                <Typography variant="h3" align="center" gutterBottom>
                    Build Your Custom PC
                </Typography>
                <Typography variant="h6" align="center" gutterBottom>
                    Select components to build your dream machine.
                </Typography>
            </Box>
            <Stepper activeStep={activeStep} alternativeLabel>
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
                        <ContentInStep stepIndex={activeStep} />
                        <Box mt={4} display="flex" justifyContent="space-between">
                            <Button
                                disabled={activeStep === 0}
                                onClick={handleBack}
                                variant="outlined"
                            >
                                Back
                            </Button>
                            {activeStep === steps.length - 1 && (
                                <Button color="error" onClick={() => handleReset()}>
                                    Reset
                                </Button>
                            )}
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={
                                    activeStep === steps.length - 1 ? handleFinish : handleNext
                                }
                            >
                                {activeStep === steps.length - 1 ? "Finish" : "Next"}
                            </Button>
                        </Box>
                    </Box>
                )}
            </Box>
        </Container>
    );
};

export default Build;
