import { Box, Collapse, Grid, Stack } from "@mui/material";
import AboutCardText from "./AboutCardText";
import CardTitle from "../CardTitle";
import Technologies from "./Technologies";
import ProfilePicture from "./ProfilePicture";
import { useEffect, useState } from "react";

export default function AboutCardContent() {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView } = state;
    const [checked, setChecked] = useState(false);

    useEffect(() => {
        setChecked(true);
        const setResponsiveness = () => {
            return window.innerWidth < 900
                ? setState((prevState) => ({ ...prevState, mobileView: true }))
                : setState((prevState) => ({ ...prevState, mobileView: false }));
        };

        setResponsiveness();

        window.addEventListener("resize", () => setResponsiveness());

        return () => {
            window.removeEventListener("resize", () => setResponsiveness());
        };
    }, []);

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <CardTitle number="01." title="About Me" />
            <Stack spacing={5} direction={mobileView ? "column" : "row"} alignItems="center">
                <Stack direction="column">
                    <Box
                        sx={{ maxWidth: "90vw" }}>
                        <AboutCardText />
                        <Technologies />
                    </Box>
                </Stack>
                <ProfilePicture />
            </Stack>
        </Collapse>
    );
}