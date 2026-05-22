const quotes = [

"Creativity begins where comfort ends.",

"Create what the world didn’t know it needed.",

"Your imagination is your greatest luxury.",

"Art starjnnjts where logic gets tired.",

"Some ideas deserve silence before applause.",

"Originality is the loudest form of confidence.",

"Beautiful things are born from strange minds.",

"Think deeply. Create fearlessly.",

"Creativity never asks for permission.",

"Dream in aesthetics. Build in reality.",

"Elegance is intelligence with taste.",

"The future belongs to creative thinkers.",

"Every masterpiece once looked impossible.",

"Different minds build unforgettable worlds.",

"Design is emotion made visible.",

"Stay rare in a world of copies.",

"Minimal ideas can create maximum impact.",

"Art is the luxury of expression.",

"Some visions are too powerful to explain.",

"Create slowly. Create meaningfully."

];

function generateQuote(){

    const random =
    quotes[Math.floor(Math.random() * quotes.length)];

    const quote =
    document.getElementById("quote");

    quote.style.opacity = 0;
    quote.style.transform = "translateY(10px)";

    setTimeout(()=>{

        quote.innerText = random;

        quote.style.opacity = 1;
        quote.style.transform = "translateY(0px)";

    },250);
}

generateQuote();