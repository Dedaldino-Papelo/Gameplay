import { View, Text, ImageBackground, Image, FlatList } from 'react-native'
import React from 'react'

import { styles } from './style'
import Background from '../../components/Background/Index'
import Header from '../../components/Header/Index'
import { BorderlessButton } from 'react-native-gesture-handler'

import { Fontisto } from '@expo/vector-icons'
import { theme } from '../../global/theme'

import BannerPng from '../../assets/banner.png'
import ListHeader from '../../components/ListHeader/Index'
import Member from '../../components/Member/Index'
import { ListDivider } from '../../components/ListDivider'
import ButtonIcon from '../../components/ButtonIcon'

type props = {
  navigation: any
}

export default function AppointmentDetails({navigation}: props) {

  const members = [
    {
      id: '1', 
      username: 'Dedaldino', 
      avatar_url: 'https://github.com/Dedaldino-Papelo.png',
      status: 'online'
    },
    {
      id: '2', 
      username: 'Rodrigo', 
      avatar_url: 'https://github.com/rodrigorgtic.png',  
      status: 'offline'
    }
  ]

  return (
    <Background>
        <Header 
          title = 'Detalhes'
          navigation={navigation}
          action = {
            <BorderlessButton>
              <Fontisto 
                name='share'
                size={24}
                color={theme.colors.primary}
              />
            </BorderlessButton>
          }
        />
        
        <ImageBackground
          source={BannerPng}
          style={styles.banner}
         >
          <View  style={styles.bannerContent}>
            <Text style={styles.title}>
              Lendários
            </Text>

            <Text style={styles.subtitle}>
              É hoje que vamos chegar ao challenger sem perder nenhuma partida
            </Text>
          </View>
          </ImageBackground>

          <ListHeader
            title='Jogadores' 
            subtitle='total 3'
          />

          <FlatList
          data={members}
          keyExtractor = {item => item.id} 
          renderItem={({item}) => (
            <Member
              data={item} 
            />
          )}
          ItemSeparatorComponent={() => <ListDivider />}
          style={styles.member}
          />

      <View style={styles.footer}>       
        <ButtonIcon
        title='Entrar na Partida' />
      </View>

    </Background>


  )
}