import { Image, Text, View, ActivityIndicator, ScrollView } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { Screen } from '../components/Screen';
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';
import { getGameDetails } from '../lib/rawg';
import { Platforms } from '../components/Platforms';

export default function Detail() {
    const { id } = useLocalSearchParams();
    const [ gameInfo, setGameDetails ] = useState(null);

    useEffect(() => {
        if (id) {
            getGameDetails(id).then(setGameDetails);
        }
    }, [id]);

    return (
        <Screen>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: 'purple' },
                    headerTintColor: '#000',
                    headerLeft: () => {},
                    headerTitle: "Detalle",
                    headerRight: () => {},
                    
                }}
            />
            <View>
                {gameInfo == null ? (
                    <ActivityIndicator color={"#fff"} size={"large"} />
                ) : (
                    <ScrollView>
                        <View className="justify-center items-center">
                            <Image  
                                className="justify-center"
                                source={{ uri: gameInfo.image }}
                                style={{ width: 214, height: 294, borderRadius: 10, margin: 20 }}
                            />

                            <Text className="text-white text-white/90 text-2xl font-bold mb-2">
                                {gameInfo.title}
                            </Text>
                            
                            <Text className="text-white text-white/70 text-left mb-2 text-base">
                                {gameInfo.description}
                            </Text>

                            <Platforms platforms={gameInfo.platforms} />
                        </View>
                    </ScrollView>
                )}
            </View>
        </Screen>
    );
}