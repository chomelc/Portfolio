import { Card, CardContent } from "@mui/material";
import ExperienceCardContent from "./ExperienceCardContent";

export default function ExperienceCard() {
    return (
        <Card sx={{ width: 900, maxWidth: "100vw", boxShadow: "none" }}>
            <CardContent>
                <ExperienceCardContent />
            </CardContent>
        </Card>
    );
}