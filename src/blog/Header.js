import { Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";
import logo from "./assets/img/blue-cottage-840-464-widened-to-1024.png";

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarSecondary: {
    justifyContent: "space-between",
    overflowX: "auto",
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  // const { sections, title } = props;

  return (
    
       
       
                
        <Toolbar className={classes.toolbar}>
          <Grid container>
            <Grid item xs={12} sm={2}>
              {/* <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${logo})` , backgroundSize:'cover', height:'100px'}}> */}
              <img src={`${logo}`} style={{ height: "100px" }} />
              {/* </Paper> */}
            </Grid>
            <Grid item xs={12} sm={4}>
              <Typography
                component="h5"
                variant="h5"
                color="inherit"
                align="center"
                noWrap
                className={classes.toolbarTitle}
              >
                Blue Cottage Remodeling LLC.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={3}>
              <div style={{ marginRight: 15 }}>
                <a
                  href="tel:8122670592"
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  (812) 267-0592<Icon>phone</Icon>
                </a>
              </div>
              {/* <IconButton>
          <SearchIcon />
        </IconButton> */}
            </Grid>
            <Grid item xs={12} sm={3}>
              {/* <Button
                variant="outlined"
                size="small"
                onClick={() => {
                  alert(
                    "Coming soon. Just need to install redux and build the ui."
                  );
                }}
              >
                Login
              </Button> */}
            
            </Grid>

            <Grid >
             
              
            </Grid>
          </Grid>
        </Toolbar>
       
      
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};

{
  /* <Router>
  <div>
    <nav>
      <ul>
        <li>
          <Link to="/path1">path 1</Link>
        </li>
        <li>
          <Link to="/path2">path 2</Link>
        </li>
        <li>
          <Link to="/animatedCard">Animation 1</Link>
        </li>
      </ul>
    </nav>
  </div>
  <Route path="/path1" component={PathOne} />
  <Route path="/path2" component={PathTwo} />
  <Route path="/animatedCard" component={AnimatedCard} />
</Router>; */
}
