import _ from "lodash";

const calculateCosts = (
    timetables,
    genePool,
    days,
    classrooms,
    subject_data
) => {
    let cost = 0;
    let genePool1 = _.cloneDeep(genePool);

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
    // 2. Distribute lecs in regular intervals.
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



    // 2. Distribute lecs in regular intervals.
    _.forEach(classrooms, (classroom) => {
        let _genePool = genePool1[classroom];
        let total_slots = 0;
        _.forEach(_genePool, (gpe) => {
            total_slots = total_slots + gpe.slots;
        })
        _.forEach(_genePool, (_gpe) => {
            if (_gpe.subject !== "" && _gpe.teacher !== "" && _gpe.slots > 0) {
                let curr_subject_slots = _gpe.slots;
                let interval = Math.floor(total_slots / curr_subject_slots);
                _.forEach(timetables, (timetable) => {
                    if (timetable.classroom === classroom) {
                        let start = false;
                        let count = 0;
                        _.forEach(_.flatten(timetable.timetable), (lecture) => {
                            if (lecture.teacher === _gpe.teacher && lecture.subject === _gpe.subject) {
                                if (!start) {
                                    start = true;
                                    count=0;
                                } else if (start) {
                                    if (count < interval) {
                                        cost += 0.05;
                                    }
                                }
                                count++;
                            } else if (start && count < interval) {
                                count++;
                            } else if (count >= interval) {
                                count = 0;
                                start = false;
                            }
                        })
                    }
                })
            }
        })
    })



    // _.forEach(timetables, (timetable) => {
    //     let _genePool = genePool[timetable.classroom];
    //     _.forEach(_genePool,(gene)=>{
    //         if(gene.slots>0 && gene.teacher!=="" && gene.subject!==""){
    //             let interval  = Math.floor(total_slots/gene.slots);
    //             let start = false;
    //             let count=0;
    //             _.forEach(_.flatten(timetable.timetable),(lecture)=>{
    //                 if(lecture.teacher === gene.teacher && lecture.subject === gene.subject){
    //                     if(!start){
    //                         start = true;
    //                         count=0;
    //                     }
    //                     else{
    //                         if(count<interval){
    //                             cost+=0.05;
    //                         }else if(count>=interval){
    //                             start = true;
    //                             count=0;
    //                         }
    //                     }
    //                 }else{
    //                     count++;
    //                 }
    //             });

    //         }
    //     })

    //     })





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