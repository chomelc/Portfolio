import { Collapse, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import ButtonsBox from "../Buttons/ButtonsBox";

export default function PresentationCardContent() {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(true);
  });

  return (
    <Collapse in={checked} {...(checked ? { timeout: 1000 } : {})}>
      <Typography
        variant="h6"
        color="secondary"
        sx={{ fontFamily: "Monospace" }}
      >
        Hi, my name is
      </Typography>
      <Typography variant="h2" sx={{ fontFamily: "Nunito" }}>
        Clémence Chomel.
      </Typography>
      <Typography
        color="#BDC5AA"
        variant="h4"
        sx={{ mb: 1.5, fontFamily: "Nunito" }}
      >
        I'm a Software Engineer.
      </Typography>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        I'm a software engineer looking to solve real-world problems. I'm
        passionate about making open-source more accessible and creating
        software and tools to help people.
      </Typography>
      <ButtonsBox />
    </Collapse>
  );
}
