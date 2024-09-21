import React, {createContext, useContext, useEffect, useState} from 'react';
import {PcContext, RAMContext} from "../context/StateContext.jsx";
import {Autocomplete, Box, Card, CardContent, Container, TextField, Typography} from "@mui/material";
import {FixedSizeList} from "react-window";
import ramData from "/public/data/memory.json"
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


const Ram = () => {
    const {ram} = useContext(PcContext)
    const [ramValue, setRamValue] = ram
    const [rams, setRams] = useState([]);

    useEffect(() => {
        // Fetch the CPU data and set it to the state (mock fetch here)
        setRams(ramData);
    }, []);

    useEffect(() => {
        setRamValue(ramValue)
    }, [ramValue]);
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh'}}>
                <Card style={{width: 500, textAlign: 'center', padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Select Your RAM
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center"  mb={5} mt={3}>
                            <img src="/images/memory-slot.png" alt="Component" style={{width: 100, height: 100}}/>
                        </Box>
                        <Autocomplete
                            value={ramValue || null}
                            onChange={(error, value) => {
                                setRamValue(value)
                                console.log("Autocomplete Value....",value)
                            }}
                            options={rams}
                            getOptionLabel={(option) => option.name}
                            renderInput={(params) => <TextField {...params} label="RAM" variant="outlined" fullWidth/>}
                            ListboxComponent={ListboxComponent}
                        />
                    </CardContent>
                </Card>
            </Container>
        </motion.div>
    );
};

export default Ram;