import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";

export function FloatingBookingButton() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('BookingSearch');
    };

    return (
        <button 
            style={styles.button} 
            text="📅" 
            onTap={handlePress}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 140, // Above search button
        right: 20,
        backgroundColor: '#8e44ad',
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        padding: 12,
        borderRadius: 24,
        elevation: 4,
        zIndex: 1000,
        width: 48,
        height: 48,
    },
});