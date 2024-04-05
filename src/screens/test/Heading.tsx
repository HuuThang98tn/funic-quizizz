import React from 'react';
import {StyleSheet, Text, View} from 'react-native';


interface HeadingProps {
  copy: string;
  label?: string;
}

export const Heading = ({copy, label}: HeadingProps) => (
  <View style={styles.heading}>
    <Text style={styles.label}>{copy}</Text>
    {label && <Text style={styles.label}>{label}</Text>}
  </View>
);

const styles = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: "black",
    borderRadius: 10,
  },

  label: {
    textTransform: 'uppercase',
    letterSpacing: 0.3,
    fontWeight: '600',
    fontSize: 12,
    color: "black",
  },
});
