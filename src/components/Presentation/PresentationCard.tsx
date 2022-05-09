import { Card, CardContent } from '@mui/material';
import PresentationCardText from './PresentationCardText';

export default function PresentationCard() {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 900, boxShadow: "none" }}>
            <CardContent>
                <PresentationCardText />
            </CardContent>
        </Card>
    );
}