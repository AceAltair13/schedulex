
export default {
    working_days: [
        {
            day: "Monday",
            slots: 4,
        },
        {
            day: "Tuesday",
            slots: 4,
        },
        {
            day: "Wednesday",
            slots: 4,
        },
        {
            day: "Thursday",
            slots: 4,
        },
        {
            day: "Friday",
            slots: 4,
        },
    ],
    classrooms: ["IT-TE5", "IT-TE6","IT-BE5", "IT-BE6", "CS-BE5"
                , "CS-BE6","CS-TE5", "CS-TE6"],
    school_data: [
        {
            department: "IT",
            year: 0,
            subjects: [
                {
                    subject_name: "DMBI",
                    total_slots: 4,

                    faculty: [
                        {
                            teacher: "AD",
                            classrooms: ["IT-TE5","IT-TE6"],
                            slots: 2,
                        },
                        {
                            teacher: "NDJ",
                            classrooms: ["IT-TE5", "IT-TE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "Web X.0",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "JP",
                            classrooms:["IT-TE5", "IT-TE6"],
                            slots: 2,
                        },
                        {
                            teacher: "SP",
                            classrooms:["IT-TE5", "IT-TE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "WTN",
                    total_slots: 3,
                    faculty: [
                        {
                            teacher: "SR",
                            classrooms: ["IT-TE5", "IT-TE6"],
                            slots: 3,
                        }
                    ],
                },
                {
                    subject_name: "AI&DS",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "KG",
                            classrooms: ["IT-TE5", "IT-TE6"],
                            slots: 3,
                        },
                        {
                            teacher: "BT",
                            classrooms: [ "IT-TE6"],
                            slots: 1,
                        },
                        {
                            teacher: "NJ",
                            classrooms: ["IT-TE5"],
                            slots: 1,
                        }
                    ],
                },
                {
                    subject_name: "Extra",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "Ex-SR",
                            classrooms: ["IT-TE5", "IT-TE6"],
                            slots: 3,
                        }, 
                        {
                            teacher: "SR",
                            classrooms: ["IT-TE5", "IT-TE6"],
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
                    subject_name: "BDA",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "BT",
                            classrooms: ["IT-BE5","IT-BE6"],
                            slots: 3,
                        },
                        {
                            teacher: "PS",
                            classrooms: ["IT-BE5","IT-BE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "IOE",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "SR",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 3,
                        },
                        {
                            teacher: "MB",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "PM",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "PK",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 2,
                        },
                        {
                            teacher: "VB",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "UID",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "SN",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 3,
                        },
                        {
                            teacher: "DK",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 1,
                        },
                    ],
                },
            ],
        },
        {
            department: "CS",
            year: 2,
            subjects: [
                {
                    subject_name: "HMI",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "UB",
                            classrooms: ["CS-BE5","CS-BE6"],
                            slots: 2,
                        },
                        {
                            teacher: "RR",
                            classrooms: ["CS-BE5","CS-BE6"],
                            slots: 2,
                        },
                        {
                            teacher: "KG",
                            classrooms: ["CS-BE5","CS-BE6"],
                            slots: 1,
                        },
                    ],
                },
                {
                    subject_name: "DC",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "VD",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 3,
                        },
                        {
                            teacher: "PV",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "NLP",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "NJ",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                        },
                        {
                            teacher: "SS",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "FM",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "MM",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                        },
                        {
                            teacher: "MD",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                        },
                    ],
                },
            ],
        },
        {
            department: "CS",
            year: 3,
            subjects: [
                {
                    subject_name: "SPCC",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "RS",
                            classrooms: ["CS-TE5","CS-TE6"],
                            slots: 2,
                        },
                        {
                            teacher: "DP",
                            classrooms: ["CS-TE5","CS-TE6"],
                            slots: 2,
                        },
                        {
                            teacher: "RF",
                            classrooms: ["CS-TE5","CS-TE6"],
                            slots: 1,
                        },
                    ],
                },
                {
                    subject_name: "CSS",
                    total_slots: 5,
                    faculty: [
                        {
                            teacher: "VS",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 3,
                        },
                        {
                            teacher: "RK",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "MC",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "NJ",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 2,
                        },
                        {
                            teacher: "SS",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 2,
                        },
                    ],
                },
                {
                    subject_name: "AIL",
                    total_slots: 4,
                    faculty: [
                        {
                            teacher: "PV",
                            classrooms: [ "CS-TE6"],
                            slots: 4,
                        },
                        {
                            teacher: "MM",
                            classrooms: ["CS-TE5"],
                            slots: 4,
                        },
                        
                    ],
                
                },
                {
                    subject_name: "TCS",
                    total_slots: 2,
                    faculty: [
                        {
                            teacher: "UB",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 2,
                        },
                    ],
                },
            ],
        },
    ],
};
