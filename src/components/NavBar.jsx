import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const Navbar = () => {
    return ( //Figure out why boxShadow isnt working
        <header style={{ boxShadow: "10px 10px" }}> 
            <Box sx={{ flexGrow: 1, width: "100%"}}>
                <AppBar style={{height: "150px", borderBottom: "1.5px solid black", boxShadow: "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;" }}>
                    <Toolbar>
                        <Typography variant="h1" component="div" sx={{ color: "#92BA92", flexGrow: 1, lineHeight: "150px", fontSize: "100px", fontWeight: "400", textShadow: "0px 0px 15px #000000" }}> 
                            VideoStar
                        </Typography>
                        <Button variant="text"style={{fontSize: "20px", color: "#92BA92", background: "none", boxShadow: "none", textShadow: "0px 0px 15px #000000"}}>Cart (0)</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    )
}

export default Navbar