class Faction {
    constructor(name, theater, category, tier, hold, rep, notes, is_player) {
        this.name = name;
        this.theater = theater;
        this.category = category;
        this.tier = tier;
        this.hold = hold;
        this.rep = rep;
        this.notes = notes;
        this.is_player = is_player;
    };
};

export default Faction;