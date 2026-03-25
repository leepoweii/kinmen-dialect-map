// ===== 世界的金門 — 閩南語聲音地圖 =====

const WORDS = [
  { word: '食飯', word_s: '食饭', poj: 'chia̍h-pn̄g', pinyin: 'shí fàn', meaning_t: '吃飯', meaning_s: '吃饭', meaning_en: 'To eat / Having a meal' },
  { word: '厝', word_s: '厝', poj: 'chhù', pinyin: 'cuò', meaning_t: '家、房子', meaning_s: '家、房子', meaning_en: 'Home / House' },
  { word: '歡喜', word_s: '欢喜', poj: 'hoaⁿ-hí', pinyin: 'huān xǐ', meaning_t: '高興', meaning_s: '高兴', meaning_en: 'Happy / Glad' },
  { word: '落雨', word_s: '落雨', poj: "lo̍h-hō͘", pinyin: 'luò yǔ', meaning_t: '下雨', meaning_s: '下雨', meaning_en: 'Raining' },
  { word: '𨒪迌', word_s: '𨒪迌', poj: 'chhit-thô', pinyin: 'qī tó', meaning_t: '出去玩', meaning_s: '出去玩', meaning_en: 'Going out to play' },
  { word: '媠', word_s: '媠', poj: 'súi', pinyin: 'shuǐ', meaning_t: '漂亮', meaning_s: '漂亮', meaning_en: 'Beautiful' },
  { word: '多謝', word_s: '多谢', poj: 'to-siā', pinyin: 'duō xiè', meaning_t: '謝謝', meaning_s: '谢谢', meaning_en: 'Thank you' },
  { word: '走路', word_s: '走路', poj: "cháu-lō͘", pinyin: 'zǒu lù', meaning_t: '走路', meaning_s: '走路', meaning_en: 'Walking' },
  { word: '天氣', word_s: '天气', poj: "thiⁿ-khì", pinyin: 'tiān qì', meaning_t: '天氣', meaning_s: '天气', meaning_en: 'Weather' },
  { word: '海', word_s: '海', poj: 'hái', pinyin: 'hǎi', meaning_t: '海', meaning_s: '海', meaning_en: 'Sea / Ocean' },
  { word: '囝仔', word_s: '囝仔', poj: 'gín-á', pinyin: 'jiǎn zǎi', meaning_t: '小孩', meaning_s: '小孩', meaning_en: 'Child / Kid' },
  { word: '做工', word_s: '做工', poj: 'chò-kang', pinyin: 'zuò gōng', meaning_t: '工作', meaning_s: '工作', meaning_en: 'Working' },
  { word: '暗暝', word_s: '暗暝', poj: 'àm-mê', pinyin: 'àn míng', meaning_t: '晚上', meaning_s: '晚上', meaning_en: 'Night time' },
  { word: '日頭', word_s: '日头', poj: "ji̍t-thâu", pinyin: 'rì tóu', meaning_t: '太陽', meaning_s: '太阳', meaning_en: 'Sun' },
  { word: '風', word_s: '风', poj: 'hong', pinyin: 'fēng', meaning_t: '風', meaning_s: '风', meaning_en: 'Wind' },
  // 金門話特色詞彙
  { word: '物代', word_s: '物代', poj: 'mi̍h-tāi', pinyin: 'wù dài', meaning_t: '怎麼了？還好嗎？', meaning_s: '怎么了？还好吗？', meaning_en: "What's up? How are you?" },
  { word: '巴刹', word_s: '巴刹', poj: 'pa-sat', pinyin: 'bā shā', meaning_t: '市場', meaning_s: '市场', meaning_en: 'Market' },
  { word: '頭家', word_s: '头家', poj: 'thâu-ke', pinyin: 'tóu jiā', meaning_t: '老闆', meaning_s: '老板', meaning_en: 'Boss / Shop owner' },
  { word: '鹹酸甜', word_s: '咸酸甜', poj: 'kiâm-sng-tinn', pinyin: 'xián suān tián', meaning_t: '蜜餞', meaning_s: '蜜饯', meaning_en: 'Preserved fruit snack' },
  { word: '佇遮', word_s: '佇遮', poj: 'tī-tsiô', pinyin: 'zhù zhē', meaning_t: '在這裡', meaning_s: '在这里', meaning_en: 'Over here' },
  { word: '燒酒', word_s: '烧酒', poj: 'sio-chiú', pinyin: 'shāo jiǔ', meaning_t: '酒、高粱酒', meaning_s: '酒、高粱酒', meaning_en: 'Liquor / Kaoliang' },
  { word: '阿公', word_s: '阿公', poj: 'a-kong', pinyin: 'ā gōng', meaning_t: '爺爺', meaning_s: '爷爷', meaning_en: 'Grandfather' },
  { word: '阿媽', word_s: '阿妈', poj: 'a-má', pinyin: 'ā mā', meaning_t: '奶奶', meaning_s: '奶奶', meaning_en: 'Grandmother' },
  { word: '返去', word_s: '返去', poj: 'tńg-khì', pinyin: 'fǎn qù', meaning_t: '回去、回家', meaning_s: '回去、回家', meaning_en: 'Going home' },
  { word: '故鄉', word_s: '故乡', poj: 'kò͘-hiong', pinyin: 'gù xiāng', meaning_t: '故鄉', meaning_s: '故乡', meaning_en: 'Homeland' },
  { word: '手路菜', word_s: '手路菜', poj: 'chhiú-lō͘-chhài', pinyin: 'shǒu lù cài', meaning_t: '拿手菜', meaning_s: '拿手菜', meaning_en: 'Signature dish' },
  { word: '思念', word_s: '思念', poj: 'su-liām', pinyin: 'sī niàn', meaning_t: '想念', meaning_s: '想念', meaning_en: 'Missing someone' },
];

