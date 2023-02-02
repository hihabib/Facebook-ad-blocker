import observeDOM from "../globals/observeDOM";

// Observe a specific DOM element:
/**
 * Hide Reels from
 * 1. Top bar Tab
 * 2. Newsfeed
 */
export default function hideReels(){
    //Hide Reels from Top bar Tab
    [...document.querySelectorAll('div[role="tab"]')].filter((el) =>
            el.textContent.includes('Reels') || el.textContent.includes('reels') 
    ).forEach(el => {
        if(!el.style.display){
            el.style.display = 'none';
            // unhide topbar after hiding Reels
            // document.querySelector('#ssrb_top_of_home_start + div').style.display = 'block';
            
            console.log("Reels Hidden From Top");
        }
    });

    //Hide Reels from newsfeed
    observeDOM( document.querySelector('[role="main"]'), function(_m){ 
        //remove Reels from newfeed
        [...document.querySelectorAll('div[aria-labelledby]')].filter((el) =>
            el.textContent.includes('reels') || el.textContent.includes('Reels') 
        ).forEach(el => {
            if(!el.style.display){
                el.style.display = 'none';
                console.log("Reels Hidden");
            }
        });
     });
}




