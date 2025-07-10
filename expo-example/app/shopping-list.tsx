
import { Text, StyleSheet, View, Button, FlatList} from 'react-native';
import ThemeText from '../components/ThemeText';

const createRandomShoppingList = () => {
    let shoppingList = [
        'Milk',
        'Bread',
        'Eggs',
        'Cheese',
        'Fruits'
    ];
    for (let i = 0; i < 10000; i++) {
        shoppingList.push(`Item ${i + 1}`);

    }
    return shoppingList
}

const ListItem = ({ item }) => (
                <Text  style={styles.listItem}>
                    <Button title={`Buy ${item}`} onPress={() => console.log(`Buying ${item}`)} />
                    {item}
                </Text>
);

const ShoppingList = () => {
    const shoppingList = createRandomShoppingList();
    return (
        <View>

            <Text style={styles.title}>Shopping List</Text>
            <ThemeText>
                Here are some items you might want to buy:
            </ThemeText>

             <FlatList
                 data={shoppingList}
                 renderItem={({item}) => <ListItem item={item} />}
                 keyExtractor={(item, index) => index.toString()}
             />
        </View>
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
    listItem: {
        fontSize: 18,
        marginVertical: 4,
        color: '#4a5568',
    },
});

export default ShoppingList;