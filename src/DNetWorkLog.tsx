import React, {memo} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import NetworkLogger from 'react-native-network-logger';

// Styles
import styles from './DNetWorkLogStyle';

const DNetWorkLog = () => {
  return (
    // <View style={styles.wrapContent}>
    //   <View style={styles.content}>
        <NetworkLogger
          theme={{
            colors: {
              background: 'white',
            },
          }}
        />
    //   </View>
    // </View>
  );
};

export default memo(DNetWorkLog);
