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
    activity: 'Standup Paddeling',
    image: standupPaddeling,
    category: 'sport',
    checked: false,
    description:
      'Man kann SUP wunderbar gemeinsam betreiben, auch für Kinder geht das oder für Menschen, die sich gar nicht für so sportlich halten oder lange keinen Sport mehr gemacht haben - wenn sie schwimmen können',
    subtitle: 'Standup Paddeling der neuste Trend!',
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
    activity: 'Bowling',
    image: bowlen,
    category: 'group',
    checked: false,
    description:
      'Bowling ist eine Ende des 19. Jahrhunderts in den Vereinigten Staaten entstandene Variante des Präzisionssports Kegeln.Dabei wird ein mit Bohrungen für die Finger versehener Ball auf eine Formation von zehn Pins genannten Kegeln geworfen',
    subtitle: ' Der Klassiker aus Amerika',
    isBookmarked: false,
    id: uid(),
  },
  {
    activity: 'Schwimmen',
    image: swim,
    category: 'sport',
    checked: false,

    description:
      'Die Badehose ist eingepackt – doch in welches der zahlreichen Hamburger Schwimmbäder soll es eigentlich gehen? Familien haben da andere Vorlieben als Berufstätige, die zügig ihre Bahnen ziehen wollen. ',
    subtitle: 'Der Spaß für Groß und klein',
    isBookmarked: false,

    id: uid(),
  },
  {
    activity: 'Grillen',
    image: grillen,
    category: 'group',
    checked: false,
    description:
      'Im Sommer einen geeigneten Grillplatz zu finden, wenn man nicht gerade einen eigenen Garten im Hinterhof hat, ist manchmal gar nicht so einfach.',
    subtitle: 'Zeig den Grillmeister in Dir',
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
    subtitle: 'lets Dance!',
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
