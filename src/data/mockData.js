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

export const activeScanData = {
  progress: 0,
  status: "In Progress",
  steps: [
    { name: "Spidering", icon: "spider", active: true },
    { name: "Mapping", icon: "map", active: false },
    { name: "Testing", icon: "flask", active: false },
    { name: "Validating", icon: "check-circle", active: false },
    { name: "Reporting", icon: "file-alt", active: false },
  ],
  metadata: {
    scanType: "Grey Box",
    targets: "google.com",
    startedAt: "Nov 22, 09:00AM",
    credentials: "2 Active",
    files: "Config.pdf",
    checklists: "40/350",
  },
  activityLog: [
    { time: "09:04:08", message: "I'll begin a systematic penetration test on ", highlight: "helpdesk.democorp.com", suffix: ". Let me start with reconnaissance and navigation.", type: "info" },
    { time: "09:04:09", message: "Good! target is online. Now let me perform port scanning to identify running services.", type: "success" },
    { time: "09:02:08", message: "Excellent reconnaissance results:", type: "success" },
    { time: "", message: "helpdesk.democorp.com: Apache httpd 2.4.55 on port 80 (web server)", type: "detail" },
    { time: "", message: "Let me probe the web application. This will be my first to understand its structure.", type: "detail" },
    { time: "09:03:08", message: "Great! I found a login page for a Help Desk Platform. I can see a useful comment: ", highlight: "TODO: Delete test credential", suffix: ". Let me test this credential. The login redirects to ", highlight2: "/password/test", suffix2: ". Let me follow that path and explore it.", type: "warning" },
    { time: "09:04:08", message: "The POST method is not allowed on /password/test. Let me check what the JavaScript does on the whole page. Let me try a different approach.", type: "info" },
    { time: "09:05:08", message: "Let me check back to /password/test. Let me check if there's an /api endpoint or look for other paths. Let me also try exploring with the test:test password directly on other endpoints.", type: "info" },
    { time: "09:06:08", message: "Great! I can access the dashboard using the ", highlight: "X-UserId: 10038", suffix: " header. The dashboard shows 'Welcome John Doe'. This suggests an ", highlight2: "IDOR vulnerability", suffix2: ". Let me access any user's dashboard by just changing the X-UserId header. Let me explore more of the application...", type: "success" },
  ],
  findings: [
    {
      severity: "Critical",
      title: "SQL Injection in Authentication Endpoint",
      endpoint: "/api/users/login",
      description: "Time-based blind SQL injection found at login parameter. Exploitable using advanced time-based techniques for database extraction.",
      time: "08:45:23",
    },
    {
      severity: "High",
      title: "Unauthorized Access to User Metadata",
      endpoint: "/api/users",
      description: "Authenticated low-privilege user can access metadata of other users. Access control allows unauthorized data viewing.",
      time: "08:46:23",
    },
    {
      severity: "Medium",
      title: "Broken Authentication Role Limiting",
      endpoint: "/api/search",
      description: "No effective role limiting attached on login attempts. Authenticated brute-force attempts possible.",
      time: "08:48:23",
    },
  ],
  stats: {
    subAgents: 0,
    parallelExecutions: 3,
    operations: 1,
    critical: 0,
    high: 0,
    medium: 0,
    low: 0,
  },
};
