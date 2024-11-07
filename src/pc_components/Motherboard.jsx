import React, {createContext, useContext, useEffect, useState} from 'react';
import {Autocomplete, Box, Card, CardContent, CircularProgress, Container, TextField, Typography} from "@mui/material";
import {motion } from "framer-motion"
import {usePcBuilderStore} from "../context/PcStore.jsx";
import ListboxComponent from "./ListboxComponent.jsx";
import axios from "axios";

const URI = import.meta.env.VITE_API_URI + "/build/motherboard";

const Motherboard = () => {
    // const {motherboard, setMotherboard} = useContext(MotherboardContext)
    const {motherboard, setMotherboard} = usePcBuilderStore()
    const [motherboards, setMotherboards] = useState([]);
    const [open, setOpen] = useState(false)
    const [loading, setLoading] = useState(false)

    const fetchData = async () => {
        try{
            const response = await axios.get(URI)
            if (response.status === 200) {
                setMotherboards(response.data)
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
        setMotherboards([])
    }
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh'}}>
                <Card style={{width: 500, textAlign: 'center', padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Select Your Motherboard
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={5} mt={3}>
                            <img src="/images/motherboard.png" alt="Component" style={{width: 100, height: 100}}/>
                        </Box>
                        <Autocomplete
                            open={open}
                            loading={loading}
                            onOpen={handleOpen}
                            onClose={handleClose}
                            value={motherboard}
                            onChange={(error, value) => {
                                setMotherboard(value)
                                console.log("Autocomplete Value....",value)
                            }}
                            options={motherboards}
                            getOptionLabel={(option) => `${option.name} - ${option.form_factor}`}
                            renderInput={(params) => (
                                <TextField
                                    {...params}
                                    label="Motherboard"
                                    variant="outlined"
                                    fullWidth
                                    mb={2}
                                    mt={2}
                                    InputProps={{
                                        ...params.InputProps,
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

export default Motherboard;