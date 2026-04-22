import Button from "./Button";

export default function Navigation({setPage, page}) {
    return (
        <nav
            className="fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl rounded-full px-8 py-3 bg-[#fff9f0]/70 dark:bg-[#1d1b16]/70 glass-nav z-50 flex justify-between items-center shadow-[0_12px_40px_rgba(29,27,22,0.06)]">
            <div className="text-2xl font-serif italic text-[#735c00] dark:text-[#d4af37]">Honeybee Cakes</div>
            <div className="hidden md:flex gap-8 items-center font-['Noto_Serif'] tracking-tight">
                <a className={(page === 'home' ? "text-[#735c00] dark:text-[#d4af37] font-bold border-b-2 border-[#735c00] pb-1" : "text-[#1d1b16]/70 dark:text-[#fff9f0]/70 font-medium hover:text-[#735c00]") + " hover:scale-105 transition-transform duration-300"}
                   onClick={() => setPage('home')} href="#">Home</a>
                <a className={(page === 'about' ? "text-[#735c00] dark:text-[#d4af37] font-bold border-b-2 border-[#735c00] pb-1" : "text-[#1d1b16]/70 dark:text-[#fff9f0]/70 font-medium hover:text-[#735c00]") + " hover:scale-105 transition-transform duration-300"}
                   onClick={() => setPage('about')} href="#">About</a>
                <a className={(page === 'products' ? "text-[#735c00] dark:text-[#d4af37] font-bold border-b-2 border-[#735c00] pb-1" : "text-[#1d1b16]/70 dark:text-[#fff9f0]/70 font-medium hover:text-[#735c00]") + " hover:scale-105 transition-transform duration-300"}
                   onClick={() => setPage('products')} href="#">Products</a>
                <a className={(page === 'contact' ? "text-[#735c00] dark:text-[#d4af37] font-bold border-b-2 border-[#735c00] pb-1" : "text-[#1d1b16]/70 dark:text-[#fff9f0]/70 font-medium hover:text-[#735c00]") + " hover:scale-105 transition-transform duration-300"}
                   onClick={() => setPage('contact')} href="#">Contact</a>
            </div>
            <Button onClick={() => alert('Work in progress')}>Order Now</Button>
        </nav>

    );
}