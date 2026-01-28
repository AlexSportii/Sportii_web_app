
import { TeamMember, FooterLinkGroup, Game } from './types';

export const TEAM_MEMBERS: TeamMember[] = [
    {
        name: "Alejandro Fernandez",
        role: "CTO",
        description: "-",
        imageUrl: "",
        icon: "sports_basketball"
    },
    {
        name: "Paul Lepineau",
        role: "CEO",
        description: "Building seamless experiences for users.",
        imageUrl: "",
        icon: "code"
    },
    {
        name: "Felix Nicot",
        role: "CMO",
        description: "Connecting players across 50+ cities.",
        imageUrl: "",
        icon: "campaign"
    }
];

export const ALL_GAMES: Game[] = [
    {
        id: '1',
        sport: 'Football',
        title: '5v5 Friendly Match',
        location: 'Downtown Sports Complex',
        time: '18:00',
        date: 'Today',
        currentPlayers: 2,
        maxPlayers: 10,
        price: '€12',
        image: '/hero-background.jpg',
        hostName: 'Alex M.',
        hostAvatar: '',
    },
    {
        id: '2',
        sport: 'Football',
        title: 'Doubles Practice',
        location: 'City Park Courts',
        time: '10:00',
        date: 'Tomorrow',
        currentPlayers: 4,
        maxPlayers: 4,
        price: '€15',
        image: '/hero-background.jpg',
        hostName: 'Sarah J.',
        hostAvatar: '',
    },
    {
        id: '3',
        sport: 'Futsal',
        title: '3v3 Pickup Game',
        location: 'Venice Beach Courts',
        time: '19:30',
        date: 'Today',
        currentPlayers: 4,
        maxPlayers: 6,
        price: 'Free',
        image: '/hero-background.jpg',
        hostName: 'Mike T.',
        hostAvatar: '',
    },
    {
        id: '4',
        sport: 'Futsal',
        title: 'Sunset Yoga Flow',
        location: 'Community Center',
        time: '18:00',
        date: 'Wed, Oct 24',
        currentPlayers: 12,
        maxPlayers: 20,
        price: '€10',
        image: '/hero-background.jpg',
        hostName: 'Emma W.',
        hostAvatar: '',
    },
    {
        id: '5',
        sport: 'Padel',
        title: 'Intermediate Match',
        location: 'Padel Club Center',
        time: '14:00',
        date: 'Sat, Oct 27',
        currentPlayers: 2,
        maxPlayers: 4,
        price: '€18',
        image: '/hero-background.jpg',
        hostName: 'David C.',
        hostAvatar: '',
    }
];

export const FOOTER_LINKS: FooterLinkGroup[] = [
    {
        title: "Company",
        links: [
            { label: "About Us", href: "#" },
            // { label: "Careers", href: "#" },
            // { label: "Blog", href: "#" },
            // { label: "Press", href: "#" },
        ]
    },
    {
        title: "Support",
        links: [
            { label: "Help Center", href: "#" },
            { label: "Terms of Service", href: "/terms" },
            { label: "Privacy Policy", href: "#" },
            { label: "Contact Us", href: "#" },
        ]
    }
];

