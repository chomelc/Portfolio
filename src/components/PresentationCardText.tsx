import { Typography } from "@mui/material";
import ButtonsBox from "./ButtonsBox";

export default function PresentationCardText() {
    return (
        <>
            <Typography variant="h6" color="secondary" sx={{ fontFamily: 'Monospace' }}>
                Hi, my name is
            </Typography>
            <Typography variant="h2" sx={{ fontFamily: 'Nunito' }}>
                Clémence Chomel.
            </Typography>
            <Typography color="#BDC5AA" variant="h4" sx={{ mb: 1.5, fontFamily: 'Nunito' }}>
                I'm a Software Engineer.
            </Typography>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                Soon to be graduate software engineer at University of Technology of Compiègne.
                I am currently looking for a <span style={{color:"#FDB833"}}>software engineer position</span>, starting in
                september 2022, in the Paris region.
            </Typography>
        </>
    );
}