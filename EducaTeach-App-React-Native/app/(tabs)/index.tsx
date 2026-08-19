import { View, Text, StyleSheet, ScrollView, TouchableOpacity, } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

export default function HomeScreen() {
  const [menuAberto, setMenuAberto] = useState(true);
  return (
    <View style={styles.app}>

    {/* MENU LATERAL */}
    {menuAberto && (
      <View style={styles.sidebar}>

      {/* Logo */}
      <View style={styles.logoArea}>
        <View style={styles.logoIcon}>
          <Ionicons name='code-slash' size={24} color={'#fff'}></Ionicons>
        </View>

        <text style={styles.logoText}>
          educar Teach
        </text>
      </View>

      {/* Menu */}
      <View style={styles.menu}>
        <MenuItem icon="home" title="Início" ativo />
        <MenuItem icon="book" title="Aprender" />
        <MenuItem icon="folder-open" title="Meus Projetos" />
        <MenuItem icon="trophy" title="Desafios" />
        <MenuItem icon="podium" title="Ranking" />
        <MenuItem icon="help-circle" title="Ajuda" />
      </View>

      {/* Rodapé */}
      <View style={styles.sidebarFooter}>
        <Ionicons name='settings-outline' size={20} color={'#757575'}/>
        <Text style={styles.footerText}>
          Configuração
        </Text>
      </View>

      </View>
    )}

    {/* ÁREA PRINCIPAL */}
    <View style={styles.main}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => setMenuAberto(!menuAberto)} style={styles.menuButton}>
          <Ionicons name={menuAberto ? 'menu' : 'menu-outline'} size={26} color={PURPLE}/>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>
          Inicio
        </Text>
      </View>
      {/* CONTEÚDO */}
      <ScrollView style={styles.container} contentContainerStyle={styles.content}>

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
    </View>

  </View>

      
  );
}

function MenuItem({ icon, title, ativo = false,}: { icon: keyof typeof Ionicons.glyphMap; title: string; ativo?: boolean;}) { return (
    <TouchableOpacity
      style={[ styles.menuItem, ativo && styles.menuItemAtivo, ]} >
      <Ionicons name={icon} size={21} color={ativo ? '#fff' : '#555'} />
      <Text style={[ styles.menuItemText, ativo && styles.menuItemTextAtivo,]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

function TrilhaCard({ numero, titulo, info, progresso,}: { numero: number; titulo: string; info: string; progresso: number; }) {
  return (
    <View style={styles.trilhaCard}>
      <View style={styles.trilhaCardTop}>
        <View style={styles.trilhaNumero}>
          <Text style={styles.trilhaNumeroText}>
            {numero}
          </Text>
        </View>

        <View style={{ flex: 1 }}>
          <Text style={styles.trilhaCardTitulo}>
            {titulo}
          </Text>
          <Text style={styles.trilhaCardInfo}>
            {info}
          </Text>
        </View>
        <Text style={styles.trilhaCardProgresso}>
          {progresso}%
        </Text>
      </View>

      <View style={styles.progressBarBg}>
        <View style={[ styles.progressBarFill, { width: `${progresso}%`, }, ]} />
      </View>
    </View>
  );
}

const PURPLE = '#673AB7';
const BLUE = '#3F51B5';

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#F5F5F7',
  },
  sidebar: {
    width: 220,
    backgroundColor: '#FFFFFF',
    borderRightWidth: 1,
    borderRightColor: '#E5E5E5',
    paddingHorizontal: 14,
    paddingTop: 40,
    paddingBottom: 20,
  },
  logoArea: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    marginBottom: 35,
  },
  logoIcon: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: PURPLE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  logoText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: PURPLE,
  },
  menu: {
    gap: 7,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 13,
    paddingHorizontal: 12,
    borderRadius: 12,
  },
  menuItemAtivo: {
    backgroundColor: PURPLE,
  },
  menuItemText: {
    marginLeft: 12,
    fontSize: 14,
    color: '#555',
    fontWeight: '500',
  },
  menuItemTextAtivo: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  sidebarFooter: {
    marginTop: 'auto',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 12,
  },
  footerText: {
    marginLeft: 12,
    color: '#757575',
    fontSize: 13,
  },
  main: {
    flex: 1,
  },
  header: {
    height: 70,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E8E8E8',
  },
  menuButton: {
    marginRight: 15,
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#212121',
  },
  container: {
    flex: 1,
  },
  content: {
    padding: 25,
    paddingBottom: 40,
  },
  greetingCard: {
    backgroundColor: PURPLE,
    borderRadius: 20,
    padding: 24,
    marginBottom: 20,
  },
  greeting: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#fff',
  },
  greetingSubtitle: {
    color: '#E0D6F5',
    marginTop: 4,
    marginBottom: 20,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 12,
  },
  statBox: {
    backgroundColor: 'rgba(255,255,255,0.15)',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 20,
    flex: 1,
  },
  statValue: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  statLabel: {
    color: '#E0D6F5',
    fontSize: 13,
    marginTop: 2,
  },
  trilhaSection: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  trilhaHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 16,
  },
  trilhaTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#212121',
  },
  trilhaCard: {
    backgroundColor: '#F0F2FF',
    borderRadius: 14,
    padding: 16,
    marginBottom: 12,
  },
  trilhaCardTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  trilhaNumero: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: BLUE,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  trilhaNumeroText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  trilhaCardTitulo: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#212121',
  },
  trilhaCardInfo: {
    color: '#757575',
    fontSize: 13,
    marginTop: 2,
  },
  trilhaCardProgresso: {
    fontWeight: 'bold',
    color: BLUE,
    fontSize: 15,
  },
  progressBarBg: {
    height: 6,
    backgroundColor: '#D9DEFF',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBarFill: {
    height: '100%',
    backgroundColor: BLUE,
  },
  challengeCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  challengeIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    backgroundColor: '#EEE9FF',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  challengeContent: {
    flex: 1,
  },
  challengeTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    color: '#212121',
  },
  challengeText: {
    fontSize: 13,
    color: '#757575',
    marginTop: 3,
  },
});