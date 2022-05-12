import { Card, CardContent } from '@mui/material';

interface CustomCardProps {
    content: JSX.Element;
}

export default function CustomCard(props: CustomCardProps) {
    return (
        <Card sx={{ width: 900, maxWidth: "100vw", boxShadow: "none" }}>
            <CardContent>
                {props.content}
            </CardContent>
        </Card>
    );
}