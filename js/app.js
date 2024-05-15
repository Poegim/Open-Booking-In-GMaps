function openInGMaps()
{
    const address = document.getElementsByClassName('hp_address_subtitle js-hp_address_subtitle jq_tooltip');
    
    if(address != undefined) {
        const url = 'https://www.google.com/maps/search/?api=1&query=' + address[0].innerText.split(' ').join('+');
        window.open(url, '_blank');
    } else {
        console.log("Address element not found on this page.");
    }
}

openInGMaps();