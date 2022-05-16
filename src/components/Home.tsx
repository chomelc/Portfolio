import { Box, Stack } from '@mui/material';
import { useState } from 'react';
import Background from '../assets/img/background.webp';
import AboutCardContent from './About/AboutCardContent';
import ContactCardContent from './Contact/ContactCardContent';
import CustomCard from './CustomCard';
import ExperienceCardContent from './Experience/ExperienceCardContent';
import HeaderBar from './HeaderBar';
import PresentationCardContent from './Presentation/PresentationCardContent';
import WorkCardContent from './Work/WorkCardContent';

export enum HomeView {
    PRESENTATION,
    ABOUT,
    EXPERIENCE,
    WORK,
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
        case HomeView.WORK:
            return (<WorkCardContent />);
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
                minHeight: "100vh"
            }}>
            <Stack spacing={2} direction="column" alignItems="center">
                <HeaderBar selectView={setView} />
                <Box>
                    <CustomCard content={selectView(view)} />
                </Box>
            </Stack>
        </Box>
    );
}