const DATA = {"invitations": [{"id": "invite-sofia", "fromPersonId": "sofia", "venueId": "juniper-osteria", "date": "2026-12-04", "time": "19:00", "message": "A little pasta and a glass of red? I'd love to meet you at Juniper.", "status": "awaiting"}, {"id": "invite-theo-backup", "fromPersonId": "theo", "venueId": "amber-room", "date": "2026-12-03", "time": "20:00", "message": "Fancy splitting a bottle at The Amber Room? I'll bring the conversation.", "status": "awaiting"}], "cuisines": [{"id": "italian", "name": "Italian"}, {"id": "japanese", "name": "Japanese"}, {"id": "mexican", "name": "Mexican"}, {"id": "indian", "name": "Indian"}, {"id": "thai", "name": "Thai"}], "people": [{"id": "sofia", "name": "Sofia", "age": 29, "bio": "Handmade pasta, a glass of red, and a table where you can hear each other.", "cuisines": ["italian"], "likedVenueIds": ["juniper-osteria"], "distanceKm": 2.0, "dateIdea": "Sharing a bowl of fresh pasta, then lingering over an espresso.", "askMeAbout": "The one dish I always try to recreate at home.", "photo": "photos/people/sofia.jpg"}, {"id": "theo", "name": "Theo", "age": 32, "bio": "Always orders something to share. Tiramisu is never up for debate.", "cuisines": ["italian"], "likedVenueIds": ["juniper-osteria"], "distanceKm": 3.3, "dateIdea": "Splitting three starters instead of two mains.", "askMeAbout": "My ranking of every tiramisu in the city.", "photo": "photos/people/theo.jpg"}, {"id": "amara", "name": "Amara", "age": 28, "bio": "Sunday pasta projects and tiny Italian spots. Ask me about my ragù.", "cuisines": ["italian"], "likedVenueIds": ["amber-room"], "distanceKm": 2.7, "dateIdea": "A glass of wine somewhere quiet, then deciding on dinner together.", "askMeAbout": "How long a proper ragù should simmer.", "photo": "photos/people/amara.jpg"}, {"id": "leo", "name": "Leo", "age": 31, "bio": "Here for fresh gnocchi, good conversation, and one more espresso.", "cuisines": ["italian"], "likedVenueIds": ["amber-room"], "distanceKm": 4.1, "dateIdea": "Wine bar first, late-night gelato after.", "askMeAbout": "The best espresso I've had outside Italy.", "photo": "photos/people/leo.jpg"}, {"id": "kenji", "name": "Kenji", "age": 30, "bio": "Counter seats, chef's choice, and no phones on the table.", "cuisines": ["japanese"], "likedVenueIds": ["koma-house", "tsuki-izakaya"], "distanceKm": 1.9, "dateIdea": "Omakase at the counter, letting the chef decide.", "askMeAbout": "Why the best sushi is the simplest.", "photo": "photos/people/kenji.jpg"}, {"id": "mara", "name": "Mara", "age": 29, "bio": "Food writer. Firm believer that the best dates start with a great meal.", "cuisines": ["japanese"], "likedVenueIds": ["koma-house"], "distanceKm": 2.6, "dateIdea": "Trying something on the menu neither of us can pronounce.", "askMeAbout": "The worst restaurant review I ever wrote.", "photo": "photos/people/mara.jpg"}, {"id": "hana", "name": "Hana", "age": 27, "bio": "Yakitori, cold sake, and laughing too loud at the bar.", "cuisines": ["japanese"], "likedVenueIds": ["tsuki-izakaya", "hoshi-ramen"], "distanceKm": 3.0, "dateIdea": "Ordering one of everything on the skewer menu.", "askMeAbout": "My ramen spot rankings.", "photo": "photos/people/hana.jpg"}, {"id": "diego", "name": "Diego", "age": 33, "bio": "Will drive across town for the right al pastor.", "cuisines": ["mexican"], "likedVenueIds": ["casa-ocotillo"], "distanceKm": 3.8, "dateIdea": "Tacos on a patio, then a walk through the Mission murals.", "askMeAbout": "My grandmother's salsa verde.", "photo": "photos/people/diego.jpg"}, {"id": "lucia", "name": "Lucia", "age": 26, "bio": "Mezcal over margaritas. Always up for a new taqueria.", "cuisines": ["mexican"], "likedVenueIds": ["la-paloma"], "distanceKm": 4.9, "dateIdea": "A mezcal tasting where we both pretend to know what we're doing.", "askMeAbout": "The difference between mezcal and tequila.", "photo": "photos/people/lucia.jpg"}, {"id": "sam", "name": "Sam", "age": 30, "bio": "Spice tolerance: high. Patience for bland food: low.", "cuisines": ["mexican", "thai"], "likedVenueIds": ["casa-ocotillo", "baan-rim-nam"], "distanceKm": 2.2, "dateIdea": "Whoever orders the spiciest dish picks dessert.", "askMeAbout": "The hottest thing I've ever eaten.", "photo": "photos/people/sam.jpg"}, {"id": "priya", "name": "Priya", "age": 26, "bio": "Loves Thai and Indian food. Prefers relaxed evenings over loud venues.", "cuisines": ["indian", "thai"], "likedVenueIds": ["saffron-lane"], "distanceKm": 1.6, "dateIdea": "Sharing a thali and comparing favourite dishes.", "askMeAbout": "The best chai in the city.", "photo": "photos/people/priya.jpg"}, {"id": "arjun", "name": "Arjun", "age": 31, "bio": "Weekend cook, weekday dosa hunter.", "cuisines": ["indian"], "likedVenueIds": ["saffron-lane", "tiffin-room"], "distanceKm": 3.5, "dateIdea": "Street food crawl, one plate at each stop.", "askMeAbout": "How to fold a perfect dosa.", "photo": "photos/people/arjun.jpg"}, {"id": "nadia", "name": "Nadia", "age": 28, "bio": "Chaat enthusiast. Will share, but only if you share back.", "cuisines": ["indian"], "likedVenueIds": ["tiffin-room"], "distanceKm": 5.4, "dateIdea": "Too many small plates and a mango lassi each.", "askMeAbout": "My go-to pani puri order.", "photo": "photos/people/nadia.jpg"}, {"id": "mali", "name": "Mali", "age": 27, "bio": "Khao soi on cold nights, papaya salad on warm ones.", "cuisines": ["thai"], "likedVenueIds": ["baan-rim-nam"], "distanceKm": 1.2, "dateIdea": "A cozy noodle shop and a long chat.", "askMeAbout": "The Thai dish everyone should try once.", "photo": "photos/people/mali.jpg"}, {"id": "jonah", "name": "Jonah", "age": 29, "bio": "Noodles in any form. Ramen, pad see ew, you name it.", "cuisines": ["thai", "japanese"], "likedVenueIds": ["lemongrass-social", "hoshi-ramen"], "distanceKm": 6.0, "dateIdea": "Cocktails with a view, then late-night noodles.", "askMeAbout": "My noodle map of San Francisco.", "photo": "photos/people/jonah.jpg"}, {"id": "omar", "name": "Omar", "age": 29, "bio": "Low-key first dates and bold flavours.", "cuisines": ["thai"], "likedVenueIds": ["lemongrass-social"], "distanceKm": 7.4, "dateIdea": "One good cocktail and a long conversation.", "askMeAbout": "Why tamarind belongs in everything.", "photo": "photos/people/omar.jpg"}], "venues": [{"id": "juniper-osteria", "name": "Juniper Osteria", "cuisine": "italian", "kind": "dinner", "typeLabel": "Italian", "neighborhood": "North Beach", "price": "$$", "distanceKm": 1.8, "mood": "Candlelit & cozy", "description": "A little corner table, handmade pasta, and one more glass of red.", "soundNote": "Easy conversation", "photo": "photos/venues/juniper-osteria.jpg"}, {"id": "amber-room", "name": "The Amber Room", "cuisine": "italian", "kind": "drinks", "typeLabel": "Wine bar", "neighborhood": "Mission District", "price": "$$", "distanceKm": 3.1, "mood": "Low-lit & unhurried", "description": "A tucked-away booth and a bottle to share. No big dinner plans required.", "soundNote": "Soft jazz", "photo": "photos/venues/amber-room.jpg"}, {"id": "koma-house", "name": "Koma House", "cuisine": "japanese", "kind": "dinner", "typeLabel": "Japanese", "neighborhood": "Hayes Valley", "price": "$$$", "distanceKm": 2.4, "mood": "Warm & intimate", "description": "Sit side by side at the cedar counter. Let the next small plate break the ice.", "soundNote": "Quiet counter seats", "photo": "photos/venues/koma-house.jpg"}, {"id": "tsuki-izakaya", "name": "Tsuki Izakaya", "cuisine": "japanese", "kind": "drinks", "typeLabel": "Izakaya", "neighborhood": "Japantown", "price": "$$", "distanceKm": 2.9, "mood": "Lively & playful", "description": "Skewers off the grill, a carafe of sake, and plenty to talk about.", "soundNote": "Buzzing but friendly", "photo": "photos/venues/tsuki-izakaya.jpg"}, {"id": "hoshi-ramen", "name": "Hoshi Ramen", "cuisine": "japanese", "kind": "dinner", "typeLabel": "Ramen", "neighborhood": "Outer Sunset", "price": "$", "distanceKm": 6.4, "mood": "Steamy & casual", "description": "Two bowls of rich tonkotsu and a booth by the fogged-up window.", "soundNote": "Busy kitchen sounds", "photo": "photos/venues/hoshi-ramen.jpg"}, {"id": "casa-ocotillo", "name": "Casa Ocotillo", "cuisine": "mexican", "kind": "dinner", "typeLabel": "Mexican", "neighborhood": "Mission District", "price": "$$", "distanceKm": 3.4, "mood": "Bright & festive", "description": "Tacos al pastor, fresh tortillas, and a patio strung with lights.", "soundNote": "Upbeat music", "photo": "photos/venues/casa-ocotillo.jpg"}, {"id": "la-paloma", "name": "La Paloma Mezcaleria", "cuisine": "mexican", "kind": "drinks", "typeLabel": "Mezcal bar", "neighborhood": "Bernal Heights", "price": "$$", "distanceKm": 5.2, "mood": "Smoky & relaxed", "description": "A flight of mezcal, orange slices, and a corner seat for two.", "soundNote": "Low conversation", "photo": "photos/venues/la-paloma.jpg"}, {"id": "saffron-lane", "name": "Saffron Lane", "cuisine": "indian", "kind": "dinner", "typeLabel": "Indian", "neighborhood": "SoMa", "price": "$$", "distanceKm": 2.1, "mood": "Warm & aromatic", "description": "Shared thalis, buttery naan, and a cardamom chai to finish.", "soundNote": "Easy conversation", "photo": "photos/venues/saffron-lane.jpg"}, {"id": "tiffin-room", "name": "The Tiffin Room", "cuisine": "indian", "kind": "dinner", "typeLabel": "Indian street food", "neighborhood": "Inner Richmond", "price": "$", "distanceKm": 5.8, "mood": "Casual & colourful", "description": "Chaat, dosa, and mango lassi at a long communal table.", "soundNote": "Lively room", "photo": "photos/venues/tiffin-room.jpg"}, {"id": "baan-rim-nam", "name": "Baan Rim Nam", "cuisine": "thai", "kind": "dinner", "typeLabel": "Thai", "neighborhood": "Tenderloin", "price": "$", "distanceKm": 1.4, "mood": "Cozy & no-frills", "description": "Khao soi, crispy pork belly, and a table squeezed by the window.", "soundNote": "Quiet weeknights", "photo": "photos/venues/baan-rim-nam.jpg"}, {"id": "lemongrass-social", "name": "Lemongrass Social", "cuisine": "thai", "kind": "drinks", "typeLabel": "Thai cocktail bar", "neighborhood": "Marina", "price": "$$$", "distanceKm": 8.2, "mood": "Sleek & lively", "description": "Tamarind cocktails, small plates to share, and a view of the bay.", "soundNote": "DJ on weekends", "photo": "photos/venues/lemongrass-social.jpg"}]};

