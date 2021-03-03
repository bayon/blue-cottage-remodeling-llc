import { Container, Grid } from "@material-ui/core";
import Icon from "@material-ui/core/Icon";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import React from "react";

const bayon =
  "https://media-exp1.licdn.com/dms/image/C4D03AQHXzD5ZUmbpSw/profile-displayphoto-shrink_200_200/0/1516574446401?e=1619049600&v=beta&t=4hI89lgoF7rS7uomD0_kLlEtVIIRHJn6Dobs06yP5UE";

const katie =
  "https://images.squarespace-cdn.com/content/v1/54c4dc08e4b0b73c478f4cfd/1614135043962-NYZMBOIZG2CVKC3LRA1O/ke17ZwdGBToddI8pDm48kK60W-ob1oA2Fm-j4E_9NQB7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0kD6Ec8Uq9YczfrzwR7e2Mh5VMMOxnTbph8FXiclivDQnof69TlCeE0rAhj6HUpXkw/unnamed.jpg?format=500w";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Blue Cottage Remodelin LLC.
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  footer: {
    backgroundColor: theme.palette.background.paper,
    // marginTop: theme.spacing(8),
    padding: theme.spacing(6, 0),
  },
}));

export default function Footer(props) {
  const classes = useStyles();
  const { description, title } = props;

  return (
    <footer className={classes.footer}>
      <Container maxWidth="lg">
        <Grid container>
          <Grid item xs={12} sm={3}>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <img
                src={bayon}
                alt="..."
                style={{ borderRadius: "25px", height: "100px" }}
              />
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
                component="p"
              >
                Bayon Forte
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <div style={{ marginTop: 15 }}>
                <a
                  href="tel:8122670592"
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  (812) 267-0592<Icon>phone</Icon>
                </a>
              </div>
              <div style={{ marginTop: 15 }}>
                <a
                  href="mailto:bayon@forteworks.com"
                  style={{ color: "#222", textDecoration: "none" }}
                >
                  bayon@forteworks.com<Icon>email</Icon>
                </a>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={3}>
            <div style={{ marginTop: "20px" }}>
              <Typography variant="h6" align="center" gutterBottom>
                Blue Cottage Remodeling
              </Typography>
              <Typography
                variant="subtitle1"
                align="center"
                color="textSecondary"
                component="p"
              >
                Call for a free estimate.
              </Typography>
              <Copyright />
            </div>
          </Grid>

          <Grid item xs={12} sm={3}>
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <img
                src={katie}
                alt="..."
                style={{ borderRadius: "25px", height: "100px" }}
              />
              <Typography
                variant="body1"
                align="center"
                color="textSecondary"
                component="p"
              >
                Katie Forte
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,
};
