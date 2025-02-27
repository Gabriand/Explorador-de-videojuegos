import { Pressable, ScrollView, Text } from "react-native";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";

const StyledPressable = styled(Pressable);

export default function About() {
    return (
        <Screen>
            <ScrollView>
                <Text className="text-white font-bold my-4 text-3xl text-center">Sobre el proyecto</Text>
                
                <Text className="text-white text-white/90 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </Text>

                <Text className="text-white text-white/90 mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </Text>
            </ScrollView>
        </Screen>
    );
}