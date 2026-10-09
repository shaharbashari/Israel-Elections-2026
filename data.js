"use strict";
window.ELECTION_DATA = {
  "schemaVersion": 1,
  "language": "he-IL",
  "updatedAt": "2026-10-09T10:13:35.029Z",
  "asOfDate": "2026-10-09",
  "partyOrder": "hebrew_alphabetical",
  "election": {
    "labelHe": "מידע על הבחירות לכנסת ה־26",
    "claimedScheduledDate": "2026-10-27",
    "scheduledDate": "2026-10-27",
    "scheduledDateOrigin": "unknown",
    "dateConfirmationStatus": "uncertain",
    "verifiedDate": null,
    "dateSourceIds": [
      "s_joint_court_reporting"
    ],
    "dateMissingEvidenceLabelHe": "27 באוקטובר 2026 נזכר בדיווח Jerusalem Post שנקרא; מקור מוסמך המאשר את המועד לא נקרא ישירות.",
    "listConfirmationStatus": "unverified",
    "listSourceIds": [
      "s_roster_ynet",
      "s_roster_inn"
    ],
    "listMissingEvidenceLabelHe": "מנייה מדווחת של 38 הגשות נבדקה. רשימה רשמית מלאה וסופית ופסקי הדין עצמם לא נקראו.",
    "caveats": [
      {
        "id": "e_election_roster_caveat",
        "summaryHe": "אין להציג את המנייה המדווחת כרשימה רשמית סופית או כ־38 אישורים מוסמכים.",
        "detailHe": "שמות ואותיות שנקראו במקור עיתונאי אינם שקולים לרשימת קלפי רשמית.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      {
        "id": "e_election_date_caveat",
        "summaryHe": "המועד 27 באוקטובר 2026 נזכר בדיווח Jerusalem Post על הליכי הפסילה.",
        "detailHe": "זהו מועד הנזכר בדיווח עיתונאי, לא אישור רשמי של מועד הבחירות; הוא נשאר מסויג.",
        "status": "uncertain",
        "sourceIds": [
          "s_joint_court_reporting"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      }
    ]
  },
  "coverage": {
    "descriptionHe": "38 רשימות מדווחות, כרטיס אחד לכל חיבור קלפי מדווח. זוהי מנייה רחבה שנבדקה במקורות, לא אישור רשמי לשלמות או להשתתפות סופית.",
    "partyCoverageBasis": "curated_unconfirmed",
    "listConfirmationStatus": "unverified",
    "includedPartyIds": [
      "orot_hashachar",
      "ani_veata",
      "betach",
      "beyachad",
      "beyachad_natzliach",
      "personal_security",
      "brit_olam",
      "gan_eden",
      "democrats",
      "likud",
      "miluimnikim_economic",
      "pirates",
      "haredi_public",
      "religious_zionism",
      "hakahal",
      "joint_list",
      "partnership",
      "electoral_fix",
      "utj",
      "yashar",
      "yisrael_beitenu",
      "israel_first",
      "blue_white",
      "biblical_bloc",
      "shema",
      "tekuma",
      "mishpat_tzedek",
      "noam",
      "seder_hadash",
      "otzma_yehudit",
      "amcha_israel",
      "black_color",
      "tzomet_beit_israel",
      "kol_hanashim",
      "raam",
      "shas",
      "sharshar",
      "achi"
    ],
    "officialListSourceIds": [],
    "omittedEntries": [],
    "limitations": [
      {
        "id": "e_coverage_official_gap",
        "summaryHe": "לא נקראה רשימה רשמית מלאה וסופית של כל המשתתפות.",
        "detailHe": null,
        "status": "missing",
        "sourceIds": [],
        "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      },
      {
        "id": "e_coverage_policy_gap",
        "summaryHe": "הכיסוי המדיני הוא מבחר הצהרות שנבדקו, לא כל המצעים או כל פעולות המפלגות.",
        "detailHe": null,
        "status": "missing",
        "sourceIds": [],
        "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      },
      {
        "id": "e_coverage_records_gap",
        "summaryHe": "לא נוספו רשומות ביצוע, הצבעות או חקיקה שלא נבדקו במקורן.",
        "detailHe": null,
        "status": "missing",
        "sourceIds": [],
        "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
        "uncertaintyLabelHe": null,
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": [],
        "appliesTo": "coverage"
      },
      {
        "id": "e_coverage_names_gap",
        "summaryHe": "שמות התצוגה קצרים; הנוסח המשפטי המלא ותמונות הפתקים לא אומתו.",
        "detailHe": null,
        "status": "missing",
        "sourceIds": [],
        "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
      "id": "s_roster_idi",
      "title": "בחירות 2026: רשימות ומועמדים",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://www.idi.org.il/policy/parties-and-elections/elections/2026-1/",
      "sourceType": "academic_or_civil_society",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T08:15:59.212Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "הביקורת העצמאית הקודמת קראה את פתיח הסקירה, אך לא אימתה את הטבלה המלאה. הטבלה אינה משמשת בתיקון לתמיכה בשמות, באותיות או במועד הבחירות; המנייה נשענת על שתי מניות עיתונאיות שנקראו במלואן. המקור נשמר להקשר של חיבורים בלבד, לא כאישור ועדת הבחירות. אין תאריך פרסום מאומת."
    },
    {
      "id": "s_roster_ynet",
      "title": "דיווח על הרשימות ואותיות ההצבעה לכנסת ה־26",
      "publisher": "Ynetnews",
      "url": "https://www.ynetnews.com/article/no1cetlga",
      "sourceType": "independent_reporting",
      "language": "en",
      "publicationDate": "2026-09-27",
      "retrievedAt": "2026-10-09T09:34:07.130Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראה מלוא מניית 38 הרשימות בגוף הכתבה. datePublished של NewsArticle הוא 27 בספטמבר 2026. הדיווח אינו רשומה מוסמכת; הוא מציין אישור מותנה לשתי רשימות. השמות העבריים באתר הם שמות תצוגה מקוצרים או מתורגמים, לא אימות לנוסח משפטי או לתמונת פתק."
    },
    {
      "id": "s_roster_inn",
      "title": "דיווח על הקצאת אותיות לרשימות 2026",
      "publisher": "Israel National News",
      "url": "https://www.israelnationalnews.com/news/433712",
      "sourceType": "independent_reporting",
      "language": "en",
      "publicationDate": "2026-09-27",
      "retrievedAt": "2026-10-09T09:34:07.168Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראה מלוא המנייה המפורטת הכוללת את 38 צירופי האותיות בעברית. תאריך הפרסום 27 בספטמבר 2026 מופיע בגוף וב־NewsArticle. בפתיח קיימת שגיאת רק לצד Derekh; לרשימה בראשות איזנקוט נעשה שימוש רק בשורה המפורטת דרך, ובהצלבה עם Ynetnews. אין כאן אישור רשמי, אימות לשם משפטי או צילום פתק."
    },
    {
      "id": "s_beyachad_alliance_idi",
      "title": "Together: The Bennett–Lapid joint list",
      "publisher": "המכון הישראלי לדמוקרטיה",
      "url": "https://en.idi.org.il/articles/64068",
      "sourceType": "academic_or_civil_society",
      "language": "en",
      "publicationDate": "2026-04-29",
      "retrievedAt": "2026-10-09T09:34:07.268Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו הפתיח והפסקה המזהה את בנט 2026 ויש עתיד כשותפות ברשימה ביחד. 29 באפריל 2026 מופיע בכותרת וב־datePublished של הכתבה. ההיסטוריה המפורטת לא הועתקה למאגר; זה אינו מצע של השותפות או אישור רשמי להשתתפות."
    },
    {
      "id": "s_joint_court_reporting",
      "title": "דיווח על תוצאות הליכי הפסילה ועל פרישת אבו שחאדה",
      "publisher": "The Jerusalem Post",
      "url": "https://www.jpost.com/israel-election-2026/article-910422",
      "sourceType": "independent_reporting",
      "language": "en",
      "publicationDate": "2026-10-02",
      "retrievedAt": "2026-10-09T09:34:08.587Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו אזכור הבחירות ב־27 באוקטובר ותוצאות ההליכים, לרבות ההבחנה בין פרישה לבין הכרעה בפסילה. פרסום 2 באוקטובר ועדכון 3 באוקטובר מופיעים בגוף וב־NewsArticle. זהו דיווח על פסק דין, לא פסק הדין עצמו; אינו אישור רשמי למועד ולא משמש להענקת מעמד approved."
    },
    {
      "id": "s_beyachad_religion",
      "title": "תכנית ביחד ליחסי דת ומדינה",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/religionandstate/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:34:02.974Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו בגוף המקורי סעיפים 01–07 ושאלת ביטול הרבנות: תחבורה מקומית בשבת, ברית זוגיות, כשרות, גיור אורתודוקסי ושוויון זכויות. תאריכי datePublished שונים במקטעי WebPage ו־Article, ולכן תאריך הפרסום נשאר null. הצעות בפרסום החי, לא ביצוע ולא הוכחה למצב העמוד ברגע החיתוך."
    },
    {
      "id": "s_yashar_agenda",
      "title": "עשרת הצעדים של ישר!",
      "publisher": "ישר! עם איזנקוט",
      "url": "https://yasharwitheisenkot.com/agenda_point/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:33:23.942Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקרא במקור עצמו הסעיף מחדשים את הממלכתיות, חוזרים לצבא העם, לרבות שירות לכל ושילוב חרדים וערבים במסגרות מותאמות, בראש ובראשונה בצה״ל. שם ישר! מופיע בלוגו ובתחתית, ו־og:site_name הוא ישר! עם איזנקוט. קישור הנבחרת מוביל לעמוד זיהוי שנקרא בנפרד. לא אומת תאריך פרסום; הפרסום החי אינו ארכיון של רגע החיתוך."
    },
    {
      "id": "s_yashar_team",
      "title": "הנבחרת של ישר!: יושב ראש המפלגה",
      "publisher": "ישר! עם איזנקוט",
      "url": "https://yasharwitheisenkot.com/team-member/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:36:43.758Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "העמוד נפתח בקישור הנבחרת מתוך התכנית הקיימת. נקראו הכותרת הנבחרת של ישר! והזיהוי גדי איזנקוט, יו״ר מפלגת ישר!. זהו זיהוי מפלגתי נוכחי, לא אימות ביוגרפיה, מספר מועמד, מועמדות אישית מאושרת או נוסח משפטי של הרשימה. אין תאריך פרסום מאומת או ארכיון של רגע החיתוך."
    },
    {
      "id": "s_likud_values",
      "title": "הדרך שלנו: עקרונות הליכוד",
      "publisher": "הליכוד",
      "url": "https://www.likud.org.il/#values",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:33:24.168Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקרא סעיף הדרך שלנו, ששת העמודים של הליכוד, ולא הוחלף בסעיף ההישגים: כלכלה חופשית, ירושלים וארץ ישראל, חברה ופריפריה וישראל בעולם. נתוני הישגים, תקציבים וגיוס בעמוד לא אומתו ולא הוכנסו. אין תאריך פרסום מאומת; אלה עקרונות מוצהרים בפרסום החי."
    },
    {
      "id": "s_joint_economy",
      "title": "התכנית הכלכלית־חברתית של הרשימה המשותפת",
      "publisher": "הרשימה המשותפת",
      "url": "https://jointlist.org.il/he/economic-plan/",
      "sourceType": "party_official",
      "language": "he-ar",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:34:05.382Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו בגוף התכנית הכלכלית־חברתית של הרשימה סעיפים 1–8, בעברית לצד ערבית: הוצאה, דיור, חינוך, שכר, זכויות עובדים, תקציבים, פיתוח החברה הערבית ומיסוי. לא הוחלף הסעיף המדויק בתקציר מיסוי בלבד. נתוני ההוצאה הצבאית וטענות אמפיריות אחרות לא אומתו ולא נשמרו. אין תאריך פרסום מאומת או ארכיון של רגע החיתוך."
    },
    {
      "id": "s_miluimnikim_platform",
      "title": "מצע המילואימניקים",
      "publisher": "המילואימניקים",
      "url": "https://www.themiluimnikim.org.il/platform/#platform-base",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:34:05.322Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו שלושת עקרונות הפתיחה והאזרח המשרת: חזון, סנקציות, הטבות וצעדים למימוש. זהו אתר מרכיב המילואימניקים בלבד; לא נמצא בסעיפים שנבדקו אישור לאימוץ משותף עם המפלגה הכלכלית. לא הוסקה מתכונת ממלכתית מסוימת לוועדת החקירה. אין תאריך פרסום מאומת או ארכיון של רגע החיתוך."
    },
    {
      "id": "s_amcha_foundations",
      "title": "מסמך אבני היסוד של עמך ישראל",
      "publisher": "עמך ישראל",
      "url": "https://amchaisrael.co.il/foundations",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:34:05.731Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו הסעיפים חיזוק הביטחון הלאומי באמצעות חיזוק אזורי עדיפות, אחריות משותפת — שירות, תרומה ותגמול, ומדינה מתפקדת — משילות, ממשל ומשפט. נשמרו הצעות מיוחסות בלבד, בלי רטוריקה היסטורית או טענות אמפיריות. אין תאריך פרסום מאומת או ארכיון של רגע החיתוך."
    },
    {
      "id": "s_pirates_platform",
      "title": "מצע הפיראטים",
      "publisher": "הפיראטים",
      "url": "https://piratim.org/wiki/matza/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T08:21:17.764Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "נקראו סעיפי המצע וההסבר שהטקסט נערך בוויקי מפלגתי פתוח. האתר מקושר מ־IDI. אין תאריך פרסום או החלטת אימוץ מתוארכת מאומתים; תיעוד הצהרה באתר בלבד."
    },
    {
      "id": "s_beyachad_economy",
      "title": "תכנית ביחד ליוקר המחיה",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/yokermichya/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-05-17",
      "retrievedAt": "2026-10-09T09:34:02.738Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו מה הפתרון וסעיפים 01–03 במלואם, לרבות שרשרת אספקת המזון, רשות מזון מרכזית, תמיכה ישירה וחדשנות בחקלאות לצד יבוא ומכסים. datePublished של WebPage ו־Article תואם ל־17 במאי 2026. תחזיות מחירים ונתוני שוק לא אומתו ולא נשמרו; אין ארכיון המוכיח את גרסת העמוד ברגע החיתוך."
    },
    {
      "id": "s_beyachad_health",
      "title": "תכנית ביחד למערכת הבריאות",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/health/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-09-07",
      "retrievedAt": "2026-10-09T09:34:03.119Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו מה הפתרון וסעיפים 01–02 במקור, כולל פריסה ארצית בעדיפות לפריפריה ותכנון לאומי של כוח אדם רפואי. datePublished של WebPage ו־Article תואם ל־7 בספטמבר 2026. לא אומתו נתוני מחסור, עלויות או השפעה עתידית; אין ארכיון של רגע החיתוך."
    },
    {
      "id": "s_beyachad_environment",
      "title": "תכנית ביחד להגנת הסביבה",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/enviroment/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-09-08",
      "retrievedAt": "2026-10-09T09:34:03.192Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו מה הפתרון, סעיף 01 ומבחני המוכנות, האוויר והאנרגיה, הטבע ואיכות החיים. נבדקו כל סעיפי האקלים, האנרגיה, הטבע ורשויות התחבורה המיוחסים במאגר. datePublished של WebPage ו־Article תואם ל־8 בספטמבר 2026. תחזיות תמותה, נזק ועלות לא נשמרו; אין ארכיון של רגע החיתוך."
    },
    {
      "id": "s_beyachad_housing",
      "title": "תכנית ביחד לדיור",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/housing/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-09-27",
      "retrievedAt": "2026-10-09T09:34:05.826Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "שתי הצעות הדיור נתמכו בגוף המקור בביקורת העצמאית הקודמת ולא שונו בתיקון. בתיקון נקראו מטא־נתוני WebPage ו־Article, ששניהם מציינים datePublished של 27 בספטמבר 2026. הכמויות, העלויות והתחזיות לא אומתו ולא מוצגות כעובדות; אין ארכיון של רגע החיתוך."
    },
    {
      "id": "s_beyachad_education",
      "title": "תכנית ביחד למערכת החינוך",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/education/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-06-22",
      "retrievedAt": "2026-10-09T09:34:03.035Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו הפתיח, מה הפתרון ומבחן לימודי הליבה: מימון ציבורי מותנה בלימודי ליבה מלאים. datePublished של WebPage ו־Article תואם ל־22 ביוני 2026. אין אימות לביצוע או לנתוני ההשוואה שבעמוד, ואין ארכיון של רגע החיתוך."
    },
    {
      "id": "s_beyachad_service",
      "title": "חוק המשרתים: תכנית ביחד",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/meshartim-law/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-07-29",
      "retrievedAt": "2026-10-09T09:34:02.818Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו מה הפתרון ועקרונות חוק המשרתים, במיוחד סעיף 01 על ביטול קצבאות אברך והטבות המעודדות אי־שירות. datePublished של Article ו־WebPage תואם ל־29 ביולי 2026. הכותרת חוק המשרתים אינה ראיה שההצעה נחקקה; עלויות ותחזיות לא אומתו, ואין ארכיון של רגע החיתוך."
    },
    {
      "id": "s_haredi_public_platform",
      "title": "מצע הציבור החרדי",
      "publisher": "הציבור החרדי",
      "url": "https://hatzibur-haharedi.org/%D7%9E%D7%A6%D7%A2",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T08:20:15.035Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "נקראו סעיפי עולם התורה, שירות, חינוך, דיור והכלכלה שלנו באתר המקושר מ־IDI. אין תאריך פרסום מאומת. לא הוסקה הסכמה לליבה מלאה או לגיוס כל לומדי התורה."
    },
    {
      "id": "s_noam_platform",
      "title": "העקרונות המפורסמים באתר נעם לישראל",
      "publisher": "נעם לישראל",
      "url": "https://www.noamlisrael.org.il/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": null,
      "retrievedAt": "2026-10-09T09:33:25.524Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי noam.org.il הפנה ב־302 לעמוד הציבורי הנוכחי, שנקרא ללא התחברות או עקיפת חסימה. נקראו פיצול וצמצום מערכת המשפט והעצמת הזהות היהודית: התגברות, פיצול היועמ״ש, הרבנות ושבת. ה־403 שקיבל הבודק הקודם אינו ראיה לעמדה הפוכה. אין תאריך פרסום מאומת; לא הוסקו עמדות על תחבורה בשבת, זרמי גיור או להט״ב, ואין ארכיון של רגע החיתוך."
    },
    {
      "id": "s_yisrael_beitenu_platform",
      "title": "המצע שלנו: ישראל ביתנו",
      "publisher": "ישראל ביתנו",
      "url": "https://beytenu.org.il/party-platform/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2024-08-14",
      "retrievedAt": "2026-10-09T08:23:34.216Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "אחרי שגיאת שרת ראשונית נקרא המקור הציבורי עצמו. datePublished: 14 באוגוסט 2024; dateModified: 6 באוקטובר 2026. נקראו סעיפי קווי היסוד והקטעים המפורטים בתיעוד. זהו מצע באתר כיום, לא מצע חדש שפורסם כולו ב־2026 ולא ראיה לחקיקה או לביצוע."
    },
    {
      "id": "s_beyachad_security",
      "title": "תפיסת הביטחון של ביחד",
      "publisher": "ביחד",
      "url": "https://be-yahad.org.il/plans/natsec/",
      "sourceType": "party_official",
      "language": "he",
      "publicationDate": "2026-09-24",
      "retrievedAt": "2026-10-09T09:34:02.893Z",
      "asOfDate": "2026-10-09",
      "accessNotesHe": "בתיקון העצמאי נקראו בגוף המקור קווי פעולה, סעיף 02 על פירוק חמאס מנשקו ואי־ניהול עזה, וסעיף 12 על ועדת חקירה ממלכתית. datePublished של WebPage ו־Article תואם ל־24 בספטמבר 2026. טענות על הישגי ממשלות, איומים ומספרי כוח אדם לא אומתו ולא נשמרו; אין ארכיון של רגע החיתוך."
    }
  ],
  "parties": [
    {
      "id": "orot_hashachar",
      "nameHe": "אורות השחר",
      "ballotLetters": "בקר",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_orot_hashachar_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר אורות השחר על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_orot_hashachar_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_orot_hashachar_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_orot_hashachar_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_orot_hashachar_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_orot_hashachar_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_orot_hashachar_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_orot_hashachar_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_orot_hashachar_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_orot_hashachar_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_orot_hashachar_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_orot_hashachar_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_orot_hashachar_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_orot_hashachar_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_orot_hashachar_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_orot_hashachar_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_orot_hashachar_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_orot_hashachar_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_orot_hashachar_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_orot_hashachar_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_orot_hashachar_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_orot_hashachar_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_orot_hashachar_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_orot_hashachar_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_orot_hashachar_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_orot_hashachar_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_orot_hashachar_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן בקר.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_orot_hashachar_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "ani_veata",
      "nameHe": "אני ואתה",
      "ballotLetters": "פה",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_ani_veata_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר אני ואתה על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_ani_veata_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_ani_veata_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_ani_veata_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_ani_veata_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_ani_veata_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_ani_veata_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_ani_veata_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_ani_veata_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_ani_veata_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_ani_veata_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_ani_veata_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_ani_veata_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_ani_veata_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_ani_veata_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_ani_veata_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_ani_veata_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_ani_veata_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_ani_veata_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_ani_veata_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_ani_veata_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_ani_veata_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_ani_veata_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_ani_veata_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_ani_veata_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_ani_veata_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_ani_veata_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן פה.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_ani_veata_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "betach",
      "nameHe": "בטח",
      "ballotLetters": "ז",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_betach_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר בטח על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_betach_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_betach_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_betach_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_betach_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_betach_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_betach_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_betach_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_betach_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_betach_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_betach_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_betach_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_betach_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_betach_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_betach_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_betach_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_betach_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_betach_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_betach_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_betach_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_betach_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_betach_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_betach_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_betach_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_betach_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_betach_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_betach_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ז.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_betach_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "beyachad",
      "nameHe": "ביחד",
      "ballotLetters": "רק",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [
        "בנט 2026",
        "יש עתיד"
      ],
      "identityEvidence": {
        "id": "e_beyachad_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ביחד על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו. חיבור בנט 2026 ויש עתיד נתמך גם בכתבת IDI על החיבור, לא בטבלת הרשימות.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn",
          "s_beyachad_alliance_idi"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_beyachad_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_beyachad_leader_naftali_bennett_identity",
            "summaryHe": "השם נפתלי בנט מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet",
              "s_beyachad_alliance_idi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_beyachad_leader_naftali_bennett_role",
            "summaryHe": "מדווח כעומד בראש רשימת ביחד.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet",
              "s_beyachad_alliance_idi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_beyachad_leader_naftali_bennett_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        },
        {
          "id": "yair_lapid",
          "nameHe": "יאיר לפיד",
          "identityEvidence": {
            "id": "e_beyachad_leader_yair_lapid_identity",
            "summaryHe": "השם יאיר לפיד מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_beyachad_alliance_idi",
              "s_roster_idi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_beyachad_leader_yair_lapid_role",
            "summaryHe": "מזוהה כשותף לחיבור ביחד של בנט ולפיד, לא כמיקום מאושר ברשימה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_beyachad_alliance_idi",
              "s_roster_idi"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_beyachad_leader_yair_lapid_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [
            {
              "id": "e_beyachad_competition",
              "summaryHe": "מציעה לצמצם ריכוזיות ולפרק מוקדי כוח לאורך שרשרת ייצור המזון והאספקה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_economy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_imports",
              "summaryHe": "מציעה להסיר חסמי יבוא, לאמץ תקינה אירופית ולהקים רשות מזון מרכזית.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_economy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_agriculture",
              "summaryHe": "מציעה תמיכה כספית ישירה וחדשנות בחקלאות לצד הפחתת מכסים ופתיחת יבוא.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_economy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_benefits",
              "summaryHe": "מציעה לבטל קצבאות אברך והטבות המעודדות אי־שירות, ולהעדיף בסיוע את הציבור המשרת והעובד.",
              "detailHe": "זהו סיכום הצעה באתר, לא חוק שנחקק ולא חישוב של השפעתה הכלכלית. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_service"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_housing",
              "summaryHe": "מציעה להרחיב שכירות ארוכת טווח, כולל מסלול מסובסד, ולתמרץ משכירים בחוזים ארוכים.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_housing"
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
              "id": "e_beyachad_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_beyachad_gaza",
              "summaryHe": "בתפיסת הביטחון המפורסמת היא דורשת פירוק חמאס מנשקו ומצהירה שאין עניין בניהול עזה.",
              "detailHe": "הקטע מתמקד בביטחון; אין בו מודל מפורט לגורם שינהל שירותים אזרחיים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_security"
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
              "id": "e_beyachad_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [
            {
              "id": "e_beyachad_inquiry",
              "summaryHe": "מציעה להקים ועדת חקירה ממלכתית בנוגע לאירועי שבעה באוקטובר.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_security"
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
              "id": "e_beyachad_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_beyachad_kashrut",
              "summaryHe": "מציעה להכיר בכשרות בינלאומית ולצמצם את בלעדיות הרבנות בתחום הכשרות.",
              "detailHe": "התכנית אינה מציעה לבטל את הרבנות הראשית עצמה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_religion"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_civil_union",
              "summaryHe": "מציעה ברית זוגיות אזרחית במשרד הפנים עם זכויות וחובות של זוגות נשואים.",
              "detailHe": "נשמר הניסוח ברית זוגיות; לא הוחלף בטענה על חוק נישואים אזרחיים זהה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_religion"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_conversion",
              "summaryHe": "מציעה לבזר סמכויות גיור אורתודוקסי לרבני קהילה תוך שמירת תקן הלכתי.",
              "detailHe": "אין כאן ייחוס של הכרה בגיור רפורמי או קונסרבטיבי. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_religion"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_lgbtq",
              "summaryHe": "מציעה עיגון הגנה מאפליה בשל נטייה מינית או זהות מגדרית ואיסור בחוק על טיפולי המרה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_religion"
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
              "id": "e_beyachad_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_beyachad_core",
              "summaryHe": "מציעה להתנות מימון ציבורי למוסדות חינוך בלימודי ליבה מלאים.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_education"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_health",
              "summaryHe": "מציעה מרכזי בריאות קהילתיים בפריסה ארצית, בעדיפות לפריפריה, ותכנון לאומי של כוח אדם רפואי.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_health"
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
              "id": "e_beyachad_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_beyachad_shabbat_transport",
              "summaryHe": "מציעה לאפשר לכל רשות מקומית לקבוע הפעלת תחבורה ציבורית בשבת לפי צביונה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_religion"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_urban_renewal",
              "summaryHe": "מציעה להרחיב התחדשות עירונית ולקצר תכנון באמצעות מסלול ייעודי וסמכויות מקומיות.",
              "detailHe": "אין בכך תיעוד לאיסור גורף על יישובים חדשים או בנייה בשטחים פתוחים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_housing"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_climate",
              "summaryHe": "מציעה חוק אקלים מחייב ומתוקצב ומערך לאומי לניהול סיכוני אקלים.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_environment"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_energy",
              "summaryHe": "מציעה להפסיק הפעלה שוטפת של יחידות הפחם הישנות באורות רבין ולהאיץ אנרגיה מתחדשת ואגירה.",
              "detailHe": "תועדו יעדי המפלגה; לא נבדק מצב ההפעלה בפועל. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_environment"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_nature",
              "summaryHe": "מציעה לעגן מסדרונות אקולוגיים, לשקם נחלים ולהגן על חופים ומגוון ביולוגי.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_environment"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_beyachad_transit",
              "summaryHe": "מציעה חוק רשויות תחבורה מטרופוליניות לקידום תחבורה ציבורית נגישה ואמינה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_beyachad_environment"
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
              "id": "e_beyachad_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_beyachad_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן רק.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "beyachad_natzliach",
      "nameHe": "ביחד נצליח",
      "ballotLetters": "בד",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_beyachad_natzliach_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ביחד נצליח על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_beyachad_natzliach_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_beyachad_natzliach_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_natzliach_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_natzliach_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_natzliach_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_beyachad_natzliach_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_natzliach_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_natzliach_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_natzliach_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_beyachad_natzliach_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_natzliach_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_natzliach_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_natzliach_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_beyachad_natzliach_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_natzliach_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_natzliach_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_natzliach_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_beyachad_natzliach_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_natzliach_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_natzliach_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_natzliach_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_beyachad_natzliach_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_beyachad_natzliach_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_beyachad_natzliach_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_beyachad_natzliach_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_beyachad_natzliach_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן בד.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_beyachad_natzliach_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "personal_security",
      "nameHe": "ביטחון אישי",
      "ballotLetters": "נץ",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_personal_security_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ביטחון אישי על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_personal_security_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_personal_security_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_personal_security_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_personal_security_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_personal_security_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_personal_security_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_personal_security_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_personal_security_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_personal_security_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_personal_security_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_personal_security_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_personal_security_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_personal_security_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_personal_security_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_personal_security_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_personal_security_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_personal_security_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_personal_security_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_personal_security_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_personal_security_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_personal_security_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_personal_security_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_personal_security_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_personal_security_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_personal_security_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_personal_security_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן נץ.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_personal_security_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "brit_olam",
      "nameHe": "ברית עולם",
      "ballotLetters": "זץ",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_brit_olam_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ברית עולם על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_brit_olam_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_brit_olam_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_brit_olam_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_brit_olam_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_brit_olam_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_brit_olam_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_brit_olam_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_brit_olam_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_brit_olam_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_brit_olam_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_brit_olam_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_brit_olam_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_brit_olam_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_brit_olam_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_brit_olam_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_brit_olam_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_brit_olam_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_brit_olam_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_brit_olam_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_brit_olam_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_brit_olam_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_brit_olam_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_brit_olam_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_brit_olam_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_brit_olam_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_brit_olam_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן זץ.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_brit_olam_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "gan_eden",
      "nameHe": "גן עדן",
      "ballotLetters": "ה",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_gan_eden_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר גן עדן על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_gan_eden_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_gan_eden_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_gan_eden_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_gan_eden_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_gan_eden_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_gan_eden_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_gan_eden_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_gan_eden_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_gan_eden_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_gan_eden_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_gan_eden_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_gan_eden_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_gan_eden_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_gan_eden_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_gan_eden_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_gan_eden_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_gan_eden_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_gan_eden_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_gan_eden_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_gan_eden_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_gan_eden_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_gan_eden_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_gan_eden_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_gan_eden_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_gan_eden_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_gan_eden_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ה.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_gan_eden_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "democrats",
      "nameHe": "הדמוקרטים",
      "ballotLetters": "אמת",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [
        "העבודה",
        "מרצ"
      ],
      "identityEvidence": {
        "id": "e_democrats_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הדמוקרטים על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_democrats_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_democrats_leader_yair_golan_identity",
            "summaryHe": "השם יאיר גולן מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_democrats_leader_yair_golan_role",
            "summaryHe": "מדווח כעומד בראש רשימת הדמוקרטים.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_democrats_leader_yair_golan_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_democrats_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_democrats_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_democrats_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_democrats_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_democrats_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_democrats_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_democrats_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_democrats_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_democrats_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_democrats_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_democrats_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_democrats_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_democrats_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_democrats_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_democrats_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_democrats_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_democrats_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_democrats_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_democrats_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_democrats_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_democrats_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_democrats_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_democrats_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_democrats_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_democrats_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן אמת.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_likud_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הליכוד על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_likud_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_likud_leader_benjamin_netanyahu_identity",
            "summaryHe": "השם בנימין נתניהו מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_likud_leader_benjamin_netanyahu_role",
            "summaryHe": "מדווח כעומד בראש רשימת הליכוד.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_likud_leader_benjamin_netanyahu_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "e_likud_market",
              "summaryHe": "מצהיר על תמיכה בשוק חופשי, בצמצום רגולציה ובתחרות.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_likud_values"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_likud_housing",
              "summaryHe": "מצהיר על השקעה בדיור בפריפריה.",
              "detailHe": "אין בקטע כלי סבסוד או יעד בנייה מפורט. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_likud_values"
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
              "id": "e_likud_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_likud_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_likud_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_likud_settlements",
              "summaryHe": "מצהיר על חיזוק ההתיישבות בכל חלקי הארץ.",
              "detailHe": "לא אומתה כאן תכנית מאחזים או מפת בנייה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_likud_values"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_likud_sovereignty",
              "summaryHe": "מצהיר על חיזוק הריבונות בכל חלקי הארץ.",
              "detailHe": "עיקרון כללי באתר; לא הוצגה במאגר מפה או החלטת החלת ריבונות. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_likud_values"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_likud_foreign",
              "summaryHe": "מצהיר על הרחבת מעגל השלום וחיזוק בריתות אסטרטגיות.",
              "detailHe": "אין כאן עמדה מפורטת על סיוע אמריקאי או על מדינה פלסטינית. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_likud_values"
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
              "id": "e_likud_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_likud_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_likud_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_likud_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_likud_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_likud_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_likud_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_likud_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_likud_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_likud_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_likud_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_likud_health",
              "summaryHe": "מצהיר על השקעה בבריאות בפריפריה.",
              "detailHe": "לא נשמרו טענות ההישגים המספריות המופיעות בהמשך העמוד. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_likud_values"
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
              "id": "e_likud_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_likud_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_likud_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_likud_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_likud_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_likud_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_likud_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_likud_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן מחל.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "miluimnikim_economic",
      "nameHe": "המילואימניקים והכלכלית",
      "ballotLetters": "די",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [
        "המילואימניקים",
        "המפלגה הכלכלית"
      ],
      "identityEvidence": {
        "id": "e_miluimnikim_economic_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר המילואימניקים והכלכלית על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_miluimnikim_economic_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "yoaz_hendel",
          "nameHe": "יועז הנדל",
          "identityEvidence": {
            "id": "e_miluimnikim_economic_leader_yoaz_hendel_identity",
            "summaryHe": "השם יועז הנדל מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_miluimnikim_economic_leader_yoaz_hendel_role",
            "summaryHe": "מדווח בראש המילואימניקים והכלכלית לצד ירון זליכה.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_miluimnikim_economic_leader_yoaz_hendel_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        },
        {
          "id": "yaron_zelekha",
          "nameHe": "ירון זליכה",
          "identityEvidence": {
            "id": "e_miluimnikim_economic_leader_yaron_zelekha_identity",
            "summaryHe": "השם ירון זליכה מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_miluimnikim_economic_leader_yaron_zelekha_role",
            "summaryHe": "מדווח בראש המילואימניקים והכלכלית לצד יועז הנדל.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_miluimnikim_economic_leader_yaron_zelekha_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_miluimnikim_economic_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_miluimnikim_economic_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_miluimnikim_economic_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_miluimnikim_economic_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_miluimnikim_economic_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_miluimnikim_economic_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_miluimnikim_economic_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_miluimnikim_economic_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_miluimnikim_economic_inquiry",
              "summaryHe": "מרכיב המילואימניקים קורא לחקירת הכשלים שהובילו לשבעה באוקטובר ולמלחמה.",
              "detailHe": "ייחוס למרכיב המילואימניקים בלבד. הקטע שנבדק אינו מגדיר ועדת חקירה ממלכתית במתכונת מסוימת. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_miluimnikim_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_miluimnikim_economic_coalition",
              "summaryHe": "מרכיב המילואימניקים מציע ממשלה של מפלגות שהוא מגדיר ציוניות, ללא מפלגות חרדיות או ערביות שהוא מגדיר לא־ציוניות.",
              "detailHe": "ייחוס למרכיב המילואימניקים בלבד. הסיווג מיוחס לפרסום המרכיב ואינו סיווג של המאגר. לא הוצג כאימוץ מאומת של כל הרשימה המשותפת. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_miluimnikim_platform"
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
              "id": "e_miluimnikim_economic_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_miluimnikim_economic_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_miluimnikim_economic_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_miluimnikim_economic_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_miluimnikim_economic_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_miluimnikim_economic_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_miluimnikim_economic_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_miluimnikim_economic_service",
              "summaryHe": "מרכיב המילואימניקים מציע שירות צבאי או אזרחי לכל אזרח ומסלולים מותאמים, עם סנקציות והטבות למשרתים.",
              "detailHe": "ייחוס למרכיב המילואימניקים בלבד, לא מצע משותף מאומת עם המפלגה הכלכלית. המקור מציע גם פגיעה בזכות לבחור ולהיבחר למי שלא ישרת; זו הצעה במצע, לא הדין הקיים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_miluimnikim_platform"
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
              "id": "e_miluimnikim_economic_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_miluimnikim_economic_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_miluimnikim_economic_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_miluimnikim_economic_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_miluimnikim_economic_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_miluimnikim_economic_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_miluimnikim_economic_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_miluimnikim_economic_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן די.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "pirates",
      "nameHe": "הפיראטים",
      "ballotLetters": "צף",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_pirates_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הפיראטים על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_pirates_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_pirates_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_pirates_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_pirates_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_pirates_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_pirates_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_pirates_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_pirates_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_pirates_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_pirates_transparency",
              "summaryHe": "מצהירה על שקיפות בתהליכי קבלת החלטות ובאינטרסים המשפיעים עליהם.",
              "detailHe": "תיעוד בוויקי מפלגתי פתוח, ללא החלטת אימוץ מתוארכת שנבדקה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_pirates_platform"
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
              "id": "e_pirates_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_pirates_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_pirates_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_pirates_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_pirates_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_pirates_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_pirates_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_pirates_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_pirates_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_pirates_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_pirates_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_pirates_nature",
              "summaryHe": "מצהירה על שמירת מקורות המים, הטבע והסביבה.",
              "detailHe": "עיקרון כללי; לא הוסקה ממנו התנגדות לכל יישוב חדש או תכנית בנייה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_pirates_platform"
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
              "id": "e_pirates_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_pirates_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_pirates_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_pirates_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן צף.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_pirates_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "haredi_public",
      "nameHe": "הציבור החרדי",
      "ballotLetters": "זך",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_haredi_public_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הציבור החרדי על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_haredi_public_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "e_haredi_public_market",
              "summaryHe": "מצהירה על משק חופשי, תחרות ומסים נמוכים.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_haredi_public_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_haredi_public_housing",
              "summaryHe": "מציעה לחזק רשויות מקומיות חרדיות באמצעות אזורי תעסוקה ומסחר במקום שיכונים מרוחקים ללא תעסוקה.",
              "detailHe": "לא אומתו נתוני המחירים או היקף הבנייה שבעמוד. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_haredi_public_platform"
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
              "id": "e_haredi_public_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_haredi_public_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_haredi_public_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_haredi_public_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_haredi_public_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_haredi_public_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_haredi_public_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_haredi_public_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_haredi_public_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_haredi_public_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_haredi_public_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_haredi_public_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_haredi_public_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_haredi_public_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_haredi_public_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_haredi_public_service",
              "summaryHe": "מציעה להגן על מי שמקדישים את חייהם ללימוד תורה מסנקציות, ולפתח שירות ביטחון מותאם לצעירים חרדים שאינם עושים זאת.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_haredi_public_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_haredi_public_education",
              "summaryHe": "מציעה לשמור על עצמאות החינוך החרדי, לחזק חינוך ממלכתי־חרדי ולשפר לימודי אנגלית ומתמטיקה.",
              "detailHe": "לא יוחסה לה התניה של כל תקציב בלימודי ליבה מלאים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_haredi_public_platform"
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
              "id": "e_haredi_public_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_haredi_public_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_haredi_public_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_haredi_public_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_haredi_public_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_haredi_public_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_haredi_public_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_haredi_public_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן זך.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_haredi_public_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "religious_zionism",
      "nameHe": "הציונות הדתית וזהות",
      "ballotLetters": "ט",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [
        "הציונות הדתית"
      ],
      "componentNames": [
        "הציונות הדתית",
        "זהות"
      ],
      "identityEvidence": {
        "id": "e_religious_zionism_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הציונות הדתית וזהות על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_religious_zionism_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_religious_zionism_leader_bezalel_smotrich_identity",
            "summaryHe": "השם בצלאל סמוטריץ׳ מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_religious_zionism_leader_bezalel_smotrich_role",
            "summaryHe": "מדווח בראש חיבור הציונות הדתית וזהות לצד משה פייגלין.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_religious_zionism_leader_bezalel_smotrich_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        },
        {
          "id": "moshe_feiglin",
          "nameHe": "משה פייגלין",
          "identityEvidence": {
            "id": "e_religious_zionism_leader_moshe_feiglin_identity",
            "summaryHe": "השם משה פייגלין מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_religious_zionism_leader_moshe_feiglin_role",
            "summaryHe": "מדווח כשותף בהובלת חיבור הציונות הדתית וזהות לצד בצלאל סמוטריץ׳.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_religious_zionism_leader_moshe_feiglin_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_religious_zionism_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_religious_zionism_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_religious_zionism_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_religious_zionism_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_religious_zionism_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_religious_zionism_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_religious_zionism_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_religious_zionism_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_religious_zionism_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_religious_zionism_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_religious_zionism_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_religious_zionism_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_religious_zionism_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_religious_zionism_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_religious_zionism_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_religious_zionism_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_religious_zionism_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_religious_zionism_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_religious_zionism_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_religious_zionism_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_religious_zionism_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_religious_zionism_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_religious_zionism_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_religious_zionism_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_religious_zionism_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ט.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "hakahal",
      "nameHe": "הקהל",
      "ballotLetters": "רץ",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_hakahal_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הקהל על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_hakahal_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_hakahal_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_hakahal_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_hakahal_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_hakahal_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_hakahal_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_hakahal_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_hakahal_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_hakahal_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_hakahal_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_hakahal_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_hakahal_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_hakahal_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_hakahal_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_hakahal_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_hakahal_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_hakahal_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_hakahal_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_hakahal_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_hakahal_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_hakahal_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_hakahal_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_hakahal_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_hakahal_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_hakahal_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_hakahal_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן רץ.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_hakahal_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "joint_list",
      "nameHe": "הרשימה המשותפת",
      "ballotLetters": "ודם",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [
        "חד״ש",
        "תע״ל",
        "בל״ד"
      ],
      "identityEvidence": {
        "id": "e_joint_list_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר הרשימה המשותפת על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_joint_list_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [
            {
              "id": "e_joint_list_workers",
              "summaryHe": "מצהירה על אכיפה מלאה של דיני עבודה, שכר מינימום ובטיחות לכל העובדים.",
              "detailHe": "הקטע אינו תיעוד מפורש לעמדה על זכות השביתה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_joint_list_tax",
              "summaryHe": "מציעה לצמצם הטבות מס לתאגידים גדולים ולשנות את מיסוי הרווחים הפיננסיים והכנסות העבודה.",
              "detailHe": "לא יוחסה עמדה ייעודית על מיסוי חברות הייטק. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
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
              "id": "e_joint_list_housing",
              "summaryHe": "מציעה להרחיב דיור ציבורי, לפקח על שכר דירה ולהקים בנק משכנתאות ממלכתי.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_joint_list_minimum_wage",
              "summaryHe": "מציעה להעלות את שכר המינימום ולהצמידו לשכר הממוצע במשק.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
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
              "id": "e_joint_list_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_joint_list_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_joint_list_spending",
              "summaryHe": "מציעה להפחית הוצאות צבאיות ולהפסיק מימון מלחמה והתנחלויות לטובת שירותים חברתיים.",
              "detailHe": "טענות המקור על סכום ההוצאה הצבאית לא אומתו ולא נשמרו. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
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
              "id": "e_joint_list_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_joint_list_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_joint_list_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [
            {
              "id": "e_joint_list_arab_development",
              "summaryHe": "מציעה תכניות ייעודיות לסגירת פערים בחברה הערבית, ובהן השקעה בשירותים, בתשתיות ובאזורי תעשייה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
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
              "id": "e_joint_list_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_joint_list_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_joint_list_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_joint_list_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_joint_list_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_joint_list_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_joint_list_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_joint_list_budgets",
              "summaryHe": "מציעה להשוות תקציבים ורמת שירותי חינוך, דיור ורווחה בין האזרחים.",
              "detailHe": "אין כאן הצעה מזוהה לתיקון חוק הלאום. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_joint_list_education",
              "summaryHe": "מציעה חינוך חינם מלידה ועד לימודי דוקטורט.",
              "detailHe": "אין בכך תיעוד לתנאי לימודי ליבה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_joint_economy"
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
              "id": "e_joint_list_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_joint_list_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_joint_list_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_joint_list_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_joint_list_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_joint_list_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_joint_list_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_joint_list_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ודם.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        },
        {
          "id": "e_joint_list_court_reporting",
          "summaryHe": "לפי דיווח מ־2 באוקטובר, בית המשפט העליון התיר לרשימת הרשימה המשותפת להתמודד לאחר החלטת הפסילה של ועדת הבחירות.",
          "detailHe": "זהו דיווח עיתונאי על ההליך, לא פסק דין שנקרא. מעמד הרשימה במאגר נשאר submitted ואינו approved.",
          "status": "historical",
          "sourceIds": [
            "s_joint_court_reporting"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": "2026-10-02",
          "coverageNoteHe": null,
          "contradictionIds": []
        },
        {
          "id": "e_joint_list_abu_shehadeh_withdrawal",
          "summaryHe": "לפי אותו דיווח, סאמי אבו שחאדה משך את מועמדותו, וההליך בעניינו הסתיים ללא הכרעה סופית המאשרת את פסילתו.",
          "detailHe": "מדובר במועמד יחיד, לא בפרישת בל״ד מן החיבור ולא בפסילה סופית של הרשימה.",
          "status": "historical",
          "sourceIds": [
            "s_joint_court_reporting"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": "2026-10-02",
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_joint_list_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "partnership",
      "nameHe": "השותפות לכולם",
      "ballotLetters": "ד",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_partnership_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר השותפות לכולם על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_partnership_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_partnership_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_partnership_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_partnership_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_partnership_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_partnership_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_partnership_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_partnership_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_partnership_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_partnership_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_partnership_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_partnership_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_partnership_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_partnership_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_partnership_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_partnership_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_partnership_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_partnership_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_partnership_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_partnership_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_partnership_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_partnership_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_partnership_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_partnership_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_partnership_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_partnership_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ד.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_partnership_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "electoral_fix",
      "nameHe": "התיקון לשיטת הבחירות והממשל",
      "ballotLetters": "נקי",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_electoral_fix_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר התיקון לשיטת הבחירות והממשל על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_electoral_fix_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_electoral_fix_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_electoral_fix_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_electoral_fix_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_electoral_fix_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_electoral_fix_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_electoral_fix_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_electoral_fix_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_electoral_fix_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_electoral_fix_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_electoral_fix_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_electoral_fix_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_electoral_fix_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_electoral_fix_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_electoral_fix_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_electoral_fix_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_electoral_fix_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_electoral_fix_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_electoral_fix_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_electoral_fix_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_electoral_fix_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_electoral_fix_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_electoral_fix_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_electoral_fix_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_electoral_fix_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_electoral_fix_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן נקי.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_electoral_fix_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "utj",
      "nameHe": "יהדות התורה",
      "ballotLetters": "ג",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [
        "אגודת ישראל",
        "דגל התורה"
      ],
      "identityEvidence": {
        "id": "e_utj_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר יהדות התורה על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_utj_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_utj_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_utj_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_utj_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_utj_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_utj_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_utj_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_utj_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_utj_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_utj_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_utj_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_utj_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_utj_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_utj_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_utj_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_utj_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_utj_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_utj_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_utj_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_utj_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_utj_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_utj_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_utj_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_utj_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_utj_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_utj_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ג.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_utj_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "yashar",
      "nameHe": "ישר!",
      "ballotLetters": "דרך",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [
        "ישר"
      ],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_yashar_identity",
        "summaryHe": "ישר! הוא שם המפלגה באתרה; מניות Ynetnews ו־INN מזהות את הרשימה בראשות גדי איזנקוט ובאותיות דרך.",
        "detailHe": "שם המפלגה והראשות נבדקו בפרסום המפלגה, והקישור לרשימת דרך מוצלב בדיווחים; לא אומת הנוסח המשפטי המלא או פתק רשמי. ישר ללא סימן הקריאה הוא כינוי חיפוש בלבד.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn",
          "s_yashar_agenda",
          "s_yashar_team"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_yashar_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_yashar_leader_gadi_eisenkot_identity",
            "summaryHe": "השם גדי איזנקוט מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet",
              "s_yashar_team"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_yashar_leader_gadi_eisenkot_role",
            "summaryHe": "אתר ישר! מזהה את גדי איזנקוט כיו״ר המפלגה; Ynetnews מדווח שהוא עומד בראש רשימת דרך.",
            "detailHe": "הזיהוי המפלגתי והדיווח על הרשימה מוצלבים, אך אינם אישור רשמי למועמדות אישית או למיקום ברשימת מועמדים.",
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet",
              "s_yashar_team"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_yashar_leader_gadi_eisenkot_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [
            {
              "id": "e_yashar_competition",
              "summaryHe": "מציעה לפרק מוקדי ריכוזיות, לחזק תחרות ולאמץ תקינה בינלאומית.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
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
              "id": "e_yashar_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yashar_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yashar_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_yashar_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yashar_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_yashar_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yashar_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_yashar_judiciary",
              "summaryHe": "מצהירה על שמירת מערכת משפט עצמאית, זכויות המיעוט ושלטון החוק.",
              "detailHe": "זהו עיקרון מוצהר; לא יוחס לו נוסח מסוים לוועדה לבחירת שופטים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
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
              "id": "e_yashar_inquiry",
              "summaryHe": "מציעה ועדת חקירה ממלכתית לטבח שבעה באוקטובר, לעשור שקדם לו ולניהול המלחמה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_yashar_police",
              "summaryHe": "מציעה קבינט למאבק בפשיעה המאורגנת ותכנית למיגור אלימות בחברה הערבית והכללית.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_yashar_term_limits",
              "summaryHe": "מציעה להגביל את כהונת ראש הממשלה לשתי קדנציות.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
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
              "id": "e_yashar_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yashar_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_yashar_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yashar_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_yashar_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yashar_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_yashar_service",
              "summaryHe": "מציעה חוק שירות ממלכתי לכל ושילוב חרדים וערבים במסגרות מותאמות, בראש ובראשונה בצה״ל.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_yashar_core",
              "summaryHe": "מציעה לימודי ליבה לכל ומתן עדיפות לחינוך הממלכתי.",
              "detailHe": "בקטע זה לא נקבעה התניה גורפת של כל מימון ציבורי בליבה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_yashar_health",
              "summaryHe": "מציעה השקעה בבריאות בפריפריה כחלק מצמצום פערים חברתיים וגאוגרפיים.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_yashar_agenda"
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
              "id": "e_yashar_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yashar_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yashar_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_yashar_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yashar_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_yashar_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yashar_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_yashar_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן דרך.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_yisrael_beitenu_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ישראל ביתנו על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_yisrael_beitenu_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "avigdor_lieberman",
          "nameHe": "אביגדור ליברמן",
          "identityEvidence": {
            "id": "e_yisrael_beitenu_leader_avigdor_lieberman_identity",
            "summaryHe": "השם אביגדור ליברמן מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_yisrael_beitenu_leader_avigdor_lieberman_role",
            "summaryHe": "מדווח כעומד בראש רשימת ישראל ביתנו.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_yisrael_beitenu_leader_avigdor_lieberman_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
        }
      ],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [
            {
              "id": "e_yisrael_beitenu_competition",
              "summaryHe": "מציעה להפחית רגולציה, לפרק מונופולים ולהגביר תחרות כחלק מעסקת חבילה למשק.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_pensions",
              "summaryHe": "מציעה השלמת הכנסה לגמלאים עד לגובה שכר המינימום.",
              "detailHe": "נשמרה הצעת הזכאות; לא אומתו העלות, הביצוע או הכנסה בפועל. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yisrael_beitenu_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yisrael_beitenu_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_yisrael_beitenu_gaza",
              "summaryHe": "מציעה להעביר אחריות אזרחית בעזה לגורם בינלאומי מוסכם, לסגור מעברים ולנתק אספקת מים, חשמל ודלק, תוך שמירת חופש פעולה ביטחוני.",
              "detailHe": "תיעוד של הצעה במצע, לא תיאור מצב בפועל ולא המלצה של המאגר. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_captives",
              "summaryHe": "מציעה לבסס עסקאות עתידיות להשבת שבויים ונעדרים על דו״ח שמגר.",
              "detailHe": "הדו״ח עצמו לא נקרא, ולכן לא פורטו תנאיו. אין טענה על מצב השבי כיום. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_yisrael_beitenu_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yisrael_beitenu_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [
            {
              "id": "e_yisrael_beitenu_inquiry",
              "summaryHe": "מציעה שהחלטת הממשלה הראשונה תהיה הקמת ועדת חקירה ממלכתית למחדלים שקדמו לשבעה באוקטובר.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_constitution",
              "summaryHe": "מציעה לקדם חוקה שתעגן זכויות אדם ותסדיר יחסים בין רשויות.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_term_limits",
              "summaryHe": "מציעה להגביל את כהונת ראש הממשלה.",
              "detailHe": "נשמרה ההצעה הכללית שנבדקה; לא הוסף מספר קדנציות או שנים שלא אומת בקטע הזה. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_police",
              "summaryHe": "מציעה מטה לאומי למאבק בפשע המאורגן ובפרוטקשן ובתי משפט ייעודיים לפשיעה חמורה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_detention",
              "summaryHe": "מציעה חקיקה שתאפשר מעצרים מנהליים לראשי ארגוני פשיעה ושימוש ברוגלות.",
              "detailHe": "לא הוצגה כהרחבה שכבר נחקקה או כסמכות כלפי כל אזרח. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yisrael_beitenu_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yisrael_beitenu_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_yisrael_beitenu_conversion",
              "summaryHe": "מציעה לאמץ את דו״ח ניסים בנושא הגיור.",
              "detailHe": "הדו״ח עצמו לא נבדק בביקורת זו; לא יוחס למפלגה מעבר לניסוח האימוץ שבמצע. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_marriage",
              "summaryHe": "מציעה נישואים וגירושים אזרחיים לכל אזרח.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_religious_services",
              "summaryHe": "מציעה לבטל מועצות דתיות ולהקים במקומן מחלקות עירוניות לשירותי דת.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yisrael_beitenu_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_yisrael_beitenu_service",
              "summaryHe": "מציעה חובת שירות צבאי או אזרחי לכל אזרח בגיל 18, ללא הבדל דת או מוצא, עם סנקציות על אי־שירות.",
              "detailHe": "המצע מציע גם שלילת זכויות והצבעה מעריקים. זו הצעה ארגונית שנקראה, לא תיאור הדין הקיים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
            },
            {
              "id": "e_yisrael_beitenu_core",
              "summaryHe": "מציעה לימודי ליבה לכל תלמיד ושלילת תקצוב ממוסדות שאינם עומדים בדרישות הליבה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yisrael_beitenu_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yisrael_beitenu_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "promises": [
            {
              "id": "e_yisrael_beitenu_shabbat_transport",
              "summaryHe": "מציעה תחבורה ציבורית בשבת בהתאם להחלטות הרשויות המקומיות.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
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
              "id": "e_yisrael_beitenu_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_yisrael_beitenu_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_yisrael_beitenu_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_yisrael_beitenu_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ל.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "israel_first",
      "nameHe": "ישראל תחילה",
      "ballotLetters": "י",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_israel_first_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ישראל תחילה על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_israel_first_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_israel_first_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_israel_first_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_israel_first_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_israel_first_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_israel_first_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_israel_first_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_israel_first_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_israel_first_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_israel_first_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_israel_first_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_israel_first_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_israel_first_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_israel_first_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_israel_first_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_israel_first_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_israel_first_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_israel_first_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_israel_first_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_israel_first_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_israel_first_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_israel_first_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_israel_first_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_israel_first_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_israel_first_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_israel_first_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן י.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_israel_first_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "blue_white",
      "nameHe": "כחול לבן",
      "ballotLetters": "כן",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_blue_white_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר כחול לבן על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_blue_white_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_blue_white_leader_benny_gantz_identity",
            "summaryHe": "השם בני גנץ מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_blue_white_leader_benny_gantz_role",
            "summaryHe": "מדווח כעומד בראש רשימת כחול לבן.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_blue_white_leader_benny_gantz_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_blue_white_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_blue_white_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_blue_white_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_blue_white_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_blue_white_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_blue_white_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_blue_white_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_blue_white_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_blue_white_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_blue_white_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_blue_white_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_blue_white_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_blue_white_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_blue_white_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_blue_white_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_blue_white_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_blue_white_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_blue_white_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_blue_white_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_blue_white_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_blue_white_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_blue_white_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_blue_white_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_blue_white_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_blue_white_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן כן.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "biblical_bloc",
      "nameHe": "מפלגת הגוש התנ״כי",
      "ballotLetters": "יק",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_biblical_bloc_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר מפלגת הגוש התנ״כי על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_biblical_bloc_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_biblical_bloc_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_biblical_bloc_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_biblical_bloc_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_biblical_bloc_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_biblical_bloc_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_biblical_bloc_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_biblical_bloc_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_biblical_bloc_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_biblical_bloc_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_biblical_bloc_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_biblical_bloc_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_biblical_bloc_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_biblical_bloc_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_biblical_bloc_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_biblical_bloc_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_biblical_bloc_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_biblical_bloc_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_biblical_bloc_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_biblical_bloc_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_biblical_bloc_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_biblical_bloc_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_biblical_bloc_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_biblical_bloc_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_biblical_bloc_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_biblical_bloc_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן יק.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_biblical_bloc_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "shema",
      "nameHe": "מפלגת שמע",
      "ballotLetters": "נף",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_shema_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר מפלגת שמע על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_shema_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_shema_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shema_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shema_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shema_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shema_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shema_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shema_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shema_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_shema_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shema_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shema_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shema_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shema_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shema_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shema_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shema_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shema_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shema_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shema_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shema_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shema_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shema_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shema_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shema_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_shema_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן נף.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_shema_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "tekuma",
      "nameHe": "מפלגת תקומה",
      "ballotLetters": "ק",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_tekuma_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר מפלגת תקומה על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_tekuma_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_tekuma_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tekuma_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tekuma_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tekuma_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tekuma_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tekuma_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tekuma_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tekuma_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_tekuma_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tekuma_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tekuma_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tekuma_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tekuma_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tekuma_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tekuma_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tekuma_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tekuma_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tekuma_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tekuma_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tekuma_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tekuma_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tekuma_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tekuma_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tekuma_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_tekuma_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ק.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_tekuma_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "mishpat_tzedek",
      "nameHe": "משפט צדק",
      "ballotLetters": "קץ",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_mishpat_tzedek_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר משפט צדק על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_mishpat_tzedek_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_mishpat_tzedek_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_mishpat_tzedek_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_mishpat_tzedek_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_mishpat_tzedek_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_mishpat_tzedek_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_mishpat_tzedek_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_mishpat_tzedek_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_mishpat_tzedek_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_mishpat_tzedek_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_mishpat_tzedek_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_mishpat_tzedek_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_mishpat_tzedek_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_mishpat_tzedek_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_mishpat_tzedek_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_mishpat_tzedek_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_mishpat_tzedek_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_mishpat_tzedek_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_mishpat_tzedek_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_mishpat_tzedek_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_mishpat_tzedek_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_mishpat_tzedek_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_mishpat_tzedek_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_mishpat_tzedek_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_mishpat_tzedek_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_mishpat_tzedek_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן קץ.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_mishpat_tzedek_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "noam",
      "nameHe": "נעם לישראל",
      "ballotLetters": "ני",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [
        "נעם"
      ],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_noam_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר נעם לישראל על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_noam_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_noam_leader_avi_maoz_identity",
            "summaryHe": "השם אבי מעוז מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_noam_leader_avi_maoz_role",
            "summaryHe": "מדווח כעומד בראש רשימת נעם לישראל.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_noam_leader_avi_maoz_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_noam_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_noam_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_noam_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_noam_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_noam_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_noam_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_noam_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_noam_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [
            {
              "id": "e_noam_override",
              "summaryHe": "מציעה פסקת התגברות לצמצום יכולת בג״ץ לבטל החלטות כנסת.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_noam_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_noam_attorney_general",
              "summaryHe": "מציעה לפצל את תפקיד היועץ המשפטי לממשלה ולצמצם את תפקידו לייעוץ שאינו מטיל וטו על החלטות הממשלה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_noam_platform"
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
              "id": "e_noam_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_noam_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_noam_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_noam_rabbinate",
              "summaryHe": "מצהירה על חיזוק הרבנות הראשית ועל קידום הסדרי דת ברוח יהודית.",
              "detailHe": "לא הוסקה מכך עמדה על זרמי גיור מסוימים או ביטול מסלול זוגיות מסוים. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_noam_platform"
              ],
              "missingEvidenceLabelHe": null,
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": []
            },
            {
              "id": "e_noam_shabbat",
              "summaryHe": "מצהירה על שמירת שבת כיום מנוחה במרחב הציבורי ועל הגנת עסקים ועובדים שומרי שבת.",
              "detailHe": "לא הוסקה מכך עמדה מפורטת על הפעלת אוטובוסים בשבת. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_noam_platform"
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
              "id": "e_noam_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_noam_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_noam_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_noam_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_noam_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_noam_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_noam_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_noam_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_noam_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_noam_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_noam_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_noam_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ני.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "seder_hadash",
      "nameHe": "סדר חדש",
      "ballotLetters": "קך",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_seder_hadash_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר סדר חדש על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_seder_hadash_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_seder_hadash_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_seder_hadash_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_seder_hadash_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_seder_hadash_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_seder_hadash_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_seder_hadash_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_seder_hadash_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_seder_hadash_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_seder_hadash_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_seder_hadash_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_seder_hadash_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_seder_hadash_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_seder_hadash_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_seder_hadash_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_seder_hadash_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_seder_hadash_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_seder_hadash_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_seder_hadash_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_seder_hadash_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_seder_hadash_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_seder_hadash_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_seder_hadash_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_seder_hadash_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_seder_hadash_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_seder_hadash_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן קך.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_seder_hadash_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "otzma_yehudit",
      "nameHe": "עוצמה יהודית",
      "ballotLetters": "ב",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_otzma_yehudit_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר עוצמה יהודית על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_otzma_yehudit_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
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
            "id": "e_otzma_yehudit_leader_itamar_ben_gvir_identity",
            "summaryHe": "השם איתמר בן גביר מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_otzma_yehudit_leader_itamar_ben_gvir_role",
            "summaryHe": "מדווח כעומד בראש רשימת עוצמה יהודית.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_otzma_yehudit_leader_itamar_ben_gvir_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_otzma_yehudit_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_otzma_yehudit_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_otzma_yehudit_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_otzma_yehudit_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_otzma_yehudit_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_otzma_yehudit_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_otzma_yehudit_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_otzma_yehudit_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_otzma_yehudit_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_otzma_yehudit_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_otzma_yehudit_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_otzma_yehudit_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_otzma_yehudit_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_otzma_yehudit_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_otzma_yehudit_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_otzma_yehudit_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_otzma_yehudit_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_otzma_yehudit_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_otzma_yehudit_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_otzma_yehudit_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_otzma_yehudit_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_otzma_yehudit_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_otzma_yehudit_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_otzma_yehudit_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_otzma_yehudit_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ב.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "amcha_israel",
      "nameHe": "עמך ישראל",
      "ballotLetters": "ך",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_amcha_israel_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר עמך ישראל על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_amcha_israel_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [
        {
          "id": "ofer_winter",
          "nameHe": "עופר וינטר",
          "identityEvidence": {
            "id": "e_amcha_israel_leader_ofer_winter_identity",
            "summaryHe": "השם עופר וינטר מופיע במקור המזוהה עם המסגרת.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "publicRole": {
            "id": "e_amcha_israel_leader_ofer_winter_role",
            "summaryHe": "מדווח כעומד בראש רשימת עמך ישראל.",
            "detailHe": null,
            "status": "uncertain",
            "sourceIds": [
              "s_roster_ynet"
            ],
            "missingEvidenceLabelHe": null,
            "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "summary": [],
          "candidacyStatus": "unverified",
          "candidacyEvidence": {
            "id": "e_amcha_israel_leader_ofer_winter_candidacy",
            "summaryHe": "לא נבדקה רשומה רשמית המאשרת את מועמדותו האישית או את מיקומו ברשימת המועמדים.",
            "detailHe": null,
            "status": "missing",
            "sourceIds": [],
            "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
            "uncertaintyLabelHe": null,
            "asOfDate": "2026-10-09",
            "eventDate": null,
            "coverageNoteHe": null,
            "contradictionIds": []
          },
          "documentedRecords": [],
          "gaps": []
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
              "id": "e_amcha_israel_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_amcha_israel_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_amcha_israel_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_amcha_israel_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_amcha_israel_border_settlements",
              "summaryHe": "מציעה לחזק התיישבות ואזורי עדיפות בגבולות ובאזורים מאוימים באמצעות תעסוקה, תשתיות ומשאבים מקומיים.",
              "detailHe": "הקטע שנבדק עוסק באזורי גבול; לא הוצגה כהצעה ספציפית להכשרת מאחזים ביהודה ושומרון. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_amcha_foundations"
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
              "id": "e_amcha_israel_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_amcha_israel_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_amcha_israel_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [
            {
              "id": "e_amcha_israel_police",
              "summaryHe": "מציעה לחזק אכיפה וענישה נגד פרוטקשן, נשק לא חוקי והברחות אמצעי לחימה.",
              "detailHe": "סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_amcha_foundations"
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
              "id": "e_amcha_israel_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_amcha_israel_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_amcha_israel_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_amcha_israel_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_amcha_israel_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_amcha_israel_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_amcha_israel_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_amcha_israel_service",
              "summaryHe": "מציעה שירות צבאי למתאימים ושירות לאומי משמעותי לאחרים, לצד מסלולים ייחודיים למצוינות תורנית ותגמול לפי השירות.",
              "detailHe": "לא הוסקה מהאזכור של מצוינות תורנית מתכונת פטור משפטית מסוימת. סיכום מקורי של פרסום ארגוני שנקרא, לא ציטוט מילולי ולא אימות של ביצוע.",
              "status": "declared",
              "sourceIds": [
                "s_amcha_foundations"
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
              "id": "e_amcha_israel_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_amcha_israel_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_amcha_israel_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_amcha_israel_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_amcha_israel_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_amcha_israel_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_amcha_israel_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_amcha_israel_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן ך.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": []
    },
    {
      "id": "black_color",
      "nameHe": "צבע שחור",
      "ballotLetters": "נר",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_black_color_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר צבע שחור על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_black_color_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_black_color_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_black_color_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_black_color_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_black_color_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_black_color_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_black_color_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_black_color_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_black_color_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_black_color_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_black_color_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_black_color_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_black_color_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_black_color_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_black_color_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_black_color_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_black_color_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_black_color_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_black_color_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_black_color_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_black_color_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_black_color_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_black_color_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_black_color_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_black_color_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_black_color_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן נר.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_black_color_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "tzomet_beit_israel",
      "nameHe": "צומת בית ישראל",
      "ballotLetters": "בי",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_tzomet_beit_israel_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר צומת בית ישראל על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_tzomet_beit_israel_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_tzomet_beit_israel_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tzomet_beit_israel_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tzomet_beit_israel_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tzomet_beit_israel_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tzomet_beit_israel_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tzomet_beit_israel_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tzomet_beit_israel_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tzomet_beit_israel_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_tzomet_beit_israel_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tzomet_beit_israel_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tzomet_beit_israel_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tzomet_beit_israel_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tzomet_beit_israel_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tzomet_beit_israel_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tzomet_beit_israel_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tzomet_beit_israel_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tzomet_beit_israel_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tzomet_beit_israel_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tzomet_beit_israel_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tzomet_beit_israel_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_tzomet_beit_israel_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_tzomet_beit_israel_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_tzomet_beit_israel_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_tzomet_beit_israel_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_tzomet_beit_israel_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן בי.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_tzomet_beit_israel_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "kol_hanashim",
      "nameHe": "קול הנשים",
      "ballotLetters": "קה",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_kol_hanashim_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר קול הנשים על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_kol_hanashim_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_kol_hanashim_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_kol_hanashim_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_kol_hanashim_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_kol_hanashim_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_kol_hanashim_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_kol_hanashim_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_kol_hanashim_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_kol_hanashim_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_kol_hanashim_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_kol_hanashim_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_kol_hanashim_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_kol_hanashim_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_kol_hanashim_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_kol_hanashim_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_kol_hanashim_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_kol_hanashim_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_kol_hanashim_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_kol_hanashim_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_kol_hanashim_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_kol_hanashim_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_kol_hanashim_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_kol_hanashim_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_kol_hanashim_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_kol_hanashim_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_kol_hanashim_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן קה.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_kol_hanashim_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "raam",
      "nameHe": "רע״ם",
      "ballotLetters": "עם",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [
        "הרשימה הערבית המאוחדת"
      ],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_raam_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר רע״ם על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_raam_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_raam_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_raam_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_raam_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_raam_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_raam_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_raam_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_raam_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_raam_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_raam_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_raam_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_raam_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_raam_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_raam_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_raam_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_raam_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_raam_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_raam_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_raam_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_raam_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_raam_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_raam_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_raam_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_raam_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_raam_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_raam_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן עם.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        },
        {
          "id": "e_raam_court_reporting",
          "summaryHe": "לפי דיווח מ־2 באוקטובר, בית המשפט העליון התיר לרשימת רע״ם להתמודד לאחר החלטת הפסילה של ועדת הבחירות.",
          "detailHe": "זהו דיווח עיתונאי על ההליך, לא פסק דין שנקרא. מעמד הרשימה במאגר נשאר submitted ואינו approved.",
          "status": "historical",
          "sourceIds": [
            "s_joint_court_reporting"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": "2026-10-02",
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_raam_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "shas",
      "nameHe": "ש״ס",
      "ballotLetters": "שס",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_shas_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר ש״ס על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_shas_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_shas_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shas_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shas_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shas_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shas_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shas_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shas_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shas_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_shas_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shas_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shas_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shas_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shas_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shas_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shas_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shas_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shas_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shas_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shas_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shas_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_shas_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_shas_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_shas_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_shas_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_shas_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן שס.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_shas_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "sharshar",
      "nameHe": "שרשר לאהבה ואחדות העם",
      "ballotLetters": "צדק",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_sharshar_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר שרשר לאהבה ואחדות העם על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_sharshar_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_sharshar_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_sharshar_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_sharshar_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_sharshar_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_sharshar_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_sharshar_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_sharshar_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_sharshar_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_sharshar_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_sharshar_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_sharshar_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_sharshar_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_sharshar_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_sharshar_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_sharshar_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_sharshar_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_sharshar_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_sharshar_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_sharshar_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_sharshar_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_sharshar_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_sharshar_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_sharshar_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_sharshar_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_sharshar_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן צדק.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_sharshar_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    },
    {
      "id": "achi",
      "nameHe": "תנועת אחי",
      "ballotLetters": "צבי",
      "ballotSourceIds": [
        "s_roster_ynet",
        "s_roster_inn"
      ],
      "aliases": [],
      "componentNames": [],
      "identityEvidence": {
        "id": "e_achi_identity",
        "summaryHe": "הרשימה מוצגת בשם המקוצר תנועת אחי על סמך מניות ההגשות העיתונאיות של Ynetnews ו־INN.",
        "detailHe": "שם תצוגה בעברית, שעשוי להיות תרגום או קיצור של הנוסח בדיווחים; השם המשפטי המלא ופתק רשמי לא אומתו.",
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "listStatus": "unverified",
      "listStatusEvidence": {
        "id": "e_achi_submission",
        "summaryHe": "הגשת הרשימה מדווחת במניית הרשימות; אישור סופי מטעם רשות הבחירות לא נבדק ישירות.",
        "detailHe": null,
        "status": "uncertain",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "missingEvidenceLabelHe": null,
        "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
        "asOfDate": "2026-10-09",
        "eventDate": null,
        "coverageNoteHe": null,
        "contradictionIds": []
      },
      "leaderSummaries": [],
      "topicPositions": {
        "economy_cost_of_living": {
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_achi_economy_cost_of_living_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_achi_economy_cost_of_living_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_achi_economy_cost_of_living_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_achi_economy_cost_of_living_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_achi_security_foreign_relations_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_achi_security_foreign_relations_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_achi_security_foreign_relations_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_achi_security_foreign_relations_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "positions": [],
          "promises": [],
          "records": [],
          "contextualReporting": [],
          "gaps": [
            {
              "id": "e_achi_institutions_democracy_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_achi_institutions_democracy_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_achi_institutions_democracy_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_achi_institutions_democracy_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_achi_religion_state_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_achi_religion_state_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_achi_religion_state_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_achi_religion_state_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_achi_public_services_equality_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_achi_public_services_equality_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_achi_public_services_equality_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_achi_public_services_equality_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
              "id": "e_achi_environment_infrastructure_positions_gap",
              "summaryHe": "לא צורף תיעוד בדוק: עמדות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "positions"
            },
            {
              "id": "e_achi_environment_infrastructure_promises_gap",
              "summaryHe": "לא צורף תיעוד בדוק: הבטחות.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "promises"
            },
            {
              "id": "e_achi_environment_infrastructure_records_gap",
              "summaryHe": "לא צורף תיעוד בדוק: רשומות ביצוע.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
              "uncertaintyLabelHe": null,
              "asOfDate": "2026-10-09",
              "eventDate": null,
              "coverageNoteHe": null,
              "contradictionIds": [],
              "appliesTo": "records"
            },
            {
              "id": "e_achi_environment_infrastructure_contextual_reporting_gap",
              "summaryHe": "לא צורף תיעוד בדוק: דיווח בנושא.",
              "detailHe": null,
              "status": "missing",
              "sourceIds": [],
              "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
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
          "id": "e_achi_ballot",
          "summaryHe": "אותיות ההצבעה המדווחות הן צבי.",
          "detailHe": "האותיות הוצלבו בין המנייה המפורטת בעברית ב־INN לבין התעתיק במנייה ב־Ynetnews. לא נבדק פתק רשמי.",
          "status": "uncertain",
          "sourceIds": [
            "s_roster_ynet",
            "s_roster_inn"
          ],
          "missingEvidenceLabelHe": null,
          "uncertaintyLabelHe": "הייחוס נתמך במקור שנקרא, אך לא נבדקה רשומה רשמית מוסמכת.",
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": []
        }
      ],
      "gaps": [
        {
          "id": "e_achi_leadership_gap",
          "summaryHe": "לא רוכז כאן תיעוד בדוק של הנהגה או מועמדים אישיים.",
          "detailHe": null,
          "status": "missing",
          "sourceIds": [],
          "missingEvidenceLabelHe": "לא צורף תיעוד שנבדק בביקורת זו; אין להסיק מכך עמדה.",
          "uncertaintyLabelHe": null,
          "asOfDate": "2026-10-09",
          "eventDate": null,
          "coverageNoteHe": null,
          "contradictionIds": [],
          "appliesTo": "leadership"
        }
      ]
    }
  ],
  "roster": {
    "asOfDate": "2026-10-09",
    "completeness": "partial",
    "authoritySourceIds": [],
    "enumerationSourceIds": [
      "s_roster_ynet",
      "s_roster_inn"
    ],
    "basisHe": "נקראו בשלמותן מניות 38 ההגשות של Ynetnews ו־INN והוצלבו כל צירופי האותיות; לא נדרשת טבלת IDI שלא אומתה בביקורת העצמאית. לכל רשימה מדווחת כרטיס אחד, לרבות רשימות קטנות. השמות העבריים הם שמות תצוגה מקוצרים או מתורגמים, לא נוסח משפטי מאומת. ישר! מזוהה באתר המפלגה בנפרד מן האותיות המדווחות. לא נקראה מנייה רשמית סופית ולא נבדקו פסקי הדין עצמם, ולכן הכיסוי חלקי ואין אישור סופי להשתתפות.",
    "entries": [
      {
        "id": "orot_hashachar",
        "nameHe": "אורות השחר",
        "ballotLetters": "בקר",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "ani_veata",
        "nameHe": "אני ואתה",
        "ballotLetters": "פה",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "betach",
        "nameHe": "בטח",
        "ballotLetters": "ז",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "beyachad",
        "nameHe": "ביחד",
        "ballotLetters": "רק",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "beyachad_natzliach",
        "nameHe": "ביחד נצליח",
        "ballotLetters": "בד",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "personal_security",
        "nameHe": "ביטחון אישי",
        "ballotLetters": "נץ",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "brit_olam",
        "nameHe": "ברית עולם",
        "ballotLetters": "זץ",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "gan_eden",
        "nameHe": "גן עדן",
        "ballotLetters": "ה",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "democrats",
        "nameHe": "הדמוקרטים",
        "ballotLetters": "אמת",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "likud",
        "nameHe": "הליכוד",
        "ballotLetters": "מחל",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "miluimnikim_economic",
        "nameHe": "המילואימניקים והכלכלית",
        "ballotLetters": "די",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "pirates",
        "nameHe": "הפיראטים",
        "ballotLetters": "צף",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "haredi_public",
        "nameHe": "הציבור החרדי",
        "ballotLetters": "זך",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "religious_zionism",
        "nameHe": "הציונות הדתית וזהות",
        "ballotLetters": "ט",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "hakahal",
        "nameHe": "הקהל",
        "ballotLetters": "רץ",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "joint_list",
        "nameHe": "הרשימה המשותפת",
        "ballotLetters": "ודם",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn",
          "s_joint_court_reporting"
        ],
        "noteHe": "הגשה ואותיות מדווחות; דיווח מאוחר יותר אומר שהעליון התיר השתתפות, אך פסק הדין עצמו לא נבדק."
      },
      {
        "id": "partnership",
        "nameHe": "השותפות לכולם",
        "ballotLetters": "ד",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "electoral_fix",
        "nameHe": "התיקון לשיטת הבחירות והממשל",
        "ballotLetters": "נקי",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "utj",
        "nameHe": "יהדות התורה",
        "ballotLetters": "ג",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "yashar",
        "nameHe": "ישר!",
        "ballotLetters": "דרך",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "yisrael_beitenu",
        "nameHe": "ישראל ביתנו",
        "ballotLetters": "ל",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "israel_first",
        "nameHe": "ישראל תחילה",
        "ballotLetters": "י",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "blue_white",
        "nameHe": "כחול לבן",
        "ballotLetters": "כן",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "biblical_bloc",
        "nameHe": "מפלגת הגוש התנ״כי",
        "ballotLetters": "יק",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "shema",
        "nameHe": "מפלגת שמע",
        "ballotLetters": "נף",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "tekuma",
        "nameHe": "מפלגת תקומה",
        "ballotLetters": "ק",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "mishpat_tzedek",
        "nameHe": "משפט צדק",
        "ballotLetters": "קץ",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "noam",
        "nameHe": "נעם לישראל",
        "ballotLetters": "ני",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "seder_hadash",
        "nameHe": "סדר חדש",
        "ballotLetters": "קך",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "otzma_yehudit",
        "nameHe": "עוצמה יהודית",
        "ballotLetters": "ב",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "amcha_israel",
        "nameHe": "עמך ישראל",
        "ballotLetters": "ך",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "black_color",
        "nameHe": "צבע שחור",
        "ballotLetters": "נר",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "tzomet_beit_israel",
        "nameHe": "צומת בית ישראל",
        "ballotLetters": "בי",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "kol_hanashim",
        "nameHe": "קול הנשים",
        "ballotLetters": "קה",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "raam",
        "nameHe": "רע״ם",
        "ballotLetters": "עם",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn",
          "s_joint_court_reporting"
        ],
        "noteHe": "הגשה ואותיות מדווחות; דיווח מאוחר יותר אומר שהעליון התיר השתתפות, אך פסק הדין עצמו לא נבדק."
      },
      {
        "id": "shas",
        "nameHe": "ש״ס",
        "ballotLetters": "שס",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "sharshar",
        "nameHe": "שרשר לאהבה ואחדות העם",
        "ballotLetters": "צדק",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      },
      {
        "id": "achi",
        "nameHe": "תנועת אחי",
        "ballotLetters": "צבי",
        "status": "submitted",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ],
        "noteHe": "הגשה ואותיות לפי מקורות שנקראו; אישור סופי ומסמך פתק רשמי לא נבדקו."
      }
    ],
    "exclusions": [
      {
        "nameHe": "יש עתיד",
        "reasonHe": "מרכיב בחיבור ביחד לפי המקור שנבדק; לא מוצגת כפתק נוסף לצד ביחד.",
        "sourceIds": [
          "s_beyachad_alliance_idi"
        ]
      },
      {
        "nameHe": "בנט 2026",
        "reasonHe": "המסגרת של בנט מתוארת כמחוברת ליש עתיד ברשימת ביחד; אין כרטיס נוסף לאותו חיבור.",
        "sourceIds": [
          "s_beyachad_alliance_idi"
        ]
      },
      {
        "nameHe": "חד״ש",
        "reasonHe": "מרכיב ברשימה המשותפת המדווחת, לא כרטיס קלפי נוסף במאגר.",
        "sourceIds": [
          "s_roster_idi",
          "s_joint_court_reporting"
        ]
      },
      {
        "nameHe": "תע״ל",
        "reasonHe": "מרכיב ברשימה המשותפת המדווחת, לא כרטיס קלפי נוסף במאגר.",
        "sourceIds": [
          "s_roster_idi",
          "s_joint_court_reporting"
        ]
      },
      {
        "nameHe": "בל״ד",
        "reasonHe": "מרכיב ברשימה המשותפת המדווחת; פרישת מועמד אינה כשלעצמה פרישת המרכיב.",
        "sourceIds": [
          "s_roster_idi",
          "s_joint_court_reporting"
        ]
      },
      {
        "nameHe": "זהות",
        "reasonHe": "נמנית בחיבור הציונות הדתית וזהות, ולא ככרטיס קלפי נוסף במאגר.",
        "sourceIds": [
          "s_roster_idi",
          "s_roster_ynet"
        ]
      },
      {
        "nameHe": "העבודה",
        "reasonHe": "המקור מתאר את חיבורה עם מרצ במסגרת הדמוקרטים; אינה מוצגת כפתק נוסף.",
        "sourceIds": [
          "s_roster_idi"
        ]
      },
      {
        "nameHe": "מרצ",
        "reasonHe": "המקור מתאר את חיבורה עם העבודה במסגרת הדמוקרטים; אינה מוצגת כפתק נוסף.",
        "sourceIds": [
          "s_roster_idi"
        ]
      },
      {
        "nameHe": "המפלגה הכלכלית",
        "reasonHe": "מדווחת ברשימה אחת עם המילואימניקים; אין כרטיס נוסף לאותו פתק.",
        "sourceIds": [
          "s_roster_ynet",
          "s_roster_inn"
        ]
      },
      {
        "nameHe": "סאמי אבו שחאדה — מועמד יחיד",
        "reasonHe": "לפי הדיווח משך את מועמדותו ב־2 באוקטובר; אין כאן רשימה שנפרשה או פסק דין סופי המאשר פסילה אישית.",
        "sourceIds": [
          "s_joint_court_reporting"
        ]
      }
    ]
  }
};
