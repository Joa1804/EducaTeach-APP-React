import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      {/* Header*/}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>CodeKids</Text>
      </View>

      {/* Card de saudação com gradiente*/}
      <View style={styles.greetingCard}>
        <Text style={styles.greeting}>Olá, Maria Silva! 👋</Text>
        <Text style={styles.greetingSubtitle}>Continue sua jornada de programação!</Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>1250</Text>
            <Text style={styles.statLabel}>Pontos</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>Nível 5</Text>
            <Text style={styles.statLabel}>Progresso</Text>
          </View>
        </View>
      </View>

      {/* Trilha de aprendizado */}
      <View style={styles.trilhaSection}>
        <View style={styles.trilhaHeader}>
          <Ionicons name="book" size={20} color="#212121" />
          <Text style={styles.trilhaTitle}>Sua Trilha de Aprendizado</Text>
        </View>

        <TrilhaCard numero={1} titulo="Comandos Básicos" info="8 módulos · Iniciante" progresso={100} />
        <TrilhaCard numero={2} titulo="Repetições e Loops" info="6 módulos · Iniciante" progresso={60} />
      </View>
    </ScrollView>
  );
}

function TrilhaCard({ numero, titulo, info, progresso }: { numero: number; titulo: string; info: string; progresso: number }) {
  return (
    <View style={styles.trilhaCard}>
      <View style={styles.trilhaCardTop}>
        <View style={styles.trilhaNumero}>
          <Text style={styles.trilhaNumeroText}>{numero}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Text style={styles.trilhaCardTitulo}>{titulo}</Text>
          <Text style={styles.trilhaCardInfo}>{info}</Text>
        </View>
        <Text style={styles.trilhaCardProgresso}>{progresso}%</Text>
      </View>
      <View style={styles.progressBarBg}>
        <View style={[styles.progressBarFill, { width: `${progresso}%` }]} />
      </View>
    </View>
  );
}

const PURPLE = '#673AB7';
const BLUE = '#3F51B5';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F5F5F7' },
  content: { padding: 20, paddingTop: 60, paddingBottom: 40 },
  header: { marginBottom: 20 },
  headerTitle: { fontSize: 24, fontWeight: 'bold', color: PURPLE },

  greetingCard: {
    backgroundColor: PURPLE, 
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
  },
  greeting: { fontSize: 22, fontWeight: 'bold', color: '#fff' },
  greetingSubtitle: { color: '#E0D6F5', marginTop: 4, marginBottom: 20 },
  statsRow: { flexDirection: 'row', gap: 12 },
  statBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
  },
  statValue: { color: '#fff', fontSize: 20, fontWeight: 'bold' },
  statLabel: { color: '#E0D6F5', fontSize: 13, marginTop: 2 },

  trilhaSection: { backgroundColor: '#fff', borderRadius: 20, padding: 20 },
  trilhaHeader: { flexDirection: 'row', alignItems: 'center', gap: 8, marginBottom: 16 },
  trilhaTitle: { fontSize: 18, fontWeight: 'bold', color: '#212121' },

  trilhaCard: {
    backgroundColor: '#F0F2FF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  trilhaCardTop: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  trilhaNumero: {
    width: 32, height: 32, borderRadius: 16,
    backgroundColor: BLUE, alignItems: 'center', justifyContent: 'center',
    marginRight: 12,
  },
  trilhaNumeroText: { color: '#fff', fontWeight: 'bold' },
  trilhaCardTitulo: { fontWeight: 'bold', fontSize: 15, color: '#212121' },
  trilhaCardInfo: { color: '#757575', fontSize: 13, marginTop: 2 },
  trilhaCardProgresso: { fontWeight: 'bold', color: BLUE, fontSize: 15 },
  progressBarBg: { height: 6, backgroundColor: '#D9DEFF', borderRadius: 3, overflow: 'hidden' },
  progressBarFill: { height: '100%', backgroundColor: BLUE },
});