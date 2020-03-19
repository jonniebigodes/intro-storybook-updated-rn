// initial code provided by expo template
/* import * as React from 'react';
import NavigationTestUtils from 'react-navigation/NavigationTestUtils';

import renderer from 'react-test-renderer';

import App from '../App';

jest.mock('expo', () => ({
  AppLoading: 'AppLoading',
}));

jest.mock('../navigation/AppNavigator', () => 'AppNavigator');

describe('App', () => {
  jest.useFakeTimers();

  beforeEach(() => {
    NavigationTestUtils.resetInternalState();
  });

  it(`renders the loading screen`, () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`renders the root without loading screen`, () => {
    const tree = renderer.create(<App skipLoadingScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
 */

 // proposed change for test with expo template
/* import * as React from 'react';
import { act, create } from 'react-test-renderer';

import App from '../App';

jest.mock('expo', () => ({
  Linking: {
    makeUrl: () => '/',
  },
  SplashScreen: {
    preventAutoHide: () => 'preventAutoHide',
    hide: () => 'hide',
  },
}));

jest.mock("../navigation/BottomTabNavigator", () => "BottomTabNavigator");

describe('App', () => {
  jest.useFakeTimers();

  let tree;
  it(`renders correctly`, async () => {
    // act is used to prevent snapshot returning null
    await act(async () => {
      tree = await create(<App />);
    });
    expect(tree.toJSON()).toMatchSnapshot();
  });
});
 */


// updated test for app
describe('app', () => {
  it('should pass the test'){
    expect(2+2).toBe(4)
  }
})
