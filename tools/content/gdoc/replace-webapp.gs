/**
 * PK Reel Scripts - replace web app (Google Apps Script, runs as Nick, deployed as a web app).
 * POST {"stagingId": "<doc id>"} -> copies the staging doc's body into the fixed "PK Reel Scripts" doc
 * (old pages removed), then trashes the staging doc. Returns {"ok":true,"pages":N} or {"ok":false,"error":...}.
 *
 * Safety without a password: it only accepts a staging doc that (1) Nick owns, (2) is titled
 * "PK Reel Scripts STAGING ...", (3) was created in the last 2 hours. Nobody else can create a doc in Nick's Drive,
 * and a used staging doc is trashed, so it cannot be replayed. The target doc id is fixed below.
 * Source of truth: pk-brain tools/content/gdoc/replace-webapp.gs (SOP tools/content/gdoc_scripts.md).
 */
var TARGET_ID = '1WpwdSz-GhKiBdIA1xYn9PHHpXpcvEYf4TggPa0YjFwI';
var PREFIX = 'PK Reel Scripts STAGING';
var MAX_AGE_MS = 2 * 60 * 60 * 1000;

function doPost(e) {
  try {
    var body = JSON.parse((e && e.postData && e.postData.contents) || '{}');
    return out_(replace_(String(body.stagingId || '')));
  } catch (err) {
    return out_({ ok: false, error: String(err) });
  }
}

function doGet() {
  return out_({ ok: true, service: 'pk-reel-scripts-replace', target: TARGET_ID });
}

function replace_(stagingId) {
  if (!/^[A-Za-z0-9_-]{20,}$/.test(stagingId)) return { ok: false, error: 'bad stagingId' };
  if (stagingId === TARGET_ID) return { ok: false, error: 'staging is the target' };
  var f = DriveApp.getFileById(stagingId);
  var me = Session.getEffectiveUser().getEmail();
  if (f.getOwner().getEmail() !== me) return { ok: false, error: 'staging not owned by the doc owner' };
  if (f.getName().indexOf(PREFIX) !== 0) return { ok: false, error: 'staging title must start with ' + PREFIX };
  if (Date.now() - f.getDateCreated().getTime() > MAX_AGE_MS) return { ok: false, error: 'staging older than 2 h' };
  if (f.isTrashed()) return { ok: false, error: 'staging already used' };

  var src = DocumentApp.openById(stagingId).getBody();
  var doc = DocumentApp.openById(TARGET_ID);
  var dst = doc.getBody();
  // keep one empty paragraph (a body can never be empty), remove everything else
  dst.appendParagraph('');
  while (dst.getNumChildren() > 1) dst.removeChild(dst.getChild(0));
  var first = dst.getChild(0);
  var pages = 1;
  for (var i = 0; i < src.getNumChildren(); i++) {
    var el = src.getChild(i).copy();
    var t = el.getType();
    if (t === DocumentApp.ElementType.PARAGRAPH) {
      dst.appendParagraph(el);
      if (hasPageBreak_(el)) pages++;
    } else if (t === DocumentApp.ElementType.LIST_ITEM) dst.appendListItem(el);
    else if (t === DocumentApp.ElementType.TABLE) dst.appendTable(el);
    else if (t === DocumentApp.ElementType.PAGE_BREAK) { dst.appendPageBreak(el); pages++; }
    else if (t === DocumentApp.ElementType.HORIZONTAL_RULE) dst.appendHorizontalRule();
  }
  if (dst.getNumChildren() > 1) dst.removeChild(first);
  doc.saveAndClose();
  f.setTrashed(true);
  return { ok: true, pages: pages };
}

function hasPageBreak_(p) {
  for (var j = 0; j < p.getNumChildren(); j++) {
    if (p.getChild(j).getType() === DocumentApp.ElementType.PAGE_BREAK) return true;
  }
  return false;
}

function out_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
