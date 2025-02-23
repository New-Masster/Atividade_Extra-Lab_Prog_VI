import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import { Button } from 'react-native-elements';

const { width, height } = Dimensions.get('window'); // Pegando as dimensões da tela

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcomeText}>Bem-vindo, Carlos</Text>
        <Text style={styles.spentText}>Você gastou hoje</Text>
        <Text style={styles.amountText}>R$ 500</Text>
        <View style={styles.periodContainer}>
          <Text style={styles.periodText}>ESCOLHER PERÍODO:</Text>
          <View style={styles.periodButtons}>
            <Text style={styles.periodButton}>Hoje</Text>
            <Text style={styles.periodButton}>Essa Semana</Text>
            <Text style={styles.periodButton}>Esse Mês</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.iconContainer}>
        <Button icon={{ name: 'flight', color: '#FFF' }} buttonStyle={styles.iconButton} />
        <Button icon={{ name: 'home', color: '#FFF' }} buttonStyle={styles.iconButton} />
        <Button icon={{ name: 'restaurant', color: '#FFF' }} buttonStyle={styles.iconButton} />
        <Button icon={{ name: 'directions-car', color: '#FFF' }} buttonStyle={styles.iconButton} />
        <Button icon={{ name: 'build', color: '#FFF' }} buttonStyle={styles.iconButton} />
      </View>

      <View style={styles.expenseContainer}>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseText}>Pizza (R$ 30)</Text>
          <Text style={styles.dateText}>20/01/2020</Text>
        </View>
        <View style={styles.expenseItem}>
          <Text style={styles.expenseText}>Coca-Cola (R$ 10)</Text>
          <Text style={styles.dateText}>20/01/2020</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({ 
  container: {
    flex: 1,
    backgroundColor: '#F7EBE8',
    width: '100%',
  },
  header: {
    backgroundColor: '#E54B4B',
    padding: 40,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    width: '100%',
  },
  welcomeText: {
    color: '#FFF',
    fontSize: width * 0.065, // Responsiva com base no tamanho da tela
    fontWeight: '500',
  },
  spentText: {
    color: '#FFF',
    marginTop: height * 0.05,
    fontSize: width * 0.04,
  },
  amountText: {
    color: '#FFF',
    fontSize: width * 0.08,
  },
  periodContainer: {
    marginTop: height * 0.05,
    alignItems: 'center',
  },
  periodText: {
    color: '#FFF',
    marginTop: height * 0.05,
    fontSize: width * 0.04,
    fontFamily: 'Arial',
  },
  periodButtons: {
    flexDirection: 'row',
    marginTop: height * 0.02,
  },
  periodButton: {
    color: '#FFF',
    fontSize: width * 0.035, // Diminui a fonte em dispositivos menores
    marginHorizontal: width * 0.08,
  },
  iconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: height * 0.05,
    paddingVertical: height * 0.02,
    flexWrap: 'wrap', // Incluido para ser responsivo
  },
  iconButton: {
    backgroundColor: '#444140',
    margin: width * 0.02, // Espaço entre os botões
  },
  expenseContainer: {
    marginTop: height * 0.05,
  },
  expenseItem: {
    backgroundColor: '#FFF',
    padding: height * 0.02,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.015,
  },
  expenseText: {
    color: '#444140',
    fontSize: width * 0.035, // Reduz a fonte para que o layout seja limpo
  },
  dateText: {
    color: '#444140',
    fontSize: width * 0.035,
  },
});

export default HomeScreen;
