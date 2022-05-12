import { Card, CardContent, Typography, CardHeader, IconButton, Chip, Stack } from "@mui/material";
import FolderOutlinedIcon from '@mui/icons-material/FolderOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';

interface ProjectCardProps {
    title: string;
    description: string;
    link: string;
    technologies: string[];
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <Card sx={{ width: 400, height: 250, maxWidth: "90vw", background: 'rgba(0,0,0,0.7)', boxShadow: "none" }} >
            <CardHeader
                avatar={
                    <FolderOutlinedIcon color="secondary" style={{ fontSize: 35 }} />
                }
                action={
                    <IconButton color="primary" className="custom-link" href={props.link} target="_blank">
                        <GitHubIcon />
                    </IconButton>
                }>
            </CardHeader>
            <CardContent>
                <Typography variant="h5" sx={{ fontFamily: 'Nunito' }}>
                    {props.title}
                </Typography>
                <Typography variant="subtitle1">
                    {props.description}
                </Typography>
                <Stack mt={1.5} direction="row" spacing={1}>
                    {props.technologies.map((technology) => (
                        <Chip label={technology} color="primary" variant="outlined" />
                    ))}
                </Stack>
            </CardContent>
        </Card>
    );
}