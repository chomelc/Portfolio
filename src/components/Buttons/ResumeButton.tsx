import { Tooltip, Button } from "@mui/material";
import DownloadIcon from '@mui/icons-material/Download';

export default function ResumeButton() {
    return (
        <Tooltip title="Download Resume">
            <Button
                sx={{ fontFamily: 'Monospace' }}
                variant="outlined"
                color="secondary"
                size="large"
                href={require("../../assets/Resume.pdf")}
                target="_blank"
                startIcon={<DownloadIcon />}>
                Resume
            </Button>
        </Tooltip>
    );
}