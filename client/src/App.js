import { Route, Routes } from "react-router-dom"
import { Grid, CssBaseline, Box, Paper } from "@mui/material"
import LoginForm from "./components/LoginForm"
import SignUpForm from "./components/SignUpForm";

export default function App() {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <CssBaseline />
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
          backgroundRepeat: 'no-repeat',
          backgroundColor: (t) =>
            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Routes>
            <Route path="/" exact element={<LoginForm />} />
            <Route path="/login" exact element={<LoginForm />} />
            <Route path="/signup" element={<SignUpForm />} />
          </Routes>
        </Box>
      </Grid>
    </Grid>
  );
}
