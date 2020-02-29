// initial code
/* import * as React from 'react';
import { TextInput, SafeAreaView } from 'react-native';
import { styles } from '../constants/globalStyles';
 
export default function Task({ task: { id, title, state }, onArchiveTask, onPinTask }) {
  return (
    <SafeAreaView style={styles.listitem}>
      <TextInput value={title} editable={false} />
    </SafeAreaView>
  );
}
 */

// updated code for simple component
/* 
import * as React from 'react';
import PropTypes from "prop-types";
import { TextInput, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "../constants/globalStyles";
import PercolateIcons from "../constants/Percolate";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          <View style={styles.CheckBox} />
        ) : (
          <PercolateIcons name="check" size={20} color={"#2cc5d2"} />
        )}
      </TouchableOpacity>
      <TextInput
        placeholder="Input Title"
        style={
          state === "TASK_ARCHIVED"
            ? styles.ListItemInputTaskArchived
            : styles.ListItemInputTask
        }
        value={title}
        editable={false}
      />
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <PercolateIcons
          name="star"
          size={20}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
}; */

// updated code for using addons

import * as React from "react";
import PropTypes from "prop-types";
import { Text, SafeAreaView, View, TouchableOpacity } from "react-native";
import { styles } from "../constants/globalStyles";
import PercolateIcons from "../constants/Percolate";

export default function Task({
  task: { id, title, state },
  onArchiveTask,
  onPinTask
}) {
  return (
    <SafeAreaView style={styles.ListItem}>
      <TouchableOpacity onPress={() => onArchiveTask(id)}>
        {state !== "TASK_ARCHIVED" ? (
          <View style={styles.CheckBox} />
        ) : (
          <PercolateIcons name="check" size={20} color={"#2cc5d2"} />
        )}
      </TouchableOpacity>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={
          state === "TASK_ARCHIVED"
            ? styles.list_item_input_TASK_ARCHIVED
            : styles.list_item_input_TASK
        }
      >
        {title}
      </Text>
      <TouchableOpacity onPress={() => onPinTask(id)}>
        <PercolateIcons
          name="star"
          size={20}
          color={state !== "TASK_PINNED" ? "#eee" : "#26c6da"}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}
Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired
  }),
  onArchiveTask: PropTypes.func,
  onPinTask: PropTypes.func
};
