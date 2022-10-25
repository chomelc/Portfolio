import { Tabs, Tab } from "@mui/material";

interface ExperienceHorizontalTabsProps {
  value: number;
  handleChange: (event: React.SyntheticEvent, newValue: number) => void;
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ExperienceHorizontalTabs(
  props: ExperienceHorizontalTabsProps
) {
  return (
    <Tabs
      value={props.value}
      onChange={props.handleChange}
      aria-label="basic tabs example"
      sx={{
        minWidth: 200,
        ".MuiTabs-indicator": {
          bottom: 0,
        },
        ".Mui-selected": {
          backgroundColor: "rgba(253, 184, 51,0.2)",
        },
      }}
      textColor="secondary"
      indicatorColor="secondary"
    >
      <Tab
        sx={{
          fontFamily: "Monospace",
          color: "#D0D6C2",
          alignItems: "flex-end",
        }}
        label="Dataiku"
        {...a11yProps(0)}
      />
      <Tab
        sx={{
          fontFamily: "Monospace",
          color: "#D0D6C2",
          alignItems: "flex-end",
        }}
        label="SAP - Apprentice"
        {...a11yProps(0)}
      />
      <Tab
        sx={{
          fontFamily: "Monospace",
          color: "#D0D6C2",
          alignItems: "flex-end",
        }}
        label="SAP - Intern"
        {...a11yProps(1)}
      />
    </Tabs>
  );
}
