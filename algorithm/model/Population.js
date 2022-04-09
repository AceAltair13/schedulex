import Gene from "./Gene.js";
import Chromosome from "./Chromosome.js";
import { POPULATION_SIZE } from "../../constants/config.js";
import _ from "lodash";

export default class Population {
    // Initialize Population
    constructor(working_days, classrooms, school_data) {
        this.working_days = working_days;
        this.classrooms = classrooms;
        this.school_data = school_data;
        this.genePool = this.createGenePool();
        this.population = this.generatePopulation();
    }

    // Create a gene pool
    createGenePool() {
        let genePool = {};

        // Initialize the gene pool
        this.classrooms.forEach((classroom) => {
            genePool[classroom] = [{ teacher: "", subject: "", slots: 0 }];
        });

        // Traverse the school data
        this.school_data.forEach((section) => {
            section.subjects.forEach((subject) => {
                subject.faculty.forEach((teacher) => {
                    teacher.classrooms.forEach((classroom) => {
                        genePool[classroom].push({
                            teacher: teacher.teacher,
                            subject: subject.subject_name,
                            slots: teacher.slots,
                        });
                    });
                });
            });
        });

        return genePool;
    }

    // Get gene pool
    getGenePool() {
        return this.genePool;
    }

    // Generate a population of chromosomes
    generatePopulation() {
        let population = [];
        for (let i = 0; i < POPULATION_SIZE; i++) {
            let timetables = [];
            this.classrooms.forEach((classroom) => {
                let classTimetable = { classroom, timetable: [] };
                this.working_days.forEach((day) => {
                    let dayTimeTable = [];
                    let slots = day.slots;
                    for (let j = 0; j < slots; j++) {
                        let randomSubject = _.sample(this.genePool[classroom]);
                        dayTimeTable.push(
                            new Gene(
                                randomSubject.teacher,
                                randomSubject.subject
                            )
                        );
                    }
                    classTimetable.timetable.push(dayTimeTable);
                });
                timetables.push(classTimetable);
            });

            population.push(new Chromosome(timetables));
        }
        return population;
    }

    // Get population
    getPopulation() {
        return this.population;
    }
}