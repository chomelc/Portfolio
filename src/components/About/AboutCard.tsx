import { Card, CardContent } from "@mui/material";
import AboutCardContent from "./AboutCardContent";

export default function AboutCard() {
    return (
        <Card sx={{ minWidth: 275, maxWidth: 900, boxShadow: "none" }}>
            <CardContent>
                <AboutCardContent />
            </CardContent>
        </Card>
    );
}