const state = {
  view: "discover",
  step: "welcome",
  cuisine: null,
  distance: 5,
  selectedVenueId: null,
  selectedPersonId: null,
  history: [],
  visitLog: [],
  counteringInviteId: null
};

const app = document.getElementById("app");
const backBtn = document.getElementById("backBtn");
const testerDialog = document.getElementById("testerDialog");
const totalVisitsEl = document.getElementById("totalVisits");
const uniqueVisitsEl = document.getElementById("uniqueVisits");
const inviteBadge = document.getElementById("inviteBadge");

const savedSent = JSON.parse(localStorage.getItem("cravematchSent") || "[]");
let sentInvites = savedSent;

function person(id) { return DATA.people.find(p => p.id === id); }
function venue(id) { return DATA.venues.find(v => v.id === id); }
function cuisineName(id) { return DATA.cuisines.find(c => c.id === id)?.name || id; }

function formatDate(date) {
  const d = new Date(date + "T12:00:00");
  return d.toLocaleDateString(undefined, {month:"short", day:"numeric", year:"numeric"});
}
function formatTime(t) {
  const [h,m] = t.split(":").map(Number);
  const d = new Date(); d.setHours(h,m,0,0);
  return d.toLocaleTimeString([], {hour:"numeric", minute:"2-digit"});
}

