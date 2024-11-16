import {Card, CardContent, Typography, Grid, ButtonGroup, Button} from '@mui/material';

const BuildItem = ({ build }) => {
    const { cpu, gpu, ram, motherboard, powerSupply, storage, pcCase, cooler } = build;

    return (
        <Card variant="outlined" sx={{ mb: 3 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">CPU</Typography>
                        <Typography>{cpu.name}</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">GPU</Typography>
                        <Typography> {gpu.name}</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">RAM</Typography>
                        <Typography> {ram.name}</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">Motherboard</Typography>
                        <Typography> {motherboard.name}</Typography>

                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">Power Supply</Typography>
                        <Typography> {powerSupply.name}</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">Storage</Typography>
                        <Typography> {storage.name}</Typography>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Typography variant="subtitle1" fontWeight="bold">Case</Typography>
                        <Typography> {pcCase.name}</Typography>
                    </Grid>

                    {cooler && (
                        <Grid item xs={12} md={6}>
                            <Typography variant="subtitle1" fontWeight="bold">Cooler</Typography>
                            <Typography> {cooler.name}</Typography>
                        </Grid>
                    )}

                </Grid>

            </CardContent>

        </Card>

    );
};

export default BuildItem;
