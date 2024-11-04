
const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  personalDetails: {
    employeeId: String,
    fullName: String,
    dateOfJoining: Date,
    email: String,
    mobile: String,
    countryCode: String,
    gender: String,
    photo: String,
    dateOfBirth: Date,
    age: Number,
    nationality: String,
    religion: String,
    race: String,
    country: String,
    provinceState: String,
    postalCode: String,
    city: String,
    streetName: String,
    blockHouseNo: String,
    levelNo: String,
    unitNo: String,
    address: String,
    language: String
  },
  education: {
    educationEntries: [{
      instituteName: String,
      qualification: String,
      grade: String,
      startDate: Date,
      endDate: Date,
      document: String
    }],
    skills: [String]
  },
  experience: {
    experienceEntries: [{
      location: String,
      companyName: String,
      designation: String,
      periodFrom: Date,
      periodTo: Date,
      reasonForLeaving: String,
      document: String
    }]
  },
  contact: {
    referenceContacts: [{
      name: String,
      relationship: String,
      phone: String,
      email: String,
      countryCode: String
    }],
    emergencyContacts: [{
      name: String,
      relationship: String,
      phone: String,
      countryCode: String
    }]
  },
  maritalStatus: {
    status: String,
    spouseEmploymentStatus: String,
    numberOfChildren: Number,
    childName: String,
    childRelationship: String,
    childDateOfBirth: Date,
    otherStatus: String
  },
  employment: {
    source: String,
    businessUnit: String,
    department: String,
    designation: String,
    reportingTo: String,
    userRole: String,
    probationPeriod: String,
    workingDays: String,
    employmentType: String,
    logIn: String,
    eligibleFor: {
      partTime: Boolean,
      overTime: Boolean
    },
    equipmentIssuance: [{
      type: { type: String },
    brand: { type: String },
    model: { type: String },
    serialNumber: { type: String },
    assetTag: { type: String },
    issueDate: { type: Date }
    }]
  },
  earning: {
    basicPay: Number,
    paymentType: String,
    paymentMode: String,
    frequency: String,
    payBasis: String,
    hourlyRate: Number,
    dailyRate: Number,
    salaryAdvance: Boolean,
    ordinaryWages: [{
      title: String,
      amount: Number,
      cpfApplicable: Boolean,
      taxApplicable: Boolean
    }],
    additionalWages: [{
      title: String,
      amount: Number,
      cpfApplicable: Boolean,
      taxApplicable: Boolean
    }]
  },
  leaveBenefits: {
    offInLieuEligible: Boolean,
    leaveRows: [{
      code: String,
      type: String,
      eligibility: String,
      leaveIncrement: String,
      hourlyTimeOff: Boolean,
      prorate: Boolean
    }],
    availableItems: [String],
    assignedItems: [String]
  },
  offBoard: {
    selectedDate: Date,
    exitInterview: Boolean,
    enCashLeave: Boolean,
    conductor: String,
    fileUrl: String
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Employee', employeeSchema);