import { Tabs, Tab } from "@mui/material";

interface ExperienceVerticalTabsProps {
    value: number,
    handleChange: (event: React.SyntheticEvent, newValue: number) => void
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function ExperienceVerticalTabs(props: ExperienceVerticalTabsProps) {
    return (
        <Tabs
            orientation="vertical"
            variant="scrollable"
            value={props.value}
            onChange={props.handleChange}
            aria-label="Vertical tabs example"
            sx={{
                minWidth: 200,
                height: 700,
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
    );
}