import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";
import { Profile } from "../../../../data/mockProfiles";

interface MatchCardProps {
    profile: Profile;
}

export function MatchCard({ profile }: MatchCardProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ProfileDetails', { profileId: profile.id });
    };

    return (
        <gridLayout style={styles.container} onTap={handlePress}>
            <image src={profile.photos[0]} style={styles.photo} stretch="aspectFill" />
            <stackLayout style={styles.info}>
                <label style={styles.name}>{profile.name}, {profile.age}</label>
                <label style={styles.location}>{profile.location}</label>
                {profile.lastActive && (
                    <label style={styles.lastActive}>Active {profile.lastActive}</label>
                )}
            </stackLayout>
            <button style={styles.chatButton} text="💬" />
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        borderRadius: 12,
        marginBottom: 16,
        padding: 12,
        elevation: 2,
        columns: "auto, *, auto",
    },
    photo: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },
    info: {
        marginLeft: 12,
    },
    name: {
        fontSize: 16,
        fontWeight: "bold",
    },
    location: {
        fontSize: 14,
        color: "#666",
    },
    lastActive: {
        fontSize: 12,
        color: "#7B35FF",
        marginTop: 4,
    },
    chatButton: {
        fontSize: 24,
        backgroundColor: "transparent",
        width: 40,
        height: 40,
        padding: 0,
    },
});