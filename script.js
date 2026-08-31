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
    tag: "一期生 🗼",
    quote: "「こんにち～えるえる～！！」",
    desc: "エルフの森が燃えてる様子を、一緒に見に行きましょう！",
  },
  {
    name: "モイラ",
    tag: "一期生 ﾓ",
    quote: "「駄目な女神を許してぇ(泣)」",
    desc: "トラックの助手席に乗ってみましょう。きっと素敵な運転をして下さいます。",
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
    quote: "「知らない小道」(絶賛連載中♪)",
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
    desc: "あなたも虚空って素晴らしいと思いませんか？Don't forget. We all came from there.あなたの入信を心待ちにしております。",
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
    desc: "とあるお山に彼女の話がひっそりと佇んでいるとか？いないとか。本当に知りたいですか？",
  },
  {
    name: "魔界ノりりむ（ リリム・キスミー・ラブリーハート＝ロリータニア ）",
    tag: "ゲーマーズ 🍼",
    quote: "「来てる！来てる！…… 何が？」",
    desc: "良い女な彼女のポエムを見てみましょう！素敵な言葉遣いに、是非魅了されて下さい。",
  },
  {
    name: "叶",
    tag: "ゲーマーズ 🔫",
    quote: "「向き、不向きよりも、ひたむきに」",
    desc: "超癒し系(？)男子。FPSからほんわか雑談まで…！",
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
    name: "花畑チャイカ( チャイカ・ブライン )",
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
  {
    name: "竜胆尊",
    tag: "SEEDs二期生 🍶⚜️",
    quote: "「飲まんという選択肢があるのか？」",
    desc: "彼女と一緒に晩酌はいかがですか？あなたが酔い潰れるのが先でしょうけれど。",
  },
  {
    name: "町田ちま",
    tag: "SEEDs二期生 🐹",
    quote: "「歌ってるときが一番生きてる感じする。やっぱり歌が好きだなぁ。」",
    desc: "化け物（）級の歌声は必聴！きぼうのはな 繋いだ絆を ♪",
  },
  {
    name: "ジョー・力一",
    tag: "SEEDs二期生 🤡or🎈",
    quote:
      "「でも、結局は。ジョー・力一というパフォーマーは一人であったと。一人から始まったんだ。 」",
    desc: "天啓に振り回された彼の無限変化に、此方もまた振り回されましょう。そこには一筋の笑顔が見えるはずです。",
  },
  {
    name: "矢車りね",
    tag: "SEEDs二期生 🌽or🏹🚗",
    quote: "「Liver yo smart phone」",
    desc: "小学生らしからぬ発言を目の当たりにしましょう。ラップも是非聞いて下さいな。",
  },
  {
    name: "黒井しば",
    tag: "SEEDs二期生 🐕🐾",
    quote:
      "「しばはね、自分の意志を持って、それを表に出して表現出来る人が好きだよ」",
    desc: "犬生(わんせい)山あり谷あり、喋れるシングルタスク犬。動物の知識が深まるよ。",
  },
  {
    name: "夢月ロア",
    tag: "みれロア(うさちゃんクラブ) 🌖",
    quote: "「天才かもしれん！」",
    desc: "おかえりなさい、お疲れ様！現世や魔界で待ちわびた奴らと、一緒に配信を見よう。",
  },
  {
    name: "語部紡",
    tag: "はるみやつむ？ 🧂📘",
    quote: "「しんでいますが、元気です」",
    desc: "現世におかえりなさい。またいつかのお盆に会いましょう。",
  },
  {
    name: "アンジュ・カトリーナ",
    tag: "さんばか ⚖️",
    quote: "「アンジュそこ！」",
    desc: "どんな壁にも体当たりする、根気強い彼女の勇姿を見に行きましょう。彼氏募集中らしいですよ。",
  },
  {
    name: "戌亥とこ",
    tag: "さんばか 🍹",
    quote: "「戌亥ここ！」",
    desc: "地獄弁が心地良いケルベロス。彼女のお店でメロンジュースでもどうですか？",
  },
  {
    name: "リゼ・ヘルエスタ",
    tag: "さんばか 👑",
    quote: "「リゼひよこ！(?)」",
    desc: "彼女のクリスタルボイスおすすめです。聞いていると……あれ、空から雨が。",
  },
  {
    name: "三枝明那",
    tag: "紅ズワイガニ 🌶",
    quote: "「ねむねむにゃんこなのだ…」",
    desc: "彼の歌は一度でも聞いておくべき。ショタコンには目を瞑りましょう。",
  },
  {
    name: "鈴原るる",
    tag: "まひるる 🎨",
    quote: "「負けたくない、勝ちたいんです！」",
    desc: "おかえりなさい！不屈の精神でゲームを続ける格好良い姿を見に行きましょう。",
  },
  {
    name: "レヴィ・エリファ",
    tag: "LvEx 🔲",
    quote: "「こんにちファって言え！」",
    desc: "彼女の歌唱力は必聴。本当に１３歳か？",
  },
  {
    name: "ニュイ・ソシエール",
    tag: "マジョマリティ(乳山) 🎃",
    quote: "「こんニュイーでーす」",
    desc: "皆で競馬配信を見よう！馬のお姉さんですから。",
  },
  {
    name: "夜見れな",
    tag: "SMC組 🎩🐤",
    quote: "「男の子出ちゃったね 〜」",
    desc: "早く配信を見に行きましょう！じゃないと、あなたがアイドルマジシャンに消されちゃうかも？！",
  },
  {
    name: "加賀美ハヤト",
    tag: "SMC組 🏢",
    quote: "「45分がデッドエンドラインになりますので」",
    desc: "彼は社長として、音楽人として、少年として、貴方を無自覚に虜にしているでしょう。",
  },
  {
    name: "黛灰",
    tag: "ぶるーず 💻💙",
    quote: "「どうしてそっちがリアルで、こっちがバーチャルなの？」",
    desc: "またねって言わせてよ！無理して帰ってくんな！うるせぇ！！（錯乱）",
  },
  {
    name: "相羽ういは",
    tag: "ぶるーず 🍮💎",
    quote: "「なんで皆動揺してるの……？」",
    desc: "彼女がステージの上で輝く姿を、この目で見に行きましょう。怪力の少女とは思えない程華やかですから。",
  },
  {
    name: "エリー・コニファー",
    tag: "ぽさんけ 🌲",
    quote: "「なるほど、焼き払いましょう」",
    desc: "彼女のふわふわボイスに癒されましょう！",
  },
  {
    name: "早瀬走",
    tag: "チューリップ組 🏃‍♀️💨or🚴‍♀️",
    quote: "「それはそう、早瀬走」",
    desc: "ボケとツッコミの二刀流！そんな彼女のあだ名は走るは英語でrun!ということでらんねーちゃん。アレ、どこかできいたような。",
  },
  {
    name: "天宮こころ",
    tag: "ぽさんけ 🎐",
    quote: "「にじさんじ所属”新人”バーチャルライバーの天宮こころです～」",
    desc: "いつまでも新人(気取り)の巫女さん！天宮…いいね。",
  },
  {
    name: "シェリン・バーガンディ",
    tag: "チューリップ組 🧐",
    quote:
      "「僕が探偵事務所を開いたその時から僕は名探偵なんだ。誰がなんと言おうと僕は名探偵なんだ」",
    desc: "自認は誠実で真面目で美しくかっこよく優しく…らしい。お前は迷探偵だ！！",
  },
  {
    name: "フミ",
    tag: "織姫星 🔖",
    quote: "「これは終わりの始まり、エンドandスタート」",
    desc: "50年ほど引きこもっていた神様。ピュアっピュアな時代遅れとは…？",
  },
  {
    name: "星川サラ",
    tag: "織姫星 🌟",
    quote: "「頭おかしいのはみんなだよ！」",
    desc: "見た目の通りの元気いっぱいな陽キャガール。恋の押し売り、受け取りますよね？？？",
  },
  {
    name: "山神カルタ",
    tag: "織姫星 🎴",
    quote: "「脊髄ハイム」",
    desc: "見習い烏天狗、心なしか奇行が多いような。",
  },
  {
    name: "魔使マオ",
    tag: "赤の組織 💥",
    quote: "「博識キャラで売ってるんでやめてください！」",
    desc: "自認博識他認ロリ！！貴方ももう彼女のとりこ？",
  },
  {
    name: "ましろ爻",
    tag: "まななつ 🧷",
    quote:
      "「たまにさ、頭から真横に針ぶっ刺したいなって思うことない？僕しょっちゅうあるんだけど。」",
    desc: "夏の暑い日には彼の配信を観ましょう！眠れなくなるかもしれませんけどね？",
  },
  {
    name: "イブラヒム",
    tag: "メイフ 💧",
    quote: "「伝説、覗いてく？」",
    desc: "元石油王と思ったらダウナーギャル！？彼のかわいいところもかっこいいところも見逃すな！",
  },
  {
    name: "不破湊",
    tag: "夜王国 🥂✨",
    quote: "「コンビニ行ってくるわ～！」",
    desc: "日常を一旦ステイして不破湊worldへLet's go!!",
  },
  {
    name: "長尾景",
    tag: "VΔLZ ☯",
    quote: "「必ずしも自分の価値観は正解じゃない」",
    desc: "ノンデリ！！なくせにオタクの求めてることがわかっちゃう彼。いぢわるな鬼は貴方だよ。",
  },
  {
    name: "弦月藤士郎",
    tag: "VΔLZ 🎻🛵",
    quote: "「やらかし天満宮」",
    desc: "何にでも全力を注げる器用な努力家。貴方も脳死の弦月に染められてみては？",
  },
  {
    name: "甲斐田晴",
    tag: "VΔLZ 🌞",
    quote: "「ま、いっか」",
    desc: "彼の歌声は水より澄んでいる！透明な甲斐田が泣いていた__。",
  },
  {
    name: "周央サンゴ",
    tag: "世怜音演劇同好会 💞🦩",
    quote: "「光のマシュマロがあるところに闇のオタク現れる」",
    desc: "ネットミームに染まりましょう！彼女が居なかったら「ちいさないのち」も「にじたうん」も…？",
  },
  {
    name: "ローレン・イロアス",
    tag: "エデン組 🗝💸",
    quote: "「常に時間とやらに追われてる”主人公”ってとこ、っと」",
    desc: "超の付くヘビースモーカー。彼、東京国際フォーラムで吸ったとか。",
  },
  {
    name: "レイン・パターソン",
    tag: "エデン組 ❤️‍🔥",
    quote: "「「推しは推せるうちに推せ」というようにパチンコはあるうちに打て」",
    desc: "そのかわいらしい見た目にそぐわぬパチンカ…。それで強くて美容好きは罪では無くて？？",
  },
  {
    name: "先斗寧",
    tag: "Ranunculus 🫐",
    quote:
      "「このサーバーのお婆ちゃんキャラは私の物よ！みんなのこと孫って呼んでんだから！」",
    desc: "流行りにのったりのらなかったり、元気いっぱいビジュはなまる！テンションお高いよ。",
  },
  {
    name: "壱百満天原サロメ",
    tag: "(一人デビュー) 💯🦂",
    quote:
      "「生き残るためには、進むしかございません。わたくし、おバイオ7でそれを学びましたわ。」",
    desc: "お嬢様になるべくしてあなたのもとにも現れます。彼女に百万点の笑顔にしてもらいましょう♪",
  },
  {
    name: "四季凪アキラ",
    tag: "VOLTACTION 📄",
    quote: "「この世は無常」",
    desc: "ちょ～っとネタ枠よりな常識人(?)彼の展開するわかりやすくも複雑で面白い世界へいらっしゃいませ。",
  },
  {
    name: "石神のぞみ",
    tag: "Idios ❤️‍🩹",
    quote: "「死んだらどうする！」",
    desc: "や～い厨二病！貴方はなんでやたらとビジュがいいんだい？",
  },
  {
    name: "佐伯イッテツ",
    tag: "Oriens(MECHATU-A) 🤝",
    quote: "「俺汚いところも含めてインターネット好きだから。マジで」",
    desc: "インターネットを愛しインターネットに愛された男。彼の語る落語で貴方の心を最高速度でぶち抜いたる！！",
  },
  {
    name: "星導ショウ",
    tag: "Dytica(MECHATU-A) 🐙🌟",
    quote: "「I’m 無能, you know？」",
    desc: "アレ、この見た目はたこ…？いいや、彼はヒーローです。気づいたときには宇宙の底まで引き込まr…",
  },
  {
    name: "ミラン・ケストレル",
    tag: "みたらし団 🦋⏳",
    quote: "「私たちは始まりを愛している。」",
    desc: "ビジュもお声もすこ～しだけ怪しい魔導士。彼ならではの怪しく不思議な世界観をとくとお楽しみください。",
  },
  {
    name: "榊ネス",
    tag: "3SKM 🫖🌿",
    quote:
      "「別にパチンコ店が多いからってそのホールがマイホールになるとは限らなくて」",
    desc: "清楚な執事？そんなわけがなくて…。歌声を聴いたらわかりますよ。榊神だし～？",
  },
  {
    name: "ルンルン",
    tag: "いずれ菖蒲か杜若 🥨🍚",
    quote:
      "「ちょま思うんですよね。人生というものの余白について考えることがあるんですよ」",
    desc: "白いけも～の！独特で素敵な言葉づかいでもっと前に行っちゃうんだよね！",
  },
  {
    name: "渚トラウト",
    tag: "Speciale 🐟🍴",
    quote: "「かわいこぶってんじゃねぇんだよ、可愛いんだよ25歳が！」",
    desc: "怪しいお兄さん…なわけなくて！さわやかでおかしないいお兄さんですよ。",
  },
  {
    name: "一橋綾人",
    tag: "えりぶり 📚🗣",
    quote:
      "「価値のあることは、結論が出ることより、思考が止まらずに動いていくこと」",
    desc: "ラーメンに心奪われしスーパーエリート！！そんな彼はちゃんと精神科医なのですよ。",
  },
  {
    name: "猫屋敷美紅",
    tag: "今宵、××と夢を見る。 	♫💐",
    quote: "「おろしぽぽれでぃにゃんにゃん」",
    desc: "猫又…なのに猫アレルギー！？お花とミュージカルが大好きな彼女のキーボードをとくとお楽しみください。",
  },
  {
    name: "篠宮ゆの",
    tag: "すぷれあ 	💍📘",
    quote: "「立てば芍薬座れば牡丹歩く姿は毒チワワ」",
    desc: "すぷれあの副リーダーは腹黒チワワ…？彼がコーレスが欲しそうにこちらを見てますよ。しのみやに～？",
  },
  {
    name: "白砂あやね",
    tag: "うみゃみー 🏖️🫶",
    quote: "「お腹が空いたよー！やーねー」",
    desc: "彼女に沢山のご飯をあげましょう！イラストを描く元気が湧いてくるみたいですっ。",
  },
  {
    name: "水面まどか",
    tag: "うみゃみー 🪟🫶",
    quote: "「きゅきゅー！水をよこせ！水をやるとハッピーギャルに育つぞ！」",
    desc: "大変！まどちゃに水をあげてっ。復活して自由に創作してもらわなきゃ！！",
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

const reportModal = document.getElementById("reportModal");
const reportModalClose = document.getElementById("reportModalClose");
const reportModalImage = document.getElementById("reportModalImage");
const reportModalTitle = document.getElementById("reportModalTitle");
const reportModalDate = document.getElementById("reportModalDate");
const reportModalType = document.getElementById("reportModalType");
const reportModalDescription = document.getElementById(
  "reportModalDescription",
);

document.querySelectorAll('[data-action="open-report"]').forEach((card) => {
  card.addEventListener("click", () => {
    reportModalTitle.textContent = card.dataset.title;
    reportModalDate.textContent = card.dataset.date;
    reportModalType.textContent = card.dataset.type;
    reportModalDescription.textContent = card.dataset.description;
    reportModalImage.src = card.dataset.image;
    reportModalImage.alt = card.dataset.title;
    reportModal.classList.add("active");
  });
});

reportModalClose.addEventListener("click", () => {
  reportModal.classList.remove("active");
});

reportModal.addEventListener("click", (event) => {
  if (event.target === reportModal) {
    reportModal.classList.remove("active");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    reportModal.classList.remove("active");
  }
});

// ページトップに戻るボタンの処理
document.addEventListener("DOMContentLoaded", function () {
  // 1. 用意した画像ファイルのパス（ご自身の画像パスに変更してください）
  const topImages = [
    "./images/nj34top.png",
    "./images/toyatop.png",
    "./images/gakutop.png",
  ];

  const pageTopBtn = document.getElementById("pageTopBtn");
  const pageTopImg = document.getElementById("pageTopImg");

  if (!pageTopBtn || !pageTopImg) return;

  // ランダムに画像を選択してセット
  function setRandomImage() {
    const randomIndex = Math.floor(Math.random() * topImages.length);
    pageTopImg.src = topImages[randomIndex];
  }

  setRandomImage();

  let isLoaded = false; // ローディング完了フラグ

  // ボタンの表示/非表示のチェック関数
  function checkScroll() {
    // ページ読み込み完了前、またはスクロール量が200px未満の場合は表示しない
    if (!isLoaded) return;

    if (window.scrollY > 200) {
      pageTopBtn.classList.add("is-visible");
    } else {
      pageTopBtn.classList.remove("is-visible");
    }
  }

  // ページ内の画像やリソースがすべて読み込まれたらボタン有効化
  window.addEventListener("load", function () {
    // ローディングアニメーション終了までのミリ秒（例: 500ms後に有効化）
    setTimeout(function () {
      isLoaded = true;
      checkScroll();
    }, 500);
  });

  // スクロール時にチェック
  window.addEventListener("scroll", checkScroll);

  // クリック時にページ最上部へスムーズ移動
  pageTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});
