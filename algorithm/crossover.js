import { MUTATION_RATE, CROSSOVER_RATE } from "../constants/config.js";
import Chromosome from "./model/Chromosome.js";
import _ from "lodash";
import Gene from "./model/Gene.js";

export const crossover = (parent1, parent2, genePool, classrooms, days) => {
    // Favour the better parent
    if (parent2.cost > parent1.cost) {
        const temp = parent1;
        parent1 = parent2;
        parent2 = temp;
    }

    // Create a new child
    let timetables = [];
    classrooms.forEach((classroom, i) => {
        let timetable = { classroom, timetable: [] };
        let genePoolClass = genePool[classroom];
        days.forEach((day, j) => {
            let dayTimeTable = [];
            let slots = day.slots;
            for (let k = 0; k < slots; k++) {
                let gene;

                // Chance to mutate the gene
                if (_.random(0, 1, true) < MUTATION_RATE) {
                    let slot = _.sample(genePoolClass);
                    gene = new Gene(slot.teacher, slot.subject);
                } else {
                    // Crossover with other parent instead
                    gene =
                        _.random(0, 1, true) < CROSSOVER_RATE
                            ? parent1.timetables[i].timetable[j][k]
                            : parent2.timetables[i].timetable[j][k];
                }
                dayTimeTable.push(gene);
            }
            timetable.timetable.push(dayTimeTable);
        });
        timetables.push(timetable);
    });

    return new Chromosome(timetables);
};