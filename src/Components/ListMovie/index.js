import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Movie from '../Movie';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
    width: "50%",
    margin:"10px auto",
  },
  Movie:{
    display:"none"
  }
});

function PaperSheet(props) {

  return (
      <Movie className="movieItem" id="" title="Venom" tomatoScore="55" popcornScore="99" timeRelease="Oct 21"/>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PaperSheet);