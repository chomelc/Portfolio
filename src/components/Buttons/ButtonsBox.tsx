import { Box, IconButton, Stack } from "@mui/material";
import { useEffect, useState } from "react";
import GitHubButton from "./GitHubButton";
import HackerRankButton from "./HackerRankButton";
import LinkedInButton from "./LinkedInButton";
import MailButton from "./MailButton";
import PhoneButton from "./PhoneButton";
import TwitterButton from "./TwitterButton";

export default function ButtonsBox() {
  const [state, setState] = useState({
    mobileView: false,
  });

  const { mobileView } = state;

  useEffect(() => {
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
    <Stack direction="row" spacing={1}>
      <MailButton />
      <TwitterButton />
      <LinkedInButton />
      <GitHubButton />
      <HackerRankButton />
      <PhoneButton />
    </Stack>
  );
}
