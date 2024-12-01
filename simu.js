class Warrior {
    constructor(nom, life, attaque, precision) {
        this.nom = nom;
        this.life = life;
        this.attaque = attaque;
        this.precision = precision;
    }

    attaquer(adversaire) {
        // Algo de précision //
        const chance = Math.random(); // -- Génère un nombre entre 0 et 1 (empty) alors 0 - 1 -- //

        if (chance < this.precision) {
            console.log(this.nom + " réussit son attaque et inflige " + this.attaque + " points de dégâts !");
            adversaire.life -= this.attaque;
        } else {
            console.log(this.nom + " manque son attaque.");
        }
    }
}

// 2 sous classes Warrior //

const Maximus = new Warrior("Maximus", 100, 15, 0.8);
const Harold = new Warrior("Harold", 80, 20, 0.7);

// -- Système de combat principal -- //

while (Maximus.life > 0 && Harold.life > 0) {
    console.log("--- Nouveau tour ---");
    Maximus.attaquer(Harold);

    if (Harold.life <= 0) {
        console.log(Maximus.nom + " remporte le combat !");
        break;
    }

    Harold.attaquer(Maximus);

    if (Maximus.life <= 0) {
        console.log(Harold.nom + " remporte le combat !");
        break;
    }

    // Affiche les point de vie des warrior

    console.log("Points de vie restants : " + Maximus.nom + " (" + Maximus.life + "), " + Harold.nom + " (" + Harold.life + ")");
}