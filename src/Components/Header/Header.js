import AppBar from '@mui/material/AppBar';
import Grid from "@mui/material/Grid";
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {makeStyles} from "@mui/styles";

const useStyles = makeStyles({
	logo: {
		flexGrow: 1
	},
});
    

function Header () {
	const classes = useStyles();

	return (
	<Grid container item>
		<AppBar position={"static"}>
			<Toolbar>
				<Typography className={classes.logo}>
					Volenium
				</Typography>
				<Typography>
						About
				</Typography>
				<Typography>
					Investment Strategies	
				</Typography>
				<Typography>
					Contact Us	
				</Typography>
				
			</Toolbar>
		</AppBar>
	</Grid>
	);
}

export default Header;
