import { Stack } from 'expo-router';
import { View } from 'react-native';
import { Logo } from '../components/Logo';
import { Text, Pressable } from 'react-native';
import { styled } from 'nativewind';

const StyledPressable = styled(Pressable);

export default function Layout() {
    return (
        <View className="flex-1">
            <Stack 
                screenOptions={{
                    headerStyle: { backgroundColor: '#000'},
                    headerTintColor: '#fff',
                    headerTitle: '',
                    headerLeft: () => (
                        <View style={{ marginBottom: 10, marginTop: 10, alignItems: 'center', justifyContent: 'center'}}>
                            <Logo />
                            <Text style={{ color: '#fff', fontSize: 20, fontWeight: 'bold'}}>Keep All Games</Text>
                        </View>
                    ),
                }}/>
        </View>
    );
}