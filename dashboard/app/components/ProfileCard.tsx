import React from 'react';
import { User } from '@supabase/supabase-js';

interface ProfileCardProps {
    user: User | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
    // Mock data for now as per requirements, or derived from user metadata if available
    const age = '-';
    const position = '-';
    const nationality = '🏳️'; // Placeholder flag
    const initials = user?.email ? user.email.substring(0, 2).toUpperCase() : 'AC';

    return (
        <div className="w-full max-w-md mx-auto">
            <div className="bg-[#1a1f3d] rounded-3xl p-6 relative border border-blue-900/30 shadow-xl overflow-visible mt-10">
                {/* Avatar Section - Positioned absolute at top center */}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-b from-gray-600 to-gray-800 flex items-center justify-center border-4 border-[#0f1222] shadow-lg">
                        <span className="text-2xl font-bold text-white tracking-widest">{initials}</span>
                    </div>
                    <button className="absolute bottom-0 right-0 bg-blue-500 rounded-full p-1.5 border-2 border-[#1a1f3d] hover:bg-blue-600 transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-white">
                            <path d="M12 9a3.75 3.75 0 100 7.5A3.75 3.75 0 0012 9z" />
                            <path fillRule="evenodd" d="M9.344 3.071a49.52 49.52 0 015.312 0c.967.052 1.83.585 2.332 1.39l.821 1.317c.24.383.645.643 1.11.71.386.054.77.113 1.152.177 1.432.239 2.429 1.493 2.429 2.909V18a3 3 0 01-3 3h-15a3 3 0 01-3-3V9.574c0-1.416.997-2.67 2.429-2.909.382-.064.766-.123 1.151-.178a1.56 1.56 0 001.11-.71l.822-1.315a2.942 2.942 0 012.332-1.39zM6.75 12.75a5.25 5.25 0 1110.5 0 5.25 5.25 0 01-10.5 0zm12-1.5a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
                        </svg>
                    </button>
                </div>

                {/* Spacer for avatar */}
                <div className="h-12"></div>

                {/* Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8 text-center">
                    <div className="flex flex-col gap-2 relative">
                        {/* Dashed separators */}
                        <div className="absolute right-0 top-1/4 h-1/2 w-[1px] bg-gray-600/50 hidden md:block"></div>
                        <span className="text-gray-400 text-sm font-medium">Age</span>
                        <span className="text-white text-xl font-bold">{age}</span>
                    </div>
                    <div className="flex flex-col gap-2 relative">
                        <div className="absolute right-0 top-1/4 h-1/2 w-[1px] bg-gray-600/50 hidden md:block"></div>
                        <span className="text-gray-400 text-sm font-medium">Position</span>
                        <span className="text-white text-xl font-bold">{position}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-gray-400 text-sm font-medium">Nationality</span>
                        <span className="text-2xl">{nationality}</span>
                    </div>
                </div>

                {/* Edit Profile Button */}
                <button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                    </svg>
                    Edit profile
                </button>
            </div>

            {/* Bottom Action Button - Outside the card as in design */}
            <button className="w-full mt-4 bg-blue-500/90 hover:bg-blue-600 text-white font-bold py-3 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 shadow-lg shadow-blue-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0V5.625a2.25 2.25 0 11-4.5 0v3.375m7.5 0v2.25m-7.5 0v2.25" />
                </svg>
                MY PLAYER CARD
            </button>
        </div>
    );
};

export default ProfileCard;
