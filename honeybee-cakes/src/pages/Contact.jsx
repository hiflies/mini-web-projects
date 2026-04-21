export default function Contact() {
    return (
        <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
            <header className="mb-16 text-center md:text-left">
                <span className="text-tertiary font-label uppercase tracking-widest text-sm mb-4 block">Reach Us</span>
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-background leading-tight">Contact Us
                    </h1>
                <p className="mt-6 text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                    Whether it's a dream wedding cake or a sweet treat for your afternoon tea, we're here to bring your
                    vision to life.
                </p>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                <div className="lg:col-span-7 bg-surface-container-low rounded-xl p-8 md:p-12">
                    <form className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="relative">
                                <input
                                    className="peer block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                                    id="name" placeholder=" " type="text"/>
                                <label
                                    className="absolute top-3 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                                    htmlFor="name">Name</label>
                            </div>
                            <div className="relative">
                                <input
                                    className="peer block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                                    id="email" placeholder=" " type="email"/>
                                <label
                                    className="absolute top-3 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                                    htmlFor="email">Email</label>
                            </div>
                        </div>
                        <div className="relative">
                            <textarea
                                className="peer block w-full border-0 border-b border-outline-variant bg-transparent py-3 px-0 focus:ring-0 focus:border-primary transition-all placeholder-transparent"
                                id="message" placeholder=" " rows="4"></textarea>
                            <label
                                className="absolute top-3 left-0 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                                htmlFor="message">Your Message</label>
                        </div>
                        <button
                            className="honey-gradient w-full md:w-auto px-10 py-4 rounded-xl text-on-primary font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg"
                            type="submit">
                            Send Message
                        </button>
                    </form>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-8">
                    <div
                        className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-between group overflow-hidden relative">
                        <div
                            className="absolute -right-4 -top-4 opacity-5 transform group-hover:scale-110 transition-transform duration-700">
                            <span className="material-symbols-outlined text-[120px]" data-icon="mail">mail</span>
                        </div>
                        <div className="relative z-10">
                            <div
                                className="w-12 h-12 bg-primary-container rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-on-primary-container"
                                      data-icon="alternate_email">alternate_email</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-2">Write to Us</h3>
                            <p className="text-on-surface-variant mb-6">Our artisanal response team usually replies
                                within 24 hours.</p>
                            <a className="text-xl font-bold text-primary hover:underline decoration-primary/30 underline-offset-8"
                               href="mailto:hello@honeybeecakes.com">hello@honeybeecakes.com</a>
                        </div>
                    </div>
                    <div
                        className="bg-primary-container/10 border border-primary/10 rounded-xl p-8 flex flex-col justify-between relative overflow-hidden">
                        <div className="relative z-10">
                            <div
                                className="w-12 h-12 bg-tertiary-container/30 rounded-full flex items-center justify-center mb-6">
                                <span className="material-symbols-outlined text-tertiary"
                                      data-icon="location_on">location_on</span>
                            </div>
                            <h3 className="font-headline text-2xl font-bold mb-2">Our Studio</h3>
                            <address className="not-italic text-on-surface-variant leading-relaxed">
                                Honeybee Cakes<br/>
                                Oxievångsvägen 97, Oxie 23840<br/>
                                Malmö, Sweden
                            </address>
                        </div>
                        <div className="mt-8 flex gap-4">
                            <div
                                className="flex-1 h-32 rounded-lg overflow-hidden bg-surface-container-highest grayscale hover:grayscale-0 transition-all duration-500 cursor-pointer">
                                <img className="w-full h-full object-cover"
                                     data-alt="minimalist aesthetic map of an urban neighborhood with soft beige and gold color scheme"
                                     data-location="Istanbul"
                                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZM-GEfGZbDZYYm975u9r8ve0v4HMxNiGdaBcNONPxo7Yt5Y2HNWB4KOb3RZRRUQxhIcl7n6lGzpcPVGyFFv_GcISQAFTTyJwFFHVxFjM-tASwocycRi5wE_ig9kBuu-es-xNsvnufL0ZTmFsQoocavLodUt39o9cyY831Ldl4Z0pf4Y2hovQFjcnnM-SqSttdB-NI0W0gNiRsEF8aDK8Mw3xWIocsX-U9PwYjsOp_O1lPuCHv_sTwrhZeuYpBICdVBaHLZJCBJpbC"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="relative group">
                    <div
                        className="absolute inset-0 bg-primary-fixed-dim rounded-xl -rotate-3 scale-95 group-hover:rotate-0 group-hover:scale-100 transition-transform duration-700"></div>
                    <img
                        className="relative z-10 w-full h-[500px] object-cover rounded-xl shadow-xl transition-transform duration-700"
                        data-alt="exquisite multi-tiered wedding cake decorated with fresh wildflowers and honey-colored drizzle on a rustic wooden table with soft morning light"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCEoT70t2gJmfy3O-3AXcqh4Ywm8FMJIjbCCdgoPy5mQV3ZDtJM_LQiGPyMOTwTX29Xe1sGO6QBWKYugVY_373qAF_4QvfWuOuUh8is1UFMPqY6BJKfS5_Gqss2r0aNkh18mv7IotRdovGJS2ASOVRuNNSZAWnEPIV30kJmmbSnbt8hqHyVqwTPEfgGi-PJ7wT60uoJ6PwbQCU188RkFaQuFq1Ues722sz8Zrdp7sRTjmYXsiQjR05tgBwwYXxH7DVojOPRBV24EKVy"/>
                </div>
                <div className="pl-0 md:pl-8">
                    <h2 className="font-headline text-4xl font-bold text-on-background mb-6">Let's Create Something
                        Sweet Together</h2>
                    <p className="text-on-surface-variant text-lg leading-relaxed mb-8">
                        Every cake we bake is a unique story told through ingredients. Visit our studio for a tasting
                        session or drop us a message to start your custom order. We specialize in wedding cakes,
                        birthday celebrations, and corporate events with a signature honey-kissed touch.
                    </p>
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary"
                                  data-icon="schedule">schedule</span>
                            <span className="font-medium">Tue - Sat: 10:00 AM - 7:00 PM</span>
                        </div>
                        <div className="flex items-center gap-4">
                            <span className="material-symbols-outlined text-primary"
                                  data-icon="phone_iphone">phone_iphone</span>
                            <span className="font-medium">+46 72 835 41 66</span>
                        </div>
                    </div>
                </div>
            </div>
        </main>

    );
}