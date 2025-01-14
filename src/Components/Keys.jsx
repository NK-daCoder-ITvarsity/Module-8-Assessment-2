const Keys = ({ onButtonClick }) => {
    const buttonClasses = `font-semibold shadow-neumorphism-dark active:shadow-neumorphism-dark-inset w-full rounded-xl text-white text-md flex items-center justify-center  h-[2rem] transition-all hover:scale-[1.1]`;

    const buttons = [
        ["sin", "cos", "tan", "rad", "deg"],
        ["log", "ln", "(", ")", "inv"],
        ["!", "Ac", "%", "Del", "÷"],
        ["^", "7", "8", "9", "x"],
        ["√", "4", "5", "6", "-"],
        ["π", "1", "2", "3", "+"],
        ["e", "00", "0", ".", "="],
    ];

    return (
        <section className="grid gap-3 p-2 rounded-2xl w-full">
        {buttons.map((row, index) => (
            <div key={index} className="flex items-center gap-5 w-full">
            {row.map((btn) => (
                <button
                    key={btn}
                    className={buttonClasses}
                    onClick={() => onButtonClick(btn)}
                    >
                    {btn}
                </button>
            ))}
            </div>
        ))}
        </section>
    );
};

export default Keys;
