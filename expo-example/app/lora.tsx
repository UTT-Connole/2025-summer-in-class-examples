import {useContext} from 'react';
import { Pressable, Text, StyleSheet, ScrollView, Button} from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {ThemeContext} from '../contexts/theme-context'; 
import ThemeText from '../components/ThemeText';

const LoraPage = () => {
    const {theme, setTheme} = useContext(ThemeContext);
    console.log('LoraPage theme:', theme);
    const params = useLocalSearchParams();
    console.log('LoraPage params:', params);
    return (

        <ScrollView contentContainerStyle={styles.container}>
            <Pressable onPress={() => setTheme(theme === 'lightblue' ? 'red' : 'lightblue')}>
                <Text>{theme === 'lightblue' ? 'Switch to Red' : 'Switch to Light Blue'}</Text>
            </Pressable>

            <FontAwesome.Button name="wifi" onPress={() => console.log("HEY!")}>Hey all</FontAwesome.Button>
            <Button title="My Button" onPress={() => console.log("Button Pressed!")} />



            <Text style={styles.title}>LoRa (Long Range)</Text>
            <ThemeText>
                LoRa (Long Range) is a wireless communication technology designed for long-range, low-power, and low-data-rate applications. It is widely used in Internet of Things (IoT) networks, enabling devices to communicate over distances of several kilometers while consuming minimal power.
            </ThemeText>
            <Text style={styles.heading}>Key Features</Text>
            <Text style={styles.listItem}>• Long-range communication (up to 15 km in rural areas)</Text>
            <Text style={styles.listItem}>• Low power consumption</Text>
            <Text style={styles.listItem}>• Operates in unlicensed ISM bands (e.g., 868 MHz, 915 MHz)</Text>
            <Text style={styles.listItem}>• Supports large numbers of devices</Text>
            <Text style={styles.listItem}>• Robust against interference</Text>
            <Text style={styles.heading}>Common Applications</Text>
            <Text style={styles.listItem}>• Smart agriculture</Text>
            <Text style={styles.listItem}>• Environmental monitoring</Text>
            <Text style={styles.listItem}>• Asset tracking</Text>
            <Text style={styles.listItem}>• Smart cities</Text>
            <Text style={styles.listItem}>• Industrial IoT</Text>
            <Text style={styles.paragraph}>
                LoRa is often used with the LoRaWAN protocol, which adds networking and security features for large-scale deployments.
            </Text>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 24,
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        marginBottom: 16,
        color: '#2d3748',
    },
    heading: {
        fontSize: 20,
        fontWeight: '600',
        marginTop: 20,
        marginBottom: 8,
        color: '#4a5568',
    },
    paragraph: {
        fontSize: 16,
        marginBottom: 12,
        color: '#2d3748',
    },
    listItem: {
        fontSize: 16,
        marginLeft: 12,
        marginBottom: 6,
        color: '#2d3748',
    },
});

export default LoraPage;