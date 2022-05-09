import { Box, Collapse, Grid, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import Background from '../assets/img/background.png';
import AboutCard from './About/AboutCard';
import ButtonsBox from './Buttons/ButtonsBox';
import ContactCard from './Contact/ContactCard';
import ExperienceCard from './Experience/ExperienceCard';
import HeaderBar from './HeaderBar';
import PresentationCard from './Presentation/PresentationCard';

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
                backgroundAttachment: "scroll"
            }}
            justifyContent="center">
            <Stack spacing={2} direction="column">
                <HeaderBar />
                {/* <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}> */}
                <Box
                    sx={{ height: "100vh" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <PresentationCard />
                    {/* </Collapse> */}
                </Box>
                <Box
                    id="about"
                    sx={{ height: "100vh" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <AboutCard />
                </Box>
                <Box
                    id="experience"
                    sx={{ height: "100vh" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ExperienceCard />
                </Box>
                <Box
                    id="contact"
                    sx={{ height: "100vh" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <ContactCard />
                </Box>
            </Stack>
        </Box>
    );
}