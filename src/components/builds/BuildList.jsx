import { CircularProgress, Container, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";
import BuildItem from "./BuildItem.jsx";

const BUILD_LIST_URI = import.meta.env.VITE_API_URI + "/build/builds";
const BuildList = () => {
    const [builds, setBuilds] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchBuilds = async () => {
            try {
                const response = await axios.get(BUILD_LIST_URI);
                setBuilds(response.data);
            } catch (error) {
                console.error("Error fetching builds:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchBuilds();
    }, []);

    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Typography variant="h4" gutterBottom>
                Here are our PC builds
            </Typography>
            {loading ? (
                <CircularProgress />
            ) : builds.length > 0 ? (
                builds.map((build) => <BuildItem key={build._id.$oid} build={build} />)
            ) : (
                <Typography variant="body1">No builds found.</Typography>
            )}
        </Container>
    );
};

export default BuildList;
