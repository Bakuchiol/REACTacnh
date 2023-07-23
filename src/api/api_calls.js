// easy export of apis

const baseUrl = 'https://acnhapi.com/v1a'

export function getVillagers(){
    return fetch(`${baseUrl}/villagers`)
    .then(response => response.json())
}