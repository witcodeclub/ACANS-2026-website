const EventSettings = require('../models/EventSettings');
const User = require('../models/User');
const config = require('../config');

const aboutWITText = 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University, Darbhanga, Bihar, was established in 2004 and inaugurated by Bharat Ratna Dr. A.P.J. Abdul Kalam on December 30, 2005. The institute is dedicated to providing technical education to women and contributing to the development of the Mithila region.';
const contactPhoneNumbers = '9971144418, 9473370707';
const organizingCommitteeMembers = [
  { name: 'Dr. Priyanka Rai', designation: 'Deputy Registrar, WIT' },
  { name: 'Mr. Krishna Murari', designation: 'Administrative Officer, WIT' },
  { name: 'Mr. Amit Mishra', designation: 'Assistant Professor, WIT' },
  { name: 'Ms. Kajal Kumari', designation: 'Assistant Professor, WIT' },
  { name: 'Ms. Prachi Bharti', designation: 'Assistant Professor, WIT' },
  { name: 'Dr. Rajeev Prasad', designation: 'Assistant Professor, WIT' },
  { name: 'Mrs. Neha Kumari', designation: 'Assistant Professor, WIT' },
  { name: 'Md Ashif Habibi', designation: 'Assistant Professor, WIT' },
  { name: 'Mr. Ganesh Kumar Paswan', designation: 'Assistant Professor, WIT' },
  { name: 'Dr. M.Z. Shamim', designation: 'Assistant Professor, WIT' },
  { name: 'Dr. Chandrika Kumari', designation: 'Assistant Professor, WIT' },
  { name: 'Dr. Avinash Chandra', designation: 'Assistant Professor, WIT' },
  { name: 'Mr. Vipul Kumar', designation: 'Assistant Professor, WIT' },
  { name: 'Dr. Utsav Kumar Prasar', designation: 'Assistant Professor, WIT' },
];