// i18n
var lang = 'tw'; // 'tw' = 繁體, 'cn' = 简体

var UI_TEXT = {
  tw: {
    title_prefix: '世界的',
    title_kinmen: '金門',
    subtitle: '福建話/閩南語 聲音地圖  Hokkien Sound Map',
    desc: '金門人走向世界，帶走了語言。\n同一個詞，在檳城、新加坡、金門，\n聽起來一樣，又不一樣。\n\n錄下你的聲音，聽聽世界各地的金門人怎麼說。',
    start: '開始錄音',
    record_hint: '按下開始錄音',
    recording_hint: '錄音中... 再按一次停止',
    skip: '跳過這個詞 →',
    thank_title: '多謝你的聲音',
    thank_desc: '你的錄音已經加入世界的金門聲音地圖。\n現在來聽聽其他地方的人怎麼說同一個詞。',
    explore: '探索聲音地圖',
    map_title: '點擊地圖上的光點，聽聽那裡的聲音',
    my_recordings: '你的錄音',
    global_recordings: '全球錄音',
    regions: '地區',
    play_random: '▶ 隨機播放',
    recordings_unit: '筆錄音',
  },
  cn: {
    title_prefix: '世界的',
    title_kinmen: '金门',
    subtitle: '福建话/闽南语 声音地图  Hokkien Sound Map',
    desc: '金门人走向世界，带走了语言。\n同一个词，在槟城、新加坡、金门，\n听起来一样，又不一样。\n\n录下你的声音，听听世界各地的金门人怎么说。',
    start: '开始录音',
    record_hint: '按下开始录音',
    recording_hint: '录音中... 再按一次停止',
    skip: '跳过这个词 →',
    thank_title: '多谢你的声音',
    thank_desc: '你的录音已经加入世界的金门声音地图。\n现在来听听其他地方的人怎么说同一个词。',
    explore: '探索声音地图',
    map_title: '点击地图上的光点，听听那里的声音',
    my_recordings: '你的录音',
    global_recordings: '全球录音',
    regions: '地区',
    play_random: '▶ 随机播放',
    recordings_unit: '笔录音',
  },
};

function t(key) { return UI_TEXT[lang][key] || key; }

function getWord(w) {
  return lang === 'cn' ? w.word_s : w.word;
}

