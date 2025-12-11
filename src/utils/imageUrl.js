const API_URL = import.meta.env.VITE_APP_API_URL || "http://localhost:5000";

export function getAvatarUrl(avatar) {
  if (!avatar) return "/placeholder.png";
  return `${API_URL}${avatar}`;
}
