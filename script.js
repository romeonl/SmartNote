window.addEventListener("DOMContentLoaded", () => {
  const STORAGE_KEY = "smartnote_ipsa_v2";

  const PROGRAMS = {
    AERO1: {
      label: "Aéro 1",
      semesters: {
        S1: {
          label: "Semestre 1",
          poles: [
            {
              id: "PSF11",
              name: "Pôle : Sciences fondamentales (PSF 11)",
              subjects: [
                { code: "AnMa111", name: "Algebra", ecuePct: 40 },
                { code: "AnMa112", name: "Analysis", ecuePct: 40 },
                {
                  code: "AnMa110p",
                  name: "Science and methodology immersion",
                  ecuePct: 20
                }
              ]
            },
            {
              id: "PSI11",
              name: "Pôle : Sciences de l’ingénieur (PSI 11)",
              subjects: [
                { code: "AnPhv111", name: "Point mechanics 1", ecuePct: 49 },
                { code: "AnEl111", name: "Electrokinetics 1", ecuePct: 31 },
                {
                  code: "AnIn111",
                  name: "Algorithmic & Python language 1",
                  ecuePct: 20
                }
              ]
            },
            {
              id: "PAS11",
              name: "Pôle : Aéronautique et Spatial (PAS 11)",
              subjects: [
                {
                  code: "AnAé110",
                  name: "Introduction to sustainable engineering (incl. Climate Fresco – TEDS Badges)",
                  ecuePct: 25
                },
                {
                  code: "AnAé111",
                  name: "Introduction to the world of aeronautics and space",
                  ecuePct: 41
                },
                { code: "AnGp111", name: "Aerospace Projects", ecuePct: 34 }
              ]
            },
            {
              id: "PSHL11",
              name: "Pôle : Sciences Humaines et Langues (PSHL 11)",
              subjects: [
                {
                  code: "AnSh111",
                  name: "History of Aerospace Science and Technology",
                  ecuePct: 34
                },
                { code: "AnSh113", name: "Impact Project", ecuePct: 19 },
                {
                  code: "AnSh112",
                  name: "Voltaire teaching",
                  ecuePct: 0 // ne compte pas dans la moyenne
                },
                {
                  code: "AnLa111",
                  name: "English for aeronautics and space 1",
                  ecuePct: 47
                }
                // AnLa113 (FLE) ignoré pour un profil FR, sinon on pourrait le mettre avec ecuePct: 47 à la place de AnLa111
              ]
            }
          ]
        },
        S2: {
          label: "Semestre 2",
          poles: [
            {
              id: "PSF12",
              name: "Pôle : Sciences fondamentales (PSF 12)",
              subjects: [
                {
                  code: "AnMa121",
                  name: "Analysis and probabilities",
                  ecuePct: 54
                },
                {
                  code: "AnMa122",
                  name: "Algebra & geometry",
                  ecuePct: 46
                }
              ]
            },
            {
              id: "PSI12",
              name: "Pôle : Sciences de l’ingénieur (PSI 12)",
              subjects: [
                { code: "AnPhv121", name: "Point mechanics 2", ecuePct: 37 },
                {
                  code: "AnPhv122",
                  name: "Experimental physics: geometric optics and calorimetry",
                  ecuePct: 8
                },
                { code: "AnEl121", name: "Electrokinetics 2", ecuePct: 25 },
                {
                  code: "AnIn121",
                  name: "Algorithmic & Python language 2",
                  ecuePct: 14
                },
                {
                  code: "AnMé121",
                  name: "Introduction to mechanical design engineering",
                  ecuePct: 16
                }
              ]
            },
            {
              id: "PAS12",
              name: "Pôle : Aéronautique et Spatial (PAS 12)",
              subjects: [
                {
                  code: "AnAé121",
                  name: "General aeronautics",
                  ecuePct: 67
                },
                { code: "AnGp122", name: "Aerospace Projects", ecuePct: 33 }
              ]
            },
            {
              id: "PSHL12",
              name: "Pôle : Sciences Humaines et Langues (PSHL 12)",
              subjects: [
                {
                  code: "AnSh121",
                  name: "History of Aerospace Science and Technology – TEDS Badges",
                  ecuePct: 28
                },
                { code: "AnSh123", name: "Impact Project", ecuePct: 21 },
                {
                  code: "AnSh122",
                  name: "Voltaire teaching",
                  ecuePct: 11
                },
                {
                  code: "AnLa121",
                  name: "English for aeronautics and space 2",
                  ecuePct: 26
                },
                {
                  code: "AnLa124",
                  name: "Preparation TOEIC / Advanced English",
                  ecuePct: 13
                },
                {
                  code: "AnLa123",
                  name: "TOEIC (Minimum level 550)",
                  ecuePct: 1
                }
                // AnLa125 (FLE), AnSh120-a/b, AnSt120 etc. non inclus dans la moyenne standard ici
              ]
            }
          ]
        }
      }
    },
    AERO2: {
      label: "Aéro 2",
      semesters: {
        S1: {
          label: "Semestre 1",
          poles: [
            {
              id: "PSF",
              name: "Pôle : Sciences fondamentales (PSF 21)",
              subjects: [
                { code: "Ma211", name: "Analyse : calcul différentiel", ecuePct: 55 },
                { code: "Ma212", name: "Analyse : intégrales multiples et curvilignes", ecuePct: 45 }
              ]
            },
            {
              id: "PSI",
              name: "Pôle : Sciences de l’ingénieur",
              ues: [
                {
                  id: "UE_PSI21",
                  name: "UE PSI 21 – Thermo / RDM / Méca / CAO",
                  subjects: [
                    { code: "Phv211", name: "Thermodynamique 1", ecuePct: 28 },
                    { code: "Mé213", name: "Résistance des matériaux 1", ecuePct: 31 },
                    { code: "Mé212", name: "Mécanique du solide 1", ecuePct: 28 },
                    { code: "Mé211", name: "CAO 1 – Conception mécanique assistée", ecuePct: 13 }
                  ]
                },
                {
                  id: "UE_PSI22",
                  name: "UE PSI 22 – EM / Ondes / Électronique / Python",
                  subjects: [
                    { code: "Phs213", name: "Électromagnétisme 1", ecuePct: 28 },
                    { code: "Phv212", name: "Physique des ondes 1 : ondes mécaniques, acoustiques", ecuePct: 30 },
                    { code: "El211", name: "Électronique 1", ecuePct: 24 },
                    { code: "In211", name: "Python 1 – Pratique de la programmation", ecuePct: 18 }
                  ]
                }
              ]
            },
            {
              id: "PAS",
              name: "Pôle : Aéronautique et Spatial (PAS 21)",
              subjects: [
                { code: "Aé211", name: "Aéronautique 1", ecuePct: 28 },
                { code: "Gp211", name: "Grand projet programmation", ecuePct: 27 },
                { code: "Gp212", name: "Projet ROVER (S1)", ecuePct: 45 }
              ]
            },
            {
              id: "PSHL",
              name: "Pôle : Sciences Humaines et Langues (PSHL 21)",
              subjects: [
                { code: "Sh211", name: "Éthique de l'ingénieur aérospatial / Badges TEDS", ecuePct: 30 },
                { code: "Sh212", name: "Enseignement Voltaire", ecuePct: 0 },
                { code: "La211", name: "English for aircraft engines", ecuePct: 41 },
                { code: "La212", name: "Anglais : préparation TOEIC / Advanced English", ecuePct: 29 }
              ]
            }
          ]
        },
        S2: {
          label: "Semestre 2",
          poles: [
            {
              id: "PSF",
              name: "Pôle : Sciences fondamentales (PSF 22)",
              subjects: [
                { code: "Ma221", name: "Algèbre linéaire et bilinéaire", ecuePct: 42 },
                { code: "Ma222", name: "Analyses et probabilités", ecuePct: 44 },
                { code: "Ma223", name: "Génie mathématique : résolution numérique (Python)", ecuePct: 14 }
              ]
            },
            {
              id: "PSI",
              name: "Pôle : Sciences de l’ingénieur",
              ues: [
                {
                  id: "UE_PSI23",
                  name: "UE PSI 23 – Thermo 2 / RDM 2 / Méca 2 / CAO 2",
                  subjects: [
                    { code: "Phv221", name: "Thermodynamique 2", ecuePct: 29 },
                    { code: "Mé223", name: "Résistance des matériaux 2", ecuePct: 28 },
                    { code: "Mé222", name: "Mécanique du solide 2", ecuePct: 27 },
                    { code: "Mé221", name: "CAO 2 – Conception mécanique assistée", ecuePct: 16 }
                  ]
                },
                {
                  id: "UE_PSI24",
                  name: "UE PSI 24 – Python 2 / Électronique 2 / EM 2 / Ondes EM 2",
                  subjects: [
                    { code: "In222", name: "Python 2 – Pratique de la programmation", ecuePct: 17 },
                    { code: "El221", name: "Électronique 2", ecuePct: 36 },
                    { code: "Phs224", name: "Électromagnétisme 2", ecuePct: 22 },
                    { code: "Phs225", name: "Physique des ondes 2 : ondes électromagnétiques", ecuePct: 26 }
                  ]
                }
              ]
            },
            {
              id: "PAS",
              name: "Pôle : Aéronautique et Spatial (PAS 22)",
              subjects: [
                { code: "Aé221", name: "Aéronautique 2 – Bureau Enquête et Accident", ecuePct: 16 },
                { code: "Phv222", name: "Physique de l’Univers", ecuePct: 19 },
                { code: "Mf221", name: "Mécanique des fluides", ecuePct: 25 },
                { code: "Gp222", name: "Projet ROVER (S2)", ecuePct: 39 }
              ]
            },
            {
              id: "PSHL",
              name: "Pôle : Sciences Humaines et Langues (PSHL 22)",
              subjects: [
                { code: "Sh222", name: "Enseignement Voltaire", ecuePct: 22 },
                { code: "La221", name: "Business English & Interculturality", ecuePct: 63 },
                { code: "La223", name: "TOEIC – score minimal 650", ecuePct: 15 }
              ]
            }
          ]
        }
      }
    }
  };

  const screenHome = document.getElementById("screen-home");
  const screenMain = document.getElementById("screen-main");

  const promoButtons = document.querySelectorAll(".promo-btn[data-promo]");
  const backHomeBtn = document.getElementById("backHomeBtn");

  const currentPromoLabel = document.getElementById("currentPromoLabel");
  const semesterButtons = document.querySelectorAll(".sem-btn");

  const subjectsListEl = document.getElementById("subjects-list");
  const gradesBody = document.getElementById("grades-body");
  const avgDisplay = document.getElementById("avg-display");
  const coefDisplay = document.getElementById("coef-display");
  const msgEl = document.getElementById("msg");
  const clearSemesterBtn = document.getElementById("clearSemesterBtn");
  const bulletinEl = document.getElementById("bulletin");

  const modal = document.getElementById("note-modal");
  const modalForm = document.getElementById("modal-form");
  const modalSubjectTitle = document.getElementById("modal-subject-title");
  const modalSubjectDisplay = document.getElementById("modal-subject-display");
  const modalGrade = document.getElementById("modal-grade");
  const modalScale = document.getElementById("modal-scale");
  const modalCoef = document.getElementById("modal-coef");
  const modalError = document.getElementById("modal-error");
  const modalCancelBtn = document.getElementById("modalCancelBtn");

  let state = loadState();
  let modalCurrentSubject = null;

  if (state.currentPromo && PROGRAMS[state.currentPromo]) showMainScreen();
  else showHomeScreen();

  renderAll();

  promoButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const promo = btn.getAttribute("data-promo");
    if (!PROGRAMS[promo]) return;
    state.currentPromo = promo;
    if (!state.currentSemester) state.currentSemester = "S1";
    saveState();
    showMainScreen();
    renderAll();
  });
});

  backHomeBtn.addEventListener("click", () => showHomeScreen());

  semesterButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const sem = btn.getAttribute("data-semester");
      if (!sem) return;
      state.currentSemester = sem;
      saveState();
      updateSemesterButtons();
      renderAll();
    });
  });

  clearSemesterBtn.addEventListener("click", () => {
    const promo = state.currentPromo;
    const sem = state.currentSemester;
    if (!promo || !sem) return;
    const notes = getNotesArray(promo, sem);
    if (notes.length === 0) return;
    const ok = confirm("Supprimer toutes les notes de ce semestre ?");
    if (!ok) return;
    setNotesArray(promo, sem, []);
    saveState();
    renderGrades();
  });

  modalCancelBtn.addEventListener("click", closeModal);

  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  modalForm.addEventListener("submit", (e) => {
    e.preventDefault();
    handleModalSubmit();
  });

  function showHomeScreen() {
    screenHome.classList.add("screen-active");
    screenMain.classList.remove("screen-active");
  }

  function showMainScreen() {
    screenHome.classList.remove("screen-active");
    screenMain.classList.add("screen-active");
  }

  function renderAll() {
    updateTopbar();
    renderSubjects();
    renderGrades();
    renderBulletin();
  }

  function updateTopbar() {
    const promo = state.currentPromo;
    if (!promo || !PROGRAMS[promo]) return;
    currentPromoLabel.textContent = PROGRAMS[promo].label;
    updateSemesterButtons();
  }

  function updateSemesterButtons() {
    const sem = state.currentSemester || "S1";
    semesterButtons.forEach(b => {
      const s = b.getAttribute("data-semester");
      if (s === sem) b.classList.add("sem-btn-active");
      else b.classList.remove("sem-btn-active");
    });
  }

  // === helpers for colored averages ===
  function avgClass(value) {
    if (value == null || !isFinite(value)) return "avg-na";
    if (value >= 12) return "avg-good";
    if (value >= 10) return "avg-mid";
    return "avg-bad";
  }

  function avgText(value) {
    return (value == null || !isFinite(value)) ? "—" : `${format2(value)} / 20`;
  }

  function renderSubjects() {
    subjectsListEl.innerHTML = "";
    const promo = state.currentPromo;
    const sem = state.currentSemester || "S1";

    if (!promo || !PROGRAMS[promo]) return;
    const semObj = PROGRAMS[promo].semesters[sem];
    if (!semObj) return;

    if (semObj.poles && semObj.poles.length > 0) {
      const poles = semObj.poles;

      poles.forEach(pole => {
        const poleTitle = document.createElement("div");
        poleTitle.style.margin = "8px 0 6px";
        poleTitle.innerHTML = `<div class="badge" style="display:inline-flex;">${escapeHtml(pole.name)}</div>`;
        subjectsListEl.appendChild(poleTitle);

        if (pole.ues && pole.ues.length > 0) {
          pole.ues.forEach(ue => {
            const ueTitle = document.createElement("div");
            ueTitle.style.margin = "6px 0 4px";
            ueTitle.innerHTML = `<div class="bulletin-sub">${escapeHtml(ue.name)}</div>`;
            subjectsListEl.appendChild(ueTitle);

            ue.subjects.forEach(subj => {
              const row = document.createElement("div");
              row.className = "subject-row";
              row.innerHTML = `
                <div class="subject-main">
                  <span class="subject-code">${escapeHtml(subj.code)} • ${subj.ecuePct}%</span>
                  <span class="subject-name">${escapeHtml(subj.name)}</span>
                </div>
                <button type="button" class="btn-plus" data-code="${escapeHtml(subj.code)}">+ Note</button>
              `;
              subjectsListEl.appendChild(row);
            });
          });
        } else if (pole.subjects && pole.subjects.length > 0) {
          pole.subjects.forEach(subj => {
            const row = document.createElement("div");
            row.className = "subject-row";
            row.innerHTML = `
              <div class="subject-main">
                <span class="subject-code">${escapeHtml(subj.code)} • ${subj.ecuePct}%</span>
                <span class="subject-name">${escapeHtml(subj.name)}</span>
              </div>
              <button type="button" class="btn-plus" data-code="${escapeHtml(subj.code)}">+ Note</button>
            `;
            subjectsListEl.appendChild(row);
          });
        }
      });
    } else {
      if (!semObj.subjects || semObj.subjects.length === 0) {
        subjectsListEl.innerHTML =
          `<p style="color:#9ca3af;font-size:0.9rem;">Aucune matière configurée pour ce semestre pour l'instant.</p>`;
        return;
      }

      semObj.subjects.forEach(subj => {
        const row = document.createElement("div");
        row.className = "subject-row";
        row.innerHTML = `
          <div class="subject-main">
            <span class="subject-code">${escapeHtml(subj.code)}</span>
            <span class="subject-name">${escapeHtml(subj.name)}</span>
          </div>
          <button type="button" class="btn-plus" data-code="${escapeHtml(subj.code)}">+ Note</button>
        `;
        subjectsListEl.appendChild(row);
      });
    }

    subjectsListEl.querySelectorAll(".btn-plus").forEach(btn => {
      btn.addEventListener("click", () => {
        const code = btn.getAttribute("data-code");
        openModalForSubject(code);
      });
    });
  }

  function openModalForSubject(subjectCode) {
    const subj = findCurrentSubject(subjectCode);
    if (!subj) return;

    modalCurrentSubject = subj;
    modalSubjectTitle.textContent = `Ajouter une note – ${subj.code}`;
    modalSubjectDisplay.value = `${subj.code} – ${subj.name}`;
    modalGrade.value = "";
    modalScale.value = "20";
    modalCoef.value = "1";
    modalError.textContent = "";

    modal.classList.add("modal-open");
    modalGrade.focus();
  }

  function closeModal() {
    modal.classList.remove("modal-open");
    modalCurrentSubject = null;
    modalError.textContent = "";
  }

  function handleModalSubmit() {
    if (!modalCurrentSubject) return;
    const promo = state.currentPromo;
    const sem = state.currentSemester || "S1";

    const gradeRaw = parseFloat(modalGrade.value);
    const scaleRaw = parseFloat(modalScale.value);
    const coefRaw = parseFloat(modalCoef.value);

    if (!isFinite(gradeRaw)) { modalError.textContent = "Entre une note valide."; return; }
    if (!isFinite(scaleRaw) || scaleRaw <= 0) { modalError.textContent = "Barème invalide."; return; }
    if (!isFinite(coefRaw) || coefRaw <= 0) { modalError.textContent = "Le coefficient doit être > 0."; return; }
    if (gradeRaw < 0 || gradeRaw > scaleRaw) { modalError.textContent = `La note doit être comprise entre 0 et ${scaleRaw}.`; return; }

    const gradeOn20 = (gradeRaw / scaleRaw) * 20;

    const note = {
      id: crypto.randomUUID(),
      subjectCode: modalCurrentSubject.code,
      gradeOn20: round2(gradeOn20),
      coef: round2(coefRaw),
      createdAt: Date.now()
    };

    const notes = getNotesArray(promo, sem);
    notes.unshift(note);
    setNotesArray(promo, sem, notes);
    saveState();

    closeModal();
    renderGrades();
  }

  function renderGrades() {
    const promo = state.currentPromo;
    const sem = state.currentSemester || "S1";
    const notes = getNotesArray(promo, sem);

    gradesBody.innerHTML = "";

    if (!notes || notes.length === 0) {
      gradesBody.innerHTML = `
        <tr>
          <td colspan="5" style="text-align:center;color:#6b7280;">
            Aucune note pour ce semestre. Utilise le bouton <strong>+ Note</strong> sur une matière.
          </td>
        </tr>
      `;
      if (avgDisplay) avgDisplay.textContent = "–";
      if (coefDisplay) coefDisplay.textContent = "–";
      renderBulletin();
      return;
    }

    notes.forEach(note => {
      const subj = findCurrentSubject(note.subjectCode);
      const subjLabel = subj ? `${subj.code} – ${subj.name}` : note.subjectCode;

      const tr = document.createElement("tr");
      const weighted = round2(note.gradeOn20 * note.coef);

      tr.innerHTML = `
        <td>${escapeHtml(subjLabel)}</td>
        <td>${format2(note.gradeOn20)} / 20</td>
        <td>${format2(note.coef)}</td>
        <td>${format2(weighted)}</td>
        <td class="row-actions">
          <button class="icon-btn" data-id="${note.id}">Suppr.</button>
        </td>
      `;
      gradesBody.appendChild(tr);
    });

    gradesBody.querySelectorAll(".icon-btn").forEach(btn => {
      btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-id");
        const newNotes = notes.filter(n => n.id !== id);
        setNotesArray(promo, sem, newNotes);
        saveState();
        renderGrades();
      });
    });

    renderBulletin();
  }

  // Moyennes par matière (en fonction de TES notes et coefs internes)
  function getSubjectAverages(promo, sem) {
    const notes = getNotesArray(promo, sem);

    const map = {};
    notes.forEach(n => {
      if (!map[n.subjectCode]) map[n.subjectCode] = [];
      map[n.subjectCode].push(n);
    });

    const avgs = {};
    Object.keys(map).forEach(code => {
      const arr = map[code];
      let w = 0, s = 0;
      arr.forEach(n => {
        w += n.coef;
        s += n.gradeOn20 * n.coef;
      });
      avgs[code] = (w > 0) ? (s / w) : null;
    });

    return avgs;
  }

  // ✅ Calcul utilitaire : moyenne pondérée d'un ensemble de matières par % ECUE
  function weightedAvgByEcue(subjects, subjectAverages) {
    let wSum = 0;
    let vSum = 0;

    subjects.forEach(s => {
      const avg = subjectAverages[s.code];
      if (avg == null || s.ecuePct === 0) return;
      wSum += s.ecuePct;
      vSum += avg * s.ecuePct;
    });

    return (wSum > 0) ? (vSum / wSum) : null;
  }

  // ✅ Bulletin : moyenne générale + moyenne pôle + moyenne UE (PSI) + moyennes matières
  function renderBulletin() {
    if (!bulletinEl) return;

    const promo = state.currentPromo;
    const sem = state.currentSemester || "S1";
    if (!promo || !PROGRAMS[promo]) {
      bulletinEl.innerHTML = "";
      return;
    }

    const semObj = PROGRAMS[promo].semesters[sem];
    const poles = semObj?.poles || [];

    if (!poles.length) {
      bulletinEl.innerHTML = `<p class="bulletin-sub">Le bulletin détaillé est disponible pour Aéro 2 uniquement.</p>`;
      return;
    }

    const subjectAverages = getSubjectAverages(promo, sem);

    // On prépare les résultats pôles (et UE si présentes)
    const poleResults = [];

    poles.forEach(pole => {
      let poleAvg = null;
      let ueResults = null;

      if (pole.ues && pole.ues.length > 0) {
        ueResults = pole.ues.map(ue => ({
          id: ue.id,
          name: ue.name,
          avg: weightedAvgByEcue(ue.subjects, subjectAverages),
          subjects: ue.subjects
        }));

        const allSubjects = pole.ues.flatMap(ue => ue.subjects);
        poleAvg = weightedAvgByEcue(allSubjects, subjectAverages);
      } else if (pole.subjects && pole.subjects.length > 0) {
        poleAvg = weightedAvgByEcue(pole.subjects, subjectAverages);
      }

      poleResults.push({
        id: pole.id,
        name: pole.name,
        avg: poleAvg,
        ues: ueResults,
        subjects: pole.subjects || null
      });
    });

    // Moyenne générale du semestre = moyenne des pôles renseignés
    const poleVals = poleResults.map(p => p.avg).filter(x => x != null);
    const semAvg = poleVals.length ? (poleVals.reduce((a, b) => a + b, 0) / poleVals.length) : null;

    const html = [];

    // Ligne générale (colorée)
    const semClass = avgClass(semAvg);
    const semValue = avgText(semAvg);
    html.push(`
      <div class="bulletin-line">
        <div class="bulletin-title">Moyenne générale du semestre</div>
        <div class="bulletin-value ${semClass}">${semValue}</div>
      </div>
    `);

    // Détail par pôle
    poleResults.forEach(p => {
      const pClass = avgClass(p.avg);
      const pValue = avgText(p.avg);

      html.push(`
        <div class="bulletin-pole">
          <div class="bulletin-line">
            <div>
              <div class="bulletin-title">${escapeHtml(p.name)}</div>
              <div class="bulletin-sub">Moyenne du pôle</div>
            </div>
            <div class="bulletin-value ${pClass}">${pValue}</div>
          </div>
      `);

      // UE (PSI)
      if (p.ues && p.ues.length > 0) {
        p.ues.forEach(ue => {
          const ueClass = avgClass(ue.avg);
          const ueValue = avgText(ue.avg);

          html.push(`
            <div class="bulletin-line" style="margin-left:6px;">
              <div>
                <div class="bulletin-title">${escapeHtml(ue.name)}</div>
                <div class="bulletin-sub">Moyenne de l’UE</div>
              </div>
              <div class="bulletin-value ${ueClass}">${ueValue}</div>
            </div>
          `);

          // matières de l'UE (non colorées individuellement pour l'instant)
          html.push(`<div class="bulletin-subjects">`);
          ue.subjects.forEach(s => {
            const avg = subjectAverages[s.code];
            const right = (avg == null) ? "—" : `${format2(avg)} / 20`;
            html.push(`
              <div class="bulletin-subject-line">
                <div>
                  <span class="bulletin-subject-code">${escapeHtml(s.code)}</span>
                  ${escapeHtml(s.name)}
                </div>
                <div class="bulletin-subject-meta">${s.ecuePct}% • ${right}</div>
              </div>
            `);
          });
          html.push(`</div>`);
        });
      }
      // Sinon : matières directes du pôle
      else if (p.subjects && p.subjects.length > 0) {
        html.push(`<div class="bulletin-subjects">`);
        p.subjects.forEach(s => {
          const avg = subjectAverages[s.code];
          const right = (avg == null) ? "—" : `${format2(avg)} / 20`;
          html.push(`
            <div class="bulletin-subject-line">
              <div>
                <span class="bulletin-subject-code">${escapeHtml(s.code)}</span>
                ${escapeHtml(s.name)}
              </div>
              <div class="bulletin-subject-meta">${s.ecuePct}% • ${right}</div>
            </div>
          `);
        });
        html.push(`</div>`);
      }

      html.push(`</div>`); // fin bulletin-pole
    });

    bulletinEl.innerHTML = `<div class="bulletin-grid">${html.join("")}</div>`;
  }

  function loadState() {
    const base = {
      currentPromo: null,
      currentSemester: "S1",
      data: {
        AERO1: { S1: [], S2: [] },
        AERO2: { S1: [], S2: [] }
      }
    };

    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return base;
      const parsed = JSON.parse(raw);
      if (!parsed || typeof parsed !== "object") return base;

      return {
        currentPromo: parsed.currentPromo || base.currentPromo,
        currentSemester: parsed.currentSemester || base.currentSemester,
        data: {
          AERO1: parsed.data?.AERO1 || base.data.AERO1,
          AERO2: parsed.data?.AERO2 || base.data.AERO2
        }
      };
    } catch {
      return base;
    }
  }

  function saveState() {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  }

  function getNotesArray(promo, sem) {
    if (!promo || !sem) return [];
    if (!state.data[promo]) state.data[promo] = { S1: [], S2: [] };
    if (!state.data[promo][sem]) state.data[promo][sem] = [];
    return state.data[promo][sem];
  }

  function setNotesArray(promo, sem, notes) {
    if (!state.data[promo]) state.data[promo] = { S1: [], S2: [] };
    state.data[promo][sem] = Array.isArray(notes) ? notes : [];
  }

  function findCurrentSubject(code) {
    const promo = state.currentPromo;
    const sem = state.currentSemester || "S1";
    if (!promo || !PROGRAMS[promo]) return null;

    const semObj = PROGRAMS[promo].semesters[sem];
    if (!semObj) return null;

    if (semObj.poles && semObj.poles.length > 0) {
      for (const pole of semObj.poles) {
        if (pole.ues && pole.ues.length > 0) {
          for (const ue of pole.ues) {
            for (const subj of ue.subjects) {
              if (subj.code === code) return subj;
            }
          }
        } else if (pole.subjects && pole.subjects.length > 0) {
          for (const subj of pole.subjects) {
            if (subj.code === code) return subj;
          }
        }
      }
      return null;
    }

    const subjList = semObj.subjects || [];
    return subjList.find(s => s.code === code) || null;
  }

  function round2(n) {
    return Math.round(n * 100) / 100;
  }

  function format2(n) {
    const num = Number(n);
    if (!isFinite(num)) return "–";
    return num.toFixed(2).replace(/\.00$/, ".00");
  }

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
});