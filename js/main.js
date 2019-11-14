'use strict';
let Team = {
    name: '',
    players: [],
    lineup: [],
    status: null,
    goaly: null,
    defence: null,
    midfield: null,
    storm: null,
    // METHODS
    buildLineup(eTarget) {
    
        if(eTarget){
            if(eTarget.id == 'def') {
                let num = this.lineup[0] = Number(eTarget.value);
                this.buildDefence(num);
            }
            if(eTarget.id == 'mid') {
                let num = this.lineup[1] = Number(eTarget.value);
                this.buildMidfield(num);
            }
            if(eTarget.id == 'strm') {
                let num = this.lineup[2] = Number(eTarget.value);
                this.buildStorm(num);
            }
            // storing to cookie
            this.setCookie('lineup', JSON.stringify(this.lineup));

            if ((this.lineup[0] + this.lineup[1] + this.lineup[2]) === 10) {
                this.buildStatus('<span class="success">Das Spiel kann beginnen!</span>');
            } else {
                this.buildStatus('<span class="error">Die Mannschaft muss <strong>ELF</strong> Spieler haben!</span>');
            }
        } else { // no button pressed, page has just been loaded

            var lineupCookie = this.getCookie('lineup');
            if (lineupCookie) {
                // got lineup from cookie
                this.lineup = JSON.parse(lineupCookie);
            } else {
                this.lineup = this.setCookie('lineup', JSON.stringify([4,4,2]));
            }
            // communicating lineup to HTML
            document.getElementById('def').value = this.lineup[0];
            document.getElementById('mid').value = this.lineup[1];
            document.getElementById('strm').value = this.lineup[2];

            this.initialize();
       }
        
    },
    initialize(){
        this.buildGoaly();
        this.buildDefence(this.lineup[0]);
        this.buildMidfield(this.lineup[1]);
        this.buildStorm(this.lineup[2]);
    },
    buildGoaly(){
        this.players.forEach((player) => { // arrow function to preserve this
            if (player.position == 'Torwart') {
                this.goaly.innerHTML = `<div><span>${player.name}</span></div>`;
            }
        })
    },
    buildDefence(num) {
        let count = 0;

        this.defence.innerHTML = ''; // clearing container
        this.players.forEach((player) => { // arrow function to preserve this
            if (player.position == 'Abwehr' && count < num) {
                this.defence.innerHTML += `<div><span>${player.name}</span></div>`;
                count++;
            }
        })
    },
    buildMidfield (num) {
        let count = 0;

        this.midfield.innerHTML = ''; // clearing container
        this.players.forEach((player) => { // arrow function to preserve this
            if (player.position == 'Mittelfeld' && count < num) {
                this.midfield.innerHTML += `<div><span>${player.name}</span></div>`;
                count++;
            }
        })
    },
    buildStorm (num) {
        let count = 0;

        this.storm.innerHTML = ''; // clearing container
        this.players.forEach((player) => { // arrow function to preserve this
            if (player.position == 'Sturm' && count < num) {
                this.storm.innerHTML += `<div><span>${player.name}</span></div>`;
                count++;
            }
        })
    },
    setPlayer (name, position, dob) {
        this.buildStatus(`<span class="info">Wir haben ${this.players.push(new Player(name, position, dob))} Spieler in unserer Mannschaft!<span>`);

        // constructor function for Player Object
        function Player(name, position, dob) {
            this.name = name;
            this.position = position;
            this.dob = dob;        
        }
    },
    delPlayer (name) {
        this.players.forEach((item, index) => {
            if(item.name === name) {
                this.players.splice(index, 1);
            }
        });
        // number of players has changed
        // new playfield setup needed!
        this.initialize();
    },
    getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    },
    setCookie(name, value) {  
        document.cookie = `${name}=${value}; expires=Fri, 1 Dec 2019 23:59:59 GMT; path=/`;
    },
    buildStatus(status) {
        this.status.innerHTML = status;
    },
    buildHTML() {
        document.write(`<header> <h2 id="status"></h2> <nav id="input"> <form> <label class="inp" for="def"> <input type="number" id="def" min="1" max="6" value="" placeholder="&nbsp;"> <span class="label">Abwehr</span> </label> <label class="inp" for="mid"> <input type="number" id="mid" min="1" max="6" value="" placeholder="&nbsp;"> <span class="label">Mittelfeld</span> </label> <label class="inp" for="strm"> <input type="number" id="strm" min="1" max="6" value="" placeholder="&nbsp;"> <span class="label">Sturm</span> </label> </form> </nav></header><div id="output"> <section id="goaly"></section> <section id="defence"></section> <section id="midfield"></section> <section id="storm"></section></div>`);
        this.status = document.getElementById('status');
        let outputCollection = document.getElementById('output').children;
        this.goaly = outputCollection[0];
        this.defence = outputCollection[1];
        this.midfield = outputCollection[2];
        this.storm = outputCollection[3];
    }
}

function init() {

    // peparing HTML
    Team.buildHTML();
    // initialising Object
    Team.name = '1. FC SuperCode';
    // adding Players
    Team.setPlayer('Michael', 'Torwart', new Date(1988, 6, 19));
    Team.setPlayer('Eric', 'Abwehr', new Date(1988, 6, 19));
    Team.setPlayer('Anass', 'Abwehr', new Date(1988, 6, 19));
    Team.setPlayer('Richie', 'Abwehr', new Date(1988, 6, 19));
    Team.setPlayer('Klaus', 'Abwehr', new Date(1988, 6, 19));
    Team.setPlayer('Christian', 'Abwehr', new Date(1968, 8, 13));
    Team.setPlayer('Sérgio', 'Abwehr', new Date(1980, 10, 28));
    Team.setPlayer('Anton', 'Mittelfeld', new Date(1980, 10, 28));
    Team.setPlayer('Michal', 'Mittelfeld', new Date(1980, 10, 28));
    Team.setPlayer('Navid', 'Mittelfeld', new Date(1980, 10, 28));
    Team.setPlayer('Georg', 'Mittelfeld', new Date(1980, 10, 28));
    Team.setPlayer('Rihab', 'Mittelfeld', new Date(1980, 10, 28));
    Team.setPlayer('Ali', 'Mittelfeld', new Date(1980, 10, 28));
    Team.setPlayer('Mustafa', 'Sturm', new Date(1980, 10, 28));
    Team.setPlayer('Shapour', 'Sturm', new Date(1980, 10, 28));
    Team.setPlayer('Sam', 'Sturm', new Date(1980, 10, 28));
    Team.setPlayer('Kim', 'Sturm', new Date(1980, 10, 28));
    Team.setPlayer('Rezan', 'Sturm', new Date(1980, 10, 28));
    Team.setPlayer('Waael', 'Sturm', new Date(1980, 10, 28));
    // setting up playfield
    Team.buildLineup();

};
init();
// attaching EventListener to InputContainer
document.getElementById('input').addEventListener('change', (e) => {
    Team.buildLineup(e.target);
});