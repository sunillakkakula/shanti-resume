import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import {
  useMediaQuery,
  Divider,
  Toolbar,
  ListItemText,
  ListItemAvatar,
  Avatar,
  ListItem,
  List,
} from '@material-ui/core';
import { SectionHeader } from 'components/molecules';
// import { Topbar, Footer, Sidebar, TopbarLSK } from './components';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  },
}));

const Main = props => {
  const { children } = props;

  const classes = useStyles();

  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up('md'), {
    defaultMatches: true,
  });

  // const pages = {
  //   landings: {
  //     title: 'Landings',
  //     id: 'landing-pages',
  //     children: {
  //       services: {
  //         groupTitle: 'Services',
  //         pages: [
  //           {
  //             title: 'Coworking',
  //             href: '/coworking',
  //           },
  //           {
  //             title: 'Rental',
  //             href: '/rental',
  //           },
  //           {
  //             title: 'Job Listing',
  //             href: '/job-listing',
  //           },
  //           {
  //             title: 'E-Learning',
  //             href: '/e-learning',
  //           },
  //           {
  //             title: 'E-commerce',
  //             href: '/e-commerce',
  //           },
  //           {
  //             title: 'Expo',
  //             href: '/expo',
  //           },
  //         ],
  //       },
  //       apps: {
  //         groupTitle: 'Apps',
  //         pages: [
  //           {
  //             title: 'Desktop App',
  //             href: '/desktop-app',
  //           },
  //           {
  //             title: 'Mobile App',
  //             href: '/mobile-app',
  //           },
  //         ],
  //       },
  //       web: {
  //         groupTitle: 'Web',
  //         pages: [
  //           {
  //             title: 'Overview',
  //             href: '/home',
  //           },
  //           {
  //             title: 'Basic',
  //             href: '/web-basic',
  //           },
  //           {
  //             title: 'Service',
  //             href: '/service',
  //           },
  //           {
  //             title: 'Startup',
  //             href: '/startup',
  //           },
  //           {
  //             title: 'Enterprise',
  //             href: '/enterprise',
  //           },
  //           {
  //             title: 'Cloud Hosting',
  //             href: '/cloud-hosting',
  //           },
  //           {
  //             title: 'Agency',
  //             href: '/agency',
  //           },
  //           {
  //             title: 'Design Company',
  //             href: '/design-company',
  //           },
  //           {
  //             title: 'Logistics',
  //             href: '/logistics',
  //           },
  //         ],
  //       },
  //     },
  //   },
  //   pages: {
  //     title: 'Pages',
  //     id: 'supported-pages',
  //     children: {
  //       career: {
  //         groupTitle: 'Career',
  //         pages: [
  //           {
  //             title: 'Lising',
  //             href: '/career-listing',
  //           },
  //           {
  //             title: 'Lising Minimal',
  //             href: '/career-listing-minimal',
  //           },
  //           {
  //             title: 'Opening',
  //             href: '/career-opening',
  //           },
  //         ],
  //       },
  //       helpCenter: {
  //         groupTitle: 'Help center',
  //         pages: [
  //           {
  //             title: 'Overview',
  //             href: '/help-center',
  //           },
  //           {
  //             title: 'Article',
  //             href: '/help-center-article',
  //           },
  //         ],
  //       },
  //       company: {
  //         groupTitle: 'Company',
  //         pages: [
  //           {
  //             title: 'About',
  //             href: '/about',
  //           },
  //           {
  //             title: 'About (Cover)',
  //             href: '/about-side-cover',
  //           },
  //           {
  //             title: 'Pricing',
  //             href: '/pricing',
  //           },
  //           {
  //             title: 'Terms',
  //             href: '/company-terms',
  //           },
  //         ],
  //       },
  //       contact: {
  //         groupTitle: 'Contact',
  //         pages: [
  //           {
  //             title: 'Reach View',
  //             href: '/contact-page',
  //           },
  //           {
  //             title: 'Sidebar Map',
  //             href: '/contact-sidebar-map',
  //           },
  //           {
  //             title: 'Cover',
  //             href: '/contact-page-cover',
  //           },
  //         ],
  //       },
  //       blog: {
  //         groupTitle: 'Blog',
  //         pages: [
  //           {
  //             title: 'Newsroom',
  //             href: '/blog-newsroom',
  //           },
  //           {
  //             title: 'Reach View',
  //             href: '/blog-reach-view',
  //           },
  //           {
  //             title: 'Search',
  //             href: '/blog-search',
  //           },
  //           {
  //             title: 'Article',
  //             href: '/blog-article',
  //           },
  //         ],
  //       },
  //       portfolio: {
  //         groupTitle: 'Portfolio',
  //         pages: [
  //           {
  //             title: 'Basic',
  //             href: '/portfolio-page',
  //           },
  //           {
  //             title: 'Masonry',
  //             href: '/portfolio-masonry',
  //           },
  //           {
  //             title: 'Grid View',
  //             href: '/portfolio-grid',
  //           },
  //           {
  //             title: 'Parallax Effect',
  //             href: '/agency',
  //           },
  //         ],
  //       },
  //     },
  //   },
  //   account: {
  //     title: 'Account',
  //     id: 'account',
  //     children: {
  //       settings: {
  //         groupTitle: 'Settings',
  //         pages: [
  //           {
  //             title: 'General',
  //             href: '/account/?pid=general',
  //           },
  //           {
  //             title: 'Security',
  //             href: '/account/?pid=security',
  //           },
  //           {
  //             title: 'Notifications',
  //             href: '/account/?pid=notifications',
  //           },
  //           {
  //             title: 'Billing',
  //             href: '/account/?pid=billing',
  //           },
  //         ],
  //       },
  //       signup: {
  //         groupTitle: 'Sign up',
  //         pages: [
  //           {
  //             title: 'Simple',
  //             href: '/signup-simple',
  //           },
  //           {
  //             title: 'Cover',
  //             href: '/signup-cover',
  //           },
  //         ],
  //       },
  //       signin: {
  //         groupTitle: 'Sign in',
  //         pages: [
  //           {
  //             title: 'Simple',
  //             href: '/signin-simple',
  //           },
  //           {
  //             title: 'Cover',
  //             href: '/signin-cover',
  //           },
  //         ],
  //       },
  //       password: {
  //         groupTitle: 'Password reset',
  //         pages: [
  //           {
  //             title: 'Simple',
  //             href: '/password-reset-simple',
  //           },
  //           {
  //             title: 'Cover',
  //             href: '/password-reset-cover',
  //           },
  //         ],
  //       },
  //       error: {
  //         groupTitle: 'Error',
  //         pages: [
  //           {
  //             title: 'Simple',
  //             href: '/not-found',
  //           },
  //           {
  //             title: 'Cover',
  //             href: '/not-found-cover',
  //           },
  //         ],
  //       },
  //     },
  //   },
  // };

  // const [openSidebar, setOpenSidebar] = useState(false);

  // const handleSidebarOpen = () => {
  //   setOpenSidebar(true);
  // };

  // const handleSidebarClose = () => {
  //   setOpenSidebar(false);
  // };

  // const open = isMd ? false : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
      })}
    >
      <Toolbar disableGutters className={classes.toolbar}>
        <SectionHeader
          title="Shanti"
          subtitle=""
          align="center"
          data-aos="fade-up"
          titleProps={{
            className: classes.textWhite,
          }}
          subtitleProps={{
            className: classes.textWhite,
          }}
        />
        {/* <List disablePadding> */}
        <ListItem disableGutters data-aos="fade-up">
          <ListItemAvatar>
            <Avatar
              src="/assets/images/illustrations/contact-icon-phone.png"
              srcSet="/assets/images/illustrations/contact-icon-phone@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Phone"
            secondary="+91-9003054762"
            primaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        <ListItem disableGutters data-aos="fade-up">
          <ListItemAvatar>
            <Avatar
              src="/assets/images/illustrations/contact-icon-mail.png"
              srcSet="/assets/images/illustrations/contact-icon-mail@2x.png 2x"
              className={classes.icon}
            />
          </ListItemAvatar>
          <ListItemText
            primary="Email"
            secondary="spkolapalli@gmail.com"
            primaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textSecondary',
            }}
            secondaryTypographyProps={{
              variant: 'subtitle1',
              color: 'textPrimary',
            }}
          />
        </ListItem>
        {/* </List> */}
        {/* </SectionHeader> */}
      </Toolbar>

      <Divider />

      <main>
        <Divider />
        {children}
      </main>
    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node,
};

export default Main;
