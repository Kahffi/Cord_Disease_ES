type Disease = {
  diseaseName: string;
  diseaseCode: string;
};

const DISEASES: Disease[] = [
  {
    diseaseName: "Bulai",
    diseaseCode: "P001",
  },
  // {
  //     diseaseName: "Blight",
  //     diseaseCode: "P002",
  // },
  // {
  //     diseaseName: "Leaf Rust",
  //     diseaseCode: "P003",
  // },
  // {
  //     diseaseName: "Burn",
  //     diseaseCode: "P004",
  // },
  // {
  //     diseaseName: "Stem Borer",
  //     diseaseCode: "P005",
  // },
  // {
  //     diseaseName: "Cob Borer",
  //     diseaseCode: "P006",
  // },
];

type Symptom = {
  symptomName: string;
  symptomCode: string;
};

const SYMPTOPMS: Symptom[] = [
  {
    symptomName: "Chlorotic Colored Leaves",
    symptomCode: "G1",
  },
  {
    symptomName: "Experiencing growth retardation",
    symptomCode: "G2",
  },
  {
    symptomName:
      "The white color is like flour on the upper and lower surfaces of the leaves which are chlorotic",
    symptomCode: "G3",
  },
  {
    symptomName: "Leaves curled and twisted ",
    symptomCode: "G4",
  },
  {
    symptomName: "Impaired cob formation",
    symptomCode: "G5",
  },
  // {
  //     symptomName: "Affected leaves look wilted",
  //     symptomCode: "G6",
  // },
  // {
  //     symptomName: "Several small patches unite to form a larger spot",
  //     symptomCode: "G7",
  // },
  // {
  //     symptomName: "Elongated light brown patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
  // {
  //     symptomName: "Elongated light brow patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
  // {
  //     symptomName: "Elongated light brown patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
  // {
  //     symptomName: "Elongated light brow patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
  // {
  //     symptomName: "Elongated light brow patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
  // {
  //     symptomName: "Elongated light brow patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
  // {
  //     symptomName: "Elongated light brow patches in the shape of a coil or boat",
  //     symptomCode: "G8",
  // },
];

const Questions = [
  "Chlorotic Colored Leaves",

  "Experiencing growth retardation",

  "The white color is like flour on the upper and lower surfaces of the leaves which are chlorotic",

  "Leaves curled and twisted ",
];
const ANSWERS_MAP = ["a", "b", "c", "f"];

export { DISEASES, SYMPTOPMS, Questions, ANSWERS_MAP };