function screenKey() {
  return `${state.view}:${state.step}:${state.selectedVenueId || ""}:${state.selectedPersonId || ""}:${state.counteringInviteId || ""}`;
}
function track() {
  state.visitLog.push(screenKey());
  updateTester();
}
function updateTester() {
  totalVisitsEl.textContent = state.visitLog.length;
  uniqueVisitsEl.textContent = new Set(state.visitLog).size;
}
function pushHistory() {
  state.history.push({
    view:state.view, step:state.step, cuisine:state.cuisine, distance:state.distance,
    selectedVenueId:state.selectedVenueId, selectedPersonId:state.selectedPersonId,
    counteringInviteId:state.counteringInviteId
  });
}
function restore(s) { Object.assign(state,s); render(false); }
function go(step, changes={}) {
  pushHistory();
  Object.assign(state, changes);
  state.step = step;
  render();
}
function setView(view) {
  if (state.view !== view) pushHistory();
  state.view = view;
  state.counteringInviteId = null;
  if(view==="discover" && !state.step) state.step="welcome";
  render();
}
function saveSent() {
  localStorage.setItem("cravematchSent", JSON.stringify(sentInvites));
}

function render(doTrack=true) {
  if(doTrack) track();
  backBtn.style.visibility = state.history.length ? "visible" : "hidden";
  document.querySelectorAll(".nav-btn").forEach(b => b.classList.toggle("active", b.dataset.nav === state.view));
  inviteBadge.textContent = DATA.invitations.filter(i=>i.status==="awaiting").length;

  if(state.view==="discover") renderDiscover();
  if(state.view==="invitations") renderInvitations();
  if(state.view==="sent") renderSent();
}

