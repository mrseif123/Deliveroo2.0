import React from 'react'
import {View, Text, ScrollView} from 'react-native'
import {CategoryCard} from '../components/CategoryCard'

export default function Categories() {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
    >
      <CategoryCard title="1" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="2" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="3" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="4" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="4" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="4" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="4" imgUrl="https://links.papareact.com/gn7" />
      <CategoryCard title="4" imgUrl="https://links.papareact.com/gn7" />
    </ScrollView>
  );
}
