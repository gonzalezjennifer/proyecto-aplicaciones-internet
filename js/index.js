const cardRec = document.querySelector('#cardRec').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
let teamsNFLcop = {}
let teamsNFL = []

document.addEventListener('DOMContentLoaded', () => {
    loadReceiving()
})

const loadReceiving = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c653860161mshbb7b2839132e7f3p1a578ajsnbf31f680a026',
            'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
        }
    };
    
    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/receiving-stats/offense/2022', options)
        .then(response => response.json())
        .then(response => {
            teamsNFLcop = response
            teamsNFL = Array.from(teamsNFLcop._embedded.teamReceivingStatsList)
            creaCards()
            console.log('equipos', teamsNFL)
        })
        .catch(err => console.error(err));
}


const creaCards = () => {
    teamsNFL.forEach((team) => {
        cardRec.querySelector('img').setAttribute('src',`./equipos/${team.name}.png`)
        cardRec.querySelector('.teamname').textContent = team.name

        const clone = cardRec.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}