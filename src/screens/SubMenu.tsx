import React from 'react';
import { SectionList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { ListItemSeparator, SubMenuHeaderItem, SubMenuItem } from '../ui';
import { useSelector } from 'react-redux'
import { RootState } from '../store';

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
      <TouchableOpacity onPress={()=>{}}>
        <SubMenuItem item={item.item} key={item.item} />
      </TouchableOpacity>
    )
  };

  const renderSectionHeader = (item: any) => {
    return (
      <SubMenuHeaderItem item={item.section.title} key={item.section.title} />
    )
  }

  return (
    <View style={styles.container}>
      <SectionList
        sections={filtered}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItem}
        renderSectionHeader={renderSectionHeader}
        ItemSeparatorComponent={ListItemSeparator}
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