function renderDiscover() {
  if(state.step==="welcome") {
    app.innerHTML = `
      <section class="hero">
        <div class="eyebrow">Guided discovery</div>
        <h1>Let’s plan a date that actually fits.</h1>
        <p class="muted">I’ll ask a few simple questions, then show places and people that match your choices.</p>
        <div class="actions"><button class="primary" id="startBtn">Start conversation</button></div>
      </section>`;
    document.getElementById("startBtn").onclick = ()=>go("cuisine");
    return;
  }

  if(state.step==="cuisine") {
    app.innerHTML = `
      <div class="chat">
        <div class="bubble bot">What kind of food are you in the mood for?</div>
      </div>
      <div class="choices">
        ${DATA.cuisines.map(c=>`<button class="choice" data-cuisine="${c.id}"><strong>${c.name}</strong><small>Show places that match</small></button>`).join("")}
      </div>`;
    document.querySelectorAll("[data-cuisine]").forEach(btn=>btn.onclick=()=>go("distance",{cuisine:btn.dataset.cuisine}));
    return;
  }

  if(state.step==="distance") {
    app.innerHTML = `
      <div class="chat">
        <div class="bubble user">${cuisineName(state.cuisine)}</div>
        <div class="bubble bot">Great. How far would you travel for the date?</div>
      </div>
      <div class="slider-box">
        <div class="slider-row"><strong>Maximum distance</strong><strong id="distText">${state.distance} km</strong></div>
        <input id="distRange" type="range" min="1" max="10" step="1" value="${state.distance}" />
        <div class="actions"><button class="primary" id="showVenues">Show matching venues</button></div>
      </div>`;
    const range=document.getElementById("distRange");
    range.oninput=()=>{ state.distance=Number(range.value); document.getElementById("distText").textContent=range.value+" km"; };
    document.getElementById("showVenues").onclick=()=>go("venues");
    return;
  }

  if(state.step==="venues") {
    const matches=DATA.venues.filter(v=>v.cuisine===state.cuisine && v.distanceKm<=state.distance);
    app.innerHTML = `
      <div class="chat">
        <div class="bubble user">Within ${state.distance} km</div>
        <div class="bubble bot">I found ${matches.length} ${cuisineName(state.cuisine)} option${matches.length===1?"":"s"} within your distance.</div>
      </div>
      ${matches.length ? `<div class="result-list">${matches.map(v=>`
        <article class="venue-card">
          <div class="card-body">
            <div class="kicker">${v.typeLabel}</div>
            <h3>${v.name}</h3>
            <p>${v.description}</p>
            <div class="meta">
              <span class="pill">${v.distanceKm} km</span><span class="pill">${v.neighborhood}</span>
              <span class="pill">${v.price}</span><span class="pill">${v.mood}</span>
            </div>
            <div class="actions"><button class="primary" data-venue="${v.id}">Choose this venue</button></div>
          </div>
        </article>`).join("")}</div>` : `
        <div class="empty"><h3>No matches yet</h3><p>Try increasing the distance or choosing another cuisine.</p>
        <button class="secondary" id="changeDistance">Change distance</button></div>`}`;
    document.querySelectorAll("[data-venue]").forEach(b=>b.onclick=()=>go("venueDetail",{selectedVenueId:b.dataset.venue}));
    const cd=document.getElementById("changeDistance"); if(cd) cd.onclick=()=>go("distance");
    return;
  }

  if(state.step==="venueDetail") {
    const v=venue(state.selectedVenueId);
    app.innerHTML = `
      <div class="chat"><div class="bubble bot">How does this one feel?</div></div>
      <article class="venue-card"><div class="card-body">
        <div class="kicker">${v.typeLabel}</div><h2>${v.name}</h2>
        <p>${v.description}</p>
        <div class="meta"><span class="pill">${v.distanceKm} km</span><span class="pill">${v.neighborhood}</span><span class="pill">${v.price}</span><span class="pill">${v.soundNote}</span></div>
        <div class="actions">
          <button class="primary" id="inviteSomeone">Yes — invite someone</button>
          <button class="secondary" id="otherVenues">See other venues</button>
        </div>
      </div></article>`;
    document.getElementById("inviteSomeone").onclick=()=>go("people");
    document.getElementById("otherVenues").onclick=()=>go("venues");
    return;
  }

  if(state.step==="people") {
    const v=venue(state.selectedVenueId);
    let matches=DATA.people.filter(p=>p.likedVenueIds.includes(v.id) || p.cuisines.includes(v.cuisine));
    matches=matches.filter(p=>p.distanceKm<=state.distance);
    app.innerHTML = `
      <div class="chat">
        <div class="bubble user">I like ${v.name}.</div>
        <div class="bubble bot">Nice choice. Here are people who like that venue or ${cuisineName(v.cuisine)} food and are within ${state.distance} km.</div>
      </div>
      <div class="result-list">${matches.map(p=>`
        <article class="person-card"><div class="card-body">
          <div class="kicker">${p.age} years old · ${p.distanceKm} km away</div>
          <h3>${p.name}</h3><p>${p.bio}</p>
          <div class="meta">${p.cuisines.map(c=>`<span class="pill">${cuisineName(c)}</span>`).join("")}</div>
          <div class="actions"><button class="primary" data-person="${p.id}">Invite ${p.name}</button></div>
        </div></article>`).join("")}</div>`;
    document.querySelectorAll("[data-person]").forEach(b=>b.onclick=()=>go("composeInvite",{selectedPersonId:b.dataset.person}));
    return;
  }

  if(state.step==="composeInvite") {
    const p=person(state.selectedPersonId), v=venue(state.selectedVenueId);
    app.innerHTML = `
      <div class="chat">
        <div class="bubble bot">Let’s send ${p.name} a clear invitation to ${v.name}.</div>
      </div>
      <div class="form-card">
        <div class="field"><label>Date</label><input id="dateInput" type="date" value="2026-11-26"></div>
        <div class="field"><label>Time</label><input id="timeInput" type="time" value="19:00"></div>
        <div class="field"><label>Short message</label><textarea id="messageInput" placeholder="Want to try this place together?"></textarea></div>
        <div class="actions"><button class="primary" id="sendInvite">Send invitation</button></div>
      </div>`;
    document.getElementById("sendInvite").onclick=()=>{
      const date=document.getElementById("dateInput").value;
      const time=document.getElementById("timeInput").value;
      const message=document.getElementById("messageInput").value.trim();
      if(!date || !time || !message){ alert("Please choose a date, time, and write a short message."); return; }
      sentInvites.push({
        id:"sent-"+Date.now(), toPersonId:p.id, venueId:v.id, date, time, message, status:"sent"
      });
      saveSent();
      go("sentConfirmation");
    };
    return;
  }

  if(state.step==="sentConfirmation") {
    const latest=sentInvites[sentInvites.length-1];
    const p=person(latest.toPersonId), v=venue(latest.venueId);
    app.innerHTML = `
      <div class="hero">
        <div class="eyebrow">Invitation sent</div>
        <h2>Done — ${p.name} has your request.</h2>
        <p><strong>${v.name}</strong><br>${formatDate(latest.date)} at ${formatTime(latest.time)}</p>
        <p class="muted">Your sent invitation is now saved under the Sent tab.</p>
        <div class="actions"><button class="primary" id="viewSent">View sent requests</button><button class="secondary" id="startOver">Start another discovery</button></div>
      </div>`;
    document.getElementById("viewSent").onclick=()=>setView("sent");
    document.getElementById("startOver").onclick=()=>{ pushHistory(); Object.assign(state,{step:"cuisine",cuisine:null,distance:5,selectedVenueId:null,selectedPersonId:null}); render(); };
  }
}

