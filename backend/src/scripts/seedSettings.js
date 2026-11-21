require('dotenv').config({ path: require('path').join(__dirname, '../../.env') });
const mongoose = require('mongoose');
const config = require('../config');

async function seedSettings() {
  try {
    const connectDB = require('../config/db');
    await connectDB();

    const EventSettings = require('../models/EventSettings');
    let settings = await EventSettings.findOne();

    if (settings) {
      console.log('Event settings already exist. Updating details...');
    } else {
      settings = new EventSettings();
      console.log('Creating new event settings...');
    }

    // Set template & instructions
    settings.eventTitle = 'ACANS 2026 – National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities"';
    settings.eventSubtitle = 'Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities';
    settings.conferenceTitle = 'Indian Nuclear Society (INS) – Collaborating Organization';
    settings.conferenceSubtitle = 'Collaborating organization for ACANS 2026';
    settings.abstractTemplateFile = 'uploads/templates/Paper-presentation-templete.docx';
    settings.abstractTemplateName = 'Paper-presentation-templete.docx';
    settings.abstractInstructions = 'Prepare your paper presentation using the official ACANS 2026 Paper Presentation Template (DOCX). The online abstract summary must not exceed 250 words.';
    settings.abstractWordLimit = 250;
    settings.abstractDeadline = '3 December 2026';
    settings.importantDates = (settings.importantDates || []).map(item => {
      const dateItem = typeof item.toObject === 'function' ? item.toObject() : item;
      return dateItem.label === 'Abstract Submission Deadline'
        ? { ...dateItem, date: '3 December 2026', confirmed: true }
        : dateItem;
    }).filter(item => !/^(?:notice|notification) of acceptance$/i.test(item.label || ''));
    if (!settings.importantDates.some(item => item.label === 'Abstract Submission Deadline')) {
      settings.importantDates.push({ label: 'Abstract Submission Deadline', date: '3 December 2026', confirmed: true });
    }
    settings.fees = { student: 500, research_scholar: 750, faculty: 1000 };
    settings.paymentMethods = { upi: true, cash: true, bank_transfer: true };
    settings.paymentInstructions = 'Please complete the registration fee payment via UPI, Cash, or Bank Transfer as instructed by Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), LNMU. After payment, submit your transaction reference ID and details below for administrative verification.';
    settings.eventStartDate = '7 December 2026';
    settings.eventEndDate = '9 December 2026';
    settings.datesConfirmed = true;
    settings.datesNote = '';
    settings.venue = 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), Darbhanga, Bihar';
    settings.venueAddress = 'Lalit Narayan Mithila University Campus, Darbhanga, Bihar, India';
    settings.contactPhone = '9971144418, 9473370707';

    // Set about content
    settings.aboutEvent = `ACANS 2026 is the National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities." It is organised by Dr. A.P.J. Abdul Kalam Women's Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University (LNMU), Darbhanga, Bihar, in collaboration with the Indian Nuclear Society (INS). The seminar provides a platform for researchers, academicians, scientists, and industry professionals to discuss the intersections of nuclear science and advanced computing.`;

    settings.aboutINS = `The Indian Nuclear Society (INS) is a professional body dedicated to promoting the peaceful uses of nuclear energy and radiation technologies in India. INS collaborates with WIT, LNMU in organizing ACANS 2026. Separately, INS organizes its own annual conference, bringing together scientists, engineers, and researchers to share advances in nuclear science, reactor technologies, fuel cycle, radiation applications, and nuclear medicine.`;

    settings.aboutLNMU = `Lalit Narayan Mithila University (LNMU), established in 1972, is located in Darbhanga, Bihar, India. Named after the legendary Maithili scholar and philosopher, the university serves as a major center for higher education in the Mithila region. LNMU offers a wide range of undergraduate, postgraduate, and doctoral programs across multiple disciplines and is affiliated with numerous constituent and affiliated colleges throughout the region.`;

    settings.aboutWIT = `Dr. A.P.J. Abdul Kalam Women's Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University, Darbhanga, Bihar, was established in 2004 and inaugurated by Bharat Ratna Dr. A.P.J. Abdul Kalam on December 30, 2005. The institute is dedicated to providing technical education to women and contributing to the development of the Mithila region.`;

    // Set committees
    settings.committees = [
      // Office Bearers
      { name: 'Vice Chancellor', designation: 'Chief Patron', group: 'office_bearers', role: 'Chief Patron', sortOrder: 1 },
      { name: 'Registrar', designation: 'Patron', group: 'office_bearers', role: 'Patron', sortOrder: 2 },
      { name: 'Director', designation: 'President', group: 'office_bearers', role: 'President', sortOrder: 3 },
      { name: 'Dr. Rashmi', designation: 'Convener', group: 'office_bearers', role: 'Convener', sortOrder: 4 },
      { name: 'Mrs. Charmis Mariwala', designation: 'Co-Convener', group: 'office_bearers', role: 'Co-Convener', sortOrder: 5 },

      // Advisory - Physics
      { name: 'Prof. Naushad Alam', department: 'Physics', group: 'advisory_physics', sortOrder: 1 },
      { name: 'Dr. Pooja Agarwal', department: 'Physics', group: 'advisory_physics', sortOrder: 2 },
      { name: 'Dr. Sumandeep Kaur', department: 'Physics', group: 'advisory_physics', sortOrder: 3 },

      // Advisory - Chemistry
      { name: 'Dr. Abhishek Rai', department: 'Chemistry', group: 'advisory_chemistry', sortOrder: 1 },
      { name: 'Dr. Arindra Sharma', department: 'Chemistry', group: 'advisory_chemistry', sortOrder: 2 },

      // Advisory - Zoology
      { name: 'Dr. Parul Banerjee', department: 'Zoology', group: 'advisory_zoology', sortOrder: 1 },

      // Advisory - Botany
      { name: 'Dr. Aniket Kumar Singh', department: 'Botany', group: 'advisory_botany', sortOrder: 1 },

      // Advisory - WIT
      { name: 'Mr. Amit Kumar Mishra', group: 'advisory_wit', sortOrder: 1 },
      { name: 'Mrs. Neha Kumari', group: 'advisory_wit', sortOrder: 2 },
      { name: 'Mr. Ashif Habibi', group: 'advisory_wit', sortOrder: 3 },
      { name: 'Dr. Zakirullah Shamim', group: 'advisory_wit', sortOrder: 4 },
      { name: 'Dr. Avinash Chandra', group: 'advisory_wit', sortOrder: 5 },
      { name: 'Dr. Priyanka Rai', group: 'advisory_wit', sortOrder: 6 },

      // Organizing Committee
      { name: 'Dr. Priyanka Rai', designation: 'Deputy Registrar, WIT', group: 'organizing', sortOrder: 1 },
      { name: 'Mr. Krishna Murari', designation: 'Administrative Officer, WIT', group: 'organizing', sortOrder: 2 },
      { name: 'Mr. Amit Mishra', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 3 },
      { name: 'Ms. Kajal Kumari', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 4 },
      { name: 'Ms. Prachi Bharti', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 5 },
      { name: 'Dr. Rajeev Prasad', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 6 },
      { name: 'Mrs. Neha Kumari', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 7 },
      { name: 'Md Ashif Habibi', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 8 },
      { name: 'Mr. Ganesh Kumar Paswan', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 9 },
      { name: 'Dr. M.Z. Shamim', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 10 },
      { name: 'Dr. Chandrika Kumari', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 11 },
      { name: 'Dr. Avinash Chandra', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 12 },
      { name: 'Mr. Vipul Kumar', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 13 },
      { name: 'Dr. Utsav Kumar Prasar', designation: 'Assistant Professor, WIT', group: 'organizing', sortOrder: 14 },
    ];

    // Set themes
    settings.themes = [
      // Seminar themes
      { title: 'Advanced Computing Applications in Nuclear Science', category: 'workshop', sortOrder: 1, isPublished: true },
      { title: 'AI and Digital Twins for Nuclear Reactor Monitoring and Safety', category: 'workshop', sortOrder: 2, isPublished: true },
      { title: 'Advanced Computing Applications in Healthcare and Medical Sciences', category: 'workshop', sortOrder: 3, isPublished: true },
      { title: 'Nuclear Physics and Advanced Computing in Cancer Diagnosis and Treatment', category: 'workshop', sortOrder: 4, isPublished: true },
      { title: 'Advanced Computing for Molecular and Cellular Biology', category: 'workshop', sortOrder: 5, isPublished: true },
      { title: 'Hazard Prediction and Management', category: 'workshop', sortOrder: 6, isPublished: true },
      { title: 'GeoAI and High-Performance Computing for Nuclear Power Plant Siting and Environmental Risk Assessment', category: 'workshop', sortOrder: 7, isPublished: true },
      { title: 'AI, Machine Learning, Data Science, Cloud Computing, Cybersecurity, IoT, Generative AI, and Industry 5.0', category: 'workshop', sortOrder: 8, isPublished: true },

      // Related nuclear science topics
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

    await settings.save();
    console.log('Event settings seeded successfully.');

    await mongoose.disconnect();
    process.exit(0);
  } catch (error) {
    console.error('Error seeding settings:', error.message);
    process.exit(1);
  }
}

seedSettings();
