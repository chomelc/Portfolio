import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { IconButton, Tooltip } from "@mui/material";

export default function LinkedInButton() {
  return (
    <Tooltip title="LinkedIn">
      <IconButton
        className="custom-link"
        size="large"
        sx={{ border: "1px solid", color: "var(--white)" }}
        href="https://www.linkedin.com/in/clemencechomel/"
        target="_blank"
      >
        <LinkedInIcon />
      </IconButton>
    </Tooltip>
  );
}
