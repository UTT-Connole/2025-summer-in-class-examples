import React, { useState } from 'react';
import { View, Image, FlatList, TouchableOpacity, StyleSheet, Modal, Text } from 'react-native';
import { Button } from '@expo/ui/jetpack-compose';
import { Picker } from '@expo/ui/jetpack-compose';


const pictures = [
    { id: '1', uri: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
    { id: '2', uri: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca' },
    { id: '3', uri: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308' },
    // Add more image URIs as needed
];

export default function DocPictureGallery() {
    const [selected, setSelected] = useState<string | null>(null);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Document Picture Gallery</Text>
            <Button>Android Button</Button>
            <Picker
                options={['$', '$$', '$$$', '$$$$']}
                selectedIndex={2}
                variant="segmented"
            />
        
            <FlatList
                data={pictures}
                keyExtractor={item => item.id}
                numColumns={2}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => setSelected(item.uri)}>
                        <Image source={{ uri: item.uri }} style={styles.image} />
                    </TouchableOpacity>
                )}
                contentContainerStyle={styles.list}
            />
            <Modal visible={!!selected} transparent animationType="fade">
                <View style={styles.modalBackground}>
                    <TouchableOpacity style={styles.modalClose} onPress={() => setSelected(null)}>
                        <Text style={styles.closeText}>Close</Text>
                    </TouchableOpacity>
                    {selected && (
                        <Image source={{ uri: selected }} style={styles.modalImage} resizeMode="contain" />
                    )}
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', paddingTop: 40 },
    title: { fontSize: 22, fontWeight: 'bold', textAlign: 'center', marginBottom: 16 },
    list: { paddingHorizontal: 12 },
    image: {
        width: 160,
        height: 120,
        margin: 8,
        borderRadius: 8,
        backgroundColor: '#eee',
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.85)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalImage: {
        width: '90%',
        height: '70%',
        borderRadius: 12,
    },
    modalClose: {
        position: 'absolute',
        top: 40,
        right: 24,
        zIndex: 2,
        backgroundColor: '#fff',
        padding: 8,
        borderRadius: 20,
    },
    closeText: { fontSize: 16, color: '#333' },
});