import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import NetworkLogger from 'react-native-network-logger';

const NetWorkLog = ({isShow, onClose}) => {
  const onCloseNetWorkLogger = () => {
    onClose();
  };

  if (isShow) {
    return (
      <View style={styles.wrapContent}>
        <View style={styles.headerWrapper}>
          <TouchableOpacity
            style={styles.btnWrapper}
            onPress={onCloseNetWorkLogger}>
            <Text>Close</Text>
          </TouchableOpacity>
          <Text style={styles.title}>Network Logger</Text>
          <View style={styles.btnWrapper} />
        </View>
        <View style={styles.content}>
          <NetworkLogger
            theme={{
              colors: {
                background: 'white',
              },
            }}
          />
        </View>
      </View>
    );
  }

  return null;
};

const styles = StyleSheet.create({
  wrapContent: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'white',
  },
  headerWrapper: {
    height: 60,
    marginTop: 40,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
  },
  content: {
    flex: 1,
    marginBottom: 40,
  },
  iconClose: {
    width: 34,
    height: 34,
  },
  btnWrapper: {
    padding: 10,
    width: 70,
  },
});

export default NetWorkLog;
