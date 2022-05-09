import { Box, Grid } from "@mui/material";
import AboutCardText from "./AboutCardText";
import CardTitle from "../CardTitle";
import Technologies from "./Technologies";
import ProfilePicture from "./ProfilePicture";

export default function AboutCardContent() {
    return (
        <>
            <CardTitle number="01." title="About me" />
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={{ xs: 2, md: 3 }} alignItems="flex-start">
                    <Grid item md={12} lg={6}>
                        <AboutCardText />
                        <Technologies />
                    </Grid>
                    <Grid item md={12} lg={6}>
                        <ProfilePicture />
                    </Grid>
                </Grid>
            </Box>

        </>
    );
}