function getMeaning(w) {
  return lang === 'cn' ? w.meaning_s : w.meaning_t;
}

const LOCATIONS = [
  { name: '金門', lat: 24.449, lng: 118.376, count: 12, flag: '🏝️' },
  { name: '檳城', lat: 5.416, lng: 100.332, count: 8, flag: '🇲🇾' },
  { name: '新加坡', lat: 1.352, lng: 103.819, count: 9, flag: '🇸🇬' },
  { name: '台北', lat: 25.033, lng: 121.565, count: 7, flag: '🇹🇼' },
  { name: '廈門', lat: 24.479, lng: 118.089, count: 6, flag: '🇨🇳' },
  { name: '雅加達', lat: -6.208, lng: 106.845, count: 5, flag: '🇮🇩' },
];

// State
let currentWordIdx = 0;
let selectedWords = [];
let isRecording = false;
let mediaRecorder = null;
let recordings = [];
let myCount = 0;
let waveformBars = [];
let analyser = null;
let animFrameId = null;
let leafletMap = null;

// Utils
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(id) {
  document.querySelectorAll('.screen').forEach(function(s) {
    s.classList.remove('active');
  });
  var screen = document.getElementById(id);
  screen.classList.add('active');
  screen.classList.add('fade-in');
}

// Language toggle
document.getElementById('lang-toggle').addEventListener('click', toggleLang);

// Survey data
let surveyData = {};

// Landing → Survey
document.getElementById('start-btn').addEventListener('click', function() {
  showScreen('survey-screen');
});

// Survey → Record
document.getElementById('survey-form').addEventListener('submit', function(e) {
  e.preventDefault();
  surveyData = {
    surname: document.getElementById('survey-surname').value,
    region: document.getElementById('survey-region').value,
    village: document.getElementById('survey-village').value,
    location: document.getElementById('survey-location').value,
    consent: document.getElementById('survey-consent').checked,
    pretest_belong: document.getElementById('pretest-belong').value,
    pretest_identity: document.getElementById('pretest-identity').value,
    pretest_attachment: document.getElementById('pretest-attachment').value,
  };
  selectedWords = shuffle(WORDS).slice(0, 5);
  currentWordIdx = 0;
  showScreen('record-screen');
  updateWordDisplay();
  initWaveform();
});

// Word display — show ALL THREE meanings as prompt, hide dialect chars until after recording
function updateWordDisplay() {
  var w = selectedWords[currentWordIdx];
  // Show meaning in all three scripts simultaneously
  document.getElementById('word-display').textContent = w.meaning_t;
  document.getElementById('word-display-s').textContent = w.meaning_s !== w.meaning_t ? w.meaning_s : '';
  document.getElementById('word-display-en').textContent = w.meaning_en;
  document.getElementById('word-hint').textContent = lang === 'cn'
    ? '用你的福建话/闽南语说这个词'
    : '用你的福建話/閩南語說這個詞';
  // Hide the reveal section until after recording
  document.getElementById('word-reveal').style.display = 'none';
  document.getElementById('word-counter').textContent = (currentWordIdx + 1) + ' / ' + selectedWords.length;
  document.getElementById('progress-fill').style.width = ((currentWordIdx) / selectedWords.length * 100) + '%';
  document.getElementById('record-hint').textContent = t('record_hint');
  document.getElementById('record-btn').classList.remove('recording');
}

// After recording: reveal dialect characters + romanization + replay button
function revealDialectInfo() {
  var w = selectedWords[currentWordIdx];
  document.getElementById('word-dialect').textContent = getWord(w);
  document.getElementById('word-romanization').textContent = w.poj + '  ·  ' + w.pinyin;
  document.getElementById('word-reveal').style.display = 'block';

  // Bind replay button to the latest recording
  var lastRecording = recordings[recordings.length - 1];
  var replayBtn = document.getElementById('replay-btn');
  var nextBtn = document.getElementById('next-word-btn');

  if (lastRecording) {
    replayBtn.style.display = 'inline-block';
    replayBtn.onclick = function() {
      var audio = new Audio(lastRecording.url);
      safePlay(audio);
    };
  } else {
    replayBtn.style.display = 'none';
  }

  nextBtn.style.display = 'inline-block';
  nextBtn.onclick = function() {
    nextBtn.style.display = 'none';
    replayBtn.style.display = 'none';
    nextWord();
  };
}

