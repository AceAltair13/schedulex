
//class of  chromosome for each generation
export default class Chromosome {
    constructor(timetables = []) {
        this.timetables = timetables;
        this.cost = 0;
    }
}