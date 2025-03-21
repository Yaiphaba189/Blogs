import { Container, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Container maxWidth="md" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '80vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
        <Typography variant="h4" align="center" sx={{ color: 'gray.800', fontWeight: 'semibold' }}>
          Welcome to the Blogging Platform
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;