// Language toggle
function applyLang() {
  // Landing
  document.getElementById('landing-title-prefix').textContent = t('title_prefix');
  document.getElementById('landing-title-kinmen').textContent = t('title_kinmen');
  document.querySelector('#landing .subtitle').textContent = t('subtitle');
  document.querySelector('#landing .desc').textContent = t('desc');
  document.getElementById('start-btn').textContent = t('start');
  // Thank you
  document.querySelector('.thank-you h2').textContent = t('thank_title');
  document.querySelector('.thank-you p').textContent = t('thank_desc');
  document.getElementById('explore-map-btn').textContent = t('explore');
  // Map
  document.querySelector('.map-header h2').textContent = t('map_title');
  // Skip
  document.getElementById('skip-btn').textContent = t('skip');
  // Lang toggle button text
  document.getElementById('lang-toggle').textContent = lang === 'tw' ? '简' : '繁';
}

function toggleLang() {
  lang = lang === 'tw' ? 'cn' : 'tw';
  applyLang();
  if (selectedWords.length > 0 && currentWordIdx < selectedWords.length) {
    updateWordDisplay();
  }
}

// Waveform
function initWaveform() {
  var container = document.getElementById('waveform');
  container.textContent = '';
  waveformBars = [];
  for (var i = 0; i < 30; i++) {
    var bar = document.createElement('div');
    bar.className = 'bar';
    bar.style.height = '4px';
    container.appendChild(bar);
    waveformBars.push(bar);
  }
}

function animateWaveform() {
  if (!analyser) return;
  var data = new Uint8Array(analyser.frequencyBinCount);
  analyser.getByteFrequencyData(data);
  var step = Math.floor(data.length / waveformBars.length);
  waveformBars.forEach(function(bar, i) {
    var val = data[i * step] || 0;
    bar.style.height = Math.max(4, val / 5) + 'px';
  });
  if (isRecording) {
    animFrameId = requestAnimationFrame(animateWaveform);
  }
}

// Safe play — handles autoplay policy rejection on mobile
function safePlay(audio) {
  var playPromise = audio.play();
  if (playPromise !== undefined) {
    playPromise.catch(function(err) {
      console.warn('播放失敗:', err);
    });
  }
}

// Recording
document.getElementById('record-btn').addEventListener('click', function() {
  if (!isRecording) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
      var audioCtx = new AudioContext();
      var source = audioCtx.createMediaStreamSource(stream);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      var mimeType = MediaRecorder.isTypeSupported('audio/webm') ? 'audio/webm' : 'audio/mp4';
      mediaRecorder = new MediaRecorder(stream, { mimeType: mimeType });
      var chunks = [];

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = function() {
        var blob = new Blob(chunks, { type: mimeType });
        recordings.push({
          word: selectedWords[currentWordIdx].word,
          blob: blob,
          url: URL.createObjectURL(blob),
        });
        stream.getTracks().forEach(function(track) { track.stop(); });
        myCount++;
        document.getElementById('my-count').textContent = myCount;
        // Reveal dialect info + replay button after recording
        revealDialectInfo();
      };

      mediaRecorder.start();
      isRecording = true;
      document.getElementById('word-reveal').style.display = 'none';
      document.getElementById('record-btn').classList.add('recording');
      document.getElementById('record-hint').textContent = t('recording_hint');
      animateWaveform();
    }).catch(function() {
      alert('無法存取麥克風，請允許麥克風權限。');
    });
  } else {
    mediaRecorder.stop();
    isRecording = false;
    document.getElementById('record-btn').classList.remove('recording');
    document.getElementById('record-hint').textContent = t('record_hint');
    cancelAnimationFrame(animFrameId);
    waveformBars.forEach(function(bar) { bar.style.height = '4px'; });
  }
});

