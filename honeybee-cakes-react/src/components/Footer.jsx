export default function Footer() {
    return (
        <footer
            className="w-full py-12 mt-24 bg-[#f9f3ea] dark:bg-[#25231d] flex flex-col items-center gap-8 max-w-7xl mx-auto px-8">
            <div className="text-lg font-serif text-[#735c00]">Honeybee Cakes</div>
            <div
                className="flex flex-wrap justify-center gap-8 font-['Plus_Jakarta_Sans'] text-sm uppercase tracking-widest">
                <a className="text-[#1d1b16]/60 dark:text-[#fff9f0]/60 hover:text-[#735c00] dark:hover:text-[#d4af37] transition-colors opacity-80 hover:opacity-100"
                   href="https://www.instagram.com"
                   target="_blank">Instagram</a>
                <a className="text-[#1d1b16]/60 dark:text-[#fff9f0]/60 hover:text-[#735c00] dark:hover:text-[#d4af37] transition-colors opacity-80 hover:opacity-100"
                   href="https://www.facebook.com"
                   target="_blank">Facebook</a>
                <a className="text-[#1d1b16]/60 dark:text-[#fff9f0]/60 hover:text-[#735c00] dark:hover:text-[#d4af37] transition-colors opacity-80 hover:opacity-100"
                   href="mailto:hello@honeybeecakes.com"
                   >Email Us</a>
            </div>
            <p className="text-[#1d1b16]/60 dark:text-[#fff9f0]/60 font-['Plus_Jakarta_Sans'] text-xs text-center">
                © 2026 Honeybee Cakes
            </p>
        </footer>
    );
}