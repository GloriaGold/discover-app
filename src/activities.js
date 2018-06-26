import uid from 'uid'

import swim from './images/swimming.jpg'
import grillen from './images/grillen.jpg'
import dance from './images/dance.jpg'
import foto from './images/camera.jpg'
import standupPaddeling from './images/standuppaddeling.jpg'
import game from './images/game.jpg'
import concert from './images/concert.jpg'
import theatre from './images/theatre.jpg'
import food from './images/restaurant.jpg'
import bowlen from './images/bowling.jpg'
import wandern from './images/wandern.jpg'
import shoppen from './images/shopping.jpg'
import roadtrip from './images/roadtrip.jpg'
import planetarium from './images/planetarium.jpg'

const initialActivities = [
  {
    activity: 'Standup paddeling',
    image: standupPaddeling,
    category: 'sport',
    checked: false,
    description:
      'Man kann SUP wunderbar gemeinsam betreiben, auch für Kinder geht das oder für Menschen, die sich gar nicht für so sportlich halten oder lange keinen Sport mehr gemacht haben - wenn sie schwimmen können',
    subtitle: 'Standup paddeling der Neuste Trend!',
    isBookmarked: false,
    id: uid(),
  },

  {
    activity: 'Planetarium',
    image: planetarium,
    category: 'indoor',
    checked: false,
    description:
      'Es erwarten Sie spannende Reisen durch die Weiten des Universums in atemberaubenden 360-Grad-Aufnahmen, Lasershows und in 3D Das Planetarium Hamburg ist eines von neun Großplanetarien und das meistbesuchte Sternentheater in Deutschland.',
    subtitle: 'Sei den Sternen ganz nah',
    isBookmarked: false,
    id: uid(),
  },

  {
    activity: 'Bowlen',
    image: bowlen,
    category: 'group',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'schwimmen',
    image: swim,
    category: 'sport',
    checked: false,

    description:
      'Ich bin ein Beispieltext ondonsfoansnfonasfon sund werde später ausführlicher ausgearbeitet. ',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,

    id: uid(),
  },
  {
    activity: 'grillen',
    image: grillen,
    category: 'group',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'Paartanz lernen',
    image: dance,
    category: 'sport',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'fotografieren',
    image: foto,
    category: 'outdoor',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },

  {
    activity: 'Spieleabend',
    image: game,
    category: 'group',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },

  {
    activity: 'Konzert',
    image: concert,
    category: 'outdoor',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'Theater',
    image: theatre,
    category: 'indoor',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'Restaurantbesuch',
    image: food,
    category: 'indoor',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },

  {
    activity: 'Wandern',
    image: wandern,
    category: 'sport',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'Shoppen',
    image: shoppen,
    category: 'outdoor',
    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'Roadtrip',
    image: roadtrip,
    category: 'outdoor',

    checked: false,
    description:
      'ich bin ein Beispieltext und werde später ausführlicher ausgearbeitet',
    subtitle: 'ich bin die Teilüberschrift',
    isBookmarked: false,
    id: uid(),
  },
]

const savedActivities = localStorage.getItem('activities')

let activities

if (savedActivities) {
  activities = JSON.parse(savedActivities)
} else {
  localStorage.setItem('activities', JSON.stringify(initialActivities))
  activities = initialActivities
}

export default activities
