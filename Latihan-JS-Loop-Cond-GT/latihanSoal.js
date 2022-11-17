// Array mahasiswa
const mahasiswa = [
  {
    name: "John Kenedy",
    GPA: 3.2,
    postgraduate: true,
    mastery: ["ReactJs", "AngularJs", "VueJs"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Bob Marley",
    GPA: 3.8,
    postgraduate: false,
    mastery: ["Laravel 9", "Codeigniter 3", "PHP Native"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Ryan Karta",
    GPA: 2.4,
    postgraduate: false,
    mastery: ["Golang", "NodeJs", "Spring"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Tim Joung",
    GPA: 2.8,
    postgraduate: true,
    mastery: ["Ionic", "Flutter"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Harry Potter",
    GPA: 4.0,
    postgraduate: false,
    mastery: ["Codeigniter 3", "ReactJs", "C#"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Petter Paley",
    GPA: 2.4,
    postgraduate: false,
    mastery: ["Codeigniter 3", "Flutter", "Laravel 9"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Eric Jangco",
    GPA: 1.5,
    postgraduate: false,
    mastery: ["Codeigniter 3"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Bryan Masiv",
    GPA: 3.5,
    postgraduate: true,
    mastery: ["Golang", "C#", "NodeJs"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Agus Setiawan",
    GPA: 3.5,
    postgraduate: false,
    mastery: ["AngularJs", "Laravel 9", "Laravel 8"],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
  {
    name: "Sean Malik",
    GPA: 1.0,
    postgraduate: false,
    mastery: [],
    doctor: "Dr",
    gelar: "S.Kom, M.Kom",
  },
];

// Disediakan 2 Array dibawah ini
const bachelorDegree = [];
const postGraduate = [];
const doctor = [];

// TODO
// Pindahkan data dari Array Mahasiswa kedalam 2 Array diatas dengan ketentuan sebagai berikut:
//
// 1. Array bachelorDegree akan berbentuk sebuah Array of Objects yang memiliki 2 key
//    yaitu name & GPA. Nilai kedua key tersebut berasal dari Array Mahasiswa.
//
// 2. Array postGraduate akan berbentuk sebuah Array of Objects yang memiliki 2 key
//    yaitu name & mastery. Nilai kedua key tersebut berasal dari Array Mahasiswa.
//
// Isi dari Array bachelorDegree adalah mahasiswa yang memiliki status postgraduate : false
// Isi dari Array postGraduate adalah mahasiswa yang memiliki status postgraduate : true

// Lakukan pemindahan data dengan menggunakan loop dan conditional!

// Setelah data dipindah ke dalam 2 Array tersebut, lakukan output sesuai
// dengan file output.png

for (let i = 0; i < mahasiswa.length; i++) {
  if(mahasiswa[i].postgraduate){
    postGraduate.push(
      {
        name: mahasiswa[i].name,
        mastery: mahasiswa[i].mastery,
      }
    )
  }else if(mahasiswa[i].bachelorDegree){
    bachelorDegree.push(
      {
        name: mahasiswa[i].name,
        GPA: mahasiswa[i].GPA,
      }
    )
  }else{
    mahasiswa[i].doctor
    doctor.push(
      {
        name: mahasiswa[i].name,
        dr: mahasiswa[i].doctor,
        gelar: mahasiswa[i].gelar
      }
    )
  }
  
}
console.log("Mahasiswa S2");
for (let i = 0; i < postGraduate.length; i++) {
  console.log("Nama : " +  postGraduate[i].name + "\nKeahlian : " + postGraduate[i].mastery);
  
}

console.log("Mahasiwa S1");
for (let i = 0; i < bachelorDegree.length; i++) {
 console.log("Nama : " + bachelorDegree[i].name + "\nIPK : " + bachelorDegree[i].GPA);
  
}

console.log("Mahasiswa S3");
for (let i = 0; i < doctor.length; i++) {
console.log("Nama : " + doctor[i].dr + "." + doctor[i].name + ", " + doctor[i].gelar);
  
}
