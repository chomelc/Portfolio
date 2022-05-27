import { Collapse, Divider, Grid, Stack, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import CardTitle from "../CardTitle";
import CourseCard from "./CourseCard";
import ProjectCard from "./ProjectCard";

export enum ProjectStatus {
  IN_PROGRESS = "Work In Progress",
  COMPLETED = "",
}

export enum CourseStatus {
  IN_PROGRESS = "In Progress",
  COMPLETED = "Completed",
}

const projects = [
  {
    title: "Portfolio",
    description: "Personal portfolio built with React Typescript.",
    status: ProjectStatus.COMPLETED,
    gh_link: "https://github.com/chomelc/Portfolio",
    link: "https://chomelc.github.io/Portfolio/",
    technologies: ["React", "Typescript", "Material UI"],
  },
  {
    title: "What ya eatin'? - WYE",
    description:
      "A simple webapp to organize and keep track of your weekly meals.",
    status: ProjectStatus.IN_PROGRESS,
    gh_link: "https://github.com/chomelc/WYE",
    link: "",
    technologies: ["Python", "Flask", "React", "Typescript"],
  },
  {
    title: "Statify",
    description:
      "A simple Angular application to visualize your Spotify statistics. ",
    status: ProjectStatus.IN_PROGRESS,
    gh_link: "https://github.com/chomelc/Statify",
    link: "https://appstatify.herokuapp.com/",
    technologies: ["Angular", "Typescript", "Node.js"],
  },
];

const courses = [
  {
    title: "Become an Angular Developer",
    status: CourseStatus.COMPLETED,
    description: `
        Take your existing programming skills forward by learning how 
        to build robust web apps using the Angular framework. Learn how 
        to leverage the new component-based architecture to create efficient, 
        cross-platform apps. See how to use structures, templates, 
        change detection, data binding, and more.`,
    link: "https://www.linkedin.com/learning/paths/become-an-angular-developer-2",
    certificate: "https://tinyurl.com/8zjswm5e",
    subcourses: [
      {
        title: "Learning Angular",
        status: CourseStatus.COMPLETED,
        certificate:
          "https://www.linkedin.com/learning/certificates/6d8f8af6e98b84d11511f0e3ea66cfa8053f63a8427fb5418535899dd2286c9b",
      },
      {
        title: "Angular: Ecosystems",
        status: CourseStatus.COMPLETED,
        certificate:
          "https://www.linkedin.com/learning/certificates/a00ef72752d359712b18504256971370c66a397b544c9c285093b4a92d8310f5",
      },
      {
        title: "Angular Essential Training",
        status: CourseStatus.COMPLETED,
        certificate:
          "https://www.linkedin.com/learning/certificates/c39964f7cf93487e452c1bf3f2ea99612f98dad382974d687014cd31e5134c8b",
      },
      {
        title: "Learning the Angular CLI",
        status: CourseStatus.COMPLETED,
        certificate:
          "https://www.linkedin.com/learning/certificates/0b2d7febc7329d7c465bb53b3b64b02a525647cf1a03a09e90cb7d5251c32caa",
      },
      {
        title: "Angular: Testing and Debugging",
        status: CourseStatus.COMPLETED,
        certificate:
          "https://www.linkedin.com/learning/certificates/6c46db6b6af95811beb80342c8132a7cb5c4eb1e9cca975ebeb79f54262308de",
      },
      {
        title: "Angular: API Communication and Authentication",
        status: CourseStatus.COMPLETED,
        certificate:
          "https://www.linkedin.com/learning/certificates/d95209e1c54cf9d0bb762387af2b5f48ec41497af6621e75d19b1ca08d515f06?trk=share_certificate",
      },
    ],
  },
  {
    title: "Learning Scala",
    status: CourseStatus.COMPLETED,
    description: `
        This course with Amina Adewusi is aimed at programming beginners who have 
        only basic programming experience. Amina provides a broad and 
        friendly introduction to some of Scala’s features that will 
        set a foundation for more advanced lessons. She details 
        everything you need to write Scala code and run it locally; 
        examines values and types, functions, and control flows; 
        looks at domain modeling; and explores Scala’s collection 
        types. If you’re just starting on your programming journey,
         join Amina to see if Scala is right for you.`,
    link: "https://www.linkedin.com/learning/learning-scala-14639381",
    certificate:
      "https://www.linkedin.com/learning/certificates/680a09cd82ed55411241c1889c7cd0851e6bd6adaee99621dcd52c303529a341?trk=share_certificate",
    subcourse: {},
  },
];

export default function WorkCards() {
  const [state, setState] = useState({
    mobileView: false,
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
      <Grid
        container
        direction={mobileView ? "column" : "row"}
        spacing={2}
        alignItems="center"
        justifyContent="center"
      >
        {projects.map((project) => (
          <Grid item>
            <ProjectCard
              title={project.title}
              description={project.description}
              status={project.status}
              gh_link={project.gh_link}
              link={project.link ? project.link : undefined}
              technologies={project.technologies}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <Stack
            mt={2.5}
            direction="row"
            spacing={2}
            alignItems="center"
            justifyContent="center"
          >
            <Divider
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "#FDB833",
              }}
            />
            <Typography
              variant="h5"
              color="primary"
              sx={{ fontFamily: "Monospace" }}
            >
              Courses
            </Typography>
            <Divider
              style={{
                height: "1px",
                width: "40%",
                backgroundColor: "#FDB833",
              }}
            />
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
              subcourses={course.subcourses ? course.subcourses : undefined}
            />
          </Grid>
        ))}
      </Grid>
    </Collapse>
  );
}
