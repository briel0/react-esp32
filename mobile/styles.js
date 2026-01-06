import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#374B4A',
    alignItems: 'center',
    justifyContent: 'center',
  },

  modernButton: {
    backgroundColor: '#C5FFFD',
    paddingVertical: 18,
    paddingHorizontal: 40
  },

  buttonText: {
    color: 'black', // Texto escuro para contraste
    fontSize: 18,
    fontWeight: '800', // Bem negrito
    textTransform: 'uppercase', // Estilo industrial
    letterSpacing: 2 // Espaçamento entre letras
  },

});