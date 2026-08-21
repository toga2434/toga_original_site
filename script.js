// Vanilla JavaScript Logic Only (No Frameworks)

// 1. Loading Animation Logic
window.addEventListener("DOMContentLoaded", () => {
  initializeMarquees();

  const bar = document.getElementById("loadingBar");
  const percentText = document.getElementById("loadingPercent");
  const overlay = document.getElementById("loadingOverlay");

  let progress = 0;
  const interval = setInterval(() => {
    progress += Math.floor(Math.random() * 15) + 8;
    if (progress >= 100) {
      progress = 100;
      clearInterval(interval);
      bar.style.width = "100%";
      percentText.innerText = "100%";

      setTimeout(() => {
        overlay.style.opacity = "0";
        overlay.style.pointerEvents = "none";
      }, 400);
    } else {
      bar.style.width = progress + "%";
      percentText.innerText = progress + "%";
    }
  }, 60);
});

function initializeMarquees() {
  document.querySelectorAll(".marquee-track").forEach((track) => {
    const content = track.querySelector(".marquee-content");
    if (!content) return;

    const duplicate = content.cloneNode(true);
    duplicate.setAttribute("aria-hidden", "true");
    track.appendChild(duplicate);
  });
}

// 2. Color Theme Switcher
function setTheme(themeName) {
  const body = document.body;
  body.className = "";
  if (themeName !== "default") {
    body.classList.add(themeName);
  }
}

// 3. Liver Modal Data & Handlers
const liverData = {
  kanae: {
    name: "咎人",
    unit: "元２期生",
    url: "https://www.youtube.com/playlist?list=PLEL_SDIG79LZhFGnm45yLga_0BnG5atIW",
    desc: "にじさんじを古代から支えている元２期生の剣持刀也と伏見ガク。コラボでは相性ばっちりの掛け合いが見れたり見れなかったり。 ２人の歌ってみたはまだですか？？",
    archive:
      "『咎人、再復活ッッッッ！！！』『VS Love 3シャッター目』『咎人 レジェンド恋愛ゲームをプレイする』",
  },
  fuwa: {
    name: "ROF-MAO",
    unit: "ROF-MAO",
    url: "https://www.youtube.com/@ROFMAO/videos",
    desc: "初動画は無人島！？剣持刀也、加賀美ハヤト、不破湊、甲斐田晴で組まれたグループ。四人の和気あいあいとした雰囲気がずっと見ていられる！※剣持刀也は2026年5月28日をもってユニット活動を修了しました",
    archive:
      "『【集大成】ろふまお塾 感謝の3D配信！過去最長ロケも！』『【祝100万人】豪華ゲストも続々登場！？生配信で祝賀パーティー！』『【緊急生放送】お披露目は視聴者次第？アンケートダービー！』",
  },
  kaida: {
    name: "VΔLZ",
    unit: "VΔLZ",
    url: "https://www.youtube.com/channel/UCh-GyPNxvjTsza0ptjnkh1w",
    desc: "彼らはいつも仲良くバカ騒ぎしているようにみえる。けれどチームワークや歌声の相性はピカイチ！",
    archive:
      "『【 #放課後にじパラダイス 】スイパラコラボ #VΔLZ が紹介します！ 』『 【オフコラボ】餃子パーティー&プチお披露目』",
  },
};

