import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  AccountBalance,
  ChevronLeft,
  ChevronRight,
  CloudQueue,
  Description,
  GroupWork,
  LocalFlorist,
  SettingsEthernet,
  SwapHoriz,
  Timer,
} from '@material-ui/icons';
import { Fade } from 'react-reveal';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    // backgroundColor: '#F7F8FB',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingBottom: 50,
      paddingTop: 50,
    },
  },
  heading: {
    color: theme.palette.pbr.textSecondary,
    textAlign: 'center',
    fontSize: 36,
    fontWeight: 600,
    verticalAlign: 'middle',
    wordSpacing: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: 28,
    },
  },
  subheading: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'center',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },
  para: {
    fontWeight: 400,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    paddingTop: 10,
    paddingBottom: 10,
    textAlign: 'left',
    [theme.breakpoints.down('sm')]: {
      fontSize: 16,
    },
  },

  highlight: {
    color: theme.palette.pbr.primary,
  },
  title: {
    fontWeight: 700,
    verticalAlign: 'baseline',
    letterSpacing: '-0.8px',
    margin: 0,
    textAlign: 'left',
    fontSize: 20,
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 16,
    marginRight: 7,
    color: '#ffffff',
  },
  focusContainer: {
    border: '1px solid #888888',
    padding: 10,
    borderRadius: '7px',
    marginBottom: 10,

    marginLeft: 10,
    minWidth: 600,
    [theme.breakpoints.down('sm')]: {
      minWidth: 300,
    },
  },
  imageContainer: {
    width: '100%',
    [theme.breakpoints.down('sm')]: {
      marginTop: 30,
      width: '100%',
    },
  },
  roadmapWrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      width: '90%',
    },
  },
  roadmapContainer: {
    padding: 30,
    marginTop: -80,
    backgroundColor: '#f4f4f4',
    borderRadius: 10,
    width: 700,
    [theme.breakpoints.down('sm')]: {
      padding: 10,
      marginTop: -120,
      width: '95%',
    },
  },
  cardHeader: {
    background: `linear-gradient(to bottom,#D9047C, purple)`,
    borderRadius: 10,
    width: 900,
    height: 200,
    [theme.breakpoints.down('sm')]: {
      padding: 30,
      width: '100%',
    },
  },
  status: {
    borderLeft: '2px solid #bdbdbd',
    fontSize: 40,
    color: 'green',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  statusUndone: {
    borderLeft: '2px solid #bdbdbd',
    fontSize: 40,
    color: '#bdbdbd',

    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
}));
export default function Roadmap(props) {
  const classes = useStyles();

  return (
    <div className={classes.background}>
      <div>
        <h6 className={classes.heading}>
          CORGIB <strong className={classes.highlight}>RoadMap</strong>
        </h6>

        <p className={classes.subheading}>Our CORGIB Walk</p>
      </div>
      <Fade top>
        <div className="d-flex flex-column align-items-center">
          <div className={classes.cardHeader}></div>
          <div className={classes.roadmapContainer}>
            <h5 style={{ paddingLeft: 10, paddingTop: 20 }}>
              <strong>Updates</strong>
              <hr style={{ width: 100, height: 2 }} />
            </h5>

            <div className={classes.roadmapWrapper}>
              <div className="d-flex justify-content-start">
                <div className={classes.status}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>
                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>Token Fair Launch</h6>
                  <p className={classes.para}>
                    CORBIG will be listed on PANCAKESWAP at <strong>3PM UTC, 13th May</strong>.
                  </p>
                </div>
              </div>
              <div className="d-flex justify-content-start">
                <div className={classes.status}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>
                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>Safety</h6>
                  <p className={classes.para}>
                    <ul>
                      <li>Liquidity will be locked for 2 month on Unicrypt.</li>
                      <li> 45% of all tokens will be reserved and burnt 1% everyday.</li>{' '}
                      <li> Team's token will be locked.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-start">
                <div className={classes.status}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>

                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>Marketing Expansion</h6>
                  <p className={classes.para}>
                    <ul>
                      <li>Influencers are on-board.</li>
                      <li> Community contribution & promotion contests.</li>
                      <li> The shiling army is ready for TikTok | Twitter | YouTube promotions.</li>
                      <li> Partnerships & Collaborations.</li>{' '}
                    </ul>
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-start">
                <div className={classes.status}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>

                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>Open To The World</h6>
                  <p className={classes.para}>
                    <ul>
                      <li> CoinGecko Listing.</li>
                      <li> CoinMarketcap Listing.</li>
                      <li>Tier-2 exchange Listing.</li>
                    </ul>
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-start">
                <div className={classes.status}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>

                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>Defi & Gaming</h6>
                  <p className={classes.para}>
                    <ul>
                      <li> EURO 2020 Event - Online Football Betting Platform.</li>
                      <li> Staking CORGIB on PolkaBridge.</li>

                    </ul>
                  </p>
                </div>
              </div>

              <div className="d-flex justify-content-start">
                <div className={classes.statusUndone}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>

                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>NFT MarketPlace & Listing</h6>
                  <p className={classes.para}>
                    <ul>

                      <li> Mainnet</li>
                      <li> Tier-2 exchange listing (Gate, MEXC)</li>
                    </ul>
                  </p>

                </div>

              </div>
              <div className="d-flex justify-content-start">
                <div className={classes.statusUndone}>
                  <p style={{ marginLeft: -10 }}>•</p>
                </div>

                <div className={classes.focusContainer} style={{ backgroundColor: '#fcfcfc' }}>
                  <h6 className={classes.title}>Future Development</h6>
                  <p className={classes.para}>
                    <ul>
                      <li> Multichain & Cross-chain</li>
                      <li> Polkadot Meme Token</li>
                      <li> Worldcup Event</li>
                    </ul>
                  </p>

                </div>

              </div>

            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
}
