import { View, Text } from 'react-native';

export function Platforms({ platforms }) {
    const colors = {
        'PlayStation 4': 'bg-blue-500',
        'Xbox One': 'bg-green-500',
        'PC': 'bg-gray-500',
        'Nintendo Switch': 'bg-red-500',
        'PlayStation 5': 'bg-blue-700',
        'Xbox Series S/X': 'bg-green-700',
        'macOS': 'bg-slate-400',
        'Linux': 'bg-yellow-500',
        'iOS': 'bg-white text-black border border-gray-300',
        'Android': 'bg-green-600',
    };

    return (
        <View className="flex-row flex-wrap gap-2 -mt-0.5 mb-3 justify-center">
            {platforms.map((platform, index) => (
                <View
                    key={index}
                    className={`${colors[platform] || 'bg-black'} w-auto h-8 px-3 rounded-full justify-center items-center`}
                >
                <Text className="text-white text-sm font-bold uppercase">
                    {platform}
                </Text>
            </View>
            ))}
        </View>
    );
}
