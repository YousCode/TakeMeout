import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ProfileGrid } from "../../ui/ProfileGrid";
import { SearchBar } from "../../ui/SearchBar";
import { BottomNavigation } from "../../ui/BottomNavigation";
import { HeaderBar } from "../../ui/navigation/HeaderBar";
import { FilterBar } from "../../ui/filters/FilterBar";

const FILTER_OPTIONS = [
    { id: 'all', label: 'All' },
    { id: 'restaurant', label: 'Restaurants' },
    { id: 'club', label: 'Clubs' },
    { id: 'bar', label: 'Bars' }
];

export function HomeScreen() {
    const [selectedFilter, setSelectedFilter] = React.useState('all');
    const [searchQuery, setSearchQuery] = React.useState('');

    return (
        <flexboxLayout style={styles.container}>
            <HeaderBar 
                title="TakeMeOut" 
                showBack={false}
            />
            <SearchBar 
                value={searchQuery}
                onTextChange={setSearchQuery}
                placeholder="Search venues..."
            />
            <FilterBar 
                options={FILTER_OPTIONS}
                selectedId={selectedFilter}
                onSelect={setSelectedFilter}
            />
            <ProfileGrid />
            <BottomNavigation />
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
    },
});