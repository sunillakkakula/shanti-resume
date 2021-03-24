import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  List,
  ListItem,
  Avatar,
  ListItemAvatar,
  Typography,
} from '@material-ui/core';
import { Image } from 'components/atoms';
import { SectionHeader } from 'components/molecules';
import { Section } from 'components/organisms';

const useStyles = makeStyles(theme => ({
  grid: {
    maxWidth: '100%',
    background: theme.palette.primary.dark,
  },
  textWhite: {
    color: 'white',
  },
  checkBox: {
    background: 'transparent',
    borderRadius: 0,
  },
  title: {
    fontWeight: 'bold',
  },
}));

const Features = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  return (
    <div className={className} {...rest}>
      <Grid container className={classes.grid}>
        <Grid item container alignItems="center" xs={12} md={6}>
          <Section>
            <>
              <SectionHeader
                title="Worked for 7 years in Financial Services domain experience working in Information Technology for Mutual Fund Services and Asset Management Business domains at LeggMason Inc, Baltimore, US."
                subtitle=""
                align="left"
                data-aos="fade-up"
                titleProps={{
                  className: clsx(classes.textWhite, classes.title),
                }}
                subtitleProps={{
                  className: classes.textWhite,
                }}
              />
              <List>
                {data.map((item, index) => (
                  <ListItem disableGutters key={index} data-aos="fade-up">
                    <ListItemAvatar>
                      <Avatar
                        src="/assets/images/illustrations/check-icon-yellow.svg"
                        className={classes.checkBox}
                      />
                    </ListItemAvatar>
                    <Typography
                      variant="body1"
                      color="textPrimary"
                      className={classes.textWhite}
                    >
                      {item}
                    </Typography>
                  </ListItem>
                ))}
              </List>
            </>
          </Section>
        </Grid>
      </Grid>
    </div>
  );
};

Features.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Features;
