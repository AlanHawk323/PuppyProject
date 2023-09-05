let players = [];
const puppyDiv = document.querySelector("#puppyDiv");

async function fetchPlayers()
    {const answer = await fetch("https://fsa-puppy-bowl.herokuapp.com/api/2307-ftb-et-web-ft/players/");
        const json = await answer.json();
        console.log(json,"string");
        players = json.data.players;
        console.log(players);
        renderRecipes();
    };

    function renderRecipes()
    {console.log(players);
        const hash = window.location.hash.slice(1)*1;
        console.log(hash);
        const html = players.map(function(player)
        {return `<h3>
        <a href="#${player.id}" class="${player.id === hash ? "selected": ""}"> ${player.name} </a> </h3>
        <p> ${player.breed} </p>`
        }).join("");
        puppyDiv.innerHTML = html;
    };

window.addEventListener("hashchange", function()
    {const hash = window.location.hash.slice(1)*1;
        const html = players.map(function(player)
        {return `<h3>
        <a href="#${player.id}" class="${player.id === hash ? "selected": ""}"> ${player.name} </a> </h3>
        <p> ${player.breed} </p>
        <p> <img src=${player.imageUrl} height=200, width=200> </p>`
        }).join("");
        puppyDiv.innerHTML = html;
        });

fetchPlayers()

