import { Card, CardContent } from "@mui/material";
import ContactCardContent from "./ContactCardContent";

export default function ContactCard() {
    return (
        <Card sx={{ width: 900, maxWidth: "100vw", boxShadow: "none" }}>
            <CardContent>
                <ContactCardContent />
            </CardContent>
        </Card>
    );
}