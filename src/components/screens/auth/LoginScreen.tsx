import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { FrameNavigationProp } from "react-nativescript-navigation";
import { MainStackParamList } from "../../../NavigationParamList";
import { SocialButton } from "../../ui/SocialButton";
import { CategoryButton } from "../../ui/CategoryButton";
import { LegalText } from "../../ui/LegalText";
import { FadeTransition } from "../../animations/FadeTransition";
import { ASSETS } from "../../../constants/assets";
import { BottomNavigation } from "../../ui/BottomNavigation";

type LoginScreenProps = {
    navigation: FrameNavigationProp<MainStackParamList, "Login">;
};

export function LoginScreen() {
    const [selectedCategory, setSelectedCategory] = React.useState<string>("Restaurant");

    return (
        <flexboxLayout style={styles.container}>
            <FadeTransition duration={500}>
                <flexboxLayout style={styles.content}>
                    <image src={ASSETS.LOGO} style={styles.logo} />
                    <label style={styles.title}>TakeMeOut</label>
                    
                    <flexboxLayout style={styles.categories}>
                        <CategoryButton 
                            text="Restaurant" 
                            isSelected={selectedCategory === "Restaurant"}
                            onTap={() => setSelectedCategory("Restaurant")}
                        />
                        <CategoryButton 
                            text="Club"
                            isSelected={selectedCategory === "Club"}
                            onTap={() => setSelectedCategory("Club")}
                        />
                        <CategoryButton 
                            text="Bar"
                            isSelected={selectedCategory === "Bar"}
                            onTap={() => setSelectedCategory("Bar")}
                        />
                    </flexboxLayout>

                    <flexboxLayout style={styles.socialButtons}>
                        <SocialButton 
                            text="Se connecter avec Apple" 
                            icon={ASSETS.SOCIAL.APPLE}
                            provider="Apple"
                        />
                        <SocialButton 
                            text="Se connecter avec Facebook" 
                            icon={ASSETS.SOCIAL.FACEBOOK}
                            provider="Facebook"
                        />
                        <SocialButton 
                            text="Se connecter avec Google" 
                            icon={ASSETS.SOCIAL.GOOGLE}
                            provider="Google"
                        />
                    </flexboxLayout>

                    <LegalText />
                </flexboxLayout>
            </FadeTransition>
            <BottomNavigation />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        background: {
            type: "linear",
            colors: ["#FFFFFF", "#E6EEFF", "#EEE6FF", "#E6EEFF"],
            stops: [0, 0.3, 0.7, 1],
            angle: 135
        }
    },
    content: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 20
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 16
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 32,
        color: "black"
    },
    categories: {
        flexDirection: "row",
        justifyContent: "center",
        marginBottom: 32
    },
    socialButtons: {
        width: "100%",
        alignItems: "center",
        marginBottom: 32
    }
});