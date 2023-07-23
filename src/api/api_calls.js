const baseUrl = 'https://acnhapi.com/v1'

export function getVillagers(){
    return fetch(`${baseUrl}/villagers`)
    .then(response => response.json())
}