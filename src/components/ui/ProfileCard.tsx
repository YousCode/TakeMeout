import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";
import { Profile } from "../../data/mockProfiles";

interface ProfileCardProps {
    profile: Profile;
}

export function ProfileCard({ profile }: ProfileCardProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('ProfileDetails', { profileId: profile.id });
    };

    return (
        <gridLayout style={styles.container} onTap={handlePress}>
            <image src={profile.photos[0]} style={styles.image} stretch="aspectFill" />
            <stackLayout style={styles.overlay}>
                {profile.isNew && <label style={styles.badge}>NEW</label>}
                {profile.isTop && <label style={[styles.badge, styles.topBadge]}>TOP</label>}
                <flexboxLayout style={styles.info}>
                    <label style={styles.nameAge}>{profile.name} {profile.age}</label>
                    <label style={styles.location}>{profile.location}</label>
                </flexboxLayout>
            </stackLayout>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "48%",
        height: 250,
        margin: "1%",
        borderRadius: 12,
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        background: "linear-gradient(to bottom, transparent 50%, rgba(0,0,0,0.8))",
        padding: 12,
    },
    info: {
        marginTop: "auto",
    },
    nameAge: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    location: {
        color: "rgba(255,255,255,0.8)",
        fontSize: 14,
    },
    badge: {
        backgroundColor: "#FF385C",
        color: "white",
        fontSize: 12,
        fontWeight: "bold",
        padding: 4,
        borderRadius: 4,
        width: "auto",
        marginBottom: 4,
    },
    topBadge: {
        backgroundColor: "#7B35FF",
    },
});