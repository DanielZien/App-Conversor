import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Button } from './src/components/Button/Index';
import { styles } from './App.styles';
import { currencies } from './src/constants/currecies';
import { Input } from './src/components/Input/Index';
import { ResultCard } from './src/components/ResultCard/index';

export default function App() {
  return (

    <KeyboardAvoidingView style={styles.container} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <ScrollView style={styles.scroolView}>
        <View style={styles.content}>
          <StatusBar />

          <View style={styles.header}>
            <Text style={styles.title}>Conversor de Moedas</Text>
            <Text style={styles.subTitle}>
              Converte valores entre diferentes moedasds hahkdkdkkd
            </Text>
          </View>

          <View style={styles.card}>
            <Text style={styles.label}>De: </Text>
            <View style={styles.currencyGrid}>

              {currencies.map(currency => (
                <Button variali="primary" key={currencies.code} currency={currency}></Button>
              ))}



            </View>
            <Input label="Valor: "></Input>

            <TouchableOpacity style={styles.swapButton}>
              <Text style={styles.swapButtonText}>
                ↑↓
              </Text>
            </TouchableOpacity>

            <Text style={styles.label} >Para: </Text>
            <View style={styles.currencyGrid}>
              {currencies.map(currency => (
                <Button variali="secondary" key={currencies.code} currency={currency}></Button>
              ))}
            </View>
          </View>


          <TouchableOpacity style={styles.convertButton}>
            <Text style={styles.convertButtonText}>
              Converter
            </Text>
          </TouchableOpacity>

          {/* <ResultCard></ResultCard> */}
          <ResultCard></ResultCard>
        </View>


      </ScrollView>
    </KeyboardAvoidingView>

  );
}


