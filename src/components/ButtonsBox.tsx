import { IconButton, Stack } from '@mui/material';
import GitHubButton from './GitHubButton';
import LinkedInButton from './LinkedInButton';
import MailButton from './MailButton';
import PhoneButton from './PhoneButton';

export default function ButtonsBox() {
    return (
        <Stack direction="row" spacing={1} sx={{ mb: 1.5 }}>
            <MailButton />
            <LinkedInButton />
            <GitHubButton />
            <PhoneButton />
        </Stack>
    );
}