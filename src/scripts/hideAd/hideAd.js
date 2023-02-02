import observeDOM from "../globals/observeDOM";

export default function hideAd(){
    observeDOM(document.querySelector('[role="main"]'), (_m) => {
        [...document.querySelectorAll('text')].filter((el) =>
            el.textContent.includes('reels') || el.textContent.includes('Sponsored') 
        ).forEach(({id}) => {
            const advertisement = document.querySelector(`use[*|href="#${id}"]:not([href])`).closest("div[aria-describedby]");
            if(advertisement.style.display !== 'none'){
                advertisement.style.display = 'none';
                console.log("Add hidden");
            }
        });
    })
}