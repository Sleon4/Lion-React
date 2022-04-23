import React, { useState } from "react";
import { Grid, FormControl, InputLabel, InputAdornment, FilledInput, Container, Button, Select, MenuItem } from '@mui/material';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';
import PasswordIcon from '@mui/icons-material/Password';
import DriveFileRenameOutlineIcon from '@mui/icons-material/DriveFileRenameOutline';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import DocumentTypes from "../../components/DocumentTypes";
import RegisterNew from "./functions/RegisterNew";

export default function Register() {
	const [users_email, setUsers_email] = useState(null);
	const [users_password, setUsers_password] = useState(null);
	const [confirm_user_password, setConfirm_user_password] = useState(null);
	const [users_name, setUsers_Name] = useState(null);
	const [users_last_name, setUsers_last_name] = useState(null);
	const [users_document, setUsers_document] = useState(null); 
   	const [iddocument_types, setIddocument_types] = useState(0);
	const [users_phone, setUsers_phone] = useState(null);

    const handleSubmit = (event) => {
		event.preventDefault();
		console.clear();
		
		RegisterNew({
			users_email: users_email,
			users_password: users_password,
			confirm_user_password: confirm_user_password,
			users_name: users_name,
			users_last_name: users_last_name,
			users_document: users_document,
			iddocument_types: iddocument_types.toString(),
			users_phone: users_phone
		}).then(response => {
			console.log(response.data);
		});
	}

	function handleChange(e) {
		setIddocument_types(e.target.value);
	}

    return (
		<Container>
	 		<form onSubmit={handleSubmit}>
			 	<Grid container my={3} alignItems="center" justifyContent="center" spacing={0}>
					<Grid item xs={12} sm={8} md={8} lg={8} xl={8}>
						<Grid container alignItems="center" justifyContent="center" spacing={2}>
						<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Tipo de Documento</InputLabel>
									<Select label="Tipo de Documento" onChange={handleChange} defaultValue={0} startAdornment={
										<InputAdornment position="start"><AssignmentIndIcon fontSize="small" /></InputAdornment>
									}>
										<MenuItem key={0} value={0}>Seleccione</MenuItem>
										{DocumentTypes().map((document) => (
											<MenuItem key={document.iddocument_types} value={document.iddocument_types}>
												{document.document_types_name}
											</MenuItem>
										))}
									</Select>
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Documento</InputLabel>
									<FilledInput type="number" onInput={e => setUsers_document(e.target.value)} startAdornment={
										<InputAdornment position="start"><AssignmentIndIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Nombres</InputLabel>
									<FilledInput type="text" onInput={e => setUsers_Name(e.target.value)} startAdornment={
										<InputAdornment position="start"><DriveFileRenameOutlineIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Apellidos</InputLabel>
									<FilledInput type="text" onInput={e => setUsers_last_name(e.target.value)} startAdornment={
										<InputAdornment position="start"><DriveFileRenameOutlineIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Celular</InputLabel>
									<FilledInput type="number" onInput={e => setUsers_phone(e.target.value)} startAdornment={
										<InputAdornment position="start"><PhoneEnabledIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Email</InputLabel>
									<FilledInput type="email" onInput={e => setUsers_email(e.target.value)} startAdornment={
										<InputAdornment position="start"><AlternateEmailIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Contraseña</InputLabel>
									<FilledInput type="password" onInput={e => setUsers_password(e.target.value)} startAdornment={
										<InputAdornment position="start"><PasswordIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
								<FormControl fullWidth variant="filled">
									<InputLabel>Confirmar contraseña</InputLabel>
									<FilledInput type="password" onInput={e => setConfirm_user_password(e.target.value)} startAdornment={
										<InputAdornment position="start"><PasswordIcon fontSize="small" /></InputAdornment>
									} />
								</FormControl>
							</Grid>

							<Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
								<Button type="submit" variant="contained" color="success">Ingresar</Button>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
         	</form>
      	</Container>
    );
}