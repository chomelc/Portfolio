import { Card, CardContent } from "@mui/material";
import AboutCardContent from "./AboutCardContent";

export default function AboutCard() {
    return (
        <Card sx={{ width: 900, maxWidth: "100vw", boxShadow: "none" }}>
            <CardContent>
                <AboutCardContent />
            </CardContent>
        </Card>
    );
}