import React, {createContext, useContext, useEffect, useState} from 'react';
import {PcContext, StorageContext} from "../context/StateContext.jsx";
import {Autocomplete, Box, Card, CardContent, Container, TextField, Typography} from "@mui/material";
import {FixedSizeList} from "react-window";
import storageData from "/public/data/internal-hard-drive.json"
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
const InternalStorage = () => {
    const {storage} = useContext(PcContext)
    const [storageValue, setStorageValue] = storage
    const [storages, setStorages] = useState([]);

    useEffect(() => {
        // Fetch the CPU data and set it to the state (mock fetch here)
        setStorages(storageData);
    }, []);

    useEffect(() => {
        setStorageValue(storageValue)
    }, [storageValue]);
    return (
        <motion.div initial={{opacity: 0}} whileInView={{opacity: 1}}>
            <Container style={{display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '65vh'}}>
                <Card style={{width: 500, textAlign: 'center', padding: '20px'}}>
                    <CardContent>
                        <Typography variant="h5" gutterBottom>
                            Select Your Internal Storage
                        </Typography>
                        <Box display="flex" justifyContent="center" alignItems="center" mb={5} mt={3}>
                            <img src="/images/hdd.png" alt="Component" style={{width: 100, height: 100}}/>
                        </Box>
                        <Autocomplete
                            value={storageValue || null}
                            onChange={(error, value) => {
                                setStorageValue(value)
                                console.log("Autocomplete Value....",value)
                            }}
                            options={storages}
                            getOptionLabel={(option) => `${option.name} - ${option.capacity < 1000 ? option.capacity + " GB" : option.capacity / 1000 + " TB"}`}
                            renderInput={(params) => <TextField {...params} label="Internal Storage" variant="outlined" fullWidth/>}
                            ListboxComponent={ListboxComponent}
                        />
                    </CardContent>
                </Card>
            </Container>
        </motion.div>
    );
};

export default InternalStorage;