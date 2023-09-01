// soal 1
let suhu = -101;
let keadaan = "";

if (suhu > 500 || suhu < -100) {
    keadaan = "tidak terdefinisi";
} else if (suhu >= 101 || suhu >= 500) {
    keadaan = "Uap";
} else if (suhu >= 1 || suhu >= 100) {
    keadaan = "Cair";
} else if (suhu >= -100 || suhu >= 0) {
    keadaan = "Beku";
}
console.log(keadaan);

// soal 2

let kendaraan = "motor";
let plat = "putih";
let kecepatan = 1600;
let bbm = "";

if (kendaraan == "motor" || plat == "kuning") {
    bbm = "BBM Subsidi"
} else if (kendaraan == "mobil" && kecepatan <= 1500) {
    bbm = "PERTAMAX"
} else if (kendaraan == "mobil" || kecepatan >= 1500) {
    bbm = "PERTAMAX TURBO"
}

console.log(bbm);