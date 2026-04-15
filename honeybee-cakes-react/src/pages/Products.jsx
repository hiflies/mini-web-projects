export default function Products() {
    return (
        <main className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
            <header className="mb-20 text-center md:text-left">
                <span
                    className="text-tertiary font-label uppercase tracking-widest text-sm mb-4 block">Our Collection</span>
                <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-tight text-on-surface leading-tight mb-6">
                    Artisanal Pastries <br className="hidden md:block"/> &amp; Custom Creations
                </h1>
                <p className="text-on-surface-variant max-w-2xl text-lg leading-relaxed">
                    Hand-crafted with organic ingredients and a dash of golden honey. Explore our signature cupcakes and
                    breathtaking wedding cakes.
                </p>
            </header>
            <section className="mb-24">
                <div className="flex items-end justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-outline-variant"></div>
                        <h2 className="font-headline text-3xl font-bold italic">Cupcakes</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
                    <div className="group relative flex flex-col">
                        <div
                            className="bg-surface-container-low rounded-xl aspect-[4/5] relative mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                            <img className="w-full h-full object-cover rounded-xl -mt-6 ml-4 editorial-shadow"
                                 data-alt="Close-up of a Vanilla Bliss cupcake with swirling Madagascar vanilla bean frosting and a delicate edible gold leaf accent"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuDh6wyLf0J6XHJBQrW2xYfrley2wTL5ZxfbSmYlYei3FRlJjMD-oqGXCgiPtbp12-orlj9Pi3GiLh52X69Oj3wu2Mp1tDcTs47i7cJXYrPd_JNRxkCuilgOviVoYzs672bjrkCMHsJ8f0HXIdUyg5kjNeGM436m0PInfDaMZLS8CZLVZkbTSKa_eAKZk_tX5AlVkYgzNPhTJ0AxCfHvg3BYZR4uATIM2R33LmtpDOEc6sei7E6uXwJFrX4p-p1Jz3WohLUjooUViEYF"/>
                            <div
                                className="absolute top-0 right-0 glass-nav px-4 py-2 rounded-bl-xl rounded-tr-xl editorial-shadow">
                                <span className="font-headline text-primary font-bold">25 SEK</span>
                            </div>
                        </div>
                        <div className="px-4">
                            <h3 className="font-headline text-2xl mb-2">Vanilla Bliss</h3>
                            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Light Madagascar vanilla
                                sponge with velvet buttercream and honeycomb bits.</p>
                            <button
                                className="w-full py-4 border-b border-primary/20 text-primary font-bold hover:bg-primary-container/20 transition-colors flex items-center justify-center gap-2">
                                Add To Cart
                                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative flex flex-col lg:translate-y-12">
                        <div
                            className="bg-surface-container-low rounded-xl aspect-[4/5] relative mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                            <img className="w-full h-full object-cover rounded-xl -mt-6 ml-4 editorial-shadow"
                                 data-alt="Decadent Chocolate Dream cupcake with rich dark cocoa swirl and a single honeycomb piece resting on top"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuD6YztR9rwUXkV-wIY_52J_rQq64RwdqC4GOiGMGMGmRhTNriEQ5GILsZSYj91PFzlMF8NoIS_yxk3M5RXC2RtW0kcCH1onHqEC9I4icoJ6k9WZWgV4lkVbKvztN0etleZDUHOaG-DK5c6ScQFU6nwLR5OaxIqavsk5qUw9qeyVtnEWXK-2vloeA4HTDJDYPHKoV866IWDMXLqZMlY_QH8g17Z-7K7U_-fdogTYC866BpZlXmsXXrmUtcbJ2-wFxSnP6GYDe24PWyM3"/>
                            <div
                                className="absolute top-0 right-0 glass-nav px-4 py-2 rounded-bl-xl rounded-tr-xl editorial-shadow">
                                <span className="font-headline text-primary font-bold">25 SEK</span>
                            </div>
                        </div>
                        <div className="px-4">
                            <h3 className="font-headline text-2xl mb-2">Chocolate Dream</h3>
                            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">70% dark Belgian cocoa
                                sponge with a silky ganache core and sea salt flake.</p>
                            <button
                                className="w-full py-4 border-b border-primary/20 text-primary font-bold hover:bg-primary-container/20 transition-colors flex items-center justify-center gap-2">
                                Add To Cart
                                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                    <div className="group relative flex flex-col">
                        <div
                            className="bg-surface-container-low rounded-xl aspect-[4/5] relative mb-6 transition-transform duration-500 group-hover:-translate-y-2">
                            <img className="w-full h-full object-cover rounded-xl -mt-6 ml-4 editorial-shadow"
                                 data-alt="Lavender Honey cupcake with a soft purple floral frosting swirl and a sprig of fresh lavender"
                                 src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3PNqN8rjBVck5aIwAKB3xVBU_16mJbjZik0hs3LleSfJua7jkKEeqUzI8s6MSFEfGsl7hrr_8ON7nPEe-YUhtpRvBBA6mLDFU38aJYUi0Ud3EmcVKqHCl5YbiOq0JiGho1GCjkc9riHPS-bQgyLl_yPVDbGitcRDi5wVx16SBVVS2zDUIJ3lOcVamWZMKm8_zah5C-XyBAhbohckT7Tg4G8pc3rgyr1Mb1i-i3HBwm-KprlyW8R7sUfslD1Bh6__8Sj64REZNCqWx"/>
                            <div
                                className="absolute top-0 right-0 glass-nav px-4 py-2 rounded-bl-xl rounded-tr-xl editorial-shadow">
                                <span className="font-headline text-primary font-bold">30 SEK</span>
                            </div>
                        </div>
                        <div className="px-4">
                            <h3 className="font-headline text-2xl mb-2">Lavender Honey</h3>
                            <p className="text-on-surface-variant text-sm mb-6 line-clamp-2">Floral notes of wild
                                lavender infused into our signature honey sponge cake.</p>
                            <button
                                className="w-full py-4 border-b border-primary/20 text-primary font-bold hover:bg-primary-container/20 transition-colors flex items-center justify-center gap-2">
                                Add To Cart
                                <span className="material-symbols-outlined text-xl">shopping_bag</span>
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="mt-40">
                <div className="flex items-end justify-between mb-16">
                    <div className="flex items-center gap-4">
                        <div className="w-12 h-[1px] bg-outline-variant"></div>
                        <h2 className="font-headline text-4xl font-bold italic">Wedding Cakes</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div
                        className="group relative bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row gap-8 editorial-shadow transition-all hover:bg-surface-container">
                        <div
                            className="w-full md:w-1/2 aspect-square md:aspect-[3/4] -mt-16 relative overflow-hidden rounded-xl editorial-shadow">
                            <img
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                data-alt="Three-tier Classic White Elegance wedding cake with intricate lace frosting and fresh white peonies"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSz9zfQueEyoWxM6lXihsLobdUElSS3HeVf6cdHuRGT48LDDJE38uDQyZP36n8IkzzVfKjtHrOOq2smtoYBg9HuZGa8WeGS9rhVNG5V16kBK_PlYeoxbFTcOZomyJhvYAcJDHvYqybuzwTbktlXM39soIcEJr3Ydu504_qZ3Foyv03i6-BfM5e44-6u8rn4xyjC5rgC3NAL08C125PHUCC4IFXU2ZKfx5o3KtZHh-qe_X1Ag3XEIEeAbJP9jJwFFqZFda-otCOrrGY"/>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Signature Tier</span>
                            <h3 className="font-headline text-3xl mb-4">Classic White Elegance</h3>
                            <p className="text-on-surface-variant mb-8 leading-relaxed">A minimalist masterpiece
                                featuring our signature lemon-curd filling and smooth Swiss meringue buttercream.</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="font-headline text-2xl text-primary font-bold">1200 SEK</span>
                                <button
                                    className="honey-gradient text-on-primary px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:brightness-110">
                                    Add To Cart
                                    <span className="material-symbols-outlined">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div
                        className="group relative bg-surface-container-low rounded-xl p-8 flex flex-col md:flex-row-reverse gap-8 editorial-shadow transition-all hover:bg-surface-container lg:mt-24">
                        <div
                            className="w-full md:w-1/2 aspect-square md:aspect-[3/4] -mt-16 relative overflow-hidden rounded-xl editorial-shadow">
                            <img
                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                                data-alt="Golden Honeycomb wedding cake with metallic gold drips and organic beehive inspired textures"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPnzLKzo2gEVJk44D6m-dE6sdFDHzlalfrdV8cEisqx8tuXdiCoMRYF7aMNjZxTMi70H2ygUizhZlK0D_ONaKb6diEyw1ycGxUxvkesxXR4WxjfxN0Y1yznSBoRTeDlcaJH1eeBrigU3MdxIGfmBnrbBWuJelmtJuJ312pEgHjx3CNzIgST75QQDXtffOxXIwXyKXpXcS-i_rdZdE1cAf-gz0qDeYhUUx0kmsF_HYTIrm4TgM13ygPZ-UuKc3Bn9Dv7uU6o8KlPPep"/>
                        </div>
                        <div className="flex-1 flex flex-col justify-center">
                            <span className="text-primary font-bold text-sm tracking-widest uppercase mb-2">Themed Masterpiece</span>
                            <h3 className="font-headline text-3xl mb-4">Golden Harvest</h3>
                            <p className="text-on-surface-variant mb-8 leading-relaxed">Bold and artistic design with
                                caramelized honey layers, walnuts, and genuine edible gold leaf drip.</p>
                            <div className="flex items-center justify-between mt-auto">
                                <span className="font-headline text-2xl text-primary font-bold">1500 SEK</span>
                                <button
                                    className="honey-gradient text-on-primary px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:brightness-110">
                                    Add To Cart
                                    <span className="material-symbols-outlined">add_shopping_cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>

    );
}