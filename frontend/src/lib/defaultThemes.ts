import { EventTheme } from '../types';

// Mirrors the published ACANS 2026 themes configured in backend/src/utils/initDefaults.js.
export const defaultThemes: EventTheme[] = [
  { title: 'Advanced Computing Applications in Nuclear Science', category: 'workshop', sortOrder: 1, isPublished: true },
  { title: 'AI and Digital Twins for Nuclear Reactor Monitoring and Safety', category: 'workshop', sortOrder: 2, isPublished: true },
  { title: 'Advanced Computing Applications in Healthcare and Medical Sciences', category: 'workshop', sortOrder: 3, isPublished: true },
  { title: 'Nuclear Physics and Advanced Computing in Cancer Diagnosis and Treatment', category: 'workshop', sortOrder: 4, isPublished: true },
  { title: 'Advanced Computing for Molecular and Cellular Biology', category: 'workshop', sortOrder: 5, isPublished: true },
  { title: 'Hazard Prediction and Management', category: 'workshop', sortOrder: 6, isPublished: true },
  { title: 'GeoAI and High-Performance Computing for Nuclear Power Plant Siting and Environmental Risk Assessment', category: 'workshop', sortOrder: 7, isPublished: true },
  { title: 'AI, Machine Learning, Data Science, Cloud Computing, Cybersecurity, IoT, Generative AI, and Industry 5.0', category: 'workshop', sortOrder: 8, isPublished: true },
  { title: '700 MWe PHWR: Work Horse of DAE', category: 'conference', sortOrder: 1, isPublished: true },
  { title: 'Innovation & Challenges in Design and Validation of SMRs and BSR-220', category: 'conference', sortOrder: 2, isPublished: true },
  { title: 'PFBR: Gateway to Thorium Utilization', category: 'conference', sortOrder: 3, isPublished: true },
  { title: 'Accelerating Nuclear Power: Role of PSUs and Private Industries in National Nuclear Mission', category: 'conference', sortOrder: 4, isPublished: true },
  { title: 'Developing Human Resources for Nuclear Power Sector', category: 'conference', sortOrder: 5, isPublished: true },
  { title: 'Advances in Reactor Technology for Gen III+ Reactors', category: 'conference', sortOrder: 6, isPublished: true },
  { title: 'Advances in Nuclear Fuel Cycle Technologies (From Ore to Core)', category: 'conference', sortOrder: 7, isPublished: true },
  { title: 'Advances in Fuel Reprocessing and Waste Management', category: 'conference', sortOrder: 8, isPublished: true },
  { title: 'Statutory Role of AERB and SHANTI Act', category: 'conference', sortOrder: 9, isPublished: true },
  { title: 'Recent Developments in Nuclear Technology for Agriculture and Food Security', category: 'conference', sortOrder: 10, isPublished: true },
  { title: 'Applications of Radioisotopes, Lasers and Electron Beam in Industry', category: 'conference', sortOrder: 11, isPublished: true },
  { title: 'Nuclear Medicine: Current Challenges and Innovations', category: 'conference', sortOrder: 12, isPublished: true },
  { title: 'Recent Advances in Fusion and Accelerator Technology', category: 'conference', sortOrder: 13, isPublished: true },
];
