import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ProfileCard } from "./ProfileCard";
import { profileService } from "../../services/profileService";
import { Profile } from "../../data/mockProfiles";

export function ProfileGrid() {
    const [profiles, setProfiles] = React.useState<Profile[]>([]);

    React.useEffect(() => {
        loadProfiles();
    }, []);

    const loadProfiles = async () => {
        const data = await profileService.getProfiles();
        setProfiles(data);
    };

    return (
        <scrollView style={styles.container}>
            <wrapLayout style={styles.grid}>
                {profiles.map(profile => (
                    <ProfileCard 
                        key={profile.id}
                        profile={profile}
                    />
                ))}
            </wrapLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    grid: {
        padding: 8,
    },
});