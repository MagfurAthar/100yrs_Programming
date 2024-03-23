const StudentInfo = {
    Aman : {
        grad : "A+",
        city : "Ranchi"
    },
    Minhaz : {
        grad : "A",
        city : "Pune"
    }
};
console.log(StudentInfo);
console.log(StudentInfo.Aman);
console.log(StudentInfo.Aman.grad);
StudentInfo.Aman.grad = "Ex";
console.log(StudentInfo.Aman.grad);
StudentInfo.Minhaz.city = "Kolkata";
console.log("Minhaz is from", StudentInfo.Minhaz.city);