/** 
document.head.insertAdjacentHTML("beforeend", '<link rel="stylesheet" type="text/css" href="http://127.0.0.1:5500/dist/scss/main.css">');


function injectScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.addEventListener('load', resolve);
        script.addEventListener('error', e => reject(e.error));
        document.head.appendChild(script);
    });
}

injectScript('http://127.0.0.1:5500/dist/scss/main.js')
    .then(() => {
        console.log('Script loaded!');
    }).catch(error => {
        console.error(error);
	});
	
	injectScript('http://127.0.0.1:5500/dist/js/main.js')
    .then(() => {
        console.log('Script loaded!');
    }).catch(error => {
        console.error(error);
    });
    */
