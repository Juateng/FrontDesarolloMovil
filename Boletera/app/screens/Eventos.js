import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

function Eventos() {
  // Datos estáticos de eventos
  const eventos = [
    {
      id: 1,
      nombre: 'Concierto de Rock',
      fecha: '2024-11-30',
      lugar: 'Auditorio Nacional',
      descripcion: 'Un increíble concierto de bandas locales e internacionales.',
    },
    {
      id: 2,
      nombre: 'Festival de Cine',
      fecha: '2024-12-15',
      lugar: 'Cinepolis Galerías',
      descripcion: 'Un festival con películas de todo el mundo, desde cortometrajes hasta largometrajes.',
    },
    {
      id: 3,
      nombre: 'Exposición de Arte Moderno',
      fecha: '2024-12-01',
      lugar: 'Museo de Arte Contemporáneo',
      descripcion: 'Explora las obras de arte más innovadoras del año.',
    },
    // Puedes agregar más eventos aquí
  ];

  return (
    <ScrollView style={styles.container}>
      {eventos.map((evento) => (
        <TouchableOpacity key={evento.id} style={styles.card}>
          <Text style={styles.eventName}>{evento.nombre}</Text>
          <Text style={styles.eventDate}>{evento.fecha}</Text>
          <Text style={styles.eventLocation}>{evento.lugar}</Text>
          <Text style={styles.eventDescription}>{evento.descripcion}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Para dispositivos Android
  },
  eventName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  eventDate: {
    fontSize: 16,
    color: '#777',
    marginBottom: 5,
  },
  eventLocation: {
    fontSize: 16,
    color: '#777',
    marginBottom: 10,
  },
  eventDescription: {
    fontSize: 14,
    color: '#555',
  },
});

export default Eventos;

