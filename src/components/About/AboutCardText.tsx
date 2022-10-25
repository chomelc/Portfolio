import { Typography } from "@mui/material";

export default function AboutCardText() {
  return (
    <>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        As a former intern, then apprentice and now a{" "}
        <span style={{ color: "#FDB833" }}>full-stack software engineer</span>,
        it is safe to say that I have been coding for quite some time.
      </Typography>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        My experience within a{" "}
        <a href="https://www.sap.com/france/index.html" target="_blank">
          huge corporation
        </a>{" "}
        and a{" "}
        <a href="https://www.dataiku.com/" target="_blank">
          start-up
        </a>{" "}
        has familiarized me with many of the challenges facing the software
        industry today and it has offered me the opportunity to gain
        responsibility by working on a number of projects crucial to those
        companies, both on the <span style={{ color: "#FDB833" }}>front</span>{" "}
        and the <span style={{ color: "#FDB833" }}>back end</span>.
      </Typography>
    </>
  );
}
