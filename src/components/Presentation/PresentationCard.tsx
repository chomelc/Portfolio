import { Box, Card, CardContent, Grid } from '@mui/material';
import PresentationCardText from './PresentationCardText';

export default function PresentationCard() {
    return (
        <Card sx={{ width: 900, maxWidth: "100vw", boxShadow: "none" }}>
            <CardContent>
                <PresentationCardText />
            </CardContent>
        </Card>
    );
}