
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
                            unavailable_slots:[[0,1,2,3],[0,1,2,3],[],[],[]]
                          
                        },
                        {
                            teacher: "NDJ",
                            classrooms: ["IT-TE5", "IT-TE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[0,1,2,3],[0,1,2,3]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "SP",
                            classrooms:["IT-TE5", "IT-TE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "BT",
                            classrooms: [ "IT-TE6"],
                            slots: 1,
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "NJ",
                            classrooms: ["IT-TE5"],
                            slots: 1,
                            unavailable_slots:[[],[],[],[],[]]

                            
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
                            unavailable_slots:[[],[],[],[],[]]

                        }, 
                        {
                            teacher: "SR",
                            classrooms: ["IT-TE5", "IT-TE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "PS",
                            classrooms: ["IT-BE5","IT-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "MB",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "VB",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "DK",
                            classrooms: ["IT-BE5", "IT-BE6"],
                            slots: 1,
                            unavailable_slots:[[],[],[],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "RR",
                            classrooms: ["CS-BE5","CS-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]

                        },
                        {
                            teacher: "KG",
                            classrooms: ["CS-BE5","CS-BE6"],
                            slots: 1,
                            unavailable_slots:[[0,1,2,3],[0,1,2,3],[0,1,2,3],[],[]]

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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "PV",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "SS",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "MD",
                            classrooms: ["CS-BE5", "CS-BE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "DP",
                            classrooms: ["CS-TE5","CS-TE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "RF",
                            classrooms: ["CS-TE5","CS-TE6"],
                            slots: 1,
                            unavailable_slots:[[],[],[0,1,2,3],[0,1,2,3],[0,1,2,3]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "RK",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "SS",
                            classrooms: ["CS-TE5", "CS-TE6"],
                            slots: 2,
                            unavailable_slots:[[],[],[],[],[]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                        {
                            teacher: "MM",
                            classrooms: ["CS-TE5"],
                            slots: 4,
                            unavailable_slots:[[],[],[],[],[]]
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
                            unavailable_slots:[[],[],[],[],[]]
                        },
                    ],
                },
            ],
        },
    ],
};
