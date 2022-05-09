import { Box, IconButton, Stack } from '@mui/material';
import { useEffect, useState } from 'react';
import GitHubButton from './GitHubButton';
import LinkedInButton from './LinkedInButton';
import MailButton from './MailButton';
import PhoneButton from './PhoneButton';

export default function ButtonsBox() {
    const [state, setState] = useState({
        mobileView: false
    });

    const { mobileView } = state;

    useEffect(() => {
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Stack direction={mobileView ? "row" : "column"} spacing={1} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                <MailButton />
                <LinkedInButton />
                <GitHubButton />
                <PhoneButton />
            </Stack>
        </Box>
    );
}