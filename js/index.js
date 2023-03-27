const cardRec = document.querySelector('#cardRec').content
const cardCar = document.querySelector('#cardCar').content
const cardPas = document.querySelector('#cardPas').content
const cardVic = document.querySelector('#cardVic').content
const contenido = document.querySelector('#contenido')
const fragment = document.createDocumentFragment()
const btnBuscar = document.getElementById('buscador')
const receiving = document.getElementById('receiving')
const rushing = document.getElementById('rushing')
const passing = document.getElementById('passing')
const wins = document.getElementById('wins')
let teamsNFLcop = {}
let teamsNFL = []
let opc = 0

document.addEventListener('DOMContentLoaded', () => {
    loadTeams()
})

const loadTeams = () => {
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
            teamsNFL = []
            opc = 0
            opc = 1 
            teamsNFL = Array.from(teamsNFLcop._embedded.teamReceivingStatsList)
            creaCards(teamsNFL)
            console.log('equipos', teamsNFL)
        })
        .catch(err => console.error(err));
}

receiving.addEventListener('click', () => {
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
            teamsNFL = []
            opc = 0
            opc = 2
            teamsNFL = Array.from(teamsNFLcop._embedded.teamReceivingStatsList)
            creaCardsrec(teamsNFL)
            console.log('equipos', teamsNFL)
        })
        .catch(err => console.error(err));
})


const creaCards = (equipos) => {
    contenido.innerHTML = ''
    equipos.forEach((team) => {
        cardRec.querySelector('img').setAttribute('src',`./equipos/${team.name}.png`)
        cardRec.querySelector('.teamname').textContent = team.name

        const clone = cardRec.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

const creaCardsrec = (equipos) => {
    contenido.innerHTML = ''
    equipos.forEach((team) => {
        cardRec.querySelector('img').setAttribute('src',`./equipos/${team.name}.png`)
        cardRec.querySelector('.teamname').textContent = team.name
        cardRec.querySelector('.receivesnum').textContent = `Recepciones: ${team.receives}`
        cardRec.querySelector('.touchdownnum').textContent = `Touchdowns: ${team.touchdowns}`
        cardRec.querySelector('.yardsnum').textContent = `Yardas: ${team.yards}`

        const clone = cardRec.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

rushing.addEventListener('click', () => {
    const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'c653860161mshbb7b2839132e7f3p1a578ajsnbf31f680a026',
		'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
	}
};

fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/rushing-stats/defense/2022', options)
	.then(response => response.json())
	.then(response => {
            teamsNFLcop = response
            teamsNFL = []
            opc = 0
            opc = 3
            teamsNFL = Array.from(teamsNFLcop._embedded.teamRushingStatsList)
            creaCardsrush(teamsNFL)
            console.log('equipos', teamsNFL)
        })
	.catch(err => console.error(err));

})

const creaCardsrush = (equipos) => {
    contenido.innerHTML = ''
    equipos.forEach((team) => {
        cardCar.querySelector('img').setAttribute('src',`./equipos/${team.name}.png`)
        cardCar.querySelector('.teamname').textContent = team.name
        cardCar.querySelector('.yardsnum').textContent = `Yardas: ${team.yards}`
        cardCar.querySelector('.touchdownnum').textContent = `Touchdowns: ${team.touchdowns}`

        const clone = cardCar.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

passing.addEventListener('click', () => {
    const options = {
	    method: 'GET',
	    headers: {
		    'X-RapidAPI-Key': 'c653860161mshbb7b2839132e7f3p1a578ajsnbf31f680a026',
		    'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
	    }
    };

    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/passing-stats/offense/2022', options)
	    .then(response => response.json())
	    .then(response => {
            teamsNFLcop = response
            teamsNFL = []
            opc = 0
            opc = 4
            teamsNFL = Array.from(teamsNFLcop._embedded.teamPassingStatsList)
            creaCardspas(teamsNFL)
            console.log('equipos', teamsNFL)
        })
	    .catch(err => console.error(err));

})

const creaCardspas = (equipos) => {
    contenido.innerHTML = ''
    equipos.forEach((team) => {
        cardPas.querySelector('img').setAttribute('src',`./equipos/${team.name}.png`)
        cardPas.querySelector('.teamname').textContent = team.name
        cardPas.querySelector('.passyards').textContent = `Yardas: ${team.passYards}`
        cardPas.querySelector('.completions').textContent = `Terminaciones: ${team.completions}`
        cardPas.querySelector('.touchdownnum').textContent = `Touchdowns: ${team.touchdowns}`

        const clone = cardPas.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

wins.addEventListener('click', () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'c653860161mshbb7b2839132e7f3p1a578ajsnbf31f680a026',
            'X-RapidAPI-Host': 'nfl-team-stats.p.rapidapi.com'
        }
    };
    
    fetch('https://nfl-team-stats.p.rapidapi.com/v1/nfl-stats/teams/win-stats/2022', options)
        .then(response => response.json())
        .then(response => {
            teamsNFLcop = response
            teamsNFL = []
            opc = 0
            opc = 5
            teamsNFL = Array.from(teamsNFLcop._embedded.teamWinStatsList)
            creaCardsvic(teamsNFL)
            console.log('equipos', teamsNFL)
        })
        .catch(err => console.error(err));
})

const creaCardsvic = (equipos) => {
    contenido.innerHTML = ''
    equipos.forEach((team) => {
        if (team.name === 'Philadelphia Eagles xz*'){
            cardVic.querySelector('img').setAttribute('src','./equiposvic/Philadelphia Eagles xz.png')
        } else if (team.name === 'Kansas City Chiefs xz*') {
            cardVic.querySelector('img').setAttribute('src','./equiposvic/Kansas City Chiefs xz.png')
        } else {
            cardVic.querySelector('img').setAttribute('src',`./equiposvic/${team.name}.png`)
        }
        cardVic.querySelector('.teamname').textContent = team.name
        cardVic.querySelector('.wins').textContent = `Victorias: ${team.wins}`
        cardVic.querySelector('.losses').textContent = `Perdidas: ${team.losses}`
        cardVic.querySelector('.winrateper').textContent = `Porcentaje de Victorias: ${team.winRatePercentage}`

        const clone = cardVic.cloneNode(true)
        fragment.appendChild(clone)
    })
    contenido.appendChild(fragment)
}

btnBuscar.addEventListener('keyup', () => {
    let temp = []
    temp = teamsNFL.filter((item) => item.name.toLowerCase().includes(btnBuscar.value.toLowerCase()))
    if(opc === 1) {
        creaCards(temp)
    } else if (opc === 2) {
        creaCardsrec(temp)
    } else if (opc === 3) {
        creaCardsrush(temp)
    } else if (opc === 4) {
        creaCardspas(temp)
    } else if (opc === 5) {
        creaCardsvic(temp)
    }
})