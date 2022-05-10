import {ReactComponent as HackerRankIcon} from "../../assets/img/hackerrank.svg"
import { IconButton, SvgIcon, Tooltip } from '@mui/material';

export default function HackerRankButton() {
    return (
        <Tooltip title="HackerRank">
            <IconButton
                className="custom-link"
                size="large"
                color="primary"
                sx={{ border: "1px solid" }}
                href="https://www.hackerrank.com/clemence_chomel"
                target="_blank">
                <SvgIcon className="hackerrank-icon">
                    <HackerRankIcon />
                </SvgIcon>
            </IconButton>
        </Tooltip>
    );
}