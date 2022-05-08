import { IconButton, Tooltip } from "@mui/material";
import MailOutlineIcon from '@mui/icons-material/MailOutline';

export default function MailButton() {
    return (
        <Tooltip title="clemence.chomel@gmail.com">
            <IconButton size="large" color="primary" sx={{ border: "1px solid" }} onClick={(e) => {
                window.location.href = "mailto:clemence.chomel@gmail.com";
                e.preventDefault();
            }}>
                <MailOutlineIcon />
            </IconButton>
        </Tooltip>
    );
}