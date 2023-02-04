import home from '../assets/home.png'
import search from '../assets/search.png'
import interesting from '../assets/interesting.png'
import reels from '../assets/reels.png'
import chat from '../assets/chat.png'
import notifications from '../assets/notifications.png'
import create from '../assets/create.png'
import profileicon from '../assets/profileicon.png'


export const sideBarElements = [
    {
        title: 'Главная',
        icon: home,
        to: '/'
    },
    {
        title: 'Поисковой запрос',
        icon: search,
        to: '/search'
    },
    {
        title: 'Интересное',
        icon: interesting,
        to: '/interesting'
    },
    {
        title: 'Reels',
        icon: reels,
        to: '/Reels'
    },
    {
        title: 'Сообщения',
        icon: chat,
        to: '/chat'
    },
    {
        title: 'Уведомления',
        icon: notifications,
        to: '/notifications'
    },
    {
        title: 'Создать',
        icon: create,
        to: '/create'
    },
    {
        title: 'Профиль',
        icon: profileicon,
        to: '/profile'
    },
]