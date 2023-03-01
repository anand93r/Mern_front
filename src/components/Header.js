import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useForm from './Read';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Header = () => {
  var [movies,setmovies] =useForm({movie:"",actor:"",actress:"", year:2000, language:"", camera:"", producer:"", director:""})
  


  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    axios.post("http://localhost:3002/add",movies)
        .then((response)=>{
            console.log(response.data)
            // setResult(result=response.data)
        })

    setOpen(false);
  };
  
  
  return (
    <div>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color='warning'>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Book My Movie
          </Typography>
          <Button color="inherit">
            <Link to='/' style={{ textDecoration: 'none',color:'white' }}>
            Home
            </Link>
            </Button>
          <Button color="inherit"  onClick={handleClickOpen}>Add a Movie</Button>
          
          <Button color="inherit" >
            <Link to='/aboutus' style={{ textDecoration: 'none',color:'white' }}>
              About Us 
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
    <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Movie</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill the form to add a movie. We
            will send update the data shortly.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="movie"
            name="movie"
            label="Movie Name"
            value={movies.movie}
            type="text"
            onChange={setmovies}
            fullWidth
            variant="standard"
          />
          
           <TextField
            autoFocus
            margin="dense"
            id="actor"
            name="actor"
            label="Actor"
            value={movies.actor}
            type="text"
            onChange={setmovies}
            variant="standard"
            sx={{
              width: 275
          }}
          />
          
           <TextField
            autoFocus
            margin="dense"
            id="actress"
            name="actress"
            label="Actress"
            value={movies.actress}
            type="text"
            onChange={setmovies}
            variant="standard"
            sx={{
              width: 275
          }}
          />
          <br></br>
          
           <TextField
            autoFocus
            margin="dense"
            id="year"
            name="year"
            value={movies.year}
            label="Release year"
            type="number"
            onChange={setmovies}
            variant="standard"
            sx={{
              width: 150
          }}
        
          />
          <TextField
            autoFocus
            margin="dense"
            id="language"
            name='language'
            label="Language"
            type="text"
            value={movies.language}
            variant="standard"
            onChange={setmovies}
            sx={{
              width: 200
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="camera"
            name='camera'
            label="Camera"
            value={movies.camera}
            type="text"
            onChange={setmovies}
            variant="standard"
            sx={{
              width: 200
          }}
          />
     
           <TextField
            autoFocus
            margin="dense"
            id="producer"
            name='producer'
            label="Producer"
            type="text"
            value={movies.producer}
            onChange={setmovies}
            variant="standard"
            sx={{
              width: 275
          }}
          />
           <TextField
            autoFocus
            margin="dense"
            id="director"
            name='director'
            label="Director"
            type="text"
            value={movies.director}
            variant="standard"
            onChange={setmovies}
            sx={{
              width: 275
          }}
          />
      
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Cancel</Button> */}
          <Button onClick={handleClose}>Add Movie</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Header
