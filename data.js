"use strict";
window.ELECTION_DATA = {
  "schemaVersion": 1,
  "language": "he-IL",
  "updatedAt": "2026-10-08T22:32:17.635Z",
  "asOfDate": "2026-10-09",
  "partyOrder": "hebrew_alphabetical",
  "election": {
    "labelHe": "מידע על הבחירות לכנסת ה-26",
    "claimedScheduledDate": "2026-10-27",
    "scheduledDate": "2026-10-27",
    "scheduledDateOrigin": "authoritative_source",
    "dateConfirmationStatus": "confirmed",
    "verifiedDate": "2026-10-27",
    "dateSourceIds": [
      "s_cec_date",
      "s_fc_ballots",
      "s_fc_joint_court"
    ],
    "dateMissingEvidenceLabelHe": null,
    "listConfirmationStatus": "unverified",
    "listSourceIds": [
      "s_fc_ballots",
      "s_fc_joint_court"
    ],
    "listMissingEvidenceLabelHe": "דיווחים על הקצאת אותיות והחלטות בית המשפט הוצלבו; לא נקראה ישירות רשימת מועמדים רשמית מלאה.",
    "caveats": [
      {
        "id": "election_schedule",
        "summaryHe": "מועד הבחירות המפורסם לכנסת ה-26 הוא 27 באוקטובר 2026.",
        "detailHe": "אין להסיק מהמועד כי כל 14 המסגרות שבאתר הן רשימות עצמאיות או שזהו כלל המתמודדים.",
        "status": "historical",
        "sourceIds": [
          "s_cec_date",
          "s_fc_joint_court"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      {
        "id": "election_joint_list",
        "summaryHe": "חד״ש, תע״ל ובל״ד מתמודדות יחד ברשימה המשותפת באותיות ודם; רע״ם בנפרד.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_joint_slate",
          "s_fc_ballots",
          "s_fc_joint_court"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      {
        "id": "election_hostages_resolved",
        "summaryHe": "ב-26 בינואר 2026 הושבו שרידי רן גואילי, החטוף האחרון שנותר בעזה לפי הדיווח.",
        "detailHe": "שאלת עסקת החטופים באתר נוסחה מחדש כשאלה עקרונית למקרים עתידיים; אין היא טענה שחטופים עדיין מוחזקים בעזה.",
        "status": "historical",
        "sourceIds": [
          "s_fc_last_hostage"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": "2026-01-26",
        "coverageNoteHe": null,
        "contradictionIds": []
      }
    ]
  },
  "coverage": {
    "descriptionHe": "14 מסגרות פוליטיות להשוואה, לא 14 פתקי קלפי נפרדים ולא רשימת כל המתמודדים. שני פרופילים הם מרכיבים של אותה רשימה משותפת.",
    "partyCoverageBasis": "curated_unconfirmed",
    "listConfirmationStatus": "unverified",
    "includedPartyIds": [
      "beyachad",
      "balad",
      "democrats",
      "likud",
      "religious_zionism",
      "hadash_taal",
      "utj",
      "yashar",
      "yisrael_beitenu",
      "blue_white",
      "noam",
      "otzma_yehudit",
      "raam",
      "shas"
    ],
    "officialListSourceIds": [],
    "omittedEntries": [
      {
        "id": "coverage_other_lists",
        "summaryHe": "הדיווח על ועדת הבחירות מונה 38 רשימות; האתר אינו מכסה את כולן.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_ballots"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      },
      {
        "id": "coverage_alliances",
        "summaryHe": "יש עתיד ובנט 2026 ברשימת ביחד; העבודה ומרצ במסגרת הדמוקרטים; הציונות הדתית וזהות בבלוק טכני; מפלגת סער התמזגה בליכוד.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_beyachad_alliance",
          "s_idi_democrats",
          "s_fc_rz_alliance",
          "s_fc_saar_merger"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      }
    ],
    "limitations": [
      {
        "id": "coverage_missing_policies",
        "summaryHe": "אין מצע מלא ומאומת ל-2026 לכל מסגרת ובכל אחת מ-32 השאלות. פער אינו עמדה ניטרלית ואינו נספר בהתאמה.",
        "detailHe": "רק דירוגים עם אסמכתאות לשאלה נכללים בחישוב; משקלם אינו מדד מדעי או המלצת הצבעה.",
        "status": "missing",
        "sourceIds": [],
        "missingEvidenceLabelHe": "אין מצע מלא ומאומת ל-2026 לכל מסגרת ובכל אחת מ-32 השאלות. פער אינו עמדה ניטרלית ואינו נספר בהתאמה.",
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      },
      {
        "id": "coverage_historical_attribution",
        "summaryHe": "פעולות של ממשלות קודמות אינן פעולות של רשימה חדשה שנוסדה אחר כך; הצעה או קריאה ראשונה אינן חוק שהושלם.",
        "detailHe": null,
        "status": "missing",
        "sourceIds": [],
        "missingEvidenceLabelHe": "פעולות של ממשלות קודמות אינן פעולות של רשימה חדשה שנוסדה אחר כך; הצעה או קריאה ראשונה אינן חוק שהושלם.",
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      }
    ]
  },
  "topics": [
    {
      "id": "economy_cost_of_living",
      "labelHe": "כלכלה ויוקר המחיה",
      "descriptionHe": "מידע על מחירים, דיור, תעסוקה ומדיניות כלכלית"
    },
    {
      "id": "security_foreign_relations",
      "labelHe": "ביטחון ויחסי חוץ",
      "descriptionHe": "מידע על ביטחון, מדיניות חוץ ויחסים בין־לאומיים"
    },
    {
      "id": "institutions_democracy",
      "labelHe": "מוסדות ודמוקרטיה",
      "descriptionHe": "מידע על מוסדות ציבור, כללי ממשל ופיקוח"
    },
    {
      "id": "religion_state",
      "labelHe": "דת ומדינה",
      "descriptionHe": "מידע על הסדרים ציבוריים בממשק בין דת למדינה"
    },
    {
      "id": "public_services_equality",
      "labelHe": "שירותים ציבוריים ושוויון",
      "descriptionHe": "מידע על בריאות, חינוך, רווחה ונגישות לשירותים"
    },
    {
      "id": "environment_infrastructure",
      "labelHe": "סביבה ותשתיות",
      "descriptionHe": "מידע על תחבורה, אנרגיה, סביבה ותשתיות ציבוריות"
    }
  ],
  "sources": [
    {
      "id": "s_idi_likud",
      "title": "המכון הישראלי לדמוקרטיה — likud",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/likud/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_shas",
      "title": "המכון הישראלי לדמוקרטיה — shas",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/shas/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_utj",
      "title": "המכון הישראלי לדמוקרטיה — utj",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/united-torah-judaism/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_religious_zionism",
      "title": "המכון הישראלי לדמוקרטיה — religious_zionism",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/religious-zionist-party/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_otzma",
      "title": "המכון הישראלי לדמוקרטיה — otzma",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/otzma-yehudit/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_raam",
      "title": "המכון הישראלי לדמוקרטיה — raam",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/raam/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_hadash",
      "title": "המכון הישראלי לדמוקרטיה — hadash",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/hadash/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_taal",
      "title": "המכון הישראלי לדמוקרטיה — taal",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/taal/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_balad",
      "title": "המכון הישראלי לדמוקרטיה — balad",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/balad/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_blue_white",
      "title": "המכון הישראלי לדמוקרטיה — blue_white",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/blue-and-white/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_idi_democrats",
      "title": "המכון הישראלי לדמוקרטיה — democrats",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/israeli-elections-and-parties/parties/the-democrats/",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; תיאור מפלגתי והיסטורי אינו אסמכתה לכל סעיף במצע 2026 או להצבעה מסוימת. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_cec_date",
      "title": "הבחירות לכנסת ה-26 — 27 באוקטובר 2026",
      "publisher": "ועדת הבחירות המרכזית",
      "url": "https://www.gov.il/en/pages/knesset-elections-2026",
      "sourceType": "electoral_authority",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "הכותרת והמועד נמצאו בפרסום הרשמי המאונדקס והוצלבו עם דיווחים. קריאת העמוד המלא נחסמה ב-HTTP 403; רשימת המועמדים לא אומתה ישירות ממנו. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_ballots",
      "title": "פרסום הקצאת אותיות הקלפי ל-38 רשימות",
      "publisher": "Ynet",
      "url": "https://www.ynetnews.com/article/no1cetlga",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_ballots_inn",
      "title": "הקצאת האותיות: ביחד רק, עוצמה יהודית ב, נעם ני",
      "publisher": "Israel National News",
      "url": "https://www.israelnationalnews.com/news/433712",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_joint_slate",
      "title": "הרשימה המשותפת הגישה את מועמדיה: חד״ש, תע״ל ובל״ד",
      "publisher": "מק״י / חד״ש",
      "url": "https://maki.org.il/en/?p=33554",
      "sourceType": "party_official",
      "publicationDate": "2026-09-09",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_joint_court",
      "title": "אישור רע״ם והרשימה המשותפת ופרישת סאמי אבו שחאדה",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-910422",
      "sourceType": "independent_reporting",
      "publicationDate": "2026-10-02",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_utj_leadership",
      "title": "יעקב אשר מחליף את משה גפני בהובלת דגל התורה",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-news/politics-and-diplomacy/article-907655",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_haredi",
      "title": "עמדות ש״ס ויהדות התורה בבחירות 2026",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-907982",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_alliance",
      "title": "ביחד: רשימה משותפת לבנט ולפיד, לא היסטוריה משותפת של מפלגה אחת",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/articles/64068",
      "sourceType": "academic_or_civil_society",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_launch",
      "title": "בנט ולפיד הכריזו על ריצה משותפת בהובלת בנט",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-news/politics-and-diplomacy/article-894194",
      "sourceType": "independent_reporting",
      "publicationDate": "2026-04-26",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_saar_merger",
      "title": "מרכז הליכוד אישר את המיזוג עם הימין הממלכתי בראשות סער",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-news/politics-and-diplomacy/article-864136",
      "sourceType": "independent_reporting",
      "publicationDate": "2025-08-13",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_rz_alliance",
      "title": "סמוטריץ׳ ופייגלין חתמו על בלוק טכני משותף",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-907259",
      "sourceType": "independent_reporting",
      "publicationDate": "2026-09-01",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_rz_policy",
      "title": "עמדות הציונות הדתית — התיישבות, משפט, כלכלה וגיוס",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-905686",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_otzma",
      "title": "עמדות עוצמה יהודית בבחירות 2026",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-909348",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_democrats",
      "title": "עמדות הדמוקרטים בבחירות 2026",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-910100",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_likud_campaign",
      "title": "קמפיין נתניהו והליכוד בבחירות 2026",
      "publisher": "Reuters / The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-910068",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_yashar_interview",
      "title": "ראיון עם איזנקוט: ועדת חקירה, ארה״ב וקווי הקואליציה",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-909543",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_raam_alliance",
      "title": "סגלוביץ׳ ברשימת רע״ם וחופש הצבעה בענייני דת, ביטחון ולהט״ב",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-907380",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "הכתבה היא ניתוח מיוחס; אין להסיק מעמדת סגלוביץ׳ עמדה אחידה של רע״ם. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_judicial_survey",
      "title": "תשובות המפלגות לשאלון על מערכת המשפט",
      "publisher": "Ynet / ידיעות אחרונות",
      "url": "https://www.ynetnews.com/article/hkcjtk1cme",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "העמוד נקרא; הוא כולל תשובות מפלגות, הימנעות מתשובה ועמדות היסטוריות. אזכור זהות כמתמודדת בנפרד קדם להסכם הבלוק הטכני ואין להשתמש בו להרכב רשימות עדכני. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_death_penalty",
      "title": "חוק עונש המוות עבר בקריאות סופיות; תמיכה והתנגדות",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-news/politics-and-diplomacy/article-891688",
      "sourceType": "independent_reporting",
      "publicationDate": "2026-03-30",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_last_hostage",
      "title": "השבת רן גואילי — החטוף האחרון שנותר בעזה",
      "publisher": "UPI",
      "url": "https://www.upi.com/Top_News/World-News/2026/01/26/IDF-search-final-hostage-Gaza/1891769403960/",
      "sourceType": "independent_reporting",
      "publicationDate": "2026-01-26",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_ag_bill",
      "title": "הצעת פיצול היועץ המשפטי עברה בקריאה ראשונה, לא הוכחה להשלמת הפיצול",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-news/politics-and-diplomacy/article-898390",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_noam_return",
      "title": "הצעת מעוז לביטול סעיף הנכד; אין לבלבל הצעה עם חוק שנחקק",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-news/politics-and-diplomacy/article-860177",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_guard",
      "title": "החלטת הממשלה על בחינת משמר לאומי והתנגדות איזנקוט לכפיפות ישירה לשר",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/breaking-news/article-736169",
      "sourceType": "independent_reporting",
      "publicationDate": "2023-04-02",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_arab_service",
      "title": "חד״ש ובל״ד מתנגדות לשירות צבאי ולאומי-אזרחי",
      "publisher": "Israel National News",
      "url": "https://www.israelnationalnews.com/news/430429",
      "sourceType": "independent_reporting",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "en",
      "accessNotesHe": "דיווח על עמדות חד״ש ובל״ד; אינו מוכיח שכל רכיבי הרשימה המשותפת זהים בכל נושא. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_noam",
      "title": "נעם לישראל — משפט, חינוך וזהות יהודית",
      "publisher": "נעם לישראל",
      "url": "https://noam.org.il/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_yashar",
      "title": "ישר! — עשרת הצעדים לשגשוגה של ישראל",
      "publisher": "ישר!",
      "url": "https://yasharwitheisenkot.com/agenda_point/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_yashar_programs",
      "title": "ישר! — קטלוג תוכניות",
      "publisher": "ישר!",
      "url": "https://yasharwitheisenkot.com/principles/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "עמוד התוכניות נקרא. כותרת תוכנית אינה ראיה לפרטי מדיניות שלא נקראו. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_yisrael_beitenu_platform",
      "title": "ישראל ביתנו — המצע שלנו",
      "publisher": "ישראל ביתנו",
      "url": "https://beytenu.org.il/party-platform/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_gantz_bio",
      "title": "כחול לבן — פרופיל בני גנץ",
      "publisher": "כחול לבן",
      "url": "https://kachollavan.org.il/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "הפרופיל הציבורי נקרא. אין לראות בו מצע מפורט ועדכני ל-2026. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_yokermichya",
      "title": "ביחד — תוכנית יוקר המחיה",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/yokermichya/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_meshartim_law",
      "title": "ביחד — תוכנית חוק המשרתים",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/meshartim-law/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_religionandstate",
      "title": "ביחד — תוכנית דת ומדינה",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/religionandstate/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_health",
      "title": "ביחד — תוכנית בריאות",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/health/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_education",
      "title": "ביחד — תוכנית חינוך",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/education/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_enviroment",
      "title": "ביחד — תוכנית סביבה",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/enviroment/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_housing",
      "title": "ביחד — תוכנית דיור",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/housing/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_beyachad_natsec",
      "title": "ביחד — תוכנית ביטחון לאומי",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/natsec/",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_security_diplomatic",
      "title": "הדמוקרטים — תוכנית מדיני וביטחוני",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/security-diplomatic",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_democracy_justice",
      "title": "הדמוקרטים — תוכנית דמוקרטיה ומשפט",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/democracy-justice",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_economy_society",
      "title": "הדמוקרטים — תוכנית כלכלי וחברתי",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/economy-society",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_religion_state",
      "title": "הדמוקרטים — תוכנית דת ומדינה",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/religion-state",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_education",
      "title": "הדמוקרטים — תוכנית חינוך",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/education",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_environment_animals",
      "title": "הדמוקרטים — תוכנית סביבה ואקלים",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/environment-animals",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_dem_lgbtq_equality",
      "title": "הדמוקרטים — תוכנית הקהילה הגאה",
      "publisher": "הדמוקרטים",
      "url": "https://yes.democrats.org.il/topics/lgbtq-equality",
      "sourceType": "party_official",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "המקור נקרא בביקורת זו. תאריך פרסום לא ידוע נשמר כ-null; פרסום מפלגתי מתעד עמדה או הבטחה, לא ביצוע. retrievedAt הוא חותמת הייחוס המשותפת של הביקורת, לא זמן מדויק של בקשת HTTP."
    },
    {
      "id": "s_fc_import",
      "title": "משרד הכלכלה — רפורמת מה שטוב לאירופה טוב לישראל",
      "publisher": "משרד הכלכלה והתעשייה",
      "url": "https://govextra.gov.il/economy/like-euorope/reform/",
      "sourceType": "government_record",
      "publicationDate": null,
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "עמוד הרפורמה הרשמי נפתח אך חולץ ממנו רק הכותרת. פרטי הכרונולוגיה הוצלבו עם הפרסום הממשלתי המאונדקס מ-5 באוגוסט 2024; אין כאן קריאה מלאה של המסמך או מדידת השפעת הרפורמה. retrievedAt הוא חותמת ייחוס של הביקורת, לא זמן בקשת HTTP."
    },
    {
      "id": "s_fc_import_2024",
      "title": "משרד הכלכלה — הודעת רפורמת מה שטוב לאירופה טוב לישראל, 5 באוגוסט 2024",
      "publisher": "משרד הכלכלה והתעשייה",
      "url": "https://www.gov.il/he/pages/economy-news-import-reform-050824",
      "sourceType": "government_record",
      "publicationDate": "2024-08-05",
      "retrievedAt": "2026-10-08T22:22:38.296Z",
      "asOfDate": "2026-10-09",
      "language": "he",
      "accessNotesHe": "הכותרת והתאריך נמצאו בפרסום הרשמי המאונדקס. קריאת העמוד המלא נחסמה ב-HTTP 403. retrievedAt הוא חותמת ייחוס של הביקורת, לא זמן בקשת HTTP."
    }
  ],
  "parties": [
    {
      "id": "beyachad",
      "nameHe": "ביחד (נפתלי בנט ויאיר לפיד)",
      "ballotLetters": "רק",
      "bloc": "מרכז-ימין ליברלי",
      "identityEvidence": {
        "id": "beyachad_identity",
        "summaryHe": "ביחד היא רשימת בנט 2026 ויש עתיד בהובלת נפתלי בנט ויאיר לפיד; ההכרזה על הריצה המשותפת הייתה באפריל 2026, לא בספטמבר.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_beyachad_alliance",
          "s_fc_beyachad_launch"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "beyachad_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא רק.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "naftali_bennett",
          "nameHe": "נפתלי בנט",
          "identityEvidence": {
            "id": "naftali_bennett_identity",
            "summaryHe": "נפתלי בנט — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_beyachad_alliance",
              "s_fc_beyachad_launch"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "naftali_bennett_role",
            "summaryHe": "ראש ממשלה לשעבר וראש רשימת ביחד.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_beyachad_alliance",
              "s_fc_beyachad_launch"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "naftali_bennett_summary",
              "summaryHe": "ראש ממשלה לשעבר וראש רשימת ביחד.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_beyachad_alliance",
                "s_fc_beyachad_launch"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "naftali_bennett_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_beyachad_alliance",
              "s_fc_beyachad_launch"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "naftali_bennett_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        },
        {
          "id": "yair_lapid",
          "nameHe": "יאיר לפיד",
          "identityEvidence": {
            "id": "yair_lapid_identity",
            "summaryHe": "יאיר לפיד — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_beyachad_alliance",
              "s_fc_beyachad_launch"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "yair_lapid_role",
            "summaryHe": "ראש ממשלה לשעבר ויו״ר יש עתיד, שותף ברשימת ביחד בהובלת בנט.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_beyachad_alliance",
              "s_fc_beyachad_launch"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "yair_lapid_summary",
              "summaryHe": "ראש ממשלה לשעבר ויו״ר יש עתיד, שותף ברשימת ביחד בהובלת בנט.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_beyachad_alliance",
                "s_fc_beyachad_launch"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "yair_lapid_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_beyachad_alliance",
              "s_fc_beyachad_launch"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "yair_lapid_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "beyachad_economy_cost_of_living_position",
              "summaryHe": "פתיחת יבוא, פירוק מוקדי ריכוזיות ותמיכה ישירה בחקלאים במקום חסמי יבוא.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_yokermichya"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "beyachad_economy_cost_of_living_promise_1",
              "summaryHe": "תוכנית הדיור מציעה 100,000 דירות לשכירות ארוכת טווח; 40% מהן במסלול מסובסד בהנחה של 30% ממחיר השוק.",
              "detailHe": "זו הבטחת המפלגה ולא מספר דירות שנבנו; אין מדובר בפיקוח גורף על כלל שוק השכירות.",
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_housing"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "beyachad_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "beyachad_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "beyachad_security_foreign_relations_position",
              "summaryHe": "פירוק חמאס מנשקו, חופש פעולה ביטחוני וחיזוק בריתות אזוריות; אין בתוכנית שנקראה התחייבות לניתוק מים וסיוע אזרחי.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_natsec"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "beyachad_security_foreign_relations_promise_1",
              "summaryHe": "אולטימטום לפירוק חמאס מנשקו, חיזוק בריתות אזוריות ושמירת חופש פעולה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_natsec"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "beyachad_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "beyachad_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "beyachad_institutions_democracy_position",
              "summaryHe": "ועדת חקירה ממלכתית, הגבלת כהונת ראש הממשלה לשמונה שנים וביטול החוק המפלגתי לשינוי בחירת שופטים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_launch",
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "beyachad_institutions_democracy_promise_1",
              "summaryHe": "הקמת ועדת חקירה ממלכתית והגבלת כהונת ראש ממשלה לשמונה שנים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_launch"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [
            {
              "id": "beyachad_launch_record",
              "summaryHe": "בנט ולפיד הכריזו על ריצה משותפת בהובלת בנט ב-26 באפריל 2026.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_beyachad_launch"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": "2026-04-26",
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "public_statement",
              "attributionHe": "נפתלי בנט ויאיר לפיד",
              "dateUncertaintyLabelHe": null
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "beyachad_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "beyachad_religion_state_position",
              "summaryHe": "ברית זוגיות אזרחית לכל זוג, תחבורה בשבת בהחלטה מקומית וביזור גיור אורתודוקסי תוך שמירת סטנדרט הלכתי.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_religionandstate"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "beyachad_religion_state_promise_1",
              "summaryHe": "מסלול ברית זוגיות אזרחית וביזור גיור אורתודוקסי לרבני קהילה, תוך שמירת דין תורה.",
              "detailHe": "אין בתוכנית זו הכרה מפורשת בגיור רפורמי או קונסרבטיבי; אין לייחס לה זאת.",
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_religionandstate"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "beyachad_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "beyachad_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "beyachad_public_services_equality_position",
              "summaryHe": "תגמול המשרתים והעובדים, לימודי ליבה כתנאי למימון ציבורי, שוויון ללהט״ב וחיזוק רפואת הקהילה והפריפריה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_meshartim_law",
                "s_fc_beyachad_religionandstate",
                "s_fc_beyachad_health"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "beyachad_public_services_equality_promise_1",
              "summaryHe": "חוק המשרתים: עדיפות למשרתים ולעובדים בדיור ובמעונות, והפסקת הטבות המעודדות אי-שירות.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_meshartim_law"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "beyachad_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "beyachad_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [
            {
              "id": "beyachad_environment_infrastructure_position",
              "summaryHe": "חוק אקלים מתוקצב, הפסקת הפעלה שוטפת של יחידות הפחם הישנות, פינוי תעשייה מזהמת ממפרץ חיפה וחיזוק תחבורה ציבורית.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_enviroment"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "beyachad_environment_infrastructure_promise_1",
              "summaryHe": "חקיקת חוק אקלים מתוקצב, רפורמת פסולת ורשויות תחבורה מטרופוליניות.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_beyachad_enviroment"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "beyachad_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ביחד (נפתלי בנט ויאיר לפיד) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "beyachad_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ביחד (נפתלי בנט ויאיר לפיד) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "beyachad_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "balad",
      "nameHe": "בל״ד (ברשימה המשותפת)",
      "ballotLetters": "ודם",
      "bloc": "ערבי",
      "identityEvidence": {
        "id": "balad_identity",
        "summaryHe": "בל״ד היא מרכיב ברשימה המשותפת עם חד״ש ותע״ל בבחירות 2026, ולא רשימת קלפי עצמאית באות ד.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_balad",
          "s_fc_joint_slate",
          "s_fc_joint_court"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "balad_list_status",
        "summaryHe": "מרכיב ברשימה המשותפת; אותיות הקלפי של הרשימה הן ודם. אין פתק נפרד למרכיב.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn",
          "s_fc_joint_court"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "sami_abu_shehadeh",
          "nameHe": "סאמי אבו שחאדה",
          "identityEvidence": {
            "id": "sami_abu_shehadeh_identity",
            "summaryHe": "סאמי אבו שחאדה — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_balad",
              "s_fc_joint_slate",
              "s_fc_joint_court"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "sami_abu_shehadeh_role",
            "summaryHe": "יו״ר בל״ד; פרש מרשימת המועמדים לכנסת ה-26 ב-2 באוקטובר 2026.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_balad",
              "s_fc_joint_slate",
              "s_fc_joint_court"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "sami_abu_shehadeh_summary",
              "summaryHe": "יו״ר בל״ד; פרש מרשימת המועמדים לכנסת ה-26 ב-2 באוקטובר 2026.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_balad",
                "s_fc_joint_slate",
                "s_fc_joint_court"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "sami_abu_shehadeh_candidacy",
            "summaryHe": "יו״ר בל״ד; פרש מרשימת המועמדים לכנסת ה-26 ב-2 באוקטובר 2026.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_balad",
              "s_fc_joint_slate",
              "s_fc_joint_court"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "אין להציגו כמועמד לכנסת ה-26; ההוצאה או הפרישה מתועדות בדיווח המצורף.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "sami_abu_shehadeh_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "balad_economy_cost_of_living_position",
              "summaryHe": "שוויון אזרחי ולאומי והכרה באזרחים הערבים כמיעוט לאומי; אין להסיק מכך עמדה בכל כלי מיסוי או יבוא.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_balad"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "balad_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "balad_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "balad_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "balad_security_foreign_relations_position",
              "summaryHe": "נסיגה מהשטחים, מדינה פלסטינית ופתרון לסוגיית הפליטים הכולל זכות שיבה.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_balad"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "balad_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "balad_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "balad_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "balad_institutions_democracy_position",
              "summaryHe": "מדינת כל אזרחיה, הכרה במיעוט הערבי וביטול האפליה המוסדית.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_balad"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "balad_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "balad_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "balad_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "balad_religion_state_position",
              "summaryHe": "הפרדת דת ומדינה; אין בכך לבדו תיעוד לכל פרט של רפורמת גיור או כשרות.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_balad"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "balad_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "balad_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "balad_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "balad_public_services_equality_position",
              "summaryHe": "שוויון למיעוט הערבי והתנגדות לכפיית שירות צבאי או לאומי-אזרחי על צעירים ערבים.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_balad",
                "s_fc_arab_service"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "balad_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "balad_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "balad_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "balad_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "balad_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "balad_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "balad_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של בל״ד (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "balad_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "democrats",
      "nameHe": "הדמוקרטים",
      "ballotLetters": "אמת",
      "bloc": "שמאל",
      "identityEvidence": {
        "id": "democrats_identity",
        "summaryHe": "הדמוקרטים — פרופיל המסגרת ומנהיגיה לפי המקורות המפורטים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_democrats",
          "s_fc_democrats"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "democrats_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא אמת.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "yair_golan",
          "nameHe": "יאיר גולן",
          "identityEvidence": {
            "id": "yair_golan_identity",
            "summaryHe": "יאיר גולן — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_democrats",
              "s_fc_democrats"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "yair_golan_role",
            "summaryHe": "יו״ר הדמוקרטים, סגן רמטכ״ל לשעבר וחבר כנסת לשעבר.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_democrats",
              "s_fc_democrats"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "yair_golan_summary",
              "summaryHe": "יו״ר הדמוקרטים, סגן רמטכ״ל לשעבר וחבר כנסת לשעבר.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_democrats",
                "s_fc_democrats"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "yair_golan_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_democrats",
              "s_fc_democrats"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "yair_golan_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "democrats_economy_cost_of_living_position",
              "summaryHe": "חיזוק השירותים הציבוריים והציבור העובד והמשרת, הורדת יוקר המחיה וטיפול בדיור ובשיקום הפריפריה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_economy_society"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "democrats_economy_cost_of_living_promise_1",
              "summaryHe": "השקעה בשירותים חברתיים, טיפול ביוקר המחיה ובדיור ושיקום הצפון והדרום.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_economy_society"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "democrats_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "democrats_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "democrats_security_foreign_relations_position",
              "summaryHe": "יוזמה אזורית, נורמליזציה, עצירת סיפוח, מאבק בטרור וחיזוק גורמים מתונים; היעד המדיני מותנה בביטחון.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_security_diplomatic",
                "s_fc_democrats"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "democrats_security_foreign_relations_promise_1",
              "summaryHe": "יוזמה אזורית, עצירת סיפוח ווועדת חקירה ממלכתית.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_security_diplomatic"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "democrats_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "democrats_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "democrats_institutions_democracy_position",
              "summaryHe": "ביצור זכויות יסוד והפרדת הרשויות, ביטול חוקי ההפיכה המשטרית והגבלת כהונה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_democracy_justice"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "democrats_institutions_democracy_promise_1",
              "summaryHe": "ביטול חוקי ההפיכה המשטרית, חוק יסוד החקיקה והגבלת כהונה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_democracy_justice"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "democrats_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "democrats_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "democrats_religion_state_position",
              "summaryHe": "נישואים וגירושים אזרחיים, פירוק מונופול הרבנות בגיור ובכשרות ותחבורה ציבורית בשבת.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_religion_state"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "democrats_religion_state_promise_1",
              "summaryHe": "נישואים אזרחיים, פירוק מונופול הרבנות ותחבורה ציבורית בשבת.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_religion_state"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "democrats_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "democrats_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "democrats_public_services_equality_position",
              "summaryHe": "שוויון מלא ללהט״ב ולהורות, חינוך ממלכתי והפסקת מימון רשתות חינוך מפלגתיות.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_lgbtq_equality",
                "s_fc_dem_education"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "democrats_public_services_equality_promise_1",
              "summaryHe": "שוויון בזכויות למשפחה ולהורות ורשות לאומית לקידום זכויות להט״ב.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_lgbtq_equality"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "democrats_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "democrats_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [
            {
              "id": "democrats_environment_infrastructure_position",
              "summaryHe": "חוק יסוד הסביבה וחוק אקלים, מעבר לאנרגיה מתחדשת והגנה על שטחים פתוחים ובעלי חיים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_environment_animals"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "democrats_environment_infrastructure_promise_1",
              "summaryHe": "חוק יסוד הסביבה וחוק אקלים והרחבת שימוש באנרגיה מתחדשת.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_dem_environment_animals"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "democrats_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הדמוקרטים בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "democrats_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הדמוקרטים בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "democrats_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "likud",
      "nameHe": "הליכוד",
      "ballotLetters": "מחל",
      "bloc": "ימין",
      "identityEvidence": {
        "id": "likud_identity",
        "summaryHe": "הליכוד בהובלת בנימין נתניהו; מרכז הליכוד אישר את מיזוג מפלגת סער באוגוסט 2025. סער אינו יו״ר משותף עם נתניהו.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_likud",
          "s_fc_saar_merger"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "likud_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא מחל.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "benjamin_netanyahu",
          "nameHe": "בנימין נתניהו",
          "identityEvidence": {
            "id": "benjamin_netanyahu_identity",
            "summaryHe": "בנימין נתניהו — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_likud",
              "s_fc_saar_merger"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "benjamin_netanyahu_role",
            "summaryHe": "יו״ר הליכוד וראש הממשלה; סער אינו יו״ר משותף של המפלגה.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_likud",
              "s_fc_saar_merger"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "benjamin_netanyahu_summary",
              "summaryHe": "יו״ר הליכוד וראש הממשלה; סער אינו יו״ר משותף של המפלגה.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_likud",
                "s_fc_saar_merger"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "benjamin_netanyahu_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_likud",
              "s_fc_saar_merger"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "benjamin_netanyahu_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        },
        {
          "id": "gideon_saar",
          "nameHe": "גדעון סער",
          "identityEvidence": {
            "id": "gideon_saar_identity",
            "summaryHe": "גדעון סער — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_likud",
              "s_fc_saar_merger"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "gideon_saar_role",
            "summaryHe": "שר החוץ ומנהיג מפלגה שהתמזגה בליכוד ב-2025.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_likud",
              "s_fc_saar_merger"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "gideon_saar_summary",
              "summaryHe": "שר החוץ ומנהיג מפלגה שהתמזגה בליכוד ב-2025.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_likud",
                "s_fc_saar_merger"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "gideon_saar_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_likud",
              "s_fc_saar_merger"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "gideon_saar_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "likud_economy_cost_of_living_position",
              "summaryHe": "מסורת לאומית-ליברלית: שוק תחרותי ויוזמה פרטית לצד מדיניות ממשלתית בפועל שאינה זהה לכל אידאל במצע.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_likud"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [
            {
              "id": "likud_import_reform",
              "summaryHe": "רפורמת ״מה שטוב לאירופה טוב לישראל״ קודמה ב-2024 במשרד הכלכלה בראשות ניר ברקת; אין לייחס את הרפורמה בשם זה לממשלת בנט-לפיד ב-2021.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_import",
                "s_fc_import_2024"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "government_action",
              "attributionHe": "משרד הכלכלה בממשלה ה-37",
              "dateUncertaintyLabelHe": "מועד מדויק לא אומת; אין לייחס תאריך שרירותי."
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "likud_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "likud_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "likud_security_foreign_relations_position",
              "summaryHe": "קמפיין 2026 מדגיש עוצמה ביטחונית והתנגדות למדינה פלסטינית; אין להציג עמדה זו כקבועה בכל תולדות הליכוד.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_likud_campaign"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "likud_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "likud_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "likud_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "likud_institutions_democracy_position",
              "summaryHe": "ממשלות בהובלת הליכוד קידמו שינוי במערכת המשפט; שאלון Ynet לא נענה ואין מצע חדש מאומת לכל סעיף.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_judicial_survey",
                "s_fc_saar_merger"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [
            {
              "id": "likud_saar_merger_record",
              "summaryHe": "מרכז הליכוד אישר את המיזוג עם מפלגת סער ב-13 באוגוסט 2025.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_saar_merger"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": "2025-08-13",
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "public_statement",
              "attributionHe": "מרכז הליכוד",
              "dateUncertaintyLabelHe": null
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "likud_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "likud_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "likud_religion_state_position",
              "summaryHe": "מסורת יהודית ובריתות עם מפלגות דתיות הן חלק מהזהות הפוליטית; לא אומתה כאן עמדה מפורטת לכל רפורמת דת ומדינה.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_likud"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "likud_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "likud_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "likud_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "likud_public_services_equality_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "likud_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "likud_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "likud_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "likud_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של הליכוד בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של הליכוד בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "likud_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הליכוד בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "likud_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הליכוד בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "likud_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הליכוד בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "likud_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "religious_zionism",
      "nameHe": "הציונות הדתית וזהות",
      "ballotLetters": "ט",
      "bloc": "ימין",
      "identityEvidence": {
        "id": "religious_zionism_identity",
        "summaryHe": "הציונות הדתית וזהות חתמו בספטמבר 2026 על בלוק טכני שיכול להתפצל בכנסת; אין מדובר במיזוג מפלגתי מלא.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_religious_zionism",
          "s_fc_rz_alliance"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "religious_zionism_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא ט.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "bezalel_smotrich",
          "nameHe": "בצלאל סמוטריץ׳",
          "identityEvidence": {
            "id": "bezalel_smotrich_identity",
            "summaryHe": "בצלאל סמוטריץ׳ — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_religious_zionism",
              "s_fc_rz_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "bezalel_smotrich_role",
            "summaryHe": "יו״ר הציונות הדתית ושר האוצר; מוביל את הבלוק הטכני עם זהות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_religious_zionism",
              "s_fc_rz_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "bezalel_smotrich_summary",
              "summaryHe": "יו״ר הציונות הדתית ושר האוצר; מוביל את הבלוק הטכני עם זהות.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_religious_zionism",
                "s_fc_rz_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "bezalel_smotrich_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_religious_zionism",
              "s_fc_rz_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "bezalel_smotrich_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        },
        {
          "id": "moshe_feiglin",
          "nameHe": "משה פייגלין",
          "identityEvidence": {
            "id": "moshe_feiglin_identity",
            "summaryHe": "משה פייגלין — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_religious_zionism",
              "s_fc_rz_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "moshe_feiglin_role",
            "summaryHe": "יו״ר זהות וחבר כנסת לשעבר; שותף בבלוק הטכני עם הציונות הדתית.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_religious_zionism",
              "s_fc_rz_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "moshe_feiglin_summary",
              "summaryHe": "יו״ר זהות וחבר כנסת לשעבר; שותף בבלוק הטכני עם הציונות הדתית.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_religious_zionism",
                "s_fc_rz_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "moshe_feiglin_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_religious_zionism",
              "s_fc_rz_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "moshe_feiglin_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "religious_zionism_economy_cost_of_living_position",
              "summaryHe": "הציונות הדתית תומכת בליברליזציה ובתחרות; לזהות קו ליברטריאני. אין לייחס אוטומטית את כל מצע זהות לבלוק הטכני.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_religious_zionism",
                "s_fc_rz_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "religious_zionism_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "religious_zionism_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "religious_zionism_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "religious_zionism_security_foreign_relations_position",
              "summaryHe": "התנגדות למדינה פלסטינית ותמיכה בהרחבת ההתיישבות ובריבונות; שני ראשי הבלוק דוגלים במדיניות ביטחונית ימנית.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_rz_alliance",
                "s_fc_rz_policy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "religious_zionism_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "religious_zionism_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "religious_zionism_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "religious_zionism_institutions_democracy_position",
              "summaryHe": "פסקת התגברות, הגבלת הביקורת השיפוטית ופיצול תפקיד היועץ המשפטי הם הצעות הציונות הדתית; זהות מציעה מודל בחירת שופטים אחר.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_judicial_survey",
                "s_fc_rz_policy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [
            {
              "id": "rz_technical_bloc_record",
              "summaryHe": "הסכם בלוק טכני בין הציונות הדתית לזהות נחתם ב-1 בספטמבר 2026.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_rz_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": "2026-09-01",
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "public_statement",
              "attributionHe": "בצלאל סמוטריץ׳ ומשה פייגלין",
              "dateUncertaintyLabelHe": null
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "religious_zionism_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "religious_zionism_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "religious_zionism_religion_state_position",
              "summaryHe": "הציונות הדתית מדגישה חינוך וזהות יהודית. החיבור לזהות הוא בלוק טכני, לא הוכחה למדיניות דת ומדינה משותפת בכל נושא.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_religious_zionism",
                "s_fc_rz_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "religious_zionism_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "religious_zionism_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "religious_zionism_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "religious_zionism_public_services_equality_position",
              "summaryHe": "סמוטריץ׳ מצהיר על שילוב חרדים בשירות, אך מפלגתו תמכה גם בהגנת לימוד תורה; אין ליישב את המתח באמצעות ייחוס תמיכה אחידה בסנקציות.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_rz_policy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "religious_zionism_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "religious_zionism_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "religious_zionism_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [
            {
              "id": "religious_zionism_environment_infrastructure_position",
              "summaryHe": "הרחבת ההתיישבות ביהודה ושומרון; לא נמצא במקורות שנקראו יעד אקלים מספרי או מצע משותף מפורט לתשתיות.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_rz_policy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "religious_zionism_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של הציונות הדתית וזהות בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "religious_zionism_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של הציונות הדתית וזהות בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "religious_zionism_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של הציונות הדתית וזהות בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "religious_zionism_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "hadash_taal",
      "nameHe": "חד״ש ותע״ל (ברשימה המשותפת)",
      "ballotLetters": "ודם",
      "bloc": "שמאל יהודי-ערבי",
      "identityEvidence": {
        "id": "hadash_taal_identity",
        "summaryHe": "חד״ש ותע״ל הן מרכיבים ברשימה המשותפת עם בל״ד; הרשימה מוגשת בהובלת יוסף ג׳בארין ואחמד טיבי, לא איימן עודה.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_joint_slate",
          "s_idi_hadash",
          "s_idi_taal"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "hadash_taal_list_status",
        "summaryHe": "מרכיב ברשימה המשותפת; אותיות הקלפי של הרשימה הן ודם. אין פתק נפרד למרכיב.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn",
          "s_fc_joint_court"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "yousef_jabareen",
          "nameHe": "יוסף ג׳בארין",
          "identityEvidence": {
            "id": "yousef_jabareen_identity",
            "summaryHe": "יוסף ג׳בארין — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_joint_slate",
              "s_idi_hadash",
              "s_idi_taal"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "yousef_jabareen_role",
            "summaryHe": "יו״ר חד״ש וראש הרשימה המשותפת ב-2026; חבר כנסת בשנים 2015–2021.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_joint_slate",
              "s_idi_hadash",
              "s_idi_taal"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "yousef_jabareen_summary",
              "summaryHe": "יו״ר חד״ש וראש הרשימה המשותפת ב-2026; חבר כנסת בשנים 2015–2021.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_joint_slate",
                "s_idi_hadash",
                "s_idi_taal"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "yousef_jabareen_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_joint_slate",
              "s_idi_hadash",
              "s_idi_taal"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "yousef_jabareen_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        },
        {
          "id": "ahmad_tibi",
          "nameHe": "אחמד טיבי",
          "identityEvidence": {
            "id": "ahmad_tibi_identity",
            "summaryHe": "אחמד טיבי — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_joint_slate",
              "s_idi_hadash",
              "s_idi_taal"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "ahmad_tibi_role",
            "summaryHe": "יו״ר תע״ל וחבר כנסת; הוצב שני ברשימה המשותפת שהוגשה.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_joint_slate",
              "s_idi_hadash",
              "s_idi_taal"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "ahmad_tibi_summary",
              "summaryHe": "יו״ר תע״ל וחבר כנסת; הוצב שני ברשימה המשותפת שהוגשה.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_joint_slate",
                "s_idi_hadash",
                "s_idi_taal"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "ahmad_tibi_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_joint_slate",
              "s_idi_hadash",
              "s_idi_taal"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "ahmad_tibi_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "hadash_taal_economy_cost_of_living_position",
              "summaryHe": "חד״ש מדגישה סוציאליזם וצדק חברתי; תע״ל מדגישה צמצום פערים. אין לייחס לכל המרכיבים זהות בכל סעיף כלכלי.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_hadash",
                "s_idi_taal"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "hadash_taal_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "hadash_taal_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "hadash_taal_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "hadash_taal_security_foreign_relations_position",
              "summaryHe": "חד״ש ותע״ל תומכות במדינה פלסטינית ובפתרון לסוגיית הפליטים במסגרת הסדר מדיני.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_hadash",
                "s_idi_taal"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "hadash_taal_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "hadash_taal_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "hadash_taal_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "hadash_taal_institutions_democracy_position",
              "summaryHe": "הרשימה המשותפת מדגישה זכויות מיעוטים, איזונים ובלמים ועצמאות מערכת המשפט.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "hadash_taal_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "hadash_taal_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "hadash_taal_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "hadash_taal_religion_state_position",
              "summaryHe": "תע״ל מוגדרת כמפלגה חילונית; עמדת רשימה משותפת בשאלה מסוימת אינה נגזרת אוטומטית מעמדת מרכיב יחיד.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_taal"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "hadash_taal_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "hadash_taal_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "hadash_taal_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "hadash_taal_public_services_equality_position",
              "summaryHe": "שוויון אזרחי, צמצום פערים והתנגדות חד״ש לכפיית שירות צבאי ולאומי על צעירים ערבים.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_hadash",
                "s_idi_taal",
                "s_fc_arab_service"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "hadash_taal_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "hadash_taal_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "hadash_taal_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "hadash_taal_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "hadash_taal_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "hadash_taal_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "hadash_taal_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של חד״ש ותע״ל (ברשימה המשותפת) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "hadash_taal_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "utj",
      "nameHe": "יהדות התורה",
      "ballotLetters": "ג",
      "bloc": "חרדי",
      "identityEvidence": {
        "id": "utj_identity",
        "summaryHe": "יהדות התורה היא רשימת אגודת ישראל ודגל התורה. יעקב אשר החליף את משה גפני בראש דגל התורה לקראת בחירות 2026.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_utj",
          "s_fc_utj_leadership",
          "s_fc_haredi"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "utj_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא ג.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "yaakov_asher",
          "nameHe": "יעקב אשר",
          "identityEvidence": {
            "id": "yaakov_asher_identity",
            "summaryHe": "יעקב אשר — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "yaakov_asher_role",
            "summaryHe": "מנהיג דגל התורה וראש רשימת יהדות התורה בבחירות 2026 לפי הדיווחים.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "yaakov_asher_summary",
              "summaryHe": "מנהיג דגל התורה וראש רשימת יהדות התורה בבחירות 2026 לפי הדיווחים.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_utj",
                "s_fc_utj_leadership",
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "yaakov_asher_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "yaakov_asher_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        },
        {
          "id": "yitzhak_goldknopf",
          "nameHe": "יצחק גולדקנופף",
          "identityEvidence": {
            "id": "yitzhak_goldknopf_identity",
            "summaryHe": "יצחק גולדקנופף — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "yitzhak_goldknopf_role",
            "summaryHe": "מנהיג אגודת ישראל; רשימת יהדות התורה ב-2026 מתוארת בהובלת יעקב אשר.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "yitzhak_goldknopf_summary",
              "summaryHe": "מנהיג אגודת ישראל; רשימת יהדות התורה ב-2026 מתוארת בהובלת יעקב אשר.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_utj",
                "s_fc_utj_leadership",
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "yitzhak_goldknopf_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "yitzhak_goldknopf_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        },
        {
          "id": "moshe_gafni",
          "nameHe": "משה גפני",
          "identityEvidence": {
            "id": "moshe_gafni_identity",
            "summaryHe": "משה גפני — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "moshe_gafni_role",
            "summaryHe": "מנהיג דגל התורה לשעבר וחבר כנסת ותיק; הוסר מרשימת 2026 לפי הדיווח.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "moshe_gafni_summary",
              "summaryHe": "מנהיג דגל התורה לשעבר וחבר כנסת ותיק; הוסר מרשימת 2026 לפי הדיווח.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_utj",
                "s_fc_utj_leadership",
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "moshe_gafni_candidacy",
            "summaryHe": "מנהיג דגל התורה לשעבר וחבר כנסת ותיק; הוסר מרשימת 2026 לפי הדיווח.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_utj",
              "s_fc_utj_leadership",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "אין להציגו כמועמד לכנסת ה-26; ההוצאה או הפרישה מתועדות בדיווח המצורף.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "moshe_gafni_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "utj_economy_cost_of_living_position",
              "summaryHe": "סיוע לדיור ולמשפחות חרדיות, הגנה על תקציבי חינוך, ישיבות ומעונות.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "utj_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "utj_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "utj_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "utj_security_foreign_relations_position",
              "summaryHe": "לא פורסמה במקורות שנקראו מדיניות ביטחונית עצמאית ומפורטת לעזה, לבנון ואיראן; אין להמציא עמדה ניטרלית או הבטחות.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "utj_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "utj_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "utj_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "utj_institutions_democracy_position",
              "summaryHe": "תמיכה בהגבלת התערבות בג״ץ בענייני גיוס ותקציבים חרדיים; אין בכך פירוט מוכח של כל שינוי חוקתי.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_haredi",
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "utj_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "utj_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "utj_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "utj_religion_state_position",
              "summaryHe": "הגנת לימוד תורה ופטורי בני ישיבות, סמכות הרבנות ונישואים דתיים, התנגדות להרחבת פעילות ציבורית בשבת.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "utj_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "utj_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "utj_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "utj_public_services_equality_position",
              "summaryHe": "דרישה לתקצוב מוסדות חרדיים גם בלי לימודי ליבה מלאים ומאבק בסנקציות על בני ישיבות שאינם מתגייסים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "utj_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "utj_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "utj_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "utj_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של יהדות התורה בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של יהדות התורה בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "utj_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של יהדות התורה בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "utj_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של יהדות התורה בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "utj_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של יהדות התורה בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "utj_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "yashar",
      "nameHe": "ישר! (גדי איזנקוט)",
      "ballotLetters": "דרך",
      "bloc": "מרכז ממלכתי",
      "identityEvidence": {
        "id": "yashar_identity",
        "summaryHe": "ישר! (גדי איזנקוט) — פרופיל המסגרת ומנהיגיה לפי המקורות המפורטים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_yashar",
          "s_fc_yashar_interview"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "yashar_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא דרך.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "gadi_eisenkot",
          "nameHe": "גדי איזנקוט",
          "identityEvidence": {
            "id": "gadi_eisenkot_identity",
            "summaryHe": "גדי איזנקוט — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_yashar",
              "s_fc_yashar_interview"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "gadi_eisenkot_role",
            "summaryHe": "יו״ר ישר!, רמטכ״ל לשעבר (2015–2019) ומשקיף בקבינט המלחמה לשעבר.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_yashar",
              "s_fc_yashar_interview"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "gadi_eisenkot_summary",
              "summaryHe": "יו״ר ישר!, רמטכ״ל לשעבר (2015–2019) ומשקיף בקבינט המלחמה לשעבר.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_yashar",
                "s_fc_yashar_interview"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "gadi_eisenkot_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_yashar",
              "s_fc_yashar_interview"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "gadi_eisenkot_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "yashar_economy_cost_of_living_position",
              "summaryHe": "פירוק ריכוזיות, תחרות ותקינה בינלאומית, ושילוב כלל המגזרים בשירות ובתעסוקה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yashar_economy_cost_of_living_promise_1",
              "summaryHe": "פירוק ריכוזיות, אימוץ תקינה בינלאומית ותיעדוף הטבות לציבור המשרת והיצרני.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yashar_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yashar_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "yashar_security_foreign_relations_position",
              "summaryHe": "חיזוק צה״ל והגבולות, הרחבת מעגל השלום ורוב יהודי מוצק; לא הוצגה בעשרת הצעדים התחייבות מפורשת למדינה פלסטינית.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar",
                "s_fc_yashar_interview"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yashar_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ישר! (גדי איזנקוט) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ישר! (גדי איזנקוט) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "yashar_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yashar_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "yashar_institutions_democracy_position",
              "summaryHe": "ועדת חקירה ממלכתית, שתי קדנציות לראש הממשלה, חוק יסוד החקיקה ומערכת משפט עצמאית; התנגדות לפסקת התגברות.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar",
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yashar_institutions_democracy_promise_1",
              "summaryHe": "ועדת חקירה ממלכתית, שתי קדנציות לראש הממשלה ושיקום שירות ציבורי מקצועי.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yashar_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yashar_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "yashar_religion_state_position",
              "summaryHe": "יהדות מכילה ומכבדת והרחבת עצמאות קהילות ורשויות. אין להפוך אמירה כללית זו להתחייבות מפורשת לכל רפורמת נישואים וגיור.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yashar_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ישר! (גדי איזנקוט) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ישר! (גדי איזנקוט) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "yashar_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yashar_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "yashar_public_services_equality_position",
              "summaryHe": "שירות ממלכתי לכל, לרבות מסגרות מתאימות לציבור החרדי והערבי, לימודי ליבה וחיזוק חינוך ובריאות בפריפריה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yashar_public_services_equality_promise_1",
              "summaryHe": "חקיקת שירות ממלכתי לכל והנהגת לימודי ליבה לכל.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yashar_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yashar_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [
            {
              "id": "yashar_environment_infrastructure_position",
              "summaryHe": "השקעה בתשתיות ובתחבורה בפריפריה ותכנון לאומי ארוך טווח; אין במקור זה התחייבות מפורשת לאגרת גודש או יעד אקלים מספרי.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_yashar"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yashar_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ישר! (גדי איזנקוט) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ישר! (גדי איזנקוט) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "yashar_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישר! (גדי איזנקוט) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yashar_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישר! (גדי איזנקוט) בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "yashar_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "yisrael_beitenu",
      "nameHe": "ישראל ביתנו",
      "ballotLetters": "ל",
      "bloc": "ימין",
      "identityEvidence": {
        "id": "yisrael_beitenu_identity",
        "summaryHe": "ישראל ביתנו — פרופיל המסגרת ומנהיגיה לפי המקורות המפורטים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_yisrael_beitenu_platform"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "yisrael_beitenu_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא ל.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "avigdor_liberman",
          "nameHe": "אביגדור ליברמן",
          "identityEvidence": {
            "id": "avigdor_liberman_identity",
            "summaryHe": "אביגדור ליברמן — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_yisrael_beitenu_platform"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "avigdor_liberman_role",
            "summaryHe": "יו״ר ישראל ביתנו; שר אוצר ושר ביטחון לשעבר.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_yisrael_beitenu_platform"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "avigdor_liberman_summary",
              "summaryHe": "יו״ר ישראל ביתנו; שר אוצר ושר ביטחון לשעבר.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "avigdor_liberman_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_yisrael_beitenu_platform"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "avigdor_liberman_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "yisrael_beitenu_economy_cost_of_living_position",
              "summaryHe": "תחרות ויבוא מקביל, פירוק מועצות ייצור והפרטה, לצד רשת ביטחון לעצמאים וסיוע לקשישים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yisrael_beitenu_economy_cost_of_living_promise_1",
              "summaryHe": "פירוק מועצות ייצור, רשת ביטחון וולונטרית לעצמאים והגדלת ההשקעה במחקר ובינה מלאכותית.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yisrael_beitenu_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yisrael_beitenu_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "yisrael_beitenu_security_foreign_relations_position",
              "summaryHe": "יוזמה והכרעה ביטחונית, שירות צבאי או אזרחי לכל, ניתוק אספקת מים, חשמל ודלק לעזה תוך העברת אחריות לגורם בינלאומי מוסכם.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yisrael_beitenu_security_foreign_relations_promise_1",
              "summaryHe": "שירות צבאי או אזרחי לכל צעיר וצעירה בני 18 וניתוק אחריות אזרחית מעזה תוך העברה לגורם בינלאומי מוסכם.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yisrael_beitenu_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yisrael_beitenu_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "yisrael_beitenu_institutions_democracy_position",
              "summaryHe": "חוקה במשאל עם, בית משפט לחוקה, שתי קדנציות לראש הממשלה, התנגדות לפסקת התגברות ותיקון חוק הלאום לעיגון שוויון.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yisrael_beitenu_institutions_democracy_promise_1",
              "summaryHe": "חוקה, הגבלת כהונה ותיקון חוק הלאום לעיגון שוויון.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yisrael_beitenu_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yisrael_beitenu_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "yisrael_beitenu_religion_state_position",
              "summaryHe": "נישואים וגירושים אזרחיים, גיור באמצעות רבני ערים, רפורמת כשרות, ביטול מועצות דתיות וסמכות מקומית לשבת.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yisrael_beitenu_religion_state_promise_1",
              "summaryHe": "נישואים וגירושים אזרחיים, גיור רבני ערים וביטול המועצות הדתיות.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yisrael_beitenu_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yisrael_beitenu_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "yisrael_beitenu_public_services_equality_position",
              "summaryHe": "לימודי ליבה כתנאי לתקצוב, ביטול קצבאות ישיבות, שילוב בתעסוקה וחיזוק רווחת הקשישים והבריאות.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "yisrael_beitenu_public_services_equality_promise_1",
              "summaryHe": "תקצוב חינוך מותנה בליבה, ביטול קצבאות ישיבות והרחבת ביטחון סוציאלי לקשישים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yisrael_beitenu_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yisrael_beitenu_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [
            {
              "id": "yisrael_beitenu_environment_infrastructure_position",
              "summaryHe": "תחבורה ציבורית נגישה, רשויות תחבורה מטרופוליניות והשקעה בתשתיות. אין להסיק מכך תמיכה בכל מס גודש או יעד אקלים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_yisrael_beitenu_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "yisrael_beitenu_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ישראל ביתנו בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ישראל ביתנו בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "yisrael_beitenu_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ישראל ביתנו בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "yisrael_beitenu_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ישראל ביתנו בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "yisrael_beitenu_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "blue_white",
      "nameHe": "כחול לבן",
      "ballotLetters": "כן",
      "bloc": "מרכז",
      "identityEvidence": {
        "id": "blue_white_identity",
        "summaryHe": "כחול לבן בהובלת בני גנץ מתמודדת בשם זה ב-2026; המחנה הממלכתי הוא מסגרת בחירות קודמת שאין להעתיק את כל הרכבה הנוכחי.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_blue_white",
          "s_fc_gantz_bio"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "blue_white_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא כן.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "benny_gantz",
          "nameHe": "בני גנץ",
          "identityEvidence": {
            "id": "benny_gantz_identity",
            "summaryHe": "בני גנץ — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_blue_white",
              "s_fc_gantz_bio"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "benny_gantz_role",
            "summaryHe": "יו״ר כחול לבן, רמטכ״ל לשעבר (2011–2015) ושר ביטחון לשעבר.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_blue_white",
              "s_fc_gantz_bio"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "benny_gantz_summary",
              "summaryHe": "יו״ר כחול לבן, רמטכ״ל לשעבר (2011–2015) ושר ביטחון לשעבר.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_blue_white",
                "s_fc_gantz_bio"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "benny_gantz_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_blue_white",
              "s_fc_gantz_bio"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "benny_gantz_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "blue_white_economy_cost_of_living_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "blue_white_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "blue_white_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "blue_white_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "blue_white_security_foreign_relations_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "blue_white_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "blue_white_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "blue_white_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "blue_white_institutions_democracy_position",
              "summaryHe": "לפי תשובת כחול לבן לשאלון Ynet, יש להגדיר ולהגביל את סמכויות בית המשפט ולחזק פיקוח פרלמנטרי בלי פוליטיזציה של המשפט.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "blue_white_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "blue_white_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "blue_white_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "blue_white_religion_state_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "blue_white_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "blue_white_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "blue_white_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "blue_white_public_services_equality_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "blue_white_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "blue_white_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "blue_white_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "blue_white_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של כחול לבן בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "blue_white_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של כחול לבן בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "blue_white_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של כחול לבן בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "blue_white_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של כחול לבן בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "blue_white_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "noam",
      "nameHe": "נעם",
      "ballotLetters": "ני",
      "bloc": "ימין",
      "identityEvidence": {
        "id": "noam_identity",
        "summaryHe": "נעם — פרופיל המסגרת ומנהיגיה לפי המקורות המפורטים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_noam"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "noam_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא ני.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "avi_maoz",
          "nameHe": "אבי מעוז",
          "identityEvidence": {
            "id": "avi_maoz_identity",
            "summaryHe": "אבי מעוז — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_noam"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "avi_maoz_role",
            "summaryHe": "יו״ר נעם לישראל וחבר כנסת.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_noam"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "avi_maoz_summary",
              "summaryHe": "יו״ר נעם לישראל וחבר כנסת.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_noam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "avi_maoz_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_noam"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "avi_maoz_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "noam_economy_cost_of_living_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של נעם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של נעם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "noam_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של נעם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של נעם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "noam_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "noam_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "noam_security_foreign_relations_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של נעם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של נעם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "noam_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של נעם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של נעם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "noam_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "noam_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "noam_institutions_democracy_position",
              "summaryHe": "פסקת התגברות, פיצול תפקיד היועץ המשפטי והפיכת חוות דעתו לייעוץ שאינו וטו.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_noam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "noam_institutions_democracy_promise_1",
              "summaryHe": "חקיקת פסקת התגברות ופיצול תפקיד היועץ המשפטי.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_noam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "noam_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "noam_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "noam_religion_state_position",
              "summaryHe": "שמירת שבת במרחב הציבורי, חיזוק הרבנות הראשית וחקיקה בנושא כשרות, גיור והמשפחה ברוח תפיסת המפלגה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_noam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [
            {
              "id": "noam_return_bill_record",
              "summaryHe": "אבי מעוז הגיש הצעה לביטול סעיף הנכד בחוק השבות; הדיון המתואר אינו מעיד שההצעה נחקקה.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_noam_return"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "public_statement",
              "attributionHe": "ח״כ אבי מעוז",
              "dateUncertaintyLabelHe": "מועד מדויק לא אומת; אין לייחס תאריך שרירותי."
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "noam_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של נעם בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של נעם בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "noam_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "noam_public_services_equality_position",
              "summaryHe": "חינוך יהודי, שקיפות בתוכניות חיצוניות והרחבת סמכות ההורים; אין במקור שנקרא התנגדות מפורשת ללימודי מתמטיקה ואנגלית.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_noam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [
            {
              "id": "noam_public_services_equality_promise_1",
              "summaryHe": "תוכנית נעם מציעה שכר מינימלי של 12,000 ש״ח למורה מתחיל והרחבת זכות ההורים על תכנים.",
              "detailHe": "הסכום הוא יעד מוצהר של המפלגה, לא שכר שכבר הונהג.",
              "status": "declared",
              "sourceIds": [
                "s_fc_noam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "noam_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "noam_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "noam_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של נעם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של נעם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "noam_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של נעם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של נעם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "noam_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של נעם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "noam_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של נעם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "noam_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "otzma_yehudit",
      "nameHe": "עוצמה יהודית",
      "ballotLetters": "ב",
      "bloc": "ימין",
      "identityEvidence": {
        "id": "otzma_yehudit_identity",
        "summaryHe": "עוצמה יהודית — פרופיל המסגרת ומנהיגיה לפי המקורות המפורטים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_fc_otzma",
          "s_idi_otzma"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "otzma_yehudit_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא ב.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "itamar_ben_gvir",
          "nameHe": "איתמר בן גביר",
          "identityEvidence": {
            "id": "itamar_ben_gvir_identity",
            "summaryHe": "איתמר בן גביר — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_otzma",
              "s_idi_otzma"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "itamar_ben_gvir_role",
            "summaryHe": "יו״ר עוצמה יהודית והשר לביטחון לאומי.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_fc_otzma",
              "s_idi_otzma"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "itamar_ben_gvir_summary",
              "summaryHe": "יו״ר עוצמה יהודית והשר לביטחון לאומי.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_otzma",
                "s_idi_otzma"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "itamar_ben_gvir_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_fc_otzma",
              "s_idi_otzma"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "itamar_ben_gvir_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "otzma_yehudit_economy_cost_of_living_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "otzma_yehudit_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "otzma_yehudit_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "otzma_yehudit_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "otzma_yehudit_security_foreign_relations_position",
              "summaryHe": "התנגדות למדינה פלסטינית, ריבונות ומדיניות התקפית; תוכנית 2026 לעידוד יציאת תושבי עזה מתוארת כהגירה מרצון על ידי המפלגה.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_otzma",
                "s_idi_otzma"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [
            {
              "id": "otzma_death_penalty_record",
              "summaryHe": "עוצמה יהודית קידמה את חוק עונש המוות שעבר בקריאות הסופיות ב-30 במרץ 2026.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_death_penalty"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": "2026-03-30",
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "legislation",
              "attributionHe": "עוצמה יהודית והכנסת; חקיקה היא פעולה של הכנסת, לא של מפלגה לבדה",
              "dateUncertaintyLabelHe": null
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "otzma_yehudit_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "otzma_yehudit_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "otzma_yehudit_institutions_democracy_position",
              "summaryHe": "תמיכה בשינוי בחירת שופטים ובהגבלת סמכויות בג״ץ; התנגדות המפלגה לפשרות בחקיקה מתועדת בדיווחים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_otzma"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "otzma_yehudit_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "otzma_yehudit_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "otzma_yehudit_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "otzma_yehudit_religion_state_position",
              "summaryHe": "זהות יהודית-לאומית ושילוב משפט עברי; לא אומת מצע מפורט לכל סוגיית דת ומדינה.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_otzma"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "otzma_yehudit_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "otzma_yehudit_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "otzma_yehudit_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "otzma_yehudit_public_services_equality_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "otzma_yehudit_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "otzma_yehudit_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "otzma_yehudit_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "otzma_yehudit_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של עוצמה יהודית בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של עוצמה יהודית בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "otzma_yehudit_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של עוצמה יהודית בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "otzma_yehudit_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של עוצמה יהודית בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "otzma_yehudit_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של עוצמה יהודית בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "otzma_yehudit_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "raam",
      "nameHe": "רע״ם",
      "ballotLetters": "עם",
      "bloc": "ערבי",
      "identityEvidence": {
        "id": "raam_identity",
        "summaryHe": "רע״ם בהובלת מנסור עבאס מתמודדת בנפרד מהרשימה המשותפת; סגלוביץ׳ צורף לרשימתה עם חופש הצבעה בנושאים מסוימים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_raam",
          "s_fc_raam_alliance"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "raam_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא עם.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn",
          "s_fc_joint_court"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "mansour_abbas",
          "nameHe": "מנסור עבאס",
          "identityEvidence": {
            "id": "mansour_abbas_identity",
            "summaryHe": "מנסור עבאס — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_raam",
              "s_fc_raam_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "mansour_abbas_role",
            "summaryHe": "יו״ר רע״ם וחבר כנסת; מוביל קו של השפעה ושותפות ממשלתית.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_raam",
              "s_fc_raam_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "mansour_abbas_summary",
              "summaryHe": "יו״ר רע״ם וחבר כנסת; מוביל קו של השפעה ושותפות ממשלתית.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_raam",
                "s_fc_raam_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "mansour_abbas_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_raam",
              "s_fc_raam_alliance"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "mansour_abbas_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "raam_economy_cost_of_living_position",
              "summaryHe": "צמצום פערים בחברה הערבית, אזורי תעשייה ותשתיות; אין מקור מפורט לעמדה בכל סעיף מיסוי או פיקוח מחירים.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_raam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "raam_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "raam_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "raam_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "raam_security_foreign_relations_position",
              "summaryHe": "תמיכה במדינה פלסטינית וסיום הכיבוש כפי שמתואר בפרופיל המכון; אין להמציא תוכנית שלטונית מפורטת לעזה.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_raam"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "raam_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "raam_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "raam_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "raam_institutions_democracy_position",
              "summaryHe": "רע״ם מבקשת שותפות והשפעה ממשלתית. בפרסום 2026 לא נמסרה תשובה מעודכנת לכל סעיפי הרפורמה המשפטית.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_raam_alliance",
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [
            {
              "id": "raam_court_record",
              "summaryHe": "בית המשפט העליון התיר לרע״ם ולרשימה המשותפת להתמודד, לפי הדיווח מ-2 באוקטובר.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_fc_joint_court"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": "2026-10-02",
              "coverageNoteHe": null,
              "contradictionIds": [],
              "recordKind": "judicial_record",
              "attributionHe": "בית המשפט העליון; הדיווח אינו נוסח פסק דין רשמי",
              "dateUncertaintyLabelHe": null
            }
          ],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "raam_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "raam_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "raam_religion_state_position",
              "summaryHe": "לסגלוביץ׳, שצורף לרשימה, ניתן חופש הצבעה בדת ומדינה ולהט״ב. אין לייחס לרשימת 2026 התנגדות או תמיכה אחידה על בסיס סטריאוטיפ דתי.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_raam_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "raam_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "raam_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "raam_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "raam_public_services_equality_position",
              "summaryHe": "צמצום פערים בחינוך ובתעסוקה ומאבק בפשיעה בחברה הערבית.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_idi_raam",
                "s_fc_raam_alliance"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "raam_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "raam_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "raam_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "raam_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של רע״ם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של רע״ם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "raam_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של רע״ם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "raam_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של רע״ם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "raam_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של רע״ם בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "raam_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "shas",
      "nameHe": "ש״ס",
      "ballotLetters": "שס",
      "bloc": "חרדי",
      "identityEvidence": {
        "id": "shas_identity",
        "summaryHe": "ש״ס — פרופיל המסגרת ומנהיגיה לפי המקורות המפורטים.",
        "detailHe": null,
        "status": "historical",
        "sourceIds": [
          "s_idi_shas",
          "s_fc_haredi"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "shas_list_status",
        "summaryHe": "לפי הדיווח על הקצאת האותיות, פתק הרשימה הוא שס.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_fc_ballots",
          "s_fc_ballots_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "המידע הוצלב בדיווחים; רשימת מועמדים רשמית מלאה לא נקראה ישירות מרשות הבחירות.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "aryeh_deri",
          "nameHe": "אריה דרעי",
          "identityEvidence": {
            "id": "aryeh_deri_identity",
            "summaryHe": "אריה דרעי — פרופיל ציבורי לפי המקורות.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_shas",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "aryeh_deri_role",
            "summaryHe": "יו״ר ש״ס; המפלגה נשענת על הנהגה רבנית לצד הנהגה פוליטית.",
            "detailHe": null,
            "status": "historical",
            "sourceIds": [
              "s_idi_shas",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [
            {
              "id": "aryeh_deri_summary",
              "summaryHe": "יו״ר ש״ס; המפלגה נשענת על הנהגה רבנית לצד הנהגה פוליטית.",
              "detailHe": null,
              "status": "historical",
              "sourceIds": [
                "s_idi_shas",
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "aryeh_deri_candidacy",
            "summaryHe": "השתייכות והובלה מתועדות במקורות; אין כאן אימות ישיר של מיקום מועמד ברשימה רשמית מלאה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_idi_shas",
              "s_fc_haredi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הנהגה פוליטית אינה אימות עצמאי של מועמדות או מיקום ברשימה.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": [
            {
              "id": "aryeh_deri_records_gap",
              "summaryHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא נכללו רשומות הצבעה אישיות ללא אסמכתה ספציפית; תפקיד ציבורי אינו הוכחת ביצוע כל הבטחות המפלגה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            }
          ]
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "shas_economy_cost_of_living_position",
              "summaryHe": "סיוע למשפחות מעוטות הכנסה והגנה על תקציבי חינוך, ישיבות ומעונות.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_haredi",
                "s_idi_shas"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "shas_economy_cost_of_living_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "shas_economy_cost_of_living_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "shas_economy_cost_of_living_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא כלכלה ויוקר המחיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא כלכלה ויוקר המחיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "security_foreign_relations": {
          "positions": [
            {
              "id": "shas_security_foreign_relations_position",
              "summaryHe": "פירוק חמאס ופירוז עזה לצד התנגדות לשליטה ישראלית בלתי מוגבלת; פרופיל המכון מתאר נכונות להסכמי שלום תוך שמירת ביטחון וללא חלוקת ירושלים.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_haredi",
                "s_idi_shas"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "shas_security_foreign_relations_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "shas_security_foreign_relations_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "shas_security_foreign_relations_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא ביטחון ויחסי חוץ.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא ביטחון ויחסי חוץ.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "institutions_democracy": {
          "positions": [
            {
              "id": "shas_institutions_democracy_position",
              "summaryHe": "תמיכה בצמצום התערבות בג״ץ בתחומי גיוס ודת; אין מצע חדש מפורט לכל סעיפי הרפורמה.",
              "detailHe": null,
              "status": "uncertain",
              "sourceIds": [
                "s_fc_haredi",
                "s_fc_judicial_survey"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "shas_institutions_democracy_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "shas_institutions_democracy_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "shas_institutions_democracy_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא מוסדות ודמוקרטיה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא מוסדות ודמוקרטיה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "religion_state": {
          "positions": [
            {
              "id": "shas_religion_state_position",
              "summaryHe": "נישואים דתיים וסמכות הרבנות, התנגדות לגיור לא-אורתודוקסי ולהרחבת תחבורה ציבורית בשבת.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "shas_religion_state_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "shas_religion_state_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "shas_religion_state_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא דת ומדינה.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא דת ומדינה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "public_services_equality": {
          "positions": [
            {
              "id": "shas_public_services_equality_position",
              "summaryHe": "הגנת תלמידי ישיבות מפני סנקציות ותמיכה בתקצוב חינוך חרדי גם בלי לימודי ליבה מלאים.",
              "detailHe": null,
              "status": "declared",
              "sourceIds": [
                "s_fc_haredi"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            }
          ],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "shas_public_services_equality_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "shas_public_services_equality_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "shas_public_services_equality_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא שירותים ציבוריים ושוויון.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא שירותים ציבוריים ושוויון.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        },
        "environment_infrastructure": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "shas_environment_infrastructure_gap_positions",
              "summaryHe": "לא אומת מקור מפורט לעמדה של ש״ס בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לעמדה של ש״ס בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "shas_environment_infrastructure_gap_promises",
              "summaryHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט להבטחה של ש״ס בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "shas_environment_infrastructure_gap_records",
              "summaryHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לביצוע או הצבעה של ש״ס בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "shas_environment_infrastructure_gap_contextualreporting",
              "summaryHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא סביבה ותשתיות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא אומת מקור מפורט לדיווח עצמאי ממוקד של ש״ס בנושא סביבה ותשתיות.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "contextualReporting"
            }
          ]
        }
      },
      "generalContext": [
        {
          "id": "shas_coverage_context",
          "summaryHe": "עמדות מוצהרות אינן הוכחת ביצוע. דירוגי השאלון הם פרשנות עריכתית למקורות, לא ציטוטים ולא סולם רשמי של המפלגה.",
          "detailHe": "נתון שלא נמצא לו מקור מתאים הוחלף בפער גלוי; אין להסיק עמדה מהשתייכות לגוש או מתמיכה בחלק אחד של שאלה מורכבת.",
          "status": "uncertain",
          "sourceIds": [],
          "missingEvidenceLabelHe": "הערת מתודולוגיה של האתר, לא טענה מפלגתית.",
          "uncertaintyLabelHe": "תיאור מיוחס למקור; אין כאן מצע 2026 מלא או אימות ביצוע.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    }
  ]
};
