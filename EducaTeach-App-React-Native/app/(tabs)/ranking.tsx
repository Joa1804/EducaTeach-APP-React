import {View, Text, StyleSheet,ScrollView,} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import AppShell from '../../components/appshell';

type Jogador = {
    posicao: number;
    nome: string;
    pontos: number;
    voce?: boolean;
};

const jogadores: Jogador[] = [
    {
        posicao: 1,
        nome: 'Pedro Santos',
        pontos: 2100,
    },
    {
        posicao: 2,
        nome: 'João Oliveira',
        pontos: 1850,
    },
    {
        posicao: 3,
        nome: 'Maria Silva',
        pontos: 1250,
        voce: true,
    },
    {
        posicao: 4,
        nome: 'Ana Costa',
        pontos: 1100,
    },
    {
        posicao: 5,
        nome: 'Carlos Souza',
        pontos: 980,
    },
    {
        posicao: 6,
        nome: 'Lucas Almeida',
        pontos: 850,
    },
];

export default function RankingScreen() {
    return (
        <AppShell titulo="Ranking" paginaAtiva="ranking">

            <ScrollView style={styles.container} contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
                {/* Cabeçalho */}
                <View style={styles.headerRanking}>
                    <Ionicons name="trophy" size={28} color="#EAB308"/>
                    <Text style={styles.tituloRanking}> Ranking dos Campeões </Text>
                </View>

                {/* Card do ranking */}
                <View style={styles.rankingCard}>

                    {jogadores.map((jogador) => (
                        <View key={jogador.posicao} style={[ styles.jogadorCard, jogador.voce && styles.jogadorVoce,]}>
                            {/* Posição */}
                            <View
                                style={[styles.posicao, jogador.posicao === 1 && styles.posicaoPrimeiro, jogador.posicao === 2 && styles.posicaoSegundo, jogador.posicao === 3 && styles.posicaoTerceiro, ]} >
                                <Text style={styles.posicaoTexto}> {jogador.posicao}</Text>
                            </View>
                            {/* Avatar */}
                            <View style={styles.avatar}>
                                <Ionicons name="person" size={24}  color="#64748B" />
                            </View>

                            {/* Informações */}
                            <View style={styles.infoJogador}>
                                <Text style={[ styles.nomeJogador, jogador.voce && styles.nomeVoce,]} >
                                    {jogador.nome}
                                    {jogador.voce ? ' (Você)' : ''}
                                </Text>

                                <Text style={styles.pontos}>
                                    {jogador.pontos} pontos
                                </Text>
                            </View>

                            {/* Medalha */}
                            {jogador.posicao <= 3 && (
                                <Ionicons name="trophy" size={24} color={
                                        jogador.posicao === 1
                                            ? '#F59E0B'
                                            : jogador.posicao === 2
                                            ? '#94A3B8'
                                            : '#EA580C'
                                    }
                                />
                            )}

                        </View>
                    ))}

                </View>

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
        padding: 20,
        paddingBottom: 30,
    },

    headerRanking: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
    },

    tituloRanking: {
        marginLeft: 8,
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E293B',
    },

    rankingCard: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 8,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.08,
        shadowRadius: 5,

        elevation: 2,
    },

    jogadorCard: {
        minHeight: 72,
        margin: 6,
        padding: 12,

        flexDirection: 'row',
        alignItems: 'center',

        backgroundColor: '#FFFFFF',
        borderRadius: 10,

        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.06,
        shadowRadius: 3,

        elevation: 2,
    },

    jogadorVoce: {
        backgroundColor: '#EFF6FF',
    },

    posicao: {
        width: 32,
        height: 32,
        borderRadius: 16,

        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#64748B',
    },

    posicaoPrimeiro: {
        backgroundColor: '#F59E0B',
    },

    posicaoSegundo: {
        backgroundColor: '#94A3B8',
    },

    posicaoTerceiro: {
        backgroundColor: '#EA580C',
    },

    posicaoTexto: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
    },

    avatar: {
        width: 40,
        height: 40,
        marginLeft: 12,

        borderRadius: 20,

        backgroundColor: '#E2E8F0',

        alignItems: 'center',
        justifyContent: 'center',
    },

    infoJogador: {
        flex: 1,
        marginLeft: 12,
    },

    nomeJogador: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#1E293B',
    },

    nomeVoce: {
        color: '#1E293B',
    },

    pontos: {
        marginTop: 2,
        fontSize: 13,
        color: '#64748B',
    },

});