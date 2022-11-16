let users = {
Monica : {
    name: "Monica",
    gender: "Female",
    age: "17",
    email: "monica@dingdong.com",
    favoriteColor: ["Yellow","Pink","White","Purple"],
    isHavePet: "Yes",
    education: [
        {
            name: "SD 01",
            city: "Jakarta",
            graduate: 2016,
        },
        {
            name: "SMP 02",
            city: "Jakarta",
            graduate: 2019,   
        },
        {
            name: "SMA 03",
            city: "Tangerang",
        },
    ],
    favoriteRestaurant: ["Bento","Sushi","Panchake","Eggy","Tempura","Bento","Eggy","Padang","Tteok","Sushi","Sushi"],
},
Rafli : {
    name: "Rafli",
    gender: "Male",
    age: "22",
    email: "rafli@dingdong.com",
    favoriteColor: ["Blue","Black","Grey"],
    isHavePet: "No",
    education: [
        {
            name: "SD 01 Mandalasari",
            city: "Pandeglang",
            graduate: 2012,
        },
        {
            name: "SMP 01 Pandeglang",
            city: "Pandeglang",
            graduate: 2016,   
        },
        {
            name: "SMA 06 Pandeglang",
            city: "Pandeglang",
            graduate: 2018,
        },
        {
            name: "Universitas Serang Raya",
            city: "Serang",
            graduate: 2022,
        },
    ],
    favoriteRestaurant: ["Tempura","Bento","Sushi","Panchake","Padang","Katsu","Geprek","Pancake","Eggy"],
},
};

console.log("Nama : " + users.Rafli.name);
console.log("Universitas : " + users.Rafli.education[3].name);
console.log("Kota : " + users.Rafli.education[3].city);
console.log("Makanan Favorite : " + users.Rafli.favoriteRestaurant[6]);
console.log("Warna Favorite : " + users.Rafli.favoriteColor[2]);