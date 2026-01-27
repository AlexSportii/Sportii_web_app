import React from 'react';

const CTA: React.FC = () => {
    return (
        <section className="py-20 px-4">
            <div className="max-w-5xl mx-auto bg-primary rounded-3xl p-10 md:p-16 text-center shadow-2xl relative overflow-hidden">
                {/* Background blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary/30 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl"></div>

                <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to dominate the court?</h2>
                    <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
                        Join thousands of players already using Sportii to find their next game. The court is waiting for you.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <button className="px-8 py-4 bg-white text-primary font-bold rounded-xl hover:bg-gray-50 transition-colors shadow-lg cursor-pointer">
                            Download App
                        </button>
                        <button className="px-8 py-4 bg-primary border-2 border-white/30 text-white font-bold rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                            Browse Venues
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
