import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppShell from '../../app/(tabs)/appshell';

export default function RankingScreen() {
    return (
        <AppShell titulo="Ranking" paginaAtiva="ranking">
            <ScrollView style={styles.container} contentContainerStyle={styles.content}>
                <Text>Ranking Content</Text>
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