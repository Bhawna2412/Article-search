---
title: "Ticket Statuses"
articleID: 716
category: "Ticket Managemet > Understanding Ticketing System"
knowledgeBase: "Service Cloud"
lastUpdated: 2025-12-02
---

# Ticket Statuses

Ticket statuses help you manage the complete lifecycle of customer inquiries from creation to closure through clearly defined workflow stages. This enables your team to track ticket progress consistently, maintain service quality standards, and ensure proper handling of customer issues at every stage of the support process.

You can use the five ticket statuses to communicate ticket state both internally and with customers, with automatic status transitions occurring when agents respond to inquiries. Understanding when to use each status helps optimize workflow efficiency, with features like automatic SLA timer suspension for pending tickets helping prevent violations while waiting for customer responses.

The status is an essential detail of the ticket that defines the core support process for your team. Each status indicates the specific state of the ticket and thereby helps you manage the lifecycle of a ticket from creation to closure.

Service Cloud provides five ticket statuses that help you track and manage your support tickets. While some actions, such as replying to the customer, can automatically change the ticket status, you can manually update the ticket status as required.

![User-added image](https://us.v-cdn.net/6038474/uploads/attachments/migrated/TicketStatuses.05T5g00000kY3hoEAC.png)

### Ticket Status Types

Service Cloud supports the following five ticket statuses:

- **New**: Indicates that the ticket is new and no action has been taken on the ticket yet. All incoming and newly created tickets are by default set to "**New**."

> **Note:** Once the ticket status is changed from "**New**" to another status, it cannot be reverted.

- **Open**: Indicates that the ticket is in progress. When an agent responds to a ticket with the "**New**" status, the ticket status automatically changes to "**Open**." You can also change the status to Open manually by selecting Open from the Status drop-down menu.
- **Pending**: Indicates that an agent has replied to the ticket and is waiting for more information from the customer. The Pending status can also be used for tickets that are on hold due to third-party constraints beyond the control of the Support Team.

> **Note:** The **service-level agreement** (**SLA**) timers are turned off for pending tickets to prevent any violations when waiting for a customer response.

- **On-Hold**: Indicates that an agent is waiting for information or action from a third party (other than the customer).

> **Note:** "**On-hold**" is an internal status and is not visible to your customer. To your customer, the on-hold ticket is shown as "**Open**."

- **Closed**: Indicates that the ticket has been addressed and no further action is needed. When closing a ticket, you are required to choose a reason for closure:  - **Resolved**: Indicates that the right solution has been provided to the customer, and the customer acknowledges the issue has been resolved.
  - **Unresolved**: Indicates that the issue could not be solved.
  - **Duplicate**: Indicates that the ticket is a duplicate of another ticket.

> **Note:** Once a ticket is closed, no further actions can be taken on it. If the customer replies to the ticket, a new ticket will be created in the queue.

## Related Articles

**Ticket Management:**

- [Creating a Ticket](https://galaxy.maropost.com/kb/articles/714-creating-a-ticket) - Create tickets with initial status assignments
- [Ticket Queue](https://galaxy.maropost.com/kb/articles/715-ticket-queue) - View and manage tickets by status in the queue

**Ticket Configuration:**

- [Setting Up Tags](https://galaxy.maropost.com/kb/articles/730-setting-up-tags) - Combine tags with statuses for advanced ticket organization

**Contact Management:**

- [Creating and Managing a Contact](https://galaxy.maropost.com/kb/articles/711-creating-and-managing-a-contact) - Track ticket status history for contacts
- [Contact Overview](https://galaxy.maropost.com/kb/articles/712-contact-overview) - View customer ticket status and resolution patterns