import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { COLORS, SPACING, TYPOGRAPHY } from "../../../constants/theme";

interface TimeSlot {
    id: string;
    time: string;
    available: boolean;
}

interface TimeSlotPickerProps {
    slots: TimeSlot[];
    selectedSlot: string | null;
    onSelect: (slotId: string) => void;
}

export function TimeSlotPicker({ slots, selectedSlot, onSelect }: TimeSlotPickerProps) {
    return (
        <stackLayout style={styles.container}>
            <label style={styles.label}>Available Time Slots</label>
            <scrollView orientation="horizontal">
                <flexboxLayout style={styles.slotsContainer}>
                    {slots.map((slot) => (
                        <button
                            key={slot.id}
                            style={[
                                styles.slot,
                                !slot.available && styles.unavailableSlot,
                                selectedSlot === slot.id && styles.selectedSlot
                            ]}
                            text={slot.time}
                            onTap={() => slot.available && onSelect(slot.id)}
                            isEnabled={slot.available}
                        />
                    ))}
                </flexboxLayout>
            </scrollView>
        </stackLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: SPACING.md,
    },
    label: {
        ...TYPOGRAPHY.body,
        marginBottom: SPACING.sm,
    },
    slotsContainer: {
        flexDirection: "row",
        padding: SPACING.xs,
    },
    slot: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
        marginRight: SPACING.sm,
        borderRadius: 8,
        backgroundColor: COLORS.background,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    unavailableSlot: {
        opacity: 0.5,
        backgroundColor: COLORS.border,
    },
    selectedSlot: {
        backgroundColor: COLORS.primary,
        color: COLORS.background,
        borderColor: COLORS.primary,
    },
});