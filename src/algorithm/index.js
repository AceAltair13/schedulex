import { working_days, classrooms, school_data } from "./data/inputv1.js";
import writeFile from "../helpers/writeFile.js";
import prettify from "../helpers/prettify.js";
import GeneticTimeTable from "./model/GeneticTimeTable.js";

// Create a new GeneticTimeTable object
let geneticTimeTable = new GeneticTimeTable(
    working_days,
    classrooms,
    school_data,
    true
);

// Run the genetic algorithm
// let bestSolution = geneticTimeTable.run();

// Write the best solution to a file
// prettify(bestSolution);
// writeFile("bestSolution", bestSolution);
