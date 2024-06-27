import React from 'react';
import { Header, Box, Button, Text } from 'grommet';
import { Moon, Sun } from 'grommet-icons';

const AppBar = ({ dark = false, toggleDarkMode = () => {} }) => (
  <Header background="brand" pad={{ left: 'medium', right: 'small', vertical: 'small' }} elevation='medium'>
    <Text size="large">My App</Text>
    <Button
      a11yTitle={dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      icon={dark ? <Moon /> : <Sun />}
      onClick={toggleDarkMode}
      tip={{
        content: (
          <Box pad="small" round="small" background={dark ? 'dark-1' : 'light-3'}>
            {dark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Box>
        ),
        plain: true,
      }}
    />
  </Header>
);

export default AppBar;
