import React, {useContext} from 'react';
import { Container, Grid, Card, CardContent, Typography, Button } from '@mui/material';
import { styled } from '@mui/system';
import {PcContext} from "./context/StateContext.jsx";

const StyledCard = styled(Card)({
    width: '100%',
    height: "90%",
    textAlign: 'center',
    padding: '20px',
    margin: '10px',
});

const FinalBuild = () => {
    const {cpu, gpu, motherboard, pcCase, cooler, storage, ram, powerSupply} = useContext(PcContext)
    const [cpuValue, setCpuValue] = cpu
    const [gpuValue, setGpuValue] = gpu
    const [powerSupplyValue, setPowerSupplyValue] = powerSupply
    const [coolerValue, setCoolerValue] = cooler
    const [ramValue, setRamValue] = ram
    const [motherboardValue, setMotherboardValue] = motherboard
    const [pcCaseValue, setPcCaseValue] = pcCase
    const [storageValue, setStorageValue] = storage

    return (
        <Container style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh', flexDirection: 'column' }}>
            <Typography variant="h4" gutterBottom>
                Your Custom PC Build
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">CPU</Typography>
                            <img src="/images/processor.png" alt="CPU" style={{ width: 50, height: 50 }} />
                            <Typography>{cpuValue.name}</Typography>
                            <Typography>{}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">GPU</Typography>
                            <img src="/images/video-card.png" alt="GPU" style={{ width: 50, height: 50 }} />
                            <Typography>{gpuValue.name}</Typography>
                            <Typography>{gpu.chipset}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">RAM</Typography>
                            <img src="/images/memory-slot.png" alt="RAM" style={{ width: 50, height: 50 }} />
                            <Typography>{ramValue.name}</Typography>
                            <Typography>{}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Storage</Typography>
                            <img src="/images/hdd.png" alt="Storage" style={{ width: 50, height: 50 }} />
                            <Typography>{storageValue.name}</Typography>
                            <Typography>{}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Motherboard</Typography>
                            <img src="/images/motherboard.png" alt="Motherboard" style={{ width: 50, height: 50 }} />
                            <Typography>{motherboardValue.name}</Typography>
                            <Typography>{}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Case</Typography>
                            <img src="/images/cabinets-caticon.png" alt="Case" style={{ width: 50, height: 50 }} />
                            <Typography>{pcCaseValue.name}</Typography>
                            <Typography>{}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Power Supply</Typography>
                            <img src="/images/power-supply.png" alt="PSU" style={{ width: 50, height: 50 }} />
                            <Typography>{powerSupplyValue.name}</Typography>
                            <Typography>{powerSupplyValue.wattage}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                    <StyledCard>
                        <CardContent>
                            <Typography variant="h6">Cooler</Typography>
                            <img src="/images/cooler-caticon.png" alt="Cooler" style={{ width: 50, height: 50 }} />
                            <Typography>{coolerValue.name}</Typography>
                            <Typography>{}</Typography>
                        </CardContent>
                    </StyledCard>
                </Grid>
            </Grid>
            <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
                Share Your Build
            </Button>
        </Container>
    );
};

export default FinalBuild;