function renderInvitations() {
  if(state.counteringInviteId) {
    const inv=DATA.invitations.find(i=>i.id===state.counteringInviteId);
    const p=person(inv.fromPersonId), v=venue(inv.venueId);
    app.innerHTML=`
      <div class="section-title"><div class="kicker">Suggest another time</div><h2>Reply to ${p.name}</h2></div>
      <div class="form-card">
        <p><strong>${v.name}</strong><br><span class="muted">Original: ${formatDate(inv.date)} at ${formatTime(inv.time)}</span></p>
        <div class="field"><label>New date</label><input id="counterDate" type="date" value="2026-12-01"></div>
        <div class="field"><label>New time</label><input id="counterTime" type="time" value="19:00"></div>
        <div class="field"><label>Message (optional)</label><textarea id="counterMsg">I can't make that time. Would this work instead?</textarea></div>
        <div class="actions"><button class="primary" id="sendCounter">Send suggestion</button></div>
      </div>`;
    document.getElementById("sendCounter").onclick=()=>{
      const date=document.getElementById("counterDate").value, time=document.getElementById("counterTime").value;
      const message=document.getElementById("counterMsg").value.trim();
      sentInvites.push({id:"counter-"+Date.now(),toPersonId:p.id,venueId:v.id,date,time,message,status:"counter-proposal",replyTo:inv.id});
      saveSent();
      state.counteringInviteId=null;
      state.view="sent";
      render();
    };
    return;
  }

  app.innerHTML=`
    <div class="section-title"><div class="kicker">Incoming</div><h2>Invitations</h2><p class="muted">Open an invitation to see where and when they want to meet.</p></div>
    <div class="result-list">${DATA.invitations.map(inv=>{
      const p=person(inv.fromPersonId), v=venue(inv.venueId);
      return `<article class="invite-card"><div class="card-body">
        <div class="kicker">From ${p.name}</div><h3>${v.name}</h3>
        <p>${formatDate(inv.date)} · ${formatTime(inv.time)}</p>
        <p class="muted">“${inv.message}”</p>
        <div class="actions"><button class="primary" data-openinvite="${inv.id}">Open invitation</button></div>
      </div></article>`;
    }).join("")}</div>`;

  document.querySelectorAll("[data-openinvite]").forEach(b=>b.onclick=()=>{
    const inv=DATA.invitations.find(i=>i.id===b.dataset.openinvite);
    const p=person(inv.fromPersonId), v=venue(inv.venueId);
    pushHistory();
    app.innerHTML=`
      <div class="section-title"><div class="kicker">Invitation from ${p.name}</div><h2>${v.name}</h2></div>
      <article class="invite-card"><div class="card-body">
        <p><strong>${formatDate(inv.date)} at ${formatTime(inv.time)}</strong></p>
        <p>${inv.message}</p>
        <div class="meta"><span class="pill">${v.typeLabel}</span><span class="pill">${v.distanceKm} km</span><span class="pill">${v.neighborhood}</span></div>
        <div class="actions"><button class="primary" id="counterBtn">Suggest another time</button><button class="secondary" id="backInvites">Back to invitations</button></div>
      </div></article>`;
    state.visitLog.push(`invitations:detail:${inv.id}`); updateTester();
    document.getElementById("counterBtn").onclick=()=>{state.counteringInviteId=inv.id; render();};
    document.getElementById("backInvites").onclick=()=>render();
  });
}

