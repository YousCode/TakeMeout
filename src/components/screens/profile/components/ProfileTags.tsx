import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ProfileTagsProps {
    tags: string[];
}

export function ProfileTags({ tags }: ProfileTagsProps) {
    if (tags.length === 0) return null;

    return (
        <stackLayout style={styles.container}>
            <label style={styles.title}>Tags</label>
            <wrapLayout style={styles.tags}>
                {tags.map((tag, index) => (
                    <label key={index} style={styles.tag}>{tag}</label>
                ))}
            </wrapLayout>
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
    tags: {
        flexDirection: "row",
    },
    tag: {
        backgroundColor: "#f0f0f0",
        color: "#666",
        fontSize: 14,
        padding: 8,
        paddingHorizontal: 16,
        borderRadius: 16,
        margin: 4,
    },
});