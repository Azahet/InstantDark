export function runMarketplace() {
    let marketplace = document.querySelector('.p-breadcrumbs a[href="/categories/marketplace.77/"]')
    if (marketplace) {
        let message = document.querySelector('.message-content')
        if (message) {
            let verif = document.querySelector('.message.message--post').querySelector('.far.fa-shield-check').dataset.originalTitle.includes('non')
            if (verif) {
                message.insertAdjacentHTML('afterbegin', '<div class="alert-certif not">Ce vendeur n\'est pas certifié par le staff</div>')
            } else {
                message.insertAdjacentHTML('afterbegin', '<div class="alert-certif ok">Ce vendeur est certifié par le staff</div>')
            }
        }
    }
}

