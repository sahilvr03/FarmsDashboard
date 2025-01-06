import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { ImageBackground } from 'react-native';

const FarmDashboard = () => {
  const fields = [
    { id: 1, name: 'My Farm', image: require('./../assets/images/farms.png') },
    { id: 2, name: 'Crops', image: require('./../assets/images/farms.png') },
    { id: 3, name: 'Inventory', image: require('./../assets/images/farms.png') },
    { id: 4, name: 'Equipment', image: require('./../assets/images/farms.png') },
    
    // Add more fields as needed
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      <Image source={require('./../assets/images/user.png')} style={styles.menuIcon2} />
        <Text style={styles.title}>Vijay</Text>
        <TouchableOpacity style={styles.menuButton}>
          <Text style={styles.menuIcon}>⋮</Text>
        </TouchableOpacity>
      </View>

      {/* Weather Info */}
      <View style={styles.weatherCard}>
        <ImageBackground
          source={require('./../assets/images/weather-bg.jpeg')}
          style={styles.weatherCardBackground}
          imageStyle={{ borderRadius: 15 }}
        >
          <View style={styles.overlay}>
            <Text style={styles.temperature}>18°C</Text>
            <Text style={styles.weatherCondition}>Cloudy</Text>
            <View style={styles.weatherDetails}>
              <View style={styles.weatherDetail}>
                <Text style={styles.detailLabel}>Humidity</Text>
                <Text style={styles.detailValue}>Good</Text>
              </View>
              <View style={styles.weatherDetail}>
                <Text style={styles.detailLabel}>Soil Moisture</Text>
                <Text style={styles.detailValue}>Good</Text>
              </View>
              <View style={styles.weatherDetail}>
                <Text style={styles.detailLabel}>Precipitation</Text>
                <Text style={styles.detailValue}>Low</Text>
              </View>
            </View>
          </View>
        </ImageBackground>
      </View>

      {/* Manage Your Fields */}
      <View style={styles.Farms}>
        <Text style={styles.sectionTitle}>Manage your fields</Text>
        <ScrollView>
          {fields.map((field) => (
            <View key={field.id} style={styles.fieldCard}>
              <Image source={field.image} style={styles.fieldIcon} />
              <Text style={styles.fieldLabel}>{field.name}</Text>
              <TouchableOpacity style={styles.fieldMenuButton}>
              <Image source={require('./../assets/images/loc.png')} style={styles.menuIcon} />
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Farms: {
    backgroundColor: '#F5F5F5',
    borderRadius: 30,
    width: '100%',
    padding: 20,
    flex: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  menuButton: {
    padding: 5,
  },
  menuIcon: {
    fontSize: 20,
  },
  weatherCard: {
    borderRadius: 15,
    overflow: 'hidden',
    marginBottom: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 5 },
  },
  weatherCardBackground: {
    height: 200,
    justifyContent: 'center',
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    borderRadius: 15,
    padding: 20,
    justifyContent: 'space-between',
  },
  temperature: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#FFCC00',
  },
  weatherCondition: {
    fontSize: 20,
    color: 'white',
    marginBottom: 15,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  weatherDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  weatherDetail: {
    alignItems: 'center',
  },
  detailLabel: {
    fontSize: 14,
    color: '#E0E0E0',
  },
  detailValue: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#4CAF50',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: 'gray',
  },
  fieldCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  fieldIcon: {
    width: 50,
    height: 50,
    marginRight: 15,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#424242',
    flex: 1,
  },
  fieldMenuButton: {
    padding: 5,
  },
  fieldMenuIcon: {
    fontSize: 18,
    color: '#9E9E9E',
  },
  menuIcon2:{
    height:30,
    width:30
  }
});

export default FarmDashboard;
