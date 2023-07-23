// easy export of apis

const baseUrl = 'https://acnhapi.com/v1a'

// villagers
function getVillagers(){
    return fetch(`${baseUrl}/villagers`)
    .then(response => response.json())
}

// bugs
function getBugs(){
    return fetch(`${baseUrl}/bugs`)
    .then(response => response.json())
}


// export apis
export {
    getVillagers,
    getBugs
}
