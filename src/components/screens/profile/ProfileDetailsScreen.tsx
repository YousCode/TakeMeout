import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useRoute, useNavigation } from "@react-navigation/core";
import { profileService } from "../../../services/profileService";
import { Profile } from "../../../data/mockProfiles";
import { HeaderBar } from "../../ui/navigation/HeaderBar";
import { ActionButton } from "../../ui/navigation/ActionButton";
import { BookButton } from "../../ui/BookButton";

export function ProfileDetailsScreen() {
    const route = useRoute();
    const navigation = useNavigation();
    const { profileId } = route.params as { profileId: string };
    const [profile, setProfile] = React.useState<Profile | undefined>();

    React.useEffect(() => {
        loadProfile();
    }, [profileId]);

    const loadProfile = async () => {
        const data = await profileService.getProfileById(profileId);
        setProfile(data);
    };

    const handleShare = () => {
        // Implement share functionality
        console.log('Share profile:', profileId);
    };

    const handleLike = () => {
        // Implement like functionality
        console.log('Like profile:', profileId);
    };

    if (!profile) return null;

    const rightActions = (
        <flexboxLayout style={styles.actions}>
            <ActionButton icon="♡" onTap={handleLike} />
            <ActionButton icon="↗" onTap={handleShare} />
        </flexboxLayout>
    );

    return (
        <flexboxLayout style={styles.container}>
            <HeaderBar 
                title={`${profile.name}, ${profile.age}`}
                rightAction={rightActions}
            />
            
            <scrollView style={styles.content}>
                <stackLayout style={styles.profileInfo}>
                    <image src={profile.photos[0]} style={styles.coverImage} stretch="aspectFill" />
                    <stackLayout style={styles.details}>
                        <label style={styles.location}>{profile.location}</label>
                        {profile.verified && <label style={styles.badge}>✓ Vérifié</label>}
                        <label style={styles.bio}>{profile.bio}</label>
                    </stackLayout>

                    <stackLayout style={styles.photoGrid}>
                        {profile.photos.map((photo, index) => (
                            <image 
                                key={index}
                                src={photo}
                                style={styles.photoThumbnail}
                                stretch="aspectFill"
                            />
                        ))}
                    </stackLayout>

                    {profile.tags && profile.tags.length > 0 && (
                        <stackLayout style={styles.tags}>
                            {profile.tags.map((tag, index) => (
                                <label key={index} style={styles.tag}>{tag}</label>
                            ))}
                        </stackLayout>
                    )}
                </stackLayout>
            </scrollView>

            <BookButton profileId={profile.id} />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        flex: 1,
    },
    actions: {
        flexDirection: "row",
    },
    profileInfo: {
        flex: 1,
    },
    coverImage: {
        width: "100%",
        height: 300,
    },
    details: {
        padding: 16,
    },
    location: {
        fontSize: 16,
        color: "#666",
        marginBottom: 4,
    },
    badge: {
        fontSize: 14,
        color: "#7B35FF",
        fontWeight: "600",
        marginBottom: 16,
    },
    bio: {
        fontSize: 16,
        lineHeight: 24,
        color: "#333",
        marginBottom: 24,
    },
    photoGrid: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 16,
    },
    photoThumbnail: {
        width: "31%",
        height: 120,
        margin: "1%",
        borderRadius: 8,
    },
    tags: {
        flexDirection: "row",
        flexWrap: "wrap",
        padding: 16,
    },
    tag: {
        backgroundColor: "#f0f0f0",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 16,
        marginRight: 8,
        marginBottom: 8,
        fontSize: 14,
        color: "#666",
    },
});