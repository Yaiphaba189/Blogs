import { AppBar, Toolbar, Typography, Button, Box, TextField, InputAdornment, IconButton } from "@mui/material";


const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "white",
        color: "#18181B",
        boxShadow: "none",
        px: 2.5,
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", height: "70px" }}>
        {/* Logo */}
        <Typography variant="h6" sx={{ fontFamily: "Italianno, cursive", fontSize: "40px", fontWeight: "800" }}>
          Blogs
        </Typography>

        {/* Navigation Menu (Centered) */}
        <Box sx={{ display: "flex", gap: 6, alignItems: "center" }}>
          <Typography variant="body2" sx={{ fontFamily: "Inter, sans-serif", fontSize: "16px",color:"#7D80DA", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center" }}>
            Home
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer" }}>
          Latest Blog 
          </Typography>
          <Typography variant="body2" sx={{ fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: "500", cursor: "pointer", display: "flex", alignItems: "center" }}>
          About us
          </Typography>
  
        </Box>

        {/* Sign Up & Login Buttons (Right-Aligned) */}
        <Box sx={{ display: "flex", alignItems: "right", gap: 1.5 }}>
          <Button color="inherit" sx={{ textTransform: "none", fontFamily: "Inter, sans-serif", fontSize: "16px", fontWeight: "400" }}>
            Sign up
          </Button>
          <Button
            variant="contained"
            sx={{
              textTransform: "none",
              fontFamily: "Inter, sans-serif",
              fontSize: "16px",
              fontWeight: "400",
              backgroundColor: "#18181B",
              borderRadius: "20px",
              padding: "5px 20px",
              "&:hover": { backgroundColor: "#0F0F11" },
            }}
          >
            Log in
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
