import { Stack, Typography, Divider } from "@mui/material";

interface CardTitleProps {
    number : string,
    title: string
}

export default function AboutCardTitle(props : CardTitleProps) {
    return (
        <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="h4" color="secondary" sx={{ fontFamily: 'Monospace' }}>
                {props.number}
            </Typography>
            <Typography variant="h4" color="primary" sx={{ fontFamily: 'Nunito' }}>
                {props.title}
            </Typography>
            <Divider style={{ height: "1px", width: "50%", backgroundColor: "#D0D6C2" }} />
        </Stack>
    );
}