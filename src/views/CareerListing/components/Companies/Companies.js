import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Grid, Button, useMediaQuery } from '@material-ui/core';
import { LearnMoreLink } from 'components/atoms';
import { SectionHeader, TypedText } from 'components/molecules';
import { CardJobCompany } from 'components/organisms';

const useStyles = makeStyles(() => ({
  typed: {
    fontWeight: 'bold',
  },
}));

const Companies = props => {
  const { data, className, ...rest } = props;
  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title={
          <>
            Companies {isMd ? null : <br />} you love &nbsp;
            <TypedText
              component="span"
              variant="h4"
              color="secondary"
              className={classes.typed}
              typedProps={{
                strings: [
                  'Computer Sciences Corporation, MD, US.',
                  'Legg Mason, MD , US',
                  'Northrop Grumman, MD, US',
                  'Medco Health Solutions, NJ, US',
                ],
                typeSpeed: 100,
                loop: true,
              }}
            />
          </>
        }
        subtitle={<></>}
        align="left"
      />
      <Grid container spacing={isMd ? 4 : 2}>
        {data.map((item, index) => (
          <Grid
            key={index}
            item
            container
            alignItems="center"
            direction="column"
            xs={12}
            sm={6}
            md={4}
            data-aos="fade-up"
          >
            <CardJobCompany
              variant="outlined"
              liftUp
              jobTitle={item.title}
              jobLocation={item.location}
              companyLogo={item.companyLogo}
              companyName={item.companyName}
              jobsCount={item.jobs}
              companyInfo={item.subtitle}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Companies.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Companies;
