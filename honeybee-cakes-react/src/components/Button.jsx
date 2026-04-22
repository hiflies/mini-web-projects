export default function Button({children, ...props}) {
    return (
        <button
            className="honey-gradient text-white px-6 py-2 rounded-full font-bold scale-95 transition-all hover:scale-100 shadow-md"
            // honey-gradient text-on-primary px-10 py-4 rounded-xl font-bold shadow-xl transition-all hover:scale-105 text-lg
            // honey-gradient w-full md:w-auto px-10 py-4 rounded-xl text-on-primary font-bold text-lg hover:scale-[1.02] active:scale-95 transition-all shadow-lg
            // honey-gradient text-on-primary px-6 py-3 rounded-full font-bold shadow-lg flex items-center gap-2 hover:brightness-110
            {...props}
        >
            {children}
        </button>
    );
}