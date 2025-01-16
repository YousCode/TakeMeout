import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ProfileGalleryProps {
    photos: string[];
}

export function ProfileGallery({ photos }: ProfileGalleryProps) {
    return (
        <stackLayout style={styles.container}>
            <label style={styles.title}>Pictures</label>
            <scrollView orientation="horizontal" style={styles.gallery}>
                {photos.map((photo, index) => (
                    <image 
                        key={index}
                        src={photo}
                        style={styles.photo}
                        stretch="aspectFill"
                    />
                ))}
            </scrollView>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
    },
    title: {
        fontSize: 18,
        fontWeight: "600",
        marginBottom: 12,
    },
    gallery: {
        height: 120,
    },
    photo: {
        width: 120,
        height: 120,
        marginRight: 8,
        borderRadius: 12,
    },
});