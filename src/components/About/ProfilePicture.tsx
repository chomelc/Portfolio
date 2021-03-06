import { Avatar } from "@mui/material";
import PP from '../../assets/img/linkedin-avatar.png';

export default function ProfilePicture() {
    return (
        <div className="profile-picture">
            <Avatar
                variant="rounded"
                alt="Clémence Chomel"
                src={PP}
                sx={{ width: 256, height: 256, mb: 1.5 }}
            />
        </div>
    );
}