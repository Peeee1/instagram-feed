async function loadGallery() {
    const container = document.getElementById("instagram-gallery");

    try {
        const response = await fetch("feed.json");

        if (!response.ok) {
            throw new Error("feed.json を読み込めません");
        }

        const posts = await response.json();

        if (!posts.length) {
            container.innerHTML = "<p>表示できる投稿がありません。</p>";
            return;
        }

        let html = "";

        posts.forEach(post => {
            html += `
                <a class="ig-item" href="${post.url}" target="_blank" rel="noopener noreferrer">
                    <img src="${post.image}" alt="">
                </a>
            `;
        });

        container.innerHTML = html;

    } catch (error) {
        console.error(error);

        container.innerHTML =
            `<p>Instagramの投稿を取得できませんでした。</p>`;
    }
}

loadGallery();
