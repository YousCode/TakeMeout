import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { profileService } from "../../../services/profileService";
import { Profile } from "../../../data/mockProfiles";
import { SearchBar } from "../../ui/SearchBar";
import { FloatingHomeButton } from "../../ui/FloatingHomeButton";
import { BookingList } from "../../ui/BookingList";

export function BookingSearchScreen() {
    const [searchQuery, setSearchQuery] = React.useState("");
    const [profiles, setProfiles] = React.useState<Profile[]>([]);

    React.useEffect(() => {
        loadProfiles();
    }, [searchQuery]);

    const loadProfiles = async () => {
        const results = await profileService.getProfiles(undefined, {
            location: searchQuery
        });
        setProfiles(results);
    };

    return (
        <flexboxLayout style={styles.container}>
            <SearchBar 
                value={searchQuery}
                onTextChange={setSearchQuery}
                placeholder="Rechercher des réservations..."
            />
            <BookingList profiles={profiles} />
            <FloatingHomeButton />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});