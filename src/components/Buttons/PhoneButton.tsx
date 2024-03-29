import { IconButton, Tooltip } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

export default function PhoneButton() {
  return (
    <Tooltip title="(+33)695643477">
      <IconButton
        className="custom-link"
        size="large"
        sx={{ border: "1px solid", color: "var(--white)" }}
        onClick={(e) => {
          window.location.href = "tel:(+33)695643477";
          e.preventDefault();
        }}
      >
        <LocalPhoneIcon />
      </IconButton>
    </Tooltip>
  );
}
