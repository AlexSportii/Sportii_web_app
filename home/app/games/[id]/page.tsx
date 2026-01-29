import GameDetailsClient from '../../components/GameDetailsClient';
import { ALL_GAMES } from '../../constants';

// Handle generating static params for static export if needed, or just for Next.js to know routes
export function generateStaticParams() {
    return ALL_GAMES.map((game) => ({
        id: game.id,
    }));
}

export const metadata = {
    title: 'Sportii - Game Details',
    description: 'Join this game on Sportii.',
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;

    return <GameDetailsClient id={id} />;
}
