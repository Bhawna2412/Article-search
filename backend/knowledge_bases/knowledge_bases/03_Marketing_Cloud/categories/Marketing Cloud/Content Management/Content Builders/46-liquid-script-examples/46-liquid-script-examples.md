---
title: "Liquid Script Examples"
articleID: 46
category: "Content Management > Content Builders"
knowledgeBase: "Marketing Cloud"
lastUpdated: 2025-11-25
---

# Liquid Script Examples

You can use Liquid scripting to create engaging email experiences through advanced personalization that goes beyond basic name insertion, enabling dynamic content that adapts to each subscriber's unique data and preferences. This significantly improves subscriber interaction by delivering relevant, personalized messages that maintain brand consistency while scaling individualized communication across your entire email marketing program.

Liquid scripting enables professional email design with sophisticated conditional logic and data manipulation, helping you create campaigns that automatically adjust content based on contact information, purchase history, or custom field values to drive better engagement and campaign results.

**Liquid** is an open-source template language that allows you to take the personalization of emails to the next level.

Maropost for Marketing uses [**Liquid scripting**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=https%3A%2F%2Fshopify.github.io%2Fliquid%2F) to dynamically display email content containing data from standard and [**custom fields**](https://galaxy.maropost.com/s/article/Custom-Fields)**, **[**Dynamic Content Blocks**](https://galaxy.maropost.com/s/article/Dynamic-Content)**, **[**Relational tables**](https://galaxy.maropost.com/s/article/Introduction-to-Relational-Tables)**, **[**Content Feeds**](https://galaxy.maropost.com/s/article/Content-Feeds)**,** and [**Transactional messages**](https://galaxy.maropost.com/s/article/Sending-Transactional-Campaigns-via-SMTP).

## Liquid Filters

### String Manipulation

Liquid scripting enables the use of filters that manipulate data and change the form it takes. Filters can be used to personalize the subject lines as well as the email content. Filters are denoted by the pipe character "**|**" and are placed within an output tag "**{{}}**."

A good example of a liquid filter is capitalizing the end user’s name:

**INPUT:**

```
{{contact.first_name | capitalize}}
```

**OUTPUT:** Ben

And, to downcase a name:

**INPUT:**

```
{{contact.first_name | downcase}}
```

**OUTPUT:** ben

### Date/Time Formatting

Another great example is the date filter. It converts the time stamp into another data format:

**INPUT:**

```
{{other.time_stamp | “%a, %b, %d, %y”}}
```

**OUTPUT:** 26 October 2016

> **Note:** **Note:** The format for this syntax is the same as [**strftime**](https://galaxy.maropost.com/home/leaving?allowTrusted=1&target=http%3A%2F%2Fstrftime.net%2F).

### Cryptographic Hashing

The **MD5 hash** is a cryptographic function that converts a piece of data, such as an email address, into a 32-character hexadecimal string.

**INPUT:**

```
{{contact.email | md5}}
```

**OUTPUT:** 20332b7bb9fb981a16346092956278e1

This filter is particularly helpful for those looking to include personalized advertising within emails. The unique 32-character string enables third-party advertising services to build profiles on recipients as emails are opened and display ads are clicked, without any actual exchange of email addresses taking place.

## Conditional Logic

The Liquid script supports **IF/THEN/ELSE** conditional logic for displaying email content. The Dynamic Content Blocks also provide this same type of conditional content. Use Liquid script when the conditional rules are solely based on standard and custom field values, and the content to display is relatively simple. Use Dynamic Content Blocks when both the rules and content are more complex.

### Default Display for First/Last Name

An **IF/THEN/ELSE** conditional statement is helpful to display a default first name or last name when none exists for any given contact.

```
Hello {% if contact.first_name == blank %} valued member {% else %} {{contact.first_name | capitalize}} {% endif %}
```

> **Note:** **Note:** You can use the Liquid keyword **blank** to test whether a standard field is empty or not for any given contact.

### Default Display for Custom Fields

Using conditional logic for a custom field is slightly different than that used for a standard field. The reason is that Maropost for Marketing only stores the custom fields of any given contact for which there is a value for that field. In contrast, all contacts have standard fields regardless of whether the fields are empty or not.

Therefore, when testing for whether a contact has a value for a given custom field, the real condition is to test whether the custom field exists or not for any given contact.

```
Your balance is {% if contact.points %} {{contact.points}} {% else %} 0 {% endif %} points
```

## Related Articles

**Personalization & Dynamic Content:**

- [Custom Fields](https://galaxy.maropost.com/kb/articles/45-custom-fields) - Create custom data fields for advanced personalization
- [WYSIWYG Content Builder](https://galaxy.maropost.com/kb/articles/749-wysiwyg-content-builder) - Build personalized email content with visual editor

**Campaign Creation:**

- [Creating and Managing Contacts New](https://galaxy.maropost.com/kb/articles/8-creating-and-managing-contacts-new) - Manage contact data for personalization
- [Brand Management](https://galaxy.maropost.com/kb/articles/916-brand-management) - Create brand-specific personalized campaigns

**Advanced Features:**

- [Introduction to Segments](https://galaxy.maropost.com/kb/articles/920-introduction-to-segments) - Use Liquid logic with dynamic segments
- [Journey Actions](https://galaxy.maropost.com/kb/articles/43-journey-actions) - Implement Liquid scripting in automated journeys