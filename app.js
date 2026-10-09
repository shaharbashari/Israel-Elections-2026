(() => {
  "use strict";

  const TOPICS = [
    { id: "economy_cost_of_living", labelHe: "כלכלה ויוקר המחיה", descriptionHe: "מידע על מחירים, דיור, תעסוקה ומדיניות כלכלית" },
    { id: "security_foreign_relations", labelHe: "ביטחון ויחסי חוץ", descriptionHe: "מידע על ביטחון, מדיניות חוץ ויחסים בין־לאומיים" },
    { id: "institutions_democracy", labelHe: "מוסדות ודמוקרטיה", descriptionHe: "מידע על מוסדות ציבור, כללי ממשל ופיקוח" },
    { id: "religion_state", labelHe: "דת ומדינה", descriptionHe: "מידע על הסדרים ציבוריים בממשק בין דת למדינה" },
    { id: "public_services_equality", labelHe: "שירותים ציבוריים ושוויון", descriptionHe: "מידע על בריאות, חינוך, רווחה ונגישות לשירותים" },
    { id: "environment_infrastructure", labelHe: "סביבה ותשתיות", descriptionHe: "מידע על תחבורה, אנרגיה, סביבה ותשתיות ציבוריות" }
  ];
  const TOPIC_IDS = TOPICS.map((topic) => topic.id);
  const CATEGORIES = [
    { id: "positions", label: "עמדות מוצהרות" },
    { id: "promises", label: "הבטחות מוצהרות" },
    { id: "records", label: "מעשים ורשומות מתועדים" },
    { id: "contextualReporting", label: "דיווח והקשר" }
  ];
  const FILTERS = {
    all: { label: "כל סוגי המידע", categories: CATEGORIES.map((category) => category.id) },
    declared: { label: "עמדות והבטחות מוצהרות", categories: ["positions", "promises"] },
    documented: { label: "מעשים ורשומות מתועדים", categories: ["records"] },
    context: { label: "דיווח והקשר", categories: ["contextualReporting"] }
  };
  const EVIDENCE_LABELS = {
    declared: "עמדה או הבטחה מיוחסת",
    historical: "תיעוד היסטורי",
    missing: "מידע שלא אומת",
    uncertain: "מידע מסויג"
  };
  const LIST_LABELS = {
    confirmed: "רשימה רשמית מאומתת",
    provisional: "רשימה זמנית",
    unverified: "רשימה שלא אומתה ישירות",
    missing: "אין מידע מאומת",
    uncertain: "מעמד מסויג",
    not_on_confirmed_list: "אינה ברשימה המאומתת"
  };
  const PARTY_LIST_LABELS = {
    confirmed: "השתתפות רשמית מאושרת",
    provisional: "השתתפות זמנית",
    unverified: "השתתפות לפי מקורות, ללא בדיקה רשמית ישירה",
    uncertain: "השתתפות מסויגת",
    not_on_confirmed_list: "אינה ברשימה המאומתת"
  };
  const CANDIDACY_LABELS = {
    confirmed: "מועמדות רשמית מאושרת",
    unverified: "מועמדות שלא אומתה ישירות",
    uncertain: "מועמדות מסויגת",
    not_on_confirmed_list: "אינו ברשימת המועמדים המאומתת"
  };
  const SOURCE_TYPES = {
    electoral_authority: "רשות בחירות מוסמכת",
    party_official: "פרסום רשמי של מפלגה",
    government_record: "רשומה ממשלתית",
    parliamentary_record: "רשומה פרלמנטרית",
    judicial_record: "רשומה שיפוטית",
    independent_reporting: "דיווח עצמאי",
    academic_or_civil_society: "מחקר אקדמי או חברה אזרחית",
    other_primary: "מקור ראשוני אחר"
  };
  const SOURCE_LIMITS = {
    electoral_authority: "מקור בחירות רשמי ומוסמך.",
    party_official: "פרסום מטעם המפלגה מתעד עמדה או הבטחה, לא ביצוע או אישור הרשימה.",
    government_record: "רשומה ממשלתית רשמית מתועדת.",
    parliamentary_record: "רשומה פרלמנטרית רשמית ופרוטוקול כנסת.",
    judicial_record: "רשומה שיפוטית רשמית.",
    independent_reporting: "דיווח עיתונאי עצמאי ומיוחס.",
    academic_or_civil_society: "מחקר ומעקב חברה אזרחית.",
    other_primary: "מקור ראשוני רשמי."
  };
  const RECORD_KINDS = {
    vote: "הצבעה",
    legislation: "חקיקה",
    government_action: "פעולה ממשלתית",
    judicial_record: "רשומה שיפוטית",
    public_statement: "הצהרה פומבית",
    other: "רשומה אחרת"
  };
  const COMPARISON_LIMIT = 4;
  const CLAIMED_DATE = "2026-10-27";
  const collator = new Intl.Collator("he", { usage: "sort", sensitivity: "base" });

  const PARTY_BALLOT_LETTERS = {
    balad: "ודם",
    bennett_2026: "רק",
    beyahad: "רק",
    beyachad: "רק",
    bennett_lapid: "רק",
    democrats: "אמת",
    likud: "מחל",
    religious_zionism: "ט", // הציונות הדתית וזהות
    religious_zionism_zehut: "ט",
    hadash: "ודם",
    taal: "ודם",
    hadash_taal: "ודם",
    utj: "ג",
    yisrael_beitenu: "ל",
    blue_white: "כן", // כחול לבן (גנץ)
    yashar: "דרך", // ישר! (איזנקוט)
    eisenkot: "דרך",
    noam: "ני",
    otzma_yehudit: "ב",
    raam: "עם",
    shas: "שס"
  };

  const PARTY_ALIASES = {
    beyahad: "beyachad",
    bennett_2026: "beyachad",
    bennett_lapid: "beyachad",
    yesh_atid: "beyachad",
    eisenkot: "yashar",
    religious_zionism_zehut: "religious_zionism",
    hadash: "hadash_taal",
    taal: "hadash_taal"
  };

  function getPartyAliasId(id) {
    return PARTY_ALIASES[id] || id;
  }

  function getPartyLeaderNames(party) {
    if (!party || !party.leaderSummaries || !party.leaderSummaries.length) return "";
    return party.leaderSummaries
      .filter((leader) => leader.id !== "moshe_gafni" && (party.id !== "likud" || leader.id === "benjamin_netanyahu"))
      .map((leader) => leader.nameHe).filter(Boolean).join(", ");
  }

  function hasRatedStance(stance) {
    return Boolean(stance && Number.isInteger(stance.val) && stance.val >= -2 && stance.val <= 2 && stance.status !== "missing");
  }

  const state = {
    step: 1,
    topics: new Set(TOPIC_IDS),
    evidence: "all",
    depth: "overview",
    search: "",
    comparison: new Set(),
    showingResults: false
  };

  let research = null;
  let researchProblems = [];
  let allParties = [];
  let partiesById = new Map();
  let leadersById = new Map();
  let sourcesById = new Map();
  let evidenceById = new Map();
  let topicsById = new Map(TOPICS.map((topic) => [topic.id, topic]));
  let announcementTimer = null;
  const dialogTriggers = new WeakMap();
  const ui = {};

  function publicSourceURL(value) {
    if (typeof value !== "string" || !/^https?:\/\//i.test(value) || /[\s\u0000-\u001f\u007f\\]/u.test(value)) return null;
    try {
      const url = new URL(value);
      if (!["http:", "https:"].includes(url.protocol) || url.username || url.password) return null;
      const host = url.hostname.toLowerCase().replace(/\.$/u, "");
      if (!host || /(?:^|\.)(?:localhost|local|lan|internal|test|invalid|example|onion)$/u.test(host)) return null;
      if (host.startsWith("[")) {
        const address = host.slice(1, -1);
        if (!/^[23][0-9a-f]{3}:/u.test(address) || /^2001:db8:/u.test(address) || address.includes(".")) return null;
      } else if (/^\d+\.\d+\.\d+\.\d+$/u.test(host)) {
        const [a, b, c] = host.split(".").map(Number);
        if (a === 0 || a === 10 || a === 127 || a >= 224 ||
          (a === 100 && b >= 64 && b <= 127) ||
          (a === 169 && b === 254) || (a === 172 && b >= 16 && b <= 31) ||
          (a === 192 && (b === 168 || b === 0 || (b === 88 && c === 99))) ||
          (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) ||
          (a === 203 && b === 0 && c === 113)) return null;
      } else if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z](?:[a-z0-9-]{0,61}[a-z0-9])?$/u.test(host)) {
        return null;
      }
      return url.href;
    } catch {
      return null;
    }
  }

  function validDate(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}$/u.test(value) || value.startsWith("0000")) return false;
    const date = new Date(`${value}T00:00:00Z`);
    return Number.isFinite(date.getTime()) && date.toISOString().slice(0, 10) === value;
  }

  function validTimestamp(value) {
    if (typeof value !== "string" || !/^\d{4}-\d{2}-\d{2}T(?:[01]\d|2[0-3]):[0-5]\d:[0-5]\d(?:\.\d+)?(?:Z|[+-](?:0\d|1[0-4]):[0-5]\d)$/u.test(value)) return false;
    if (/[+-]14:(?!00)/u.test(value)) return false;
    return validDate(value.slice(0, 10)) && Number.isFinite(Date.parse(value));
  }

  function validateResearch(data) {
    const problems = [];
    const sourceIndex = new Map();
    const evidenceIndex = new Map();
    const partyIds = new Set();
    const leaderIds = new Set();
    const sourceReferences = [];
    const contradictions = [];
    const authoritativeChecks = [];
    const evidenceFields = [
      "id", "summaryHe", "detailHe", "status", "sourceIds", "missingEvidenceLabelHe",
      "uncertaintyLabelHe", "asOfDate", "eventDate", "coverageNoteHe", "contradictionIds"
    ];
    const evidenceOptional = ["recordKind", "attributionHe", "dateUncertaintyLabelHe", "appliesTo"];
    const gapTargets = [...CATEGORIES.map((category) => category.id), "identity", "leadership", "candidacy", "party_list", "election_date", "coverage"];
    const nonempty = (value) => typeof value === "string" && value.trim().length > 0;
    const safeArray = (value) => Array.isArray(value) ? value : [];
    const problem = (path, message) => {
      if (problems.length < 100) problems.push(`${path}: ${message}`);
    };
    const fields = (value, required, optional, path) => {
      if (!value || typeof value !== "object" || Array.isArray(value)) {
        problem(path, "נדרש אובייקט נתונים");
        return false;
      }
      required.forEach((key) => {
        if (!Object.prototype.hasOwnProperty.call(value, key)) problem(`${path}.${key}`, "שדה נדרש חסר");
      });
      Object.keys(value).forEach((key) => {
        if (!required.includes(key) && !optional.includes(key)) problem(`${path}.${key}`, "שדה שאינו מורשה במתכונת המחקר");
      });
      return true;
    };
    const text = (value, path, nullable = false) => {
      if ((nullable && value === null) || (typeof value === "string" && (nullable || nonempty(value)))) return;
      problem(path, nullable ? "נדרש טקסט או null" : "נדרש טקסט שאינו ריק");
    };
    const choice = (value, choices, path) => {
      if (!choices.includes(value)) problem(path, "ערך שאינו מורשה");
    };
    const date = (value, path, nullable = false) => {
      if (!(nullable && value === null) && !validDate(value)) problem(path, "נדרש תאריך לוח שנה תקין");
    };
    const timestamp = (value, path) => {
      if (!validTimestamp(value)) problem(path, "נדרש זמן ISO תקין עם אזור זמן");
    };
    const id = (value, path) => {
      if (typeof value !== "string" || !/^[a-z][a-z0-9_-]*$/u.test(value)) {
        problem(path, "מזהה לא תקין");
        return false;
      }
      return true;
    };
    const array = (value, path, visit) => {
      if (!Array.isArray(value)) {
        problem(path, "נדרשת רשימה");
        return;
      }
      value.forEach((entry, index) => visit(entry, `${path}[${index}]`));
    };
    const ids = (value, path, references = true) => {
      const seen = new Set();
      array(value, path, (entry, entryPath) => {
        if (id(entry, entryPath)) {
          if (seen.has(entry)) problem(entryPath, "הפניה כפולה");
          seen.add(entry);
          if (references) sourceReferences.push([entry, entryPath]);
        }
      });
    };
    const uniqueId = (value, seen, path) => {
      if (!id(value, path)) return;
      if (seen.has(value)) problem(path, "מזהה כפול");
      seen.add(value);
    };
    const evidence = (entry, path, kind = "evidence") => {
      if (!fields(entry, evidenceFields, evidenceOptional, path)) return;
      if (id(entry.id, `${path}.id`)) {
        if (evidenceIndex.has(entry.id)) problem(`${path}.id`, "מזהה תיעוד כפול");
        else evidenceIndex.set(entry.id, entry);
      }
      text(entry.summaryHe, `${path}.summaryHe`);
      ["detailHe", "missingEvidenceLabelHe", "uncertaintyLabelHe", "coverageNoteHe"].forEach((key) => text(entry[key], `${path}.${key}`, true));
      choice(entry.status, Object.keys(EVIDENCE_LABELS), `${path}.status`);
      date(entry.asOfDate, `${path}.asOfDate`);
      date(entry.eventDate, `${path}.eventDate`, true);
      ids(entry.sourceIds, `${path}.sourceIds`);
      ids(entry.contradictionIds, `${path}.contradictionIds`, false);
      safeArray(entry.contradictionIds).forEach((reference) => contradictions.push([entry.id, reference, `${path}.contradictionIds`]));
      const hasSources = safeArray(entry.sourceIds).length > 0;
      if (!hasSources && !nonempty(entry.missingEvidenceLabelHe)) problem(path, "נדרשים מקורות או תווית פער מפורשת");
      if (["declared", "historical"].includes(entry.status) && !hasSources) problem(path, "הצהרה ותיעוד היסטורי דורשים מקור");
      if (entry.status === "missing" && !nonempty(entry.missingEvidenceLabelHe)) problem(path, "חסר מידע ללא תווית פער");
      if (entry.status === "uncertain" && !nonempty(entry.uncertaintyLabelHe)) problem(path, "אי־ודאות ללא תווית");
      if ("recordKind" in entry) choice(entry.recordKind, Object.keys(RECORD_KINDS), `${path}.recordKind`);
      if ("attributionHe" in entry) text(entry.attributionHe, `${path}.attributionHe`);
      if ("dateUncertaintyLabelHe" in entry) text(entry.dateUncertaintyLabelHe, `${path}.dateUncertaintyLabelHe`, true);
      if ("appliesTo" in entry) choice(entry.appliesTo, gapTargets, `${path}.appliesTo`);
      if (kind === "record") {
        ["recordKind", "attributionHe", "dateUncertaintyLabelHe"].forEach((key) => {
          if (!(key in entry)) problem(`${path}.${key}`, "שדה רשומה נדרש חסר");
        });
        choice(entry.status, ["historical", "uncertain"], `${path}.status`);
        if (!hasSources) problem(path, "רשומה דורשת מקור");
        if (entry.eventDate === null && !nonempty(entry.dateUncertaintyLabelHe)) problem(path, "רשומה ללא מועד דורשת הסתייגות תאריך");
        if (validDate(entry.eventDate) && validDate(entry.asOfDate) && entry.eventDate > entry.asOfDate) problem(path, "אירוע עתידי אינו רשומה שבוצעה");
      }
      if (kind === "gap") {
        choice(entry.status, ["missing"], `${path}.status`);
        choice(entry.appliesTo, gapTargets, `${path}.appliesTo`);
      }
      if (kind === "declaration") choice(entry.status, ["declared", "uncertain", "missing"], `${path}.status`);
    };
    const evidenceArray = (value, path, kind = "evidence") => array(value, path, (entry, entryPath) => evidence(entry, entryPath, kind));
    const confirmation = (status, entry, path) => {
      if (["confirmed", "not_on_confirmed_list"].includes(status)) {
        authoritativeChecks.push([safeArray(entry && entry.sourceIds), path]);
        if (status === "not_on_confirmed_list" && (!data.election || data.election.listConfirmationStatus !== "confirmed")) {
          problem(path, "קביעה על אי־הופעה דורשת רשימה רשמית מלאה ומאומתת");
        }
      }
    };
    const leader = (entry, path) => {
      if (!fields(entry, ["id", "nameHe", "identityEvidence", "publicRole", "summary", "candidacyStatus", "candidacyEvidence", "documentedRecords", "gaps"], [], path)) return;
      uniqueId(entry.id, leaderIds, `${path}.id`);
      text(entry.nameHe, `${path}.nameHe`);
      evidence(entry.identityEvidence, `${path}.identityEvidence`);
      evidence(entry.publicRole, `${path}.publicRole`);
      evidenceArray(entry.summary, `${path}.summary`);
      choice(entry.candidacyStatus, Object.keys(CANDIDACY_LABELS), `${path}.candidacyStatus`);
      evidence(entry.candidacyEvidence, `${path}.candidacyEvidence`);
      confirmation(entry.candidacyStatus, entry.candidacyEvidence, `${path}.candidacyEvidence`);
      evidenceArray(entry.documentedRecords, `${path}.documentedRecords`, "record");
      evidenceArray(entry.gaps, `${path}.gaps`, "gap");
    };
    const party = (entry, path) => {
      if (!fields(entry, ["id", "nameHe", "identityEvidence", "listStatus", "listStatusEvidence", "leaderSummaries", "topicPositions", "generalContext", "gaps"], ["ballotLetters", "bloc"], path)) return;
      uniqueId(entry.id, partyIds, `${path}.id`);
      text(entry.nameHe, `${path}.nameHe`);
      if ("ballotLetters" in entry) text(entry.ballotLetters, `${path}.ballotLetters`, true);
      if ("bloc" in entry) text(entry.bloc, `${path}.bloc`, true);
      evidence(entry.identityEvidence, `${path}.identityEvidence`);
      choice(entry.listStatus, Object.keys(PARTY_LIST_LABELS), `${path}.listStatus`);
      evidence(entry.listStatusEvidence, `${path}.listStatusEvidence`);
      confirmation(entry.listStatus, entry.listStatusEvidence, `${path}.listStatusEvidence`);
      array(entry.leaderSummaries, `${path}.leaderSummaries`, leader);
      evidenceArray(entry.generalContext, `${path}.generalContext`);
      evidenceArray(entry.gaps, `${path}.gaps`, "gap");
      if (safeArray(entry.leaderSummaries).length === 0 && !safeArray(entry.gaps).some((gap) => gap && gap.appliesTo === "leadership" && gap.status === "missing")) {
        problem(path, "אין פרופילים ואין פער מפורש בקטגוריית מנהיגות");
      }
      if (!fields(entry.topicPositions, TOPIC_IDS, [], `${path}.topicPositions`)) return;
      TOPIC_IDS.forEach((topicId) => {
        const bucket = entry.topicPositions[topicId];
        const bucketPath = `${path}.topicPositions.${topicId}`;
        if (!fields(bucket, [...CATEGORIES.map((category) => category.id), "gaps"], [], bucketPath)) return;
        evidenceArray(bucket.gaps, `${bucketPath}.gaps`, "gap");
        CATEGORIES.forEach((category) => {
          const kind = category.id === "records" ? "record" : ["positions", "promises"].includes(category.id) ? "declaration" : "evidence";
          evidenceArray(bucket[category.id], `${bucketPath}.${category.id}`, kind);
          if (safeArray(bucket[category.id]).length === 0 && !safeArray(bucket.gaps).some((gap) => gap && gap.appliesTo === category.id && gap.status === "missing")) {
            problem(`${bucketPath}.${category.id}`, "קטגוריה ריקה ללא פער ייעודי");
          }
        });
      });
    };

    if (!fields(data, ["schemaVersion", "language", "updatedAt", "asOfDate", "partyOrder", "election", "coverage", "topics", "sources", "parties"], [], "research")) {
      return { valid: false, problems, evidenceIndex };
    }
    choice(data.schemaVersion, [1], "research.schemaVersion");
    choice(data.language, ["he-IL"], "research.language");
    choice(data.partyOrder, ["hebrew_alphabetical"], "research.partyOrder");
    timestamp(data.updatedAt, "research.updatedAt");
    date(data.asOfDate, "research.asOfDate");
    const topicIds = new Set();
    array(data.topics, "research.topics", (entry, path) => {
      if (!fields(entry, ["id", "labelHe", "descriptionHe"], [], path)) return;
      choice(entry.id, TOPIC_IDS, `${path}.id`);
      uniqueId(entry.id, topicIds, `${path}.id`);
      text(entry.labelHe, `${path}.labelHe`);
      text(entry.descriptionHe, `${path}.descriptionHe`);
    });
    if (safeArray(data.topics).length !== 6 || TOPIC_IDS.some((topicId) => !topicIds.has(topicId))) problem("research.topics", "נדרשים בדיוק ששת נושאי החוזה");
    array(data.sources, "research.sources", (entry, path) => {
      if (!fields(entry, ["id", "title", "publisher", "url", "sourceType", "publicationDate", "retrievedAt", "asOfDate", "language", "accessNotesHe"], [], path)) return;
      if (id(entry.id, `${path}.id`)) {
        if (sourceIndex.has(entry.id)) problem(`${path}.id`, "מזהה מקור כפול");
        else sourceIndex.set(entry.id, entry);
      }
      ["title", "publisher", "language"].forEach((key) => text(entry[key], `${path}.${key}`));
      if (!publicSourceURL(entry.url)) problem(`${path}.url`, "נדרש קישור HTTP/HTTPS ציבורי ללא פרטי גישה");
      choice(entry.sourceType, Object.keys(SOURCE_TYPES), `${path}.sourceType`);
      date(entry.publicationDate, `${path}.publicationDate`, true);
      timestamp(entry.retrievedAt, `${path}.retrievedAt`);
      date(entry.asOfDate, `${path}.asOfDate`);
      text(entry.accessNotesHe, `${path}.accessNotesHe`, true);
    });
    array(data.parties, "research.parties", party);
    const election = data.election;
    if (fields(election, ["labelHe", "claimedScheduledDate", "scheduledDate", "scheduledDateOrigin", "dateConfirmationStatus", "verifiedDate", "dateSourceIds", "dateMissingEvidenceLabelHe", "listConfirmationStatus", "listSourceIds", "listMissingEvidenceLabelHe", "caveats"], [], "research.election")) {
      text(election.labelHe, "research.election.labelHe");
      choice(election.claimedScheduledDate, [CLAIMED_DATE], "research.election.claimedScheduledDate");
      date(election.scheduledDate, "research.election.scheduledDate", true);
      date(election.verifiedDate, "research.election.verifiedDate", true);
      choice(election.scheduledDateOrigin, ["user_claim", "authoritative_source", "unknown"], "research.election.scheduledDateOrigin");
      choice(election.dateConfirmationStatus, ["confirmed", "unverified_user_claim", "missing", "uncertain"], "research.election.dateConfirmationStatus");
      choice(election.listConfirmationStatus, ["confirmed", "provisional", "unverified", "missing", "uncertain"], "research.election.listConfirmationStatus");
      ids(election.dateSourceIds, "research.election.dateSourceIds");
      ids(election.listSourceIds, "research.election.listSourceIds");
      text(election.dateMissingEvidenceLabelHe, "research.election.dateMissingEvidenceLabelHe", true);
      text(election.listMissingEvidenceLabelHe, "research.election.listMissingEvidenceLabelHe", true);
      evidenceArray(election.caveats, "research.election.caveats");
      if (safeArray(election.caveats).length === 0) problem("research.election.caveats", "נדרשת הסתייגות בחירות מפורשת");
      if (election.dateConfirmationStatus === "confirmed") {
        if (!validDate(election.verifiedDate) || election.scheduledDate !== election.verifiedDate || election.scheduledDateOrigin !== "authoritative_source") {
          problem("research.election", "מועד מאומת דורש תאריך רשמי עקבי");
        }
        authoritativeChecks.push([safeArray(election.dateSourceIds), "research.election.dateSourceIds"]);
      } else {
        if (election.verifiedDate !== null || !nonempty(election.dateMissingEvidenceLabelHe)) problem("research.election", "מועד לא מאומת דורש verifiedDate=null והסתייגות");
      }
      if (election.dateConfirmationStatus === "unverified_user_claim" && (election.scheduledDate !== CLAIMED_DATE || election.scheduledDateOrigin !== "user_claim")) {
        problem("research.election", "יש לשמור את המועד שנמסר כטענה לא מאומתת");
      }
      if (election.listConfirmationStatus === "confirmed") authoritativeChecks.push([safeArray(election.listSourceIds), "research.election.listSourceIds"]);
      else if (!nonempty(election.listMissingEvidenceLabelHe)) problem("research.election", "רשימות לא מאומתות דורשות הסתייגות נפרדת");
    }
    const coverage = data.coverage;
    if (fields(coverage, ["descriptionHe", "partyCoverageBasis", "listConfirmationStatus", "includedPartyIds", "officialListSourceIds", "omittedEntries", "limitations"], [], "research.coverage")) {
      text(coverage.descriptionHe, "research.coverage.descriptionHe");
      choice(coverage.partyCoverageBasis, ["confirmed_official_list", "provisional_official_list", "curated_unconfirmed"], "research.coverage.partyCoverageBasis");
      choice(coverage.listConfirmationStatus, ["confirmed", "provisional", "unverified", "missing", "uncertain"], "research.coverage.listConfirmationStatus");
      ids(coverage.includedPartyIds, "research.coverage.includedPartyIds", false);
      ids(coverage.officialListSourceIds, "research.coverage.officialListSourceIds");
      evidenceArray(coverage.omittedEntries, "research.coverage.omittedEntries");
      evidenceArray(coverage.limitations, "research.coverage.limitations");
      if (safeArray(coverage.limitations).length === 0) problem("research.coverage.limitations", "נדרשת מגבלת כיסוי מפורשת");
      const included = new Set(safeArray(coverage.includedPartyIds));
      if (included.size !== partyIds.size || [...partyIds].some((partyId) => !included.has(partyId))) problem("research.coverage.includedPartyIds", "הכיסוי אינו תואם לרשימות שבמאגר");
      if (!election || coverage.listConfirmationStatus !== election.listConfirmationStatus) problem("research.coverage.listConfirmationStatus", "מעמד הרשימות חייב להיות עקבי עם סעיף הבחירות");
      if (["confirmed_official_list", "provisional_official_list"].includes(coverage.partyCoverageBasis)) {
        const expected = coverage.partyCoverageBasis === "confirmed_official_list" ? "confirmed" : "provisional";
        if (coverage.listConfirmationStatus !== expected) problem("research.coverage", "בסיס כיסוי רשמי אינו תואם למעמד האימות");
        authoritativeChecks.push([safeArray(coverage.officialListSourceIds), "research.coverage.officialListSourceIds"]);
      }
    }
    sourceReferences.forEach(([reference, path]) => {
      if (!sourceIndex.has(reference)) problem(path, "הפניה למקור שאינו קיים");
    });
    contradictions.forEach(([origin, reference, path]) => {
      if (origin === reference || !evidenceIndex.has(reference)) problem(path, "הפניית סתירה אינה נפתרת או מפנה לעצמה");
    });
    authoritativeChecks.forEach(([references, path]) => {
      if (!references.some((reference) => sourceIndex.get(reference)?.sourceType === "electoral_authority")) {
        problem(path, "אימות רשמי דורש מקור רשות בחירות מוסמכת");
      }
    });
    return { valid: problems.length === 0, problems, evidenceIndex };
  }

  function normaliseName(value) {
    return String(value).normalize("NFKC").toLocaleLowerCase("he-IL")
      .replace(/\p{M}/gu, "").replace(/[\u05f3\u2018\u2019\u02bc]/gu, "'")
      .replace(/[\u05f4\u201c\u201d]/gu, '"').replace(/\s+/gu, " ").trim();
  }

  function canonicalOrder(parties) {
    return [...parties].sort((a, b) => {
      const nameOrder = collator.compare(a.nameHe.normalize("NFKC"), b.nameHe.normalize("NFKC"));
      return nameOrder || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    });
  }

  function updateSelection(selection, id) {
    if (selection.has(id)) {
      selection.delete(id);
      return "removed";
    }
    if (selection.size >= COMPARISON_LIMIT) return "blocked";
    selection.add(id);
    return "added";
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function paragraph(parent, text, className) {
    if (typeof text === "string" && text.length) parent.append(element("p", className, text));
  }

  function button(label, action, className = "button button--quiet") {
    const node = element("button", className, label);
    node.type = "button";
    node.dataset.action = action;
    return node;
  }

  function badge(status, label) {
    const node = element("span", "status-badge", label);
    node.dataset.status = status;
    return node;
  }

  function focus(node) {
    if (node && node.isConnected && !node.closest("[hidden]")) node.focus();
  }

  function announce(message) {
    window.clearTimeout(announcementTimer);
    ui.liveStatus.textContent = "";
    announcementTimer = window.setTimeout(() => {
      ui.liveStatus.textContent = message;
    }, 40);
  }

  function formattedDate(value) {
    if (!validDate(value)) return "לא ידוע";
    return new Intl.DateTimeFormat("he-IL", { year: "numeric", month: "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
  }

  function timeNode(value, timestamp = false) {
    const node = element("time");
    node.dateTime = value;
    if (timestamp) {
      const isolated = element("bdi", "", value);
      isolated.dir = "ltr";
      node.append(isolated);
    } else {
      node.textContent = formattedDate(value);
    }
    return node;
  }

  function definition(list, label, value) {
    const term = element("dt", "", label);
    const description = element("dd");
    if (value && typeof value === "object") description.append(value);
    else description.textContent = String(value);
    list.append(term, description);
  }

  function caveat(parent, label, value) {
    if (typeof value !== "string" || !value.length) return;
    const note = element("p");
    note.append(element("strong", "", `${label}: `), document.createTextNode(value));
    parent.append(note);
  }

  function sourceControl(sourceIds, context, evidenceId = null) {
    const count = sourceIds.length;
    const label = count === 0 ? "מקורות והערות · אין מקור זמין" : count === 1 ? "הפניה למקור והערות" : `${count} הפניות למקורות והערות`;
    const control = button(label, "sources", "button button--quiet source-button");
    control.dataset.sourceIds = sourceIds.join(" ");
    control.dataset.sourceContext = context;
    if (evidenceId) control.dataset.evidenceId = evidenceId;
    control.setAttribute("aria-label", `מקורות והערות: ${context}`);
    return control;
  }

  function renderEvidence(item, options = {}) {
    const { notesOnly = false, includeContradictions = true, includeSourceControls = true } = options;
    const article = element("article", "evidence-item");
    article.dataset.evidenceId = item.id;
    article.append(badge(item.status, EVIDENCE_LABELS[item.status]));
    if (!notesOnly) {
      paragraph(article, item.summaryHe);
      if (state.depth === "detail") paragraph(article, item.detailHe);
    }
    caveat(article, "פער בתיעוד", item.missingEvidenceLabelHe);
    caveat(article, "הסתייגות", item.uncertaintyLabelHe);
    caveat(article, "הקשר", item.coverageNoteHe);
    caveat(article, "מועד רשומה", item.dateUncertaintyLabelHe);
    if (item.attributionHe) caveat(article, "ייחוס", item.attributionHe);
    const metadata = element("dl");
    definition(metadata, "נכון ל־", timeNode(item.asOfDate));
    if (item.eventDate) definition(metadata, "מועד האירוע", timeNode(item.eventDate));
    else if (item.recordKind) definition(metadata, "מועד האירוע", "לא אומת מועד מדויק");
    if (item.recordKind) definition(metadata, "סוג הרשומה", RECORD_KINDS[item.recordKind]);
    if (state.depth === "detail") definition(metadata, "מזהה תיעוד", item.id);
    if (!includeSourceControls) definition(metadata, "מזהי המקורות התומכים", item.sourceIds.length ? item.sourceIds.join(", ") : "אין מקור מאומת");
    article.append(metadata);
    if (includeContradictions && item.contradictionIds.length) {
      const contradictions = element("aside", "notice notice--warning");
      paragraph(contradictions, "דיווחים שונים והקשר נוסף מן המאגר");
      item.contradictionIds.forEach((id) => {
        const related = evidenceById.get(id);
        if (related) contradictions.append(renderEvidence(related, { includeContradictions: false, includeSourceControls }));
      });
      article.append(contradictions);
    }
    if (includeSourceControls) article.append(sourceControl(item.sourceIds, item.summaryHe, item.id));
    return article;
  }

  function evidenceSection(title, items, headingLevel = 4) {
    const section = element("section", "profile-section");
    section.append(element(`h${headingLevel}`, "", title));
    items.forEach((item) => section.append(renderEvidence(item)));
    return section;
  }

  function renderTopicBucket(party, topicId) {
    const topic = topicsById.get(topicId);
    const bucket = party.topicPositions[topicId];
    const section = element("section", "profile-section");
    section.dataset.topicId = topicId;
    section.append(element("h4", "", topic.labelHe));
    if (state.depth === "detail") paragraph(section, topic.descriptionHe, "section-copy");
    CATEGORIES.forEach((category) => {
      const categorySection = element("section");
      categorySection.dataset.category = category.id;
      categorySection.append(element("h5", "", category.label));
      const included = FILTERS[state.evidence].categories.includes(category.id);
      if (!included && bucket[category.id].length) {
        paragraph(categorySection, "התוכן אינו מוצג בסוג המידע שנבחר; מעמד הראיות, ההסתייגויות והמקורות נשמרים.", "section-copy");
      }
      bucket[category.id].forEach((item) => categorySection.append(renderEvidence(item, { notesOnly: !included })));
      bucket.gaps.filter((gap) => gap.appliesTo === category.id).forEach((gap) => categorySection.append(renderEvidence(gap)));
      section.append(categorySection);
    });
    const extraGaps = bucket.gaps.filter((gap) => !CATEGORIES.some((category) => category.id === gap.appliesTo));
    if (extraGaps.length) section.append(evidenceSection("חוסרים נוספים בנושא", extraGaps, 5));
    return section;
  }

  function comparisonButton(party, inComparison = false) {
    const selected = state.comparison.has(party.id);
    const control = button(inComparison ? "הסרה מההשוואה" : selected ? "הסרה מההשוואה" : "הוספה להשוואה",
      inComparison ? "remove-comparison" : "toggle-comparison", "button button--secondary");
    control.dataset.partyId = party.id;
    control.setAttribute("aria-label", `${selected ? "הסרה מההשוואה" : "הוספה להשוואה"}: ${party.nameHe}`);
    if (!inComparison) {
      control.setAttribute("aria-pressed", String(selected));
      const blocked = !selected && state.comparison.size === COMPARISON_LIMIT;
      control.setAttribute("aria-disabled", String(blocked));
      if (blocked) control.setAttribute("aria-describedby", "comparison-limit");
    }
    return control;
  }

  function renderParty(party, inComparison = false) {
    const article = element("article", inComparison ? "card comparison-card" : "card party-card");
    article.dataset.partyId = party.id;
    const headingId = `${inComparison ? "compare" : "party"}-${party.id}`;
    article.setAttribute("aria-labelledby", headingId);
    const header = element("header", "party-heading");
    const letters = party.ballotLetters || PARTY_BALLOT_LETTERS[party.id] || "";
    if (letters) {
      const ballotBadge = element("span", "ballot-badge", letters);
      ballotBadge.dataset.ballot = letters;
      ballotBadge.dataset.party = party.id;
      ballotBadge.setAttribute("aria-label", `אותיות פתק: ${letters}`);
      header.append(ballotBadge);
    }
    const heading = element("h3", "", party.nameHe);
    heading.id = headingId;
    header.append(heading, badge(party.listStatus, PARTY_LIST_LABELS[party.listStatus]));
    if (party.bloc) header.append(badge("bloc", `גוש: ${party.bloc}`));
    article.append(header);
    const actions = element("div", "party-actions");
    actions.append(comparisonButton(party, inComparison));
    article.append(actions, renderEvidence(party.identityEvidence), renderEvidence(party.listStatusEvidence));
    const profiles = element("section", "profile-section");
    profiles.append(element("h4", "", "פרופילים ציבוריים"));
    if (!party.leaderSummaries.length) paragraph(profiles, "לא נכלל פרופיל ציבורי במאגר; פער המנהיגות מפורט בהמשך.");
    party.leaderSummaries.forEach((leader) => {
      const line = element("div", "party-actions");
      const name = element("strong", "", leader.nameHe);
      const profile = button("פתיחת פרופיל ציבורי", "profile", "button button--quiet");
      profile.dataset.partyId = party.id;
      profile.dataset.leaderId = leader.id;
      profile.setAttribute("aria-label", `פתיחת הפרופיל הציבורי של ${leader.nameHe}`);
      line.append(name, profile);
      profiles.append(line, renderEvidence(leader.identityEvidence), renderEvidence(leader.publicRole));
    });
    article.append(profiles);
    TOPIC_IDS.filter((id) => state.topics.has(id)).forEach((topicId) => article.append(renderTopicBucket(party, topicId)));
    if (party.generalContext.length) article.append(evidenceSection("הקשר והסתייגויות על הרשימה", party.generalContext));
    if (party.gaps.length) article.append(evidenceSection("חוסרים במידע על הרשימה", party.gaps));
    return article;
  }

  function renderTopicOptions() {
    const fragment = document.createDocumentFragment();
    TOPIC_IDS.forEach((id) => {
      const topic = topicsById.get(id);
      const label = element("label", "topic-option");
      const input = element("input");
      input.type = "checkbox";
      input.name = "topics";
      input.value = id;
      input.id = `topic-${id}`;
      input.checked = state.topics.has(id);
      const text = element("span");
      text.append(element("strong", "", topic.labelHe), element("small", "", topic.descriptionHe));
      label.append(input, text);
      fragment.append(label);
    });
    ui.topicOptions.replaceChildren(fragment);
  }

  function syncQuestionnaire() {
    ui.form.querySelectorAll('input[name="topics"]').forEach((input) => {
      input.checked = state.topics.has(input.value);
      input.closest("label").classList.toggle("is-selected", input.checked);
    });
    ["evidence", "depth"].forEach((name) => {
      ui.form.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
        input.checked = state[name] === input.value;
        input.closest("label").classList.toggle("is-selected", input.checked);
      });
    });
    ui.topicCount.textContent = `${state.topics.size} נושאים נבחרו`;
    ui.readingSummary.textContent = `${state.topics.size} נושאים · ${FILTERS[state.evidence].label} · ${state.depth === "detail" ? "קריאה מפורטת" : "סקירה קצרה"}. כל הכרטיסים שבמאגר יוצגו לפי סדר א״ב.`;
  }

  function clearTopicError() {
    ui.topicsError.hidden = true;
    ui.steps[0].removeAttribute("aria-invalid");
    ui.steps[0].setAttribute("aria-describedby", "topics-help");
  }

  function navigateStep(step, shouldAnnounce = true) {
    state.step = step;
    state.showingResults = false;
    ui.questionnaire.hidden = false;
    ui.results.hidden = true;
    ui.comparison.hidden = true;
    ui.steps.forEach((fieldset, index) => {
      fieldset.hidden = index + 1 !== step;
    });
    ui.stepper.forEach((item, index) => {
      item.classList.toggle("is-active", index + 1 === step);
      if (index + 1 === step) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    ui.back.hidden = step === 1;
    ui.next.textContent = ["המשך לסוג המידע", "המשך לעומק הקריאה", "הצגת כל הכרטיסים"][step - 1];
    syncQuestionnaire();
    if (shouldAnnounce) {
      focus(ui.stepHeadings[step - 1]);
      announce(`שלב ${step} מתוך 3: ${["נושאים לקריאה", "סוג המידע", "עומק הקריאה"][step - 1]}.`);
    }
  }

  function validateTopics() {
    if (state.topics.size > 0) {
      clearTopicError();
      return true;
    }
    navigateStep(1, false);
    ui.topicsError.hidden = false;
    ui.steps[0].setAttribute("aria-invalid", "true");
    ui.steps[0].setAttribute("aria-describedby", "topics-help topics-error");
    focus(ui.topicsError);
    announce("בחרו נושא אחד לפחות כדי להמשיך.");
    return false;
  }

  function filteredParties() {
    const query = normaliseName(state.search);
    if (!query) return allParties;
    return allParties.filter((party) => normaliseName(party.nameHe).includes(query) ||
      party.leaderSummaries.some((leader) => normaliseName(leader.nameHe).includes(query)));
  }

  function emptyState(container, title, text, action = null) {
    container.replaceChildren(element("h3", "", title), element("p", "", text));
    if (action) container.append(button(action.label, action.action, "button button--secondary"));
  }

  function renderResults() {
    const topics = TOPIC_IDS.filter((id) => state.topics.has(id)).map((id) => topicsById.get(id).labelHe);
    ui.resultsSelection.replaceChildren(
      element("p", "", `נושאים: ${topics.join(" · ")}`),
      element("p", "", `סוג המידע: ${FILTERS[state.evidence].label}`),
      element("p", "", `עומק הקריאה: ${state.depth === "detail" ? "מפורט" : "קצר"}`)
    );
    ui.resultsCoverage.hidden = !research;
    if (research) {
      ui.resultsCoverage.replaceChildren(
        element("p", "", research.coverage.descriptionHe),
        badge(research.election.listConfirmationStatus, LIST_LABELS[research.election.listConfirmationStatus])
      );
      paragraph(ui.resultsCoverage, "פרסומי מפלגות, דיווחים ומחקר מוצגים עם ייחוס ותאריך. אין תיעוד מתאים לכל מסגרת בכל נושא; פערים והסתייגויות מוצגים במפורש.");
    }
    const parties = filteredParties();
    const fragment = document.createDocumentFragment();
    parties.forEach((party) => fragment.append(renderParty(party)));
    ui.partyGrid.replaceChildren(fragment);
    ui.resultsEmpty.hidden = parties.length > 0;
    ui.search.disabled = !research || allParties.length === 0;
    ui.clearSearch.disabled = !state.search.length;
    if (!research) {
      ui.resultsCount.textContent = "אין מחקר תקין להצגה";
      emptyState(ui.resultsEmpty, "נתוני המחקר אינם זמינים", "לא נטען אובייקט מחקר תקין; אין להציג במקומו נתוני דוגמה או הבטחת כיסוי מלא.");
    } else if (!allParties.length) {
      ui.resultsCount.textContent = "אין מסגרות במאגר";
      emptyState(ui.resultsEmpty, "המאגר ריק", "לא נכללו מסגרות פוליטיות במחקר שנטען.");
    } else {
      ui.resultsCount.textContent = `${parties.length} מתוך ${allParties.length} כרטיסים במאגר`;
      if (!parties.length) emptyState(ui.resultsEmpty, "לא נמצאו שמות תואמים",
        "החיפוש בודק שמות ארגונים, מסגרות ומנהיגים בלבד. נקו אותו כדי לחזור לכל הכרטיסים.",
        { label: "ניקוי החיפוש", action: "clear-search" });
    }
  }

  function selectedParties() {
    return allParties.filter((party) => state.comparison.has(party.id));
  }

  function renderComparison() {
    const parties = selectedParties();
    ui.comparisonCount.textContent = `${parties.length} מתוך ${COMPARISON_LIMIT} כרטיסים נבחרו`;
    ui.comparisonLimit.textContent = parties.length === COMPARISON_LIMIT
      ? "נבחרו ארבעה כרטיסים. כדי להוסיף אחר, הסירו קודם אחד מהבחירה; אף כרטיס אינו מוחלף אוטומטית."
      : "אפשר לבחור עד ארבעה כרטיסים. אין בחירה אוטומטית.";
    ui.comparisonLimit.classList.toggle("notice--warning", parties.length === COMPARISON_LIMIT);
    ui.clearComparison.disabled = parties.length === 0;
    const selections = document.createDocumentFragment();
    parties.forEach((party) => {
      const remove = button(`${party.nameHe} · הסרה`, "remove-comparison");
      remove.dataset.partyId = party.id;
      remove.setAttribute("aria-label", `הסרה מההשוואה: ${party.nameHe}`);
      selections.append(remove);
    });
    ui.comparisonSelections.replaceChildren(selections);
    const cards = document.createDocumentFragment();
    parties.forEach((party) => cards.append(renderParty(party, true)));
    ui.comparisonGrid.replaceChildren(cards);
    ui.comparisonEmpty.hidden = parties.length > 0;
    ui.partyGrid.querySelectorAll('button[data-action="toggle-comparison"]').forEach((control) => {
      const party = partiesById.get(control.dataset.partyId);
      const selected = state.comparison.has(party.id);
      const blocked = !selected && parties.length === COMPARISON_LIMIT;
      control.textContent = selected ? "הסרה מההשוואה" : "הוספה להשוואה";
      control.setAttribute("aria-pressed", String(selected));
      control.setAttribute("aria-disabled", String(blocked));
      control.setAttribute("aria-label", `${selected ? "הסרה מההשוואה" : "הוספה להשוואה"}: ${party.nameHe}`);
      if (blocked) control.setAttribute("aria-describedby", "comparison-limit");
      else control.removeAttribute("aria-describedby");
    });
  }

  function changeComparison(id, trigger, removeOnly = false) {
    const party = partiesById.get(id);
    if (!party || (removeOnly && !state.comparison.has(id))) return;
    const outcome = updateSelection(state.comparison, id);
    if (outcome === "blocked") {
      announce("אפשר להשוות עד ארבעה כרטיסים. הסירו אחד לפני הוספה נוספת; הבחירה הקיימת לא שונתה.");
      return;
    }
    const fromComparison = Boolean(trigger.closest("#comparison"));
    renderComparison();
    if (!trigger.isConnected) focus(fromComparison ? ui.comparisonTitle : ui.resultsTitle);
    announce(`${party.nameHe}: ${outcome === "added" ? "נוסף להשוואה" : "הוסר מההשוואה"}. ${state.comparison.size} מתוך ארבעה כרטיסים נבחרו.`);
  }

  function showResults() {
    if (!validateTopics()) return;
    closePanels();
    state.search = "";
    state.showingResults = true;
    quizState.active = false;
    if (ui.intro) ui.intro.hidden = true;
    if (ui.quizSection) ui.quizSection.hidden = true;
    if (ui.quizResults) ui.quizResults.hidden = true;
    if (ui.comparisonMatrixSection) ui.comparisonMatrixSection.hidden = true;
    ui.search.value = "";
    ui.questionnaire.hidden = true;
    ui.results.hidden = false;
    ui.comparison.hidden = false;
    renderElection();
    renderCoverage();
    renderResults();
    renderComparison();
    updateNavState("browse");
    focus(ui.resultsTitle);
    announce(research && allParties.length ? `מוצגים ${allParties.length} הכרטיסים שבמאגר בסדר א״ב עברי.` : ui.resultsCount.textContent);
  }

  function openPanel(dialog, title, trigger) {
    dialogTriggers.set(dialog, trigger);
    if (!dialog.hasAttribute("open")) {
      if (typeof dialog.showModal === "function") dialog.showModal();
      else {
        dialog.setAttribute("open", "");
        dialog.setAttribute("role", "dialog");
        dialog.setAttribute("aria-modal", "false");
      }
    }
    focus(title);
  }

  function closePanel(dialog, returnFocus = true) {
    if (!dialog.hasAttribute("open")) return;
    const trigger = dialogTriggers.get(dialog);
    dialogTriggers.delete(dialog);
    if (typeof dialog.close === "function") dialog.close();
    else dialog.removeAttribute("open");
    if (returnFocus) focus(trigger && trigger.isConnected ? trigger : ui.resultsTitle);
  }

  function closePanels() {
    closePanel(ui.sourceDialog, false);
    closePanel(ui.profileDialog, false);
    if (ui.stanceDialog) closePanel(ui.stanceDialog, false);
  }

  function openProfile(id, trigger) {
    const entry = leadersById.get(id);
    if (!entry) return;
    const { leader, party } = entry;
    ui.profileTitle.textContent = `הפרופיל הציבורי של ${leader.nameHe}`;
    const body = document.createDocumentFragment();
    paragraph(body, `הפרופיל הציבורי של הנהגת ${party.nameHe} לקראת בחירות 2026.`);
    body.append(evidenceSection("זהות ותפקיד ציבורי", [leader.identityEvidence, leader.publicRole], 3));
    const candidacy = element("section", "profile-section");
    candidacy.append(element("h3", "", "מעמד המועמדות"), badge(leader.candidacyStatus, CANDIDACY_LABELS[leader.candidacyStatus]), renderEvidence(leader.candidacyEvidence));
    body.append(candidacy);
    if (leader.summary.length) body.append(evidenceSection("סיכום ציבורי", leader.summary, 3));
    else paragraph(body, "לא נכלל סיכום פעילות אישי מתועד.");
    if (leader.documentedRecords.length) body.append(evidenceSection("רשומות מתועדות", leader.documentedRecords, 3));
    else paragraph(body, "לא נכללו רשומות ביצוע או הצבעות אישיות עם אסמכתה ספציפית.");
    if (leader.gaps.length) body.append(evidenceSection("פערי תיעוד והסתייגויות", leader.gaps, 3));
    ui.profileBody.replaceChildren(body);
    openPanel(ui.profileDialog, ui.profileTitle, trigger);
  }

  function renderSource(source) {
    const article = element("article", "source-card");
    article.append(element("h3", "", source.title));
    caveat(article, "גישה והסתייגויות", source.accessNotesHe ?? "לא נרשמה הערת גישה למקור.");
    const metadata = element("dl");
    definition(metadata, "מפרסם", source.publisher);
    definition(metadata, "סוג המקור", SOURCE_TYPES[source.sourceType]);
    definition(metadata, "תאריך פרסום", source.publicationDate ? timeNode(source.publicationDate) : "לא אומת תאריך פרסום");
    definition(metadata, "זמן מחקר/ייחוס כפי שנרשם במאגר", timeNode(source.retrievedAt, true));
    definition(metadata, "מועד הייחוס של המחקר", timeNode(source.asOfDate));
    definition(metadata, "שפת המקור", source.language);
    definition(metadata, "מזהה מקור", source.id);
    const url = publicSourceURL(source.url);
    const urlText = element("bdi", "", source.url);
    urlText.dir = "ltr";
    if (url) {
      const link = element("a");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.referrerPolicy = "no-referrer";
      link.setAttribute("aria-label", `פתיחת המקור באתר חיצוני, בלשונית חדשה: ${source.title}`);
      link.append(urlText);
      definition(metadata, "כתובת המקור", link);
    } else definition(metadata, "כתובת רשמית", urlText);
    article.append(metadata);
    caveat(article, "מעמד המקור", SOURCE_LIMITS[source.sourceType]);
    return article;
  }

  function openSources(trigger) {
    const item = evidenceById.get(trigger.dataset.evidenceId);
    const context = trigger.dataset.sourceContext || "הפניות המחקר";
    const ids = new Set(item ? item.sourceIds : (trigger.dataset.sourceIds || "").split(" ").filter(Boolean));
    if (item) item.contradictionIds.forEach((id) => evidenceById.get(id)?.sourceIds.forEach((sourceId) => ids.add(sourceId)));
    ui.sourceTitle.textContent = "מקורות והערות";
    const body = document.createDocumentFragment();
    if (item) body.append(renderEvidence(item, { includeSourceControls: false }));
    else paragraph(body, context);
    const sources = element("div", "source-list");
    ids.forEach((id) => {
      const source = sourcesById.get(id);
      if (source) sources.append(renderSource(source));
    });
    if (!ids.size) {
      const empty = element("div", "empty-state");
      emptyState(empty, "אין מקור מאומת לפריט זה", "לא נמצאה אסמכתה מתאימה; אין להסיק מכך עמדה רשמית או ניטרלית.");
      sources.append(empty);
    }
    paragraph(body, "הערות המקור מפרטות מה נקרא ומה לא אומת. פתיחת קישור חיצוני נעשית בלשונית נפרדת.", "section-copy");
    body.append(sources);
    ui.sourceBody.replaceChildren(body);
    openPanel(ui.sourceDialog, ui.sourceTitle, trigger);
  }

  function renderMetadata() {
    if (!research) return;
    const asOf = element("div");
    asOf.append(element("span", "", "המידע נכון ל־"), timeNode(research.asOfDate));
    const updated = element("div");
    updated.append(element("span", "", "עדכון המאגר"), timeNode(research.updatedAt, true));
    const coverage = element("div");
    coverage.append(element("span", "", "היקף המאגר"), element("strong", "", `${allParties.length} מסגרות פוליטיות · ${research.sources.length} הפניות למקורות`));
    ui.metadata.replaceChildren(asOf, updated, coverage);
    const citedSources = new Set();
    evidenceById.forEach((item) => {
      item.sourceIds.forEach((id) => citedSources.add(id));
    });
    ui.sourceCoverageSummary.hidden = false;
    ui.sourceCoverageSummary.textContent = `${research.sources.length} הפניות לפרסומי מפלגות, מחקר ודיווחים במאגר; ${citedSources.size} מהן מופיעות בפריטי המחקר. לא כל מקור הוא מצע מלא או רשומה רשמית.`;
    ui.sourceCoverageSummary.append(document.createTextNode(" "),
      sourceControl(research.sources.map((source) => source.id), "מאגר המקורות והרשומות המלא"));
  }

  function renderElection() {
    if (!research) return;
    const election = research.election;
    const fragment = document.createDocumentFragment();
    paragraph(fragment, election.labelHe);
    const dates = element("dl");
    definition(dates, "מעמד מועד הבחירות", badge(election.dateConfirmationStatus, election.dateConfirmationStatus === "confirmed" ? "מועד מפורסם ומוצלב במקורות" : "מועד שלא אומת"));
    definition(dates, "מועד הבחירות", election.scheduledDate ? timeNode(election.scheduledDate) : "לא אומת");
    definition(dates, "מעמד רשימות המועמדים", badge(election.listConfirmationStatus, LIST_LABELS[election.listConfirmationStatus]));
    fragment.append(dates);
    if (election.dateSourceIds && election.dateSourceIds.length) {
      fragment.append(sourceControl(election.dateSourceIds, "מקורות והערות על מועד הבחירות"));
    }
    caveat(fragment, "הסתייגות", election.dateMissingEvidenceLabelHe);
    caveat(fragment, "בדיקת הרשימות", election.listMissingEvidenceLabelHe);
    election.caveats.forEach((item) => fragment.append(renderEvidence(item)));
    ui.electionDetails.replaceChildren(fragment);
  }

  function renderCoverage() {
    if (!research) return;
    const coverage = research.coverage;
    const fragment = document.createDocumentFragment();
    paragraph(fragment, coverage.descriptionHe);
    const metadata = element("dl");
    definition(metadata, "בסיס הכיסוי", "אוסף מסגרות להשוואה, לא רשימת כל פתקי הקלפי");
    definition(metadata, "מעמד הרשימות", badge(coverage.listConfirmationStatus, LIST_LABELS[coverage.listConfirmationStatus]));
    definition(metadata, "מסגרות הכלולות במאגר", `${coverage.includedPartyIds ? coverage.includedPartyIds.length : allParties.length}`);
    fragment.append(metadata);
    if (coverage.officialListSourceIds && coverage.officialListSourceIds.length) {
      fragment.append(sourceControl(coverage.officialListSourceIds, "מקורות רשמיים ורשומות מפלגתיות"));
    }
    [...coverage.omittedEntries, ...coverage.limitations].forEach((item) => fragment.append(renderEvidence(item)));
    ui.coverageDetails.replaceChildren(fragment);
  }

  function renderDataNotice() {
    if (!ui.dataNotice) return;
    ui.dataNotice.hidden = false;
    const questions = getQuestions();
    const positions = questions.flatMap((q) => allParties.map((p) => q.stances && q.stances[p.id]));
    const rated = positions.filter(hasRatedStance).length;
    const heading = element("h2", "", "מגבלות הנתונים והשאלון");
    heading.id = "data-notice-title";
    ui.dataNotice.replaceChildren(heading, element("p", "", `${rated} מתוך ${positions.length} עמדות שאלון מדורגות על בסיס מקורות. היתר מסומנות כפער ואינן נספרות. הדירוג הוא פרשנות, לא ציטוט רשמי או המלצת הצבעה. חד״ש, תע״ל ובל״ד חולקות את פתק הרשימה המשותפת.`));
  }

  const QUIZ_CATEGORIES = ["ביטחון", "כלכלה", "דת ומדינה", "משפט וחברה"];
  const TOPIC_MAPPING = {
    security: "security_foreign_relations",
    security_foreign_relations: "security_foreign_relations",
    economy: "economy_cost_of_living",
    economy_cost_of_living: "economy_cost_of_living",
    democracy: "institutions_democracy",
    institutions_democracy: "institutions_democracy",
    religion: "religion_state",
    religion_state: "religion_state",
    services: "public_services_equality",
    public_services_equality: "public_services_equality",
    infrastructure: "environment_infrastructure",
    environment_infrastructure: "environment_infrastructure"
  };

  const quizState = {
    currentIndex: 0,
    answers: new Map(),
    active: false,
    calculatedResults: []
  };

  function enrichStancesFor2026(questions) {
    if (!Array.isArray(questions)) return;
    questions.forEach((q) => {
      if (!q || !q.stances) return;

      // 1. ביחד (בנט ולפיד) - sync beyachad <-> beyahad <-> bennett_2026 <-> bennett_lapid
      const beyahadStance = q.stances.beyachad || q.stances.beyahad || q.stances.bennett_2026;
      if (beyahadStance) {
        q.stances.beyachad = beyahadStance;
        q.stances.beyahad = beyahadStance;
        q.stances.bennett_2026 = beyahadStance;
        q.stances.bennett_lapid = beyahadStance;
      }

      // 2. ישר! (איזנקוט) - sync yashar <-> eisenkot
      const yasharStance = q.stances.yashar || q.stances.eisenkot;
      if (yasharStance) {
        q.stances.yashar = yasharStance;
        q.stances.eisenkot = yasharStance;
      }

      // 3. הציונות הדתית וזהות - sync religious_zionism <-> religious_zionism_zehut
      const rzStance = q.stances.religious_zionism || q.stances.religious_zionism_zehut;
      if (rzStance) {
        q.stances.religious_zionism = rzStance;
        q.stances.religious_zionism_zehut = rzStance;
      }

      // 4. חד״ש-תע״ל - sync hadash_taal <-> hadash <-> taal
      const htStance = q.stances.hadash_taal || q.stances.hadash || q.stances.taal;
      if (htStance) {
        q.stances.hadash_taal = htStance;
        q.stances.hadash = htStance;
        q.stances.taal = htStance;
      }
    });
  }

  function getQuestions() {
    let list = [];
    if (typeof window !== "undefined" && Array.isArray(window.QUIZ_QUESTIONS)) {
      list = window.QUIZ_QUESTIONS;
    } else {
      try {
        list = require("./quiz-data.js").QUIZ_QUESTIONS || [];
      } catch {
        list = [];
      }
    }
    enrichStancesFor2026(list);
    return list;
  }

  function getQuestionCategory(q) {
    if (!q) return "משפט וחברה";
    if (q.category && QUIZ_CATEGORIES.includes(q.category)) return q.category;
    if (q.categoryGroup && QUIZ_CATEGORIES.includes(q.categoryGroup)) return q.categoryGroup;

    const label = (q.categoryLabel || "").toLowerCase();
    const title = (q.title || "").toLowerCase();
    const topic = q.topicId || "";

    if (
      title.includes("שבת") ||
      title.includes("נישואים") ||
      title.includes("כשרות") ||
      title.includes("גיור") ||
      label.includes("דת ומדינה") ||
      label.includes("נישואים") ||
      topic === "religion_state"
    ) {
      return "דת ומדינה";
    }
    if (
      topic === "security_foreign_relations" ||
      label.includes("ביטחון") ||
      label.includes("התיישבות") ||
      label.includes("ריבונות") ||
      label.includes("עזה") ||
      label.includes("מדיני") ||
      label.includes("צה״ל") ||
      label.includes("צבא") ||
      title.includes("פלסטינית") ||
      title.includes("עזה") ||
      title.includes("התיישבות") ||
      title.includes("ריבונות")
    ) {
      return "ביטחון";
    }
    if (
      topic === "economy_cost_of_living" ||
      label.includes("כלכלה") ||
      label.includes("מחיה") ||
      label.includes("שוק") ||
      label.includes("מיסוי") ||
      label.includes("דיור") ||
      label.includes("תקציב") ||
      title.includes("שוק חופשי") ||
      title.includes("יוקר המחיה") ||
      title.includes("מיסים")
    ) {
      return "כלכלה";
    }
    if (
      topic === "institutions_democracy" ||
      topic === "public_services_equality" ||
      topic === "environment_infrastructure" ||
      label.includes("משפט") ||
      label.includes("דמוקרטיה") ||
      label.includes("חברה") ||
      label.includes("שלטון") ||
      label.includes("ממשל") ||
      label.includes("שירות") ||
      label.includes("חינוך") ||
      label.includes("שוויון") ||
      label.includes("גיוס")
    ) {
      return "משפט וחברה";
    }
    return "משפט וחברה";
  }

  function getPartyQuote(party, topicId, keywords) {
    if (!party) return null;
    const resolvedTopicId = TOPIC_MAPPING[topicId] || topicId;
    if (!party.topicPositions) return null;
    const safeItems = (b) => b ? [...(b.positions || []), ...(b.promises || []), ...(b.records || []), ...(b.contextualReporting || [])].filter((item) => item.status !== "missing" && item.sourceIds && item.sourceIds.length) : [];

    const bucket = party.topicPositions[resolvedTopicId];
    if (bucket) {
      const bucketItems = safeItems(bucket);
      if (keywords && keywords.length) {
        const matched = bucketItems.find((item) =>
          keywords.some((kw) => (item.summaryHe || "").includes(kw) || (item.detailHe || "").includes(kw))
        );
        if (matched) return matched.summaryHe;
      }
      if (bucketItems.length > 0 && bucketItems[0]?.summaryHe) {
        return bucketItems[0].summaryHe;
      }
    }

    return null;
  }

  let currentMatrixCategory = "all";

  function updateNavState(activeView) {
    const navQuiz = document.getElementById("nav-btn-quiz");
    const navMatrix = document.getElementById("nav-btn-matrix");
    const navBrowse = document.getElementById("nav-btn-browse");
    const tabQuiz = document.getElementById("tab-btn-quiz");
    const tabMatrix = document.getElementById("tab-btn-matrix");
    const tabBrowse = document.getElementById("tab-btn-browse");

    const setPair = (btnNav, btnTab, active) => {
      if (btnNav) {
        btnNav.className = active ? "button button--primary" : "button button--quiet";
        if (active) btnNav.setAttribute("aria-current", "page");
        else btnNav.removeAttribute("aria-current");
      }
      if (btnTab) {
        btnTab.classList.toggle("is-active", active);
        btnTab.setAttribute("aria-selected", String(active));
      }
    };

    setPair(navQuiz, tabQuiz, activeView === "quiz");
    setPair(navMatrix, tabMatrix, activeView === "matrix");
    setPair(navBrowse, tabBrowse, activeView === "browse");
  }

  function switchView(viewName) {
    closePanels();
    updateNavState(viewName);

    if (viewName === "quiz") {
      if (ui.comparisonMatrixSection) ui.comparisonMatrixSection.hidden = true;
      if (ui.questionnaire) ui.questionnaire.hidden = true;
      if (ui.results) ui.results.hidden = true;
      if (ui.comparison) ui.comparison.hidden = true;

      if (quizState.calculatedResults.length > 0 && !quizState.active) {
        if (ui.intro) ui.intro.hidden = true;
        if (ui.quizSection) ui.quizSection.hidden = true;
        if (ui.quizResults) ui.quizResults.hidden = false;
        renderQuestionDissection(currentDissectionTopic || "all");
        focus(ui.quizResultsHeading);
      } else if (quizState.active) {
        if (ui.intro) ui.intro.hidden = true;
        if (ui.quizResults) ui.quizResults.hidden = true;
        if (ui.quizSection) ui.quizSection.hidden = false;
        focus(ui.quizTitle);
      } else {
        if (ui.intro) ui.intro.hidden = false;
        if (ui.quizSection) ui.quizSection.hidden = true;
        if (ui.quizResults) ui.quizResults.hidden = true;
        focus(document.getElementById("intro-title"));
      }
    } else if (viewName === "matrix") {
      if (ui.intro) ui.intro.hidden = true;
      if (ui.quizSection) ui.quizSection.hidden = true;
      if (ui.quizResults) ui.quizResults.hidden = true;
      if (ui.questionnaire) ui.questionnaire.hidden = true;
      if (ui.results) ui.results.hidden = true;
      if (ui.comparison) ui.comparison.hidden = true;

      if (ui.comparisonMatrixSection) {
        ui.comparisonMatrixSection.hidden = false;
        renderComparisonMatrix(currentMatrixCategory || "all");
        focus(document.getElementById("matrix-title"));
      }
      announce("מוצגת מטריצת השוואת עמדות מלאה.");
    } else if (viewName === "browse") {
      if (ui.intro) ui.intro.hidden = true;
      if (ui.quizSection) ui.quizSection.hidden = true;
      if (ui.quizResults) ui.quizResults.hidden = true;
      if (ui.comparisonMatrixSection) ui.comparisonMatrixSection.hidden = true;

      state.topics = new Set(TOPIC_IDS);
      state.evidence = "all";
      state.depth = "overview";
      syncQuestionnaire();
      ui.questionnaire.hidden = true;
      ui.results.hidden = false;
      ui.comparison.hidden = false;
      renderResults();
      renderComparison();
      focus(ui.resultsTitle);
      announce(research && allParties.length ? `מוצגים ${allParties.length} הכרטיסים שבמאגר.` : ui.resultsCount.textContent);
    }
  }

  function renderComparisonMatrix(categoryFilter = "all") {
    currentMatrixCategory = categoryFilter;

    if (!allParties.length) {
      loadData();
    }
    const questions = getQuestions();
    const tbody = document.getElementById("matrix-tbody");
    const headerRow = document.getElementById("matrix-header-row");
    if (!tbody || !headerRow) return;

    // Filter questions by category
    const filteredQuestions = categoryFilter === "all"
      ? questions
      : questions.filter((q) => q.topicId === categoryFilter);

    // Update filter buttons
    const filterButtons = document.querySelectorAll(".matrix-filter-btn");
    filterButtons.forEach((btn) => {
      const isActive = btn.dataset.category === categoryFilter;
      btn.classList.toggle("is-active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    // Populate header row
    const thDilemma = element("th", "matrix-th-dilemma", `סוגיה / דילמה (${filteredQuestions.length} נושאים)`);
    thDilemma.setAttribute("scope", "col");
    headerRow.replaceChildren(thDilemma);

    allParties.forEach((party) => {
      const th = element("th", "matrix-party-header-cell");
      th.setAttribute("scope", "col");
      th.dataset.partyId = party.id;
      const inner = element("div", "matrix-party-header-inner");
      const letters = party.ballotLetters || PARTY_BALLOT_LETTERS[party.id] || "";
      if (letters) {
        const badgeElem = element("span", "ballot-badge", letters);
        badgeElem.dataset.ballot = letters;
        badgeElem.dataset.party = party.id;
        badgeElem.setAttribute("aria-label", `אותיות פתק: ${letters}`);
        inner.append(badgeElem);
      }
      const nameElem = element("span", "matrix-party-header-name", party.nameHe);
      inner.append(nameElem);
      const leaderName = getPartyLeaderNames(party);
      if (leaderName) {
        const leaderElem = element("span", "matrix-party-header-leader", leaderName);
        leaderElem.title = `הובלה: ${leaderName}`;
        inner.append(leaderElem);
      }
      th.append(inner);
      headerRow.append(th);
    });

    // Populate tbody
    const rowsFragment = document.createDocumentFragment();

    filteredQuestions.forEach((q) => {
      const tr = element("tr");

      // Dilemma cell (sticky on right in RTL)
      const tdDilemma = element("td", "matrix-td-dilemma");
      const catBadge = element("span", "matrix-dilemma-category", q.categoryLabel || "");
      const titleElem = element("div", "matrix-dilemma-title", q.title || "");
      const statementElem = element("div", "matrix-dilemma-statement", q.statement || "");
      tdDilemma.append(catBadge, titleElem, statementElem);
      tr.append(tdDilemma);

      // Party cells
      allParties.forEach((party) => {
        const td = element("td", "matrix-td-stance");
        const partyStance = q.stances ? (q.stances[party.id] || q.stances[getPartyAliasId(party.id)]) : null;
        const val = hasRatedStance(partyStance) ? partyStance.val : null;

        let icon = "⚪";
        let label = "אין תיעוד מספיק";
        let stanceClass = "stance-neutral";

        if (val > 0) {
          icon = "🟢";
          label = val === 2 ? "בעד חזק" : "בעד";
          stanceClass = "stance-for";
        } else if (val < 0) {
          icon = "🔴";
          label = val === -2 ? "נגד חזק" : "נגד";
          stanceClass = "stance-against";
        } else if (val === 0) {
          icon = "⚪";
          label = "עמדה מעורבת";
          stanceClass = "stance-neutral";
        }

        const btn = element("button", `matrix-stance-btn ${stanceClass}`);
        btn.type = "button";
        btn.dataset.action = "view-matrix-stance";
        btn.dataset.questionId = q.id;
        btn.dataset.partyId = party.id;
        btn.setAttribute("aria-label", `${party.nameHe} בנושא "${q.title}": ${label}. לחצו לצפייה בנימוק.`);
        if (partyStance && partyStance.note) {
          btn.title = partyStance.note;
        }

        const iconSpan = element("span", "stance-icon", icon);
        const textSpan = element("span", "stance-text", label);
        btn.append(iconSpan, textSpan);
        td.append(btn);
        tr.append(td);
      });

      rowsFragment.append(tr);
    });

    tbody.replaceChildren(rowsFragment);
  }

  function openStanceModal(questionId, partyId, trigger) {
    const questions = getQuestions();
    const q = questions.find((item) => item.id === questionId);
    const party = partiesById.get(partyId);
    if (!q || !party || !ui.stanceDialog || !ui.stanceTitle || !ui.stanceBody) return;

    const partyStance = q.stances ? (q.stances[party.id] || q.stances[getPartyAliasId(party.id)]) : null;
    const val = hasRatedStance(partyStance) ? partyStance.val : null;
    const letters = party.ballotLetters || PARTY_BALLOT_LETTERS[party.id] || "";

    ui.stanceTitle.textContent = `${party.nameHe} — ${q.title}`;

    const body = document.createDocumentFragment();

    // Meta box
    const meta = element("div", "stance-modal-meta");
    if (letters) {
      const ballotBadge = element("span", "ballot-badge", letters);
      ballotBadge.dataset.ballot = letters;
      ballotBadge.dataset.party = party.id;
      ballotBadge.setAttribute("aria-label", `אותיות פתק: ${letters}`);
      meta.append(ballotBadge);
    }
    const partyInfo = element("div", "stance-modal-party-info");
    const partyHeading = element("h3", "", party.nameHe);
    const leaderName = getPartyLeaderNames(party);
    const leaderSpan = element("span", "", leaderName ? `בהובלת: ${leaderName}` : "");
    partyInfo.append(partyHeading, leaderSpan);
    meta.append(partyInfo);

    // Stance badge
    let icon = "⚪";
    let label = val === 0 ? "עמדה מעורבת מתועדת" : "אין תיעוד מספיק — לא נספר";
    let stanceClass = "stance-neutral";
    if (val > 0) {
      icon = "🟢";
      label = val === 2 ? "תמיכה מובהקת (בעד חזק)" : "תמיכה (בעד)";
      stanceClass = "stance-for";
    } else if (val < 0) {
      icon = "🔴";
      label = val === -2 ? "התנגדות מובהקת (נגד חזק)" : "התנגדות (נגד)";
      stanceClass = "stance-against";
    }

    const stanceBadge = element("div", `stance-modal-stance-badge ${stanceClass}`);
    stanceBadge.append(element("span", "stance-icon", icon), element("span", "stance-text", `עמדת המפלגה: ${label}`));

    // Dilemma info
    const dilemmaBox = element("div", "quiz-statement");
    dilemmaBox.textContent = q.statement;

    const explanation = element("p", "quiz-explanation-box", q.explanation);

    // Note / Reasoning
    const reasoningBox = element("div", "profile-section");
    const reasoningTitle = element("h4", "", "נימוק ועמדת המפלגה:");
    const reasoningText = element("p", "", partyStance && partyStance.note ? partyStance.note : "לא נמסר נימוק מפורט במצע.");
    reasoningBox.append(reasoningTitle, reasoningText);
    reasoningBox.append(element("p", "section-copy", "הדירוג הוא פרשנות עריכתית למקורות. תמיכה בחלק מן השאלה אינה בהכרח תמיכה בכל רכיביה."));
    if (partyStance && partyStance.sourceIds && partyStance.sourceIds.length) {
      reasoningBox.append(sourceControl(partyStance.sourceIds, `${party.nameHe} — ${q.title}`));
    }
    if (q.sourceIds && q.sourceIds.length) {
      reasoningBox.append(sourceControl(q.sourceIds, `הקשר עובדתי לשאלה: ${q.title}`));
    }

    // Quote from platform if available
    const quote = hasRatedStance(partyStance) ? getPartyQuote(party, q.topicId, q.keywords) : null;
    if (quote) {
      const quoteBox = element("div", "stance-modal-quote");
      quoteBox.append(element("strong", "", "סיכום הקשר ממקורות הפרופיל (לא ציטוט): "), element("span", "", quote));
      reasoningBox.append(quoteBox);
    }

    // Actions
    const actions = element("div", "form-actions");
    const exploreBtn = button(`לכרטיס המלא של ${party.nameHe} במאגר`, "explore-party-card", "button button--primary");
    exploreBtn.dataset.partyId = party.id;
    actions.append(exploreBtn);

    body.append(meta, stanceBadge, dilemmaBox, explanation, reasoningBox, actions);
    ui.stanceBody.replaceChildren(body);
    openPanel(ui.stanceDialog, ui.stanceTitle, trigger);
  }

  function launchCelebratoryConfetti() {
    if (typeof window === "undefined" || typeof document === "undefined") return;
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const width = (canvas.width = window.innerWidth);
    const height = (canvas.height = window.innerHeight);

    const colors = ["#245a57", "#3b8276", "#d4af37", "#f59e0b", "#3b82f6", "#10b981", "#ef4444", "#8b5cf6", "#ec4899"];
    const particles = [];
    const count = 130;

    for (let i = 0; i < count; i++) {
      particles.push({
        x: width * 0.5 + (Math.random() - 0.5) * 320,
        y: height * 0.35 + (Math.random() - 0.5) * 160,
        vx: (Math.random() - 0.5) * 16,
        vy: (Math.random() - 1.25) * 14,
        size: Math.random() * 8 + 6,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10,
        opacity: 1,
        gravity: 0.28,
        shape: Math.random() > 0.4 ? "rect" : "circle"
      });
    }

    let startTime = null;
    const duration = 3400;

    function frame(timestamp) {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += p.gravity;
        p.vx *= 0.98;
        p.rotation += p.rotationSpeed;

        const progress = elapsed / duration;
        p.opacity = Math.max(0, 1 - progress * 1.25);

        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.globalAlpha = p.opacity;
        ctx.fillStyle = p.color;

        if (p.shape === "rect") {
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2);
        } else {
          ctx.beginPath();
          ctx.arc(0, 0, p.size / 2.5, 0, Math.PI * 2);
          ctx.fill();
        }
        ctx.restore();
      });

      if (elapsed < duration) {
        requestAnimationFrame(frame);
      } else {
        ctx.clearRect(0, 0, width, height);
      }
    }

    requestAnimationFrame(frame);
  }

  function copyMatchResultsSummary() {
    const results = quizState.calculatedResults;
    if (!results || !results.length) return;

    const top3 = results.filter((item) => item.matchPercentage !== null).slice(0, 3);
    let summary = "🇮🇱 תוצאות מצפן הבחירות 2026 שלי:\n";
    const medals = ["🥇 מקום 1", "🥈 מקום 2", "🥉 מקום 3"];
    top3.forEach((item, idx) => {
      const letters = item.party.ballotLetters || PARTY_BALLOT_LETTERS[item.party.id] || "";
      const lettersStr = letters ? ` [${letters}]` : "";
      summary += `${medals[idx]}: ${item.party.nameHe}${lettersStr} — ${item.matchPercentage}% חפיפה, על בסיס ${item.matchedQuestionCount} שאלות; ${item.missingQuestionCount} פערים לא נספרו\n`;
    });
    if (!top3.length) summary += "אין מידע מתועד מספיק בשאלות שנענו לחישוב אחוזים.\n";
    summary += "\nחפיפה במידע הזמין בלבד; הכיסוי משתנה בין מסגרות. זו אינה המלצת הצבעה.";

    const btn = document.getElementById("btn-share-results");
    const showSuccess = () => {
      if (btn) {
        const originalText = btn.innerHTML;
        btn.innerHTML = "✓ הועתק ללוח!";
        btn.classList.add("button--success");
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove("button--success");
        }, 2200);
      }
      announce("כרטיס תוצאות ההתאמה הועתק ללוח.");
    };

    if (typeof navigator !== "undefined" && navigator.clipboard && typeof navigator.clipboard.writeText === "function") {
      navigator.clipboard.writeText(summary).then(showSuccess).catch(() => {
        fallbackCopyText(summary);
        showSuccess();
      });
    } else {
      fallbackCopyText(summary);
      showSuccess();
    }
  }

  function fallbackCopyText(text) {
    if (typeof document === "undefined") return;
    const textArea = document.createElement("textarea");
    textArea.value = text;
    textArea.style.position = "fixed";
    textArea.style.inlineSize = "1px";
    textArea.style.blockSize = "1px";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
    } catch {}
    document.body.removeChild(textArea);
  }

  function startQuiz() {
    closePanels();
    quizState.active = true;
    if (ui.intro) ui.intro.hidden = true;
    if (ui.questionnaire) ui.questionnaire.hidden = true;
    if (ui.results) ui.results.hidden = true;
    if (ui.comparison) ui.comparison.hidden = true;
    if (ui.comparisonMatrixSection) ui.comparisonMatrixSection.hidden = true;
    if (ui.quizResults) ui.quizResults.hidden = true;
    if (ui.quizSection) ui.quizSection.hidden = false;
    updateNavState("quiz");
    renderQuizCard(quizState.currentIndex || 0);
    focus(ui.quizTitle);
    const totalQuestions = getQuestions().length;
    announce(`שאלון התאמה פוליטית: שאלה ${(quizState.currentIndex || 0) + 1} מתוך ${totalQuestions}.`);
  }

  function renderQuizCard(index) {
    const questions = getQuestions();
    const totalQuestions = questions.length;
    if (!totalQuestions || index < 0 || index >= totalQuestions) return;
    const q = questions[index];
    quizState.currentIndex = index;

    if (ui.quizStepIndicator) ui.quizStepIndicator.textContent = `שאלה ${index + 1} מתוך ${totalQuestions}`;
    if (ui.quizCategoryTag) ui.quizCategoryTag.textContent = q.categoryLabel || "";
    if (ui.quizProgressBar) {
      const progressPercent = totalQuestions > 0 ? ((index + 1) / totalQuestions) * 100 : 0;
      ui.quizProgressBar.style.width = `${progressPercent}%`;
      ui.quizProgressBar.setAttribute("aria-valuenow", String(Math.round(progressPercent)));
    }
    if (ui.quizTitle) ui.quizTitle.textContent = q.title || "";
    if (ui.quizStatement) ui.quizStatement.textContent = q.statement || "";
    if (ui.quizExplanation) ui.quizExplanation.textContent = q.explanation || "";

    const existingAns = quizState.answers.get(q.id);
    const selectedStance = existingAns ? existingAns.stance : null;
    const isImportant = existingAns ? Boolean(existingAns.important) : false;

    if (ui.quizImportantToggle) ui.quizImportantToggle.checked = isImportant;

    if (ui.quizOptionsGroup) {
      ui.quizOptionsGroup.querySelectorAll(".quiz-option-btn").forEach((btn) => {
        const val = parseInt(btn.dataset.stance, 10);
        const isSelected = selectedStance !== null && val === selectedStance;
        btn.classList.toggle("is-active", isSelected);
        btn.setAttribute("aria-pressed", String(isSelected));
      });
    }

    if (ui.quizBtnPrev) ui.quizBtnPrev.disabled = index === 0;
    if (ui.quizBtnNext) {
      ui.quizBtnNext.textContent = index === totalQuestions - 1 ? "לתוצאות ההתאמה 🎯" : "שאלה הבאה ⭠";
    }
  }

  function selectStance(stanceVal) {
    const questions = getQuestions();
    if (!questions.length) return;
    const q = questions[quizState.currentIndex];
    const important = ui.quizImportantToggle ? ui.quizImportantToggle.checked : false;
    quizState.answers.set(q.id, { stance: stanceVal, important });

    if (ui.quizOptionsGroup) {
      ui.quizOptionsGroup.querySelectorAll(".quiz-option-btn").forEach((btn) => {
        const val = parseInt(btn.dataset.stance, 10);
        const isSelected = val === stanceVal;
        btn.classList.toggle("is-active", isSelected);
        btn.setAttribute("aria-pressed", String(isSelected));
      });
    }
    const stanceNames = { "2": "בעד חזק", "1": "בעד", "0": "נמנע", "-1": "נגד", "-2": "נגד חזק" };
    announce(`נבחרה עמדה: ${stanceNames[String(stanceVal)] || ""}`);
  }

  function nextQuizQuestion() {
    const questions = getQuestions();
    const totalQuestions = questions.length;
    if (!totalQuestions) return;
    const q = questions[quizState.currentIndex];
    if (q && !quizState.answers.has(q.id)) {
      const important = ui.quizImportantToggle ? ui.quizImportantToggle.checked : false;
      quizState.answers.set(q.id, { stance: 0, important });
    }
    if (quizState.currentIndex < totalQuestions - 1) {
      renderQuizCard(quizState.currentIndex + 1);
    } else {
      showQuizResults();
    }
  }

  function prevQuizQuestion() {
    if (quizState.currentIndex > 0) {
      renderQuizCard(quizState.currentIndex - 1);
    }
  }

  function skipQuizQuestion() {
    const questions = getQuestions();
    const totalQuestions = questions.length;
    if (!totalQuestions) return;
    const q = questions[quizState.currentIndex];
    if (q) quizState.answers.delete(q.id);
    if (quizState.currentIndex < totalQuestions - 1) {
      renderQuizCard(quizState.currentIndex + 1);
    } else {
      showQuizResults();
    }
  }

  function calculateMatchResults() {
    if (!allParties.length) {
      loadData();
    }
    const questions = getQuestions();
    if (!questions.length || !allParties.length) return [];

    const stanceLabels = { "2": "בעד חזק", "1": "בעד", "0": "נמנע", "-1": "נגד", "-2": "נגד חזק" };

    const results = allParties.map((party) => {
      let totalWeightedScore = 0;
      let maxPossibleScore = 0;
      let matchedQuestionCount = 0;
      let missingQuestionCount = 0;
      const agreements = [];
      const disagreements = [];

      const categoryScores = {
        "ביטחון": { total: 0, max: 0, label: "ביטחון", percentage: 0 },
        "כלכלה": { total: 0, max: 0, label: "כלכלה", percentage: 0 },
        "דת ומדינה": { total: 0, max: 0, label: "דת ומדינה", percentage: 0 },
        "משפט וחברה": { total: 0, max: 0, label: "משפט וחברה", percentage: 0 }
      };

      Object.defineProperty(categoryScores, "security_foreign_relations", { get() { return categoryScores["ביטחון"]; }, enumerable: false, configurable: true });
      Object.defineProperty(categoryScores, "economy_cost_of_living", { get() { return categoryScores["כלכלה"]; }, enumerable: false, configurable: true });
      Object.defineProperty(categoryScores, "religion_state", { get() { return categoryScores["דת ומדינה"]; }, enumerable: false, configurable: true });
      Object.defineProperty(categoryScores, "institutions_democracy", { get() { return categoryScores["משפט וחברה"]; }, enumerable: false, configurable: true });
      Object.defineProperty(categoryScores, "public_services_equality", { get() { return categoryScores["משפט וחברה"]; }, enumerable: false, configurable: true });
      Object.defineProperty(categoryScores, "environment_infrastructure", { get() { return categoryScores["דת ומדינה"]; }, enumerable: false, configurable: true });

      questions.forEach((q) => {
        const userAns = quizState.answers.get(q.id);
        if (!userAns) return;
        const weight = userAns.important ? 2 : 1;
        const partyStance = q.stances ? (q.stances[party.id] || q.stances[getPartyAliasId(party.id)]) : null;
        if (!hasRatedStance(partyStance)) {
          missingQuestionCount += 1;
          return;
        }
        matchedQuestionCount += 1;

        const distance = Math.abs(userAns.stance - partyStance.val);
        const score = 4 - distance;
        totalWeightedScore += score * weight;
        maxPossibleScore += 4 * weight;

        const catName = getQuestionCategory(q);
        if (categoryScores[catName]) {
          categoryScores[catName].total += score * weight;
          categoryScores[catName].max += 4 * weight;
        }

        const quote = getPartyQuote(party, q.topicId, q.keywords);

        const item = {
          questionTitle: q.title,
          statement: q.statement,
          userStanceText: stanceLabels[String(userAns.stance)] || "נמנע",
          partyStanceText: stanceLabels[String(partyStance.val)] || "נמנע",
          partyNote: partyStance.note || "",
          sourceIds: partyStance.sourceIds || [],
          quote: quote,
          distance: distance
        };

        if (distance <= 1) {
          agreements.push(item);
        } else if (distance >= 2) {
          disagreements.push(item);
        }
      });

      QUIZ_CATEGORIES.forEach((catName) => {
        const cat = categoryScores[catName];
        if (cat.max > 0) {
          cat.percentage = Math.round((cat.total / cat.max) * 100);
        }
      });

      const matchPercentage = maxPossibleScore > 0 ? Math.round((totalWeightedScore / maxPossibleScore) * 100) : null;

      return {
        party,
        matchPercentage,
        agreements,
        disagreements,
        categoryScores,
        matchedQuestionCount,
        missingQuestionCount
      };
    });

    results.sort((a, b) => (b.matchPercentage ?? -1) - (a.matchPercentage ?? -1));
    return results;
  }

  function showQuizResults() {
    if (quizState.answers.size === 0) {
      announce("בחרו עמדה לפחות בשאלה אחת כדי לחשב תוצאות התאמה.");
      return;
    }
    const results = calculateMatchResults();
    quizState.calculatedResults = results;
    quizState.active = false;

    if (ui.quizSection) ui.quizSection.hidden = true;
    if (ui.intro) ui.intro.hidden = true;
    if (ui.questionnaire) ui.questionnaire.hidden = true;
    if (ui.results) ui.results.hidden = true;
    if (ui.comparison) ui.comparison.hidden = true;
    if (ui.comparisonMatrixSection) ui.comparisonMatrixSection.hidden = true;
    if (ui.quizResults) ui.quizResults.hidden = false;

    updateNavState("quiz");
    renderQuizResults(results);
    renderQuestionDissection(currentDissectionTopic || "all");
    focus(ui.quizResultsHeading);
    launchCelebratoryConfetti();
    if (results[0] && results[0].matchPercentage !== null) {
      announce(`השאלון הושלם. החפיפה הגבוהה במידע הזמין: ${results[0].party.nameHe}, ${results[0].matchPercentage}%, על בסיס ${results[0].matchedQuestionCount} שאלות בלבד.`);
    } else {
      announce("לא נמצאו עמדות מתועדות מספיק בשאלות שנענו; לא חושב אחוז התאמה.");
    }
  }

  function renderQuizResults(results) {
    if (!results || !results.length) return;

    if (ui.quizPodiumCards) {
      const top3 = results.filter((item) => item.matchPercentage !== null).slice(0, 3);
      const podiumFragment = document.createDocumentFragment();

      top3.forEach((item, idx) => {
        const rank = idx + 1;
        const card = element("article", `podium-card rank-${rank}`);
        const badgeElem = element("div", `podium-badge rank-${rank}`, rank === 1 ? "🥇 מקום 1" : rank === 2 ? "🥈 מקום 2" : "🥉 מקום 3");
        
        const letters = item.party.ballotLetters || PARTY_BALLOT_LETTERS[item.party.id] || "";
        const ballotBadge = element("div", "ballot-badge podium-ballot-badge", letters);
        ballotBadge.dataset.ballot = letters;
        ballotBadge.dataset.party = item.party.id;
        ballotBadge.setAttribute("aria-label", `אותיות פתק הצבעה: ${letters}`);

        const circle = element("div", "match-gauge-circle");
        const num = element("span", "match-gauge-num", `${item.matchPercentage}%`);
        const label = element("span", "match-gauge-label", "התאמה");
        circle.append(num, label);

        const partyName = element("h4", "podium-party-name", item.party.nameHe);
        const leaderName = getPartyLeaderNames(item.party);
        const leaderElem = element("p", "podium-leader-name", leaderName ? `הובלה: ${leaderName}` : "");

        const highlight = element("p", "podium-highlight");
        if (item.agreements.length) {
          highlight.textContent = `חפיפה בולטת: ${item.agreements[0].questionTitle} (${item.agreements[0].partyNote})`;
        } else {
          highlight.textContent = "אין חפיפה בולטת במידע הזמין.";
        }
        const coverage = element("p", "section-copy", `מבוסס על ${item.matchedQuestionCount} שאלות; ${item.missingQuestionCount} שאלות ללא עמדה מתועדת לא נספרו.`);

        const exploreBtn = button("לעיון בכרטיס המלא של מפלגה זו במאגר", "explore-party-card", "button button--quiet");
        exploreBtn.dataset.partyId = item.party.id;

        card.append(badgeElem, ballotBadge, circle, partyName, leaderElem, highlight, coverage, exploreBtn);
        podiumFragment.append(card);
      });

      ui.quizPodiumCards.replaceChildren(podiumFragment);
    }

    if (ui.quizRankingItems) {
      const listFragment = document.createDocumentFragment();

      results.forEach((item, idx) => {
        const rank = idx + 1;
        const card = element("article", "ranking-card");

        const topRow = element("div", "ranking-card-top");
        const partyHeader = element("div", "ranking-party-header");
        const posElem = element("span", "ranking-pos", item.matchPercentage === null ? "—" : `#${rank}`);
        const letters = item.party.ballotLetters || PARTY_BALLOT_LETTERS[item.party.id] || "";
        const ballotBadge = element("span", "ballot-badge ranking-ballot-badge", letters);
        ballotBadge.dataset.ballot = letters;
        ballotBadge.dataset.party = item.party.id;
        ballotBadge.setAttribute("aria-label", `אותיות פתק הצבעה: ${letters}`);

        const titles = element("div", "ranking-party-titles");
        const h4 = element("h4", "", item.party.nameHe);
        const leaderName = getPartyLeaderNames(item.party);
        const leaderSpan = element("span", "", leaderName ? `הובלה: ${leaderName}` : "");
        titles.append(h4, leaderSpan);
        partyHeader.append(posElem, ballotBadge, titles);

        const scoreClass = item.matchPercentage >= 70 ? "high" : item.matchPercentage >= 50 ? "medium" : "low";
        const scoreBadge = element("div", `ranking-score-badge ${scoreClass}`, item.matchPercentage === null ? "אין מספיק מידע" : `${item.matchPercentage}%`);
        topRow.append(partyHeader, scoreBadge);

        const barTrack = element("div", "ranking-bar-track");
        const barFill = element("div", `ranking-bar-fill ${scoreClass}`);
        barFill.style.width = `${item.matchPercentage ?? 0}%`;
        barTrack.append(barFill);

        const chipsRow = element("div", "ranking-category-chips");
        QUIZ_CATEGORIES.forEach((catName) => {
          const cat = item.categoryScores[catName];
          if (cat && cat.max > 0) {
            const pct = cat.percentage !== undefined ? cat.percentage : Math.round((cat.total / cat.max) * 100);
            const chip = element("span", "category-chip");
            chip.innerHTML = `${cat.label}: <strong>${pct}%</strong>`;
            chipsRow.append(chip);
          }
        });

        const drawerToggle = element("button", "ranking-drawer-toggle");
        drawerToggle.type = "button";
        drawerToggle.dataset.action = "toggle-why";
        drawerToggle.dataset.partyId = item.party.id;
        drawerToggle.setAttribute("aria-expanded", "false");
        drawerToggle.innerHTML = `<span>${item.matchPercentage === null ? "אין בסיס מתועד לחישוב התאמה" : `פירוט ${item.matchPercentage}% חפיפה במידע הזמין`}</span> <span class="accordion-arrow">▾</span>`;

        const drawer = element("div", "ranking-drawer-content");
        drawer.hidden = true;

        if (item.agreements.length) {
          const agreeTitle = element("h5", "drawer-section-title", "🟢 נקודות הסכמה וחפיפה:");
          const agreeList = element("ul", "drawer-points-list");
          item.agreements.forEach((pt) => {
            const li = element("li", "drawer-point-item agree");
            const ptHead = element("div", "drawer-point-header", pt.questionTitle);
            const ptStances = element("div", "drawer-point-stances", `עמדתך: ${pt.userStanceText} | עמדת המפלגה: ${pt.partyNote}`);
            li.append(ptHead, ptStances);
            if (pt.quote) {
              const quoteElem = element("p", "drawer-point-quote", `סיכום הקשר (לא ציטוט): ${pt.quote}`);
              li.append(quoteElem);
            }
            if (pt.sourceIds.length) li.append(sourceControl(pt.sourceIds, `${item.party.nameHe} — ${pt.questionTitle}`));
            agreeList.append(li);
          });
          drawer.append(agreeTitle, agreeList);
        }

        if (item.disagreements.length) {
          const disagreeTitle = element("h5", "drawer-section-title", "🔴 נקודות מחלוקת ופער:");
          const disagreeList = element("ul", "drawer-points-list");
          item.disagreements.forEach((pt) => {
            const li = element("li", "drawer-point-item disagree");
            const ptHead = element("div", "drawer-point-header", pt.questionTitle);
            const ptStances = element("div", "drawer-point-stances", `עמדתך: ${pt.userStanceText} | עמדת המפלגה: ${pt.partyNote}`);
            li.append(ptHead, ptStances);
            if (pt.quote) {
              const quoteElem = element("p", "drawer-point-quote", `סיכום הקשר (לא ציטוט): ${pt.quote}`);
              li.append(quoteElem);
            }
            if (pt.sourceIds.length) li.append(sourceControl(pt.sourceIds, `${item.party.nameHe} — ${pt.questionTitle}`));
            disagreeList.append(li);
          });
          drawer.append(disagreeTitle, disagreeList);
        }

        const explorePartyBtn = button("לעיון בכרטיס המלא של מפלגה זו במאגר", "explore-party-card", "button button--secondary");
        explorePartyBtn.dataset.partyId = item.party.id;
        drawer.append(explorePartyBtn);

        const coverage = element("p", "section-copy", `כיסוי: ${item.matchedQuestionCount} שאלות מתועדות מתוך ${item.matchedQuestionCount + item.missingQuestionCount} שנענו; ${item.missingQuestionCount} פערים לא נספרו. אין להשוות אחוזים בלי לבדוק את הכיסוי.`);
        card.append(topRow, barTrack, chipsRow, coverage, drawerToggle, drawer);
        listFragment.append(card);
      });

      ui.quizRankingItems.replaceChildren(listFragment);
    }
  }

  let currentDissectionTopic = "all";

  const DISSECTION_TOPICS = [
    { id: "all", label: "כל השאלות שנענו", emoji: "📋" },
    { id: "security_foreign_relations", label: "ביטחון", emoji: "🛡️" },
    { id: "economy_cost_of_living", label: "כלכלה", emoji: "💰" },
    { id: "institutions_democracy", label: "משפט", emoji: "⚖️" },
    { id: "religion_state", label: "דת ומדינה", emoji: "✡️" },
    { id: "public_services_equality", label: "שוויון", emoji: "🤝" },
    { id: "environment_infrastructure", label: "סביבה", emoji: "🌱" }
  ];

  function renderQuestionDissection(topicFilter = "all") {
    currentDissectionTopic = topicFilter;
    const questions = getQuestions();
    const listContainer = document.getElementById("dissection-questions-list");
    const filtersContainer = document.getElementById("dissection-topic-filters");
    if (!listContainer || !questions.length) return;

    if (!allParties.length) {
      loadData();
    }

    // Filter to questions that user answered
    const answeredQuestions = questions.filter((q) => quizState.answers.has(q.id));

    // Update filter tab buttons
    if (filtersContainer) {
      filtersContainer.querySelectorAll(".dissection-filter-btn").forEach((btn) => {
        const topic = btn.dataset.topic;
        const isActive = topic === topicFilter;
        btn.classList.toggle("is-active", isActive);
        btn.setAttribute("aria-selected", String(isActive));

        const count = topic === "all"
          ? answeredQuestions.length
          : answeredQuestions.filter((q) => q.topicId === topic).length;

        const baseDef = DISSECTION_TOPICS.find((t) => t.id === topic);
        if (baseDef) {
          btn.textContent = `${baseDef.emoji} ${baseDef.label} (${count})`;
        }
      });
    }

    // Filter questions to display
    const displayQuestions = topicFilter === "all"
      ? answeredQuestions
      : answeredQuestions.filter((q) => q.topicId === topicFilter);

    if (displayQuestions.length === 0) {
      const emptyDiv = element("div", "dissection-empty-topic");
      const msg = element("p", "", "לא נענו שאלות בנושא זה בשאלון הנוכחי.");
      const showAllBtn = button("הצגת כל השאלות שנענו", "filter-dissection", "button button--secondary");
      showAllBtn.dataset.topic = "all";
      emptyDiv.append(msg, showAllBtn);
      listContainer.replaceChildren(emptyDiv);
      return;
    }

    const stanceLabels = {
      "2": { text: "בעד חזק", emoji: "🟢", cls: "for-strong" },
      "1": { text: "בעד", emoji: "🟩", cls: "for" },
      "0": { text: "נמנע / אין דעה", emoji: "⚪", cls: "neutral" },
      "-1": { text: "נגד", emoji: "🟧", cls: "against" },
      "-2": { text: "נגד חזק", emoji: "🔴", cls: "against-strong" }
    };

    const fragment = document.createDocumentFragment();

    displayQuestions.forEach((q) => {
      const userAns = quizState.answers.get(q.id);
      if (!userAns) return;

      const userStanceInfo = stanceLabels[String(userAns.stance)] || stanceLabels["0"];
      const qIndex = questions.findIndex((item) => item.id === q.id);

      const card = element("article", "dissection-question-card");
      card.dataset.questionId = q.id;

      // Meta: Question number & Category Tag
      const meta = element("div", "dissection-question-meta");
      const numSpan = element("span", "dissection-question-num", `שאלה ${qIndex + 1} מתוך ${questions.length}`);
      const catTag = element("span", "dissection-category-tag", q.categoryLabel || "");
      meta.append(numSpan, catTag);

      // Title & Statement
      const title = element("h4", "dissection-question-title", q.title);
      const statement = element("p", "dissection-question-statement", q.statement);

      // User stance banner
      const userStanceBanner = element("div", `dissection-user-stance ${userStanceInfo.cls}`);
      const userLabel = element("span", "user-stance-label", "העמדה שלך:");
      const userBadge = element("span", "user-stance-badge", `${userStanceInfo.emoji} ${userStanceInfo.text}`);
      userStanceBanner.append(userLabel, userBadge);

      if (userAns.important) {
        const starTag = element("span", "important-tag", "⭐ נושא בעל חשיבות עליונה (משקל כפול)");
        userStanceBanner.append(starTag);
      }

      const agreedParties = [];
      const opposedParties = [];
      const neutralParties = [];
      const unknownParties = [];

      allParties.forEach((party) => {
        const partyStance = q.stances ? (q.stances[party.id] || q.stances[getPartyAliasId(party.id)]) : null;
        const val = hasRatedStance(partyStance) ? partyStance.val : null;
        const quote = hasRatedStance(partyStance) ? getPartyQuote(party, q.topicId, q.keywords) : null;
        const letters = party.ballotLetters || PARTY_BALLOT_LETTERS[party.id] || "";
        const leaderName = getPartyLeaderNames(party);

        const partyStanceInfo = val === null ? { text: "אין תיעוד מספיק", emoji: "⚪", cls: "neutral" } : stanceLabels[String(val)];

        const partyObj = {
          party,
          partyStance,
          val,
          quote,
          letters,
          leaderName,
          partyStanceInfo
        };

        if (val === null) {
          unknownParties.push(partyObj);
        } else if (userAns.stance > 0) {
          if (val > 0) agreedParties.push(partyObj);
          else if (val < 0) opposedParties.push(partyObj);
          else neutralParties.push(partyObj);
        } else if (userAns.stance < 0) {
          if (val < 0) agreedParties.push(partyObj);
          else if (val > 0) opposedParties.push(partyObj);
          else neutralParties.push(partyObj);
        } else {
          if (val === 0) agreedParties.push(partyObj);
          else opposedParties.push(partyObj);
        }
      });

      // Sort agreed: closest val to userAns.stance first
      agreedParties.sort((a, b) => Math.abs(a.val - userAns.stance) - Math.abs(b.val - userAns.stance));
      // Sort opposed: furthest val from userAns.stance first
      opposedParties.sort((a, b) => Math.abs(b.val - userAns.stance) - Math.abs(a.val - userAns.stance));

      const createPartyCard = (pData, typeClass) => {
        const pCard = element("div", `dissection-party-card ${typeClass}-card`);
        pCard.dataset.partyId = pData.party.id;

        // Top row
        const topRow = element("div", "dissection-party-card-top");
        const ident = element("div", "dissection-party-ident");
        if (pData.letters) {
          const ballot = element("span", "ballot-badge ballot-badge--sm", pData.letters);
          ballot.dataset.ballot = pData.letters;
          ballot.dataset.party = pData.party.id;
          ballot.setAttribute("aria-label", `פתק הצבעה: ${pData.letters}`);
          ident.append(ballot);
        }
        const names = element("div", "dissection-party-names");
        const pName = element("strong", "dissection-party-name", pData.party.nameHe);
        names.append(pName);
        if (pData.leaderName) {
          names.append(element("span", "dissection-leader-name", pData.leaderName));
        }
        ident.append(names);

        const stanceTag = element("span", `dissection-stance-tag ${pData.partyStanceInfo.cls}`, pData.partyStanceInfo.text);
        topRow.append(ident, stanceTag);

        // Reason note
        const reasonDiv = element("div", "dissection-party-reason");
        const reasonPrefix = element("span", "reason-prefix", typeClass === "agreed" ? "עמדה תואמת במידע הזמין:" : typeClass === "opposed" ? "עמדה מנוגדת במידע הזמין:" : "תיעוד והסתייגות:");
        reasonDiv.append(reasonPrefix, document.createTextNode(pData.partyStance && pData.partyStance.note ? pData.partyStance.note : "לא נמצא תיעוד מתאים."));

        pCard.append(topRow, reasonDiv);

        if (pData.quote) {
          const quoteBox = element("div", "dissection-party-quote");
          const quotePrefix = element("span", "quote-prefix", "סיכום הקשר ממקורות הפרופיל (לא ציטוט):");
          const quoteBody = element("p", "quote-body", pData.quote);
          quoteBox.append(quotePrefix, quoteBody);
          pCard.append(quoteBox);
        }

        // Action button to open full rationale in stance dialog
        const actions = element("div", "dissection-party-actions");
        const btn = button("לנימוק המלא והרחבה ⭠", "view-matrix-stance", "button button--quiet dissection-action-btn");
        btn.dataset.questionId = q.id;
        btn.dataset.partyId = pData.party.id;
        btn.setAttribute("data-question-id", q.id);
        btn.setAttribute("data-party-id", pData.party.id);
        actions.append(btn);
        pCard.append(actions);

        return pCard;
      };

      // 1. Prominently feature: "מפלגות שהסכימו עם עמדתך"
      const agreedBlock = element("div", "dissection-agreed-block");
      const agreedHeader = element("div", "dissection-group-header agreed-header");
      const agreedTitle = element("h5", "dissection-group-title");
      agreedTitle.append(
        element("span", "group-badge-icon", "🟢"),
        document.createTextNode(" מפלגות שהסכימו עם עמדתך "),
        element("span", "group-count", `(${agreedParties.length} מפלגות)`)
      );
      agreedHeader.append(agreedTitle);
      agreedBlock.append(agreedHeader);

      if (agreedParties.length > 0) {
        const agreedGrid = element("div", "dissection-parties-grid agreed-grid");
        agreedParties.forEach((p) => agreedGrid.append(createPartyCard(p, "agreed")));
        agreedBlock.append(agreedGrid);
      } else {
        const noAgreed = element("p", "section-copy", "לא נמצאה עמדה תואמת במידע המתועד שבמאגר.");
        agreedBlock.append(noAgreed);
      }

      // 2. Display: "מפלגות בעמדה מנוגדת"
      const opposedBlock = element("div", "dissection-opposed-block");
      const opposedHeader = element("div", "dissection-group-header opposed-header");
      const opposedTitle = element("h5", "dissection-group-title");
      opposedTitle.append(
        element("span", "group-badge-icon", "🔴"),
        document.createTextNode(" מפלגות בעמדה מנוגדת "),
        element("span", "group-count", `(${opposedParties.length} מפלגות)`)
      );
      opposedHeader.append(opposedTitle);
      opposedBlock.append(opposedHeader);

      if (opposedParties.length > 0) {
        const opposedGrid = element("div", "dissection-parties-grid opposed-grid");
        opposedParties.forEach((p) => opposedGrid.append(createPartyCard(p, "opposed")));
        opposedBlock.append(opposedGrid);
      } else {
        const noOpposed = element("p", "section-copy", "לא נמצאה עמדה מנוגדת במידע המתועד שבמאגר.");
        opposedBlock.append(noOpposed);
      }

      card.append(meta, title, statement, userStanceBanner, agreedBlock, opposedBlock);

      // 3. Neutral / Compromise parties (if any)
      if (neutralParties.length > 0) {
        const neutralBlock = element("div", "dissection-neutral-block");
        const details = element("details", "dissection-neutral-details");
        const summary = element("summary", "dissection-neutral-summary");
        summary.innerHTML = `<span>⚪ עמדה מעורבת מתועדת (${neutralParties.length} מסגרות)</span> <span class="accordion-arrow">▾</span>`;
        const neutralGrid = element("div", "dissection-parties-grid neutral-grid");
        neutralParties.forEach((p) => neutralGrid.append(createPartyCard(p, "neutral")));
        details.append(summary, neutralGrid);
        neutralBlock.append(details);
        card.append(neutralBlock);
      }
      if (unknownParties.length > 0) {
        const details = element("details", "dissection-neutral-details");
        const summary = element("summary", "dissection-neutral-summary", `⚪ אין תיעוד מספיק — לא נספר (${unknownParties.length} מסגרות)`);
        const grid = element("div", "dissection-parties-grid neutral-grid");
        unknownParties.forEach((p) => grid.append(createPartyCard(p, "neutral")));
        details.append(summary, grid);
        card.append(details);
      }

      fragment.append(card);
    });

    listContainer.replaceChildren(fragment);
  }

  function editQuizAnswers() {
    quizState.active = true;
    if (ui.quizResults) ui.quizResults.hidden = true;
    if (ui.quizSection) ui.quizSection.hidden = false;
    updateNavState("quiz");
    renderQuizCard(quizState.currentIndex || 0);
    focus(ui.quizTitle);
  }

  function restartQuiz() {
    quizState.answers.clear();
    quizState.currentIndex = 0;
    quizState.calculatedResults = [];
    currentDissectionTopic = "all";
    if (ui.dissectionQuestionsList) ui.dissectionQuestionsList.replaceChildren();
    startQuiz();
  }

  function toggleWhyDrawer(trigger) {
    const card = trigger.closest(".ranking-card");
    if (!card) return;
    const drawer = card.querySelector(".ranking-drawer-content");
    const arrow = trigger.querySelector(".accordion-arrow");
    if (!drawer) return;
    const isExpanded = !drawer.hidden;
    drawer.hidden = isExpanded;
    trigger.setAttribute("aria-expanded", String(!isExpanded));
    if (arrow) arrow.textContent = isExpanded ? "▾" : "▴";
  }

  function explorePartyInBrowse(partyId) {
    switchView("browse");
    const targetCard = ui.partyGrid ? ui.partyGrid.querySelector(`article[data-party-id="${partyId}"]`) : null;
    if (targetCard) {
      targetCard.scrollIntoView({ behavior: "smooth", block: "center" });
      targetCard.setAttribute("tabindex", "-1");
      targetCard.focus();
      const party = partiesById.get(partyId);
      announce(`הועברת לכרטיס המלא של ${party ? party.nameHe : "המפלגה"} במאגר.`);
    }
  }

  function reset() {
    closePanels();
    state.topics = new Set(TOPIC_IDS);
    state.evidence = "all";
    state.depth = "overview";
    state.search = "";
    state.comparison.clear();
    quizState.active = false;
    quizState.answers.clear();
    quizState.currentIndex = 0;
    quizState.calculatedResults = [];
    currentDissectionTopic = "all";
    if (ui.dissectionQuestionsList) ui.dissectionQuestionsList.replaceChildren();
    ui.search.value = "";
    ui.profileBody.replaceChildren();
    ui.sourceBody.replaceChildren();
    if (ui.stanceBody) ui.stanceBody.replaceChildren();
    document.querySelectorAll("details[open]").forEach((detail) => detail.removeAttribute("open"));
    clearTopicError();
    renderElection();
    renderCoverage();
    renderResults();
    renderComparison();
    updateNavState("quiz");
    switchView("quiz");
    navigateStep(1, false);
    focus(ui.stepHeadings[0]);
    announce("העמוד אופס. שלב 1 מתוך 3, כל ששת הנושאים, כל סוגי המידע וסקירה קצרה. החיפוש וההשוואה נוקו.");
  }

  function handleAction(event) {
    const trigger = event.target.closest("button[data-action]");
    if (!trigger || trigger.disabled) return;
    switch (trigger.dataset.action) {
      case "start-quiz":
        startQuiz();
        break;
      case "nav-quiz":
        switchView("quiz");
        break;
      case "nav-matrix":
        switchView("matrix");
        break;
      case "explore-all":
      case "nav-browse":
        switchView("browse");
        break;
      case "filter-matrix":
        renderComparisonMatrix(trigger.dataset.category || "all");
        break;
      case "filter-dissection":
        renderQuestionDissection(trigger.dataset.topic || "all");
        break;
      case "view-matrix-stance":
        openStanceModal(trigger.dataset.questionId, trigger.dataset.partyId, trigger);
        break;
      case "close-stance":
        closePanel(ui.stanceDialog);
        break;
      case "share-results":
        copyMatchResultsSummary();
        break;
      case "quiz-prev":
        prevQuizQuestion();
        break;
      case "quiz-next":
        nextQuizQuestion();
        break;
      case "quiz-skip":
        skipQuizQuestion();
        break;
      case "select-stance":
        selectStance(parseInt(trigger.dataset.stance, 10));
        break;
      case "quiz-edit-answers":
        editQuizAnswers();
        break;
      case "quiz-restart":
        restartQuiz();
        break;
      case "toggle-why":
        toggleWhyDrawer(trigger);
        break;
      case "explore-party-card":
        explorePartyInBrowse(trigger.dataset.partyId);
        break;
      case "start":
      case "edit-questionnaire":
        closePanels();
        navigateStep(1);
        break;
      case "back":
        if (state.step > 1) navigateStep(state.step - 1);
        break;
      case "select-all-topics":
        state.topics = new Set(TOPIC_IDS);
        clearTopicError();
        syncQuestionnaire();
        announce("כל ששת הנושאים נבחרו.");
        break;
      case "reset":
        reset();
        break;
      case "clear-search":
        state.search = "";
        ui.search.value = "";
        renderResults();
        focus(ui.search.disabled ? ui.resultsTitle : ui.search);
        announce(ui.resultsCount.textContent);
        break;
      case "toggle-comparison":
        changeComparison(trigger.dataset.partyId, trigger);
        break;
      case "remove-comparison":
        changeComparison(trigger.dataset.partyId, trigger, true);
        break;
      case "clear-comparison":
        state.comparison.clear();
        renderComparison();
        focus(ui.comparisonTitle);
        announce("בחירת הכרטיסים להשוואה נוקתה.");
        break;
      case "show-comparison":
        focus(ui.comparisonTitle);
        announce(state.comparison.size ? `${state.comparison.size} כרטיסים בהשוואה, בסדר א״ב.` : "לא נבחרו כרטיסים להשוואה.");
        break;
      case "back-to-results":
        focus(ui.resultsTitle);
        break;
      case "profile":
        openProfile(trigger.dataset.leaderId, trigger);
        break;
      case "sources":
        openSources(trigger);
        break;
      case "close-profile":
        closePanel(ui.profileDialog);
        break;
      case "close-sources":
        closePanel(ui.sourceDialog);
        break;
      default:
        break;
    }
  }

  function apply2026PartyUpdates(parties) {
    // The validated research object is the only authority for names and ballot letters.
    return parties;
  }

  function loadData(raw) {
    if (!raw) {
      if (typeof window !== "undefined" && window.ELECTION_DATA) {
        raw = window.ELECTION_DATA;
      } else {
        try {
          raw = require("./data/research.json");
        } catch {
          try {
            const fs = require("node:fs");
            const code = fs.readFileSync(require("node:path").join(__dirname, "data.js"), "utf8");
            const ctx = { window: {} };
            const vm = require("node:vm");
            vm.runInNewContext(code, ctx);
            raw = ctx.window.ELECTION_DATA;
          } catch {}
        }
      }
    }
    if (!raw) return false;
    const checked = validateResearch(raw);
    researchProblems = checked.problems;
    if (checked.valid) {
      research = raw;
      evidenceById = checked.evidenceIndex;
      sourcesById = new Map(raw.sources.map((source) => [source.id, source]));
      apply2026PartyUpdates(raw.parties);
      allParties = canonicalOrder(raw.parties);
      partiesById = new Map(allParties.map((party) => [party.id, party]));
      if (partiesById.has("beyachad")) {
        const p = partiesById.get("beyachad");
        partiesById.set("beyahad", p);
        partiesById.set("bennett_2026", p);
        partiesById.set("bennett_lapid", p);
        partiesById.set("yesh_atid", p);
      }
      if (partiesById.has("yashar")) {
        const p = partiesById.get("yashar");
        partiesById.set("eisenkot", p);
      }
      if (partiesById.has("religious_zionism")) {
        const p = partiesById.get("religious_zionism");
        partiesById.set("religious_zionism_zehut", p);
      }
      if (partiesById.has("hadash_taal")) {
        const p = partiesById.get("hadash_taal");
        partiesById.set("hadash", p);
        partiesById.set("taal", p);
      }
      topicsById = new Map(raw.topics.map((topic) => [topic.id, topic]));
      allParties.forEach((party) => party.leaderSummaries.forEach((leader) => {
        leadersById.set(leader.id, { leader, party });
        if (leader.candidacyEvidence) evidenceById.set(leader.candidacyEvidence.id, leader.candidacyEvidence);
        if (leader.identityEvidence) evidenceById.set(leader.identityEvidence.id, leader.identityEvidence);
        if (leader.publicRole) evidenceById.set(leader.publicRole.id, leader.publicRole);
      }));
      return true;
    }
    return false;
  }

  function init() {
    const ids = {
      form: "questionnaire-form", questionnaire: "questionnaire", topicOptions: "topic-options",
      topicCount: "topic-count", topicsError: "topics-error", readingSummary: "reading-summary",
      back: "questionnaire-back", next: "questionnaire-next", results: "results",
      resultsTitle: "results-title", resultsSelection: "results-selection", resultsCount: "results-count", resultsCoverage: "results-coverage",
      partyGrid: "party-grid", resultsEmpty: "results-empty", search: "party-search", clearSearch: "clear-search",
      comparison: "comparison", comparisonTitle: "comparison-title", comparisonCount: "comparison-count",
      comparisonLimit: "comparison-limit", comparisonSelections: "comparison-selections", clearComparison: "clear-comparison",
      comparisonGrid: "comparison-grid", comparisonEmpty: "comparison-empty", liveStatus: "live-status",
      profileDialog: "profile-dialog", profileTitle: "profile-dialog-title", profileBody: "profile-dialog-body",
      sourceDialog: "source-dialog", sourceTitle: "source-dialog-title", sourceBody: "source-dialog-body",
      metadata: "research-metadata", sourceCoverageSummary: "source-coverage-summary", electionDetails: "election-details", coverageDetails: "coverage-details", dataNotice: "data-notice",
      intro: "intro",
      comparisonMatrixSection: "comparison-matrix-section",
      matrixHeaderRow: "matrix-header-row",
      matrixTbody: "matrix-tbody",
      matrixCategoryFilters: "matrix-category-filters",
      confettiCanvas: "confetti-canvas",
      stanceDialog: "stance-dialog",
      stanceTitle: "stance-dialog-title",
      stanceBody: "stance-dialog-body",
      btnShareResults: "btn-share-results",
      quizSection: "quiz-section",
      quizStepIndicator: "quiz-step-indicator",
      quizCategoryTag: "quiz-category-tag",
      quizProgressBar: "quiz-progress-bar",
      quizTitle: "quiz-section-title",
      quizStatement: "quiz-question-statement",
      quizExplanation: "quiz-question-explanation",
      quizOptionsGroup: "quiz-options-group",
      quizImportantToggle: "quiz-important-toggle",
      quizBtnPrev: "quiz-btn-prev",
      quizBtnSkip: "quiz-btn-skip",
      quizBtnNext: "quiz-btn-next",
      quizResults: "quiz-results",
      quizResultsHeading: "quiz-results-heading",
      quizPodiumCards: "quiz-podium-cards",
      quizRankingItems: "quiz-ranking-items",
      quizQuestionsDissection: "quiz-questions-dissection",
      dissectionQuestionsList: "dissection-questions-list",
      dissectionTopicFilters: "dissection-topic-filters"
    };
    Object.entries(ids).forEach(([key, id]) => {
      ui[key] = document.getElementById(id);
    });
    ui.steps = ["step-topics", "step-evidence", "step-depth"].map((id) => document.getElementById(id));
    ui.stepHeadings = ["step-topics-title", "step-evidence-title", "step-depth-title"].map((id) => document.getElementById(id));
    ui.stepper = [...document.querySelectorAll(".stepper .step")];
    const raw = typeof window !== "undefined" ? window.ELECTION_DATA : null;
    loadData(raw);
    renderTopicOptions();
    syncQuestionnaire();
    navigateStep(1, false);
    ui.search.value = "";
    renderDataNotice();
    renderMetadata();
    renderElection();
    renderCoverage();
    renderResults();
    renderComparison();
    renderComparisonMatrix("all");
    const questions = getQuestions();
    if (ui.quizStepIndicator && questions.length > 0) {
      ui.quizStepIndicator.textContent = `שאלה 1 מתוך ${questions.length}`;
    }
    document.addEventListener("click", handleAction);
    ui.next.addEventListener("click", () => {
      if (!validateTopics()) return;
      if (state.step < 3) navigateStep(state.step + 1);
      else showResults();
    });
    ui.form.addEventListener("change", (event) => {
      const input = event.target;
      if (input.name === "topics" && TOPIC_IDS.includes(input.value)) {
        if (input.checked) state.topics.add(input.value);
        else state.topics.delete(input.value);
        if (state.topics.size) clearTopicError();
      } else if (input.name === "evidence" && Object.prototype.hasOwnProperty.call(FILTERS, input.value)) {
        state.evidence = input.value;
      } else if (input.name === "depth" && ["overview", "detail"].includes(input.value)) {
        state.depth = input.value;
      }
      syncQuestionnaire();
    });
    ui.search.addEventListener("input", () => {
      state.search = ui.search.value;
      renderResults();
      announce(ui.resultsCount.textContent);
    });
    [ui.profileDialog, ui.sourceDialog, ui.stanceDialog].filter(Boolean).forEach((dialog) => {
      dialog.addEventListener("cancel", (event) => {
        event.preventDefault();
        closePanel(dialog);
      });
    });
    if (ui.quizImportantToggle) {
      ui.quizImportantToggle.addEventListener("change", () => {
        const questions = getQuestions();
        if (!questions.length) return;
        const q = questions[quizState.currentIndex];
        if (!q) return;
        const existing = quizState.answers.get(q.id);
        if (existing) {
          existing.important = ui.quizImportantToggle.checked;
        } else {
          quizState.answers.set(q.id, { stance: 0, important: ui.quizImportantToggle.checked });
        }
      });
    }
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        const dialog = ui.sourceDialog?.hasAttribute("open") ? ui.sourceDialog :
                       ui.profileDialog?.hasAttribute("open") ? ui.profileDialog :
                       ui.stanceDialog?.hasAttribute("open") ? ui.stanceDialog : null;
        if (dialog) {
          event.preventDefault();
          closePanel(dialog);
        }
        return;
      }
      if (ui.quizSection && !ui.quizSection.hidden && !event.altKey && !event.ctrlKey && !event.metaKey) {
        if (["1", "2", "3", "4", "5"].includes(event.key)) {
          const map = { "1": 2, "2": 1, "3": 0, "4": -1, "5": -2 };
          selectStance(map[event.key]);
        } else if (event.key === "Enter" && event.target.tagName !== "BUTTON" && event.target.tagName !== "A") {
          nextQuizQuestion();
        }
      }
    });
  }

  // The same checks can validate a refresh in Node without loading a browser.
  if (typeof module === "object" && module.exports) {
    module.exports = {
      validateResearch, normaliseName, canonicalOrder, updateSelection,
      calculateMatchResults, quizState, getQuestions, loadData,
      QUIZ_CATEGORIES, getQuestionCategory, PARTY_BALLOT_LETTERS,
      renderComparisonMatrix, renderQuestionDissection,
      getPartyLeaderNames, apply2026PartyUpdates, hasRatedStance
    };
    return;
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init, { once: true });
  else init();
})();
