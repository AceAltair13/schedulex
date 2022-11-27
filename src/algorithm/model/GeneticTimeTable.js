import _ from "lodash";
import {
  PARENT_SIZE,
  MAX_GENERATION_SIZE,
  SIMILARITY_THRESHOLD,
  POPULATION_SIZE,
} from "../../constants/config.js";
import Population from "./Population.js";
import { crossover } from "../crossover.js";
import sortPopulation from "../cost.js";

export default class GeneticTimeTable {
  constructor(working_days, classrooms, school_data, debug = false) {
    this.working_days = working_days;
    this.classrooms = classrooms;
    this.school_data = school_data;
    this.debug = debug;
  }

  // Select the fittest chromosomes
  selectFittest(population, genePool) {
    // Sort the population
    population = sortPopulation(
      population,
      genePool,
      this.working_days,
      this.classrooms,
      this.school_data
    );

    // Select top PARENT_SIZE chromosomes
    let fittestChromosomes = _.slice(population, 0, PARENT_SIZE);

    // Return fittest chromosomes
    return fittestChromosomes;
  }

  // Returns the best generated timetable
  run() {
    let generation = 0;
    let previousBestCost = 0;
    let similarityCount = 0;

    // Initialize population
    let population = new Population(
      this.working_days,
      this.classrooms,
      this.school_data
    );

    //gene pool is set of unique subjects with their teachers & classrooms
    let _population = population.getPopulation();
    let genePool = population.getGenePool();

    // Get the best solution
    while (generation < MAX_GENERATION_SIZE) {
      let fitChromosomes = this.selectFittest(_population, genePool);
      let bestCost = fitChromosomes[0].cost;

      // Print debug info in console
      if (this.debug) {
        console.log(`Generation = ${generation + 1}, Best Cost = ${bestCost}`);
      }

      // If cost is 0, return the chromosome
      if (bestCost === 0) {
        return fitChromosomes[0];
      }

      // Check similarity according to SIMILARITY_THRESHOLD
      if (bestCost < 1 && bestCost === previousBestCost) {
        similarityCount++;
        if (similarityCount === SIMILARITY_THRESHOLD) {
          return fitChromosomes[0];
        }
      } else {
        similarityCount = 0;
      }
      previousBestCost = bestCost;

      // Create new generation
      let nextGeneration = [];
      for (let i = 0; i < POPULATION_SIZE; i++) {
        let [firstParent, secondParent] = _.sampleSize(fitChromosomes, 2);
        nextGeneration.push(
          crossover(
            firstParent,
            secondParent,
            genePool,
            this.classrooms,
            this.working_days
          )
        );
      }

      // Go to the next generation
      _population = nextGeneration;
      generation++;
    }
    return _population[0];
  }
}
