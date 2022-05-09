import { Box, IconButton, Stack } from '@mui/material';
import GitHubButton from './GitHubButton';
import LinkedInButton from './LinkedInButton';
import MailButton from './MailButton';
import PhoneButton from './PhoneButton';

export default function ButtonsBox() {
    return (
        <Box sx={{ transform: 'translateZ(0px)', flexGrow: 1 }}>
            <Stack direction="column" spacing={1} sx={{ position: 'absolute', bottom: 16, right: 16 }}>
                <MailButton />
                <LinkedInButton />
                <GitHubButton />
                <PhoneButton />
            </Stack>
        </Box>
    );
}