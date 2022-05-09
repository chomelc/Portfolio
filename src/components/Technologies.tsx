import { Typography, Stack, Chip } from "@mui/material";

export default function Technologies() {
    return (
        <>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                Here are a few technologies I’ve been working with recently:
            </Typography>
            <Stack direction="row" spacing={1}>
                <Chip label="Java" color="primary" variant="outlined" />
                <Chip label="C#" color="primary" variant="outlined" />
                <Chip label="Python" color="primary" variant="outlined" />
                <Chip label="React" color="primary" variant="outlined" />
                <Chip label="Javascript" color="primary" variant="outlined" />
                <Chip label="TypeScript" color="primary" variant="outlined" />
            </Stack>
        </>
    );
}