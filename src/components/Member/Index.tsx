import { View, Text } from 'react-native'
import React from 'react'

import { styles } from './style'
import Avatar from '../Avatar/Index';
import { theme } from '../../global/theme';
import ButtonIcon from '../ButtonIcon';

export type Memberprops = {
    id: string;
    username: string;
    avatar_url: string;
    status: string;
}

type props =  {
    data: Memberprops
}

export default function Member({data}: props) {

    const { on, primary } = theme.colors;
    const isOnline = data.status === 'online';
  return (
    <View style={styles.container}>
    <Avatar urlImage={data.avatar_url} />

    <View>
      <Text style={styles.title}>
        { data.username }
      </Text>

      <View style={styles.status}>
        <View 
          style={[
            styles.bulletStatus,
            {
              backgroundColor: isOnline ? on : primary
            }
          ]}
        />

        <Text style={styles.nameStatus}>
          { isOnline ? 'Disponível' : 'Ocupado' }
        </Text>
      </View>
    </View>
  </View>
  )
}