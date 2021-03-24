import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Button, colors } from '@material-ui/core';
import { SectionHeader, IconAlternate } from 'components/molecules';
import { DescriptionListIcon } from 'components/organisms';

const Services = props => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} data-aos="fade-up" {...rest}>
      <SectionHeader
        title="What I do"
        subtitle="Full Stack Developer having 7 years experience in Java 1.8, React JS, Spring Boot and Node JS .Also a certified Microsoft Certified Azure Developer Associate. Worked for 7 years in Financial Services domain experience working in Information Technology for Mutual Fund Services and Asset Management Business domains at LeggMason Inc, Baltimore, US."
        subtitleProps={{
          variant: 'body1',
          color: 'textPrimary',
        }}
        fadeUp
      />
      <Grid container spacing={4}>
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
            <DescriptionListIcon
              icon={
                <IconAlternate
                  fontIconClass={item.icon}
                  color={colors.indigo}
                />
              }
              title={item.title}
              subtitle={item.description}
              align="left"
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

Services.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default Services;
