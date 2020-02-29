import * as React from 'react';
import { connect } from 'react-redux';
import PureInboxScreen from '../components/PureInboxScreen';

const InboxScreen = ({ error }) => {
  return <PureInboxScreen error={error} />;
};

export default connect(({ error }) => ({ error }))(InboxScreen);