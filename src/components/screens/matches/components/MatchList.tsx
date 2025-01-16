import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Profile } from "../../../../data/mockProfiles";
import { profileService } from "../../../../services/profileService";
import { MatchCard } from "./MatchCard";

export function MatchList() {
    const [matches, setMatches] = React.useState<Profile[]>([]);

    React.useEffect(() => {
        loadMatches();
    }, []);

    const loadMatches = async () => {
        const profiles = await profileService.getProfiles();
        setMatches(profiles);
    };

    return (
        <scrollView style={styles.container}>
            <stackLayout style={styles.list}>
                {matches.map(profile => (
                    <MatchCard key={profile.id} profile={profile} />
                ))}
            </stackLayout>
        </scrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    list: {
        padding: 16,
    },
});