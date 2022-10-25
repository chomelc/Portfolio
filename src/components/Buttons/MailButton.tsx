import { IconButton, Tooltip } from "@mui/material";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function MailButton() {
  return (
    <Tooltip title="clemence.chomel@gmail.com">
      <IconButton
        className="custom-link"
        size="large"
        sx={{ border: "1px solid", color: "var(--white)" }}
        onClick={(e) => {
          window.location.href = "mailto:clemence.chomel@gmail.com";
          e.preventDefault();
        }}
      >
        <MailOutlineIcon />
      </IconButton>
    </Tooltip>
  );
}
