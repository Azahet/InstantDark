export function runReplace() {
    //Hide Image
    document.querySelectorAll('img[src="/styles/HIDE.png"]').forEach(e =>{
        e.setAttribute("src", "https://i.imgur.com/AxbODnD.png")
    })

    //Like Icon
    document.querySelectorAll(".sv-rating-type-icon").forEach(e =>{
        e.style.backgroundImage = "url('https://i.imgur.com/VWXrapH.png')";
    })

}

