import { Box, Toolbar, Button, AppBar, IconButton, Typography, Link, Stack, Drawer, useScrollTrigger, Slide } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import ResumeButton from "./Buttons/ResumeButton";
import { useEffect, useState } from "react";

interface HideOnScrollProps {
    children: React.ReactElement;
}

function HideOnScroll({ children }: HideOnScrollProps) {
    const trigger = useScrollTrigger();
    return (
        <Slide appear={false} direction={'down'} in={!trigger}>
            {children}
        </Slide>
    );
}

export default function HeaderBar() {
    const [state, setState] = useState({
        mobileView: false,
        drawerOpen: false,
    });

    const { mobileView, drawerOpen } = state;

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

    const displayDesktop = () => {
        return (
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="home"
                        sx={{ mr: 2 }}
                        href="#"
                    >
                        <HomeOutlinedIcon />
                    </IconButton>
                </Box>
                <Stack direction="row" spacing={5} alignItems="center">
                    <Typography color="secondary" sx={{ fontFamily: 'Monospace' }}>
                        01.
                        <Link className="custom-link" underline="none" onClick={() => { document.querySelector("#about")?.scrollIntoView({ behavior: 'smooth'}) }}>
                            About
                        </Link>
                    </Typography>
                    <Typography color="secondary" sx={{ fontFamily: 'Monospace' }}>
                        02.
                        <Link className="custom-link" underline="none" onClick={() => { document.querySelector("#experience")?.scrollIntoView({ behavior: 'smooth'}) }}>
                            Experience
                        </Link>
                    </Typography>
                    <Typography color="secondary" sx={{ fontFamily: 'Monospace' }}>
                        03.
                        <Link className="custom-link" underline="none" onClick={() => { document.querySelector("#contact")?.scrollIntoView({ behavior: 'smooth'}) }}>
                            Contact
                        </Link>
                    </Typography>
                    <ResumeButton />
                </Stack>
            </Toolbar>
        );
    };

    const displayMobile = () => {
        const handleDrawerOpen = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: true }));
        const handleDrawerClose = () =>
            setState((prevState) => ({ ...prevState, drawerOpen: false }));

        return (
            <Toolbar>
                <Box sx={{ flexGrow: 1 }}>
                    <IconButton
                        size="large"
                        edge="start"
                        color="secondary"
                        aria-label="home"
                        sx={{ mr: 2 }}
                    >
                        <HomeOutlinedIcon />
                    </IconButton>
                </Box>
                <IconButton
                    {...{
                        edge: "start",
                        color: "secondary",
                        "aria-label": "menu",
                        "aria-haspopup": "true",
                        onClick: handleDrawerOpen,
                    }}
                >
                    <MenuIcon />
                </IconButton>

                <Drawer
                    {...{
                        anchor: "right",
                        open: drawerOpen,
                        onClose: handleDrawerClose,
                    }}
                >
                    <Box display="flex" style={{ backgroundColor: "rgba(0,0,0,0.7)" }} justifyContent="flex-end">
                        <IconButton onClick={handleDrawerClose}
                            size="large"
                            color="secondary"
                            aria-label="close"
                        >
                            <CloseIcon />
                        </IconButton>
                    </Box>
                    <Box display="flex" style={{ backgroundColor: "rgba(0,0,0,0.7)", width: "70vw", height: "100vh", padding: "20px 30px" }}>{getDrawerChoices()}</Box>
                </Drawer>
            </Toolbar>
        );
    };

    const getDrawerChoices = () => {
        return (
            <Stack direction="column" spacing={1} justifyContent="space-evenly" alignItems="left">
                <Typography variant="h6" color="secondary" sx={{ fontFamily: 'Monospace' }}>
                    01.
                    <Link className="custom-link" underline="none">
                        About
                    </Link>
                </Typography>
                <Typography variant="h6" color="secondary" sx={{ fontFamily: 'Monospace' }}>
                    02.
                    <Link className="custom-link" underline="none">
                        Experience
                    </Link>
                </Typography>
                <Typography variant="h6" color="secondary" sx={{ fontFamily: 'Monospace' }}>
                    03.
                    <Link className="custom-link" underline="none">
                        Contact
                    </Link>
                </Typography>
                <ResumeButton />
            </Stack>
        );
    };

    return (
        <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll>
                <AppBar style={{ background: 'rgba(0,0,0,0.3)', boxShadow: 'none' }} position="fixed">
                    {mobileView ? displayMobile() : displayDesktop()}
                </AppBar>
            </HideOnScroll>
        </Box>
    );
}