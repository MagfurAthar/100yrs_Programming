const Stud_Info = [
    {
        name : "Aman",
        grade : "A+",
        city : "Ranchi"
    },
    {
        name : "Sameer",
        grade : "A",
        city : "TATA"
    },
    {
        name : "Akram",
        grade : "Ex",
        city : "Karachi"
    }
];
console.log(Stud_Info);
Stud_Info.push({ name : "Rana", grade : "A+", city : "Gridih"});
console.log(Stud_Info);
console.log(Stud_Info[1]);
console.log("Grade of Sameer :", Stud_Info[1].grade);
Stud_Info[3].name = "Kamal Hassan";
Stud_Info[3].city = "Istambul";
console.log(Stud_Info[3]);
console.log(Stud_Info);