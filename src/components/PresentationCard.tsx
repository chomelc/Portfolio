import { Avatar, Card, CardContent } from '@mui/material';
import ProfilePicture from '../assets/img/avatar.jpg';
import PresentationCardText from './PresentationCardText';
import ResumeButton from './ResumeButton';

export default function PresentationCard() {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 675, boxShadow: "none" }}>
            <CardContent>
                <Avatar
                    alt="Clémence Chomel"
                    src={ProfilePicture}
                    sx={{ width: 156, height: 156, mb: 1.5 }}
                />
                <PresentationCardText />
                <ResumeButton />
            </CardContent>
        </Card>
    );
}