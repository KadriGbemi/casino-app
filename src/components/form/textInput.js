import React from 'react';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import TextField from '@material-ui/core/TextField';
import Fab from '@material-ui/core/Fab';
import Typography from '@material-ui/core/Typography';
import { deepOrange } from '@material-ui/core/colors';

const useStyles = makeStyles(theme => ({
  card: {
    minWidth: 270,
    padding: 30,
    [theme.breakpoints.down('sm')]: {
      minWidth: 230,
    },
    display: 'flex',
    flexDirection: 'column',
    textAlign: 'center'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1)
  },
  typographyText: {
    marginTop: theme.spacing(3)
  },
  margin: {
    margin: theme.spacing(1),
    marginBottom: theme.spacing(2)
  }
}));

const AddButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
    '&:hover': {
      backgroundColor: deepOrange[700]
    }
  }
}))(Fab);

export default function TextInputFormComponent(props) {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <TextField
        id="outlined-helperText"
        label="CRYPTOCURRENCY CODE"
        className={classes.textField}
        margin="normal"
        variant="outlined"
        onChange={props.handleTextFieldChange}
      />
      <AddButton
        variant="extended"
        color="primary"
        className={classes.margin}
        onClick={props.handleAddButtonClick}
      >
        Add
      </AddButton>
      <Typography
        variant="caption"
        display="block"
        color="inherit"
        gutterBottom
        style={{ color: '#bdb0b0' }}
      >
        Use of this service is subject to terms and
        <br />
        {'conditions'}
      </Typography>
    </Card>
  );
}
