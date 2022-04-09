import { Container } from '@mui/material'
import Hero from '../components/Home/Hero'
import Navbar from '../components/Home/Navbar'

export default function Home() {
  return (
    <Container
      maxWidth="xl"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
      }}
    >
      <Navbar />
      <Hero />
    </Container>
  )
}
