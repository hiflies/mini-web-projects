export default function Home ({setPage}) {
    return (
        <main>
            <section className="relative min-h-screen flex items-center px-6 pt-24 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="z-10 order-2 lg:order-1">
                        <span className="text-tertiary font-bold tracking-[0.2em] uppercase text-sm mb-4 block">Traditional and Modern</span>
                        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl text-on-surface leading-[1.1] mb-8 -tracking-[0.02em]">
                            Honeybee Cakes <br/>
                            <span className="italic text-primary">For Your Sweetest Memories</span>
                        </h1>
                        <p className="text-on-surface-variant text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
                            Every slice tells a story, every recipe carries passion. We celebrate your special moments with handmade cakes made from natural ingredients.”
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <button
                                onClick={() => setPage('products')}
                                className="honey-gradient text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform shadow-lg">
                                Discover our products
                            </button>
                            <button
                                onClick={() => setPage('contact')}
                                className="bg-surface-container-highest text-primary px-8 py-4 rounded-xl font-bold text-lg hover:bg-surface-container-high transition-colors">
                                Contact us
                            </button>
                        </div>
                    </div>
                    <div className="relative order-1 lg:order-2">
                        <div
                            className="absolute inset-0 bg-primary-fixed/20 blur-[120px] rounded-full scale-125"></div>
                        <div className="relative z-10 -mr-12 lg:-mr-24">
                            <img alt="Signature Cake"
                                 className="w-full aspect-[4/5] object-cover rounded-xl editorial-shadow rotate-2 hover:rotate-0 transition-transform duration-500"
                                 data-alt="Exquisite multi-layered honey cake decorated with fresh honeycomb, delicate white flowers, and dripped honey on a rustic ceramic stand with soft golden hour lighting."
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6mgHh3q-CKDqIxw2SrvEa8hbH4YotaE1CblUAPbigVhKcoq14pt2_OahfEGDz-GGyxCNOWblUEUCRj_925ohaAQutPP0JZ6qxOxTKriqNbpjtq87-IEfJKYuIbFYglw718m2hxGJ7CGn_HP8iPskD8ac5GiYFRARYRD_WgCry2sX1Ax-4jCE530GKKYWn56BSOKFO6-d7vCf80ww1g9Blj26eW6l-cpsx1ACikKUzKjHqDGXkS6hgBZH02rEdBOrYGUSI7AmJGI2p"/>
                            <div
                                className="absolute -bottom-6 -left-6 bg-surface/80 glass-nav p-6 rounded-xl shadow-xl max-w-[200px]">
                                <p className="text-primary font-headline italic text-xl mb-1">Honeybee Signature</p>
                                <p className="text-on-surface-variant text-xs font-medium uppercase tracking-widest">Most Popular</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 px-6 bg-surface-container-low relative">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <div className="relative flex gap-4">
                            <div className="w-1/2 pt-12">
                                <img alt="Pastry Chef"
                                     className="w-full aspect-square object-cover rounded-xl editorial-shadow mb-4"
                                     data-alt="Artisanal pastry chef delicately dusting powdered sugar over a freshly baked lemon tart in a sun-drenched professional kitchen filled with flour and rolling pins."
                                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuCpuRYyGOYomvDezEQ45UEIgHjSgJR24qQdDarw7xMaEnc_TcmSfUKoS2KZ0hLvb6WTmcWUlK5wmBZH4bcfJyYCfeasAK69Teg7NuBlj-T6iiWvVRg6aJO3vIKtL8Tglqeqc7PKlYB3fRNqlGnxrgNJXtrc_EMbHqzbZzSQY6oedmk65A1FliteoMjSKKuPa91jDKUHKXX16b0PXOPd-Y9r4ivNB-QFtU0spu7pvo1-rGNZexGdtDd7hCpRRmiNoPT7cuDJqRdWzbuR"/>
                            </div>
                            <div className="w-1/2">
                                <img alt="Bakery Interior"
                                     className="w-full aspect-[3/4] object-cover rounded-xl editorial-shadow"
                                     data-alt="Warm and inviting bakery interior with vintage wooden shelves displaying freshly baked breads and pastries, illuminated by soft warm globe lights."
                                     src="https://lh3.googleusercontent.com/aida-public/AB6AXuBRsTyRcJXs1fqGq28cmWlOyP08uScJG664NcGZrSoP7bZEweqETiZ8u2tqUpB4KHBPpFgWqvOwsS0KSL4MlQli8LxvcMeUBvHE8B89UzYocJQn1LlKpKVJa0IoWPHkTt7g40YlMINM2lSzowP8oPTFZl-brf7x6v6IiEEZ3aeErvBEPP6n1LnCicRStP-ujT3QOnypHS9QxqTcrrwkNvAJtyBPUsweGF_Xob5C9TaFdR6KQEeGcUYJ_yOPfZW3uQmL4S64oWyoJ1-k"/>
                            </div>
                        </div>
                        <div className="space-y-8">
                            <div className="inline-flex items-center gap-2 text-tertiary">
                                <span className="w-12 h-[1px] bg-tertiary"></span>
                                <span className="font-bold uppercase tracking-widest text-sm">Our Story</span>
                            </div>
                            <h2 className="font-headline text-4xl md:text-5xl text-on-surface leading-tight">
                                <span
                                className="italic text-primary">A sweet dream</span> that started at a kitchen table
                            </h2>
                            <p className="text-on-surface-variant text-lg leading-relaxed">
                                Honeybee Cakes was founded with the dream of blending our family’s secret recipes,
                                passed down through generations, with modern touches. In every cake, we use
                                only the highest-quality butter, the freshest seasonal fruits, and real honey.
                            </p>
                            <p className="text-on-surface-variant text-lg leading-relaxed">
                                Making cakes isn’t just a job for us; it’s about becoming part of the most
                                meaningful moments you share with your loved ones.
                            </p>
                            <div className="pt-4">
                                <a className="inline-flex flex-col group" href="#about">
                                    <span
                                        onClick={() => setPage('about')}
                                        className="text-primary font-bold text-lg">Read More</span>
                                    <span
                                        className="w-3/5 h-[2px] bg-primary transition-all group-hover:w-full"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20 space-y-4">
                        <h2 className="font-headline text-4xl md:text-5xl">Customer Reviews</h2>
                        <p className="text-on-surface-variant max-w-xl mx-auto italic">We’re proud to be part of
                            the moments our guests love most and share with us.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div
                            className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow relative group hover:-translate-y-2 transition-transform duration-300">
                              <span
                                  className="material-symbols-outlined text-primary-container text-6xl absolute -top-4 -left-4 opacity-50">format_quote</span>
                            <div className="flex gap-1 mb-6">
                                  <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                  >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                            </div>
                            <p className="text-on-surface-variant italic leading-relaxed mb-8">“We chose Honeybee Cakes for our wedding cake, and it was truly enchanting. It received full marks from all our guests, both in appearance and taste.”</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img alt="Elif Y." className="w-full h-full object-cover"
                                         data-alt="Headshot of a smiling woman with brown hair in a bright, airy setting, exuding happiness and satisfaction."
                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWhMIyaZv3MmM1MlHtzgWOYhjVt7ih4tXxjV9b5ClrCzDySZJ-AdGn8CGQ9smjT4C8Wem15FP6dncKnVGpQFZhScBPhn7X9mEHgfXs10RFYwYDS-m8MQeOWU8b_yztb_-egJfwNPeI9HudJp9L-ZzkC3VdZ2fPwFLdCYU8h5cToTNT4KbFtz2uaNnaFcwBsb9k90Jj3WoWZjRXKov9F1AKyLon0S_wrd-h-cd24yZF6a2YgpApzeErlGXuFpdLLmh1T4ENIE7_J6rq"/>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Elif Yılmaz</p>
                                    <p className="text-xs uppercase tracking-widest text-on-surface-variant">Newly married bride
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow relative group hover:-translate-y-2 transition-transform duration-300">
                              <span
                                  className="material-symbols-outlined text-primary-container text-6xl absolute -top-4 -left-4 opacity-50">format_quote</span>
                            <div className="flex gap-1 mb-6">
                                  <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                  >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                            </div>
                            <p className="text-on-surface-variant italic leading-relaxed mb-8">“The lemon tarts are absolutely amazing! I’d say it’s the best patisserie in the city.”</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img alt="Can B." className="w-full h-full object-cover"
                                         data-alt="Professional man with short dark hair smiling warmly, portrait-style against a neutral background."
                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeTyHCqnbdb8nGX237GaKcxTVyw7O5go9rPYqFl3YSPakwp-HzuyReTtwri6iY1orrtVlcir2JxaSMdkssi0Kc5A4Cc-zr_Ux4dB5t3wYr5qglFX6Mjh2kJh1vwSnnNh4mywFqFmI_P43oD_9ruYzJb6IaxK6LV8q_IAmQPvfm55TqmKK6sKq5R3NajazyZaf36shqKn47juVkUhACPtccpUEh_0isu1-1pQ9n5i2eXFc5RDuc7ryWO8LJdIhA6uCNAWTBPzV2qKnz"/>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Can Berk</p>
                                    <p className="text-xs uppercase tracking-widest text-on-surface-variant">Food blogger
                                        </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="bg-surface-container-lowest p-10 rounded-xl editorial-shadow relative group hover:-translate-y-2 transition-transform duration-300">
                              <span
                                  className="material-symbols-outlined text-primary-container text-6xl absolute -top-4 -left-4 opacity-50">format_quote</span>
                            <div className="flex gap-1 mb-6">
                                  <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                  >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                                <span className="material-symbols-outlined text-primary fill-current font-variant-fill-1"
                                >star</span>
                            </div>
                            <p className="text-on-surface-variant italic leading-relaxed mb-8">“The unicorn cake we ordered for my daughter’s birthday was wonderful. The children loved both its appearance and the fresh fruits inside.”</p>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full overflow-hidden">
                                    <img alt="Merve A." className="w-full h-full object-cover"
                                         data-alt="Young woman with a gentle smile, captured in soft natural lighting in a garden setting."
                                         src="https://lh3.googleusercontent.com/aida-public/AB6AXuB92OVz5Z5WlrvW4ZxHxb2G7pgvSrsV0lHKF4RQBCCW4mMunRIya7cBAYL8Th--vUYoRXMQokgNaDLgZWAeDFvuZLp8_oWJvvxxynn90dNgYzMJY2rMkKjzOt0NMRAxAsNzIQlaw7y4lhneMsTrwp1oHv-JBNlmsJTLa2S3j8DY2uzGAhsOtvq3y6uI4g6bhBUJN9p8GdSAtrRmJ7YiCzKbtuVib5tujsJm0_iiaCYcrkto0DmeyTHC4_7ncuhNI1Uc2omK9Qr3yHt7"/>
                                </div>
                                <div>
                                    <p className="font-bold text-on-surface">Merve Aydın</p>
                                    <p className="text-xs uppercase tracking-widest text-on-surface-variant">Mother</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}