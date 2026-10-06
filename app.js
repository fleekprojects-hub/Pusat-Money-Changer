/**
 * ============================================================
 * FLEEK AI ENGINE // PUSAT MONEY CHANGER MASTER ENGINE
 * Anime.js Morphing Deck, Live HRIS Simulation,
 * WhatsApp Real-Time Gatekeeper & Interactive Quotation Calculator
 * ============================================================
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- DOM Elements ---
  const htmlElement = document.documentElement;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const printBtn = document.getElementById('printBtn');
  const navToggleBtn = document.getElementById('navToggleBtn');
  const navDrawer = document.getElementById('navDrawer');
  const navOverlay = document.getElementById('navOverlay');
  const navLinks = document.querySelectorAll('.nav-link');
  const scrollProgressBar = document.getElementById('scrollProgressBar');
  const deckToast = document.getElementById('deckToast');
  const deckToastText = document.getElementById('deckToastText');

  // --- Typewriter Word & Letter Wrapper ---
  const animateTexts = document.querySelectorAll('.animate-text');
  animateTexts.forEach(el => {
    const text = el.textContent.trim();
    const words = text.split(/\s+/);
    let wrappedHTML = '';
    
    words.forEach((wordText, wordIdx) => {
      let wordHTML = '<span class="word">';
      for (let i = 0; i < wordText.length; i++) {
        wordHTML += `<span class="letter">${wordText[i]}</span>`;
      }
      wordHTML += '</span>';
      wrappedHTML += wordHTML;
      if (wordIdx < words.length - 1) {
        wrappedHTML += ' ';
      }
    });
    
    el.innerHTML = wrappedHTML;
  });

  // Slide IDs ordered for navigation (12 slides)
  const slideIds = [
    'opening',
    'problem',
    'architecture',
    'hardware-matrix',
    'demo-hris',
    'demo-gatekeeper',
    'strict-guardrail',
    'security-gate',
    'commercial-quote',
    'phase2-finance',
    'timeline',
    'closing-cta'
  ];

  let currentIndex = 0;
  let isTransitioning = false;
  const cooldownMs = 650;

  // --- Anime.js Entry Animation Trigger ---
  function triggerAnimeAnimations(content) {
    if (!window.anime) return;

    // 1. Letters Stagger
    const letters = content.querySelectorAll('.letter');
    if (letters.length > 0) {
      anime.remove(letters);
      anime.set(letters, { opacity: 0, translateY: 18 });
      anime({
        targets: letters,
        opacity: [0, 1],
        translateY: [18, 0],
        delay: anime.stagger(12),
        duration: 700,
        easing: 'easeOutElastic(1, .8)'
      });
    }

    // 2. Block elements Stagger
    const blocks = content.querySelectorAll('.cyber-decor, .wa-mock-card, .inspector-card, .hris-stat-card, .timeline-step, .pricing-card');
    if (blocks.length > 0) {
      anime.remove(blocks);
      anime.set(blocks, { opacity: 0, translateY: 22 });
      anime({
        targets: blocks,
        opacity: [0, 1],
        translateY: [22, 0],
        delay: anime.stagger(90, { start: 100 }),
        duration: 750,
        easing: 'easeOutQuart'
      });
    }

    // 3. Bubbles stagger
    const bubbles = content.querySelectorAll('.wa-bubble-container');
    if (bubbles.length > 0) {
      anime.remove(bubbles);
      anime.set(bubbles, { opacity: 0, scale: 0.92, translateY: 12 });
      anime({
        targets: bubbles,
        opacity: [0, 1],
        scale: [0.92, 1],
        translateY: [12, 0],
        delay: anime.stagger(120, { start: 180 }),
        duration: 700,
        easing: 'easeOutElastic(1, .7)'
      });
    }
  }

  // --- Viewport Auto-Scaling for Single Screen Fit ---
  function autoScaleActiveSlide() {
    const activeSlide = document.getElementById(slideIds[currentIndex]);
    if (!activeSlide) return;
    
    const content = activeSlide.querySelector('.section-content');
    if (!content) return;

    content.style.transform = '';
    const isDemo = activeSlide.classList.contains('slide-demo');
    content.style.transformOrigin = isDemo ? 'top center' : 'center center';
    
    const availableHeight = activeSlide.clientHeight - 24;
    const contentHeight = content.scrollHeight;
    
    if (contentHeight > availableHeight && availableHeight > 320) {
      const scale = Math.max(0.88, Math.min(1, (availableHeight / contentHeight)));
      if (scale < 0.99) {
        content.style.transform = `scale(${scale})`;
      }
    }
  }

  window.addEventListener('resize', autoScaleActiveSlide);

  // --- Show Slide & Trigger Lifecycle ---
  function showSlide(index) {
    if (index < 0 || index >= slideIds.length) return;
    currentIndex = index;
    
    const slides = document.querySelectorAll('.slide-panel');
    slides.forEach(s => s.classList.remove('active-slide'));
    
    const targetSlide = document.getElementById(slideIds[index]);
    if (targetSlide) {
      targetSlide.classList.add('active-slide');
      targetSlide.scrollTop = 0;
      
      const content = targetSlide.querySelector('.section-content');
      if (content) {
        triggerAnimeAnimations(content);
      }

      setTimeout(autoScaleActiveSlide, 60);
    }
    
    // Update active nav link
    navLinks.forEach(link => {
      const targetHref = link.getAttribute('href').replace('#', '');
      if (targetHref === slideIds[index]) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Update progress bar
    const progressPercent = (index / (slideIds.length - 1)) * 100;
    scrollProgressBar.style.width = `${progressPercent}%`;
  }

  // --- Navigation Input Event Listeners ---
  window.addEventListener('wheel', (e) => {
    if (Math.abs(e.deltaY) < 30) return;
    if (isTransitioning) return;

    const direction = e.deltaY > 0 ? 1 : -1;
    const nextIndex = currentIndex + direction;
    if (nextIndex >= 0 && nextIndex < slideIds.length) {
      isTransitioning = true;
      showSlide(nextIndex);
      setTimeout(() => { isTransitioning = false; }, cooldownMs);
    }
  }, { passive: true });

  window.addEventListener('keydown', (e) => {
    if (['ArrowDown', 'ArrowRight', 'PageDown', ' '].includes(e.key)) {
      e.preventDefault();
      if (currentIndex < slideIds.length - 1 && !isTransitioning) {
        isTransitioning = true;
        showSlide(currentIndex + 1);
        setTimeout(() => { isTransitioning = false; }, cooldownMs);
      }
    } else if (['ArrowUp', 'ArrowLeft', 'PageUp'].includes(e.key)) {
      e.preventDefault();
      if (currentIndex > 0 && !isTransitioning) {
        isTransitioning = true;
        showSlide(currentIndex - 1);
        setTimeout(() => { isTransitioning = false; }, cooldownMs);
      }
    }
  });

  // Touch Drag Support for Tablets
  let touchStartY = 0;
  window.addEventListener('touchstart', (e) => {
    touchStartY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener('touchend', (e) => {
    const touchEndY = e.changedTouches[0].clientY;
    const diffY = touchStartY - touchEndY;
    if (Math.abs(diffY) > 50 && !isTransitioning) {
      const direction = diffY > 0 ? 1 : -1;
      const nextIndex = currentIndex + direction;
      if (nextIndex >= 0 && nextIndex < slideIds.length) {
        isTransitioning = true;
        showSlide(nextIndex);
        setTimeout(() => { isTransitioning = false; }, cooldownMs);
      }
    }
  }, { passive: true });

  // Init on slide 0
  showSlide(0);

  // --- Theme Toggle ---
  const savedTheme = localStorage.getItem('pmc_theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);

  themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('pmc_theme', newTheme);
  });

  // --- Print ---
  printBtn.addEventListener('click', (e) => {
    e.preventDefault();
    window.print();
  });

  // --- Navigation Drawer Handlers ---
  function openNav() {
    navDrawer.classList.add('open');
    navOverlay.classList.add('open');
    navToggleBtn.classList.add('active');
  }

  function closeNav() {
    navDrawer.classList.remove('open');
    navOverlay.classList.remove('open');
    navToggleBtn.classList.remove('active');
  }

  navToggleBtn.addEventListener('click', () => {
    if (navDrawer.classList.contains('open')) {
      closeNav();
    } else {
      openNav();
    }
  });

  navOverlay.addEventListener('click', closeNav);

  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      closeNav();
      const targetId = link.getAttribute('href').replace('#', '');
      const targetIndex = slideIds.indexOf(targetId);
      if (targetIndex !== -1) {
        showSlide(targetIndex);
      }
    });
  });

  // --- Toast Helper ---
  window.triggerToast = function(msg) {
    if (!deckToast) return;
    deckToastText.innerHTML = msg;
    deckToast.classList.add('show');
    setTimeout(() => { deckToast.classList.remove('show'); }, 3200);
  };

  // ============================================================
  // --- INTERACTIVE DEMO 1: OWNER COMMAND PORTAL & HRIS MATRIX ---
  // ============================================================

  const hrisTableBody = document.getElementById('hrisTableBody');
  const hrisStatOntime = document.getElementById('hrisStatOntime');
  const hrisStatLate = document.getElementById('hrisStatLate');
  const hrisStatLeave = document.getElementById('hrisStatLeave');
  const lateAlertCard = document.getElementById('lateAlertCard');
  const lateAlertDetail = document.getElementById('lateAlertDetail');
  const hrisReasoningLog = document.getElementById('hrisReasoningLog');

  // Master Roster 30 Staff Sample Data
  const defaultStaffList = [
    { id: 'STF-01', name: 'Bambang Sudiro', role: 'Head Teller', shift: 'Pagi (08:00)', log: '07:54 WIB', status: 'ontime', penalty: 'Rp 0' },
    { id: 'STF-02', name: 'Dewi Sartika', role: 'Teller Valas', shift: 'Pagi (08:00)', log: '07:58 WIB', status: 'ontime', penalty: 'Rp 0' },
    { id: 'STF-03', name: 'Ahmad Fauzi', role: 'Teller Valas', shift: 'Pagi (08:00)', log: '08:02 WIB', status: 'late', penalty: 'Rp 25.000 (Telat 2 Menit)' },
    { id: 'STF-04', name: 'Rian Hidayat', role: 'Kurir Valas / Kas', shift: 'Pagi (08:00)', log: '08:07 WIB', status: 'late', penalty: 'Rp 50.000 (Telat 7 Menit)' },
    { id: 'STF-05', name: 'Siti Nurhaliza', role: 'Validasi Fisik Uang', shift: 'Pagi (08:00)', log: '07:51 WIB', status: 'ontime', penalty: 'Rp 0' },
    { id: 'STF-06', name: 'Hendra Gunawan', role: 'Penghitung Kurs', shift: 'Pagi (08:00)', log: '07:49 WIB', status: 'ontime', penalty: 'Rp 0' },
    { id: 'STF-07', name: 'Eko Prasetyo', role: 'Helper & Security', shift: 'Pagi (08:00)', log: '07:45 WIB', status: 'ontime', penalty: 'Rp 0' },
    { id: 'STF-08', name: 'Ratna Wulandari', role: 'HRD & Admin Staf', shift: 'Pagi (08:00)', log: 'Izin Dokter', status: 'leave', penalty: 'Rp 0 (Izin Terverifikasi)' },
    { id: 'STF-09', name: 'Indra Lesmana', role: 'Kurir Antar Kota', shift: 'Pagi (08:00)', log: '07:56 WIB', status: 'ontime', penalty: 'Rp 0' },
    { id: 'STF-10', name: 'Maya Anggraini', role: 'Admin Sales WA', shift: 'Pagi (08:00)', log: '07:52 WIB', status: 'ontime', penalty: 'Rp 0' }
  ];

  function renderHrisTable(staffData) {
    if (!hrisTableBody) return;
    hrisTableBody.innerHTML = '';
    
    staffData.forEach(stf => {
      const tr = document.createElement('tr');
      const badgeClass = stf.status === 'ontime' ? 'badge-ontime' : (stf.status === 'late' ? 'badge-late' : 'badge-leave');
      const badgeText = stf.status === 'ontime' ? 'Tepat Waktu' : (stf.status === 'late' ? 'Terlambat' : 'Izin / Cuti');
      
      tr.innerHTML = `
        <td><strong style="color:#fff;">${stf.name}</strong><br><span style="color:#71717a; font-size:0.6rem;">${stf.id}</span></td>
        <td>${stf.role}</td>
        <td>${stf.shift}</td>
        <td style="font-family:var(--font-mono);">${stf.log}</td>
        <td><span class="badge-status ${badgeClass}">${badgeText}</span></td>
        <td style="font-family:var(--font-mono); color:${stf.status === 'late' ? '#f87171' : '#a1a1aa'};">${stf.penalty}</td>
      `;
      hrisTableBody.appendChild(tr);
    });
  }

  // Preset 1: Normal Shift
  window.triggerHrisPreset = function(presetType) {
    if (presetType === 1) {
      const normalData = defaultStaffList.map(stf => ({
        ...stf,
        status: stf.status === 'leave' ? 'leave' : 'ontime',
        log: stf.status === 'leave' ? stf.log : '07:52 WIB',
        penalty: 'Rp 0'
      }));
      renderHrisTable(normalData);
      hrisStatOntime.textContent = '28';
      hrisStatLate.textContent = '0';
      hrisStatLeave.textContent = '2';
      lateAlertCard.style.display = 'none';
      hrisReasoningLog.innerHTML = `// Fleek AI Core Event Log:
{
  "event": "BIOMETRIC_CHECKIN_STREAM",
  "source": "MESIN_FINGERPRINT_ADMS",
  "active_staff_total": 30,
  "attendance_rate": "93.3%",
  "anomaly": "ZERO_LATE_DETECTED",
  "synced_to_erp": true
}`;
      window.triggerToast("✅ <strong>Shift Pagi Normal:</strong> 28 Staf hadir tepat waktu.");
    }
    else if (presetType === 2) {
      // Trigger Late Anomaly (2 min & 7 min)
      renderHrisTable(defaultStaffList);
      hrisStatOntime.textContent = '26';
      hrisStatLate.textContent = '2';
      hrisStatLeave.textContent = '2';
      lateAlertCard.style.display = 'flex';
      lateAlertDetail.innerHTML = `
        <b>⚠️ 2 Anomali Keterlambatan Terdeteksi Otomatis:</b><br>
        1. <b>Ahmad Fauzi (Teller):</b> Scan 08:02 WIB (+2 menit). Denda sistem Rp 25.000.<br>
        2. <b>Rian Hidayat (Kurir):</b> Scan 08:07 WIB (+7 menit). Denda sistem Rp 50.000.<br>
        <i>Fleek AI otomatis mengirim WA peringatan ke staf & push rekap ke WhatsApp PIC HRD!</i>
      `;
      hrisReasoningLog.innerHTML = `// Fleek AI Copilot Trigger:
{
  "late_detected": [
    {"staff": "Ahmad Fauzi", "late_minutes": 2, "penalty": 25000, "wa_alert_sent": true},
    {"staff": "Rian Hidayat", "late_minutes": 7, "penalty": 50000, "wa_alert_sent": true}
  ],
  "action": "AUTO_PUSH_WHATSAPP_TO_STAFF_AND_RECORD_TO_ERP"
}`;
      window.triggerToast("🚨 <strong>Alert Keterlambatan!</strong> Telat 2 & 7 menit tercatat + WA terkirim.");
    }
    else if (presetType === 3) {
      // Owner Holiday Mode
      window.triggerToast("🏖️ <strong>Owner Beach Mode:</strong> Semua operasional 30 staf terpantau aman dari 1 layar!");
      hrisReasoningLog.innerHTML = `// Morning Digest to Pak Budi (WA 08:30):
{
  "recipient": "Pak Budi (Owner)",
  "channel": "WHATSAPP_EXECUTIVE_DIGEST",
  "content": "Pagi Pak Budi! 28 Hadir Tepat Waktu, 2 Telat (Ahmad & Rian). Seluruh counter teller siap melayani nasabah.",
  "status": "DELIVERED_TO_BEACH"
}`;
    }
  };

  // Init HRIS Table
  renderHrisTable(defaultStaffList);

  // ============================================================
  // --- INTERACTIVE DEMO 2: WHATSAPP GATEKEEPER & ZERO-RISK ---
  // ============================================================

  const gatekeeperChatBody = document.getElementById('gatekeeperChatBody');
  const gatekeeperInput = document.getElementById('gatekeeperInput');
  const leadIntentBadge = document.getElementById('leadIntentBadge');
  const leadCurrency = document.getElementById('leadCurrency');
  const leadVolume = document.getElementById('leadVolume');
  const leadSalesAssigned = document.getElementById('leadSalesAssigned');
  const strictGuardrailBanner = document.getElementById('strictGuardrailBanner');
  const gatekeeperReasoningLog = document.getElementById('gatekeeperReasoningLog');

  function appendGatekeeperMessage(sender, text) {
    const container = document.createElement('div');
    container.className = `wa-bubble-container ${sender}`;
    
    const now = new Date();
    const timeStr = `${now.getHours().toString().padStart(2, '0')}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    container.innerHTML = `
      <div class="wa-bubble ${sender}">
        ${text}
        <span class="wa-bubble-time">${timeStr}</span>
      </div>
    `;
    
    gatekeeperChatBody.appendChild(container);
    container.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  window.resetGatekeeperChat = function() {
    gatekeeperChatBody.innerHTML = `
      <div class="wa-bubble-container ai">
        <div class="wa-bubble ai">
          Halo, selamat datang di <b>Pusat Money Changer</b> 💵✨<br>
          Ada kebutuhan penukaran valuta asing atau info kurs hari ini? Silakan sebutkan mata uang dan nominal yang Anda butuhkan.
          <span class="wa-bubble-time">10:00</span>
        </div>
      </div>
    `;
    leadIntentBadge.textContent = "INTENT: INQUIRY_KURS";
    leadCurrency.textContent = "USD / SGD";
    leadVolume.textContent = "Belum Terkualifikasi";
    leadSalesAssigned.textContent = "Standby (5 Admin Sales)";
    strictGuardrailBanner.style.display = "none";
    gatekeeperReasoningLog.innerHTML = `// Fleek AI Gatekeeper State:
{
  "status": "LISTENING",
  "realtime_rate_source": "ERP_DATABASE_API",
  "rate_latency_ms": 35,
  "auto_payment_validation": "STRICTLY_DISABLED"
}`;
    window.triggerToast("🔄 Chat Demo Gatekeeper di-reset.");
  };

  window.triggerGatekeeperPreset = function(presetId) {
    if (presetId === 1) {
      const userText = "Pagi min, kurs USD pecahan $100 hari ini berapa ya? Mau tukar ke Rupiah.";
      appendGatekeeperMessage('user', userText);

      setTimeout(() => {
        const aiText = `Selamat pagi! 💵 Kurs <b>USD ($100 New Print)</b> ter-update detik ini:<br>
• Beli: <b>Rp 15.680</b><br>
• Jual: <b>Rp 15.750</b><br>
<i>*Kurs real-time per jam 10:05 WIB langsung dari database pusat.</i><br><br>
Berapa perkiraan total USD yang ingin Anda tukarkan? Kami bisa kunci kuota fisiknya di counter kantor.`;
        appendGatekeeperMessage('ai', aiText);
        
        leadIntentBadge.textContent = "KURS_REALTIME_ACCURATE";
        leadCurrency.textContent = "USD ($100 Edition)";
        leadVolume.textContent = "Inquiry Retail";
        leadSalesAssigned.textContent = "Admin 1 (Mbak Rina)";
        strictGuardrailBanner.style.display = "none";

        gatekeeperReasoningLog.innerHTML = `// Fleek AI Rate Query:
{
  "currency": "USD",
  "verified_rate": {"buy": 15680, "sell": 15750},
  "latency": "NO_DELAY (Trauma Cekat AI Mitigated)",
  "rate_status": "FRESH_0_MINUTES"
}`;
        window.triggerToast("⚡ <strong>Kurs Real-Time Terkirim:</strong> Zero delay, anti-harga basi!");
      }, 650);
    }
    else if (presetId === 2) {
      const userText = "Saya mau tukar SGD 5,000 cash di kantor Pusat Money Changer jam 2 siang ini. Ada stok?";
      appendGatekeeperMessage('user', userText);

      setTimeout(() => {
        const aiText = `Untuk penukaran <b>SGD 5,000 (~Rp 59,5 Juta)</b>, stok pecahan $50 dan $100 kami tersedia di vault Jakarta. 🇸🇬<br><br>
Karena ini transaksi volume prioritas, data Anda telah kami teruskan ke <b>Mas Budianto (Admin Sales Senior #02)</b>.<br>
Beliau akan mengonfirmasi slot kedatangan Anda agar tidak perlu antre di counter. Terima kasih! 🤝`;
        appendGatekeeperMessage('ai', aiText);

        leadIntentBadge.textContent = "HIGH_VALUE_TRANSACTION";
        leadCurrency.textContent = "SGD (Singapore Dollar)";
        leadVolume.textContent = "SGD 5,000 (Rp ~59,5 Jt)";
        leadSalesAssigned.textContent = "Mas Budianto (Admin #02)";
        strictGuardrailBanner.style.display = "none";

        gatekeeperReasoningLog.innerHTML = `// Fleek Lead Handover Engine:
{
  "client_tier": "VIP_TRANSACTION_ABOVE_50M",
  "action": "ESCALATE_TO_OFFLINE_SALES_ADMIN",
  "assigned_to": "Admin Sales #02 (Budianto)",
  "notification_channel": "WHATSAPP_DESK_SALES"
}`;
        window.triggerToast("🎯 <strong>High-Value Prospek!</strong> Di-handover ke 1 dari 5 Admin Sales.");
      }, 700);
    }
    else if (presetId === 3) {
      // The Showstopper: Anti-Payment Scam / Trauma Cekat AI
      const userText = "Min saya sudah transfer DP Rp 5.000.000 ke BCA, ini resi transfernya [Lampiran Foto]. Tolong langsung validasi lunas ya.";
      appendGatekeeperMessage('user', userText);

      setTimeout(() => {
        const aiText = `⚠️ <b>PERINGATAN SISTEM KEAMANAN PUSAT MONEY CHANGER:</b><br><br>
Sesuai protokol integritas perbankan, <b>AI dilarang keras melakukan validasi lunas / cek bukti transfer secara otomatis</b>.<br><br>
Foto struk Anda telah kami forward ke <b>Tim Validasi Keuangan Manusia (Pak Hendra)</b> untuk pengecekan mutasi rekening resmi. Mohon tunggu verifikasi manual 3–5 menit demi keamanan dana bersama.`;
        appendGatekeeperMessage('ai', aiText);

        leadIntentBadge.textContent = "PAYMENT_GUARDRAIL_TRIGGERED";
        strictGuardrailBanner.style.display = "flex";

        gatekeeperReasoningLog.innerHTML = `// STRICT NON-PAYMENT GUARDRAIL:
{
  "ai_payment_scanning": "FORBIDDEN_BY_SECURITY_POLICY",
  "risk_mitigation": "PREVENT_FAKE_RECEIPT_FRAUD (Trauma Cekat Solved)",
  "escalation": "HUMAN_FINANCE_VALIDATOR_ONLY"
}`;
        window.triggerToast("🛡️ <strong>STRICT GUARDRAIL AKTIF:</strong> AI menolak validasi pembayaran otomatis!");
      }, 650);
    }
  };

  window.handleGatekeeperSubmit = function(e) {
    e.preventDefault();
    const text = gatekeeperInput.value.trim();
    if (!text) return;

    appendGatekeeperMessage('user', text);
    gatekeeperInput.value = '';

    setTimeout(() => {
      appendGatekeeperMessage('ai', `Pesan Anda: <i>"${text}"</i> telah diterima. Tim AI Gatekeeper memetakan kebutuhan Anda dan meneruskannya ke Admin Sales kami.`);
    }, 600);
  };

  // ============================================================
  // --- SLIDE 09: INTERACTIVE COST CALCULATOR ---
  // ============================================================

  window.updateCostCalculation = function(volumeVal) {
    const volume = parseInt(volumeVal, 10);
    const santraCost = 300000;
    const vpsCost = 150000;
    // Token AI scale: ~Rp 220 per chat session with guardrail
    const aiTokenCost = Math.round(volume * 220);
    const totalCost = santraCost + vpsCost + aiTokenCost;

    const volumeDisplay = document.getElementById('chatVolumeDisplay');
    const costDisplay = document.getElementById('costEstimateDisplay');
    const breakdownDetail = document.getElementById('costBreakdownDetail');

    if (volumeDisplay) {
      volumeDisplay.textContent = `${volume.toLocaleString('id-ID')} Chat`;
    }
    if (costDisplay) {
      costDisplay.textContent = `Rp ${totalCost.toLocaleString('id-ID')} / bln`;
    }
    if (breakdownDetail) {
      breakdownDetail.innerHTML = `<span>Santra ERP: Rp 300.000</span> <span>Server VPS: Rp 150.000</span> <span>Token AI: ~Rp ${(aiTokenCost).toLocaleString('id-ID')}</span> <span>WhatsApp API: Rp 0</span>`;
    }
  };

});
