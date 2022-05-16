import { Typography, IconButton, Chip, Stack, Tooltip } from "@mui/material";
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import { CourseStatus } from "./WorkCardContent";

export type SubCourseType = {
    title : string,
    status : CourseStatus,
    certificate : string
}

interface SubCourseProps {
    title: string;
    status: string;
    certificate?: string;
}

export default function SubCourse(props: SubCourseProps) {
    return (
        <>
            <Stack direction="row" alignItems="center" spacing={1}>
                <Typography variant="subtitle1" sx={{ fontFamily: 'Nunito' }}>
                    {props.title}
                </Typography>
                {props.certificate ?
                    <Tooltip title="View Certificate">
                        <IconButton size="small" sx={{ mt: 1.5, mb: 1.5 }} color="secondary" target="_blank" href={props.certificate}>
                            <WorkspacePremiumIcon />
                        </IconButton>
                    </Tooltip>
                    : undefined}
            </Stack>
            <Chip size="small" label={props.status} color="primary" variant="outlined" />
        </>
    );
}