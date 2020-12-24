// React & Other Components
import React, {useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Root} from 'native-base';

// Navigations
import {NavigationContainer} from '@react-navigation/native';
import Router from './Router';
import {navigationRef} from './services/RootNavigation';

// Redux store
import {PersistGate} from 'redux-persist/integration/react';
import {Provider, useDispatch, useSelector} from 'react-redux';
import configureStore from './redux/store';
const {store, persistor} = configureStore();

// Themes
import {LightTheme} from './styles/lightTheme';
import {DarkTheme} from './styles/darkTheme';

// Actions
import {streamAllAdmins} from './redux/actions/usersActions';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Main />
      </PersistGate>
    </Provider>
  );
};

const Main = () => {
  const dispatch = useDispatch();
  const themeRepo = useSelector((state) => state.theme);

  useEffect(() => {
    dispatch(streamAllAdmins());
  }, []);

  const theme = themeRepo.type === 'dark' ? DarkTheme : LightTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <SafeAreaView style={{flex: 1}}>
        <Root>
          <Router theme={theme} />
        </Root>
      </SafeAreaView>
    </NavigationContainer>
  );
};

export default App;
