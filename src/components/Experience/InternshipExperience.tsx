import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  Stack,
  ListItemText,
  Chip,
  Card,
  CardContent,
} from "@mui/material";
import PushPinIcon from "@mui/icons-material/PushPin";

export default function InternshipExperience() {
  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "90vw",
        background: "rgba(0,0,0,0.2)",
        boxShadow: "none",
      }}
    >
      <CardContent>
        <Typography variant="h6" color="var(--white)" sx={{ mb: 1.5 }}>
          Full-Stack Software Engineering Intern{" "}
          <a href="https://www.sap.com/france/index.html" target="_blank">
            @ SAP
          </a>
        </Typography>
        <Typography variant="body2" sx={{ fontFamily: "Monospace" }}>
          June 2019 - August 2019
        </Typography>
        <List>
          <ListItem alignItems="flex-start">
            <ListItemIcon>
              <PushPinIcon fontSize="small" color="secondary" />
            </ListItemIcon>
            <Stack direction="column" spacing={1}>
              <ListItemText primary="Design and developement of a database driver (Google BigQuery) for the BusinessObjects Enterprise suite." />
              <Stack direction="row" spacing={1}>
                <Chip label="Java" color="primary" variant="outlined" />
              </Stack>
            </Stack>
          </ListItem>
        </List>
      </CardContent>
    </Card>
  );
}
