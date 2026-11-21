const mongoose = require('mongoose');

const committeeSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  designation: { type: String, trim: true },
  department: { type: String, trim: true },
  institution: { type: String, trim: true },
  group: {
    type: String,
    required: true,
    enum: ['office_bearers', 'advisory_physics', 'advisory_chemistry', 'advisory_zoology', 'advisory_botany', 'advisory_wit', 'organizing'],
  },
  role: { type: String, trim: true }, // e.g., "Chief Patron", "Patron"
  sortOrder: { type: Number, default: 0 },
}, { timestamps: true });

const themeSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  description: { type: String, trim: true },
  category: {
    type: String,
    enum: ['workshop', 'conference'],
    default: 'workshop',
  },
  isPublished: { type: Boolean, default: true },
  sortOrder: { type: Number, default: 0 },
}, { timestamps: true });

const eventSettingsSchema = new mongoose.Schema({
  // Core event info
  eventTitle: {
    type: String,
    default: 'ACANS 2026 – National Seminar on "Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities"',
  },
  eventSubtitle: {
    type: String,
    default: 'Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities',
  },
  conferenceTitle: {
    type: String,
    default: 'Indian Nuclear Society (INS) – Collaborating Organization',
  },
  conferenceSubtitle: {
    type: String,
    default: 'Collaborating organization for ACANS 2026',
  },
  workshopTitle: {
    type: String,
    default: 'Advanced Computing and Nuclear Science: Emerging Technologies, Interdisciplinary Applications and Research Opportunities',
  },

  // Dates
  eventStartDate: { type: String, default: '7 December 2026' },
  eventEndDate: { type: String, default: '9 December 2026' },
  datesConfirmed: { type: Boolean, default: true },
  datesNote: { type: String, default: '' },

  // Venue
  venue: {
    type: String,
    default: 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), Darbhanga, Bihar',
  },
  venueAddress: {
    type: String,
    default: 'Lalit Narayan Mithila University Campus, Darbhanga, Bihar, India',
  },

  // About content
  aboutEvent: { type: String, default: '' },
  aboutINS: { type: String, default: '' },
  aboutLNMU: { type: String, default: '' },
  aboutWIT: {
    type: String,
    default: 'Dr. A.P.J. Abdul Kalam Women\'s Institute of Technology (WIT), a constituent unit of Lalit Narayan Mithila University, Darbhanga, Bihar, was established in 2004 and inaugurated by Bharat Ratna Dr. A.P.J. Abdul Kalam on December 30, 2005. The institute is dedicated to providing technical education to women and contributing to the development of the Mithila region.',
  },

  // Fees
  fees: {
    student: { type: Number, default: 500 },
    research_scholar: { type: Number, default: 750 },
    faculty: { type: Number, default: 1000 },
  },

  // Payment methods
  paymentMethods: {
    upi: { type: Boolean, default: true },
    cash: { type: Boolean, default: true },
    bank_transfer: { type: Boolean, default: false },
  },
  paymentInstructions: { type: String, default: '' },

  // Abstract settings
  abstractWordLimit: { type: Number, default: 250 },
  abstractDeadline: { type: String, default: '3 December 2026' },
  abstractTemplateFile: { type: String, default: 'uploads/templates/Paper-presentation-templete.docx' },
  abstractTemplateName: { type: String, default: 'Paper-presentation-templete.docx' },
  abstractInstructions: {
    type: String,
    default: 'Prepare your paper presentation using the official ACANS 2026 Paper Presentation Template (DOCX). The online abstract summary must not exceed 250 words.',
  },

  // Registration
  registrationDeadline: { type: String, default: '' },
  registrationOpen: { type: Boolean, default: true },
  abstractSubmissionOpen: { type: Boolean, default: true },

  // Contact
  contactEmail: { type: String, default: '' },
  contactPhone: { type: String, default: '9971144418, 9473370707' },
  contactWhatsApp: { type: String, default: '' },

  // Logos & images
  logoUrl: { type: String, default: '' },
  bannerUrl: { type: String, default: '' },
  insLogoUrl: { type: String, default: '' },
  lnmuLogoUrl: { type: String, default: '' },
  witLogoUrl: { type: String, default: '' },

  // Important dates
  importantDates: [{
    label: String,
    date: String,
    confirmed: { type: Boolean, default: false },
  }],

  // Announcements
  announcements: [{
    title: String,
    content: String,
    isActive: { type: Boolean, default: true },
    createdAt: { type: Date, default: Date.now },
  }],

  // Registration and seminar information sections
  eligibility: { type: String, default: '' },
  accommodation: { type: String, default: 'To be announced' },
  travelInfo: { type: String, default: 'To be announced' },

  // Committees
  committees: [committeeSchema],

  // Themes
  themes: [themeSchema],

}, {
  timestamps: true,
  collection: 'event_settings',
});

// Ensure only one settings document exists
eventSettingsSchema.statics.getSettings = async function () {
  let settings = await this.findOne();
  if (!settings) {
    settings = await this.create({});
  }
  return settings;
};

module.exports = mongoose.model('EventSettings', eventSettingsSchema);
