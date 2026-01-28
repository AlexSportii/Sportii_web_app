import React from 'react';

const StatsCard: React.FC = () => {
    return (
        <div className="w-full max-w-md mx-auto mt-8">
            <h3 className="text-white font-bold text-lg mb-4 uppercase tracking-wider pl-1">My Stats</h3>
            <div className="bg-[#1a1f3d] rounded-3xl p-6 border border-blue-900/30 shadow-xl">

                {/* Top Row: Games Played & Goals Scored */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-[#13172d] rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                        <span className="text-gray-400 text-xs font-medium mb-1">Games played</span>
                        <span className="text-white text-2xl font-bold">0</span>
                    </div>
                    <div className="bg-[#13172d] rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                        <span className="text-gray-400 text-xs font-medium mb-1">Goals scored</span>
                        <span className="text-white text-2xl font-bold">0</span>
                    </div>
                </div>

                {/* Bottom Row: Won, Draw, Lost */}
                <div className="grid grid-cols-3 gap-4">
                    <div className="bg-[#13172d] rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                        <span className="text-gray-400 text-xs font-medium mb-1">Won</span>
                        <span className="text-white text-2xl font-bold">0</span>
                    </div>
                    <div className="bg-[#13172d] rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                        <span className="text-gray-400 text-xs font-medium mb-1">Draw</span>
                        <span className="text-white text-2xl font-bold">0</span>
                    </div>
                    <div className="bg-[#13172d] rounded-xl p-4 flex flex-col items-center justify-center border border-white/5">
                        <span className="text-gray-400 text-xs font-medium mb-1">Lost</span>
                        <span className="text-white text-2xl font-bold">0</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StatsCard;
