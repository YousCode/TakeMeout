import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";

interface BookButtonProps {
    profileId: string;
}

export function BookButton({ profileId }: BookButtonProps) {
    const navigation = useNavigation();

    const handleBook = () => {
        navigation.navigate('Booking', { profileId });
    };

    return (
        <button 
            style={styles.button} 
            text="BOOK" 
            onTap={handleBook}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "#7B35FF",
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        padding: 16,
        margin: 16,
        borderRadius: 30,
        textTransform: "uppercase",
    },
});