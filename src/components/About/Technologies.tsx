import { Typography, Stack, Chip, Grid } from "@mui/material";

export default function Technologies() {
    return (
        <>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                Here are a few technologies I’ve been working with recently:
            </Typography>
            <Grid container direction="row" spacing={1} alignItems="center">
                <Grid item xs={4}>
                    <Chip label="Java" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <Chip label="C#" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <Chip label="Python" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <Chip label="React" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <Chip label="Javascript" color="primary" variant="outlined" />
                </Grid>
                <Grid item xs={4}>
                    <Chip label="TypeScript" color="primary" variant="outlined" />
                </Grid>
            </Grid>
        </>
    );
}