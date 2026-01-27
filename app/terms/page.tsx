'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useState, useEffect } from 'react';
import { createClient } from '@/utils/supabase/client';
import { User } from '@supabase/supabase-js';

export default function TermsPage() {
    const [isDark, setIsDark] = useState<boolean>(false);
    const [user, setUser] = useState<User | null>(null);
    const supabase = createClient();

    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }

        const getUser = async () => {
            const { data: { user } } = await supabase.auth.getUser();
            setUser(user);
        };
        getUser();
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
            <Navbar isDark={isDark} toggleTheme={toggleTheme} user={user} />
            <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 sm:p-12 border border-gray-100 dark:border-gray-700">
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-8 text-center">
                        Terms & Conditions
                    </h1>

                    <div className="prose prose-blue dark:prose-invert max-w-none space-y-6 text-gray-700 dark:text-gray-300">
                        <p className="text-sm text-gray-500 dark:text-gray-400 font-semibold">
                            Last updated: October 21, 2025
                        </p>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">1) Agreement to Terms</h3>
                            <p>
                                These Terms & Conditions (“Terms”) form a legally binding agreement between you (“you”) and SportMeet Oy (“Sportii,” “we,” “us,” or “our”) regarding your access to and use of sportii.app and related subdomains, web apps, mobile experiences, and communications (collectively, the “Platform”). By accessing or using the Platform, you agree to these Terms. If you do not agree, do not use the Platform.
                            </p>
                            <p className="mt-2">
                                We may update these Terms from time to time. We will indicate the effective date at the top. Your continued use of the Platform after changes are posted constitutes acceptance of the revised Terms.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">2) Who We Are (Company Details)</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Company:</strong> SportMeet Oy</li>
                                <li><strong>Company No.:</strong> 3427424-5</li>
                                <li><strong>Contact:</strong> contact@sportii.app</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">3) Eligibility & Accounts</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Age:</strong> The Platform is intended for adults 18+. If you are 16–17, you may only use the Platform and join activities with verifiable parental/guardian consent provided in accordance with our onboarding instructions. Users under 16 are not permitted. Organizers may deny participation if age requirements are not met; refunds may not apply if you misrepresent your age.</li>
                                <li><strong>Account:</strong> You may need an account. You agree to provide accurate, current information and to keep it updated. You are responsible for safeguarding your login and all activity under your account.</li>
                                <li><strong>One Account:</strong> Do not share, transfer, or sell your account. We may reclaim usernames that are offensive or infringe rights.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">4) Bookings, Payments, Wallet & Credits</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Pricing:</strong> Prices for games, sessions, leagues, or other activities (“Activities”) are shown at checkout and may vary by sport, venue, time, demand, or promotions. Taxes and fees may apply.</li>
                                <li><strong>Payments:</strong> Payments are processed via Stripe Checkout (supporting cards and Apple/Google Pay where available). You authorize Sportii and Stripe to charge your selected method for the total amount. We do not store full card details.</li>
                                <li><strong>Wallet / Balance:</strong> If you top up a Sportii Wallet (balance in credits), your balance will be debited on each booking.</li>
                                <li><strong>Expiry:</strong> Promotional credits may expire as stated in the offer. Purchased wallet funds do not expire under EU consumer law, but can be refunded only per Section 6 (Refunds) or if required by law.</li>
                                <li><strong>Non-transferable:</strong> Wallet funds/credits are personal, non-transferable, and not for resale.</li>
                                <li><strong>Chargebacks:</strong> If you dispute a payment, you agree to cooperate with us and Stripe. If a chargeback is resolved against you, you authorize us to recover the amount and any third-party fees from your payment method or wallet balance.</li>
                                <li><strong>Pricing Errors:</strong> We may cancel and refund bookings affected by apparent errors (e.g., obvious mispricing), even after confirmation.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">5) Cancellations, No-Shows & Weather</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Your cancellation:</strong>
                                    <ul className="list-circle pl-5 mt-1 space-y-1">
                                        <li><strong>Standard games:</strong> Cancel ≥ 10 hours before the start of the game and you will get a full automatic game credits refund to your wallet.</li>
                                        <li><strong>Late cancels ({'<'} 10 hours) or no-shows:</strong> non-refundable.</li>
                                    </ul>
                                </li>
                                <li><strong>Organizer cancellation / under-capacity:</strong> If Sportii or the host cancels (including due to low attendance), you’ll receive a full wallet refund (or original method if required by law) or the option to rebook.</li>
                                <li><strong>Weather / venue safety:</strong> Activities may be delayed, moved, or canceled for safety or venue reasons. We’ll try to notify you promptly. Refunds or rebook options apply when the Activity is canceled before start.</li>
                                <li><strong>Transfers:</strong> You may not transfer your booking to another user unless a specific feature allows it.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">6) Refunds</h3>
                            <p>
                                Refunds are processed to your Sportii Wallet by default. Where required by applicable consumer law (e.g., statutory withdrawal rights for distance services that are not time-specific), we will refund to your original payment method. Time-specific leisure services may be exempt from withdrawal rights—local law applies. Processing times depend on your bank or payment provider. Refunds may take 3 to 7 business days to arrive in your account.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">7) Activities, Hosts & Venue Rules</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Hosts:</strong> Some Activities are facilitated by Sportii staff or independent hosts (“Hosts”). Hosts may check eligibility, enforce safety, and deny participation (e.g., intoxication, aggressive conduct, unsafe behavior).</li>
                                <li><strong>Venue rules:</strong> You must follow venue policies (footwear, equipment, check-in procedures, facility rules). Failure to comply may result in removal without refund.</li>
                                <li><strong>Equipment:</strong> Unless stated, you are responsible for your own equipment and attire.</li>
                                <li><strong>Timeliness:</strong> Arrive on time. Late arrivals may not be admitted.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">8) Health, Safety, Assumption of Risk & Release</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Health:</strong> You confirm you are fit to participate and have no medical condition that would make participation unsafe. Consult a medical professional if unsure.</li>
                                <li><strong>Assumption of Risk:</strong> Sports and physical activities carry inherent risks (injury, illness, property loss). You participate voluntarily and at your own risk.</li>
                                <li><strong>Release:</strong> To the fullest extent permitted by law, you release Sportii, its affiliates, directors, employees, and Hosts from liability for injuries or losses arising from ordinary negligence during Activities, except where prohibited by law (e.g., intent or gross negligence).</li>
                                <li><strong>Insurance:</strong> Sportii does not provide medical, personal property, or liability insurance for users. You are responsible for your own coverage.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">9) User Responsibility for Property Damage</h3>
                            <p>You are solely responsible for any damage you cause to venues, equipment, or third-party property. You agree to indemnify Sportii for related claims, costs, or losses (see Section 18).</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">10) Conduct & Prohibited Activities</h3>
                            <p className="mb-2">You agree not to:</p>
                            <ul className="list-disc pl-5 space-y-1 mb-2">
                                <li>break any law or venue rule; harass, abuse, or harm others; use hate speech; or threaten violence;</li>
                                <li>use bots, scraping, or data mining; attempt to bypass security; reverse engineer the Platform;</li>
                                <li>submit false reports, spam, or deceptive content;</li>
                                <li>collect other users’ data without consent;</li>
                                <li>advertise or sell goods/services on the Platform without our written permission;</li>
                                <li>interfere with Activities or the Platform’s operation;</li>
                                <li>impersonate another person or misrepresent your affiliation.</li>
                            </ul>
                            <p>We may moderate chats and groups but are not obliged to do so. We may remove content or suspend accounts at our discretion.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">11) User Content; Reviews; License to Sportii</h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li><strong>Contributions:</strong> If you post, upload, or submit text, images, reviews, suggestions, or other content (“User Content”), you grant Sportii a worldwide, non-exclusive, royalty-free, sublicensable, transferable license to use, reproduce, display, distribute, and create derivative works for operating, improving, and promoting the Platform and Activities.</li>
                                <li><strong>Your promises:</strong> You own or have rights to your User Content; it is lawful and accurate; and it does not infringe others’ rights.</li>
                                <li><strong>Reviews:</strong> Reviews must reflect genuine experiences, avoid discriminatory/illegal content, and not be part of manipulation campaigns. We may remove or keep reviews at our discretion.</li>
                            </ul>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">12) Photography, Audio & Video</h3>
                            <p>
                                By attending Activities, you consent to Sportii and Hosts capturing photos, video, and audio that may include you, and to Sportii using such media for Platform features, event recaps, and marketing (web, app, social, ads), without compensation.
                            </p>
                            <p className="mt-2 text-sm italic">
                                <strong>Opt-out process:</strong> If you prefer not to be identifiable: (a) tell the Host on arrival; (b) avoid posed group shots; and (c) email contact@sportii.app with event details—upon request we will take reasonable steps to avoid future use or to remove identifiable media where feasible.
                            </p>
                            <p className="mt-2">
                                We process such media in line with applicable data protection laws and our Privacy Policy.
                            </p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">13) Intellectual Property</h3>
                            <p>The Platform, including code, databases, design, text, graphics, photos, video, and trademarks (“Sportii IP”) is owned by or licensed to Sportii and protected by IP laws. You receive a limited, revocable, non-transferable license to access and use the Platform for personal, non-commercial purposes. Do not copy, modify, distribute, or exploit Sportii IP without prior written permission.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">14) Social Logins & Connected Accounts</h3>
                            <p>If you connect third-party accounts (e.g., Apple/Google/Facebook), you authorize us to access and use information from those accounts as described during linking and in our Privacy Policy. You can disconnect at any time via settings.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">15) Privacy & Data</h3>
                            <p>We care about privacy. See our Privacy Policy (incorporated by reference) for details on data categories, legal bases (GDPR), retention, international transfers, and your rights (access, deletion, portability, objection, restriction, and withdrawal of consent where applicable).</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">16) Service Changes; Availability</h3>
                            <p>We may change, suspend, or discontinue any part of the Platform or Activities without notice. We do not guarantee continuous, uninterrupted availability. We are not liable for outages or delays, except as required by law.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">17) Indemnification</h3>
                            <p>You agree to defend, indemnify, and hold harmless Sportii and its affiliates, officers, employees, contractors, and Hosts from claims, damages, liabilities, costs, and expenses (including reasonable legal fees) arising from: (a) your use of the Platform or participation in Activities; (b) your User Content; (c) your breach of these Terms or applicable law; or (d) your infringement of third-party rights.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">18) Disclaimers</h3>
                            <p>The Platform and Activities are provided “as is” and “as available.” To the fullest extent permitted by law, we disclaim warranties of merchantability, fitness for a particular purpose, and non-infringement, and any warranties arising out of course of dealing or usage. We do not warrant that the Platform will be error-free or secure, or that Activities will meet your expectations.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">19) Limitation of Liability</h3>
                            <p>Nothing in these Terms limits liability that cannot be limited under law (e.g., death or personal injury caused by our gross negligence or intentional misconduct). Subject to that:</p>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>We are not liable for indirect, incidental, special, consequential, exemplary, or punitive damages (including lost profits, data loss, or business interruption).</li>
                                <li>Our aggregate liability to you for any claims arising from the Platform or Activities is limited to the greater of €50 or the total amounts you paid to Sportii in the six (6) months preceding the event giving rise to the claim.</li>
                            </ul>
                            <p className="mt-2">Consumer rights under mandatory law remain unaffected.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">20) Electronic Communications & Signatures</h3>
                            <p>You consent to receive communications electronically and agree that electronic signatures, agreements, orders, and records have the same legal effect as their physical counterparts, to the maximum extent permitted by law.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">21) Suspension & Termination</h3>
                            <p>We may suspend or terminate your access at any time for any breach or suspected misuse. You may close your account at any time via settings or by contacting support. Certain sections survive termination (e.g., IP, disclaimers, liability limits, indemnity).</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">22) Governing Law & Jurisdiction; EU Consumers; ODR</h3>
                            <p>These Terms are governed by the laws of Finland, excluding conflict-of-law rules and excluding the UN Convention on Contracts for the International Sale of Goods.</p>
                            <p>If your habitual residence is in the EU and you are a consumer, you also benefit from mandatory protections of your country of residence.</p>
                            <p>Courts of Finland have non-exclusive jurisdiction. You may bring claims in your EU country of residence to enforce consumer protections.</p>
                            <p>EU ODR platform: <a href="https://ec.europa.eu/consumers/odr" className="text-primary hover:underline">https://ec.europa.eu/consumers/odr</a></p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">23) Third-Party Links & Services</h3>
                            <p>We are not responsible for third-party websites, apps, or services linked on the Platform. Your dealings with third parties are solely between you and them.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">24) Force Majeure</h3>
                            <p>We are not liable for delays or failures due to events beyond our reasonable control (e.g., extreme weather, strikes, epidemics, government action, internet outages).</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">25) Miscellaneous</h3>
                            <p>If any provision is found invalid or unenforceable, the remaining provisions remain in effect. No waiver is effective unless in writing. You may not assign these Terms without our consent; we may assign at any time. No partnership, agency, or employment relationship is created by these Terms. These Terms, plus incorporated policies, are the entire agreement regarding the Platform.</p>
                        </section>

                        <section>
                            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">26) Contact Us</h3>
                            <p className="font-semibold">SportMeet Oy</p>
                            <p>00640 Helsinki, Finland</p>
                            <p>Email: <a href="mailto:contact@sportii.app" className="text-primary hover:underline">contact@sportii.app</a></p>
                        </section>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
