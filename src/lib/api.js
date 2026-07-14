const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

export async function submitContactForm(data) {
  const res = await fetch(`${API_URL}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to submit form");
  return body;
}

// Admin-only: fetches submitted contact leads. Requires the admin token
// configured on the backend (see tavewo-server .env ADMIN_TOKEN).
export async function fetchContactSubmissions(adminToken) {
  const res = await fetch(`${API_URL}/api/contact`, {
    headers: { "x-admin-token": adminToken },
  });
  const body = await res.json();
  if (!res.ok) throw new Error(body.error || "Failed to fetch submissions");
  return body;
}
