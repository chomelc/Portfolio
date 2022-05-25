import {
  Card,
  CardContent,
  Typography,
  CardHeader,
  IconButton,
  Chip,
  Stack,
  Button,
  Tooltip,
  Grid,
  Divider,
  FormControlLabel,
  Switch,
  Collapse,
} from "@mui/material";
import IosShareOutlinedIcon from "@mui/icons-material/IosShareOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import SubCourse, { SubCourseType } from "./SubCourse";
import { useState } from "react";

interface CourseCardProps {
  mobileView: boolean;
  title: string;
  status: string;
  description?: string;
  link?: string;
  certificate?: string;
  subcourses?: SubCourseType[];
}

export default function CourseCard(props: CourseCardProps) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked((prev) => !prev);
  };

  return (
    <Card
      sx={{
        width: "100%",
        maxWidth: "90vw",
        background: "rgba(0,0,0,0.7)",
        boxShadow: "none",
      }}
    >
      <CardHeader
        avatar={<LinkedInIcon color="secondary" style={{ fontSize: 35 }} />}
        action={
          props.link ? (
            <Tooltip title="View Course">
              <IconButton
                color="primary"
                className="custom-link"
                href={props.link}
                target="_blank"
              >
                <IosShareOutlinedIcon />
              </IconButton>
            </Tooltip>
          ) : undefined
        }
      ></CardHeader>
      <CardContent>
        <Stack direction="row" spacing={1}>
          <Typography variant="h5" sx={{ fontFamily: "Nunito" }}>
            {props.title}
          </Typography>
          <Chip label={props.status} color="primary" variant="outlined" />
        </Stack>
        {props.certificate ? (
          <Tooltip title="View Certificate">
            <Button
              sx={{ mt: 1.5, mb: 1.5 }}
              color="secondary"
              variant="outlined"
              target="_blank"
              href={props.certificate}
              startIcon={<WorkspacePremiumIcon />}
            >
              Certificate
            </Button>
          </Tooltip>
        ) : undefined}
        <Typography variant="subtitle1">{props.description}</Typography>

        {props.subcourses ? (
          <>
            <FormControlLabel
              style={{ marginTop: 15 }}
              control={
                <Switch
                  sx={{
                    "& .MuiSwitch-track": {
                      backgroundColor: "#D0D6C2",
                    },
                  }}
                  checked={checked}
                  onChange={handleChange}
                  color="secondary"
                />
              }
              label={
                <Typography
                  variant="body1"
                  color="primary"
                  sx={{ fontFamily: "Monospace" }}
                >
                  Show Subcourses
                </Typography>
              }
            />
            <Collapse in={checked}>
              <Stack
                mt={2.5}
                mb={1.5}
                direction="row"
                spacing={2}
                alignItems="center"
                justifyContent="flex-start"
              >
                <Typography variant="h5" sx={{ fontFamily: "Nunito" }}>
                  Subcourses
                </Typography>
                <Divider
                  style={{
                    height: "1px",
                    width: "80%",
                    backgroundColor: "#D0D6C2",
                  }}
                />
              </Stack>
              <Grid
                container
                direction={props.mobileView ? "column" : "row"}
                spacing={2}
                alignItems="flex-start"
              >
                {props.subcourses?.map((subcourse) => (
                  <Grid item xs={12} md={6}>
                    <SubCourse
                      title={subcourse.title}
                      status={subcourse.status}
                      certificate={
                        subcourse.certificate
                          ? subcourse.certificate
                          : undefined
                      }
                    />
                  </Grid>
                ))}
              </Grid>
            </Collapse>
          </>
        ) : undefined}
      </CardContent>
    </Card>
  );
}
