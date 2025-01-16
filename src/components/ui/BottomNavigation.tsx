import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation, useRoute } from "@react-navigation/core";
import { MainStackParamList } from "../../NavigationParamList";

interface TabItem {
    name: keyof MainStackParamList;
    icon: string;
    label: string;
}

const TABS: TabItem[] = [
    { name: 'Home', icon: '🏠', label: 'Home' },
    { name: 'Matches', icon: '❤️', label: 'Matches' },
    { name: 'Saved', icon: '⭐', label: 'Saved' },
    { name: 'Wallet', icon: '💰', label: 'Wallet' },
    { name: 'Profile', icon: '👤', label: 'Profile' }
];

export function BottomNavigation() {
    const navigation = useNavigation();
    const route = useRoute();

    const navigateTo = (screen: keyof MainStackParamList) => {
        navigation.navigate(screen);
    };

    const isActive = (routeName: string) => route.name === routeName;

    return (
        <flexboxLayout style={styles.container}>
            {TABS.map((tab) => (
                <button 
                    key={tab.name}
                    style={[styles.tab, isActive(tab.name) && styles.activeTab]} 
                    onTap={() => navigateTo(tab.name)}
                >
                    <stackLayout style={styles.tabContent}>
                        <label style={[styles.tabIcon, isActive(tab.name) && styles.activeIcon]}>
                            {tab.icon}
                        </label>
                        <label style={[styles.tabLabel, isActive(tab.name) && styles.activeLabel]}>
                            {tab.label}
                        </label>
                    </stackLayout>
                </button>
            ))}
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 70,
        backgroundColor: "white",
        borderTopWidth: 1,
        borderTopColor: "#f0f0f0",
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        paddingBottom: 8,
        elevation: 8,
    },
    tab: {
        flex: 1,
        height: "100%",
        backgroundColor: "transparent",
        padding: 0,
    },
    tabContent: {
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },
    tabIcon: {
        fontSize: 24,
        color: "#666",
        marginBottom: 2,
    },
    tabLabel: {
        fontSize: 10,
        color: "#666",
    },
    activeTab: {
        backgroundColor: "transparent",
    },
    activeIcon: {
        color: "#7B35FF",
    },
    activeLabel: {
        color: "#7B35FF",
        fontWeight: "600",
    },
});