export const AUTHOR_EMAILS = ["author@smartcar.com", "admin@smartcar.com"];

export const getRoleFromEmail = (email) =>
  AUTHOR_EMAILS.includes(email.trim().toLowerCase()) ? "author" : "customer";
