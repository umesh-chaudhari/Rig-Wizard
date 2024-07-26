import React, {useState, useEffect, createContext, useContext} from 'react';
import {Container, Card, CardContent, Typography, Box, TextField, Autocomplete} from '@mui/material';
import {FixedSizeList} from 'react-window';
import {CPUContext} from "../context/StateContext.jsx"
import cpuData from "/public/data/filtered_processors.json";
import {motion } from "framer-motion"

const LISTBOX_PADDING = 8; // px

function renderRow(props) {
    const {data, index, style} = props;
    return React.cloneElement(data[index], {
        style: {
            ...style,
            top: style.top + LISTBOX_PADDING,
        },
    });
}

const OuterElementContext = createContext({});

const OuterElementType = React.forwardRef((props, ref) => {
    const outerProps = useContext(OuterElementContext);
    return <div ref={ref} {...props} {...outerProps} />;
});

const ListboxComponent = React.forwardRef(function ListboxComponent(props, ref) {
    const {children, ...other} = props;
    const itemData = React.Children.toArray(children);
    const itemCount = itemData.length;
    const itemSize = 46;

    const getHeight = () => {
        if (itemCount > 8) {
            return 8 * itemSize;
        }
        return itemData.length * itemSize;
    };

    return (
        <div ref={ref}>
            <OuterElementContext.Provider value={other}>
                <FixedSizeList
                    height={getHeight() + 2 * LISTBOX_PADDING}
                    width="100%"
                    itemSize={itemSize}
                    itemCount={itemCount}
                    outerElementType={OuterElementType}
                    innerElementType="ul"
                    itemData={itemData}
                >
                    {renderRow}
                </FixedSizeList>
            </OuterElementContext.Provider>
        </div>
    );
});
const Cpu = () => {
    const {cpu, setCpu} = useContext(CPUContext)
    const [cpus, setCpus] = useState([]);
    useEffect(() => {
        // Fetch the CPU data and set it to the state (mock fetch here)
        setCpus(cpuData);
    }, []);
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
                        isOptionEqualToValue={(option, value) => option.name === value.name}
                        value={cpu || null}
                        onChange={(error, value) => {
                            setCpu(value)
                            console.log("Autocomplete Value...", value)
                        }}
                        options={cpus}
                        getOptionLabel={(option) => `${option.name} ${option.chipset ? option.chipset : ""}`}
                        renderInput={(params) => <TextField {...params} label="CPU" variant="outlined" fullWidth
                                                            mb={2} mt={2}/>}
                        ListboxComponent={ListboxComponent}
                        renderOption={(props, option, state, ownerState) => (
                            <Box component="li" {...props} sx={{my: 1, py: 5}} key={option}>
                                {option.name} {option.chipset ? option.chipset : ''}
                            </Box>
                        )}
                    />
                    {/*<Typography variant="h5" mt={3}> {Object.values(cpu)[2]}</Typography>*/}
                </CardContent>
            </Card>
        </Container>
        </motion.div>
    );
};

export default Cpu;