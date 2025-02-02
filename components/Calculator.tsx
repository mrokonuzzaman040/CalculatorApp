import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { evaluate } from 'mathjs';
import { BlurView } from 'expo-blur';

const Calculator = () => {
  const [display, setDisplay] = useState('');

  const handlePress = (value: string): void => {
    if (value === 'C') {
      setDisplay('');
    } else if (value === '⌫') { // Backspace button
      setDisplay(display.slice(0, -1));
    } else if (value === '=') {
      try {
        const result = evaluate(display);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === '√') {
      try {
        const number = evaluate(display);
        const result = Math.sqrt(number);
        setDisplay(result.toString());
      } catch (error) {
        setDisplay('Error');
      }
    } else if (value === 'sin' || value === 'cos' || value === 'tan') {
      setDisplay(display + value + '(');
    } else {
      setDisplay(display + value);
    }
  };

  const renderButton = (item: string, flexValue = 1) => (
    <TouchableOpacity
      key={item}
      onPress={() => handlePress(item)}
      style={[styles.button, { flex: flexValue }]}
    >
      <Text style={styles.buttonText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <BlurView intensity={80} tint="dark" style={styles.displayContainer}>
        <Text style={styles.displayText}>{display}</Text>
      </BlurView>

      <BlurView intensity={60} tint="dark" style={styles.buttonsWrapper}>
        <View style={styles.buttonContainer}>
          <View style={styles.row}>
            {renderButton('sin')}
            {renderButton('cos')}
            {renderButton('tan')}
            {renderButton('√')}
          </View>
          <View style={styles.row}>
            {renderButton('7')}
            {renderButton('8')}
            {renderButton('9')}
            {renderButton('/')}
          </View>
          <View style={styles.row}>
            {renderButton('4')}
            {renderButton('5')}
            {renderButton('6')}
            {renderButton('*')}
          </View>
          <View style={styles.row}>
            {renderButton('1')}
            {renderButton('2')}
            {renderButton('3')}
            {renderButton('-')}
          </View>
          <View style={styles.row}>
            {renderButton('0')}
            {renderButton('.')}
            {renderButton('C')}
            {renderButton('+')}
          </View>
          {/* New row for Backspace */}
          <View style={styles.row}>
            {renderButton('⌫', 4)}
          </View>
          <View style={styles.row}>
            {renderButton('(', 1)}
            {renderButton(')', 1)}
            {renderButton('^', 1)}
            {renderButton('=', 1)}
          </View>
        </View>
      </BlurView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', 
    padding: 20,
    justifyContent: 'center',
  },
  displayContainer: {
    marginBottom: 20,
    padding: 25,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  displayText: {
    fontSize: 32,
    color: '#fff',
    textAlign: 'right',
  },
  buttonsWrapper: {
    padding: 15,
    borderRadius: 20,
    backgroundColor: 'rgba(30, 30, 30, 0.5)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  buttonContainer: {},
  row: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  button: {
    margin: 8,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    backgroundColor: 'rgba(30, 30, 30, 0.4)',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.2)',
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
});

export default Calculator;
