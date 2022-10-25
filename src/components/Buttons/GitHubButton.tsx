import GitHubIcon from "@mui/icons-material/GitHub";
import { IconButton, Tooltip } from "@mui/material";

export default function GitHubButton() {
  return (
    <Tooltip title="GitHub">
      <IconButton
        className="custom-link"
        size="large"
        sx={{ border: "1px solid", color: "var(--white)" }}
        href="https://github.com/chomelc"
        target="_blank"
      >
        <GitHubIcon />
      </IconButton>
    </Tooltip>
  );
}
