import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { RectButton, RectButtonProps } from 'react-native-gesture-handler'
import GuildIcon from '../GuildIcon'
import { Categories } from '../../utils/Categories'
import PlayerSvg from '../../assets/player.svg'
import CalendarSvg from '../../assets/calendar.svg'
import { theme } from '../../global/theme'

export type GuildProps = {
    id: string,
    name: string,
    icon: null,
    owner: boolean
}

export type AppointmentProps = {
    id: string;
    guild: GuildProps;
    category: string;
    date: string;
    description: string;
}

type props = RectButtonProps & {
    data: AppointmentProps
}

export default function Appointment({ data, ...rest }: props) {
    const [category] = Categories.filter(item => item.id === data.category);
    const { owner } = data.guild
    const { primary, on } = theme.colors

    return (
        <RectButton {...rest}>
            <View style={styles.container}>
                <GuildIcon />

                <View style={styles.content}>
                    <View style={styles.header}>
                        <Text style={styles.title}>
                            {data.guild.name}
                        </Text>

                        <Text style={styles.category}>
                            {category.title}
                        </Text>

                    </View>

                    <View style={styles.footer}>
                            <View style={styles.dateInfo}>
                                <CalendarSvg />

                                <Text style={styles.date}>
                                    {data.date}
                                </Text>
                            </View>

                            <View style={styles.playersInfo}>
                                <PlayerSvg fill={owner ? primary : on} />

                                <Text style={[
                                    styles.player,
                                    { color: owner ? primary : on }
                                ]}>
                                    {owner ? 'Anfitri??o' : 'Visitante'}
                                </Text>
                            </View>
                        </View>
                    </View>

                </View>
        </RectButton>
    )
}