import GeneticTimeTable from "../algorithm/model/GeneticTimeTable.js";

const gene = async (workingDays, classrooms, courses) => {
  const geneticTimeTable = new GeneticTimeTable(
    workingDays,
    classrooms,
    courses,
    false
  );
  const bestChild = await geneticTimeTable.run();

  return bestChild;
};

onmessage = (e) => {
  const { workingDays, classrooms, courses } = e.data;
  gene(workingDays, classrooms, courses).then((bestChild) => {
    postMessage(bestChild);
  });
};
