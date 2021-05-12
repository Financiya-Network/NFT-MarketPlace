import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { CallToAction, ShutterSpeed } from '@material-ui/icons';
import Pulse from 'react-reveal/Pulse';

const useStyles = makeStyles((theme) => ({
  spacing: {
    paddingTop: 130,

    [theme.breakpoints.down('sm')]: {
      paddingTop: 50,
      textAlign: 'center',
    },
  },
  circle: {
    width: 7,
    height: 7,
    padding: 5,
    margin: 6,
    borderRadius: '50%',
    backgroundColor: theme.palette.pbr.primary,
  },
  header: {
    height: '80vh',
    width: 'auto',
    background: `linear-gradient(0deg, rgba(255, 255, 255, 0.8), rgba(233, 233, 233, 1) ),url("https://img.freepik.com/free-vector/variety-cute-shapes-abstract-background_23-2148544989.jpg?size=626&ext=jpg&ga=GA1.2.1991903213.1616889600")`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    [theme.breakpoints.up('sm')]: {
      height: '85vh',
    },
  },
  notice: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingBottom: 15,
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    width: 'auto',
    textAlign: 'center',
    fontSize: '52px',

    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    margin: '0px 0px 12px',
    padding: '0px 12px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '32px',
    },
  },
  subheading: {
    textAlign: 'center',
    paddingTop: 20,
    fontSize: 16,
    fontWeight: 400,
    fontColor: theme.palette.pbr.textLight,
    marginTop: 25,
  },
  button: {
    borderRadius: '50px',
    background: `linear-gradient(to bottom,#D9047C, #BF1088)`,
    lineHeight: '24px',
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    marginTop: 15,
    color: '#ffffff',
    padding: '15px 30px 15px 30px',
    fontWeight: 600,
    fontSize: 14,
    [theme.breakpoints.down('sm')]: {
      fontSize: 13,
      padding: '10px 20px 10px 20px',
    },
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <Fragment>
      <section>
        {' '}
        <div className={classes.header}>
          <div className={classes.spacing}>
            <div className="d-flex flex-row justify-content-center mt-5"></div>
            <Pulse>
              <h1 className={classes.heading}>
                CORGI - A community-focused <br />
                decentralized transaction network
              </h1>
            </Pulse>

            <div className="text-center mt-3">
              <a href="https://farm.polkabridge.org/" style={{ textDecoration: 'none', padding: 5 }}>
                <Button variant="contained" color="primary" className={classes.button}>
                  <ShutterSpeed className={classes.icon} />
                  PancakeSwap
                </Button>
              </a>
              <a
                href="https://docs.google.com/forms/d/1ceBZIL8xDNBJWYzZ4j11lhU9MMke8usrNgnPEoSIMf0"
                style={{ textDecoration: 'none', padding: 5 }}>
                <Button variant="contained" color="primary" className={classes.button}>
                  <CallToAction className={classes.icon} /> Buy PBR
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
