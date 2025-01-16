import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Profile } from "../../../../data/mockProfiles";

interface ProfileInfoProps {
    profile: Profile;
}

export function ProfileInfo({ profile }: ProfileInfoProps) {
    return (
        <stackLayout style={styles.container}>
            <label style={styles.title}>About</label>
            <label style={styles.bio}>{profile.bio}</label>
            
            <gridLayout style={styles.stats} columns="*, *, *" rows="auto">
                <stackLayout col={0} style={styles.statItem}>
                    <label style={styles.statValue}>{profile.category}</label>
                    <label style={styles.statLabel}>Category</label>
                </stackLayout>
                
                <stackLayout col={1} style={styles.statItem}>
                    <label style={styles.statValue}>{profile.age}</label>
                    <label style={styles.statLabel}>Age</label>
                </stackLayout>
                
                <stackLayout col={2} style={styles.statItem}>
                    <label style={styles.statValue}>{profile.location}</label>
                    <label style={styles.statLabel}>Location</label>
                </stackLayout>
            </gridLayout>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 8,
    },
    bio: {
        fontSize: 16,
        color: "#666",
        lineHeight: 24,
        marginBottom: 16,
    },
    stats: {
        marginTop: 16,
    },
    statItem: {
        alignItems: "center",
    },
    statValue: {
        fontSize: 16,
        fontWeight: "600",
        color: "#7B35FF",
    },
    statLabel: {
        fontSize: 12,
        color: "#666",
        marginTop: 4,
    },
});