import React from 'react';
import { SectionList, ActivityIndicator, View, StyleSheet, TouchableOpacity } from 'react-native';
import { MenuItem, SubMenuHeaderItem, SubMenuItem } from '../ui';
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react';
import { RootState, Dispatch } from '../store';

type SectionListElement = {
  title: string,
  data: any[]
}

export const SubMenu = ({ route, navigation }: { navigation: any }) => {
  const { menuItem } = route.params;
  const data = useSelector((state: RootState) => state.menu)

  const filtered: SectionListElement[] = data.items
    .filter(m =>
      m.name === menuItem
    ).map(e =>
      e.children.reduce((a, b) =>
        a.concat({ title: b.name, data: b.categories }), [] as SectionListElement[])
    )[0] || []

  const renderItem = (item: any) => {
    return (
      <SubMenuItem item={item.item}/>
    )
  };

  const renderSectionHeader = (item: any) => {
    return (
      <SubMenuHeaderItem item={item.section.title}/>
    )
  }

  const ItemSeparatorComponent = () => <View style={{ height: 10 }} />;

  return (
    <View style={styles.container}>
      <SectionList
        sections={filtered}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={ItemSeparatorComponent}
        directionalLockEnabled={true}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicatorContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});