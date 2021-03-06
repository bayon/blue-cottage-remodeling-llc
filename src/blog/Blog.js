import {
  Card,
  CardActions,
  CardContent,

  Paper, Typography
} from "@material-ui/core";
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import logo from "./assets/img/pexels-pixabay-159201.jpg";
//import FeaturedPost from "./FeaturedPost";
import Footer from "./Footer";
import MainFeaturedPost from "./MainFeaturedPost";




const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
}));

// const sections = [
//   { title: "Frontend", url: "#" },
//   { title: "Databases", url: "#" },
//   { title: "Backend", url: "#" },
// ];

const mainFeaturedPost = {
  title: "Title of a longer featured blog post",
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: { logo },
  linkText: "Continue reading…",
};

 

export default function Blog() {
  const classes = useStyles();
//sections={sections}
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header   /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            

            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Card className={classes.root}>
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      Carpentry
                    </Typography>
                  
                    <Typography variant="body2" component="p" color="textSecondary">
                      Frameing, Finishing, Decks , Roof Repair
                      
                     
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {/* <Button size="small" onClick={()=> {
                      alert('call or text me: 812-267-0592')
                    }}>+</Button> */}
                  </CardActions>
                </Card>
              </Paper>
            </Grid>

            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Card className={classes.root}>
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                      Kitchen and Bath
                    </Typography>
                  
                    <Typography variant="body2" component="p"  color="textSecondary">
                      Tile, Cabinets, Showers, Vanities, Plumbing 
                     
                    </Typography>
                  </CardContent>
                  <CardActions>
                  {/* <Button size="small" onClick={()=> {
                      alert('call or text me: 812-267-0592')
                    }}>+</Button> */}
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Paper className={classes.paper}>
                <Card className={classes.root}>
                  <CardContent>
                    
                    <Typography variant="h5" component="h2">
                    Handyman Services
                    </Typography>
                   
                    <Typography variant="body2" component="p" color="textSecondary">
                    Electrical, Plumbing, Doors and Windows
                      
                    </Typography>
                  </CardContent>
                  <CardActions>
                  {/* <Button size="small" onClick={()=> {
                      alert('call or text me: 812-267-0592')
                    }}>+</Button> */}
                  </CardActions>
                </Card>
              </Paper>
            </Grid>
          </Grid>
          {/* <Grid container spacing={5} className={classes.mainGrid}>
            <Main title="From the firehose" posts={posts} />
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
            />
          </Grid> */}
         
        </main>
      </Container>
      <Footer title="Footer" description="Now you know too much!" />
    </React.Fragment>
  );
}
