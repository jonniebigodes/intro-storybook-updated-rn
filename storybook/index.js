import { getStorybookUI, configure } from "@storybook/react-native";

import "./rn-addons";

// import stories
// original
/* configure(() => {
  require("./stories");
}, module); */

configure(() => {
  require('../components/Task.stories.js');
  require('../components/PureTaskList.stories.js');
  require("../components/PureInboxScreen.stories.js")
}, module);

// Refer to https://github.com/storybookjs/storybook/tree/master/app/react-native#start-command-parameters
// To find allowed options for getStorybookUI
const StorybookUIRoot = getStorybookUI({
  asyncStorage:null
});

// If you are using React Native vanilla and after installation you don't see your app name here, write it manually.
// If you use Expo you can safely remove this line.
// AppRegistry.registerComponent('%APP_NAME%', () => StorybookUIRoot);

export default StorybookUIRoot;
