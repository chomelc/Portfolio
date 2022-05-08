import GitHubIcon from '@mui/icons-material/GitHub';
import { IconButton, Tooltip } from '@mui/material';

export default function GitHubButton() {
    return (
        <Tooltip title="GitHub">
            <IconButton size="large" color="primary" sx={{ border: "1px solid" }} href="https://github.com/chomelc" target="_blank">
                <GitHubIcon />
            </IconButton>
        </Tooltip>
    );
}