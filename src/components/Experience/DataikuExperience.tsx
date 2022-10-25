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
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        Full-Stack Software Engineer{" "}
        <span style={{ color: "#FDB833" }}>@ Dataiku</span>
      </Typography>
      <Typography
        variant="body2"
        color="#BDC5AA"
        sx={{ fontFamily: "Monospace" }}
      >
        September 2022 - Today
      </Typography>
      <List>
        <ListItem alignItems="flex-start">
          <ListItemIcon>
            <PushPinIcon fontSize="small" color="secondary" />
          </ListItemIcon>
          <Stack direction="column" spacing={1}>
            <ListItemText primary="Working on the core product Dataiku DSS, on data presentation & visualization topics." />
            <Grid container direction="row" spacing={1} alignItems="center">
              <Grid item xs={6} md={4}>
                <Chip label="Java" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={6} md={4}>
                <Chip label="Angular2+" color="primary" variant="outlined" />
              </Grid>
              <Grid item xs={12} md={4}>
                <Chip label="AngularJS" color="primary" variant="outlined" />
              </Grid>
            </Grid>
          </Stack>
        </ListItem>
      </List>
    </>
  );
}
