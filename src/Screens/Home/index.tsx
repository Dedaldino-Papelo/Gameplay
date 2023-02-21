import { View, Text, FlatList } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import Profile from '../../components/Profile/Index'
import Background from '../../components/Background/Index'
import ButtonAdd from '../../components/ButtonAdd/Index'
import CategorySelect from '../../components/CategorySelect/Index'
import ListHeader from '../../components/ListHeader/Index'
import Appointment from '../../components/Appointment'
import { ListDivider } from '../../components/ListDivider'

type props = {
  navigation: any
}

export default function Home({navigation}: props) {
  const [category, setCategory] = useState('')

  const Appointments = [
    {
      id: '1',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenge sem perder uma partida da md10'
    },
    {
      id: '2',
      guild: {
        id: '1',
        name: 'Lendários',
        icon: null,
        owner: true
      },
      category: '1',
      date: '22/05 às 20:40h',
      description: 'É hoje que vamos chegar ao challenge sem perder uma partida da md10'
    }
  ]

  const handleCategorySelect = (categoryId: string) => {
    category === categoryId ? setCategory(''): setCategory(categoryId)
  }

  const handleAppointment = () => {
    navigation.navigate("AppointmentDetails")
  }

  return (
    <Background>
      <View>
        
        <View style={styles.header}>
          <Profile />
          <ButtonAdd />
        </View>

        <CategorySelect
          categorySelected = {category}
          setCategory = {handleCategorySelect}
         />

         <View style={styles.content}> 
          <ListHeader 
            title='Partidas Agendadas'
            subtitle='Total 6'
          />
         </View>
         
         <FlatList
            data={Appointments}
            keyExtractor={item => item.id} 
            renderItem={({item}) => (
              <Appointment data={ item } 
              onPress={handleAppointment}
              />
          )}
          ItemSeparatorComponent = {() => <ListDivider />}
          style = {styles.matches}
          showsVerticalScrollIndicator={false}
         />

      </View>
    </Background>
  )
}