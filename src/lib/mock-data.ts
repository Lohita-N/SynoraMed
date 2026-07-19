import type { Status } from "@/components/ui";

export type LabValue = {
  name: string;
  value: number;
  unit: string;
  low: number;
  high: number;
  status: Status;
  statusLabel: string;
  history: { label: string; value: number }[];
};

export type ReportSummary = {
  id: string;
  title: string;
  type: "Blood" | "Imaging" | "Pathology";
  date: string;
  status: Status;
  statusLabel: string;
  findings: number;
};

export type Term = {
  term: string;
  definition: string;
  whyItMatters: string;
  category: string;
};

export const reports: ReportSummary[] = [
  {
    id: "cbc-2024-03",
    title: "Complete Blood Count (CBC)",
    type: "Blood",
    date: "Mar 14, 2024",
    status: "watch",
    statusLabel: "2 to review",
    findings: 2,
  },
  {
    id: "lipid-2024-02",
    title: "Lipid Panel",
    type: "Blood",
    date: "Feb 02, 2024",
    status: "high",
    statusLabel: "Needs attention",
    findings: 3,
  },
  {
    id: "chest-ct-2023-11",
    title: "Chest CT Scan",
    type: "Imaging",
    date: "Nov 20, 2023",
    status: "optimal",
    statusLabel: "Normal",
    findings: 0,
  },
];

export const labValues: LabValue[] = [
  {
    name: "Hemoglobin",
    value: 11.2,
    unit: "g/dL",
    low: 12,
    high: 16,
    status: "watch",
    statusLabel: "Low",
    history: [
      { label: "Feb '23", value: 13.1 },
      { label: "May '23", value: 12.6 },
      { label: "Aug '23", value: 12.0 },
      { label: "Nov '23", value: 11.6 },
      { label: "Feb '24", value: 11.2 },
    ],
  },
  {
    name: "LDL Cholesterol",
    value: 172,
    unit: "mg/dL",
    low: 0,
    high: 100,
    status: "high",
    statusLabel: "High",
    history: [
      { label: "Feb '23", value: 140 },
      { label: "May '23", value: 150 },
      { label: "Aug '23", value: 158 },
      { label: "Nov '23", value: 165 },
      { label: "Feb '24", value: 172 },
    ],
  },
  {
    name: "Glucose (Fasting)",
    value: 92,
    unit: "mg/dL",
    low: 70,
    high: 99,
    status: "optimal",
    statusLabel: "Normal",
    history: [
      { label: "Feb '23", value: 95 },
      { label: "May '23", value: 90 },
      { label: "Aug '23", value: 93 },
      { label: "Nov '23", value: 91 },
      { label: "Feb '24", value: 92 },
    ],
  },
  {
    name: "White Blood Cells",
    value: 7.1,
    unit: "10⁹/L",
    low: 4,
    high: 11,
    status: "optimal",
    statusLabel: "Normal",
    history: [
      { label: "Feb '23", value: 6.8 },
      { label: "May '23", value: 7.0 },
      { label: "Aug '23", value: 6.9 },
      { label: "Nov '23", value: 7.2 },
      { label: "Feb '24", value: 7.1 },
    ],
  },
];

export const terms: Term[] = [
  {
    term: "Hemoglobin",
    definition:
      "A protein in red blood cells that carries oxygen from your lungs to the rest of your body.",
    whyItMatters:
      "Low hemoglobin can mean anemia, which may cause tiredness or shortness of breath.",
    category: "Blood",
  },
  {
    term: "LDL Cholesterol",
    definition:
      "Often called 'bad' cholesterol — it can build up in your arteries.",
    whyItMatters:
      "High LDL raises the risk of heart disease and stroke over time.",
    category: "Cardiovascular",
  },
  {
    term: "Atelectasis",
    definition: "A partial or complete collapse of a lung or part of a lung.",
    whyItMatters:
      "It's often mild and reversible, but your doctor may want to know the cause.",
    category: "Imaging",
  },
  {
    term: "Pleural effusion",
    definition: "A build-up of fluid between the layers around the lungs.",
    whyItMatters:
      "Small amounts can be harmless; larger amounts may need follow-up.",
    category: "Imaging",
  },
];

export const insights = Array.from({ length: 6 }).map((_, i) => ({
  id: i,
  title:
    i % 2 === 0
      ? "LDL cholesterol has been trending upward"
      : "Hemoglobin slightly below the normal range",
  source: "System insight",
  delta: i % 2 === 0 ? "+23%" : "-8%",
  time: "2:34 PM",
  unread: i < 3,
}));

export const questions = [
  "What could be causing my hemoglobin to drop over the past year?",
  "Do my LDL cholesterol levels mean I need to change my diet or medication?",
  "Are there any lifestyle changes you'd recommend based on these results?",
  "Should I schedule a follow-up test, and if so, when?",
];

export const references = [
  {
    source: "MedlinePlus",
    title: "Hemoglobin test",
    url: "https://medlineplus.gov/lab-tests/hemoglobin-test/",
    matched: "Hemoglobin",
  },
  {
    source: "Mayo Clinic",
    title: "High cholesterol — Symptoms & causes",
    url: "https://www.mayoclinic.org/diseases-conditions/high-blood-cholesterol/symptoms-causes/syc-20350800",
    matched: "LDL Cholesterol",
  },
  {
    source: "NIH",
    title: "LDL and HDL Cholesterol",
    url: "https://www.nhlbi.nih.gov/health/blood-cholesterol",
    matched: "LDL Cholesterol",
  },
];
