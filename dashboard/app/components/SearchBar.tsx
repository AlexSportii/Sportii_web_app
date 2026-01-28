import React from 'react';

const SearchBar: React.FC = () => {
    return (
        <section className="relative z-10 -mt-12 px-4 sm:px-6 lg:px-8 mb-12">
            <div className="max-w-5xl mx-auto">
                <div className="bg-white dark:bg-gray-900 rounded-3xl shadow-2xl p-2 border border-gray-100 dark:border-gray-800">
                    <form className="flex flex-col md:flex-row md:items-center divide-y md:divide-y-0 md:divide-x divide-gray-100 dark:divide-gray-800">

                        {/* Search Input */}
                        <div className="flex-1 px-6 py-4 flex items-center gap-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
                                <span className="material-symbols-outlined text-2xl">search</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">What</label>
                                <input
                                    type="text"
                                    placeholder="Tennis, Football, Yoga..."
                                    className="w-full bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 font-semibold text-base focus:ring-0 p-0"
                                />
                            </div>
                        </div>

                        {/* Location Input */}
                        <div className="flex-1 px-6 py-4 flex items-center gap-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
                                <span className="material-symbols-outlined text-2xl">location_on</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">Where</label>
                                <input
                                    type="text"
                                    placeholder="City, field or venue"
                                    className="w-full bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 font-semibold text-base focus:ring-0 p-0"
                                />
                            </div>
                        </div>

                        {/* Date Input */}
                        <div className="flex-1 px-6 py-4 flex items-center gap-4">
                            <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl text-primary">
                                <span className="material-symbols-outlined text-2xl">calendar_today</span>
                            </div>
                            <div className="flex flex-col w-full">
                                <label className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1">When</label>
                                <input
                                    type="date"
                                    className="w-full bg-transparent border-none outline-none text-gray-900 dark:text-white placeholder-gray-400 font-semibold text-base focus:ring-0 p-0 min-h-[24px]"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <div className="p-2 md:pl-0">
                            <button type="submit" className="w-full md:w-auto md:aspect-square md:h-20 bg-primary hover:bg-blue-600 text-white rounded-2xl flex items-center justify-center transition-all shadow-lg shadow-blue-500/30 hover:scale-105 active:scale-95">
                                <span className="material-symbols-outlined text-3xl">search</span>
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    );
};

export default SearchBar;
