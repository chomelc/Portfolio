import { Typography, List, ListItem, ListItemIcon, ListItemText, Stack, Chip } from "@mui/material";
import PushPinIcon from '@mui/icons-material/PushPin';

export default function ApprenticeshipExperience() {
    return (
        <>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                Full-Stack Software Engineering Apprentice <span style={{ color: "#FDB833" }}>@ SAP</span>
            </Typography>
            <Typography variant="body2" color="#BDC5AA" sx={{ fontFamily: 'Monospace' }}>
                September 2019 - Today
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Study of the users’ and other development teams’ needs in order to define the features to implement or maintain."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <Stack direction="column" spacing={1}>
                        <ListItemText
                            primary="Implementation of new features for data treatment and the testing process."
                        />
                        <Stack direction="row" spacing={1}>
                            <Chip label="Java" color="primary" variant="outlined" />
                            <Chip label="C++" color="primary" variant="outlined" />
                            <Chip label="Javascript" color="primary" variant="outlined" />
                            <Chip label="Typescript" color="primary" variant="outlined" />
                            <Chip label="React" color="primary" variant="outlined" />
                        </Stack>
                    </Stack>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Maintenance of already existing features: redesigned the test framework, corrected bugs."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <Stack direction="column" spacing={1}>
                        <ListItemText
                            primary="Development of new tools allowing the replication of the infrastructure: virtualized execution environments for some microservices, in order to improve the data treatment."
                        />
                        <Stack direction="row" spacing={1}>
                            <Chip label="Docker" color="primary" variant="outlined" />
                        </Stack>
                    </Stack>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <Stack direction="column" spacing={1}>
                        <ListItemText
                            primary="Implementation of unit and integration tests for the developed features."
                        />
                        <Stack direction="row" spacing={1}>
                            <Chip label="JUnit" color="primary" variant="outlined" />
                            <Chip label="CPPUnit" color="primary" variant="outlined" />
                            <Chip label="React Testing Library" color="primary" variant="outlined" />
                        </Stack>
                    </Stack>
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Active participation to the project monitoring."
                    />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <PushPinIcon fontSize="small" color="secondary" />
                    </ListItemIcon>
                    <ListItemText
                        primary="Preparing and training colleagues to new technologies and frameworks, such as React, Typescript and Redux."
                    />
                </ListItem>
            </List>
        </>
    );
}