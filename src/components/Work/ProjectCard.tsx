import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Chip,
  Stack,
  Tooltip,
} from "@mui/material";
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import { ProjectStatus } from "./WorkCardContent";

interface ProjectCardProps {
  title: string;
  description: string;
  status: string;
  gh_link: string;
  link: string | undefined;
  technologies: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <Card
      sx={{
        width: 400,
        height: 250,
        maxWidth: "90vw",
        background: "rgba(0,0,0,0.2)",
        boxShadow: "none",
      }}
    >
      <CardHeader
        avatar={
          <FolderOutlinedIcon color="secondary" style={{ fontSize: 35 }} />
        }
        action={
          <>
            <Tooltip title="View on Github">
              <IconButton
                color="primary"
                className="custom-link"
                href={props.gh_link}
                target="_blank"
              >
                <GitHubIcon />
              </IconButton>
            </Tooltip>
            {props.link ? (
              <Tooltip title="Visit application">
                <IconButton
                  color="primary"
                  className="custom-link"
                  href={props.link}
                  target="_blank"
                >
                  <IosShareOutlinedIcon />
                </IconButton>
              </Tooltip>
            ) : undefined}
          </>
        }
      ></CardHeader>
      <CardContent>
        <Stack direction="row" spacing={1} alignItems="center">
          <Typography variant="h5" color="var(--white)">
            {props.title}
          </Typography>
          {props.status === ProjectStatus.IN_PROGRESS ? (
            <Chip
              size="small"
              label="WIP"
              color="secondary"
              variant="outlined"
            />
          ) : undefined}
        </Stack>
        <Typography variant="subtitle1">{props.description}</Typography>
        <Stack mt={1.5} direction="row" spacing={1}>
          {props.technologies.map((technology) => (
            <Chip label={technology} color="primary" variant="outlined" />
          ))}
        </Stack>
      </CardContent>
    </Card>
  );
}
