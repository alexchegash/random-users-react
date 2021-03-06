import React, {useState} from 'react'
import {TUser} from 'store/types'
import {Avatar, Card, CardContent} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
import {Title} from './components/Title'
import {Id} from './components/Id'
import {DetailsBtn} from './components/DetailsBtn'

const useStyles = makeStyles({
  card: {},
  content: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    width: 60,
    height: 60,
    marginRight: 16
  },
  text: {
    flexGrow: 1
  },
  btn: {
    alignSelf: 'flex-end'
  }
})

type props = {
  user: TUser
  index: number
}

export const UserCard: React.FC<props> = ({user, index}) => {
  const classes = useStyles()
  const {
    name: {title, first, last},
    id: {name: idName},
    picture: {thumbnail: pic}
  } = user
  const [elevation, setElevation] = useState<number>(2)

  return (
    <Card
      className={classes.card}
      onMouseOver={() => setElevation(8)}
      onMouseOut={() => setElevation(1)}
      elevation={elevation}
    >
      <CardContent className={classes.content}>
        <Avatar
          src={pic}
          className={classes.avatar}
        />
        <div className={classes.text}>
          <Title text={`${title} ${first} ${last}`}/>
          <Id text={idName}/>
        </div>
        <div className={classes.btn}>
          <DetailsBtn index={index}/>
        </div>
      </CardContent>
    </Card>
  )
}
