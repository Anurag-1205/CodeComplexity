import * as React from 'react';
import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { createTheme } from '@mui/material/styles';
import DescriptionIcon from '@mui/icons-material/Description';
import { AppProvider } from '@toolpad/core/AppProvider';
import { DashboardLayout } from '@toolpad/core/DashboardLayout';
import { useDemoRouter } from '@toolpad/core/internal';
import HomePage from  './HomePage'
import AboutPage from './AboutPage'
import logo from '../assets/image1.svg';


const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'data-toolpad-color-scheme',
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

function getPageContent( pathname ) {
    switch(pathname){
      case '/home':
        return <HomePage />;
      case '/about':
        return <AboutPage />;
      case '/':
        return <AboutPage />;
      default:
        return (
          <Typography variant="h5" sx={{ textAlign: 'center', py: 4 }}>
            404 - Page Not Found
          </Typography>
        );  
    }
}


function DashboardLayoutNavigationLinks(props) {
  const { window } = props;

  const router = useDemoRouter('/home');

  // Remove this const when copying and pasting into your project.
  const demoWindow = window !== undefined ? window() : undefined;

  return (
    // preview-start
    <AppProvider
      navigation={[
        {
          segment: 'home',
          title: 'Home',
          icon: <DescriptionIcon />,
        },
        {
          segment: 'about',
          title: 'About Us',
          icon: <DescriptionIcon />,
        },
      ]}
      branding={{
        logo: <img src={logo} alt="logo"/>,
        title: 'Code Complexity - Powered by AI',
        homeUrl: null,
      }}
      router={router}
      theme={demoTheme}
      window={demoWindow}
    >
      <DashboardLayout>
        {getPageContent(router.pathname)}
      </DashboardLayout>
    </AppProvider>
    // preview-end
  );
}

DashboardLayoutNavigationLinks.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * Remove this when copying and pasting into your project.
   */
  window: PropTypes.func,
};

export default DashboardLayoutNavigationLinks;
