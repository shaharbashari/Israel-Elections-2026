(() => {
  "use strict";

  const CATEGORIES = [
    { id: "positions", label: "עמדות מוצהרות" },
    { id: "promises", label: "הבטחות מוצהרות" },
    { id: "records", label: "מעשים ורשומות" },
    { id: "contextualReporting", label: "דיווח והקשר" }
  ];
  const FILTERS = {
    all: { label: "כל סוגי המידע", categories: CATEGORIES.map(({ id }) => id) },
    declared: { label: "הצהרות והבטחות", categories: ["positions", "promises"] },
    documented: { label: "מעשים ורשומות", categories: ["records"] },
    context: { label: "דיווח והקשר", categories: ["contextualReporting"] }
  };
  const EVIDENCE_LABELS = {
    declared: "הצהרה מיוחסת", historical: "תיעוד היסטורי",
    missing: "פער במידע", uncertain: "מידע מסויג"
  };
  const LIST_LABELS = {
    confirmed: "אישור רשמי לפי המחקר", provisional: "מעמד זמני",
    unverified: "ללא אימות רשמי ישיר", missing: "אין מידע על המעמד",
    uncertain: "מעמד מסויג", not_on_confirmed_list: "אינה ברשימה המאושרת"
  };
  const ROSTER_LABELS = {
    approved: "אושרה לפי המקורות", submitted: "הוגשה לפי המקורות",
    withdrawn: "פרשה", rejected: "נדחתה", announced: "הוכרזה",
    unverified: "מעמד לא מאומת"
  };
  const COMPLETENESS_LABELS = {
    complete: "מיפוי מלא לפי בסיס המחקר",
    partial: "מיפוי חלקי",
    unverified: "שלמות המיפוי לא אומתה"
  };
  const CANDIDACY_LABELS = {
    confirmed: "מועמדות מאושרת לפי המחקר", unverified: "מועמדות לא מאומתת ישירות",
    uncertain: "מועמדות מסויגת", not_on_confirmed_list: "אינו ברשימת המועמדים המאושרת"
  };
  const SOURCE_TYPES = {
    electoral_authority: "רשות בחירות",
    party_official: "פרסום מטעם מפלגה",
    government_record: "רשומה ממשלתית",
    parliamentary_record: "רשומה פרלמנטרית",
    judicial_record: "רשומה שיפוטית",
    independent_reporting: "דיווח עצמאי",
    academic_or_civil_society: "מחקר או חברה אזרחית",
    other_primary: "מקור ראשוני אחר"
  };
  const SOURCE_LIMITS = {
    electoral_authority: "מקור של רשות בחירות. יש לבדוק את המסמך, את תאריכו ואת הערות הגישה; סוג המקור לבדו אינו מאמת כל טענה.",
    party_official: "פרסום מטעם מפלגה מתעד הצהרה או הבטחה, לא הוכחה לביצוע או אישור מועמדות.",
    government_record: "רשומה ממשלתית מתייחסת להקשר ולאירוע המתועדים בה, ולא בהכרח לעמדה נוכחית.",
    parliamentary_record: "יש לקרוא את הייחוס, מועד הדיון או ההצבעה וההקשר הפרלמנטרי. אין להסיק מכאן עמדה שלא תועדה.",
    judicial_record: "רשומה שיפוטית מתארת הליך או החלטה בהקשרם. אין להרחיב את הקביעה מעבר למסמך.",
    independent_reporting: "דיווח עיתונאי הוא תיאור מיוחס. הוא אינו תחליף למסמך רשמי במקום שנדרש כזה.",
    academic_or_civil_society: "מחקר או מעקב מספקים הקשר בהתאם לשיטה ולתאריך הפרסום, ולא אישור רשמי למועמדות.",
    other_primary: "מקור ראשוני בהקשר המתואר. יש לעיין במסמך ובהערות לפני הסקת מסקנות."
  };
  const RECORD_KINDS = ["vote", "legislation", "government_action", "judicial_record", "public_statement", "other"];
  const TOPIC_ART = {
    economy_cost_of_living: ["coral", "topic-economy.svg"],
    security_foreign_relations: ["cobalt", "topic-world.svg"],
    institutions_democracy: ["violet", "topic-civic.svg"],
    religion_state: ["gold", "topic-community.svg"],
    public_services_equality: ["rose", "topic-society.svg"],
    environment_infrastructure: ["mint", "topic-environment.svg"]
  };
  const COMPARISON_LIMIT = 4;
  const collator = new Intl.Collator("he", { usage: "sort", sensitivity: "base" });
  const own = (object, key) => Object.prototype.hasOwnProperty.call(object, key);
  const nonempty = (value) => typeof value === "string" && value.trim().length > 0;
  const asArray = (value) => Array.isArray(value) ? value : [];

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
          (a === 100 && b >= 64 && b <= 127) || (a === 169 && b === 254) ||
          (a === 172 && b >= 16 && b <= 31) ||
          (a === 192 && (b === 168 || b === 0 || (b === 88 && c === 99))) ||
          (a === 198 && (b === 18 || b === 19 || (b === 51 && c === 100))) ||
          (a === 203 && b === 0 && c === 113)) return null;
      } else if (!/^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z](?:[a-z0-9-]{0,61}[a-z0-9])?$/u.test(host)) return null;
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
    return !/[+-]14:(?!00)/u.test(value) && validDate(value.slice(0, 10)) && Number.isFinite(Date.parse(value));
  }

  function validateResearch(data) {
    const problems = [];
    const sourceIndex = new Map();
    const evidenceIndex = new Map();
    const partyIds = new Set();
    const leaderIds = new Set();
    const topicIds = new Set();
    const sourceReferences = [];
    const contradictions = [];
    const authoritativeChecks = [];
    const categoryIds = CATEGORIES.map(({ id }) => id);
    const gapTargets = [...categoryIds, "identity", "leadership", "candidacy", "party_list", "election_date", "coverage"];
    const problem = (path, message) => { if (problems.length < 100) problems.push(`${path}: ${message}`); };
    const fields = (value, required, optional, path) => {
      if (!value || typeof value !== "object" || Array.isArray(value)) {
        problem(path, "נדרש אובייקט נתונים");
        return false;
      }
      required.forEach((key) => { if (!own(value, key)) problem(`${path}.${key}`, "שדה נדרש חסר"); });
      Object.keys(value).forEach((key) => { if (!required.includes(key) && !optional.includes(key)) problem(`${path}.${key}`, "שדה שאינו מורשה במתכונת המחקר"); });
      return true;
    };
    const text = (value, path, nullable = false) => {
      if (!(nullable && value === null) && !(typeof value === "string" && (nullable || nonempty(value)))) problem(path, "נדרש טקסט תקין");
    };
    const choice = (value, choices, path) => { if (!choices.includes(value)) problem(path, "ערך שאינו מורשה"); };
    const date = (value, path, nullable = false) => { if (!(nullable && value === null) && !validDate(value)) problem(path, "נדרש תאריך לוח שנה תקין"); };
    const timestamp = (value, path) => { if (!validTimestamp(value)) problem(path, "נדרש זמן ISO תקין עם אזור זמן"); };
    const id = (value, path) => {
      if (typeof value !== "string" || !/^[a-z][a-z0-9_-]*$/u.test(value)) { problem(path, "מזהה לא תקין"); return false; }
      return true;
    };
    const array = (value, path, visit) => {
      if (!Array.isArray(value)) { problem(path, "נדרשת רשימה"); return; }
      value.forEach((entry, index) => visit(entry, `${path}[${index}]`));
    };
    const ids = (value, path, references = true) => {
      const seen = new Set();
      array(value, path, (entry, entryPath) => {
        if (!id(entry, entryPath)) return;
        if (seen.has(entry)) problem(entryPath, "הפניה כפולה");
        seen.add(entry);
        if (references) sourceReferences.push([entry, entryPath]);
      });
    };
    const uniqueId = (value, seen, path) => {
      if (!id(value, path)) return;
      if (seen.has(value)) problem(path, "מזהה כפול");
      seen.add(value);
    };
    const evidence = (entry, path, kind = "evidence") => {
      const required = ["id", "summaryHe", "detailHe", "status", "sourceIds", "missingEvidenceLabelHe", "uncertaintyLabelHe", "asOfDate", "eventDate", "coverageNoteHe", "contradictionIds"];
      if (!fields(entry, required, ["recordKind", "attributionHe", "dateUncertaintyLabelHe", "appliesTo"], path)) return;
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
      asArray(entry.contradictionIds).forEach((reference) => contradictions.push([entry.id, reference, `${path}.contradictionIds`]));
      const hasSources = asArray(entry.sourceIds).length > 0;
      if (!hasSources && !nonempty(entry.missingEvidenceLabelHe)) problem(path, "נדרשים מקורות או תווית פער מפורשת");
      if (["declared", "historical"].includes(entry.status) && !hasSources) problem(path, "הצהרה ותיעוד היסטורי דורשים מקור");
      if (entry.status === "missing" && !nonempty(entry.missingEvidenceLabelHe)) problem(path, "פער ללא תווית");
      if (entry.status === "uncertain" && !nonempty(entry.uncertaintyLabelHe)) problem(path, "אי־ודאות ללא תווית");
      if ("recordKind" in entry) choice(entry.recordKind, RECORD_KINDS, `${path}.recordKind`);
      if ("attributionHe" in entry) text(entry.attributionHe, `${path}.attributionHe`);
      if ("dateUncertaintyLabelHe" in entry) text(entry.dateUncertaintyLabelHe, `${path}.dateUncertaintyLabelHe`, true);
      if ("appliesTo" in entry) choice(entry.appliesTo, gapTargets, `${path}.appliesTo`);
      if (kind === "record") {
        ["recordKind", "attributionHe", "dateUncertaintyLabelHe"].forEach((key) => { if (!own(entry, key)) problem(`${path}.${key}`, "שדה רשומה נדרש חסר"); });
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
    const evidenceArray = (value, path, kind) => array(value, path, (entry, entryPath) => evidence(entry, entryPath, kind));
    const confirmation = (status, entry, path) => {
      if (!["confirmed", "not_on_confirmed_list"].includes(status)) return;
      authoritativeChecks.push([asArray(entry?.sourceIds), path]);
      if (status === "not_on_confirmed_list" && data.election?.listConfirmationStatus !== "confirmed") problem(path, "קביעה על אי־הופעה דורשת רשימה רשמית מלאה");
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
      if (!fields(entry, ["id", "nameHe", "identityEvidence", "listStatus", "listStatusEvidence", "leaderSummaries", "topicPositions", "generalContext", "gaps"], ["ballotLetters", "ballotSourceIds", "aliases", "componentNames", "bloc"], path)) return;
      uniqueId(entry.id, partyIds, `${path}.id`);
      text(entry.nameHe, `${path}.nameHe`);
      if ("ballotLetters" in entry) text(entry.ballotLetters, `${path}.ballotLetters`, true);
      if ("ballotSourceIds" in entry) ids(entry.ballotSourceIds, `${path}.ballotSourceIds`);
      if ("bloc" in entry) text(entry.bloc, `${path}.bloc`, true);
      ["aliases", "componentNames"].forEach((key) => { if (key in entry) array(entry[key], `${path}.${key}`, (value, p) => text(value, p)); });
      evidence(entry.identityEvidence, `${path}.identityEvidence`);
      choice(entry.listStatus, Object.keys(LIST_LABELS).filter((value) => value !== "missing"), `${path}.listStatus`);
      evidence(entry.listStatusEvidence, `${path}.listStatusEvidence`);
      confirmation(entry.listStatus, entry.listStatusEvidence, `${path}.listStatusEvidence`);
      array(entry.leaderSummaries, `${path}.leaderSummaries`, leader);
      evidenceArray(entry.generalContext, `${path}.generalContext`);
      evidenceArray(entry.gaps, `${path}.gaps`, "gap");
      if (!asArray(entry.leaderSummaries).length && !asArray(entry.gaps).some((gap) => gap?.appliesTo === "leadership" && gap.status === "missing")) problem(path, "אין פרופילים ואין פער מנהיגות מפורש");
      if (!fields(entry.topicPositions, [...topicIds], [], `${path}.topicPositions`)) return;
      topicIds.forEach((topicId) => {
        const bucket = entry.topicPositions[topicId];
        const bucketPath = `${path}.topicPositions.${topicId}`;
        if (!fields(bucket, [...categoryIds, "gaps"], [], bucketPath)) return;
        evidenceArray(bucket.gaps, `${bucketPath}.gaps`, "gap");
        categoryIds.forEach((category) => {
          evidenceArray(bucket[category], `${bucketPath}.${category}`, category === "records" ? "record" : ["positions", "promises"].includes(category) ? "declaration" : "evidence");
          if (!asArray(bucket[category]).length && !asArray(bucket.gaps).some((gap) => gap?.appliesTo === category && gap.status === "missing")) problem(`${bucketPath}.${category}`, "קטגוריה ריקה ללא פער ייעודי");
        });
      });
    };

    if (!fields(data, ["schemaVersion", "language", "updatedAt", "asOfDate", "partyOrder", "election", "coverage", "topics", "sources", "parties"], ["roster"], "research")) return { valid: false, problems, evidenceIndex };
    choice(data.schemaVersion, [1], "research.schemaVersion");
    choice(data.language, ["he-IL"], "research.language");
    choice(data.partyOrder, ["hebrew_alphabetical"], "research.partyOrder");
    timestamp(data.updatedAt, "research.updatedAt");
    date(data.asOfDate, "research.asOfDate");
    array(data.topics, "research.topics", (entry, path) => {
      if (!fields(entry, ["id", "labelHe", "descriptionHe"], [], path)) return;
      uniqueId(entry.id, topicIds, `${path}.id`);
      text(entry.labelHe, `${path}.labelHe`);
      text(entry.descriptionHe, `${path}.descriptionHe`);
    });
    if (!topicIds.size) problem("research.topics", "נדרשים נושאי מחקר");
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
      date(election.claimedScheduledDate, "research.election.claimedScheduledDate");
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
      if (!asArray(election.caveats).length) problem("research.election.caveats", "נדרשת הסתייגות בחירות מפורשת");
      if (election.dateConfirmationStatus === "confirmed") {
        if (!validDate(election.verifiedDate) || election.scheduledDate !== election.verifiedDate || election.scheduledDateOrigin !== "authoritative_source") problem("research.election", "מועד מאומת דורש תאריך רשמי עקבי");
        authoritativeChecks.push([asArray(election.dateSourceIds), "research.election.dateSourceIds"]);
      } else if (election.verifiedDate !== null || !nonempty(election.dateMissingEvidenceLabelHe)) problem("research.election", "מועד לא מאומת דורש verifiedDate=null והסתייגות");
      if (election.dateConfirmationStatus === "unverified_user_claim" && (election.scheduledDate !== election.claimedScheduledDate || election.scheduledDateOrigin !== "user_claim")) problem("research.election", "יש לשמור טענת תאריך כטענה לא מאומתת");
      if (election.listConfirmationStatus === "confirmed") authoritativeChecks.push([asArray(election.listSourceIds), "research.election.listSourceIds"]);
      else if (!nonempty(election.listMissingEvidenceLabelHe)) problem("research.election", "מעמד רשימות לא מאומת דורש הסתייגות");
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
      if (!asArray(coverage.limitations).length) problem("research.coverage.limitations", "נדרשת מגבלת כיסוי מפורשת");
      const included = new Set(asArray(coverage.includedPartyIds));
      if (included.size !== partyIds.size || [...partyIds].some((partyId) => !included.has(partyId))) problem("research.coverage.includedPartyIds", "הכיסוי אינו תואם לרשומות");
      if (coverage.listConfirmationStatus !== election?.listConfirmationStatus) problem("research.coverage.listConfirmationStatus", "מעמד הרשימות אינו עקבי");
      if (["confirmed_official_list", "provisional_official_list"].includes(coverage.partyCoverageBasis)) {
        const expected = coverage.partyCoverageBasis === "confirmed_official_list" ? "confirmed" : "provisional";
        if (coverage.listConfirmationStatus !== expected) problem("research.coverage", "בסיס כיסוי רשמי אינו תואם למעמד");
        authoritativeChecks.push([asArray(coverage.officialListSourceIds), "research.coverage.officialListSourceIds"]);
      }
    }
    if (own(data, "roster") && fields(data.roster, ["asOfDate", "completeness", "authoritySourceIds", "enumerationSourceIds", "basisHe", "entries", "exclusions"], [], "research.roster")) {
      const roster = data.roster;
      date(roster.asOfDate, "research.roster.asOfDate");
      choice(roster.completeness, Object.keys(COMPLETENESS_LABELS), "research.roster.completeness");
      ids(roster.authoritySourceIds, "research.roster.authoritySourceIds");
      ids(roster.enumerationSourceIds, "research.roster.enumerationSourceIds");
      text(roster.basisHe, "research.roster.basisHe");
      asArray(roster.authoritySourceIds).forEach((reference) => {
        if (sourceIndex.get(reference)?.sourceType !== "electoral_authority") problem("research.roster.authoritySourceIds", "מקור סמכות חייב להיות רשות בחירות");
      });
      if (roster.completeness === "complete" && !asArray(roster.authoritySourceIds).length && !asArray(roster.enumerationSourceIds).length) problem("research.roster", "מיפוי מלא דורש בסיס מפורש למניין");
      const rosterIds = new Set();
      array(roster.entries, "research.roster.entries", (entry, path) => {
        if (!fields(entry, ["id", "nameHe", "ballotLetters", "status", "sourceIds", "noteHe"], [], path)) return;
        uniqueId(entry.id, rosterIds, `${path}.id`);
        if (!partyIds.has(entry.id)) problem(`${path}.id`, "אין רשומה תואמת במאגר");
        text(entry.nameHe, `${path}.nameHe`);
        text(entry.ballotLetters, `${path}.ballotLetters`, true);
        choice(entry.status, Object.keys(ROSTER_LABELS), `${path}.status`);
        ids(entry.sourceIds, `${path}.sourceIds`);
        text(entry.noteHe, `${path}.noteHe`, true);
        if (entry.status !== "unverified" && !asArray(entry.sourceIds).length) problem(path, "קביעת מעמד דורשת מקור");
        if (nonempty(entry.ballotLetters) && !asArray(entry.sourceIds).length) problem(path, "אותיות דורשות אסמכתה");
      });
      if (rosterIds.size !== partyIds.size || [...partyIds].some((partyId) => !rosterIds.has(partyId))) problem("research.roster.entries", "מפת הרשימות אינה תואמת לפרופילים");
      array(roster.exclusions, "research.roster.exclusions", (entry, path) => {
        if (!fields(entry, ["nameHe", "reasonHe", "sourceIds"], [], path)) return;
        text(entry.nameHe, `${path}.nameHe`);
        text(entry.reasonHe, `${path}.reasonHe`);
        ids(entry.sourceIds, `${path}.sourceIds`);
        if (asArray(roster.entries).some((candidate) => candidate && nonempty(candidate.nameHe) && candidate.nameHe === entry.nameHe && !["withdrawn", "rejected"].includes(candidate.status))) problem(path, "רשומה מוחרגת אינה יכולה להופיע כמתמודדת");
      });
    }
    sourceReferences.forEach(([reference, path]) => { if (!sourceIndex.has(reference)) problem(path, "הפניה למקור שאינו קיים"); });
    contradictions.forEach(([origin, reference, path]) => { if (origin === reference || !evidenceIndex.has(reference)) problem(path, "הפניית סתירה אינה נפתרת או מפנה לעצמה"); });
    authoritativeChecks.forEach(([references, path]) => {
      if (!references.some((reference) => sourceIndex.get(reference)?.sourceType === "electoral_authority")) problem(path, "אימות רשמי דורש מקור רשות בחירות");
    });
    return { valid: problems.length === 0, problems, evidenceIndex };
  }

  function evidenceOwnership(data) {
    const owners = new Map();
    asArray(data?.parties).forEach((party) => {
      const add = (item, category, topicId = null) => {
        if (item?.id) owners.set(item.id, { partyId: party.id, category, topicId });
      };
      const many = (items, category, topicId) => asArray(items).forEach((item) => add(item, category, topicId));
      add(party.identityEvidence, "contextualReporting");
      add(party.listStatusEvidence, "contextualReporting");
      many(party.generalContext, "contextualReporting");
      many(party.gaps, "contextualReporting");
      asArray(party.leaderSummaries).forEach((leader) => {
        [leader.identityEvidence, leader.publicRole, leader.candidacyEvidence].forEach((item) => add(item, "contextualReporting"));
        many(leader.summary, "contextualReporting");
        many(leader.documentedRecords, "records");
        many(leader.gaps, "contextualReporting");
      });
      Object.entries(party.topicPositions || {}).forEach(([topicId, bucket]) => {
        CATEGORIES.forEach(({ id }) => many(bucket[id], id, topicId));
        asArray(bucket.gaps).forEach((item) => add(item, item.appliesTo, topicId));
      });
    });
    return owners;
  }

  function validateIssueGuide(guide, data, evidenceIndex) {
    const problems = [];
    const fail = (message) => { if (problems.length < 100) problems.push(message); };
    if (!guide || typeof guide !== "object" || Array.isArray(guide)) return { valid: false, problems: ["מפת השאלות לא נטענה. אין אפשרות לפתור הפניות לשאלות."] };
    const allowedGuideKeys = ["version", "asOfDate", "questions"];
    if (Object.keys(guide).some((key) => !allowedGuideKeys.includes(key))) fail("issueGuide: שדה שאינו במתכונת מפת הקריאה");
    if (guide.version !== 1) fail("issueGuide.version: גרסה לא נתמכת");
    if (!validDate(guide.asOfDate)) fail("issueGuide.asOfDate: תאריך לא תקין");
    if (!Array.isArray(guide.questions) || !guide.questions.length) fail("issueGuide.questions: אין שאלות לקריאה");
    if (!data || !Array.isArray(data.parties) || !Array.isArray(data.topics)) return { valid: false, problems: [...problems, "אין מחקר תקין לפתרון ההפניות"] };
    if (!evidenceIndex) {
      const checked = validateResearch(data);
      if (!checked.valid) return { valid: false, problems: [...problems, "אין מחקר תקין לפתרון ההפניות", ...checked.problems] };
      evidenceIndex = checked.evidenceIndex;
    }
    const index = evidenceIndex;
    const owners = evidenceOwnership(data);
    const partyIds = new Set(data.parties.map(({ id }) => id));
    const topicIds = new Set(data.topics.map(({ id }) => id));
    const questionIds = new Set();
    asArray(guide.questions).forEach((question, number) => {
      const path = `issueGuide.questions[${number}]`;
      if (!question || typeof question !== "object" || Array.isArray(question)) { fail(`${path}: נדרשת שאלה`); return; }
      const keys = ["id", "topicId", "titleHe", "promptHe", "explanationHe", "evidenceByParty"];
      if (Object.keys(question).some((key) => !keys.includes(key)) || keys.some((key) => !own(question, key))) fail(`${path}: שדות שאינם תואמים למתכונת`);
      if (!/^[a-z][a-z0-9_-]*$/u.test(question.id || "") || questionIds.has(question.id)) fail(`${path}: מזהה שאלה חסר או כפול`);
      questionIds.add(question.id);
      if (!topicIds.has(question.topicId)) fail(`${path}: נושא לא קיים`);
      ["titleHe", "promptHe", "explanationHe"].forEach((key) => { if (!nonempty(question[key])) fail(`${path}.${key}: טקסט חסר`); });
      const mapping = question.evidenceByParty;
      if (!mapping || typeof mapping !== "object" || Array.isArray(mapping)) { fail(`${path}: מפת הפניות חסרה`); return; }
      if (Object.keys(mapping).length !== partyIds.size || [...partyIds].some((partyId) => !own(mapping, partyId))) fail(`${path}: נדרשת הפניה מפורשת או רשימה ריקה לכל רשומה במחקר`);
      Object.entries(mapping).forEach(([partyId, references]) => {
        if (!partyIds.has(partyId)) fail(`${path}.${partyId}: רשומה לא קיימת`);
        if (!Array.isArray(references)) { fail(`${path}.${partyId}: נדרשת רשימת מזהי תיעוד`); return; }
        if (new Set(references).size !== references.length) fail(`${path}.${partyId}: הפניה כפולה`);
        references.forEach((reference) => {
          if (typeof reference !== "string" || !index.has(reference)) fail(`${path}.${partyId}: תיעוד לא קיים`);
          else if (owners.get(reference)?.partyId !== partyId) fail(`${path}.${partyId}: התיעוד אינו שייך לרשומה`);
          else if (owners.get(reference)?.topicId !== question.topicId) fail(`${path}.${partyId}: התיעוד אינו שייך לנושא השאלה`);
        });
      });
    });
    return { valid: problems.length === 0, problems };
  }

  function normaliseName(value) {
    return String(value).normalize("NFKC").toLocaleLowerCase("he-IL").replace(/\p{M}/gu, "")
      .replace(/[\u05f3\u2018\u2019\u02bc]/gu, "'").replace(/[\u05f4\u201c\u201d]/gu, '"').replace(/\s+/gu, " ").trim();
  }

  function canonicalOrder(parties) {
    return [...parties].sort((a, b) => collator.compare(a.nameHe.normalize("NFKC"), b.nameHe.normalize("NFKC")) || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
  }

  function currentParties(data) {
    if (!data) return [];
    const entries = data.roster ? new Map(data.roster.entries.map((entry) => [entry.id, entry])) : null;
    return canonicalOrder(data.parties.filter((party) => {
      if (party.listStatus === "not_on_confirmed_list") return false;
      return !entries || (entries.has(party.id) && !["withdrawn", "rejected"].includes(entries.get(party.id).status));
    }));
  }

  function nameMatches(party, query) {
    const needle = normaliseName(query);
    return [party.nameHe, ...asArray(party.aliases), ...asArray(party.componentNames)].some((name) => normaliseName(name).includes(needle));
  }

  function ballotInfo(party, data) {
    const entry = data?.roster?.entries.find(({ id }) => id === party.id);
    if (entry) return nonempty(entry.ballotLetters) && entry.sourceIds.length ? { letters: entry.ballotLetters, sourceIds: [...entry.sourceIds] } : null;
    if (nonempty(party.ballotLetters) && asArray(party.ballotSourceIds).length) return { letters: party.ballotLetters, sourceIds: [...party.ballotSourceIds] };
    return null;
  }

  function createReadingState() {
    return { view: "overview", step: 1, topics: new Set(), evidence: "all", depth: "brief", search: "", comparison: new Set(), reading: false, questionId: null, comparisonQuestionId: null };
  }

  function resetReadingState(target) {
    Object.assign(target, createReadingState());
    return target;
  }

  function updateSelection(selection, id) {
    if (selection.has(id)) { selection.delete(id); return "removed"; }
    if (selection.size >= COMPARISON_LIMIT) return "blocked";
    selection.add(id);
    return "added";
  }

  function buildIssueRows(data, guide, questionId, filter = "all") {
    const checked = validateResearch(data);
    if (!checked.valid || !validateIssueGuide(guide, data, checked.evidenceIndex).valid || !own(FILTERS, filter)) return [];
    const question = guide.questions.find(({ id }) => id === questionId);
    if (!question) return [];
    const owners = evidenceOwnership(data);
    return currentParties(data).map((party) => {
      const linkedEvidence = question.evidenceByParty[party.id].map((id) => checked.evidenceIndex.get(id));
      const evidence = linkedEvidence.filter((item) => item.status === "missing" || filter === "all" || FILTERS[filter].categories.includes(owners.get(item.id)?.category));
      return {
        party, linkedEvidence, evidence, otherCount: linkedEvidence.length - evidence.length,
        hasGap: linkedEvidence.length === 0 || linkedEvidence.some((item) => item.status === "missing")
      };
    });
  }

  const state = createReadingState();
  const model = { research: null, guide: null, problems: [], guideProblems: [], evidenceIndex: new Map(), sources: new Map(), parties: [], partyIndex: new Map(), topics: new Map(), roster: new Map() };
  const dialogTriggers = new WeakMap();
  let announcementTimer = null;
  let resetting = false;
  const $ = (id) => document.getElementById(id);

  function loadData(data, guide = null) {
    const checked = validateResearch(data);
    resetReadingState(state);
    model.research = checked.valid ? data : null;
    model.problems = checked.problems;
    model.evidenceIndex = checked.valid ? checked.evidenceIndex : new Map();
    const guideCheck = checked.valid ? validateIssueGuide(guide, data, checked.evidenceIndex) : { valid: false, problems: ["אין מחקר תקין לפתרון הפניות השאלות."] };
    model.guide = guideCheck.valid ? guide : null;
    model.guideProblems = guideCheck.problems;
    model.sources = new Map(checked.valid ? data.sources.map((source) => [source.id, source]) : []);
    model.parties = checked.valid ? currentParties(data) : [];
    model.partyIndex = new Map(model.parties.map((party) => [party.id, party]));
    model.topics = new Map(checked.valid ? data.topics.map((topic) => [topic.id, topic]) : []);
    model.roster = new Map(checked.valid && data.roster ? data.roster.entries.map((entry) => [entry.id, entry]) : []);
    return checked.valid;
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined && text !== null) node.textContent = String(text);
    return node;
  }

  function paragraph(parent, text, className) {
    if (nonempty(text)) parent.append(element("p", className, text));
  }

  function button(label, action, className = "text-button") {
    const node = element("button", className, label);
    node.type = "button";
    node.dataset.action = action;
    return node;
  }

  function focus(node) {
    if (node?.isConnected && !node.closest("[hidden]")) node.focus({ preventScroll: true });
  }

  function announce(message) {
    window.clearTimeout(announcementTimer);
    $("live-status").textContent = "";
    announcementTimer = window.setTimeout(() => { $("live-status").textContent = message; }, 40);
  }

  function formattedDate(value, short = false) {
    if (!validDate(value)) return "לא ידוע";
    return new Intl.DateTimeFormat("he-IL", { year: "numeric", month: short ? "numeric" : "long", day: "numeric", timeZone: "UTC" }).format(new Date(`${value}T00:00:00Z`));
  }

  function timeNode(value, label = "", short = true) {
    const node = element("time", "", `${label}${formattedDate(value, short)}`);
    if (validDate(value)) node.dateTime = value;
    return node;
  }

  function statusTag(status, label) {
    const node = element("span", "status-tag", label);
    node.dataset.status = status;
    return node;
  }

  function art(topicId, size = 54) {
    const [tone, filename] = TOPIC_ART[topicId] || ["violet", "topic-civic.svg"];
    const image = element("img");
    image.src = `assets/${filename}`;
    image.alt = "";
    image.width = size;
    image.height = size;
    return { tone, image, filename };
  }

  function disclosure(title, className = "profile-section", open = false) {
    const node = element("details", className);
    node.open = open;
    node.append(element("summary", "", title));
    return node;
  }

  function sourceControl(sourceIds, context, evidenceId = null) {
    const label = sourceIds.length ? `מקורות והערות · ${sourceIds.length}` : "פרטי הפער · אין מקור מקושר";
    const control = button(label, "sources", "source-control");
    control.dataset.sourceIds = sourceIds.join(" ");
    control.dataset.sourceContext = context;
    if (evidenceId) control.dataset.evidenceId = evidenceId;
    control.setAttribute("aria-label", `${label}: ${context}`);
    return control;
  }

  function renderEvidence(item, { deep = false, sources = true, contradictions = true } = {}) {
    const wrapper = element("article", "evidence-item");
    wrapper.dataset.evidenceId = item.id;
    const meta = element("div", "evidence-meta");
    meta.append(statusTag(item.status, EVIDENCE_LABELS[item.status]), timeNode(item.asOfDate, "נכון ל־"));
    if (item.eventDate) meta.append(timeNode(item.eventDate, "מועד האירוע: "));
    wrapper.append(meta, element("p", "evidence-summary", item.summaryHe));
    if (item.missingEvidenceLabelHe !== item.summaryHe) paragraph(wrapper, item.missingEvidenceLabelHe, "evidence-note");
    paragraph(wrapper, item.uncertaintyLabelHe, "evidence-note");
    if (item.attributionHe) paragraph(wrapper, `ייחוס: ${item.attributionHe}`, "evidence-note");
    const notes = [item.detailHe, item.coverageNoteHe, item.dateUncertaintyLabelHe].filter(nonempty);
    if (notes.length || (contradictions && item.contradictionIds.length)) {
      const extra = deep ? element("div", "evidence-extra") : disclosure("הקשר והסתייגויות", "evidence-extra");
      notes.forEach((note) => paragraph(extra, note));
      if (contradictions && item.contradictionIds.length) {
        paragraph(extra, "תיעוד שהמחקר מסמן כסתירה או כהקשר נוסף:");
        item.contradictionIds.forEach((id) => {
          const related = model.evidenceIndex.get(id);
          if (!related) return;
          paragraph(extra, related.summaryHe);
          if (sources) extra.append(sourceControl(related.sourceIds, related.summaryHe, related.id));
        });
      }
      wrapper.append(extra);
    }
    if (sources) wrapper.append(sourceControl(item.sourceIds, item.summaryHe, item.id));
    return wrapper;
  }

  function renderGap(date, message = "לא נמצא במאגר תיעוד המקושר לשאלה זו.", compact = false) {
    const node = element("div", compact ? "gap-message gap-message--compact" : "gap-message");
    node.append(element("p", "", message));
    if (!compact) paragraph(node, "זהו פער במידע, לא תמיכה, התנגדות או ניטרליות.");
    const meta = element("div", "gap-meta");
    meta.append(timeNode(date, "בדיקת המפה: "), sourceControl([], message));
    node.append(meta);
    return node;
  }

  function ballotMark(party) {
    const ballot = ballotInfo(party, model.research);
    let node;
    if (ballot) {
      node = button("", "sources", "ballot-mark");
      node.dataset.sourceIds = ballot.sourceIds.join(" ");
      node.dataset.sourceContext = `אותיות הרשימה לפי המקורות: ${party.nameHe}`;
      node.setAttribute("aria-label", `אותיות ${ballot.letters} — לפתיחת האסמכתאות של ${party.nameHe}`);
      node.append(element("strong", "", ballot.letters), element("small", "", "אותיות · מקור"));
    } else {
      node = element("div", "ballot-mark ballot-mark--name");
      const initial = Array.from(party.nameHe.replace(/[^\p{L}\p{N}]/gu, ""))[0] || "—";
      node.append(element("strong", "", initial), element("small", "", "שם, לא פתק"));
      node.setAttribute("aria-label", "ראשית השם בלבד; אין אותיות קלפי עם אסמכתה זמינה");
    }
    return node;
  }

  function partyStatus(party) {
    const entry = model.roster.get(party.id);
    return entry ? statusTag(entry.status, ROSTER_LABELS[entry.status]) : statusTag(party.listStatus, LIST_LABELS[party.listStatus]);
  }

  function comparisonChoice(party, compact = false) {
    const label = element("label", "compare-choice");
    const input = element("input");
    input.type = "checkbox";
    input.dataset.comparison = party.id;
    input.checked = state.comparison.has(party.id);
    input.setAttribute("aria-label", `בחירה להשוואה: ${party.nameHe}`);
    label.append(input, element("span", "", compact ? "להשוואה" : party.nameHe));
    return label;
  }

  function profileButton(party, text = "לפרופיל ולמקורות ←") {
    const control = button(text, "profile");
    control.dataset.partyId = party.id;
    control.setAttribute("aria-label", `פרופיל ומקורות: ${party.nameHe}`);
    return control;
  }

  function renderMetadata() {
    const target = $("research-metadata");
    target.replaceChildren();
    if (!model.research) return;
    const data = model.research;
    const entries = [
      ["רשומות במאגר", String(model.parties.length)],
      ["שאלות במפת הנושאים", model.guide ? String(model.guide.questions.length) : "לא זמינה עדיין"],
      ["המחקר נכון ל־", formattedDate(data.roster?.asOfDate || data.asOfDate, true)],
      [data.election.dateConfirmationStatus === "confirmed" ? "מועד הבחירות במקורות" : "מועד שטרם אומת", formattedDate(data.election.scheduledDate, true)]
    ];
    entries.forEach(([label, value], index) => {
      const cell = element("div");
      cell.append(element("dt", "", label), element("dd", "", value));
      if (index === 3) cell.append(button("מקור ומעמד התאריך", "coverage"));
      target.append(cell);
    });
    const basis = $("roster-basis");
    basis.replaceChildren();
    const roster = data.roster;
    basis.append(statusTag(roster?.completeness || "unverified", COMPLETENESS_LABELS[roster?.completeness || "unverified"]), element("p", "", roster?.basisHe || data.coverage.descriptionHe), button("היקף, מקורות ומגבלות", "coverage"));
  }

  function renderTopics() {
    $("topic-shortcuts").replaceChildren();
    $("topic-options").replaceChildren();
    model.topics.forEach((topic) => {
      const visual = art(topic.id);
      const shortcut = button("", "topic", "topic-link");
      shortcut.dataset.topicId = topic.id;
      shortcut.dataset.tone = visual.tone;
      const copy = element("span");
      const count = model.guide?.questions.filter((question) => question.topicId === topic.id).length;
      copy.append(element("strong", "", topic.labelHe), element("small", "", model.guide ? `${count} שאלות לקריאה במקורות` : "לפתיחת מפת הנושא"));
      shortcut.append(visual.image, copy, element("span", "topic-arrow", "←"));
      shortcut.lastChild.setAttribute("aria-hidden", "true");
      $("topic-shortcuts").append(shortcut);
      const option = element("label", "topic-choice");
      option.dataset.tone = visual.tone;
      const input = element("input");
      input.type = "checkbox";
      input.dataset.topic = topic.id;
      input.checked = state.topics.has(topic.id);
      option.append(art(topic.id, 38).image, element("span", "", topic.labelHe), input);
      $("topic-options").append(option);
    });
  }

  function renderRoster() {
    const visible = model.parties.filter((party) => nameMatches(party, state.search));
    $("party-grid").replaceChildren();
    $("roster-count").textContent = `${visible.length} מתוך ${model.parties.length} רשומות · סדר א״ב`;
    visible.forEach((party) => {
      const card = element("article", "party-card");
      card.dataset.partyId = party.id;
      const heading = element("div", "party-heading");
      const copy = element("div");
      copy.append(element("h3", "", party.nameHe), partyStatus(party));
      heading.append(ballotMark(party), copy);
      const actions = element("div", "party-actions");
      actions.append(profileButton(party), comparisonChoice(party, true));
      card.append(heading, actions);
      $("party-grid").append(card);
    });
    if (!visible.length) {
      const empty = element("div", "empty-state");
      empty.append(element("h3", "", state.search ? "לא נמצא שם מתאים." : "אין רשומות זמינות להצגה."));
      paragraph(empty, state.search ? "החיפוש מתייחס לשמות בלבד. אפשר לנקות אותו ולחזור לכל הרשימות." : "לא מוצגים נתוני דוגמה. יש לבדוק את קובץ המחקר ואת היקף המיפוי.");
      if (state.search) empty.append(button("הצגת כל הרשומות", "clear-search"));
      $("party-grid").append(empty);
    }
  }

  function renderWizard() {
    const steps = ["topics", "evidence", "depth"];
    steps.forEach((id, index) => { $(`step-${id}`).hidden = index + 1 !== state.step; });
    [...$("reading-steps").children].forEach((item, index) => {
      if (index + 1 === state.step) item.setAttribute("aria-current", "step");
      else item.removeAttribute("aria-current");
    });
    $("reading-progress").value = state.step;
    $("reading-progress").textContent = `${state.step} מתוך 3`;
    $("wizard-step-label").textContent = `צעד ${state.step} מתוך 3`;
    $("wizard-back").disabled = state.step === 1;
    $("wizard-next").textContent = ["לסוג התיעוד ←", "לעומק הקריאה ←", "פותחים את המקורות ←"][state.step - 1];
    document.querySelectorAll("input[data-topic]").forEach((input) => { input.checked = state.topics.has(input.dataset.topic); });
    document.querySelectorAll('input[name="evidence"]').forEach((input) => { input.checked = input.value === state.evidence; });
    document.querySelectorAll('input[name="depth"]').forEach((input) => { input.checked = input.value === state.depth; });
  }

  function fillQuestionSelect(select, questions, value) {
    select.replaceChildren();
    model.topics.forEach((topic) => {
      const relevant = questions.filter((question) => question.topicId === topic.id);
      if (!relevant.length) return;
      const group = element("optgroup");
      group.label = topic.labelHe;
      relevant.forEach((question) => {
        const option = element("option", "", question.titleHe);
        option.value = question.id;
        group.append(option);
      });
      select.append(group);
    });
    select.value = value;
  }

  function availableQuestions() {
    return model.guide ? [...model.topics.keys()].filter((topicId) => state.topics.has(topicId))
      .flatMap((topicId) => model.guide.questions.filter((question) => question.topicId === topicId)) : [];
  }

  function rowEvidence(row, question, deep = false) {
    const content = element("div", "reading-evidence");
    if (!row.linkedEvidence.length) {
      content.append(renderGap(model.guide.asOfDate, "אין תיעוד מקושר לשאלה במאגר — לא ניתן להסיק עמדה.", true));
      return content;
    }
    if (!row.evidence.length) {
      const note = element("div", "gap-message");
      paragraph(note, "אין במפה תיעוד מהסוג שבחרתם לשאלה זו.");
      paragraph(note, `יש ${row.otherCount} מקטעי תיעוד מסוגים אחרים. הרשימה נשארת בתצוגה.`);
      content.append(note);
    } else {
      content.append(renderEvidence(row.evidence[0], { deep }));
      if (row.evidence.length > 1) {
        const rest = deep ? element("div") : disclosure(`עוד ${row.evidence.length - 1} מקטעי תיעוד לשאלה`, "evidence-more");
        row.evidence.slice(1).forEach((item) => rest.append(renderEvidence(item, { deep })));
        content.append(rest);
      }
    }
    if (row.otherCount) {
      const more = button(`לכל התיעוד המקושר לשאלה · ${row.linkedEvidence.length}`, "issue-evidence", "source-control");
      more.dataset.questionId = question.id;
      more.dataset.partyId = row.party.id;
      content.append(more);
    }
    return content;
  }

  function renderReading() {
    const questions = availableQuestions();
    const topicCount = state.topics.size === 1 ? "תחום אחד" : `${state.topics.size} תחומים`;
    $("reading-summary").textContent = `${topicCount} לקריאה · ${FILTERS[state.evidence].label} · ${state.depth === "deep" ? "קריאה מעמיקה" : "מבט קצר"}. הבחירה אינה משנה אילו רשומות מוצגות.`;
    const unavailable = !model.guide || !questions.length;
    $("guide-state").hidden = !unavailable;
    $("reading-content").hidden = unavailable;
    if (unavailable) {
      const empty = $("guide-state");
      empty.replaceChildren(element("h2", "", "מפת השאלות אינה זמינה לקריאה."));
      paragraph(empty, model.guide ? "אין במפה שאלות המקושרות לתחומים שבחרתם. אפשר לערוך את מסלול הקריאה." : "קובץ מפת השאלות חסר או שההפניות שלו אינן תקינות. לא הושלמו שאלות או עמדות באמצעות ניחוש. פרופילי הרשימות נשארים זמינים במאגר.");
      if (model.guideProblems.length) {
        const details = disclosure("פרטים על טעינת המפה", "method-detail");
        const list = element("ul");
        model.guideProblems.forEach((problem) => list.append(element("li", "", problem)));
        details.append(list);
        empty.append(details);
      }
      return;
    }
    if (!questions.some((question) => question.id === state.questionId)) state.questionId = questions[0].id;
    const question = questions.find(({ id }) => id === state.questionId);
    const position = questions.indexOf(question);
    fillQuestionSelect($("reading-question"), questions, question.id);
    $("reading-filter").value = state.evidence;
    $("reading-depth").value = state.depth;
    $("issue-title").textContent = question.titleHe;
    $("issue-prompt").textContent = question.promptHe;
    $("issue-explanation").textContent = question.explanationHe;
    $("issue-topic").textContent = model.topics.get(question.topicId).labelHe;
    const visual = art(question.topicId);
    $("issue-image").src = `assets/${visual.filename}`;
    $("issue-intro").dataset.tone = visual.tone;
    $("question-position").textContent = `שאלה ${position + 1} מתוך ${questions.length} · מפת המחקר: ${formattedDate(model.guide.asOfDate, true)}`;
    $("question-previous").disabled = position === 0;
    $("question-next").disabled = position === questions.length - 1;
    $("reading-coverage").textContent = `${model.parties.length} רשומות · תמיד בסדר א״ב · חוסר תיעוד אינו עמדה. סיכומי המחקר הם תיאור מיוחס, לא ציטוט מילולי.`;
    $("issue-rows").replaceChildren();
    buildIssueRows(model.research, model.guide, question.id, state.evidence).forEach((row) => {
      const card = element("article", "reading-card");
      card.dataset.partyId = row.party.id;
      const heading = element("header", "reading-card-heading");
      heading.append(element("h3", "", row.party.nameHe), element("p", "", row.linkedEvidence.length ? `${row.linkedEvidence.length} מקטעי תיעוד מקושרים` : "אין תיעוד מקושר במפה"), profileButton(row.party, "לפרופיל המלא ←"));
      card.append(heading, rowEvidence(row, question, state.depth === "deep"));
      $("issue-rows").append(card);
    });
  }

  function renderComparison() {
    const selected = model.parties.filter((party) => state.comparison.has(party.id));
    $("comparison-empty").hidden = selected.length > 0;
    $("comparison-content").hidden = selected.length === 0;
    $("comparison-grid").replaceChildren();
    if (!selected.length) return;
    let question = null;
    const rows = new Map();
    if (model.guide) {
      if (!model.guide.questions.some(({ id }) => id === state.comparisonQuestionId)) {
        const firstTopic = [...model.topics.keys()].find((topicId) => model.guide.questions.some((question) => question.topicId === topicId));
        state.comparisonQuestionId = model.guide.questions.find((question) => question.topicId === firstTopic).id;
      }
      question = model.guide.questions.find(({ id }) => id === state.comparisonQuestionId);
      fillQuestionSelect($("comparison-question"), model.guide.questions, question.id);
      buildIssueRows(model.research, model.guide, question.id).forEach((row) => rows.set(row.party.id, row));
    }
    $("comparison-question").disabled = !question;
    const context = $("comparison-question-context");
    context.replaceChildren();
    if (question) {
      context.append(element("h2", "", question.titleHe), element("p", "", question.promptHe));
      const explanation = disclosure("הקשר לשאלה ותאריך המפה", "evidence-extra");
      paragraph(explanation, question.explanationHe);
      explanation.append(timeNode(model.guide.asOfDate, "מפת המחקר נכון ל־"));
      context.append(explanation);
    } else {
      context.append(element("h2", "", "פרטי זיהוי ומקורות"), element("p", "", "מפת השאלות אינה זמינה. מוצגים פרטי הרשימות בלבד, לא השוואת עמדות בנושא."));
    }
    $("comparison-grid").dataset.count = String(selected.length);
    selected.forEach((party) => {
      const card = element("article", "compare-card");
      card.dataset.partyId = party.id;
      const heading = element("header", "compare-card-header");
      const remove = button("הסרה מההשוואה", "remove-comparison");
      remove.dataset.partyId = party.id;
      remove.setAttribute("aria-label", `הסרת ${party.nameHe} מההשוואה`);
      heading.append(element("h3", "", party.nameHe), partyStatus(party), remove);
      card.append(heading);
      if (question) card.append(rowEvidence(rows.get(party.id), question, true));
      else card.append(renderEvidence(party.identityEvidence), renderEvidence(party.listStatusEvidence));
      card.append(profileButton(party));
      $("comparison-grid").append(card);
    });
  }

  function syncComparison() {
    const count = state.comparison.size;
    $("nav-count").hidden = count === 0;
    $("nav-count").textContent = String(count);
    $("selection-count").textContent = `${count} / ${COMPARISON_LIMIT}`;
    $("picker-count").textContent = `${count} מתוך ${COMPARISON_LIMIT}`;
    document.querySelectorAll("input[data-comparison]").forEach((input) => { input.checked = state.comparison.has(input.dataset.comparison); });
    if (state.view === "compare") renderComparison();
  }

  function renderLibrary() {
    $("source-count").textContent = `(${model.sources.size})`;
    $("source-directory").replaceChildren();
    [...model.sources.values()].sort((a, b) => collator.compare(`${a.publisher} ${a.title}`, `${b.publisher} ${b.title}`)).forEach((source) => {
      const item = button("", "sources");
      item.dataset.sourceIds = source.id;
      item.dataset.sourceContext = source.title;
      item.append(element("strong", "", source.title), element("small", "", `${source.publisher} · ${SOURCE_TYPES[source.sourceType]}`));
      $("source-directory").append(item);
    });
  }

  function viewHeading() {
    return $(state.view === "overview" ? "overview-title" : state.view === "compare" ? "compare-title" : state.reading ? "reading-title" : "explore-title");
  }

  function showView(view, moveFocus = true) {
    if (!["overview", "explore", "compare"].includes(view)) return;
    state.view = view;
    ["overview", "explore", "compare"].forEach((id) => { $(`view-${id}`).hidden = view !== id; });
    document.querySelectorAll(".main-nav [data-view]").forEach((control) => {
      if (control.dataset.view === view) control.setAttribute("aria-current", "page");
      else control.removeAttribute("aria-current");
    });
    if (view === "explore") {
      $("reading-builder").hidden = state.reading;
      $("reading-results").hidden = !state.reading;
      if (state.reading) renderReading();
      else renderWizard();
    } else if (view === "compare") {
      if (!state.comparison.size) $("comparison-picker").open = true;
      renderComparison();
    }
    if (moveFocus) {
      window.scrollTo({ top: 0, behavior: "auto" });
      focus(viewHeading());
    }
  }

  function showDialog(dialog, trigger, heading) {
    if (!dialog.open) {
      dialogTriggers.set(dialog, trigger || document.activeElement);
      dialog.showModal();
    }
    document.body.classList.add("has-dialog");
    focus(heading);
    dialog.scrollTop = 0;
  }

  function openProfile(partyId, trigger) {
    const party = model.partyIndex.get(partyId);
    if (!party) return;
    $("profile-title").textContent = party.nameHe;
    const body = $("profile-body");
    body.replaceChildren();
    const entry = model.roster.get(party.id);
    body.append(partyStatus(party));
    if (entry?.noteHe) paragraph(body, entry.noteHe, "evidence-note");
    if (entry) body.append(timeNode(model.research.roster.asOfDate, "מיפוי הרשימות: "), sourceControl(entry.sourceIds, `מעמד הרשימה: ${party.nameHe}`));
    const ballot = ballotInfo(party, model.research);
    if (ballot) {
      paragraph(body, `אותיות לפי המקורות: ${ballot.letters}`, "small-copy");
      body.append(sourceControl(ballot.sourceIds, `אותיות: ${party.nameHe}`));
    } else paragraph(body, "אין כאן אותיות קלפי עם אסמכתה זמינה; הסמל בכרטיס מציג ראשית שם בלבד.", "small-copy");
    body.append(element("h3", "", "זהות ומעמד הרשימה"), renderEvidence(party.identityEvidence, { deep: true }), renderEvidence(party.listStatusEvidence, { deep: true }));
    if (asArray(party.componentNames).length) paragraph(body, `מרכיבים לפי המחקר: ${party.componentNames.join(" · ")}`, "small-copy");
    const leaders = disclosure("אישים, תפקידים ומעמד מועמדות");
    paragraph(leaders, "פרופיל של איש ציבור אינו כשלעצמו אישור למועמדות נוכחית. יש לקרוא את המעמד והמקורות.", "small-copy");
    party.leaderSummaries.forEach((leader) => {
      const section = disclosure(leader.nameHe);
      section.append(statusTag(leader.candidacyStatus, CANDIDACY_LABELS[leader.candidacyStatus]));
      [leader.identityEvidence, leader.publicRole, leader.candidacyEvidence, ...leader.summary, ...leader.documentedRecords, ...leader.gaps].forEach((item) => section.append(renderEvidence(item)));
      leaders.append(section);
    });
    party.gaps.filter((item) => ["leadership", "candidacy"].includes(item.appliesTo)).forEach((item) => leaders.append(renderEvidence(item)));
    body.append(leaders);
    model.topics.forEach((topic) => {
      const section = disclosure(topic.labelHe);
      const bucket = party.topicPositions[topic.id];
      CATEGORIES.forEach((category) => {
        const items = [...bucket[category.id], ...bucket.gaps.filter((item) => item.appliesTo === category.id)];
        section.append(element("h4", "profile-category", category.label));
        items.forEach((item) => section.append(renderEvidence(item)));
      });
      bucket.gaps.filter((item) => !CATEGORIES.some(({ id }) => id === item.appliesTo)).forEach((item) => section.append(renderEvidence(item)));
      body.append(section);
    });
    const context = disclosure("הקשר כללי ופערים במחקר");
    [...party.generalContext, ...party.gaps].forEach((item) => context.append(renderEvidence(item)));
    body.append(context);
    showDialog($("profile-dialog"), trigger, $("profile-title"));
  }

  function openIssueEvidence(partyId, questionId, trigger) {
    if (!model.guide) return;
    const question = model.guide.questions.find(({ id }) => id === questionId);
    const row = buildIssueRows(model.research, model.guide, questionId).find(({ party }) => party.id === partyId);
    if (!question || !row) return;
    $("profile-title").textContent = `${row.party.nameHe} — ${question.titleHe}`;
    $("profile-body").replaceChildren();
    paragraph($("profile-body"), question.promptHe);
    if (!row.linkedEvidence.length) $("profile-body").append(renderGap(model.guide.asOfDate));
    else row.linkedEvidence.forEach((item) => $("profile-body").append(renderEvidence(item, { deep: true })));
    showDialog($("profile-dialog"), trigger, $("profile-title"));
  }

  function definition(list, label, value) {
    const description = element("dd");
    if (value && typeof value === "object") description.append(value);
    else description.textContent = String(value);
    list.append(element("dt", "", label), description);
  }

  function renderSource(source) {
    const card = element("article", "source-card");
    card.dataset.sourceId = source.id;
    card.append(element("p", "source-type", SOURCE_TYPES[source.sourceType]), element("h3", "", source.title));
    const metadata = element("dl", "source-metadata");
    definition(metadata, "מפרסם", source.publisher);
    definition(metadata, "תאריך פרסום", source.publicationDate ? timeNode(source.publicationDate, "", false) : "לא ידוע / לא אומת");
    definition(metadata, "ייחוס המחקר", timeNode(source.asOfDate, "", false));
    const retrieved = element("bdi", "", source.retrievedAt);
    retrieved.dir = "ltr";
    definition(metadata, "חותמת האחזור", retrieved);
    definition(metadata, "שפת המקור", source.language);
    card.append(metadata, element("p", "source-limit", SOURCE_LIMITS[source.sourceType]));
    paragraph(card, source.accessNotesHe || "לא נמסרה הערת גישה נוספת. אין בכך אישור שכל תוכן המקור נבדק.", "source-access");
    const url = publicSourceURL(source.url);
    if (url) {
      const linkWrap = element("div", "external-source");
      const link = element("a", "", "לקריאת המקור באתר המפרסם ↗");
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.referrerPolicy = "no-referrer";
      link.setAttribute("aria-label", `פתיחת המקור באתר חיצוני, בלשונית חדשה: ${source.title}`);
      linkWrap.append(link, element("small", "", url));
      card.append(linkWrap);
    } else paragraph(card, "כתובת המקור אינה תקינה ולכן לא נוצר קישור.", "source-access");
    return card;
  }

  function openSources(ids, context, evidenceId, trigger) {
    const body = $("source-body");
    body.replaceChildren();
    const evidence = evidenceId ? model.evidenceIndex.get(evidenceId) : null;
    const references = evidence ? evidence.sourceIds : ids;
    const intro = element("div", "source-context");
    if (evidence) {
      intro.append(renderEvidence(evidence, { deep: true, sources: false }));
      paragraph(intro, "זהו סיכום מיוחס במחקר, לא ציטוט מילולי או אישור לנכונות כל טענה.", "small-copy");
    } else paragraph(intro, context || "פרטי מקור", "small-copy");
    body.append(intro);
    const knownSources = [...new Set(references)].map((id) => model.sources.get(id)).filter(Boolean);
    if (!knownSources.length) {
      paragraph(body, "אין מקור מקושר לרשומה זו במאגר. אין להסיק מכך עמדה בעד, נגד או ניטרלית.");
      if (model.research) body.append(timeNode(model.guide?.asOfDate || model.research.asOfDate, "נכון ל־"));
    }
    knownSources.forEach((source) => body.append(renderSource(source)));
    showDialog($("source-dialog"), trigger, $("source-title"));
  }

  function openCoverage(trigger) {
    $("profile-title").textContent = "תאריכים, היקף ומגבלות המחקר";
    const body = $("profile-body");
    body.replaceChildren();
    if (!model.research) paragraph(body, "אין מחקר תקין להצגה. פרטי הכשל מופיעים בתחילת העמוד.");
    else {
      const data = model.research;
      body.append(timeNode(data.asOfDate, "המחקר נכון ל־", false));
      const updated = element("p", "small-copy");
      updated.append(document.createTextNode("חותמת עדכון הקובץ: "), element("bdi", "", data.updatedAt));
      body.append(updated, element("h3", "", "מיפוי הרשימות"));
      const roster = data.roster;
      if (roster) {
        body.append(statusTag(roster.completeness, COMPLETENESS_LABELS[roster.completeness]));
        paragraph(body, roster.basisHe);
        body.append(timeNode(roster.asOfDate, "המיפוי נכון ל־"), sourceControl([...new Set([...roster.authoritySourceIds, ...roster.enumerationSourceIds])], "בסיס מיפוי הרשימות"));
        paragraph(body, "מיפוי מלא לפי מקורות אינו בהכרח רשימת מועמדים רשמית שאומתה ישירות. יש לקרוא את בסיס המחקר ואת מעמד כל רשומה.", "small-copy");
        if (roster.exclusions.length || roster.entries.some((entry) => ["withdrawn", "rejected"].includes(entry.status))) {
          const exclusions = disclosure("רשומות שאינן מוצגות כמתמודדות");
          const list = element("ul", "roster-exclusions");
          const excluded = [...roster.exclusions, ...roster.entries.filter((entry) => ["withdrawn", "rejected"].includes(entry.status)).map((entry) => ({ nameHe: entry.nameHe, reasonHe: entry.noteHe || ROSTER_LABELS[entry.status], sourceIds: entry.sourceIds }))];
          excluded.forEach((entry) => {
            const row = element("li");
            row.append(element("strong", "", entry.nameHe), element("p", "", entry.reasonHe), sourceControl(entry.sourceIds, `סיבת החרגה: ${entry.nameHe}`));
            list.append(row);
          });
          exclusions.append(list);
          body.append(exclusions);
        }
      } else paragraph(body, "שלמות המיפוי טרם נמסרה במתכונת הרשימות החדשה. המאגר אינו מוצג כרשימת מועמדים רשמית מלאה.");
      paragraph(body, data.coverage.descriptionHe);
      const election = disclosure("מועד הבחירות ומעמד רשימת המועמדים", "profile-section", true);
      paragraph(election, data.election.labelHe);
      paragraph(election, `המועד המוצג במקורות: ${formattedDate(data.election.scheduledDate)}.`);
      paragraph(election, data.election.dateConfirmationStatus === "confirmed" ? "מעמד התאריך במחקר: אושר על בסיס מקור רשות בחירות. יש לקרוא גם את הערות הגישה." : "מעמד התאריך במחקר: לא אומת באופן מלא.", "small-copy");
      paragraph(election, data.election.dateMissingEvidenceLabelHe, "small-copy");
      election.append(sourceControl(data.election.dateSourceIds, "מועד הבחירות"));
      paragraph(election, data.election.listMissingEvidenceLabelHe, "small-copy");
      election.append(sourceControl(data.election.listSourceIds, "מעמד רשימות המועמדים"));
      data.election.caveats.forEach((item) => election.append(renderEvidence(item)));
      body.append(election);
      const limitations = disclosure("מגבלות הכיסוי ופריטים שלא נכללו");
      [...data.coverage.limitations, ...data.coverage.omittedEntries].forEach((item) => limitations.append(renderEvidence(item)));
      body.append(limitations);
    }
    showDialog($("profile-dialog"), trigger, $("profile-title"));
  }

  function resetUI() {
    resetting = true;
    [$("source-dialog"), $("profile-dialog")].forEach((dialog) => { if (dialog.open) dialog.close(); });
    resetReadingState(state);
    $("name-search").value = "";
    $("wizard-error").hidden = true;
    $("comparison-picker").open = false;
    document.querySelectorAll(".view details[open]").forEach((details) => { details.open = false; });
    ["issue-rows", "comparison-grid", "source-body", "profile-body", "reading-summary", "comparison-question-context", "guide-state", "reading-question", "comparison-question", "issue-title", "issue-prompt", "issue-explanation", "question-position", "reading-coverage"].forEach((id) => $(id).replaceChildren());
    $("reading-filter").value = "all";
    $("reading-depth").value = "brief";
    $("profile-title").textContent = "";
    renderRoster();
    renderWizard();
    syncComparison();
    showView("overview");
    announce("התצוגה אופסה. בחירות הקריאה, החיפוש ורשימות ההשוואה נמחקו.");
    window.setTimeout(() => { resetting = false; focus(viewHeading()); }, 0);
  }

  function changeComparison(id, trigger) {
    if (!model.partyIndex.has(id)) return;
    const result = updateSelection(state.comparison, id);
    if (trigger?.type === "checkbox") trigger.checked = state.comparison.has(id);
    syncComparison();
    announce(result === "blocked" ? "אפשר להשוות עד ארבע רשימות. הסירו רשימה לפני הוספת אחרת; לא הוחלפה אף בחירה." : `${state.comparison.size} רשימות נבחרו להשוואה. הסדר נשאר אלפביתי.`);
  }

  function handleClick(event) {
    const control = event.target.closest("button");
    if (!control || control.disabled) return;
    if (control.dataset.close) { $(control.dataset.close)?.close(); return; }
    if (control.dataset.view) { showView(control.dataset.view); return; }
    const action = control.dataset.action;
    if (action === "sources") openSources((control.dataset.sourceIds || "").split(" ").filter(Boolean), control.dataset.sourceContext, control.dataset.evidenceId, control);
    else if (action === "profile") openProfile(control.dataset.partyId, control);
    else if (action === "coverage") openCoverage(control);
    else if (action === "issue-evidence") openIssueEvidence(control.dataset.partyId, control.dataset.questionId, control);
    else if (action === "reset") resetUI();
    else if (action === "start-reading" || action === "edit-reading") {
      state.reading = false;
      state.step = 1;
      $("wizard-error").hidden = true;
      showView("explore");
    } else if (action === "topic" && model.topics.has(control.dataset.topicId)) {
      state.topics = new Set([control.dataset.topicId]);
      state.evidence = "all";
      state.depth = "brief";
      state.questionId = null;
      state.reading = true;
      showView("explore");
    } else if (action === "all-topics" || action === "no-topics") {
      state.topics = new Set(action === "all-topics" ? model.topics.keys() : []);
      $("wizard-error").hidden = true;
      renderWizard();
      announce(`${state.topics.size} תחומים נבחרו לקריאה.`);
    } else if (action === "wizard-back") {
      state.step = Math.max(1, state.step - 1);
      $("wizard-error").hidden = true;
      renderWizard();
      focus(document.querySelector(".wizard-step:not([hidden]) legend"));
    } else if (action === "wizard-next") {
      if (!state.topics.size) {
        $("wizard-error").textContent = model.topics.size ? "בחרו לפחות תחום אחד לקריאה. אפשר גם לבחור את כל התחומים." : "אין נושאי מחקר זמינים. יש לטעון קובץ מחקר תקין.";
        $("wizard-error").hidden = false;
        focus(document.querySelector("input[data-topic]"));
        return;
      }
      $("wizard-error").hidden = true;
      if (state.step < 3) {
        state.step += 1;
        renderWizard();
        focus(document.querySelector(".wizard-step:not([hidden]) legend"));
      } else {
        state.reading = true;
        showView("explore");
        announce("מסלול הקריאה נפתח. כל הרשומות מוצגות בסדר א״ב.");
      }
    } else if (action === "question-next" || action === "question-previous") {
      const questions = availableQuestions();
      const next = questions.findIndex(({ id }) => id === state.questionId) + (action === "question-next" ? 1 : -1);
      if (questions[next]) {
        state.questionId = questions[next].id;
        renderReading();
        focus($("issue-title"));
        $("issue-intro").scrollIntoView({ block: "start", behavior: "auto" });
      }
    } else if (action === "show-roster") {
      showView("overview", false);
      $("roster").scrollIntoView({ block: "start", behavior: "auto" });
      focus($("roster-title"));
    } else if (action === "clear-search") {
      state.search = "";
      $("name-search").value = "";
      renderRoster();
      focus($("name-search"));
    } else if (action === "clear-comparison") {
      state.comparison.clear();
      syncComparison();
      announce("רשימות ההשוואה נוקו.");
    } else if (action === "remove-comparison") {
      state.comparison.delete(control.dataset.partyId);
      syncComparison();
      focus($("comparison-picker").querySelector("summary"));
      announce("הרשימה הוסרה מההשוואה.");
    }
  }

  function handleChange(event) {
    const input = event.target;
    if (input.matches("input[data-comparison]")) changeComparison(input.dataset.comparison, input);
    else if (input.matches("input[data-topic]")) {
      if (input.checked) state.topics.add(input.dataset.topic);
      else state.topics.delete(input.dataset.topic);
      $("wizard-error").hidden = true;
    } else if (input.name === "evidence" && own(FILTERS, input.value)) state.evidence = input.value;
    else if (input.name === "depth" && ["brief", "deep"].includes(input.value)) state.depth = input.value;
    else if (input.id === "reading-question") { state.questionId = input.value; renderReading(); announce("השאלה התחלפה. כל הרשימות נשארו באותו סדר."); }
    else if (input.id === "reading-filter" && own(FILTERS, input.value)) { state.evidence = input.value; renderReading(); announce("סוג התיעוד עודכן. לא סוננו רשימות."); }
    else if (input.id === "reading-depth" && ["brief", "deep"].includes(input.value)) { state.depth = input.value; renderReading(); announce("עומק הקריאה עודכן."); }
    else if (input.id === "comparison-question") { state.comparisonQuestionId = input.value; renderComparison(); announce("שאלת ההשוואה התחלפה. בחירת הרשימות לא השתנתה."); }
  }

  function initialise() {
    loadData(window.ELECTION_DATA, window.ISSUE_GUIDE);
    if (!model.research) {
      $("data-state").hidden = false;
      $("data-state-message").textContent = "קובץ המחקר חסר או לא תקין. כדי לא להציג עובדות מומצאות, אין כרגע רשימות או שאלות פעילות.";
      $("data-problems").replaceChildren(...model.problems.map((problem) => element("li", "", problem)));
    }
    renderMetadata();
    renderTopics();
    renderRoster();
    renderWizard();
    $("comparison-options").replaceChildren(...model.parties.map((party) => comparisonChoice(party)));
    renderLibrary();
    syncComparison();
    showView("overview", false);
    document.addEventListener("click", handleClick);
    document.addEventListener("change", handleChange);
    document.addEventListener("keydown", (event) => {
      if (event.key !== "Escape") return;
      const dialog = $("source-dialog").open ? $("source-dialog") : $("profile-dialog").open ? $("profile-dialog") : null;
      if (!dialog) return;
      event.preventDefault();
      event.stopPropagation();
      dialog.close();
    }, true);
    $("name-search").addEventListener("input", (event) => { state.search = event.target.value; renderRoster(); });
    [$("profile-dialog"), $("source-dialog")].forEach((dialog) => {
      dialog.addEventListener("close", () => {
        if (!document.querySelector("dialog[open]")) document.body.classList.remove("has-dialog");
        if (!resetting) {
          const trigger = dialogTriggers.get(dialog);
          focus(trigger?.isConnected ? trigger : viewHeading());
        }
      });
    });
  }

  if (typeof module !== "undefined" && module.exports) {
    module.exports = {
      validateResearch, validateIssueGuide, publicSourceURL, validDate, validTimestamp,
      canonicalOrder, currentParties, normaliseName, nameMatches, ballotInfo,
      evidenceOwnership, buildIssueRows, createReadingState, resetReadingState,
      updateSelection, loadData, COMPARISON_LIMIT
    };
  }
  if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initialise, { once: true });
    else initialise();
  }
})();
