import chroma from 'chroma-js'

export function runThemeCreatorRank() {
    document.querySelectorAll(".username ").forEach(e => {
        if (e.dataset.userId === "49929") {
            let textSpan = e.firstChild
            textSpan.setAttribute('class', 'username--style-rainbow')
            spanifyPseudo(textSpan);
            rainbowfy(textSpan)
            injectUserBanner(textSpan)
        }
    })

}

function injectUserBanner(textSpan) {
    try {
        textSpan.parentNode.parentNode.parentNode.querySelector('.userTitle').insertAdjacentHTML('afterend', '<div class="userBanner userBanner themecreator message-userBanner" itemprop="jobTitle"><span class="userBanner-before"></span><strong>Instant Dark</strong><span class="userBanner-after"></span></div>')
    }catch (e) {
        
    }
}

function rainbowfy(textSpan) {
    let colorArray = chroma.scale(['#ff9800', '#E91E63', '#ff9800']).colors(10)
    window.setInterval( ()=>{
        textSpan.style.color = colorArray[9]
        textSpan.childNodes.forEach((e, i) => {
            e.style.color = colorArray[i]
            e.style.textShadow = `${chroma(colorArray[i]).alpha(0.7)} 0px 0px 4px`
        })
        rotateArray(colorArray)
    },70)

}

function rotateArray(arr) {
    var element = arr.pop();
    arr.unshift(element);
}

function spanifyPseudo(textSpan) {
    let textSpanValue = textSpan.innerText
    textSpanValue.split("");
    var i = 0, length = textSpanValue.length;
    textSpan.innerText = ""
    for (i; i < length; i++) {
        textSpan.innerHTML += "<span>" + textSpanValue[i] + "</span>";
    }
}