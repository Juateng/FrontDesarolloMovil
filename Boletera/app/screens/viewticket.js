import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';

const ViewTicket = () => {
  const [email, setEmail] = useState('');
  const [eventName, setEventName] = useState('');
  const [ticketInfo, setTicketInfo] = useState(null);
  const [loading, setLoading] = useState(false); // Estado de carga

  const fetchTicketInfo = async () => {
    setLoading(true); // Activa el estado de carga
    setTicketInfo(null); // Limpia cualquier ticket previo

    try {
      const response = await fetch('http://tu-backend/ticket-info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          name: eventName,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setTicketInfo(data.ticket);
      } else {
        Alert.alert('Error', data.msg || 'No se encontró información del ticket');
        setTicketInfo(null);
      }
    } catch (error) {
      Alert.alert('Error', 'No se pudo conectar con el servidor');
      setTicketInfo(null);
    } finally {
      setLoading(false); // Desactiva el estado de carga
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Información del Ticket</Text>

      {/* Formulario de entrada */}
      <TextInput
        style={styles.input}
        placeholder="Correo electrónico"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Nombre del evento"
        value={eventName}
        onChangeText={setEventName}
      />
      <Button title="Buscar Ticket" onPress={fetchTicketInfo} color="#007BFF" />

      {/* Muestra la información del ticket o mensajes de estado */}
      {loading ? (
        <Text style={styles.loadingText}>Buscando información del ticket...</Text>
      ) : ticketInfo ? (
        <View style={styles.ticketCard}>
          <Text style={styles.ticketText}>Evento: {ticketInfo.name}</Text>
          <Text style={styles.ticketText}>Fecha: {ticketInfo.event_date}</Text>
          <Text style={styles.ticketText}>Lugar: {ticketInfo.event_place}</Text>
          <Text style={styles.ticketText}>Descripción: {ticketInfo.event_description}</Text>
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#f7f7f7',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  loadingText: {
    fontSize: 16,
    color: '#888',
    textAlign: 'center',
    marginTop: 20,
  },
  ticketCard: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  ticketText: {
    fontSize: 16,
    marginBottom: 10,
  },
});

export default ViewTicket;
