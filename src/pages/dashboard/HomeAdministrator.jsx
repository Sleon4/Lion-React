import { Button, Container, Grid } from "@mui/material";
import HomeAdminValidate from "./functions/HomeAdminValidate";

export default function HomeAdministrator() {
    const handleSubmit = (event) => {
        event.preventDefault();

		console.clear();
        HomeAdminValidate().then(response => {
			console.log(response.data);
		});
    };

    return (
        <Container>
            <Grid container my={3}>
                <form onSubmit={handleSubmit}>
                    <Button type="submit" variant="contained">ENVIAR DATOS</Button>
                </form>
            </Grid>
        </Container>
    );
}