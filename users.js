// Front-end only. Convenience, not Fort Knox.
window.CZM_USERS = [
  { username: "admin", pin: "admin", role: "admin", name: "Administrator" }
];

// Helper to find a user (exact match; change to toLowerCase() if you want case-insensitive)
window.lookupUser = function (u, p) {
  return (window.CZM_USERS || []).find(x => x.username === u && x.pin === p) || null;
};