import { View, Text,ScrollView } from 'react-native'
import React from 'react'

import { styles } from './styles'
import { Categories } from '../../utils/Categories'
import Category from '../Category/Index'

type props = {
  categorySelected: string,
}

export default function CategorySelect({ categorySelected }: props) {
  return (
    <ScrollView
    horizontal
    style={styles.container}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle = {{paddingRight: 40}}
    >
      {
        Categories.map(category => (
          <Category 
          key={category.id}
          title={category.title}
          icon={category.icon}
          checked={category.id === categorySelected}
          />
        ))
      }
    </ScrollView>
  )
}