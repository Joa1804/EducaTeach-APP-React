import { View,Text,StyleSheet,ScrollView,TextInput,TouchableOpacity,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppShell from '../../components/appshell';

const BLUE = '#2563EB';

export default function DesafiosScreen() {

  return (
    <AppShell titulo="Desafios" paginaAtiva="desafios">
      <ScrollView style={styles.container} contentContainerStyle={styles.content} >

        {/* TÍTULO */}
        <Text style={styles.titulo}>
          Título da Atividade
        </Text>

        {/* DATA */}
        <Text style={styles.data}>
          Entrega: 00/00/0000
        </Text>


        {/* ENUNCIADO */}
        <Text style={styles.label}>
          Enunciado:
        </Text>

        <Text style={styles.enunciado}>
          Descrição da atividade aqui...
        </Text>


        {/* CAMPO DE RESPOSTA */}
        <Text style={styles.label}>
          Anexar Resolução (Código/Resposta):
        </Text>

        <TextInput style={styles.input} placeholder="Digite ou cole seu código aqui..." placeholderTextColor="#94A3B8" multiline textAlignVertical="top" />


        {/* ENVIAR */}
        <TouchableOpacity style={styles.botaoEnviar}>
          <Ionicons name="send" size={18} color="#FFFFFF" />

          <Text style={styles.botaoTexto}>
            Enviar Atividade
          </Text>
        </TouchableOpacity>


        {/* VOLTAR */}

        <TouchableOpacity style={styles.botaoVoltar}>
          <Ionicons name="arrow-back" size={18} color="#FFFFFF"/>
          <Text style={styles.botaoTexto}>
            Voltar
          </Text>
        </TouchableOpacity>

      </ScrollView>

    </AppShell>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F8FAFC',
  },

  content: {
    padding: 25,
    paddingBottom: 40,
  },
  titulo: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  data: {
    marginTop: 8,
    fontSize: 16,
    color: '#64748B',
  },
  label: {
    marginTop: 24,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1E293B',
  },

  enunciado: {
    marginTop: 8,
    fontSize: 15,
    lineHeight: 23,
    color: '#334155',
  },
  input: {
    minHeight: 250,
    marginTop: 8,
    padding: 15,

    backgroundColor: '#FFFFFF',

    borderWidth: 1,
    borderColor: '#CBD5E1',
    borderRadius: 10,

    fontSize: 15,
    color: '#1E293B',
  },
  botaoEnviar: {
    marginTop: 20,

    height: 48,

    backgroundColor: BLUE,
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoVoltar: {
    marginTop: 10,

    height: 48,

    backgroundColor: '#64748B',
    borderRadius: 8,

    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },


  botaoTexto: {
    marginLeft: 8,

    color: '#FFFFFF',
    fontSize: 15,
    fontWeight: 'bold',
  },

});