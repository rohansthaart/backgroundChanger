import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';

export default function App() {
  const [randomBackground, setRandomBackground] = useState<string>('#000000');
  const [randomTriangleColor, setRandomTriangleColor] =
    useState<string>('#000000');
  const [randomCircleColor, setRandomCircleColor] = useState<string>('#000000');
  const [randomButtonColor, setRandomButtonColor] = useState<string>('#000000');

  const generateColor = () => {
    const hexRange = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomBackground(color);

    let triangleColor = '#';
    for (let i = 0; i < 6; i++) {
      triangleColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomTriangleColor(triangleColor);

    let circleColor = '#';
    for (let i = 0; i < 6; i++) {
      circleColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomCircleColor(circleColor);

    let buttonColor = '#';
    for (let i = 0; i < 6; i++) {
      buttonColor += hexRange[Math.floor(Math.random() * 16)];
    }
    setRandomButtonColor(buttonColor);
  };

  return (
    <>
      <StatusBar backgroundColor={randomBackground} />
      <View style={[styles.container, {backgroundColor: randomBackground}]}>
        <View style={[styles.circle, {backgroundColor: randomCircleColor}]} />

        <TouchableOpacity onPress={() => generateColor()}>
          <View
            style={[styles.actionBtn, {backgroundColor: randomButtonColor}]}>
            <Text style={styles.buttonTxt}>Press me</Text>
          </View>
        </TouchableOpacity>
        <View
          style={[styles.triangle, {borderBottomColor: randomTriangleColor}]}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  actionBtn: {
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 40,
  },
  buttonTxt: {
    color: '#FFFFFF',
    fontSize: 24,
    textTransform: 'uppercase',
  },
  triangle: {
    width: 0,
    height: 0,
    borderStyle: 'solid',
    borderLeftWidth: 50,
    borderRightWidth: 50,
    borderBottomWidth: 100,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
  },
  circle: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
