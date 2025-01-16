import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Profile } from "../../../../data/mockProfiles";

interface ProfileHeaderProps {
    profile: Profile;
}

export function ProfileHeader({ profile }: ProfileHeaderProps) {
    return (
        <gridLayout style={styles.container}>
            <image src={profile.photos[0]} style={styles.coverImage} stretch="aspectFill" />
            <stackLayout style={styles.info}>
                <flexboxLayout style={styles.nameRow}>
                    <label style={styles.name}>{profile.name} {profile.age}</label>
                    {profile.verified && <label style={styles.verifiedBadge}>✓</label>}
                </flexboxLayout>
                <flexboxLayout style={styles.locationRow}>
                    <label style={styles.location}>{profile.location}</label>
                    {profile.country && <image src={`~/assets/flags/${profile.country}.png`} style={styles.flag} />}
                </flexboxLayout>
            </stackLayout>
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 400,
    },
    coverImage: {
        width: "100%",
        height: "100%",
    },
    info: {
        padding: 16,
        background: "linear-gradient(to bottom, transparent, rgba(0,0,0,0.8))",
        alignItems: "flex-start",
        justifyContent: "flex-end",
    },
    nameRow: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        color: "white",
        fontSize: 24,
        fontWeight: "bold",
    },
    verifiedBadge: {
        marginLeft: 8,
        color: "#7B35FF",
        fontSize: 20,
    },
    locationRow: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 4,
    },
    location: {
        color: "rgba(255,255,255,0.9)",
        fontSize: 16,
    },
    flag: {
        width: 20,
        height: 20,
        marginLeft: 8,
        borderRadius: 10,
    },
});