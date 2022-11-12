import TwitterIcon from "@mui/icons-material/Twitter";
import { IconButton, Tooltip } from "@mui/material";

export default function LinkedInButton() {
  return (
    <Tooltip title="Twitter">
      <IconButton
        className="custom-link"
        size="large"
        sx={{ border: "1px solid", color: "var(--white)" }}
        href="https://twitter.com/clemencechml"
        target="_blank"
      >
        <TwitterIcon />
      </IconButton>
    </Tooltip>
  );
}
