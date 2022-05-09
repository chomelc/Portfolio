import { Box, Collapse, Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import Background from '../assets/img/background.png';
import AboutCard from './AboutCard';
import ButtonsBox from './ButtonsBox';
import ExperienceCard from './ExperienceCard';
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
            <Grid m={1} container spacing={2} direction="row" justifyContent="center">
                <Grid item xs={12}>
                    <HeaderBar />
                </Grid>
                <Grid item xs={12}>
                    {/* <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}> */}
                    <PresentationCard />
                    {/* </Collapse> */}
                </Grid>
                <Grid item xs={12}>
                    <AboutCard />
                </Grid>
                <Grid item xs={12}>
                    <ExperienceCard />
                </Grid>
            </Grid>
            <ButtonsBox />
        </Box>
    );
}