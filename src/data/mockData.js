export const scansData = [
  {
    id: 1,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 5, high: 8, medium: 12, low: 3 },
    lastScan: "4d ago"
  },
  {
    id: 2,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 3, high: 6, medium: 9, low: 4 },
    lastScan: "4d ago"
  },
  {
    id: 3,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 4, high: 7, medium: 11, low: 2 },
    lastScan: "4d ago"
  },
  {
    id: 4,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 6, high: 9, medium: 8, low: 5 },
    lastScan: "4d ago"
  },
  {
    id: 5,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 2, high: 5, medium: 10, low: 6 },
    lastScan: "4d ago"
  },
  {
    id: 6,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 7, high: 4, medium: 13, low: 1 },
    lastScan: "4d ago"
  },
  {
    id: 7,
    name: "Web App Servers",
    type: "Greybox",
    status: "Completed",
    progress: 100,
    vulnerabilities: { critical: 3, high: 8, medium: 7, low: 4 },
    lastScan: "4d ago"
  },
  {
    id: 8,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 5, high: 6, medium: 0, low: 0 },
    lastScan: "4d ago"
  },
  {
    id: 9,
    name: "Web App Servers",
    type: "Greybox",
    status: "Scheduled",
    progress: 100,
    vulnerabilities: { critical: 4, high: 7, medium: 0, low: 0 },
    lastScan: "4d ago"
  },
  {
    id: 10,
    name: "IoT Devices",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 3, high: 5, medium: 8, low: 2 },
    lastScan: "3d ago"
  },
  {
    id: 11,
    name: "Temp Data",
    type: "Blackbox",
    status: "Failed",
    progress: 10,
    vulnerabilities: { critical: 2, high: 4, medium: 6, low: 3 },
    lastScan: "3d ago"
  }
];

export const severityStats = {
  critical: { count: 86, change: "+0% increase than yesterday", trend: "up" },
  high: { count: 16, change: "+0% increase than yesterday", trend: "up" },
  medium: { count: 26, change: "+0% decrease than yesterday", trend: "down" },
  low: { count: 16, change: "+0% increase than yesterday", trend: "up" }
};

export const scanMetadata = {
  org: "Project X",
  owner: "Namnagiri",
  totalScans: 100,
  scheduled: 1000,
  rescans: 100,
  failedScans: 100,
  lastUpdate: "30 mins ago"
};
