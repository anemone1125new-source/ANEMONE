
/* ページ切り替え */

/* ページを切り替えず、目的の場所までスクロール */
function showPage(pageName) {
    // すべてのページを表示する
    document.querySelectorAll(".page").forEach(function (page) {
        page.classList.remove("hidden");
    });

    // 指定した場所まで滑らかに移動する
    const targetPage = document.getElementById(pageName);

    if (targetPage) {
        targetPage.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}



/* メンバー情報 */
const members = [
    {
        name: "涼海そう",
        role: "好きなもの：シャチ、ウーパールーパー",
        description:
            "ひとこと：役の心情を、物語に込められた想いを、できるだけまっすぐに届けたいです。        \n そして、観てくださった方に「来てよかった」と思ってもらえる、心に残る舞台をつくります。"
        
    },
    {
        name: "猫継みねと",
        role: "好きなもの：ポケモン、かわいいもの、UFOキャッチャー",
        description:
            "舞台や物語に魅了され、毎日新しい発見をしています。\n自分の沼に引きずり込んでやるます。"
    },
    {
        name: "？",
        role: "好きなもの：？",
        description:
            "ひとこと：とりま頑張る"
    },
    {
        name: "仁バブエ",
        role: "好きなもの：たくあん",
        description:
            "仲間と一緒に作品を作り、お客様に楽しんでもらえる舞台を目指しています。"
    },
    {
        name: "絢世　綴　",
        role: "好きなもの：ぬいぐるみは生き物です。",
        description:
            "あやせ つづりです！\nそれぞれの絢が重なる世界を、物語として綴っていきたいです。"
    },
    {
        name: "明　てゐ",
        role: "好きなもの：ウサギ 冬 歌",
        description:
            "あきら ていと申します。\n皆さんに観ていただいて、どこか一言でも心に残せたら、僕はとても喜ばしいです。"
    },
    {
        name: "星園　しおり",
        role: "好きなもの：ジンベイザメ、星、海、青色系、辛いもの",
        description:
            "ほしぞのしおりと申します！\n役の感情を真っ直ぐに考えて演じます。どうぞよろしくお願いします！"
    },
    {
        name: "藤谷　翠",
        role: "好きなもの：さつまいも",
        description:
            "ふじたにすいと申します。\n少しでも印象に残るような演技を頑張ります。"
    },
    {
        name: "田乃　颯",
        role: "好きなもの：ついったー",
        description:
            "人生楽しすぎる"
    },
    {
        name: "佐倉　笑離",
        role: "好きなもの：たぬき、アライグマ、あひるのぺっくる",
        description:
            "演劇は好きで楽しいけど、上手いわけではないので、皆さんが観れるような役作りがんばります"
    },
    {
        name: "桃音",
        role: "好きなもの：可愛いものとアイドル",
        description:
            "　　たくさんの感動を提供する演者を目指します!!　　"
    },
    {
        name: "猪瀬　悠良",
        role: "好きなもの：",
        description:
            "　　　　　"
    }
];

let currentIndex = 0;


/* HTMLの読み込み完了後に実行 */
document.addEventListener("DOMContentLoaded", function () {

    const avatars = document.querySelectorAll(".avatar");
    const nameElement = document.getElementById("member-name");
    const roleElement = document.getElementById("member-role");
    const descriptionElement =
        document.getElementById("member-description");
    const countElement = document.getElementById("member-count");

    const prevButton = document.getElementById("prev-member");
    const nextButton = document.getElementById("next-member");

    /* メンバーのプロフィールを更新 */
    function showMember(index) {
        currentIndex =
            (index + members.length) % members.length;

        const member = members[currentIndex];

        nameElement.textContent = member.name;
        roleElement.textContent = member.role;
        descriptionElement.textContent = member.description;

        countElement.textContent =
            `${currentIndex + 1} / ${members.length}`;

        avatars.forEach(function (avatar, i) {
            avatar.classList.toggle("active", i === currentIndex);
        });
    }

    /* アイコンをクリックしたとき */
    avatars.forEach(function (avatar) {
        avatar.addEventListener("click", function () {
            showMember(Number(this.dataset.index));
        });
    });

    /* 前のメンバー */
    prevButton.addEventListener("click", function () {
        showMember(currentIndex - 1);
    });

    /* 次のメンバー */
    nextButton.addEventListener("click", function () {
        showMember(currentIndex + 1);
    });

    /* 初期表示 */
    showMember(0);

});
const container = document.getElementById("petals");

for(let i = 0; i < 40; i++){
    const petal = document.createElement("div");

    petal.classList.add("petal");

    petal.style.left = Math.random() * 100 + "vw";
    petal.style.animationDuration = (5 + Math.random() * 10) + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";

    container.appendChild(petal);
}
