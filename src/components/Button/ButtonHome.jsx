import Button from '@mui/material/Button'
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';


const ButtonHome = () => {
  return (
    
    <Link to="/" >
      <Button variant="contained" startIcon={<HomeIcon />}>
        Home
      </Button>
    </Link>
    
  )
}

export default ButtonHome