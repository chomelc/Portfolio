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
      <Typography
        variant="h3"
        color="var(--white)"
        fontWeight={900}
        sx={{ fontFamily: "Archivo Black" }}
      >
        CLEMENCE CHOMEL
      </Typography>
      <Typography
        variant="h4"
        fontWeight={900}
        sx={{ mb: 1.5, fontFamily: "Archivo Black" }}
      >
        I'M A FULL-STACK SOFTWARE ENGINEER.
      </Typography>
      <Typography variant="h6" sx={{ mb: 1.5 }}>
        I'm a software engineer looking to solve real-world problems. I'm
        passionate about making <mark>open-source</mark> more accessible and
        creating software and tools to help people.
      </Typography>
      <ButtonsBox />
    </Collapse>
  );
}
