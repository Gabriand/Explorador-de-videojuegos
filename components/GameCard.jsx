import { useEffect, useRef } from 'react';
import { View, Text, Image, StyleSheet, Animated, Pressable } from 'react-native';
import { Platforms } from './Platforms';
import { Link } from 'expo-router';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export function GameCard({ game }) {
    return (
        <Link href={`/${game.slug}`} asChild>
            <StyledPressable className="active:opacity-70 border border-black
            active:border-white/50 mb-2 bg-gray-500/30 rounded-xl pt-4">
                <View 
                    className="gap-4" 
                    style={styles.card}
                    key={game.slug}
                >
                    <View className="items-center"> 
                        <Image style={styles.image} source={{ uri: game.image }} />
                    </View>
                    <View className="items-center">
                        <Text className="mt-2 mb-2" style={styles.title}>
                            {game.title}
                        </Text>
                        <Text className="text-lg font-semibold" style={styles.genres}>
                            {game.genres}
                        </Text>
                        <Platforms platforms={game.platforms} />
                        <Text style={styles.releaseDate}>
                            {game.releaseDate}
                        </Text>
                    </View>
                </View>
            </StyledPressable>
        </Link>
    );
}

export function AnimatedGameCard({ game, index }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 500,
            delay: index * 250,
            useNativeDriver: true,
        }).start();
    }, [opacity, index]);

    return (
        <Animated.View style={{ opacity }}>
            <GameCard game={game} />
        </Animated.View>
    )
}

const styles = StyleSheet.create({
    card: {
        marginBottom: 40,
    },
    image: {
        width: 107,
        height: 147,
        borderRadius: 10,
        alignSelf: 'center',
    },
    title: {
        color: '#fff',
        fontSize: 19,
        fontWeight: 'bold',
        marginTop: 10,
    },
    genres: {
        color: 'gray',
        fontSize: 15,
        marginBottom: 5,
    },
    platforms: {
        color: 'purple',
        fontSize: 15,
        marginBottom: 5,
    },
    releaseDate: {
        color: '#fff',
        fontSize: 15,
        marginBottom: 5,
    },
});
