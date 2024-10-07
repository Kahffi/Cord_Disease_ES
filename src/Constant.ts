export type Disease = {
  name: string;
  code: string;
};

const DISEASES: Disease[] = [
  {
    name: "Bulai",
    code: "P001",
  },
  {
    name: "Blight",
    code: "P002",
  },
  {
    name: "Leaf Rust",
    code: "P003",
  },
  {
    name: "Burn",
    code: "P004",
  },
  {
    name: "Stem Borer",
    code: "P005",
  },
  {
    name: "Cob Borer",
    code: "P006",
  },
];

export type Symptom = {
  name: string;
  code: string;
};

const SYMPTOMS: Symptom[] = [
  {
    name: "Daun berwarna klorosis",
    code: "G1",
  },
  {
    name: "Mengalami pertumbuhan terhambat",
    code: "G2",
  },
  {
    name: "Warna putih seperti tepung pada permukaan atas dan bawah daun yang klorosis",
    code: "G3",
  },
  {
    name: "Daun menggulung dan melintir",
    code: "G4",
  },
  {
    name: "Pembentukan tongkol terganggu",
    code: "G5",
  },
  {
    name: "Daun yang terserang tampak layu",
    code: "G6",
  },
  {
    name: "Beberapa bercak kecil menyatu membentuk bercak yang lebih besar",
    code: "G7",
  },
  {
    name: "Bercak coklat muda memanjang berbentuk gulungan atau perahu",
    code: "G8",
  },
  {
    name: "Bercak coklat berbentuk elips",
    code: "G9",
  },
  {
    name: "Daun tampak kering",
    code: "G10",
  },
  {
    name: "Daun terlihat kering",
    code: "G11",
  },
  {
    name: "Bercak-bercak kecil berwarna coklat atau kuning pada permukaan daun",
    code: "G12",
  },
  {
    name: "Bercak-bercak merah pada pelepah",
    code: "G13",
  },
  {
    name: "Terdapat benang-benang yang bentuknya tidak beraturan, berwarna putih, kemudian coklat",
    code: "G14",
  },
  {
    name: "Keluar serbuk seperti tepung berwarna coklat kekuningan",
    code: "G15",
  },
];

// const SYMPTOMS_MAP = SYMPTOMS.reduce((map, symptom) => {
//   map.set(symptom.code, symptom.name);
//   return map;
// }, new Map<string, string>());

// const DISEASE_MAP = DISEASES.reduce((map, disease) => {
//   map.set(disease.code, disease.name);
//   return map;
// }, new Map<string, string>());
// const ANSWERS_MAP = ["a", "b", "c", "f"];
// // const Questions = [
// //   "Chlorotic Colored Leaves",

// //   "Experiencing growth retardation",

// //   "The white color is like flour on the upper and lower surfaces of the leaves which are chlorotic",

// //   "Leaves curled and twisted ",
// // ];

export { DISEASES, SYMPTOMS };
