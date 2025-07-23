import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Button, Image } from 'react-native';

import DateTimePicker from "@react-native-community/datetimepicker";

import * as ImagePicker from 'expo-image-picker';
import useRubberDuckForm from '@/hooks/useRubberDuckForm';


interface ValidationErrors {
  name?: string;
  type?: string;
  color?: string;
}

export default function RubberDuckies() {

  const {
    formData,
    isFormValid,
    handleInputChange,
    errors
  } = useRubberDuckForm()
  
  const [touched, setTouched] = useState({
    name: false,
    type: false,
    color: false
  });


  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const getInputStyle = (fieldName: string) => {
    const hasError = errors[fieldName as keyof ValidationErrors] && touched[fieldName as keyof typeof touched];
    const isValid = !errors[fieldName as keyof ValidationErrors] && touched[fieldName as keyof typeof touched] && formData[fieldName as keyof typeof formData].trim() !== '';
    
    return [
      styles.input,
      hasError && styles.inputError,
      isValid && styles.inputValid
    ];
  };

  const openImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      aspect: [1,1],
      allowsEditing: true,
    })
    console.log(result.assets[0].uri)
  }


  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Your Rubber Ducky</Text>
        <Text style={styles.subtitle}>Tell us about your favorite rubber ducky!</Text>
        <Button title="Open Date Picker" ></Button>

        <Image source={{uri: 'file:///data/user/0/host.exp.exponent/cache/ExperienceData/%2540anonymous%252Fexpo-example-69405bae-1049-4e71-9239-7fba5d648d32/ImagePicker/518bee68-993b-4a3a-8ac8-3782c986bd42.jpeg'}} style={{width: 100, height: 100}} />
        {/* <DateTimePicker
          mode="date"
          value={new Date()} 
          onChange = {(change) => console.log(change)}
          /> */}

        <Button title="Pick an image from camera roll" onPress={openImagePicker}/>
        

        
        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Ducky Name *</Text>
          <TextInput
            style={getInputStyle('name')}
            value={formData.name}
            onChangeText={(value) => handleInputChange('name', value)}
            onBlur={() => handleBlur('name')}
            placeholder="Enter your ducky's name"
            placeholderTextColor="#999"
          />
          {errors.name && touched.name && (
            <Text style={styles.errorText}>{errors.name}</Text>
          )}
          {!errors.name && touched.name && formData.name.trim() !== '' && (
            <Text style={styles.successText}>✓ Name looks good!</Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Ducky Type *</Text>
          <TextInput
            style={getInputStyle('type')}
            value={formData.type}
            onChangeText={(value) => handleInputChange('type', value)}
            onBlur={() => handleBlur('type')}
            placeholder="e.g., classic, superhero, animal"
            placeholderTextColor="#999"
          />
          <Text style={styles.helpText}>
            Valid types: classic, superhero, animal, character, sports, holiday
          </Text>
          {errors.type && touched.type && (
            <Text style={styles.errorText}>{errors.type}</Text>
          )}
          {!errors.type && touched.type && formData.type.trim() !== '' && (
            <Text style={styles.successText}>✓ Type is valid!</Text>
          )}
        </View>

        <View style={styles.fieldContainer}>
          <Text style={styles.label}>Ducky Color *</Text>
          <TextInput
            style={getInputStyle('color')}
            value={formData.color}
            onChangeText={(value) => handleInputChange('color', value)}
            onBlur={() => handleBlur('color')}
            placeholder="e.g., yellow, #FFD700"
            placeholderTextColor="#999"
          />
          <Text style={styles.helpText}>
            Enter a color name or hex code (e.g., "yellow" or "#FFD700")
          </Text>
          {errors.color && touched.color && (
            <Text style={styles.errorText}>{errors.color}</Text>
          )}
          {!errors.color && touched.color && formData.color.trim() !== '' && (
            <Text style={styles.successText}>✓ Color is valid!</Text>
          )}
        </View>

        <View style={styles.statusContainer}>
          <TouchableOpacity 
            style={[styles.button, isFormValid() ? styles.buttonValid : styles.buttonDisabled]}
            disabled={!isFormValid()}
          >
            <Text style={[styles.buttonText, isFormValid() ? styles.buttonTextValid : styles.buttonTextDisabled]}>
              {isFormValid() ? '✓ Form Complete' : 'Complete All Fields'}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#333',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    color: '#666',
  },
  fieldContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    backgroundColor: '#fff',
  },
  inputError: {
    borderColor: '#e74c3c',
  },
  inputValid: {
    borderColor: '#27ae60',
  },
  helpText: {
    fontSize: 12,
    color: '#666',
    marginTop: 5,
  },
  errorText: {
    fontSize: 14,
    color: '#e74c3c',
    marginTop: 5,
  },
  successText: {
    fontSize: 14,
    color: '#27ae60',
    marginTop: 5,
  },
  statusContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  button: {
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    minWidth: 200,
    alignItems: 'center',
  },
  buttonValid: {
    backgroundColor: '#27ae60',
  },
  buttonDisabled: {
    backgroundColor: '#bdc3c7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '600',
  },
  buttonTextValid: {
    color: '#fff',
  },
  buttonTextDisabled: {
    color: '#7f8c8d',
  },
});
