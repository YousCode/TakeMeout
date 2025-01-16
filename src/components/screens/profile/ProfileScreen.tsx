import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { BottomNavigation } from "../../ui/BottomNavigation";

export function ProfileScreen() {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.title}>Profile</label>
            <stackLayout style={styles.content}>
                <image src="~/assets/avatar-placeholder.png" style={styles.avatar} />
                <label style={styles.name}>Guest User</label>
                <button style={styles.loginButton} text="Login" />
            </stackLayout>
            <BottomNavigation />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        padding: 16,
        paddingTop: 48,
    },
    content: {
        flex: 1,
        alignItems: "center",
        padding: 16,
    },
    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
    },
    name: {
        fontSize: 20,
        fontWeight: "600",
        marginBottom: 24,
    },
    loginButton: {
        backgroundColor: "#7B35FF",
        color: "white",
        fontSize: 16,
        fontWeight: "600",
        padding: 12,
        paddingHorizontal: 32,
        borderRadius: 24,
    },
});