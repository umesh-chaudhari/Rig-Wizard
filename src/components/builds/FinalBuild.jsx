import CloseIcon from "@mui/icons-material/Close";
import {
    Box,
    Button,
    ButtonGroup,
    Card,
    CardActionArea,
    CardContent,
    CircularProgress,
    Container,
    Grid,
    IconButton,
    List,
    ListItem,
    ListItemText,
    Modal,
    Typography,
} from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { usePcBuilderStore } from "../../context/PcStore.jsx";

const formatKey = (key) => {
    return key
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
};

const PDF_URI = import.meta.env.VITE_API_URI + "/build/generate-pdf";
const SAVE_BUILD_URI = import.meta.env.VITE_API_URI + "/build/new-build";
const ComponentModal = ({ open, onClose, component, title }) => {
    if (!component) return null;
    delete component["_id"];
    const componentEntries = Object.entries(component).filter(
        ([key, value]) => value !== null && value !== undefined,
    );

    componentEntries.map(([key, value]) => key.split("_").join(" "));
    return (
        <Modal open={open} onClose={onClose}>
            <Box
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    bgcolor: "background.paper",
                    boxShadow: 24,
                    p: 4,
                    maxWidth: 400,
                    width: "100%",
                    outline: "none",
                }}
            >
                <Box
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    mb={2}
                >
                    <Typography variant="h6" component="h2">
                        {title}
                    </Typography>
                    <IconButton onClick={onClose}>
                        <CloseIcon />
                    </IconButton>
                </Box>

                <List>
                    {componentEntries.map(([key, value]) => (
                        <ListItem key={key}>
                            <ListItemText
                                primary={formatKey(key)}
                                secondary={String(value)} // Convert value to string if it's not already
                            />
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Modal>
    );
};

const FinalBuild = () => {
    const {
        cpu,
        gpu,
        ram,
        motherboard,
        powerSupply,
        storage,
        pcCase,
        cooler,
        resetParts,
    } = usePcBuilderStore();

    const build = {
        cpu: cpu,
        gpu: gpu,
        ram: ram,
        motherboard: motherboard,
        powerSupply: powerSupply,
        storage: storage,
        pcCase: pcCase,
        cooler: cooler,
    };
    const [selectedTitle, setSelectedTitle] = useState("");
    const [selectedComponent, setSelectedComponent] = useState(null);
    const [open, setOpen] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleCardClick = (title, component) => {
        setSelectedComponent(component);
        setSelectedTitle(title);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const saveBuild = async (build) => {
        setLoading(true);
        try {
            const response = await axios.post(SAVE_BUILD_URI, build);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const exportBuild = async (build) => {
        setLoading(true);

        try {
            const response = await axios.post(PDF_URI, build, {
                responseType: "blob",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const blob = new Blob([response.data], { type: "application/pdf" });
            const url = window.URL.createObjectURL(blob);
            const link = document.createElement("a");
            link.href = url;
            link.download = "pc-build-specifications.pdf";

            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    };
    const components = [
        { title: "CPU", component: cpu, url: "images/processor.png" },
        { title: "GPU", component: gpu, url: "images/video-card.png" },
        { title: "RAM", component: ram, url: "images/memory-slot.png" },
        { title: "Storage", component: storage, url: "images/hdd.png" },
        {
            title: "Motherboard",
            component: motherboard,
            url: "images/motherboard.png",
        },
        { title: "Case", component: pcCase, url: "images/cabinets-caticon.png" },
        { title: "PSU", component: powerSupply, url: "images/power-supply.png" },
        { title: "Cooler", component: cooler, url: "images/cooler-caticon.png" },
    ];
    const handlePdfBuild = () => {
        exportBuild(build).then(handleSaveBuild).then(resetParts);
    };
    const handleSaveBuild = () => {
        saveBuild(build).then(resetParts);
    };

    return (
        <Container>
            <Typography variant="h3" align="center" my={4}>
                Here is your build
            </Typography>
            <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                my={2}
            >
                {components.map(({ title, component, url }) => (
                    <Grid key={title} item xs={12} sm={6} md={4} lg={3}>
                        <Card sx={{ height: "12rem" }}>
                            <CardActionArea onClick={() => handleCardClick(title, component)}>
                                <Box
                                    display="flex"
                                    justifyContent="start"
                                    alignItems="center"
                                    mb={1}
                                    mt={2}
                                    mx={2}
                                >
                                    <img
                                        src={url}
                                        alt="Component"
                                        style={{ width: 50, height: 50 }}
                                    />
                                </Box>
                                <CardContent>
                                    <Typography variant="h6" gutterBottom>
                                        {title}
                                    </Typography>
                                    <Typography variant="body1">
                                        {component ? component.name : "Not Selected"}
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <ComponentModal
                open={open}
                onClose={handleClose}
                component={selectedComponent}
                title={selectedTitle}
            />
            <ButtonGroup size="large">
                <Button variant="outlined" onClick={handleSaveBuild}>
                    SAVE
                </Button>
                <Button variant="outlined" sx={{ mx: 2 }} onClick={handlePdfBuild}>
                    EXPORT AS PDF
                </Button>
            </ButtonGroup>
            {loading && <CircularProgress size={30}></CircularProgress>}
        </Container>
    );
};

export default FinalBuild;
