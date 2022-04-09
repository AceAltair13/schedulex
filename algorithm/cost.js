import _ from "lodash";

const calculateCosts = (
    timetables,
    genePool,
    days,
    classrooms,
    subject_data
) => {
    let cost = 0;

    // ================================
    //         Hard Constraints
    //
    //  1. One teacher cannot be present in multiple classrooms at the same time.
    //  2. The slots alloted to the teacher should be satisifed by the number of lectures
    //
    // ================================

    // One teacher cannot be in multiple classrooms at same time
    _.forEach(days, (day, i) => {
        for (let j = 0; j < day.slots; j++) {
            let slotList = [];
            _.forEach(timetables, (t) => {
                let slot = t.timetable[i][j];
                if (slot.teacher !== "") {
                    slotList.push(slot.teacher);
                }
            });
            let uniqueSlotList = _.uniq(slotList);
            if (uniqueSlotList.length < slotList.length) {
                cost += slotList.length - uniqueSlotList.length;
            }
        }
    });

    // The slots alloted to the teacher should be satisifed by the number of lectures
    _.forEach(timetables, (timetable) => {
        let _genePool = genePool[timetable.classroom];
        _.forEach(_.flatten(timetable.timetable), (lecture) => {
            if (lecture.teacher !== "" && lecture.subject !== "") {
                let geneIndex = _.findIndex(
                    _genePool,
                    (_gp) =>
                        _gp.teacher === lecture.teacher &&
                        _gp.subject === lecture.subject
                );
                _genePool[geneIndex].slots -= 1;
            }
        });
        _.forEach(_genePool, (gene) => {
            cost += Math.abs(gene.slots);
        });
    });

    // ================================
    //         Soft Constraints
    //
    // 1. Duplicate consecutive teacher should be avoided in a single day.
    // 2. Lectures should be divided uniformly in tine slots
    // ================================

    // Duplicate consecutive teacher should be avoided in a single day.
    _.forEach(timetables, (timetable) => {
        _.forEach(days, (day, j) => {
            if (day.slots > 1) {
                for (let k = 0; k < day.slots - 1; k++) {
                    if (
                        timetable.timetable[j][k].teacher ===
                        timetable.timetable[j][k + 1].teacher
                    ) {
                        cost += 0.05;
                    }
                }
            }
        });
    });


    // 2. Lectures should be divided uniformly in tine slots;
    // let total_slots = 0;
    // for(leti=0;i<days.length;i++){
    //     total_slots += days[i].slots;
    // }

    // for(let i=0;i<subject_data.length;i++){
    //     for(let j=0;j<subject_data[i].subjects.length;j++){
    //         let subject_name = subject_data[i].subjects[j].subject_name;
    //         for(let k=0;k<subject_data[i].subjects[j].faculty.length;k++){

    // }

    return cost;
};

const sortPopulation = (
    population,
    genePool,
    days,
    classrooms,
    subject_data
) => {
    population.forEach((chromosome) => {
        chromosome.cost = calculateCosts(
            chromosome.timetables,
            _.cloneDeep(genePool),
            days,
            classrooms,
            subject_data
        );
    });

    let sortedPopulation = _.sortBy(
        population,
        (chromosome) => chromosome.cost
    );

    return sortedPopulation;
};

export default sortPopulation;