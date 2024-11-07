import React, {useState, useEffect, createContext, useContext} from 'react';
import {
    Container,
    Card,
    CardContent,
    Typography,
    Box,
    TextField,
    Autocomplete,
    Button,
    CircularProgress
} from '@mui/material';
import { motion } from "framer-motion"
import {usePcBuilderStore} from "../context/PcStore.jsx";
import axios from "axios";
import ListboxComponent from "./ListboxComponent.jsx";

const URI = import.meta.env.VITE_API_URI + "/build/cpu";
const Cpu = () => {
    const {cpu, setCpu} = usePcBuilderStore()
    const [cpus, setCpus] = useState([]);
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try{
            const response = await axios.get(URI)
            if (response.status === 200) {
                setCpus(response.data)
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    const handleOpen = () => {
        setOpen(true);
        (async () => {
            setLoading(true);
            await fetchData();
            setLoading(false);
        })();
    };
    const handleClose = () => {
        setOpen(false);
        setCpus([])
    }
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>
        <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh'}}>
            <Card style={{width: 500, textAlign: 'center', padding: '20px'}}>
                <CardContent>
                    <Typography variant="h5" gutterBottom>
                        Select Your CPU
                    </Typography>
                    <Box display="flex" justifyContent="center" alignItems="center"  mb={5} mt={3}>
                        <img src="/images/processor.png" alt="Component" style={{width: 100, height: 100}}/>
                    </Box>
                    <Autocomplete
                        open={open}
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        value={cpu}
                        loading={loading}
                        onOpen={handleOpen}
                        onClose={handleClose}
                        onChange={(error, value) => {
                            setCpu(value)
                            console.log("Autocomplete Value...", value)
                            console.log("zustand value", cpu)
                        }}
                        options={cpus}
                        getOptionLabel={(option) => `${option.name} ${option.chipset ? option.chipset : ""}`}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="CPU"
                                variant="outlined"
                                fullWidth
                                mb={2}
                                mt={2}
                                InputProps={{
                                    ...params.InputProps,
                                    // Show CircularProgress when loading is true
                                    endAdornment: (
                                        <>
                                            {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                            {params.InputProps.endAdornment}
                                        </>
                                    ),
                                }}
                            />
                        )}
                        ListboxComponent={ListboxComponent}
                    />
                </CardContent>
            </Card>
        </Container>
        </motion.div>
    );
};

export default Cpu;