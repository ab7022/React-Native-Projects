import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import * as Yup from 'yup';
import BouncyCheckBox from 'react-native-bouncy-checkbox';
import {Formik} from 'formik';

const passwordSchema = Yup.object().shape({
  passwordLength: Yup.number()
    .min(4, 'Should be mnimum 4 characters')
    .max(10, 'Should be maximum 10 characters')
    .required('Password is required'),
});
export default function App() {
  const [password, setPassword] = useState('');
  const [isPasswordGenerated, setIsPasswordGenerated] = useState(false);
  const [lowerCase, setLowerCase] = useState(true);
  const [upperCase, setUpperCase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);

  const generatePasswordString = (passwordLength: number) => {
    let characterList = '';
    const lowerCaseCharacters = 'abcdefghijklmnopqrstuvwxyz';
    const upperCaseCharacters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const digitCharacters = '0123456789';
    const specialCharacters = '!@#$%^&*()_+';

    if (lowerCase) {
      characterList += lowerCaseCharacters;
    }
    if (upperCase) {
      characterList += upperCaseCharacters;
    }
    if (numbers) {
      characterList += digitCharacters;
    }
    if (symbols) {
      characterList += specialCharacters;
    }
    setPassword(createPassword(characterList, passwordLength));
    setIsPasswordGenerated(true);
    return createPassword(characterList, passwordLength);
  };

  const createPassword = (characters: string, passwordLength: number) => {
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characters.length);
      result += characters.charAt(characterIndex);
    }
    return result;
  };

  const resetPasswordState = () => {
    setPassword('');
    setIsPasswordGenerated(false);
    setLowerCase(true);
    setUpperCase(false);
    setNumbers(false);
    setSymbols(false);
  };

  return (
    <ScrollView keyboardShouldPersistTaps="handled">
      <SafeAreaView style={styles.appContainer}>
        <View style={styles.formContainer}>
          <Text style={styles.title}>Password Generator</Text>
          <Formik
            initialValues={{passwordLength: ''}}
            validationSchema={passwordSchema}
            onSubmit={values => {
              console.log(values);

              generatePasswordString(Number(values.passwordLength));
            }}>
            {({
              values,
              errors,
              touched,
              isValid,
              handleChange,
              handleSubmit,
              handleReset,
              /* and other goodies */
            }) => (
              <>
                <View style={styles.inputWrapper}>
                  <View style={styles.inputColumn}>
                    <Text style={styles.heading}>Password Length</Text>
                    {touched.passwordLength && errors.passwordLength && (
                      <Text style={styles.errorText}>
                        {errors.passwordLength}
                      </Text>
                    )}
                    <TextInput
                      style={styles.inputStyle}
                      value={values.passwordLength}
                      onChangeText={handleChange('passwordLength')}
                      placeholder="Password Length"
                      keyboardType="numeric"></TextInput>
                  </View>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include lowerCase</Text>
                  <BouncyCheckBox
                    isChecked={lowerCase}
                    onPress={() => {
                      setLowerCase(!lowerCase);
                    }}
                    fillColor="#29AB87"></BouncyCheckBox>
                </View>

           
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include upperCase</Text>
                  <BouncyCheckBox
                    isChecked={upperCase}
                    onPress={() => {
                      setUpperCase(!upperCase);
                    }}
                    fillColor="#FED85D"></BouncyCheckBox>
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include Numbers</Text>
                  <BouncyCheckBox
                    isChecked={numbers}
                    onPress={() => {
                      setNumbers(!numbers);
                    }}
                    fillColor="#C9A0DC"></BouncyCheckBox>
                </View>

                <View style={styles.inputWrapper}>
                  <Text style={styles.heading}>Include symbols</Text>
                  <BouncyCheckBox
                    isChecked={symbols}
                    onPress={() => {
                      setSymbols(!symbols);
                    }}
                    fillColor="#FC80A5"></BouncyCheckBox>
                </View>
             

                <View style={styles.formActions}>
                  <TouchableOpacity disabled={!isValid} style={styles.primaryBtn} 
                  onPress={()=>{
                    handleSubmit();
                  }}>
                    <Text>Generate Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.secondaryBtn} onPress={()=>{
                    handleReset();
                    resetPasswordState();
                  }}>
                    <Text style={styles.secondaryBtnTxt}>Reset</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </Formik>
          {isPasswordGenerated? (
            <View style={[styles.card, styles.cardElevated]}>
              <Text style={styles.generatedPassword} selectable>{password}</Text>
              </View>
          ) : null}
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    flexDirection: 'column',
    height: '120%',
    width: '100%',
    backgroundColor: '#F0F2F5', // Light, modern background color for the entire app
      },
  formContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 8, // Subtle shadow to elevate form card
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
    marginBottom: 20,
    letterSpacing: 0.5, // More spacing for clean typography
  },
  heading: {
    
    fontSize: 18,
    fontWeight: '500',
    color: '#34495E',
    marginBottom: 8,
  },
  inputWrapper: {
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent:'space-evenly',
    alignItems:'center',
  },
  inputColumn: {
    flexDirection: 'column',
    width: '70%',
  },
  inputStyle: {
    padding: 12,
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#D1D8E0',
    backgroundColor: '#F4F6F9',
    fontSize: 16,
    color: '#2C3A47',
  },
  errorText: {
    fontSize: 12,
    color: '#E74C3C',
    marginTop: 4,
  },
  formActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  primaryBtn: {
    width: '45%',
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#3498DB', // A more vibrant button color
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5, // Button shadow
  },
  primaryBtnTxt: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
  },
  secondaryBtn: {
    width: '45%',
    padding: 14,
    borderRadius: 10,
    backgroundColor: '#BDC3C7',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  secondaryBtnTxt: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: '#2C3A47',
  },
  card: {
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#ECF0F1',
    marginTop: 30,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 6,
  },
  cardElevated: {
    backgroundColor: '#FFFFFF',
  },
  generatedPassword: {
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
    color: '#2C3A47',
    letterSpacing: 1.2,
  },
});
