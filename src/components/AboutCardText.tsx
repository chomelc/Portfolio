import { Typography } from "@mui/material";

export default function AboutCardText() {
    return (
        <>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                As a former intern and now a <span style={{ color: "#FDB833" }}>full-stack software engineer</span>ing apprentice within SAP,
                it is time for me to consider the beginning of my career as a graduated engineer.
            </Typography>
            <Typography variant="h6" sx={{ mb: 1.5 }}>
                I am dynamic, conscientious and open, and I thrive in a paced work environment where teamwork is essential.
                My experience has familiarized me with many of the challenges facing the software industry today and it has offered
                me the opportunity to gain responsibility by working on a number of projects crucial to the company,
                both on the <span style={{ color: "#FDB833" }}>front</span> and the <span style={{ color: "#FDB833" }}>back</span> end.
            </Typography>
        </>
    );
}