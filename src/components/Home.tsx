import { Box, Collapse, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Background from '../assets/img/background.png';
import ButtonsBox from './ButtonsBox';
import HeaderBar from './HeaderBar';
import PresentationCard from './PresentationCard';

export default function Home() {
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
    });

    return (
        <Box
            display="flex"
            justifyContent="center"
            sx={{ flexGrow: 1 }}
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                backgroundAttachment: "scroll"
            }}>
            <Grid style={{ height: "100vh" }} m={1} container spacing={2} direction="row" justifyContent="center">
                <Grid item xs={12}>
                    <HeaderBar />
                </Grid>
                <Grid item xs={12}>
                    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
                        <PresentationCard />
                    </Collapse>
                </Grid>
            </Grid>
            <ButtonsBox />
        </Box>
    );
}