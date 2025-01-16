import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { BottomNavigation } from "../../ui/BottomNavigation";

export function WalletScreen() {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.title}>Wallet</label>
            <stackLayout style={styles.content}>
                <label style={styles.balance}>$0.00</label>
                <label style={styles.subtitle}>Current Balance</label>
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
        justifyContent: "center",
    },
    balance: {
        fontSize: 48,
        fontWeight: "bold",
        color: "#7B35FF",
    },
    subtitle: {
        fontSize: 16,
        color: "#666",
        marginTop: 8,
    },
});