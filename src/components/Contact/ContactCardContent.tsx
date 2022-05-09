import { Button, Stack, Tooltip } from "@mui/material";
import CardTitle from "../CardTitle";
import LinkedInCard from "../LinkedInCard";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { useEffect, useState } from "react";

export default function AboutCardContent() {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView } = state;

    useEffect(() => {
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
        <>
            <CardTitle number="03." title="Get In Touch" />
            <Stack direction={mobileView ? "column" : "row"} spacing={2} alignItems="center" justifyContent="flex-start">
                <LinkedInCard theme="dark" />
                <Stack direction="column" spacing={2} alignItems="flex-start">
                    <Tooltip title="Write an email">
                        <Button
                            size="large"
                            startIcon={<MailOutlineIcon color="secondary" />}
                            onClick={(e) => {
                                window.location.href = "mailto:clemence.chomel@gmail.com";
                                e.preventDefault();
                            }}
                        >
                            clemence.chomel@gmail.com
                        </Button>
                    </Tooltip>
                    <Tooltip title="Call phone number">
                    <Button
                        size="large"
                        startIcon={<LocalPhoneIcon color="secondary" />}
                        onClick={(e) => {
                            window.location.href = "tel:(+33)695643477";
                            e.preventDefault();
                        }}
                    >
                        (+33)695643477
                    </Button>
                    </Tooltip>
                </Stack>
            </Stack>
        </>
    );
}