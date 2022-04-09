import _ from "lodash";

const prettify = (chromosome) => {
    let timetables = chromosome.timetables;
    timetables.forEach((_c) => {
        console.log(`\nClassroom: ${_c.classroom}`);
        let transpose = _.zip(..._c.timetable);
        let printTable = [];
        transpose.forEach((_t) => {
            let printRow = [];
            _t.forEach((_g) => {
                !!_g && _g.teacher
                    ? printRow.push(`${_g.teacher}-${_g.subject}`)
                    : printRow.push("---");
            });
            printTable.push(printRow);
        });
        console.table(printTable);
    });
};

export default prettify;
