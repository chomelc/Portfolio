import { Box, Chip, List, ListItem, ListItemIcon, ListItemText, Stack, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import CardTitle from "./CardTitle";
import ApprenticeshipExperience from "./ApprenticeshipExperience";
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

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function ExperienceCardContent() {
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <>
            <CardTitle number="02." title="Work experience" />
            <Box
                mt={1.5}
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{
                        minWidth: 200,
                        '.MuiTabs-indicator': {
                            left: 0,
                        },
                        '.Mui-selected': {
                            backgroundColor: "rgba(253, 184, 51,0.2)"
                        }
                    }}
                    textColor="secondary"
                    indicatorColor="secondary"
                >
                    <Tab
                        sx={{
                            fontFamily: 'Monospace',
                            color: "#D0D6C2",
                            alignItems: "flex-end"
                        }}
                        label="SAP - Apprentice"
                        {...a11yProps(0)}
                    />
                    <Tab
                        sx={{
                            fontFamily: 'Monospace',
                            color: "#D0D6C2",
                            alignItems: "flex-end"
                        }}
                        label="SAP - Intern"
                        {...a11yProps(1)}
                    />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ApprenticeshipExperience />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <InternshipExperience />
                </TabPanel>
            </Box>
        </>
    );
}