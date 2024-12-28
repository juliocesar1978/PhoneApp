// script.js
function formatPhoneNumber(countryCode, phoneNumber) {
    // Remove caracteres não numéricos
    let cleaned = phoneNumber.replace(/\D/g, '');
    
    // Se o número já começa com +, assumimos que já tem código do país
    if (phoneNumber.startsWith('+')) {
        return phoneNumber;
    }
    
    // Caso contrário, adiciona o código do país selecionado
    return `${countryCode}${cleaned}`;
}

function generateLinks() {
    const countryCode = document.getElementById('countryCode').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const fullNumber = formatPhoneNumber(countryCode, phoneNumber);
    
    // Remove o + para usar em alguns links
    const numberWithoutPlus = fullNumber.replace('+', '');
    
    const directLinks = {
        'WhatsApp': `https://wa.me/${numberWithoutPlus}`,
        'Telegram': `https://t.me/${numberWithoutPlus}`,
        'Skype': `skype:${numberWithoutPlus}?call`,
        'Telefone': `tel:${fullNumber}`
    };
    
    const searchLinks = {
        'Facebook': `https://www.facebook.com/search/top/?q=${fullNumber}`,
        'Google': `https://www.google.com/search?q="${fullNumber}"`,
        'Instagram': `https://www.instagram.com/explore/tags/${numberWithoutPlus}`,
        'LinkedIn': `https://www.linkedin.com/search/results/all/?keywords=${fullNumber}`
    };
    
    displayLinks('directLinks', directLinks);
    displayLinks('searchLinks', searchLinks);
}

function displayLinks(containerId, links) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';
    
    Object.entries(links).forEach(([name, url]) => {
        const link = document.createElement('a');
        link.href = url;
        link.target = '_blank';
        link.className = 'link-item';
        link.textContent = name;
        container.appendChild(link);
    });
}
