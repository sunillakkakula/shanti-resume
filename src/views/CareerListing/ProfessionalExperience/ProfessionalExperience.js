import React from 'react';
import PropTypes from 'prop-types';

import { SectionHeader } from 'components/molecules';
import { Accordion } from 'components/organisms';

const ProfessionalExperience = props => {
  const { data, className, ...rest } = props;

  return (
    <div className={className} {...rest}>
      <SectionHeader
        title="Professional Experience"
        // subtitle="Checkout our F.A.Q. if you have some questions."
        fadeUp
      />
      <Accordion items={data} />
    </div>
  );
};

ProfessionalExperience.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * data to be rendered
   */
  data: PropTypes.array.isRequired,
};

export default ProfessionalExperience;
