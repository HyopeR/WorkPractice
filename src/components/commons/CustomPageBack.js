import React from 'react';
import {useTheme} from '@react-navigation/native';
import {View, ScrollView, StyleSheet} from 'react-native';

const CustomPageBack = ({children, header, hasListView}) => {
  const {colors} = useTheme();

  return (
    <View style={styles.formBack}>
      {header}
      {hasListView !== undefined ? (
        <View style={styles.formInBody}>{children}</View>
      ) : (
        <View style={styles.formOutBody}>
          <ScrollView style={styles.formInBodyScroll}>
            <View style={{alignItems: 'center'}}>
              <View style={styles.formInBody}>{children}</View>
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  formBack: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
  },
  formInBody: {
    flex: 1,
    marginTop: 10,
    marginBottom: 10,
  },
  formInBodyScroll: {
    width: '100%',
  },
  formOutBody: {
    alignItems: 'center',
    flex: 1,
  },
});

export {CustomPageBack};
