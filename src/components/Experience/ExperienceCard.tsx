import { Card, CardContent } from "@mui/material";
import ExperienceCardContent from "./ExperienceCardContent";

export default function ExperienceCard() {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 900, boxShadow: "none" }}>
            <CardContent>
                <ExperienceCardContent />
            </CardContent>
        </Card>
    );
}