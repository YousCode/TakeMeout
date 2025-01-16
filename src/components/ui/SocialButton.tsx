import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";

interface SocialButtonProps {
    text: string;
    icon: string;
    provider: string;
}

export function SocialButton({ text, icon, provider }: SocialButtonProps) {
    const navigation = useNavigation();

    const handleLogin = () => {
        // Simulate login
        console.log(`${provider} login`);
        // Navigate to BookingSearch after login
        navigation.navigate('BookingSearch');
    };

    return (
        <button style={styles.button} onTap={handleLogin}>
            <flexboxLayout style={styles.content}>
                <image src={icon} style={styles.icon} />
                <label style={styles.text}>{text}</label>
            </flexboxLayout>
        </button>
    );
}

const styles = StyleSheet.create({
    button: {
        width: "86%",
        height: 52,
        marginHorizontal: "7%",
        marginVertical: 6,
        borderRadius: 30,
        backgroundColor: "rgba(255, 255, 255, 0.85)",
        backdropFilter: "blur(10px)",
    },
    content: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    },
    icon: {
        width: 20,
        height: 20,
        marginRight: 12,
        opacity: 0.9,
    },
    text: {
        fontSize: 16,
        fontWeight: "400",
        color: "rgba(0, 0, 0, 0.8)",
    },
});