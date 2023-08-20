import laPalettePicture from '../assets/img/resto1-mini.jpg'
import laNotePicture from '../assets/img/resto2-mini.jpg'
import laFrançaisePicture from '../assets/img/resto3-mini.jpg'
import leDelicePicture from '../assets/img/resto4-mini.jpg'

export const restaurantsList = [
  {
    id: 1,
    name: 'La palette du goût',
    picture: laPalettePicture,
    street: 'Ménilmontant',
    isNew: true,
  },
  {
    id: 2,
    name: 'La note enchantée',
    picture: laNotePicture,
    street: 'Charonne',
    isNew: true,
  },
  {
    id: 3,
    name: 'À la française',
    picture: laFrançaisePicture,
    street: 'Cité Rouge',
    isNew: false,
  },
  {
    id: 4,
    name: 'Le délice des sens',
    picture: leDelicePicture,
    street: 'Folie-Méricourt',
    isNew: false,
  },
]
