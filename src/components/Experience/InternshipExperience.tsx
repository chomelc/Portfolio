import { Typography, List, ListItem, ListItemIcon, Stack, ListItemText, Chip } from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';

export default function InternshipExperience() {
    return (
        <>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                Full-Stack Software Engineering Intern <span style={{ color: "#FDB833" }}>@ SAP</span>
            </Typography>
            <Typography variant="body2" color="#BDC5AA" sx={{ fontFamily: 'Monospace' }}>
                June 2019 - August 2019
            </Typography>
            <List >
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <Stack direction="column" spacing={1}>
                        <ListItemText
                            primary="Design and developement of a database driver (Google BigQuery) for the BusinessObjects Enterprise suite."
                        />
                        <Stack direction="row" spacing={1}>
                            <Chip label="Java" color="primary" variant="outlined" />
                        </Stack>
                    </Stack>
                </ListItem>
            </List>
        </>
    );
}