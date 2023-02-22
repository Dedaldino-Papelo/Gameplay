import { View, Text, KeyboardAvoidingView, Platform, ScrollView } from 'react-native'
import React, { useState } from 'react'

import { styles } from './style'
import Background from '../../components/Background/Index'
import Header from '../../components/Header/Index'
import { RectButton } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import { theme } from '../../global/theme'

import CategorySelect from '../../components/CategorySelect/Index'
import SmallInput from '../../components/SmallInput/Index'
import TextArea from '../../components/TextArea/Index'
import Button from '../../components/Button'

type props = {
  navigation: any
}

export default function AppointmentCreate({navigation}: props) {

  const [category, setCategory] = useState('')

  return (
     <Background>
          <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height' }
          style={styles.container}
          >
            <ScrollView>
        <Header 
          title = 'Agendar Partida'
          navigation={navigation}
        />

        <Text style={[styles.label, 
          {marginTop: 24, 
          marginLeft: 36, 
          marginBottom: 18}]}>
          Categoria
        </Text>

        <CategorySelect
          categorySelected = {category}
          setCategory = {setCategory}
         />

         <View style={styles.form}>
          <RectButton>
            <View style={styles.select}>
              <View style={styles.image} />

                <View style={styles.selectBody}>
                  <Text style={styles.label}>
                    Selecione um Servisor
                  </Text>
                </View>
                
                <Feather
                 name='chevron-right'
                 color={theme.colors.heading}
                 size={18}
                />
            </View>
          </RectButton>

          <View style={styles.fields}>
            <View>
              <Text style={styles.label}>
                Dia e Mês
              </Text>

          <View style={styles.column}>
           <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                /
              </Text>
           <SmallInput maxLength={2}  />
            </View>
         </View>

         <View>
              <Text style={styles.label}>
                Hora e Minuto
              </Text>

          <View style={styles.column}>
           <SmallInput maxLength={2} />
              <Text style={styles.divider}>
                :
              </Text>
           <SmallInput maxLength={2}  />
            </View>
         </View>
        </View>

        <View style={[styles.fields, {marginBottom: 12}]}>
          <Text style={styles.label}>
            Descrição
          </Text>

          <Text style={styles.CaracteresLimit}>
            Max 100 Caracteres
          </Text>
        </View>
          
          <TextArea 
          multiline 
          maxLength={100} 
          numberOfLines={5}
          autoCorrect={false}
           />

           <View style={styles.footer}>
            <Button
            title='Agendar' 
            />
           </View>
    
      </View>
      </ScrollView>
      </KeyboardAvoidingView>
    </Background>
  )
}