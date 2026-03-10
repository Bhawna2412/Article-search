---
title: "Control Panel Search Operators"
articleID: 1523
category: "Use Neto > Dashboard and Reporting > Use your Dashboard"
knowledgeBase: "Neto By Maropost"
---

# Control Panel Search Operators

**Please Note**: These operators work in the search filters on the sales order, customer and product pages.

|  |  |  |
| --- | --- | --- |
| **Operator ** | **Definition ** | **Example** |
| & | & represents AND. & is the default separator in a search query. Enter an & symbol between words to do an AND query. | John & Peter |
| , | Commas represent OR. Enter a comma between words to do an OR query. | John, Peter |
| () | Parentheses are used to do complex queries. | ( a & b ) OR ( x & y ) OR z |
| "" | Quotes are used to search for a phrase. | "a b c" |
| EXACT: | Exact match search. Only returns results that exactly match the search term. Can also be substituted with ^ | EXACT:ABC             ^ABC |
| LIKE: | Like match search. Returns results that contain the search term. | LIKE:ABC |
| STARTWITH: | Returns results that start with the search term. | STARTWITH:ABC |
| ENDWITH: | Returns results that end with the search term. | ENDWITH:ABC |
| eom / som | In date fields, eom and som can be used to represent the start of month or end of month. | eom |
| ago | In date fields, use `x hour ago`, `x day ago`, `x month ago` or `x year ago` to represent a date from today. | 3 year ago |