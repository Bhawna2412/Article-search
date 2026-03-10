---
title: "Neto by Maropost Release Notes – 4 Jul 2025"
articleID: 2100
category: "2025 Releases"
knowledgeBase: "Neto Release Notes"
lastUpdated: 2025-07-09
---

# Neto by Maropost Release Notes – 4 Jul 2025

This release contains a hotfix resolving the Maropost Identity session timeout issue.

The fixes and updates include the following:

- **Session Timeout Issue**:
The frequent logout issue has been fixed by improving session handling. The default session timeout in case of inactivity is 1 hour. You can, however, configure it to be up to 7 days in the “sess_active” config (available at Settings & Tools > All Settings & Tools > Advanced Configurations).
**Note**: We recommend keeping the time-out configuration to 1 hour or less for security reasons.
- **Remember Me Functionality:**
The Remember Me functionality has been fixed to maintain user sessions. The Remember Me option on the login page allows you to skip entering Maropost Identity credentials and OTP for up to 30 days, except in case of manual sign-out.
- **Page Not Found Errors:**
The Page Not Found errors have been fixed, and so now you’ll get a better navigation experience.
- **Erroneous Log Entry:**
Fixed an issue where an entry was added to the Staff User Log every 7 seconds, with the note "check_maropost_user_session_ajax". This has been resolved.