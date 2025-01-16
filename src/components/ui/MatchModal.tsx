import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface MatchModalProps {
    visible: boolean;
    matchedProfile: {
        name: string;
        photo: string;
    } | null;
    onClose: () => void;
}

export function MatchModal({ visible, matchedProfile, onClose }: MatchModalProps) {
    if (!visible || !matchedProfile) return null;

    return (
        <flexboxLayout style={styles.overlay}>
            <flexboxLayout style={styles.modal}>
                <label style={styles.title}>C'est un Match! 💝</label>
                <image src={matchedProfile.photo} style={styles.photo} stretch="aspectFill" />
                <label style={styles.name}>{matchedProfile.name}</label>
                <label style={styles.message}>Vous pouvez maintenant discuter et organiser une rencontre!</label>
                
                <button style={styles.messageButton} text="Envoyer un message" />
                <button style={styles.continueButton} text="Continuer" onTap={onClose} />
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.8)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    photo: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 8,
    },
    message: {
        fontSize: 16,
        textAlign: "center",
        marginBottom: 24,
        color: "#666",
    },
    messageButton: {
        width: "100%",
        padding: 16,
        borderRadius: 30,
        backgroundColor: "#8e44ad",
        color: "white",
        marginBottom: 8,
    },
    continueButton: {
        width: "100%",
        padding: 16,
        borderRadius: 30,
        backgroundColor: "transparent",
        color: "#8e44ad",
    },
});