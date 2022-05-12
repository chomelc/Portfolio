import { Collapse, Grid } from "@mui/material";
import { useState, useEffect } from "react";
import CardTitle from "../CardTitle";
import ProjectCard from "./ProjectCard"

const items = [
    {
        title: 'Portfolio',
        description: 'Personal portfolio built with React Typescript.',
        link: 'https://github.com/chomelc/Portfolio',
        technologies: ['React','Typescript', 'Material UI'],
    },
    {
        title: 'What ya eatin\'?',
        description: 'A simple webapp to organize and keep track of your weekly meals.',
        link: 'https://github.com/chomelc/WYE',
        technologies: ['Python', 'Flask', 'React','Typescript'],
    },
];

export default function WorkCards() {
    const [state, setState] = useState({
        mobileView: false
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
            <CardTitle number="03." title="Some of my personal projects" />
            <Grid container direction={mobileView ? "column" : "row"} spacing={2} alignItems="center" justifyContent="flex-start">
                {items.map((item) => (
                    <Grid item>
                        <ProjectCard
                            title={item.title}
                            description={item.description}
                            link={item.link}
                            technologies={item.technologies} />
                    </Grid>
                ))}
            </Grid>
        </Collapse>
    );
}