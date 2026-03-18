// ===== 世界的金門 — 閩南語聲音地圖 =====

const WORDS = [
  { word: '食飯', romanization: 'chia̍h-pn̄g', meaning: '吃飯' },
  { word: '厝', romanization: 'chhù', meaning: '家、房子' },
  { word: '歡喜', romanization: 'hoaⁿ-hí', meaning: '高興' },
  { word: '落雨', romanization: "lo̍h-hō͘", meaning: '下雨' },
  { word: '𨒪迌', romanization: 'chhit-thô', meaning: '出去玩' },
  { word: '媠', romanization: 'súi', meaning: '漂亮' },
  { word: '多謝', romanization: 'to-siā', meaning: '謝謝' },
  { word: '走路', romanization: "cháu-lō͘", meaning: '走路' },
  { word: '天氣', romanization: "thiⁿ-khì", meaning: '天氣' },
  { word: '海', romanization: 'hái', meaning: '海' },
  { word: '囝仔', romanization: 'gín-á', meaning: '小孩' },
  { word: '做工', romanization: 'chò-kang', meaning: '工作' },
  { word: '暗暝', romanization: 'àm-mê', meaning: '晚上' },
  { word: '日頭', romanization: "ji̍t-thâu", meaning: '太陽' },
  { word: '風', romanization: 'hong', meaning: '風' },
];

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

// Landing
document.getElementById('start-btn').addEventListener('click', function() {
  selectedWords = shuffle(WORDS).slice(0, 5);
  currentWordIdx = 0;
  showScreen('record-screen');
  updateWordDisplay();
  initWaveform();
});

// Word display
function updateWordDisplay() {
  var w = selectedWords[currentWordIdx];
  document.getElementById('word-display').textContent = w.word;
  document.getElementById('word-romanization').textContent = w.romanization;
  document.getElementById('word-meaning').textContent = w.meaning;
  document.getElementById('word-counter').textContent = (currentWordIdx + 1) + ' / ' + selectedWords.length;
  document.getElementById('progress-fill').style.width = ((currentWordIdx) / selectedWords.length * 100) + '%';
  document.getElementById('record-hint').textContent = '按下開始錄音';
  document.getElementById('record-btn').classList.remove('recording');
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

// Recording
document.getElementById('record-btn').addEventListener('click', function() {
  if (!isRecording) {
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function(stream) {
      var audioCtx = new AudioContext();
      var source = audioCtx.createMediaStreamSource(stream);
      analyser = audioCtx.createAnalyser();
      analyser.fftSize = 256;
      source.connect(analyser);

      mediaRecorder = new MediaRecorder(stream);
      var chunks = [];

      mediaRecorder.ondataavailable = function(e) {
        chunks.push(e.data);
      };

      mediaRecorder.onstop = function() {
        var blob = new Blob(chunks, { type: 'audio/webm' });
        recordings.push({
          word: selectedWords[currentWordIdx].word,
          blob: blob,
          url: URL.createObjectURL(blob),
        });
        stream.getTracks().forEach(function(t) { t.stop(); });
        myCount++;
        document.getElementById('my-count').textContent = myCount;
        nextWord();
      };

      mediaRecorder.start();
      isRecording = true;
      document.getElementById('record-btn').classList.add('recording');
      document.getElementById('record-hint').textContent = '錄音中... 再按一次停止';
      animateWaveform();
    }).catch(function() {
      alert('無法存取麥克風，請允許麥克風權限。');
    });
  } else {
    mediaRecorder.stop();
    isRecording = false;
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
    audio.play();

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
