# ARTICLE_DATA - Canonical Article Data Store

**Created:** 2026-02-02
**Purpose:** Single source of truth for all KB article data.

## Structure

```
ARTICLE_DATA/
├── knowledge_bases/
│   ├── 01_Help_Articles/articles/       # KB 1 - 168 articles
│   ├── 02_Retail_Express/articles/      # KB 2 - 542 articles (FIXED)
│   ├── 03_Marketing_Cloud/articles/     # KB 3 - 284 articles
│   ├── 04_Neto_By_Maropost/articles/   # KB 4 - 489 articles (FIXED)
│   ├── 05_Merchandising_Cloud/articles/ # KB 5 - 277 articles
│   ├── 06_JetSend/articles/            # KB 6 - 30 articles
│   ├── 07_InboxAware/articles/         # KB 7 - 9 articles
│   ├── 08_Service_Cloud/articles/      # KB 8 - 18 articles
│   ├── 09_Contact_Us/articles/         # KB 9 - 6 articles
│   ├── 10_RE_Release_Notes/articles/   # KB 10 - 110 articles
│   ├── 11_MC_Release_Notes/articles/   # KB 11 - 122 articles
│   ├── 12_Neto_Release_Notes/articles/ # KB 12 - 114 articles
│   ├── 13_Article_Archive/articles/    # KB 13 - 15 articles
│   └── 14_Commerce_Cloud/articles/     # KB 14 - 10 articles
├── backups/                            # Pre-upload backups
├── sync_state.json                     # Last sync dates per KB
└── README.md                           # This file
```

## Article File Format

Each article is a JSON file named `{articleID}_fixed.json` containing:
- `articleID` - Article ID
- `name` - Article title
- `body` - RICH2 JSON string (the article content)
- `format` - Always "rich2"
- `knowledgeCategoryID` - Category ID
- `dateUpdated` - Last update timestamp
- Other metadata fields from the API

## KB Status

| KB | Status | Last Fixed | Notes |
|----|--------|------------|-------|
| 02 Retail Express | FIXED | 2025-12-12 | All fixes applied, production-current |
| 04 Neto By Maropost | FIXED | 2025-12-11 | All fixes applied, production-current |
| All others | UNFIXED | Never | Need sync + fix pipeline |

## Sync Workflow

1. **Pull latest** from production API using `temp/article_sync/sync_articles.py`
2. **For FIXED KBs**: Incremental sync (only articles updated since last sync)
3. **For UNFIXED KBs**: Full extraction
4. **Apply fix pipeline** to new/updated articles before storing
5. **Validate** with `Rich2Validator` before any uploads
6. **Backup** existing production articles before overwriting
7. **Test in staging** before production upload
8. **Upload** using `safe_upload_article()` from `src/api/upload_utils.py`

## What NOT To Do

- Do NOT use data from `ARTICLE_DATA_2025/` or `ARTICLE_DATA_2025_archived_*/` — these are stale
- Do NOT use data from `temp/dec1_fixed/` — superseded and unfixed
- Do NOT upload without running `Rich2Validator.validate()` first
- Do NOT modify production articles without backing up first
