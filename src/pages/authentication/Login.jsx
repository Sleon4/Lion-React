import React, { useState } from "react";
import { Grid, FormControl, InputLabel, InputAdornment, FilledInput, Container, Button } from '@mui/material';
import { useNavigate } from "react-router-dom";
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PasswordIcon from '@mui/icons-material/Password';
import LoginAuth from "./functions/LoginAuth";

export default function Login() {
	const [request, setRequest] = useState(null);
    const [users_email, setUsers_email] = useState(null);
	const [users_password, setUsers_password] = useState(null);
	const navigate = useNavigate();

    const handleSubmit = (event) => {
		event.preventDefault();
		console.clear();
		
		LoginAuth({
			users_email: users_email, 
			users_password: users_password
		}).then(response => {
			if(response.data.status === 'success') {
				console.log(response.data);
				// window.sessionStorage.setItem('jwt', response.data.data.jwt);
			} else {
				console.log(response.data);
			}
		});
	}

    return (
		<Container>
			<form onSubmit={handleSubmit}>
				<Grid container my={3} alignItems="center" justifyContent="center">
					<Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
						<Grid container alignItems="center" justifyContent="center" spacing={2}>
							<Grid item xs={12}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Correo</InputLabel>
									<FilledInput type="email" required onInput={e => setUsers_email(e.target.value)} startAdornment={
										<InputAdornment position="start"><AlternateEmailIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Contraseña</InputLabel>
									<FilledInput type="password" required onInput={e => setUsers_password(e.target.value)} startAdornment={
										<InputAdornment position="start"><PasswordIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12}>
								<Button type="submit" variant="contained" color="success">Ingresar</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</form>		
		</Container>
	);
}