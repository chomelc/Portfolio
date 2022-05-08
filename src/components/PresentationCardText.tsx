import { Typography } from "@mui/material";
import ButtonsBox from "./ButtonsBox";

export default function PresentationCardText() {
    return (
        <>
            <Typography variant="h2" component="div">
                Clémence Chomel
            </Typography>
            <Typography variant="h4" sx={{ mb: 1.5 }}>
                Software Engineer 🇫🇷
            </Typography>
            <ButtonsBox />
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                Soon to be graduate software engineer at University of Technology of Compiègne.
                I am currently looking for a software engineer position, starting in
                september 2022, in the Paris region.
            </Typography>
        </>
    );
}