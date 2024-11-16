import {
  Autocomplete,
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import { motion } from "framer-motion";
import { useState } from "react";
import { usePcBuilderStore } from "../context/PcStore.jsx";
import ListboxComponent from "./ListboxComponent.jsx";

const URI = import.meta.env.VITE_API_URI + "/build/cooler";
const Cooler = () => {
  const { cooler, setCooler } = usePcBuilderStore();
  const [coolers, setCoolers] = useState([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(URI);
      if (response.status === 200) {
        setCoolers(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };
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
    setCoolers([]);
  };
  return (
    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
      <Container
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "65vh",
        }}
      >
        <Card style={{ width: 500, textAlign: "center", padding: "20px" }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Select Your CPU Cooler
            </Typography>
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              mb={5}
              mt={3}
            >
              <img
                src="/images/cooler-caticon.png"
                alt="Component"
                style={{ width: 100, height: 100 }}
              />
            </Box>
            <Autocomplete
              open={open}
              loading={loading}
              onOpen={handleOpen}
              onClose={handleClose}
              value={cooler}
              onChange={(error, value) => {
                setCooler(value);
                console.log("Autocomplete Value...", value);
              }}
              options={coolers}
              getOptionLabel={(option) =>
                `${option.name} - ${option.size + " mm"}`
              }
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Cooler"
                  variant="outlined"
                  fullWidth
                  mb={2}
                  mt={2}
                  InputProps={{
                    ...params.InputProps,
                    endAdornment: (
                      <>
                        {loading ? (
                          <CircularProgress color="inherit" size={20} />
                        ) : null}
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

export default Cooler;
