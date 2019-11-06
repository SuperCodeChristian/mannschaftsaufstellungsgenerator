let Mannschaft = {
    name: '1. FC SuperCode',
    mannschaft: [],
    abwehr: 4,
    mittelfeld: 4,
    sturm: 2,
    aufstellung(eTarget) {
        if(eTarget){
            if(eTarget.id == 'abwehr') {
                this.generiereAbwehr();
                this.abwehr = Number(eTarget.value);
            }
            if(eTarget.id == 'mittelfeld') {
                this.generiereMittelfeld();
                this.mittelfeld = Number(eTarget.value);
            }
            if(eTarget.id == 'sturm') {
                this.generiereSturm();
                this.sturm = Number(eTarget.value);
            }

            if ((this.abwehr + this.mittelfeld + this.sturm) === 10) {
                document.getElementById('error').innerHTML = '<span class="success">Kann losgehen!</span>';
            } else {
                document.getElementById('error').innerHTML = '<span class="error">Die Mannschaft muss <strong>ELF</strong> Spieler haben!</span>';
            }
        }
        
        this.generiereTorwart();
        this.generiereAbwehr();
        this.generiereMittelfeld();
        this.generiereSturm();
    },
    generiereTorwart(){
        let torwartContainer = document.getElementById('torwartContainer');

        torwartContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Torwart') {
                torwartContainer.innerHTML = `<div>${spieler.name}</div>`;
            }
        })
    },
    generiereAbwehr() {
        let anzahlAbwehr = 0;
        let abwehrContainer = document.getElementById('abwehrContainer');

        abwehrContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Abwehr' && anzahlAbwehr < this.abwehr) {
                abwehrContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlAbwehr++;
            }
        })
    },
    generiereMittelfeld () {
        let anzahlMittelfeld = 0;
        let mittelfeldContainer = document.getElementById('mittelfeldContainer');

        mittelfeldContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Mittelfeld' && anzahlMittelfeld < this.mittelfeld) {
                mittelfeldContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlMittelfeld++;
            }
        })
    },
    generiereSturm () {
        let anzahlSturm = 0;
        let sturmContainer = document.getElementById('sturmContainer');

        sturmContainer.innerHTML = '';
        this.mannschaft.forEach((spieler) => {
            if (spieler.position == 'Sturm' && anzahlSturm < this.sturm) {
                sturmContainer.innerHTML += `<div>${spieler.name}</div>`;
                anzahlSturm++;
            }
        })
    }
}
function Spieler(name, position) {
    this.name = name;
    this.position = position;
    this.age = Math.round(Math.random() * 20 + 20);
    this.changePosition = function (position) {
        this.position = position;
    }

}
Mannschaft.mannschaft = [
    new Spieler ('Micha', 'Torwart'),
    new Spieler ('Eric', 'Abwehr'),
    new Spieler ('Anass', 'Abwehr'),
    new Spieler ('Richie', 'Abwehr'),
    new Spieler ('Klaus', 'Abwehr'),
    new Spieler ('Christian', 'Abwehr'),
    new Spieler ('Sergio', 'Abwehr'),
    new Spieler ('Anton', 'Mittelfeld'),
    new Spieler ('Michal', 'Mittelfeld'),
    new Spieler ('Navid', 'Mittelfeld'),
    new Spieler ('Georg', 'Mittelfeld'),
    new Spieler ('Rihab', 'Mittelfeld'),
    new Spieler ('Ali', 'Mittelfeld'),
    new Spieler ('Mustafa', 'Sturm'),
    new Spieler ('Shapour', 'Sturm'),
    new Spieler ('Sam', 'Sturm'),
    new Spieler ('Kim', 'Sturm'),
    new Spieler ('Rezan', 'Sturm'),
    new Spieler ('Waael', 'Sturm')
]
document.getElementById('eingabe').addEventListener('change', function(e){
    Mannschaft.aufstellung(e.target);
})
Mannschaft.aufstellung();