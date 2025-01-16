import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useRoute } from "@react-navigation/core";
import { HeaderBar } from "../../ui/navigation/HeaderBar";
import { DateFilter } from "../../ui/filters/DateFilter";
import { TimeSlotPicker } from "../../ui/filters/TimeSlotPicker";
import { PriceRangeFilter } from "../../ui/filters/PriceRangeFilter";
import { COLORS, SPACING } from "../../../constants/theme";

const TIME_SLOTS = [
    { id: '1', time: '18:00', available: true },
    { id: '2', time: '18:30', available: false },
    { id: '3', time: '19:00', available: true },
    { id: '4', time: '19:30', available: true },
    { id: '5', time: '20:00', available: true },
    { id: '6', time: '20:30', available: false },
    { id: '7', time: '21:00', available: true },
];

export function BookingScreen() {
    const route = useRoute();
    const { profileId } = route.params as { profileId: string };

    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [selectedTimeSlot, setSelectedTimeSlot] = React.useState<string | null>(null);
    const [priceRange, setPriceRange] = React.useState([0, 200]);

    const handleBook = () => {
        console.log('Booking:', {
            profileId,
            date: selectedDate,
            timeSlot: selectedTimeSlot,
            priceRange
        });
    };

    return (
        <flexboxLayout style={styles.container}>
            <HeaderBar title="Book Now" />
            
            <scrollView style={styles.content}>
                <DateFilter 
                    date={selectedDate}
                    onDateChange={setSelectedDate}
                />
                
                <TimeSlotPicker 
                    slots={TIME_SLOTS}
                    selectedSlot={selectedTimeSlot}
                    onSelect={setSelectedTimeSlot}
                />
                
                <PriceRangeFilter 
                    value={priceRange}
                    onChange={setPriceRange}
                />

                <stackLayout style={styles.info}>
                    <label style={styles.infoTitle}>Booking Information</label>
                    <label style={styles.infoText}>• Platform fee: 25% of booking</label>
                    <label style={styles.infoText}>• Service charge: 5% of final bill</label>
                    <label style={styles.infoText}>• Cancellation available up to 24h before</label>
                </stackLayout>
            </scrollView>

            <button 
                style={styles.bookButton} 
                text="Confirm Booking"
                onTap={handleBook}
            />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
    content: {
        flex: 1,
    },
    info: {
        padding: SPACING.md,
        margin: SPACING.md,
        backgroundColor: COLORS.background,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    infoTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: SPACING.sm,
    },
    infoText: {
        fontSize: 14,
        color: COLORS.text.secondary,
        marginBottom: SPACING.xs,
    },
    bookButton: {
        backgroundColor: COLORS.primary,
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
        padding: SPACING.md,
        margin: SPACING.md,
        borderRadius: 30,
    },
});