import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Profile } from "../../data/mockProfiles";
import { BookingListItem } from "./BookingListItem";

interface BookingListProps {
    profiles: Profile[];
}

export function BookingList({ profiles }: BookingListProps) {
    return (
        <scrollView style={styles.container}>
            <stackLayout style={styles.list}>
                {profiles.map(profile => (
                    <BookingListItem key={profile.id} profile={profile} />
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