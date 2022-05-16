import { Collapse, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CardTitle from "../CardTitle";
import CourseCard from "./CourseCard";
import ProjectCard from "./ProjectCard"

export enum CourseStatus {
    IN_PROGRESS = 'In Progress',
    COMPLETED = 'Completed'
}

const projects = [
    {
        title: 'Portfolio',
        description: 'Personal portfolio built with React Typescript.',
        link: 'https://github.com/chomelc/Portfolio',
        technologies: ['React', 'Typescript', 'Material UI'],
    },
    {
        title: 'What ya eatin\'?',
        description: 'A simple webapp to organize and keep track of your weekly meals.',
        link: 'https://github.com/chomelc/WYE',
        technologies: ['Python', 'Flask', 'React', 'Typescript'],
    },
];

const courses = [
    {
        title: 'Become an Angular Developer',
        status: CourseStatus.IN_PROGRESS,
        description: `
        Take your existing programming skills forward by learning how 
        to build robust web apps using the Angular framework. Learn how 
        to leverage the new component-based architecture to create efficient, 
        cross-platform apps. See how to use structures, templates, 
        change detection, data binding, and more.`,
        link: 'https://www.linkedin.com/learning/paths/become-an-angular-developer-2',
        certificate: 'test',
        subcourses: [
            {
                title: 'Learning Angular',
                status: CourseStatus.COMPLETED,
                certificate: 'https://www.linkedin.com/learning/certificates/6d8f8af6e98b84d11511f0e3ea66cfa8053f63a8427fb5418535899dd2286c9b'
            },
            {
                title: 'Angular: Ecosystems',
                status: CourseStatus.COMPLETED,
                certificate: 'https://www.linkedin.com/learning/certificates/a00ef72752d359712b18504256971370c66a397b544c9c285093b4a92d8310f5'
            },
            {
                title: 'Angular Essential Training',
                status: CourseStatus.COMPLETED,
                certificate: 'https://www.linkedin.com/learning/certificates/c39964f7cf93487e452c1bf3f2ea99612f98dad382974d687014cd31e5134c8b'
            },
            {
                title: 'Learning the Angular CLI',
                status: CourseStatus.COMPLETED,
                certificate: 'https://www.linkedin.com/learning/certificates/0b2d7febc7329d7c465bb53b3b64b02a525647cf1a03a09e90cb7d5251c32caa'
            },
            {
                title: 'Angular: Testing and Debugging',
                status: CourseStatus.IN_PROGRESS,
                certificate: ''
            },
            {
                title: 'Angular: API Communication and Authentication',
                status: CourseStatus.IN_PROGRESS,
                certificate: ''
            },
        ],
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
            <CardTitle number="03." title="Some Things I've Done" />
            <Grid container direction={mobileView ? "column" : "row"} spacing={2} alignItems="center" justifyContent="center">
                {projects.map((project) => (
                    <Grid item>
                        <ProjectCard
                            title={project.title}
                            description={project.description}
                            link={project.link}
                            technologies={project.technologies} />
                    </Grid>
                ))}
                <Grid item xs={12}>
                    <Stack mt={2.5} direction="row" spacing={2} alignItems="center" justifyContent="center">
                        <Divider style={{ height: "1px", width: "40%", backgroundColor: "#FDB833" }} />
                        <Typography variant="h5" color="primary" sx={{ fontFamily: 'Monospace' }}>
                            Courses
                        </Typography>
                        <Divider style={{ height: "1px", width: "40%", backgroundColor: "#FDB833" }} />
                    </Stack>
                </Grid>
                {courses.map((course) => (
                    <Grid item xs={12} md={12}>
                        <CourseCard
                            mobileView={mobileView}
                            title={course.title}
                            status={course.status}
                            description={course.description}
                            link={course.link}
                            certificate={course.certificate ? course.certificate : undefined}
                            subcourses={course.subcourses ? course.subcourses : undefined} />
                    </Grid>
                ))}
            </Grid>
        </Collapse>
    );
}