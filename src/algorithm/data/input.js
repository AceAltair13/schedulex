export default {
    working_days: [
        {
            day: "Monday",
            slots: 5,
        },
        {
            day: "Tuesday",
            slots: 5,
        },
        {
            day: "Wednesday",
            slots: 3,
        },
        {
            day: "Thursday",
            slots: 5,
        },
        {
            day: "Friday",
            slots: 5,
        },
    ],
    classrooms: ["CR35", "CR36", "CR55", "CR56", "CR15", "CR16"],
    school_data: [
        {
            department: "IT",
            year: 0,
            subjects: [
                {
                    subject_name: "DSA",
                    total_slots: 6,
                    faculty: [
                        {
                            teacher: "DK",
                            classrooms: ["CR35"],
                            slots: 2,
                        },
                        {
                            teacher: "AB",
                            classrooms: ["CR36"],
                            slots: 2,
                        },
                        {
                            teacher: "MG",
                            classrooms: ["CR35", "CR36"],
                            slots: 4,
                        },
                    ],
                },
                {
                    subject_name: "PCOM",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "PW",
                            classrooms: ["CR35", "CR36"],
                            slots: 3,
                        },
                        {
                            teacher: "AB",
                            classrooms: ["CR35", "CR36"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "DBMS",
                    total_slots: 6,
                    faculty: [
                        {
                            teacher: "AD",
                            classrooms: ["CR35", "CR36"],
                            slots: 3,
                        },
                        {
                            teacher: "PB",
                            classrooms: ["CR35", "CR36"],
                            slots: 3,
                        },
                    ],
                },
                {
                    subject_name: "LD",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "HM",
                            classrooms: ["CR35", "CR36"],
                            slots: 2,
                        },
                        {
                            teacher: "SB",
                            classrooms: ["CR35", "CR36"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "SPT",
                    total_slots: 2,
                    faculty: [
                        {
                            teacher: "LK",
                            classrooms: ["CR35", "CR36"],
                            slots: 2,
                        },
                    ],
                },
            ],
        },
        {
            department: "IT",
            year: 1,
            subjects: [
                {
                    subject_name: "COA",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "AC",
                            classrooms: ["CR55"],
                            slots: 4,
                        },
                        {
                            teacher: "MB",
                            classrooms: ["CR56"],
                            slots: 4,
                        },
                    ],
                },
                {
                    subject_name: "END",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "DT",
                            classrooms: ["CR55", "CR56"],
                            slots: 4,
                        },
                        {
                            teacher: "SP",
                            classrooms: ["CR55", "CR56"],
                            slots: 1,
                        },
                    ],
                },
                {
                    subject_name: "OS",
                    total_slots: 6,
                    faculty: [
                        {
                            teacher: "MG",
                            classrooms: ["CR55", "CR56"],
                            slots: 3,
                        },
                        {
                            teacher: "AD",
                            classrooms: ["CR55", "CR56"],
                            slots: 3,
                        },
                    ],
                },
                {
                    subject_name: "AT",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "SB",
                            classrooms: ["CR55", "CR56"],
                            slots: 2,
                        },
                        {
                            teacher: "PS",
                            classrooms: ["CR55", "CR56"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "PYT",
                    total_slots: 2,
                    faculty: [
                        {
                            teacher: "SG",
                            classrooms: ["CR55"],
                            slots: 2,
                        },
                        {
                            teacher: "JG",
                            classrooms: ["CR56"],
                            slots: 2,
                        },
                    ],
                },
            ],
        },
        {
            department: "COMP",
            year: 1,
            subjects: [
                {
                    subject_name: "C_PM",
                    total_slots: 6,
                    faculty: [
                        {
                            teacher: "PM",
                            classrooms: ["CR15"],
                            slots: 6,
                        },
                        {
                            teacher: "C_F1",
                            classrooms: ["CR16"],
                            slots: 6,
                        },
                    ],
                },
                {
                    subject_name: "C_BDA",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "AD",
                            classrooms: ["CR15", "CR16"],
                            slots: 4,
                        },
                        {
                            teacher: "C_F2",
                            classrooms: ["CR15", "CR16"],
                            slots: 1,
                        },
                    ],
                },
                {
                    subject_name: "C_ADSA",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "MG",
                            classrooms: ["CR15", "CR16"],
                            slots: 2,
                        },
                        {
                            teacher: "C_F3",
                            classrooms: ["CR15", "CR16"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "C_AT",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "C_F4",
                            classrooms: ["CR15", "CR16"],
                            slots: 2,
                        },
                        {
                            teacher: "C_F5",
                            classrooms: ["CR15", "CR16"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "C_PYT",
                    total_slots: 1,
                    faculty: [
                        {
                            teacher: "SG",
                            classrooms: ["CR15", "CR16"],
                            slots: 1,
                        },
                    ],
                },
            ],
        },
    ],
};
