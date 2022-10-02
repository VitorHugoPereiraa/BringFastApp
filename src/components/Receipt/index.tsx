import React from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
import ZigzagLines from 'react-native-zigzag-lines';

export function Receipt({children}) {
  const [width, setWidth] = React.useState<any>()

  return (
    <>
      <View 
      onLayout={e => setWidth(e.nativeEvent.layout.width)}
      style={{
        backgroundColor: "#fff",
        width: width,
        height: 450,
      }}>
        <View style={{flex: 1,}}>

        </View>
      </View>
      {typeof width == 'number' && <ZigzagLines
        position='bottom'
        width={width}
        color="#fff"
        backgroundColor="#E3F2FD"
        style={{
          marginBottom: 50,
        }}
      />}
    </>
  );
}