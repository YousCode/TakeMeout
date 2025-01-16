import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { MatchList } from "./components/MatchList";
import { BottomNavigation } from "../../ui/BottomNavigation";

export function MatchesScreen() {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.title}>Matches</label>
            <MatchList />
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