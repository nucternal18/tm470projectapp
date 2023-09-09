import React from 'react'


// hooks (Controller)
import useSearchController from '@hooks/useSearchController'

// constants
import globalStyles from "@constants/styles";

// theme
import useTheme from "@global-state/features/theme/useTheme";

// components
import SearchScreenHeader from '@components/SearchScreenHeader';
import SearchView from '@components/SearchView';
import { View } from '@components/Themed';

export default function search() {
    const { colors } = useTheme();
    const { searchResult, form } = useSearchController();
     const styles = globalStyles({ colors });


  return (
    <View style={styles.container}>
      <SearchScreenHeader
        control={form.control}
        handleSubmit={form.handleSubmit}
        reset={form.reset}
      />
      <View style={styles.searchResultContainer}>
        <SearchView searchResultData={searchResult} />
      </View>
    </View>
  );
}
