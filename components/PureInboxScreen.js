// components/PureInboxScreen.js
import * as React from 'react';
import PropTypes from 'prop-types';
import PercolateIcons from '../constants/Percolate';
import TaskList from './TaskList';
import { Text, SafeAreaView, View } from 'react-native';
import { styles } from '../constants/globalStyles';
const PureInboxScreen = ({ error }) => {
  if (error) {
    return (
      <SafeAreaView style={styles.PageListsShow}>
        <View style={styles.WrapperMessage}>
          <PercolateIcons name="face-sad" size={64} color={'#2cc5d2'} />
          <Text style={styles.TitleMessage}>Oh no!</Text>
          <Text style={styles.SubtitleMessage}>Something went wrong</Text>
        </View>
      </SafeAreaView>
    );
  }
  return (
    <SafeAreaView style={styles.PageListsShow}>
      <View style={[styles.titlepage, styles.PageListsShowhead]}>
        <Text numberOfLines={1} style={styles.TitleWrapper}>
          Taskbox
        </Text>
      </View>
      <TaskList />
    </SafeAreaView>
  );
};
PureInboxScreen.propTypes = {
  error: PropTypes.string,
};

PureInboxScreen.defaultProps = {
  error: null,
};

export default PureInboxScreen;