
export default function About({setPage}) {
    return (
        <main>
            <section className="relative pt-32 pb-20 px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    <div className="lg:col-span-7 z-10">
                        <span className="font-label uppercase tracking-widest text-tertiary font-bold mb-4 block">Our Artisanal Journey</span>
                        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl leading-tight mb-8 -tracking-[0.02em]">
                            <span className="italic text-primary">A story</span> in every slice
                        </h1>
                        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed mb-12">
                            For over 8 years, we have built the Honeybee Cakes brand by combining the freshest
                            ingredients with handcrafted care. Every cake is a canvas for us, and every recipe is a work
                            of art.
                        </p>
                    </div>
                    <div className="lg:col-span-5 relative">
                        <div
                            className="aspect-[4/5] rounded-xl overflow-hidden editorial-shadow -rotate-2 hover:rotate-0 transition-transform duration-700">
                            <img className="w-full h-full object-cover"
                                 data-alt="Close-up of a multi-layered artisan wedding cake decorated with edible gold leaf and delicate sugar flowers in soft natural morning light"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWCownkaWA0KaWYhI6Jjp_3SneF3B_PE5DbpzcJKV0YIebUqpWQLZPU5c-C28kuM2ji5rG-m3dWbzTylIMut4rJZeNvjI6u460shH1Yk2pUcRzuHr2bbYLncE0uvDLIJMfIoIBmtbxN2vToJ3dUkDdX--tfyXKG25tCs_ru_YqIQ9jzV4ydfeRGarhzWwYLdkORz0K0h5vRYPgn38d757sRFeIR3zcKpQAnAcre6HqFJWcGxZVsnWS7bFRPyKOvtvIbrrenhR7Savn"/>
                        </div>
                        <div
                            className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl editorial-shadow max-w-[200px] rotate-3">
                            <p className="text-primary font-headline text-4xl font-bold">8+</p>
                            <p className="text-on-surface-variant text-sm font-label uppercase tracking-tighter">Years of
                                Experience &amp; Passion</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="relative order-2 md:order-1">
                            <div
                                className="aspect-square bg-surface-container-highest rounded-full absolute -top-10 -left-10 w-64 h-64 -z-10 opacity-50"></div>
                            <img className="w-full h-auto rounded-xl editorial-shadow object-cover -mt-12"
                                 data-alt="Artisanal baker dusting flour onto a rustic wooden table with vintage baking tools around in a warm sunlit kitchen"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQeBxBPNIJZ5FeEMg4z5uvBf0QWbBJkHUE7DTaR2mG8VFHBVoh2uGPwNZXU6xdajStljZcdfvMVmKYEnD_xaT7Nf1P3L_GdWuH-i2ryp4RuesU83V0TuoU67htBPbnk-pVHWDRZmc-uPB5715zICZaPJAdomT3lsYE_g4e4-k85tjXHCQYXOrDMNZ3A45fYiBAZ68AM4Uv6pJl3ldJ0vzqWc-dyRC2syScrUVo6IaTUIP47KqdrgkDc41ICkRMU5O0CvU6n8i4_1TH"/>
                        </div>
                        <div className="order-1 md:order-2">
                            <h2 className="font-headline text-4xl md:text-5xl mb-8">Our Story</h2>
                            <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                                <p>Honeybee Cakes is the result of a simple dream that began at a kitchen counter. Our
                                    founder’s passion for baking first took root in a small workshop in 2016.</p>
                                <p>Over the past 8 years, we have been part of thousands of special moments. We have
                                    prepared every cake with great care and love, as if we were making it for our own
                                    table. Choosing natural, high-quality ingredients free from artificial additives has
                                    never been an option for us, it has always been a necessity.</p>
                                <div className="pt-6 border-l-2 border-primary-container pl-6 italic">
                                    "We don’t just make cakes; we shape your sweetest memories."
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="font-headline text-4xl md:text-5xl mb-4">Our Vision &amp; Values</h2>
                        <p className="text-on-surface-variant max-w-2xl mx-auto">We always strive for better without ever
                            compromising on our quality.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div
                            className="md:col-span-2 bg-surface-container-low p-10 rounded-xl editorial-shadow group hover:bg-white transition-colors duration-500">
                            <span className="material-symbols-outlined text-primary text-4xl mb-6">workspace_premium</span>
                            <h3 className="font-headline text-2xl mb-4">Flawless Quality</h3>
                            <p className="text-on-surface-variant leading-relaxed">With the freshest fruits, real Belgian
                                chocolate, and dairy products sourced from local producers, we aim to leave an
                                unforgettable impression on every palate. Our standards have never been limited to ‘good
                                enough’.</p>
                        </div>
                        <div
                            className="bg-primary text-on-primary p-10 rounded-xl flex flex-col justify-between group overflow-hidden relative">
                            <div className="z-10">
                                <h3 className="font-headline text-2xl mb-4">Artistic Design</h3>
                                <p className="opacity-90">We express our artistry across a wide range, from timeless
                                    classics to modern and avant-garde designs.</p>
                            </div>
                            <span
                                className="material-symbols-outlined text-white/20 text-9xl absolute -bottom-10 -right-10 group-hover:scale-110 transition-transform duration-700">palette</span>
                        </div>
                        <div className="bg-surface-container-highest p-10 rounded-xl editorial-shadow">
                            <span className="material-symbols-outlined text-tertiary text-4xl mb-6">favorite</span>
                            <h3 className="font-headline text-2xl mb-4">Customer Happiness</h3>
                            <p className="text-on-surface-variant leading-relaxed">We maintain transparent and sincere
                                communication at every stage, from order placement to delivery.</p>
                        </div>
                        <div className="md:col-span-2 relative h-64 rounded-xl overflow-hidden editorial-shadow">
                            <img className="w-full h-full object-cover"
                                 data-alt="Variety of miniature pastries and tarts displayed on a minimalist cream-colored ceramic plate with soft shadows"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJIZhcex26QWywVPKFspEHE9nUMHbdRy_KXO1uNBJGME9wzTvR0vrejn4Qo-roLyWdnM30Qxq_2oNqqQYfNbPGcqeZCmMkQ0z_0hIH0ZZw8bE8vJABrTY_4OLBITJHJQ_hQThV_oteOoojRbSXRW8FrDPrG7cftW8oUlM_xwcXptwmB3eg0ReGd24fhEtTgNxccGQFSm78dVNrHNNUdjaQs7i5YdP0jqUDcFxzBqeSXNzT4MO2yd25vel1Sii2Af4g20gpzrn_ELKo"/>
                            <div
                                className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                                <p className="text-white font-headline text-xl">Sustainability and Local Production</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-24 bg-surface-container-low">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div className="max-w-xl">
                            <h2 className="font-headline text-4xl md:text-5xl mb-4">Our Team</h2>
                            <p className="text-on-surface-variant">Honeybee Cakes is a large family of passionate
                                professional chefs and creative designers working together.</p>
                        </div>
                        <a
                            onClick={() => alert('Work in progress')}
                            className="text-primary font-bold inline-flex items-center gap-2 border-b-2 border-primary/20 pb-1 hover:border-primary transition-all"
                           href="#">
                            Work With Us <span className="material-symbols-outlined">arrow_forward</span>
                        </a>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div className="group">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                                <img
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    data-alt="Portrait of a smiling professional female pastry chef in a clean white uniform holding a whisk in a modern bakery"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2j65lh3uH3Nn2KHAsEdOtBEBOrcgxx9V8hnuGKUiB7C9hPNJ3PE9N5R63aiysjJHvh-cx1qEnmQ0sM2yvep9LP8UGFsn72eaf9eerOcBTvftrdKtdoh9IYWjWgxGFMwhNG2u5haNnLEwY06tu4uHMdj5dtdHa26Fo9w68-WytcyQJRZOdePmu0Jfjj3OWWO2Sh174vTZ9xYewvppyS82cCsXQTESAAm0G65s53lRfU2wdP_aPfwNR4QliEOmCCG4QnCkPpXBw4BH_"/>
                            </div>
                            <h4 className="font-headline text-xl text-primary">Ayşe Yılmaz</h4>
                            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mt-1">Founder &amp; Head
                                Chef</p>
                        </div>
                        <div className="group">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                                <img
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    data-alt="Portrait of a focused male pastry chef decorating a cake with precision in a high-end kitchen"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuB_lWssu15Ia4CjwcjdjnOZMVutlXjAtCTB098Xl7eXtW6gvN9tA6I3L2qhH0UcxRAQSzBxcUe7RrcgviaywIXFyD6Nf65B_XHeO9z_LLa4DuYaToH3sltBovrmqPwvCDrKVNorRqVUOHsc5iK0lgDquSwX4P_YICzq3ce1dVN8IHHZpIoR5gTpdEVOam7Uquj2-3eOHCteynDoswLW2pOSg_xs2woHiS-OUtLie3GfLrf2qlU79p6rLORC78tOYtJO-9_NkN0PBb8L"/>
                            </div>
                            <h4 className="font-headline text-xl text-primary">Caner Demir</h4>
                            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mt-1">Design
                                Specialist</p>
                        </div>
                        <div className="group">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                                <img
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    data-alt="Cheerful female baker holding a tray of freshly baked macarons in a warm bakery setting"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfJLFb51B2-6DvQpAlobplQ7juYmesGShb8y3ozOL1z2kwQgs1gNY0PkI_y5zRtbNBW_uhxrs5euGwr3-NVi4XOFD3IuENqChzudzhhwCKGYKM0iv5QOIzuANKl7VouCi5bA1pI5sGbX9_nXNNyhhMzRZgImE0TGab41dicoKUS7vY8KzLj7pOb-3NKI7Qqh0g5A2KBrvEdD25fsNwHxWsOIIMwS-i5KJwa9Q0wEtIfR86s-Tq4whReZxWZWOTbkwXBlMz0A86C6Ag"/>
                            </div>
                            <h4 className="font-headline text-xl text-primary">Selin Ak</h4>
                            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mt-1">Pastry
                                Chef</p>
                        </div>
                        <div className="group">
                            <div className="aspect-[3/4] rounded-xl overflow-hidden mb-6 editorial-shadow relative">
                                <img
                                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                                    data-alt="Friendly male staff member in a bakery cafe smiling warmly towards the camera"
                                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuASYUqw82CJE2TODXd_0KBKyD29L6EXN2zJCKDdwurGKWJZ0PyJbEih1Fm2T2qwneooHlMVl8S1M9TLYXglir8RqDAmL_I7jnfRXvu-o9MQahqriRyHUcYgfm6sib1GotK7x_LN2iuK2LYBTbwRfSozJtL7T4CG03XneNCuTFjdimURO_PGcjwXxBW1hShNyz8mJU3_yGoDVW6VDaiFeX6wDpT4M7nm0v7hPDCOreJN6Ep55Ix26RBYERCoKrPELLv93n7mRkVqa3Ww"/>
                            </div>
                            <h4 className="font-headline text-xl text-primary">Mert Soylu</h4>
                            <p className="text-on-surface-variant text-sm font-label uppercase tracking-widest mt-1">Customer
                                Relations</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-32 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="font-headline text-4xl md:text-6xl mb-8">Let’s Bake Your Dreams Together</h2>
                    <p className="text-on-surface-variant text-xl mb-12">Custom designs and unforgettable flavors for your
                        special occasions are waiting for you at Honeybee Cakes.</p>
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <button
                            onClick={() => setPage('contact')}
                            className="honey-gradient text-on-primary px-10 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 text-lg">Contact us
                        </button>
                        <button
                            onClick={() => setPage('products')}
                            className="bg-surface-container-highest text-primary px-10 py-4 rounded-xl font-bold transition-all hover:scale-105 text-lg">Explore
                            our products
                        </button>
                    </div>
                </div>
            </section>
        </main>

    );
}