

import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const BMIKalkulator = () => {
  const [tomeg, setTomeg] = useState('');
  const [magassag, setMagassag] = useState('');
  const [testtomegindex, setTesttomegindex] = useState(null);
  const szamolTesttomegindex = () => {
    if (tomeg && magassag) {
    
      const tomegNum = parseFloat(tomeg.replace(',', '.'));
      const magassagNum = parseFloat(magassag.replace(',', '.'));
  
      console.log('Tomeg:', tomegNum);
      console.log('Magassag:', magassagNum);
  
      if (!isNaN(tomegNum) && !isNaN(magassagNum) && magassagNum !== 0) {
        const testtomegindexResult = tomegNum / (magassagNum * magassagNum);
  
        console.log('TesttomegindexResult:', testtomegindexResult);
  
        setTesttomegindex(testtomegindexResult.toFixed(2));
      } else {
        setTesttomegindex(null);
        alert('Hibás adatok. Kérjük, érvényes számokat adjon meg.');
      }
    } else {
      setTesttomegindex(null);
      alert('Kérjük, töltse ki mindkét mezőt.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Testsúly (kg):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={tomeg}
        onChangeText={(text) => setTomeg(text)}
      />

      <Text style={styles.label}>Testmagasság (m):</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        value={magassag}
        onChangeText={(text) => setMagassag(text)}
      />

      <Button title="Számol" onPress={szamolTesttomegindex} />

      {testtomegindex !== null && (
        <Text style={styles.result}>Testtömegindex: {testtomegindex}</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  result: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default BMIKalkulator;
