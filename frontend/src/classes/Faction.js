class Faction {
    constructor(name, theater, category, tier, hold, rep, notes, id) {
        this.name = name;
        this.theater = theater;
        this.category = category;
        this.tier = tier;
        this.hold = hold;
        //this.rep = rep;
        this.notes = notes;
        this.id = id;
        this.divKey = id + '-key'
        
        console.log(this.name+': '+rep)

        if (rep === 'undefined') {
            this.rep = 'X';
            this.is_player = true;
        } else {
            this.rep = rep;
            this.is_player = false;
        }
        
    };
};

export default Faction;