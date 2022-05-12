import { Box, Collapse, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import CardTitle from "../CardTitle";
import ApprenticeshipExperience from "./ApprenticeshipExperience";
import ExperienceHorizontalTabs from "./ExperienceHorizontalTabs";
import ExperienceVerticalTabs from "./ExperienceVerticalTabs";
import InternshipExperience from "./InternshipExperience";

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 1 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

export default function ExperienceCardContent() {
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

    const displayMobile = () => {
        return (
            <>
                {/* TODO */}
                Mobile Presentation of Work Experience
                {/* <ExperienceHorizontalTabs value={value} handleChange={handleChange}/>
                <TabPanel value={value} index={0}>
                    <ApprenticeshipExperience />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InternshipExperience/>
                </TabPanel> */}
            </>
        );
    };

    const displayDesktop = () => {
        return (
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <ExperienceVerticalTabs value={value} handleChange={handleChange} />
                <TabPanel value={value} index={0}>
                    <ApprenticeshipExperience />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InternshipExperience />
                </TabPanel>
            </Box>
        );
    };

    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
            <CardTitle number="02." title="Where I've Worked" />
            {mobileView ? displayMobile() : displayDesktop()}
        </Collapse>
    );
}