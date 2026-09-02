import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppShell from '../../components/appshell';

export default function DesafiosScreen() {

    return (
        <AppShell titulo="Desafios" paginaAtiva="desafios">
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Text>Desafios Content</Text>
            </ScrollView>
        </AppShell>
    );
}

const styles = StyleSheet.create({
    content:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
})