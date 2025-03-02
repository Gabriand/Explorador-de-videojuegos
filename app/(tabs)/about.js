import { ScrollView, Text, Platform, StyleSheet } from "react-native";
import { styled } from "nativewind";
import { Screen } from "../../components/Screen";
import useResponsive from "../../hooks/useResponsive";

const StyledText = styled(Text);

export default function About() {
    const responsive = useResponsive();

    return (
        <Screen>
            <ScrollView 
                contentContainerStyle={responsive.select({
                    web: styles.webScollView,
                    default: styles.mobileScrollView
                })}
            >
                <StyledText 
                    className= {responsive.isWeb ? "" : "text-white font-bold my-4 text-3xl text-center"}
                    style={responsive.isWeb ? styles.webTitle : null} 
                >
                    Sobre el proyecto
                </StyledText>
                
                <StyledText
                    className={responsive.isWeb ? "" : "text-white text-white/90 mb-4"}
                    style={responsive.isWeb ? styles.webParagraph : null}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </StyledText>
                
                <StyledText
                    className={responsive.isWeb ? "" : "text-white text-white/90 mb-4"}
                    style={responsive.isWeb ? styles.webParagraph : null}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </StyledText>
                
                <StyledText
                    className={responsive.isWeb ? "" : "text-white text-white/90 mb-4"}
                    style={responsive.isWeb ? styles.webParagraph : null}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </StyledText>
                
                <StyledText
                    className={responsive.isWeb ? "" : "text-white text-white/90 mb-4"}
                    style={responsive.isWeb ? styles.webParagraph : null}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </StyledText>
                
                <StyledText
                    className={responsive.isWeb ? "" : "text-white text-white/90 mb-4"}
                    style={responsive.isWeb ? styles.webParagraph : null}
                >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec
                    purus auctor, ultricies ex eget, tincidunt libero. Suspendisse potenti.
                    Nullam vel nunc ac elit ultricies fermentum. Nulla facilisi. Nullam
                    malesuada, purus id tincidunt ultricies, tortor sapien ultricies libero,
                    nec tincidunt arcu elit in libero. Nullam nec purus auctor, ultricies ex
                    eget, tincidunt libero. Suspendisse potenti. Nullam vel nunc ac elit
                    ultricies fermentum. Nulla facilisi.
                </StyledText>
            </ScrollView>
        </Screen>
    );
}

const styles = StyleSheet.create({
    webScrollView: {
        padding: 20,
    },
    mobileScrollView: {
        // Estilos para móvil
    },
    webTitle: { 
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 16,
        fontSize: 24,
        textAlign: 'center',
    },
    webParagraph: {
        color: 'black',
        marginHorizontal: 100,
        marginBottom: 16,
        lineHeight: 24,
        textAlign: 'justify'
    }
});