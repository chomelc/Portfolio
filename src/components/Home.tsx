import { Box, Collapse, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Background from '../assets/img/background.png';
import PresentationCard from './PresentationCard';

export default function Home() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    });

    return (
        <Box
            display="flex"
            sx={{ flexGrow: 1 }}
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
            <Grid m={1} container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                        <PresentationCard />
                    </Collapse>
                </Grid>
            </Grid>
        </Box >
    );
}