// Skip / Next
function nextWord() {
  currentWordIdx++;
  document.getElementById('progress-fill').style.width = (currentWordIdx / selectedWords.length * 100) + '%';
  if (currentWordIdx >= selectedWords.length) {
    document.getElementById('thank-you').classList.add('show');
    return;
  }
  updateWordDisplay();
}

document.getElementById('skip-btn').addEventListener('click', nextWord);

// Map -> Posttest
document.getElementById('go-to-posttest').addEventListener('click', function() {
  showScreen('posttest-screen');
});

// Posttest -> Done
document.getElementById('posttest-form').addEventListener('submit', function(e) {
  e.preventDefault();
  surveyData.posttest_belong = document.getElementById('posttest-belong').value;
  surveyData.posttest_identity = document.getElementById('posttest-identity').value;
  surveyData.posttest_attachment = document.getElementById('posttest-attachment').value;
  console.log('Survey data (pre+post):', surveyData);
  var form = document.getElementById('posttest-form');
  while (form.firstChild) form.removeChild(form.firstChild);
  var h = document.createElement('h2');
  h.style.cssText = 'font-family:var(--font-serif);margin:2rem 0';
  h.textContent = '感謝你的參與！';
  var p = document.createElement('p');
  p.style.color = 'var(--color-text-secondary)';
  p.textContent = '你的前測與後測資料已記錄（Demo 不儲存）。';
  form.appendChild(h);
  form.appendChild(p);
});

// Thank you -> Map
document.getElementById('explore-map-btn').addEventListener('click', function() {
  document.getElementById('thank-you').classList.remove('show');
  showScreen('map-screen');
  setTimeout(initMap, 100);
});

// Back to record from map
document.getElementById('back-to-record').addEventListener('click', function() {
  selectedWords = shuffle(WORDS).slice(0, 5);
  currentWordIdx = 0;
  showScreen('record-screen');
  updateWordDisplay();
  initWaveform();
});

// Map
function initMap() {
  if (leafletMap) return;

  leafletMap = L.map('map', {
    center: [15, 110],
    zoom: 4,
    zoomControl: true,
    attributionControl: false,
  });

  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    maxZoom: 19,
  }).addTo(leafletMap);

  LOCATIONS.forEach(function(loc) {
    var markerEl = document.createElement('div');
    markerEl.className = 'map-marker';
    markerEl.id = 'marker-' + loc.name;

    var icon = L.divIcon({
      className: '',
      html: markerEl.outerHTML,
      iconSize: [20, 20],
      iconAnchor: [10, 10],
    });

    var marker = L.marker([loc.lat, loc.lng], { icon: icon }).addTo(leafletMap);

    var popupEl = document.createElement('div');
    popupEl.className = 'popup-content';

    var h3 = document.createElement('h3');
    h3.textContent = loc.flag + ' ' + loc.name;
    popupEl.appendChild(h3);

    var countP = document.createElement('p');
    countP.className = 'recordings-count';
    countP.textContent = loc.count + ' 筆錄音';
    popupEl.appendChild(countP);

    var playBtn = document.createElement('button');
    playBtn.className = 'popup-play-btn';
    playBtn.textContent = '▶ 隨機播放';
    playBtn.addEventListener('click', function() {
      playRandomFromLocation(loc.name);
    });
    popupEl.appendChild(playBtn);

    marker.bindPopup(popupEl, {
      closeButton: false,
    });
  });
}

function playRandomFromLocation(locationName) {
  if (recordings.length > 0) {
    var rand = recordings[Math.floor(Math.random() * recordings.length)];
    var audio = new Audio(rand.url);
    safePlay(audio);

    var markerEl = document.getElementById('marker-' + locationName);
    if (markerEl) {
      markerEl.classList.add('playing');
      audio.onended = function() {
        markerEl.classList.remove('playing');
      };
    }
  } else {
    // Demo mode placeholder
    var demoMsg = locationName + ' 的聲音（Demo：實際版本會播放該地區的真實錄音）';
    alert(demoMsg);
  }
}
