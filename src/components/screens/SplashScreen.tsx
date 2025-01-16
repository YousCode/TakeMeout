import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../NavigationParamList";
import { FadeTransition } from "../animations/FadeTransition";
import { NavigationButton } from "../ui/NavigationButton";

type SplashScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Splash">;
};

export function SplashScreen({ navigation }: SplashScreenProps) {
    React.useEffect(() => {
        setTimeout(() => {
            navigation.replace("Home");
        }, 2000);
    }, []);

    return (
        <flexboxLayout style={styles.container}>
            <FadeTransition duration={800}>
                <flexboxLayout style={styles.content}>
                    <image src="~/assets/logo.png" style={styles.logo} />
                    <label className="text-2xl font-bold mt-4">TakeMeOut</label>
                    <NavigationButton 
                        targetScreen="Login"
                        text="Se connecter"
                        style={styles.loginButton}
                    />
                </flexboxLayout>
            </FadeTransition>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: "100%",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: {
            type: "linear",
            colors: ["#FFFFFF", "#E6EEFF", "#EEE6FF", "#E6EEFF"],
            stops: [0, 0.3, 0.7, 1],
            angle: 135
        }
    },
    content: {
        flexDirection: "column",
        alignItems: "center",
    },
    logo: {
        width: 80,
        height: 80,
    },
    loginButton: {
        marginTop: 24,
        paddingHorizontal: 32,
    }
});