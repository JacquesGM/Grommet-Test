import React from 'react';
import { Grommet, Page, PageContent, PageHeader, Grid } from 'grommet';
import { lightTheme, darkTheme } from './Theme';
import useDarkMode from './useDarkMode';
import AppBar from './AppBar';
import CardTemplate from './CardTemplate';

const App = () => {
  const [dark, toggleDarkMode] = useDarkMode();

  return (
    <Grommet theme={dark ? darkTheme : lightTheme} full>
      <Page>
        <AppBar dark={dark} toggleDarkMode={toggleDarkMode} />
        <PageContent>
          <PageHeader title="Welcome to Grommet!" />
          <Grid columns="medium" gap="large" pad={{ bottom: 'large' }}>
            <CardTemplate title={"Card 1"} />
            <CardTemplate title={"Card 2"} />
            <CardTemplate title={"Card 3"} />
          </Grid>
        </PageContent>
      </Page>
    </Grommet>
  );
};

export default App;
