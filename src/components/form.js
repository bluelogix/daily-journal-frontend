import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
    
  },
});


function Form(props) {
//   const handleClick = e => {
//     e.preventDefault();
//     if (props.isEditing) {
//       props.updateEntry();
//     } else {
//       props.addEntry();
//     }

//   };
       
   
  return ( 
 
    <main className={styles.main}>
     {/* <NavBar /> */}
      <CssBaseline />
      <Paper className={styles.paper}  style={{margin: '50px'}} >
     
        <Typography component="h1" variant="h5" >
        {props.isEditing ? 'Update Entry' : 'Add Entry'}
        </Typography>

        <form className={styles.form} onSubmit={props.addEntry} >
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="entry">Start your daily entry...</InputLabel>
            <Input autoComplete='off' id="entry" name="entry" type="text" 
                value={props.entry}
                onChange={props.handleChanges} autoFocus />
          </FormControl>
        
         
          <Button
            // onClick={handleClick}
            type="submit"
            fullWidth
            variant="contained"
            // color="primary"
            className={styles.submit}
          >
            {props.isEditing? 'Update Entry' : 'Add Entry'}
          </Button>
        </form>
      </Paper>
    </main>
  );
}

export default Form;

