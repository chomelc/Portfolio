import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Background from '../assets/img/background.png';
import AboutCardContent from './About/AboutCardContent';
import ContactCardContent from './Contact/ContactCardContent';
import CustomCard from './CustomCard';
import ExperienceCardContent from './Experience/ExperienceCardContent';
import HeaderBar from './HeaderBar';
import PresentationCardContent from './Presentation/PresentationCardContent';

export enum HomeView {
    PRESENTATION,
    ABOUT,
    EXPERIENCE,
    CONTACT
}

function selectView(view: HomeView) {
    switch (view) {
        case HomeView.PRESENTATION:
            return (<PresentationCardContent />);
        case HomeView.ABOUT:
            return (<AboutCardContent />);
        case HomeView.EXPERIENCE:
            return (<ExperienceCardContent />);
        case HomeView.CONTACT:
            return (<ContactCardContent />);
    }
}

export default function Home() {
    const [view, setView] = useState(HomeView.PRESENTATION);

    return (
        <Box
            display="flex"
            sx={{ flexGrow: 1 }}
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                height: "100vh"
            }}
            justifyContent="center">
            <Stack spacing={2} direction="column">
                <HeaderBar selectView={setView} />
                <Box
                    sx={{ height: "100vh" }}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <CustomCard content={selectView(view)} />
                </Box>
            </Stack>
        </Box>
    );
}