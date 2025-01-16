import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { Profile } from "../../data/mockProfiles";
import { useNavigation } from "@react-navigation/core";

interface BookingListItemProps {
    profile: Profile;
}

export function BookingListItem({ profile }: BookingListItemProps) {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('Booking', { profileId: profile.id });
    };

    return (
        <gridLayout style={styles.container} onTap={handlePress}>
            <image src={profile.photos[0]} style={styles.image} stretch="aspectFill" />
            <stackLayout style={styles.info}>
                <label style={styles.name}>{profile.name}, {profile.age}</label>
                <label style={styles.location}>{profile.location}</label>
                <label style={styles.category}>{profile.category}</label>
            </stackLayout>
            <button style={styles.bookButton} text="Réserver" />
        </gridLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        padding: 12,
        elevation: 2,
        columns: "auto, *, auto",
    },
    image: {
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
    category: {
        fontSize: 12,
        color: "#8e44ad",
        marginTop: 4,
    },
    bookButton: {
        backgroundColor: "#8e44ad",
        color: "white",
        padding: 8,
        borderRadius: 16,
        fontSize: 12,
    },
});