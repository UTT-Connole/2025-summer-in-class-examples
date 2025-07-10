import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

interface ValidationErrors {
  name?: string;
  type?: string;
  color?: string;
}

export default function RubberDuckies() {
  const [formData, setFormData] = useState({
    name: '',
    type: '',
    color: ''
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState({
    name: false,
    type: false,
    color: false
  });

  const validateField = (fieldName: string, value: string): string | undefined => {
    switch (fieldName) {
      case 'name':
        if (!value.trim()) return 'Name is required';
        if (value.length < 2) return 'Name must be at least 2 characters';
        if (value.length > 50) return 'Name must be less than 50 characters';
        return undefined;
      
      case 'type':
        if (!value.trim()) return 'Type is required';
        const validTypes = ['classic', 'superhero', 'animal', 'character', 'sports', 'holiday'];
        if (!validTypes.includes(value.toLowerCase())) {
          return 'Type must be one of: classic, superhero, animal, character, sports, holiday';
        }
        return undefined;
      
      case 'color':
        if (!value.trim()) return 'Color is required';
        const colorPattern = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$|^[a-zA-Z]+$/;
        if (!colorPattern.test(value)) {
          return 'Color must be a valid color name or hex code (e.g., "yellow" or "#FFD700")';
        }
        return undefined;
      
      default:
        return undefined;
    }
  };

  const handleInputChange = (fieldName: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));

    // Real-time validation
    const error = validateField(fieldName, value);
    setErrors(prev => ({
      ...prev,
      [fieldName]: error
    }));
  };

  const handleBlur = (fieldName: string) => {
    setTouched(prev => ({
      ...prev,
      [fieldName]: true
    }));
  };

  const isFormValid = () => {
    return Object.values(errors).every(error => !error) && 
           Object.values(formData).every(value => value.trim() !== '');
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

  return (
    <ScrollView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Add Your Rubber Ducky</Text>
        <Text style={styles.subtitle}>Tell us about your favorite rubber ducky!</Text>

        {/* Name Field */}
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

        {/* Type Field */}
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

        {/* Color Field */}
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

        {/* Form Status */}
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
