import { IconButton, Tooltip } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Twitter, Telegram, GitHub, Email } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  background: {
    padding: 80,
    height: '300px',
    [theme.breakpoints.down('sm')]: {
      height: '100%',
      padding: 0,
      paddingTop: 25,
      paddingBottom: 25,
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
  para: {
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

  highlight: {
    color: theme.palette.pbr.primary,
  },
  icon: {
    fontSize: 24,
    color: '#e5e5e5',
    '&:hover': {
      color: '#000000',
    },
  },
  iconWrapper: {
    marginRight: 5,
  },
}));
export default function SocialLinks() {
  const classes = useStyles();

  return (
    <div>
      <div className="d-flex justify-content-start ">
        <div className={classes.iconWrapper}>
          <Tooltip title="Twitter" aria-label="add1">
            <a href="https://twitter.com/realpolkabridge">
              <IconButton aria-label="Twitter">
                <Twitter className={classes.icon} />
              </IconButton>
            </a>
          </Tooltip>
        </div>
        <div className={classes.iconWrapper}>
          <Tooltip title="Telegram">
            <a href="https://t.me/polkabridgegroup">
              <IconButton aria-label="Telegram">
                <Telegram className={classes.icon} />
              </IconButton>
            </a>
          </Tooltip>
        </div>

        <div className={classes.iconWrapper}>
          <Tooltip title="Github">
            <a href="https://github.com/cyclese96">
              <IconButton aria-label="Github">
                <GitHub className={classes.icon} />
              </IconButton>
            </a>
          </Tooltip>
        </div>

        {/* <div className={classes.iconWrapper}>
          <Tooltip title="Discord">
            <a href="https://discord.gg/G3NDrcq6GW">
              <IconButton aria-label="Discord">
                <img
                  src="images/discord.png"
                  height="25px"
                  width="25px"
                  style={{ opacity: 0.6, marginTop: 5 }}
                  alt="discord"
                />
              </IconButton>
            </a>
          </Tooltip>
        </div> */}
        <div className={classes.iconWrapper}>
          <Tooltip title="Email">
            <a href="mailto:support@polkabridge.org">
              <IconButton aria-label="Email">
                <Email className={classes.icon} />
              </IconButton>
            </a>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
