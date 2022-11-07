import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return ( //Figure out why boxShadow isnt working
        <header style={{"background": "#525E75", width: "100%", height: "150px", flexGrow: 1, borderBottom: "2px solid black", marginBottom: "10px"}}> 
            <Box style={{boxShadow: "10px 10px 5px 0px rgba(0,0,0,1);",}}>
                <Toolbar>
                    <Typography variant="h1" component="div" sx={{ color: "#92BA92", flexGrow: 1, lineHeight: "150px", fontSize: "100px", fontWeight: "400", textShadow: "0px 0px 15px #000000" }}> 
                        VideoStar
                    </Typography>
                    <Button variant="text" style={{fontSize: "20px", color: "#92BA92", background: "none", boxShadow: "none", textShadow: "0px 0px 15px #000000"}}>Cart (0)</Button>
                </Toolbar>
            </Box>
        </header>
    )
}

export default Navbar