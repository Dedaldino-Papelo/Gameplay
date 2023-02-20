import { View,Text,Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import illustrationImg from '../../assets/illustration.png'
import ButtonIcon from '../../components/ButtonIcon'
import Background from '../../components/Background/Index'

type props = {
  navigation: any
}

export function SignIn({navigation}: props) {

  const handleSignIn = () => {
   navigation.navigate("Home")
  }

  return (
    <Background>
      <View style={styles.container}>
        <Image 
          source={illustrationImg} 
            style={styles.image}
            resizeMode="stretch"
            />
        
        <View style={styles.content}>
          <Text style={styles.title}>
              Conecte-se {'\n'}
              e organize suas {'\n'}
              jogatinas
          </Text>

          <Text style={styles.subtitle}>
            Crie grupos para jogar seus games {'\n'}
            favoritos com seus amigos
          </Text>

          <ButtonIcon
            title = "Entrar com Discord"
            activeOpacity={0.7}
            onPress={handleSignIn}
          />
          
        </View>
      </View>
    </Background>
  )
}