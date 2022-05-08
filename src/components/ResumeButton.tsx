import { Tooltip, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

export default function ResumeButton() {
    return (
        <Tooltip title="Download Resume">
            <Button size="large" href={require("../assets/Resume.pdf")} target="_blank" variant="contained" startIcon={<DownloadIcon />}>
                Resume
            </Button>
        </Tooltip>
    );
}