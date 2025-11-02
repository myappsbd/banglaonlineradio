document.addEventListener('DOMContentLoaded', () => {
    // Enhanced station list with backup URLs
    const stationList = [
      { id: 'dhaka_fm', name: '📻 ঢাকা এফএম', url: 'https://node-13.zeno.fm/u9mphfk604zuv', backupUrl: 'https://stream.zeno.fm/u9mphfk604zuv' },
      { id: 'radio_today', name: '📻 রেডিও টুডে', url: 'https://stream.zeno.fm/0zha3rfq02quv', backupUrl: 'https://node-21.zeno.fm/0zha3rfq02quv' },
      { id: 'radio_foorti', name: '📻 রেডিও ফুর্তি', url: 'https://stream.zeno.fm/cwa3vg8s8druv', backupUrl: 'https://node-21.zeno.fm/cwa3vg8s8druv' },
      { id: 'radio_shadhin_924', name: '📻 রেডিও স্বাধীন', url: 'https://stream.zeno.fm/umq9q5uuva5tv', backupUrl: 'https://node-21.zeno.fm/umq9q5uuva5tv' },
      { id: 'radio_bhumi', name: '📻 রেডিও ভূমি', url: 'https://stream.zeno.fm/ybf1umk1k18uv', backupUrl: 'https://node-21.zeno.fm/ybf1umk1k18uv' },
      { id: 'bangladesh_betar', name: '📻 বাংলাদেশ বেতার', url: 'https://as1.digitalsynapsebd.com/proxy/bbdkka/stream', backupUrl: 'https://stream.zeno.fm/bbdkka/stream' },
      { id: 'uttorbango_betar', name: '📻 উত্তরবঙ্গ বেতার', url: 'https://stream.zeno.fm/spqbxkqxdf9uv', backupUrl: 'https://node-21.zeno.fm/spqbxkqxdf9uv' },
      { id: 'radio_bushra', name: '📻 রেডিও বুশরা', url: 'https://stream.zeno.fm/mzuka1fdxzzuv', backupUrl: 'https://node-21.zeno.fm/mzuka1fdxzzuv' },
      { id: 'radio_padma', name: '📻 রেডিও পদ্মা', url: 'https://radiopadmabd.radioca.st/radiopadma', backupUrl: 'https://stream.zeno.fm/radiopadma' },
      { id: 'radio_purbakantho', name: '📻 রেডিও পূর্বাকাশ', url: 'https://stream.zeno.fm/r8sntxcw81zuv', backupUrl: 'https://node-21.zeno.fm/r8sntxcw81zuv' },
      { id: 'radio_vivid_voice', name: '📻 রেডিও ভিভিড ভয়েস', url: 'https://stream.zeno.fm/xuin6ocdc2juv', backupUrl: 'https://node-21.zeno.fm/xuin6ocdc2juv' },
      { id: 'radio_jkkniu', name: '📻 রেডিও জেকেকেএনআইইউ', url: 'https://stream.zeno.fm/risgdzpf1cxtv', backupUrl: 'https://node-21.zeno.fm/risgdzpf1cxtv' },
      { id: 'radio_sondhi', name: '📻 রেডিও সন্ধি', url: 'https://stream.zeno.fm/4k1vwiexedzvv', backupUrl: 'https://node-21.zeno.fm/4k1vwiexedzvv' },
      { id: 'bangladesh_betar_traffic', name: '📻 বাংলাদেশ বেতার ট্রাফিক', url: 'https://stream.zeno.fm/8sn7cac604zuv', backupUrl: 'https://node-21.zeno.fm/8sn7cac604zuv' },
      { id: 'rajshahi_fm', name: '📻 রাজশাহী এফএম', url: 'https://stream.zeno.fm/nxfshdayjrdvv', backupUrl: 'https://node-21.zeno.fm/nxfshdayjrdvv' },
      { id: 'provat_fm', name: '📻 প্রভাত এফএম', url: 'https://stream.zeno.fm/nlv7ffoe39yvv', backupUrl: 'https://node-21.zeno.fm/nlv7ffoe39yvv' },
      { id: 'radio_hamza', name: '📻 রেডিও হামজা', url: 'https://stream.zeno.fm/lohedguhtkttv', backupUrl: 'https://node-21.zeno.fm/lohedguhtkttv' },
      { id: 'bhoot_fm', name: '📻 ভূত এফএম', url: 'https://node-34.zeno.fm/f0bfdk2w34zuv', backupUrl: 'https://stream.zeno.fm/f0bfdk2w34zuv' },
      { id: 'london_bangla', name: '📻 লন্ডন বাংলা রেডিও', url: 'https://r1.londonbanglaradio.com:8000/radio.mp3', backupUrl: 'https://stream.zeno.fm/london_bangla' },
      { id: 'fnf_bangla', name: '📻 এফএনএফ এফএম বাংলা', url: 'https://eu6.fastcast4u.com:5099/;stream', backupUrl: 'https://stream.zeno.fm/fnf_bangla' },
      { id: 'radio_goongoon', name: '📻 রেডিও গুঙগুন', url: 'https://audio.streamcast.xyz/radio/8000/radio.mp3?', backupUrl: 'https://stream.zeno.fm/radio_goongoon' },
      { id: 'betar-torongo', name: '📻 বেতার তরঙ্গ', url: 'https://stream.zeno.fm/v7tnp975wqzuv', backupUrl: 'https://node-21.zeno.fm/v7tnp975wqzuv' },
      { id: 'jamuna_fm', name: '📻 রেডিও যমুনা এফএম', url: 'https://stream.zeno.fm/pcmmlmkpvmmvv', backupUrl: 'https://node-21.zeno.fm/pcmmlmkpvmmvv' },
      { id: 'radio_ullash', name: '📻 রেডিও উল্লাস', url: 'https://stream.zeno.fm/gpgkgp9mp18uv.mp3', backupUrl: 'https://node-21.zeno.fm/gpgkgp9mp18uv' },
      { id: 'sakib_fm', name: '📻 সাকিব এফএম', url: 'https://stream.zeno.fm/sg1hy1wdlcavv', backupUrl: 'https://node-21.zeno.fm/sg1hy1wdlcavv' },
      { id: 'radio_jagoron', name: '📻 রেডিও জাগরণ', url: 'https://stream.zeno.fm/ku2e67d3yf8uv', backupUrl: 'https://node-21.zeno.fm/ku2e67d3yf8uv' },
      { id: 'hemel_music', name: '📻 হেমেল মিউজিক', url: 'https://stream.zeno.fm/s4f64yu82c9uv', backupUrl: 'https://node-21.zeno.fm/s4f64yu82c9uv' },
      { id: 'nonstop_song', name: '📻 নন-স্টপ বাংলা গান', url: 'https://stream.zeno.fm/kvw4pex4708uv', backupUrl: 'https://node-21.zeno.fm/kvw4pex4708uv' },
      { id: 'bangla_radio', name: '📻 বেঙ্গল রেডিও', url: 'https://stream.zeno.fm/965y3quqks8uv', backupUrl: 'https://node-21.zeno.fm/965y3quqks8uv' },
      { id: 'bbc_bangla', name: '📻 বিবিসি বাংলা', url: 'https://stream.live.vc.bbcmedia.co.uk/bbc_world_service', backupUrl: 'https://node-21.zeno.fm/bbc_bangla' },
      { id: 'iran_radio', name: '📻 ইরান রেডিও', url: 'https://live.iranradio.ir:8120/live-bn.mp3', backupUrl: 'https://stream.zeno.fm/iran_radio' },
      { id: 'radio_dawah', name: '📻 রেডিও দাওয়াহ বাংলা', url: 'https://stream.zeno.fm/rzkykmse9zcuv', backupUrl: 'https://node-21.zeno.fm/rzkykmse9zcuv' },
      { id: 'radio_mirchi_kolkata', name: '📻 রেডিও মির্চি ৯৮.৩ এফএম', url: 'https://19013.live.streamtheworld.com/NJS_HIN_EST_SC', backupUrl: 'https://stream.zeno.fm/radio_mirchi' },
      { id: 'namaste_bollywood', name: '📻 নমস্তে বলিউড (হিন্দি)', url: 'https://stream.zeno.fm/cqak4ap7by8uv', backupUrl: 'https://node-21.zeno.fm/cqak4ap7by8uv' },
      { id: 'radio_theater_bangla', name: '📻 রেডিও থিয়েটার বাংলা', url: 'https://stream.zeno.fm/hraw5yx8ovv', backupUrl: 'https://node-21.zeno.fm/hraw5yx8ovv' }
    ];

    const PRESETS = [
      { name: 'খবর', stations: ['bbc_bangla', 'radio_today', 'bangladesh_betar'] },
      { name: 'সঙ্গীত', stations: ['radio_foorti', 'hemel_music', 'nonstop_song'] },
      { name: 'ইসলামিক', stations: ['radio_dawah', 'radio_hamza'] },
      { name: 'জনপ্রিয়', stations: ['dhaka_fm', 'radio_shadhin_924', 'radio_bhumi'] }
    ];

    const
        selector = document.getElementById('stationSelector'),
        audio = document.getElementById('radioPlayer'),
        nowPlayingText = document.getElementById('nowPlaying'),
        bufferingText = document.getElementById('buffering'),
        playPauseBtn = document.getElementById('playPauseBtn'),
        favBtn = document.getElementById('favBtn'),
        volumeControl = document.getElementById('volumeControl'),
        volumeFill = document.querySelector('.volume-fill'),
        darkModeToggle = document.getElementById('darkModeToggle'),
        startBtn = document.getElementById('startBtn'),
        prevBtn = document.getElementById('prevBtn'),
        nextBtn = document.getElementById('nextBtn'),
        sleepTimeSelect = document.getElementById('sleepTime'),
        timerCountdown = document.getElementById('timerCountdown'),
        timerOnBtn = document.getElementById('timerOnBtn'),
        timerOffBtn = document.getElementById('timerOffBtn'),
        canvas = document.getElementById('visualizer'),
        ctx = canvas.getContext('2d'),
        stationSearch = document.getElementById('stationSearch'),
        clearSearch = document.getElementById('clearSearch'),
        presetButtons = document.getElementById('presetButtons'),
        vizModeButtons = document.querySelectorAll('.viz-mode-btn'),
        historySection = document.getElementById('historySection'),
        historyButtons = document.getElementById('historyButtons'),
        equalizerSection = document.getElementById('equalizerSection'),
        eqBass = document.getElementById('eqBass'),
        eqMid = document.getElementById('eqMid'),
        eqTreble = document.getElementById('eqTreble'),
        loadingOverlay = document.getElementById('loadingOverlay'),
        loadingText = document.getElementById('loadingText'),
        loadingProgress = document.getElementById('loadingProgress'),
        errorOverlay = document.getElementById('errorOverlay'),
        errorTitle = document.getElementById('errorTitle'),
        errorDescription = document.getElementById('errorDescription'),
        retryBtn = document.getElementById('retryBtn'),
        nextStationBtn = document.getElementById('nextStationBtn'),
        closeErrorBtn = document.getElementById('closeErrorBtn'),
        mobileNav = document.getElementById('mobileNav'),
        mobilePlayBtn = document.getElementById('mobilePlayBtn'),
        mobileHomeBtn = document.getElementById('mobileHomeBtn'),
        mobileFavBtn = document.getElementById('mobileFavBtn'),
        mobileSleepBtn = document.getElementById('mobileSleepBtn'),
        mobileSettingsBtn = document.getElementById('mobileSettingsBtn');

    let overlayClicked = false,
        favorites = JSON.parse(localStorage.getItem('favorites')) || [],
        sleepTimer = null,
        audioCtx, source, analyser, bufferLength, dataArray,
        skipTimeout,
        visualizerAnimationId = null,
        visualizerMode = 'bars',
        retryCount = 0,
        playHistory = JSON.parse(localStorage.getItem('playHistory')) || [],
        touchStartX = 0,
        touchEndX = 0,
        currentErrorStation = null,
        adAutoHideTimeout = null;
    const MAX_RETRIES = 2;

    // 🔥 বিজ্ঞাপন সম্পর্কিত ফাংশন
    function closeAd() {
      const adBanner = document.getElementById('adBanner');
      if (adBanner) {
        adBanner.style.display = 'none';
        localStorage.setItem('adClosed', 'true');
        clearTimeout(adAutoHideTimeout);
        showNotification('বিজ্ঞাপন বন্ধ করা হয়েছে');
      }
    }

    function showAd() {
      const adBanner = document.getElementById('adBanner');
      const adClosed = localStorage.getItem('adClosed');
      
      if (adBanner && !adClosed) {
        adBanner.style.display = 'block';
        
        // ৩০ সেকেন্ড পর অটো হাইড (opacity কমাবে)
        adAutoHideTimeout = setTimeout(() => {
          if (adBanner && adBanner.style.display !== 'none') {
            adBanner.style.opacity = '0.7';
            adBanner.style.transform = 'translateX(-50%) scale(0.95)';
            showNotification('বিজ্ঞাপনটি শীঘ্রই অদৃশ্য হবে...');
          }
        }, 30000);

        // ৪৫ সেকেন্ড পর সম্পূর্ণ হাইড
        setTimeout(() => {
          if (adBanner && adBanner.style.display !== 'none') {
            closeAd();
          }
        }, 45000);
      }
    }

    function hideAdOnPlay() {
      const adBanner = document.getElementById('adBanner');
      if (adBanner) {
        adBanner.classList.add('ad-hidden');
        clearTimeout(adAutoHideTimeout);
      }
    }

    function trackAdClick() {
      // এড ক্লিক ট্র্যাকিং (যদি প্রয়োজন হয়)
      console.log('বিজ্ঞাপনে ক্লিক করা হয়েছে');
      showNotification('বিজ্ঞাপন পৃষ্ঠায় নিয়ে যাওয়া হচ্ছে...');
    }

    function showLoading(message = 'লোড হচ্ছে...', progress = 0) {
      loadingText.textContent = message;
      loadingProgress.style.width = `${progress}%`;
      loadingOverlay.classList.add('active');
    }

    function hideLoading() {
      loadingOverlay.classList.remove('active');
      loadingProgress.style.width = '0%';
    }

    function updateLoadingProgress(progress, message = null) {
      if (message) loadingText.textContent = message;
      loadingProgress.style.width = `${progress}%`;
    }

    function showError(title, description, stationId = null) {
      currentErrorStation = stationId;
      errorTitle.textContent = title;
      errorDescription.textContent = description;
      errorOverlay.classList.add('active');
    }

    function hideError() {
      errorOverlay.classList.remove('active');
      currentErrorStation = null;
    }

    function handleStreamError(e) {
      hideLoading();
      clearTimeout(skipTimeout);
      const currentStationUrl = audio.src;
      const currentStation = stationList.find(s => s.url === currentStationUrl || s.backupUrl === currentStationUrl);
      if (!currentStation) return;

      let errorType = 'অজানা ত্রুটি';
      let errorDetails = 'স্টেশন লোড করতে সমস্যা হচ্ছে';
      if (e.type === 'stalled') {
        errorType = 'সংযোগ বিচ্ছিন্ন';
        errorDetails = 'স্টেশন সংযোগ বিচ্ছিন্ন হয়েছে';
      } else if (e.type === 'error' && audio.error) {
        switch(audio.error.code) {
          case audio.error.MEDIA_ERR_NETWORK: errorType = 'নেটওয়ার্ক ত্রুটি'; errorDetails = 'নেটওয়ার্ক সংযোগে সমস্যা হচ্ছে'; break;
          case audio.error.MEDIA_ERR_DECODE: errorType = 'অডিও ফরম্যাট ত্রুটি'; errorDetails = 'অডিও ফরম্যাট সাপোর্টেড নয়'; break;
          case audio.error.MEDIA_ERR_SRC_NOT_SUPPORTED: errorType = 'সোর্স সাপোর্টেড নয়'; errorDetails = 'স্টেশন ফরম্যাট সাপোর্টেড নয়'; break;
        }
      }
      showError(errorType, errorDetails, currentStation.id);

      if (retryCount < MAX_RETRIES) {
        retryCount++;
        setTimeout(retryCurrentStation, 2000);
      }
    }

    function retryCurrentStation() {
      if (!currentErrorStation) return;
      hideError();
      showLoading('পুনরায় চেষ্টা করা হচ্ছে...', 30);
      const station = stationList.find(s => s.id === currentErrorStation);
      if (station) {
        const isUsingBackup = audio.src === station.backupUrl;
        const nextUrl = isUsingBackup ? station.url : (station.backupUrl || station.url);
        playStationWithUrl(currentErrorStation, nextUrl);
      }
    }

    function playStationWithUrl(id, url) {
      const st = stationList.find(s => s.id === id);
      if (!st) return;
      
      // --- BUG FIX: Reset retry logic for new station ---
      retryCount = 0;

      hideError();
      showLoading('স্টেশন লোড হচ্ছে...', 10);
      clearTimeout(skipTimeout);
      audio.pause();
      audio.src = url;
      audio.load();
      updateLoadingProgress(50, 'সংযোগ স্থাপন করা হচ্ছে...');
      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          updateLoadingProgress(100, 'সংযুক্ত হয়েছে');
          playPauseBtn.innerHTML = '<i class="fa-solid fa-pause"></i>';
          playPauseBtn.setAttribute('aria-label', 'বিরতি দিন');
          mobilePlayBtn.innerHTML = '<i class="fas fa-pause"></i>';
          addToHistory(id);
          setTimeout(hideLoading, 500);
        }).catch(err => handleStreamError(err));
      }
      updateFavButton(id);
      localStorage.setItem('lastPlayedStationId', id);
      nowPlayingText.textContent = `🎶 বাজছে: ${st.name.replace(/📻\s*/g, '')}`;
    }

    function addToHistory(stationId) {
      playHistory = playHistory.filter(id => id !== stationId);
      playHistory.unshift(stationId);
      playHistory = playHistory.slice(0, 5);
      localStorage.setItem('playHistory', JSON.stringify(playHistory));
      updateHistoryButtons();
    }

    function updateHistoryButtons() {
      historyButtons.innerHTML = '';
      if (playHistory.length === 0) {
        historySection.classList.remove('show');
        return;
      }
      historySection.classList.add('show');
      playHistory.forEach(stationId => {
        const station = stationList.find(s => s.id === stationId);
        if (station) {
          const btn = document.createElement('button');
          btn.className = 'history-btn focus-indicator';
          btn.textContent = station.name.replace('📻 ', '');
          btn.title = station.name;
          btn.addEventListener('click', () => {
            playStation(stationId);
            selector.value = stationId;
          });
          historyButtons.appendChild(btn);
        }
      });
    }

    function playStation(id) {
      const st = stationList.find(s => s.id === id);
      if (st) playStationWithUrl(id, st.url);
    }

    function updateFavButton(stationId) {
      const isFav = favorites.includes(stationId);
      favBtn.innerHTML = isFav ? '<i class="fa-solid fa-star"></i> ফেভারিট সরান' : '<i class="fa-regular fa-star"></i> ফেভারিটে যোগ করুন';
      favBtn.classList.toggle('favorited', isFav);
      mobileFavBtn.classList.toggle('active', isFav);
    }

    function toggleFavorite() {
      const currentId = selector.value;
      if (!currentId) return;
      const index = favorites.indexOf(currentId);
      if (index === -1) {
        favorites.push(currentId);
        showNotification('ফেভারিটে যোগ করা হয়েছে!');
      } else {
        favorites.splice(index, 1);
        showNotification('ফেভারিট থেকে সরানো হয়েছে!');
      }
      localStorage.setItem('favorites', JSON.stringify(favorites));
      updateFavButton(currentId);
      updateStationOptions(stationSearch.value.toLowerCase());
    }

    function togglePlayPause() {
      if (audio.paused) {
        const stationToPlay = selector.value || stationList[0].id;
        playStation(stationToPlay);
        // বিজ্ঞাপন হাইড করুন যখন রেডিও চালু হয়
        hideAdOnPlay();
      } else {
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        playPauseBtn.setAttribute('aria-label', 'চালান');
        mobilePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
      }
    }

    window.addEventListener('keydown', (e) => {
      if (!overlayClicked || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT') return;
      if (e.key === 'Escape' && errorOverlay.classList.contains('active')) hideError();
      switch (e.key) {
        case ' ': togglePlayPause(); break;
        case 'ArrowLeft': prevBtn.click(); break;
        case 'ArrowRight': nextBtn.click(); break;
        case 'f': toggleFavorite(); break;
        case 'm': darkModeToggle.click(); break;
        case 'a': closeAd(); break; // 'a' চাপলে বিজ্ঞাপন বন্ধ
      }
    });

    document.addEventListener('touchstart', (e) => touchStartX = e.changedTouches[0].screenX);
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (Math.abs(touchStartX - touchEndX) > 50) {
            (touchStartX > touchEndX) ? nextBtn.click() : prevBtn.click();
        }
    });

    function updateStationOptions(searchTerm = '') {
      const lastPlayed = selector.value || localStorage.getItem('lastPlayedStationId');
      selector.innerHTML = '';

      const favs = stationList.filter(st => favorites.includes(st.id));
      const others = stationList.filter(st => !favorites.includes(st.id));

      const populateGroup = (group, stations) => {
        const matchingStations = stations.filter(st => st.name.toLowerCase().includes(searchTerm));
        if (matchingStations.length > 0) {
            matchingStations.forEach(st => {
                const opt = document.createElement('option');
                opt.value = st.id;
                opt.textContent = st.name;
                group.appendChild(opt);
            });
            selector.appendChild(group);
        }
      };

      if (favs.length > 0) {
        const favGroup = document.createElement('optgroup');
        favGroup.label = '⭐ ফেভারিট স্টেশন';
        populateGroup(favGroup, favs);
      }

      const allGroup = document.createElement('optgroup');
      allGroup.label = '🎧 সকল স্টেশন';
      populateGroup(allGroup, others);

      if (stationList.some(s => s.id === lastPlayed) && Array.from(selector.options).some(o => o.value === lastPlayed)) {
        selector.value = lastPlayed;
      }
    }
 
    function createPresetButtons() {
      presetButtons.innerHTML = ''; // Clear existing buttons
      PRESETS.forEach(preset => {
        const btn = document.createElement('button');
        btn.className = 'preset-btn focus-indicator';
        btn.textContent = preset.name;
        btn.addEventListener('click', () => {
          const availableStation = preset.stations.find(id => stationList.some(s => s.id === id));
          if (availableStation) {
            playStation(availableStation);
            selector.value = availableStation;
            showNotification(`${preset.name} প্রিসেট বাজছে`);
            // বিজ্ঞাপন হাইড করুন যখন প্রিসেট চালু হয়
            hideAdOnPlay();
          }
        });
        presetButtons.appendChild(btn);
      });
    }

    const debounce = (func, wait) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func.apply(this, args), wait);
        };
    };
    
    function filterStations(searchTerm) {
      updateStationOptions(searchTerm);
    }
    
    stationSearch.addEventListener('input', debounce((e) => filterStations(e.target.value.toLowerCase()), 300));
    clearSearch.addEventListener('click', () => { stationSearch.value = ''; filterStations(''); });

    function setupEqualizer() {
      [eqBass, eqMid, eqTreble].forEach(slider => {
        const savedValue = localStorage.getItem(`eq${slider.id.slice(2)}`);
        if (savedValue) slider.value = savedValue;
        slider.addEventListener('input', (e) => {
          localStorage.setItem(`eq${e.target.id.slice(2)}`, e.target.value);
        });
      });
    }

    function showNotification(message) {
      document.querySelectorAll('.notification').forEach(n => n.remove());
      const notification = document.createElement('div');
      notification.className = 'notification';
      notification.textContent = message;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    }
    
    function updateDarkModeIcon() {
        const isLightMode = document.body.classList.contains('light-mode');
        darkModeToggle.innerHTML = `<i class="fa-solid fa-${isLightMode ? 'moon' : 'sun'}"></i>`;
        mobileSettingsBtn.innerHTML = `<i class="fas fa-${isLightMode ? 'moon' : 'sun'}"></i>`;
    }

    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('light-mode');
      localStorage.setItem('darkMode', document.body.classList.contains('light-mode') ? 'enabled' : 'disabled');
      updateDarkModeIcon();
    });

    if (localStorage.getItem('darkMode') === 'enabled') document.body.classList.add('light-mode');
    updateDarkModeIcon();
    
    selector.addEventListener('change', () => {
      playStation(selector.value);
      hideAdOnPlay();
    });
    
    playPauseBtn.addEventListener('click', togglePlayPause);
    favBtn.addEventListener('click', toggleFavorite);

    volumeControl.addEventListener('input', () => {
      audio.volume = volumeControl.value;
      volumeFill.style.width = `${volumeControl.value * 100}%`;
      localStorage.setItem('volume', volumeControl.value);
    });

    const savedVolume = localStorage.getItem('volume');
    if (savedVolume) {
      volumeControl.value = audio.volume = savedVolume;
      volumeFill.style.width = `${savedVolume * 100}%`;
    }

    startBtn.addEventListener('click', async () => {
      document.getElementById('overlay').classList.add('hidden');
      document.querySelector('.container').classList.add('show');
      overlayClicked = true;
      if (!audioCtx) setupVisualizer();
      if (audioCtx && audioCtx.state === 'suspended') await audioCtx.resume();
      togglePlayPause();
      // বিজ্ঞাপন হাইড করুন যখন রেডিও শুরু হয়
      hideAdOnPlay();
    });

    const findVisibleIndex = (currentValue) => {
        const visibleOptions = Array.from(selector.options).filter(opt => !opt.hidden && opt.parentElement.style.display !== 'none');
        return visibleOptions.findIndex(opt => opt.value === currentValue);
    };

    const getVisibleOptions = () => Array.from(selector.options).filter(opt => !opt.hidden && opt.parentElement.style.display !== 'none');

    prevBtn.addEventListener('click', () => {
        const visibleOptions = getVisibleOptions();
        if (visibleOptions.length < 2) return;
        let currentIndex = visibleOptions.findIndex(opt => opt.value === selector.value);
        currentIndex = (currentIndex - 1 + visibleOptions.length) % visibleOptions.length;
        selector.value = visibleOptions[currentIndex].value;
        playStation(selector.value);
        hideAdOnPlay();
    });

    nextBtn.addEventListener('click', () => {
        const visibleOptions = getVisibleOptions();
        if (visibleOptions.length < 2) return;
        let currentIndex = visibleOptions.findIndex(opt => opt.value === selector.value);
        currentIndex = (currentIndex + 1) % visibleOptions.length;
        selector.value = visibleOptions[currentIndex].value;
        playStation(selector.value);
        hideAdOnPlay();
    });

    timerOnBtn.addEventListener('click', setSleepTimer);
    timerOffBtn.addEventListener('click', () => { cancelSleepTimer(); showNotification('স্লিপ টাইমার বাতিল করা হয়েছে'); });

    function setSleepTimer() {
      cancelSleepTimer();
      const mins = parseInt(sleepTimeSelect.value, 10);
      if (mins > 0) {
        const endTime = Date.now() + mins * 60 * 1000;
        localStorage.setItem('sleepEndTime', endTime);
        sleepTimer = setInterval(updateSleepCountdown, 1000);
        updateSleepCountdown();
        mobileSleepBtn.classList.add('active');
        showNotification(`${mins} মিনিটের জন্য স্লিপ টাইমার সেট করা হয়েছে`);
      }
    }

    function updateSleepCountdown() {
      const endTime = parseInt(localStorage.getItem('sleepEndTime'), 10);
      if (!endTime) return;
      const remaining = Math.round((endTime - Date.now()) / 1000);
      if (remaining <= 0) {
        cancelSleepTimer();
        audio.pause();
        playPauseBtn.innerHTML = '<i class="fa-solid fa-play"></i>';
        mobilePlayBtn.innerHTML = '<i class="fas fa-play"></i>';
        showNotification('রেডিও বন্ধ - স্লিপ টাইমার শেষ হয়েছে');
      } else {
        const m = Math.floor(remaining / 60);
        const s = remaining % 60;
        timerCountdown.textContent = `⏳ টাইমার: ${m}ম ${s}স`;
      }
    }

    function cancelSleepTimer() {
      clearInterval(sleepTimer);
      sleepTimer = null;
      localStorage.removeItem('sleepEndTime');
      timerCountdown.textContent = '';
      mobileSleepBtn.classList.remove('active');
    }

    const savedEndTime = localStorage.getItem('sleepEndTime');
    if (savedEndTime && parseInt(savedEndTime, 10) > Date.now()) {
      sleepTimer = setInterval(updateSleepCountdown, 1000);
      mobileSleepBtn.classList.add('active');
    }

    function setupVisualizer() {
      try {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
        source = audioCtx.createMediaElementSource(audio);
        analyser = audioCtx.createAnalyser();
        source.connect(analyser);
        analyser.connect(audioCtx.destination);
        analyser.fftSize = 512;
        analyser.smoothingTimeConstant = 0.8;
        bufferLength = analyser.frequencyBinCount;
        dataArray = new Uint8Array(bufferLength);
        resizeCanvas(); // Initial resize
        drawVisualizer();
      } catch (e) { console.error("Visualizer setup failed.", e); }
    }

    function resizeCanvas() {
        const dpr = window.devicePixelRatio || 1;
        canvas.width = canvas.clientWidth * dpr;
        canvas.height = canvas.clientHeight * dpr;
        ctx.setTransform(1,0,0,1,0,0);
        ctx.scale(dpr,dpr);
    }
    
    vizModeButtons.forEach(btn => btn.addEventListener('click', () => {
        vizModeButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        visualizerMode = btn.dataset.mode;
    }));
    
    let lastDrawTime = 0;
    function drawVisualizer() {
        visualizerAnimationId = requestAnimationFrame(drawVisualizer);
        
        const now = performance.now();
        if (now - lastDrawTime < 33) { // Limit to ~30fps
            return;
        }
        lastDrawTime = now;
        
        if (!analyser || audio.paused) {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }
        analyser.getByteFrequencyData(dataArray);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        const width = canvas.clientWidth;
        const height = canvas.clientHeight;

        switch (visualizerMode) {
            case 'bars': drawBars(width, height); break;
            case 'circle': drawCircle(width, height); break;
            case 'wave': drawWave(width, height); break;
            case 'particles': drawParticles(width, height); break;
        }
    }

    function drawBars(width, height) {
        const barCount = bufferLength / 2;
        const barWidth = width / barCount * 1.5;
        for (let i = 0; i < barCount; i++) {
            const barHeight = dataArray[i] / 255 * height;
            ctx.fillStyle = `hsl(${(i * 360) / barCount}, 90%, 60%)`;
            ctx.fillRect(i * (barWidth + 2), height - barHeight, barWidth, barHeight);
        }
    }

    function drawCircle(width, height) {
        const centerX = width / 2, centerY = height / 2, radius = Math.min(width, height) * 0.35;
        const barCount = 128;
        for (let i = 0; i < barCount; i++) {
            const amp = dataArray[Math.floor(i * bufferLength / barCount)] / 255;
            const barLength = amp * radius * 0.6;
            const angle = i / barCount * 2 * Math.PI;
            const [x1, y1] = [centerX + Math.cos(angle) * radius, centerY + Math.sin(angle) * radius];
            const [x2, y2] = [centerX + Math.cos(angle) * (radius + barLength), centerY + Math.sin(angle) * (radius + barLength)];
            ctx.strokeStyle = `hsl(${i * 360 / barCount}, 90%, 60%)`;
            ctx.lineWidth = 3;
            ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.stroke();
        }
    }

    function drawWave(width, height) {
        ctx.beginPath();
        const sliceWidth = width * 1.0 / bufferLength;
        let x = 0;
        for (let i = 0; i < bufferLength; i++) {
            const v = dataArray[i] / 128.0;
            const y = v * height / 2;
            if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
            x += sliceWidth;
        }
        ctx.lineTo(width, height / 2);
        const gradient = ctx.createLinearGradient(0, 0, width, 0);
        gradient.addColorStop(0, 'rgba(106, 17, 203, 1)');
        gradient.addColorStop(1, 'rgba(37, 117, 252, 1)');
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.stroke();
    }
    
    function drawParticles(width, height) {
        const particleCount = 100;
        for (let i = 0; i < particleCount; i++) {
            const amp = dataArray[Math.floor(i / particleCount * bufferLength)] / 255;
            const x = (i / particleCount) * width;
            const y = height - (amp * height);
            const size = 2 + (amp * 8);
            ctx.beginPath();
            ctx.arc(x, y, size, 0, 2 * Math.PI);
            ctx.fillStyle = `hsla(${i * 360 / particleCount}, 90%, 60%, ${0.5 + amp * 0.5})`;
            ctx.fill();
        }
    }
    
    window.addEventListener('resize', resizeCanvas);

    mobilePlayBtn.addEventListener('click', () => playPauseBtn.click());
    mobileFavBtn.addEventListener('click', toggleFavorite);
    mobileSleepBtn.addEventListener('click', () => document.querySelector('.sleep-timer-wrapper').scrollIntoView({ behavior: 'smooth' }));
    mobileSettingsBtn.addEventListener('click', () => darkModeToggle.click());
    mobileHomeBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

    retryBtn.addEventListener('click', retryCurrentStation);
    nextStationBtn.addEventListener('click', () => { hideError(); nextBtn.click(); });
    closeErrorBtn.addEventListener('click', hideError);

    audio.addEventListener('error', handleStreamError);
    audio.addEventListener('stalled', handleStreamError);
    audio.addEventListener('waiting', () => bufferingText.innerHTML = '<span class="spinner"></span>⏳ লোড হচ্ছে...');
    audio.addEventListener('playing', () => {
      clearTimeout(skipTimeout);
      bufferingText.textContent = '';
      hideLoading();
      hideError();
    });

    // PWA Service Worker Registration
    window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          })
          .catch((error) => {
            console.log('ServiceWorker registration failed: ', error);
          });
      }
    });

    // Initialize Application
    updateStationOptions();
    createPresetButtons();
    setupEqualizer();
    updateHistoryButtons();
    
    // পেজ লোড হওয়ার ২ সেকেন্ড পর বিজ্ঞাপন দেখান
    setTimeout(showAd, 2000);
    
    const lastStation = localStorage.getItem('lastPlayedStationId');
    if (lastStation && stationList.some(s => s.id === lastStation)) {
      selector.value = lastStation;
      nowPlayingText.textContent = `🎶 শেষবার শোনা: ${stationList.find(s => s.id === lastStation).name}`;
    }

    window.addEventListener('beforeunload', () => {
        if (visualizerAnimationId) {
            cancelAnimationFrame(visualizerAnimationId);
        }
        if (audioCtx) {
            audioCtx.close().catch(console.error);
        }
        if (adAutoHideTimeout) {
            clearTimeout(adAutoHideTimeout);
        }
    });
});