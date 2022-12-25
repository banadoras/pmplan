const phrases = [
  {
    category: "Therapies",
    phrases: [
      {
        id: "t0",
        title: "Physical therapy",
        description: "Referral to Physical therapy",
        instruction:
          "Referral to physical therapy has been provided. Please call and schedule appointmetnt to start physical therapy."
      },
      {
        id: "t1",
        title: "Pain psychology",
        description: "Referral to pain psychology provided",
        instruction:
          "Referral to pain psychology for CBT, coping skills and relaxation techniques has been placed. Please call and schedule appointment"
      },
      {
        id: "t2",
        title: "Integrative Medicine",
        description:
          "Referral to pain integrative medicine. Offers Massage, Accupuncture and Chiropractic therapies."
      }
    ]
  },
  {
    category: "Medications",
    phrases: [
      {
        id: "m0",
        title: "Gabapentin",
        description: "Titrate Gabapentin gradually as tolerated to 300 mg TID"
      },
      {
        id: "m01",
        title: "Lyrica",
        description: "Titrate Lyrica gradually as tolerated to 50 mg TID"
      },
      {
        id: "m02",
        title: "Cymbalta",
        description: "Cymbalta 30 mg daily"
      },
      {
        id: "m1",
        title: "Robaxin",
        description: "Robaxin 750 mg TID PRN for muscle spasms"
      },
      {
        id: "m2",
        title: "Zanaflex",
        description: "Zanaflex 2 mg TID PRN for muscle spasms"
      },
      {
        id: "m20",
        title: "Baclofen",
        description: "Baclofen 5-10 mg TID PRN for muscle spasms"
      },
      {
        id: "m3",
        title: "Diclofenac",
        description: "Diclofenac 50 mg BID PRN"
      },
      {
        id: "m4",
        title: "Mobic",
        description: "Mobic 7.5 mg daily PRN"
      }
    ]
  },
  {
    category: "Procedures",
    phrases: [
      {
        id: "p0",
        title: "General Instructions",
        description:
          "NPO for 8 hours before procedure except for medications, clear liquids ok for 2 hours prior to procedure. Needs a driver.",
        instruction:
          "Do not eat or drink for 8 hours before procedure. Can take medications with small sip of water. Clear liquids are ok untill 2 hours before procedure. Will need a driver to be with you on the day of procedure."
      },
      {
        id: "p1",
        title: "Anticoagulation",
        description:
          "Require clearance from PCP / Cardiologist to temporarily hold *** for *** prior to procedure."
      },
      {
        id: "p2",
        title: "LESI",
        description: "May schedule lumbar epidural steroid injection"
      },
      {
        id: "p3",
        title: "Lidocaine Infusion",
        description: "Schedule Lidocaine infusion."
      },
      {
        id: "p4",
        title: "Ketamine Infusion",
        description: "Schedule Ketamine infusion."
      }
    ]
  },
  {
    category: "Images",
    phrases: [
      {
        id: "i0",
        title: "X-ray",
        description: "X-ray *** to evaluate for ***"
      },
      {
        id: "i1",
        title: "MRI lumbar spine",
        description:
          "MRI lumbar spine with/without contrast to evaluate for ongoing low back pain"
      },
      {
        id: "i2",
        title: "CT-Scan lumbar spine",
        description:
          "CT-scan lumbar spine without contrast to evaluate for ongoing low back pain"
      }
    ]
  },
  {
    category: "Labs",
    phrases: [
      {
        id: "l0",
        title: "Basic labs",
        description: "Blood work up inlcuding CBC, lytes and coags",
        instruction:
          "Blood work ordered today. Please stop at the lab to draw labs."
      }
    ]
  }
];

export default phrases;