const defaultThemes = [
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

async function initDefaults() {
  try {
    // 1. Check and initialize settings
    let settings = await EventSettings.findOne();
    if (!settings) {
      console.log('Seeding initial event settings...');
      settings = new EventSettings({
        eventTitle: 'ACANS 2026 – National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities"',
        eventSubtitle: 'Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities',
        conferenceTitle: 'Indian Nuclear Society (INS) – Collaborating Organization',
        conferenceSubtitle: 'Collaborating organization for ACANS 2026',
        workshopTitle: 'Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities',
        eventStartDate: '7 December 2026',
        eventEndDate: '9 December 2026',
        datesConfirmed: true,
        datesNote: '',
        venue: 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), Darbhanga, Bihar',
        venueAddress: 'Lalit Narayan Mithila University Campus, Darbhanga, Bihar 846004, India',
        aboutEvent: `ACANS 2026 is the National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities." It is organised by Dr. A.P.J. Abdul Kalam Women's Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University (LNMU), Darbhanga, Bihar, in collaboration with the Indian Nuclear Society (INS). The seminar brings together leading scientists, researchers, faculty, and research scholars to explore synergies between nuclear technologies and advanced computing.`,
        aboutINS: `The Indian Nuclear Society (INS) is a professional body dedicated to the advancement and peaceful applications of nuclear science, technology, and allied disciplines. INS collaborates with WIT, LNMU in organizing ACANS 2026. Separately, INS organizes its own annual conference and other scientific forums.`,
        aboutLNMU: `Lalit Narayan Mithila University (LNMU), established in 1972, is an esteemed state university situated in the historic city of Darbhanga, Bihar. Named in honour of the illustrious leader and philosopher Lalit Narayan Mishra, LNMU is a major hub of higher learning and research in North Bihar, providing quality education across arts, science, commerce, law, medicine, and engineering through numerous constituent and affiliated institutions.`,
        aboutWIT: aboutWITText,
        fees: {
          student: 500,
          research_scholar: 750,
          faculty: 1000,
        },
        paymentMethods: {
          upi: true,
          cash: true,
          bank_transfer: true,
        },
        paymentInstructions: 'Please submit registration fees according to instructions provided by Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), LNMU. After payment via UPI, Cash, or Bank Transfer, enter your transaction reference ID and proof below for administrative verification.',
        abstractWordLimit: 250,
        abstractDeadline: '3 December 2026',
        abstractInstructions: 'Prepare your paper presentation using the official ACANS 2026 Paper Presentation Template (DOCX). The online abstract summary must not exceed 250 words.',
        abstractTemplateFile: 'uploads/templates/Paper-presentation-templete.docx',
        abstractTemplateName: 'Paper-presentation-templete.docx',
        registrationOpen: true,
        abstractSubmissionOpen: true,
        contactEmail: 'contact@insac2026.org',
        contactPhone: contactPhoneNumbers,
        accommodation: 'Details regarding university guest house and nearby hotel accommodation in Darbhanga will be announced shortly.',
        travelInfo: 'Darbhanga is well-connected by air via Darbhanga Airport (DHR) with direct flights from Delhi, Mumbai, Bengaluru, and Kolkata. It is also well-connected by rail to major Indian cities.',
        importantDates: [
          { label: 'Seminar Dates', date: '7–9 December 2026', confirmed: true },
          { label: 'Abstract Submission Deadline', date: '3 December 2026', confirmed: true },
          { label: 'Registration Deadline', date: 'To be announced', confirmed: false },
        ],
        committees: [
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
          ...organizingCommitteeMembers.map((member, index) => ({
            ...member,
            group: 'organizing',
            sortOrder: index + 1,
          })),
        ],
        themes: defaultThemes,
      });
      await settings.save();
      console.log('Event settings seeded successfully.');
    } else {
      let settingsUpdated = false;

      // Correct previously seeded event details without replacing other settings.
      if (settings.eventStartDate === '7 December 2026' && settings.eventEndDate === '11 December 2026') {
        settings.eventEndDate = '9 December 2026';
        settings.datesConfirmed = true;
        settings.datesNote = '';
        if (Array.isArray(settings.importantDates)) {
          settings.importantDates = settings.importantDates.map((item) =>
            item.date === '7–11 December 2026'
              ? { ...item.toObject(), label: 'Seminar Dates', date: '7–9 December 2026', confirmed: true }
              : item,
          );
        }
        settingsUpdated = true;
      }

      const updateText = (field, replacements) => {
        if (typeof settings[field] !== 'string') return;
        const updated = replacements.reduce((text, [pattern, replacement]) => text.replace(pattern, replacement), settings[field]);
        if (updated !== settings[field]) {
          settings[field] = updated;
          settingsUpdated = true;
        }
      };
      const officialEventTitle = 'ACANS 2026 – National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities"';
      if (settings.eventTitle !== officialEventTitle) {
        settings.eventTitle = officialEventTitle;
        settingsUpdated = true;
      }
      updateText('eventSubtitle', [[/INSAC[ -]?2026/gi, 'ACANS 2026']]);
      updateText('conferenceTitle', [[/Indian Nuclear Society.?s Annual Conference/i, 'Indian Nuclear Society (INS) – Collaborating Organization']]);
      updateText('aboutEvent', [[/INSAC[ -]?2026/gi, 'ACANS 2026'], [/ACANS 2026 brings together the Indian Nuclear Society.?s Annual Conference and the National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities\." Hosted by Dr\. A\.P\.J\. Abdul Kalam Women.?s Institute of Technology \(WIT\), a constituent unit of Lalit Narayan Mithila University \(LNMU\), Darbhanga, Bihar, in collaboration with the Indian Nuclear Society \(INS\), this landmark gathering unites leading scientists, researchers, faculty, and research scholars to explore synergies between nuclear technologies and cutting-edge computational sciences\./i, 'ACANS 2026 is the National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities." It is hosted by Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University (LNMU), Darbhanga, Bihar, in collaboration with the Indian Nuclear Society (INS).']]);
      updateText('aboutINS', [[/\bINSAC\b/gi, 'ACANS 2026']]);
      if (typeof settings.aboutINS === 'string' && /INSAC 2026|ACANS 2026 serves|annual ACANS 2026 conference/i.test(settings.aboutINS)) {
        settings.aboutINS = 'The Indian Nuclear Society (INS) is a professional body dedicated to the advancement and peaceful applications of nuclear science, technology, and allied disciplines. INS collaborates with WIT, LNMU in organizing ACANS 2026. Separately, INS organizes its own annual conference and other scientific forums.';
        settingsUpdated = true;
      }
      updateText('abstractInstructions', [[/INSAC[ -]?2026/gi, 'ACANS 2026'], [/not exceed 2 pages|maximum 2 pages|maximum of two pages/gi, 'not exceed one page or 250 words'], [/hosted by/gi, 'organised by'], [/official ACANS 2026 abstract template/gi, 'official ACANS 2026 Paper Presentation Template (DOCX)']]);
      updateText('abstractTemplateName', [[/INSAC[ -]?2026/gi, 'ACANS 2026'], [/ACANS-2026-(?:extended-)?abstract-template\.docx/gi, 'Paper-presentation-templete.docx'], [/ACANS-2026-Paper-Presentation-Template\.docx/gi, 'Paper-presentation-templete.docx']]);
      updateText('abstractTemplateFile', [[/Template_for_extended_abstract_INSAC-2026\.docx/gi, 'uploads/templates/Paper-presentation-templete.docx'], [/Template_for_extended_abstract_ACANS-2026\.docx/gi, 'uploads/templates/Paper-presentation-templete.docx'], [/uploads\/templates\/ACANS-2026-extended-abstract-template\.docx/gi, 'uploads/templates/Paper-presentation-templete.docx'], [/uploads\/templates\/ACANS-2026-Paper-Presentation-Template\.docx/gi, 'uploads/templates/Paper-presentation-templete.docx']]);
      if (settings.aboutWIT !== aboutWITText) {
        settings.aboutWIT = aboutWITText;
        settingsUpdated = true;
      }
      if (settings.contactPhone !== contactPhoneNumbers) {
        settings.contactPhone = contactPhoneNumbers;
        settingsUpdated = true;
      }
      const existingOrganizingMembers = (settings.committees || []).filter((member) => member.group === 'organizing');
      const expectedOrganizingMembers = organizingCommitteeMembers.map((member, index) => ({
        ...member,
        group: 'organizing',
        sortOrder: index + 1,
      }));
      const organizingMembersMatch = existingOrganizingMembers.length === expectedOrganizingMembers.length
        && existingOrganizingMembers.every((member, index) =>
          member.name === expectedOrganizingMembers[index].name
          && member.designation === expectedOrganizingMembers[index].designation
          && member.sortOrder === expectedOrganizingMembers[index].sortOrder);
      if (!organizingMembersMatch) {
        settings.committees = (settings.committees || [])
          .filter((member) => member.group !== 'organizing')
          .concat(expectedOrganizingMembers);
        settingsUpdated = true;
      }
      if (!(settings.committees || []).some((member) => member.name === 'Dr. Priyanka Rai' && member.group === 'advisory_wit')) {
        if (!Array.isArray(settings.committees)) settings.committees = [];
        settings.committees.push({ name: 'Dr. Priyanka Rai', group: 'advisory_wit', sortOrder: 6 });
        settingsUpdated = true;
      }
      if (!Array.isArray(settings.themes) || settings.themes.length === 0) {
        settings.themes = defaultThemes;
        settingsUpdated = true;
      }
      const charmis = (settings.committees || []).find((member) => member.name === 'Mrs. Charmis Mariwala');
      if (charmis && (charmis.designation !== 'Co-Convener' || charmis.role !== 'Co-Convener')) {
        charmis.designation = 'Co-Convener';
        charmis.role = 'Co-Convener';
        settingsUpdated = true;
      }
      (settings.committees || []).forEach((member) => {
        if (member.group?.startsWith('advisory_') && member.institution) {
          member.institution = '';
          settingsUpdated = true;
        }
      });
      if (typeof settings.aboutEvent === 'string' && /Indian Nuclear Society.?s Annual Conference|National Seminar on Advanced Computing(?! and Nuclear Science: Emerging Technologies)/i.test(settings.aboutEvent)) {
        settings.aboutEvent = 'ACANS 2026 is the National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities." It is hosted by Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University (LNMU), Darbhanga, Bihar, in collaboration with the Indian Nuclear Society (INS). The seminar brings together leading scientists, researchers, faculty, and research scholars to explore synergies between nuclear technologies and advanced computing.';
        settingsUpdated = true;
      }
      if (settings.conferenceTitle !== 'Indian Nuclear Society (INS) – Collaborating Organization') {
        settings.conferenceTitle = 'Indian Nuclear Society (INS) – Collaborating Organization';
        settingsUpdated = true;
      }
      if (settings.conferenceSubtitle === 'Nuclear Energy & Nuclear Radiation: A Boon to Mankind') {
        settings.conferenceSubtitle = 'Collaborating organization for ACANS 2026';
        settingsUpdated = true;
      }
      if (Number(settings.abstractWordLimit) > 250) {
        settings.abstractWordLimit = 250;
        settingsUpdated = true;
      }
      if (settings.abstractDeadline !== '3 December 2026') {
        settings.abstractDeadline = '3 December 2026';
        settingsUpdated = true;
      }
      if (Array.isArray(settings.importantDates)) {
        const filteredDates = settings.importantDates.filter((item) => !/^(?:notice|notification) of acceptance$/i.test(item.label || ''));
        if (filteredDates.length !== settings.importantDates.length) {
          settings.importantDates = filteredDates;
          settingsUpdated = true;
        }
        let hasAbstractDeadline = false;
        settings.importantDates.forEach((item) => {
          if (item.label === 'Abstract Submission Deadline') {
            hasAbstractDeadline = true;
            if (item.date !== '3 December 2026' || item.confirmed !== true) {
              item.date = '3 December 2026';
              item.confirmed = true;
              settingsUpdated = true;
            }
          }
        });
        if (!hasAbstractDeadline) {
          settings.importantDates.push({ label: 'Abstract Submission Deadline', date: '3 December 2026', confirmed: true });
          settingsUpdated = true;
        }
      }
      if (typeof settings.aboutEvent === 'string' && /hosted by/i.test(settings.aboutEvent)) {
        settings.aboutEvent = settings.aboutEvent.replace(/hosted by/gi, 'organised by');
        settingsUpdated = true;
      }
      if (typeof settings.abstractInstructions === 'string' && /2 pages|two pages/i.test(settings.abstractInstructions)) {
        settings.abstractInstructions = 'All submissions must conform to the official ACANS 2026 abstract template. Contributory paper abstracts must not exceed one page or 250 words, including figures, tables, and references.';
        settingsUpdated = true;
      }
      if (typeof settings.abstractInstructions === 'string' && /extended\s+abstract/i.test(settings.abstractInstructions)) {
        settings.abstractInstructions = settings.abstractInstructions.replace(/extended\s+abstract/gi, 'abstract');
        settingsUpdated = true;
      }
      if (Array.isArray(settings.announcements)) {
        settings.announcements.forEach((announcement) => {
          for (const field of ['title', 'content']) {
            if (typeof announcement[field] !== 'string') continue;
            const updated = announcement[field]
              .replace(/INSAC[ -]?2026/gi, 'ACANS 2026')
              .replace(/extended\s+abstract/gi, 'abstract')
              .replace(/4 December 2026|December 4,? 2026|2026-12-04|12\/04\/2026/gi, '3 December 2026')
              .replace(/National Workshop/gi, 'National Seminar')
              .replace(/Indian Nuclear Society.?s Annual Conference/gi, 'ACANS 2026 National Seminar in collaboration with the Indian Nuclear Society (INS)')
              .replace(/National Seminar on Advanced Computing(?! and Nuclear Science: Emerging Technologies)/gi, 'National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities"');
            if (updated !== announcement[field]) {
              announcement[field] = updated;
              settingsUpdated = true;
            }
          }
        });
      }
      if (Array.isArray(settings.importantDates)) {
        settings.importantDates.forEach((item) => {
          if (item.label === 'Conference Dates') {
            item.label = 'Seminar Dates';
            settingsUpdated = true;
          }
        });
      }
      if (Array.isArray(settings.themes)) {
        settings.themes.forEach((theme) => {
          for (const field of ['title', 'description']) {
            if (typeof theme[field] !== 'string') continue;
            const updated = theme[field].replace(/National Workshop/gi, 'National Seminar');
            if (updated !== theme[field]) {
              theme[field] = updated;
              settingsUpdated = true;
            }
          }
        });
      }

      if (typeof settings.abstractTemplateName === 'string' && /(?:extended-)?abstract-template/i.test(settings.abstractTemplateName)) {
        settings.abstractTemplateName = 'Paper-presentation-templete.docx';
        settingsUpdated = true;
      }

      // Ensure template path is set if empty
      if (!settings.abstractTemplateFile || /ACANS-2026-extended-abstract-template\.docx/i.test(settings.abstractTemplateFile) || settings.abstractTemplateName === 'Template for extended abstract (ACANS 2026).docx') {
        settings.abstractTemplateFile = 'uploads/templates/Paper-presentation-templete.docx';
        settings.abstractTemplateName = 'Paper-presentation-templete.docx';
        settingsUpdated = true;
      }

      if (settingsUpdated) {
        await settings.save();
      }
    }

    // 2. Provision admin user if credentials configured
    if (config.admin.email && config.admin.password) {
      const existingAdmin = await User.findOne({ email: config.admin.email.toLowerCase() });
      if (!existingAdmin) {
        await User.create({
          fullName: config.admin.name || 'System Administrator',
          email: config.admin.email.toLowerCase(),
          password: config.admin.password,
          role: 'admin',
          isEmailVerified: true,
          consentGiven: true,
        });
        console.log(`Admin user auto-provisioned: ${config.admin.email}`);
      }
    }
  } catch (error) {
    console.error('Error in initDefaults:', error.message);
  }
}

module.exports = initDefaults;
