export interface TeamMember {
    name: string;
    role: string;
    description: string;
    imageUrl: string;
    icon: string;
}

export interface Game {
    id: string;
    sport: string;
    title: string;
    location: string;
    time: string;
    date: string;
    currentPlayers: number;
    maxPlayers: number;
    price: string;
    image: string;
    hostName: string;
    hostAvatar: string;
}

export interface FeatureItem {
    icon: string;
    text: string;
}


export interface SocialLink {
    platform: string;
    href: string;
    iconPath: string;
}

export interface FooterLinkGroup {
    title: string;
    links: { label: string; href: string }[];
}