function toggleLiverModal(key) {
  const modal = document.getElementById("liverModal");
  const content = document.getElementById("modalContent");
  const data = liverData[key];

  if (!data) return;

  content.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 0.75rem; text-align: left;">
            <span style="font-size: 0.625rem; font-family: var(--font-mono); color: var(--theme-500); font-weight: 700;">${data.unit}</span>
            <div style="display: flex; gap: 0.5rem;">
              <h3 style="font-size: 1.5rem; font-weight: 700; color: #0f172a;">${data.name}</h3>
              <a href="${data.url}" target="_blank">
                <img src="./images/youtube.png" width=35 />
              </a>
            </div>
            <p style="font-size: 0.75rem; color: #475569; line-height: 1.6;">${data.desc}</p>
            <div style="border-top: 1px solid #e2e8f0; padding-top: 0.75rem; margin-top: 0.5rem;">
                <p style="font-size: 0.5625rem; font-family: var(--font-mono); color: var(--theme-500); font-weight: 700;">RECOMMENDED ARCHIVES</p>
                <p style="font-size: 0.75rem; font-weight: 600; color: #1e293b; margin-top: 0.25rem;">${data.archive}</p>
            </div>
            ${
              data.link
                ? `
            <div style="padding-top: 0.5rem; margin-top: 0.25rem;">
                <a href="${data.link}" target="_blank" rel="noopener noreferrer" style="display: inline-flex; align-items: center; gap: 0.5rem; font-size: 0.75rem; font-weight: 700; color: #dc2626; text-decoration: none; border-radius: 0.5rem; background: #fef2f2; padding: 0.5rem 0.75rem; border: none; transition: background-color 0.2s;">
                    <svg style="width: 1.25rem; height: 1.25rem; fill: currentColor; flex-shrink: 0;" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
                </a>
            </div>
            `
                : ""
            }
        </div>
    `;
  modal.classList.remove("hidden");
}

function closeLiverModal() {
  document.getElementById("liverModal").classList.add("hidden");
}

// 4. Lightbox Handlers
function openLightBox(src, title, desc) {
  document.getElementById("lightboxImg").src = src;
  document.getElementById("lightboxTitle").innerText = title;
  document.getElementById("lightboxDesc").innerText = desc;
  document.getElementById("lightboxModal").classList.remove("hidden");
}

function closeLightBox() {
  document.getElementById("lightboxModal").classList.add("hidden");
}

// 5. Diagnostic Game
const diagnosticList = [
  {
    name: "叶",
    tag: "ゲーマーズ 🔫",
    quote: "「向き、不向きよりも、ひたむきに」",
    desc: "超癒し系(？)男子。FPSからほんわか雑談まで…！",
  },
  {
    name: "不破湊",
    tag: "夜王国 🥂✨",
    quote: "「コンビニ行ってくるわ～！」",
    desc: "日常を一旦ステイして不破湊worldへLet's go!!",
  },
  {
    name: "ミラン・ケストレル",
    tag: "みたらし団 🦋⏳",
    quote: "「私たちは始まりを愛している。」",
    desc: "ビジュもお声もすこ～しだけ怪しい魔導士。彼ならではの怪しく不思議な世界観をとくとお楽しみください。",
  },
  {
    name: "甲斐田晴",
    tag: "VΔLZ 🌞",
    quote: "「ま、いっか」",
    desc: "彼の歌声は水より澄んでいる！透明な甲斐田が泣いていた__。",
  },
  {
    name: "月ノ美兎",
    tag: "一期生 🐰",
    quote: "「わたくしで隠さなきゃ」",
    desc: "委員長が教室で待っていますよ。さぁ、あなたも …… きりーつ、気を付け！",
  },
  {
    name: "勇気ちひろ",
    tag: "一期生 🎀💙",
    quote: "「みなさん こんばんちー」",
    desc: "貴女が卒業してから数年、元魔法少女の新人が出来ましたよ。",
  },
  {
    name: "える（ スノー・ホワイト・パラダイス・エルサント・フロウ・ワスレナ・ピュア・プリンセス・リーブル・ラブ・ハイデルン・ドコドコ・ヤッタゼ・ヴァルキュリア・パッション・アールヴ・ノエル・チャコボシ・エルアリア・フロージア・メイドイン・ブルーム・エル ）",
    tag: "一期生　🗼",
    quote: "「こんにち～えるえる～！！」",
    desc: "エルフの森が燃えてる様子を、一緒に見に行きましょう！",
  },
  {
    name: "モイラ",
    tag: "一期生 ﾓ",
    quote: "「駄目な女神を許してぇ(泣)」",
    desc: "ラックの助手席に乗ってみましょう。きっと素敵な運転をして下さいます。",
  },
  {
    name: "勇気ちひろ",
    tag: "一期生 🎀💙",
    quote: "「みなさん こんばんちー」",
    desc: "貴女が卒業してから数年、元魔法少女の新人が出来ましたよ。",
  },
  {
    name: "鈴鹿詩子",
    tag: "二期生 🎶",
    quote: "「恐怖心という感情がない」",
    desc: "彼女の深淵（ 色んな意味で ）を掘る（）勇気は有りますか？",
  },
  {
    name: "宇志海いちご",
    tag: "二期生 🍓",
    quote: "「スパゲッティーチャーハン」",
    desc: "元祖バーサーカーの力を、その目で見て思い知れ！",
  },
  {
    name: "渋谷ハジメ",
    tag: "一期生 🌱",
    quote: "「アジャラカモクレンにじさんじてけれっつのパー」",
    desc: "彼は火達磨になりながら、これからも進んでいく。",
  },
  {
    name: "家長むぎ",
    tag: "二期生 🌷",
    quote: "「知らない小道」",
    desc: "このコーヒーが冷めるまで、彼女と一緒に勉強してみませんか？",
  },
  {
    name: "夕陽リリ",
    tag: "二期生 🌆",
    quote: "「遠い未来に悲しませることより、今を楽しませることを考えなよ 」",
    desc: "何処かの未来で輝く彼女の虜になりましょう。",
  },
  {
    name: "伏見ガク",
    tag: "二期生 ✌️",
    quote: "「ピーッス！みんな、ライフ楽しんでる？」",
    desc: "彼はあなたと一緒にご飯を食べたいみたいですよ。いっせーのーせ、いただきます！",
  },
  {
    name: "剣持刀也",
    tag: "二期生 ⚔️",
    quote: "「まるでロリはロリじゃねぇーから」",
    desc: "虚空って素晴らしいと思いませんか？あなたの入信を心待ちにしております。",
  },
  {
    name: "ギルザレンIII世",
    tag: "二期生 🏰🌕",
    quote: "「永久！です！」",
    desc: "実は彼も人里離れた山奥出身です。配信しろ。",
  },
  {
    name: "赤羽葉子",
    tag: "ゲーマーズ 💀",
    quote: "「おはようこ～墓場からこんばね～」",
    desc: "とあるお山に彼女の話が有るそうです。本当に知りたいですか？",
  },
  {
    name: "魔界ノりりむ（ リリム・キスミー・ラブリーハート＝ロリータニア ）",
    tag: "ゲーマーズ 🍼",
    quote: "「来てる！来てる！…… 何が？」",
    desc: "良い女な彼女のポエムを見てみましょう！素敵な言葉遣いに、是非魅了されて下さい。",
  },
  {
    name: "葛葉（ アレクサンドル・ラグーザ ）",
    tag: "ゲーマーズ なし(🎲or🦇)",
    quote: "「俺、主人公になれたかな」",
    desc: "あなたも天気デッキ常用者ですか？閲覧してくれてｱﾘｶﾞﾄｳｺﾞｻﾞｲﾏｧｽ!",
  },
  {
    name: "轟京子",
    tag: "SEEDs一期生 🐐",
    quote: "「ゆっくり荒らしていきな！」",
    desc: "彼女のファッションデザインセンスは本物です。他の分野でもホンモノです。",
  },
  {
    name: "シスター・クレア",
    tag: "SEEDs一期生 🔔",
    quote: "「これ、当たり棒です。あげます。」",
    desc: "彼女がやりたい事してるだけってスタンス素敵ですよね。",
  },
  {
    name: "花畑チャイカ",
    tag: "SEEDs一期生 🌵",
    quote: "「話したい事話して何が悪いんだァ！」",
    desc: "欠ける想像も出来ないし、欠けてはいけない存在。公式番組は貰えない。",
  },
  {
    name: "社築",
    tag: "SEEDs一期生 🖥",
    quote: "「俺 結局音ゲーが好きなんだよな。」",
    desc: "オタク君見ってる ～～ ？君が苦戦してた曲、彼がフルコンしちゃいまぁす♡",
  },
  {
    name: "卯月コウ",
    tag: "SEEDs一期生 🌙",
    quote:
      "「お前らまだ社会人気分でいるのか？そんなんじゃ中学生やってけねえぞ」",
    desc: "にじさんじのエモいダークウェブに乗り込む覚悟はありますか？",
  },
  {
    name: "雨森小夜",
    tag: "SEEDs二期生 ☂️or☔️",
    quote: "「この配信は開始から60分経つと爆発します」",
    desc: "おかえりなさい！どうせなので、網走監獄へ面会に行きましょう。",
  },
];

function runDiagnostic() {
  const box = document.getElementById("diagnosticBox");
  box.innerHTML = `<p class="extracted-style-144">ANALYZING...</p>`;

  setTimeout(() => {
    const item =
      diagnosticList[Math.floor(Math.random() * diagnosticList.length)];
    box.innerHTML = `
                    <span class="extracted-style-145">${item.tag}</span>
                    <h4 class="extracted-style-146">${item.name}</h4>
                    <p class="extracted-style-147">${item.quote}</p>
                    <p class="extracted-style-148">${item.desc}</p>
                `;
  }, 300);
}

// 6. Message Board Submission
function handleMessageSubmit(e) {
  e.preventDefault();
  const sender =
    document.getElementById("senderName").value.trim() || "匿名オタク";
  const content = document.getElementById("messageContent").value.trim();

  if (!content) return;

  const list = document.getElementById("messagesList");
  const card = document.createElement("div");
  card.className = "message-card";
  card.innerHTML = `
                <div class="extracted-style-125">
                    <span class="extracted-style-149">@${escapeHtml(sender)}</span>
                    <span>Just now</span>
                </div>
                <p class="extracted-style-150">${escapeHtml(content)}</p>
            `;

  list.insertBefore(card, list.firstChild);

  const counter = document.getElementById("msgCount");
  const countNum = parseInt(counter.innerText) || 2;
  counter.innerText = `${countNum + 1} MSGS`;

  document.getElementById("senderName").value = "";
  document.getElementById("messageContent").value = "";

  showToast("メッセージを送信しました！");
}

function showToast(text) {
  const toast = document.getElementById("toast");
  document.getElementById("toastMsg").innerText = text;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}

function escapeHtml(str) {
  return str.replace(/[&<>"']/g, function (m) {
    return {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#039;",
    }[m];
  });
}

// HTML側のイベント属性を使わず、data-actionから操作を接続する。
document.addEventListener("click", (event) => {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  switch (target.dataset.action) {
    case "set-theme":
      setTheme(target.dataset.theme);
      break;
    case "toggle-liver-modal":
      toggleLiverModal(target.dataset.key);
      break;
    case "open-lightbox":
      openLightBox(
        target.dataset.src,
        target.dataset.title,
        target.dataset.description,
      );
      break;
    case "run-diagnostic":
      runDiagnostic();
      break;
    case "close-liver-modal":
      closeLiverModal();
      break;
    case "close-lightbox":
      closeLightBox();
      break;
    case "stop-propagation":
      event.stopPropagation();
      break;
  }
});

document.addEventListener("submit", (event) => {
  if (event.target.dataset.action === "message-submit") {
    handleMessageSubmit(event);
  }
});
