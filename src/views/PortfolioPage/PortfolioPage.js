import React from 'react';
import { Divider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Section, SectionAlternate } from 'components/organisms';
import { Features, Folio, Gallery, Hero, Services } from './components';
import Contact from '../About/components/Contact';

import {
  services,
  features,
  current_org,
  gallery,
  companies,
  professional_experience,
} from './data';

// import { partners, jobCategories, jobs, companies, faq } from './data';
import { Companies, Faq } from 'views/CareerListing/components';
import ProfessionalExperience from 'views/CareerListing/ProfessionalExperience';
// import { Contact } from 'views/Agency/components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
  },
  sectionAlternate: {
    background: 'transparent',
    backgroundImage: `linear-gradient(180deg, ${theme.palette.background.paper} 400px, ${theme.palette.primary.dark} 0%)`,
  },
}));

const PortfolioPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Features data={features} />
      <Section>
        <Companies data={companies} />
      </Section>
      <SectionAlternate>
        <Services data={services} />
      </SectionAlternate>

      <SectionAlternate className={classes.sectionAlternate}>
        <ProfessionalExperience data={professional_experience} />
      </SectionAlternate>
    </div>
  );
};

export default PortfolioPage;
