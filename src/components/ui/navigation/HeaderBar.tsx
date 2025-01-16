import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { BackButton } from "./BackButton";

interface HeaderBarProps {
    title: string;
    showBack?: boolean;
    rightAction?: React.ReactNode;
}

export function HeaderBar({ title, showBack = true, rightAction }: HeaderBarProps) {
    return (
        <gridLayout style={styles.container} columns="auto, *, auto">
            {showBack ? (
                <BackButton col={0} style={styles.backButton} />
            ) : (
                <flexboxLayout col={0} style={styles.placeholder} />
            )}
            <label col={1} style={styles.title}>{title}</label>
            {rightAction ? (
                <flexboxLayout col={2}>{rightAction}</flexboxLayout>
            ) : (
                <flexboxLayout col={2} style={styles.placeholder} />
            )}
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        backgroundColor: "white",
        borderBottomWidth: 1,
        borderBottomColor: "#f0f0f0",
        paddingTop: 20, // For status bar
        paddingHorizontal: 16,
        alignItems: "center",
    },
    backButton: {
        color: "#333",
        backgroundColor: "transparent",
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        textAlignment: "center",
    },
    placeholder: {
        width: 40,
    },
});