import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { BottomNavigation } from "../../ui/BottomNavigation";
import { ProfileGrid } from "../../ui/ProfileGrid";

export function SavedScreen() {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.title}>Saved</label>
            <ProfileGrid />
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
});