import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Stack,
  Chip,
  Grid,
} from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function ApprenticeshipExperience() {
  return (
    <>
      <Typography variant="h6" color="var(--white)" sx={{ mb: 1.5 }}>
        Full-Stack Software Engineering Apprentice{" "}
        <a href="https://www.sap.com/france/index.html" target="_blank">
          @ SAP
        </a>
      </Typography>
      <Typography variant="body2" sx={{ fontFamily: "Monospace" }}>
        September 2019 - September 2022
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Study of the users’ and other development teams’ needs in order to define the features to implement or maintain." />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <Stack direction="column" spacing={1}>
            <ListItemText primary="Implementation of new features for data treatment and the testing process." />
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item xs={6} md={4}>
                <Chip label="Java" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="C++" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="Javascript" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="Typescript" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="React" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="SAP UI5" color="primary" variant="outlined" />
              </Grid>
            </Grid>
          </Stack>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Maintenance of already existing features: redesigned the test framework, corrected bugs." />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <Stack direction="column" spacing={1}>
            <ListItemText primary="Development of new tools allowing the replication of the infrastructure: virtualized execution environments for some microservices, in order to improve the data treatment." />
            <Stack direction="row" spacing={1}>
              <Chip label="Docker" color="primary" variant="outlined" />
            </Stack>
          </Stack>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <Stack direction="column" spacing={1}>
            <ListItemText primary="Implementation of unit and integration tests for the developed features." />
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item xs={6} md={4}>
                <Chip label="JUnit" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="CPPUnit" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={4}>
                <Chip
                  label="React Testing Library"
                  color="primary"
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Stack>
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Active participation to the project monitoring." />
        </ListItem>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <ListItemText primary="Preparing and training colleagues to new technologies and frameworks, such as React, Typescript and Redux." />
        </ListItem>
      </List>
    </>
  );
}
