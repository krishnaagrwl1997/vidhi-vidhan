/* =====================================================================
   Vidhi-Vidhan settings, shared by the website and the app preview.
   Fill these in and push. Anything left empty stays hidden on the site.
   ===================================================================== */

/* 1. Google Form for sign-ups and feedback.
      Every "Join", "Feedback" and "Ask for my tradition" button opens it. */
window.VV_FORM_URL = "";

/* 2. Analytics (GoatCounter, free for small sites, no cookies).
      Sign up at goatcounter.com, pick a code such as "vidhividhan",
      and put just that code here. Visits and button events are then counted. */
window.VV_GOATCOUNTER = "";

/* 3. Founder note. Shown in "Why Vidhi-Vidhan" once a name is filled in.
      photo: an image file in this repo (for example "founder.jpg"), or leave empty. */
window.VV_FOUNDER = {
  name: "",
  role: "",          // e.g. "Founder, Bengaluru"
  photo: "",
  story: ""          // 2–4 short sentences in your own words: the moment you got stuck, and why you're building this.
};

/* 4. The person who reviews ritual content, once you have one.
      Shown in the trust section, e.g. { name: "Vidwan R. Bhat", note: "Priest, Jayanagar, 25 years" } */
window.VV_REVIEWER = { name: "", note: "" };

/* 5. Languages offered on the website. Add "kn", "ta" or "te" once a native speaker
      has checked that language. Full list: ["en", "hi", "kn", "ta", "te"] */
window.VV_LANGS = ["en", "hi"];
