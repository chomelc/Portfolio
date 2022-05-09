import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { IconButton, Tooltip } from '@mui/material';

export default function LinkedInButton() {
    return (
        <Tooltip title="LinkedIn">
            <IconButton className="custom-link" size="large" color="primary" sx={{ border: "1px solid" }} href="https://www.linkedin.com/in/clemencechomel/" target="_blank">
                <LinkedInIcon />
            </IconButton>
        </Tooltip>
    );
}