function renderSent() {
  app.innerHTML=`
    <div class="section-title"><div class="kicker">Outgoing</div><h2>Sent requests</h2><p class="muted">Requests and counter-proposals you send appear here.</p></div>
    ${sentInvites.length ? `<div class="result-list">${[...sentInvites].reverse().map(inv=>{
      const p=person(inv.toPersonId), v=venue(inv.venueId);
      return `<article class="invite-card"><div class="card-body">
        <div class="kicker">${inv.status==="counter-proposal"?"Counter-proposal":"Sent"} to ${p?.name || "Unknown"}</div>
        <h3>${v?.name || "Venue"}</h3>
        <p>${formatDate(inv.date)} · ${formatTime(inv.time)}</p>
        <p class="muted">“${inv.message}”</p>
      </div></article>`;
    }).join("")}</div>` : `<div class="empty"><h3>No sent requests yet</h3><p>When you send or counter an invitation, it will appear here.</p></div>`}`;
}

backBtn.onclick=()=>{
  const prev=state.history.pop();
  if(prev) restore(prev);
};

document.querySelectorAll(".nav-btn").forEach(b=>b.onclick=()=>setView(b.dataset.nav));
document.getElementById("testerBtn").onclick=()=>{ updateTester(); testerDialog.showModal(); };
document.getElementById("copyLogBtn").onclick=async()=>{
  const text=state.visitLog.map((v,i)=>`${i+1}. ${v}`).join("\n");
  try { await navigator.clipboard.writeText(text); alert("Visit log copied."); }
  catch { prompt("Copy this visit log:", text); }
};
document.getElementById("resetAllBtn").onclick=()=>{
  if(confirm("Reset sent requests and navigation history?")){
    localStorage.removeItem("cravematchSent");
    sentInvites=[];
    Object.assign(state,{view:"discover",step:"welcome",cuisine:null,distance:5,selectedVenueId:null,selectedPersonId:null,history:[],visitLog:[],counteringInviteId:null});
    testerDialog.close(); render();
  }
};

render();
