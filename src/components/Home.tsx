import { Box, Grid } from '@mui/material';
import Background from '../assets/img/background.png';
import PresentationCard from './PresentationCard';

export default function Home() {
    return (
        <Box
            display="flex"
            sx={{ flexGrow: 1 }}
            style={{
                backgroundImage: `url(${Background})`,
                backgroundSize: "cover",
                height: "100vh"
            }}>
            <Grid m={1} container spacing={2} direction="row" justifyContent="center" alignItems="center">
                <Grid item xs={12}>
                    <PresentationCard />
                </Grid>
            </Grid>
        </Box>

    );
}