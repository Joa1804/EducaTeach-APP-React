import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppShell from '../../app/(tabs)/appshell';

export default function AprenderScreen() {
  return (
    <AppShell titulo="Aprender" paginaAtiva="aprender">
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.painelRow}>
          {/* EDITOR DE BLOCOS */}
          <View style={styles.editorCard}>
            <View style={styles.editorHeader}>
              <Text style={styles.editorTitulo}>Editor de Blocos</Text>
              <TouchableOpacity style={styles.executarButton}>
                <Ionicons name="play" size={16} color="#fff" />
                <Text style={styles.executarButtonText}>Executar</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.blocosRow}>
              <BlocoCategoria icon="arrow-forward" label="Mover" cor="#DCE7FF" corIcone="#2F6FED" />
              <BlocoCategoria icon="repeat" label="Repetir" cor="#DCF5E7" corIcone="#2FA84F" />
              <BlocoCategoria icon="help" label="Se" cor="#FFE9D6" corIcone="#E08A2C" />
              <BlocoCategoria icon="cube" label="Variável" cor="#E3F5D8" corIcone="#5AA633" />
            </View>

            <View style={styles.dropZone}>
              <Text style={styles.dropZoneText}>Arraste os blocos aqui{'\n'}para criar seu código!</Text>
            </View>
          </View>

          {/* SIMULADOR */}
          <View style={styles.simuladorCard}>
            <Text style={styles.simuladorTitulo}>Simulador</Text>
            <View style={styles.simuladorArea}>
              <View style={styles.roboIcone}>
                <Ionicons name="hardware-chip-outline" size={40} color="#673AB7" />
              </View>
              <Text style={styles.simuladorPlaceholder}>Seu projeto aparecerá aqui!</Text>
            </View>
            <TouchableOpacity style={styles.resetButton}>
              <Text style={styles.resetButtonText}>Reset</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </AppShell>
  );
}

function BlocoCategoria({
  icon,
  label,
  cor,
  corIcone,
}: {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  cor: string;
  corIcone: string;
}) {
  return (
    <TouchableOpacity style={[styles.blocoCategoria, { backgroundColor: cor }]}>
      <Ionicons name={icon} size={22} color={corIcone} />
      <Text style={styles.blocoCategoriaLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const PURPLE = '#673AB7';
const BLUE = '#3F51B5';

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { padding: 25, paddingBottom: 40 },

  // Em telas estreitas isso empilha; em telas largas fica lado a lado (flexWrap cuida disso)
  painelRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 20 },

  editorCard: {
    flex: 1,
    minWidth: 280,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  editorHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  editorTitulo: { fontSize: 18, fontWeight: 'bold', color: '#212121' },
  executarButton: {
    flexDirection: 'row', alignItems: 'center', gap: 6,
    backgroundColor: '#2FA84F', paddingVertical: 8, paddingHorizontal: 14, borderRadius: 10,
  },
  executarButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 13 },

  blocosRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 16 },
  blocoCategoria: { width: 64, height: 64, borderRadius: 14, alignItems: 'center', justifyContent: 'center', gap: 4 },
  blocoCategoriaLabel: { fontSize: 11, fontWeight: '600', color: '#424242' },

  dropZone: {
    flex: 1,
    minHeight: 180,
    borderWidth: 2,
    borderColor: '#D9D9E3',
    borderStyle: 'dashed',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  dropZoneText: { color: '#9E9E9E', textAlign: 'center', fontSize: 14 },

  simuladorCard: {
    flex: 1,
    minWidth: 260,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  simuladorTitulo: { fontSize: 18, fontWeight: 'bold', color: '#212121', marginBottom: 16 },
  simuladorArea: {
    flex: 1,
    minHeight: 220,
    backgroundColor: '#F5F5FA',
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  roboIcone: {
    width: 72, height: 72, borderRadius: 36,
    backgroundColor: '#EDE7F6', alignItems: 'center', justifyContent: 'center', marginBottom: 12,
  },
  simuladorPlaceholder: { color: '#9E9E9E', fontSize: 14 },
  resetButton: { backgroundColor: BLUE, borderRadius: 12, paddingVertical: 12, alignItems: 'center' },
  resetButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});