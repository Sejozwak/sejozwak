const videos = [
  {
    id: "eYh4OWPe_y8",
    title: "This Bug makes HOI4 UNPLAYABLE",
    date: "Apr 1, 2026",
    views: "16K",
    likes: "957",
    category: "HOI4",
    host: "i2",
  },
  {
    id: "JozdpFv06dI",
    title: "Secret African King in HOI4",
    date: "Mar 24, 2026",
    views: "11K",
    likes: "725",
    category: "HOI4",
    host: "i3",
  },
  {
    id: "vYz5I4uqkVs",
    title: "The Most Based Iran Run in HOI4",
    date: "Mar 22, 2026",
    views: "17K",
    likes: "951",
    category: "HOI4",
    host: "i3",
  },
  {
    id: "QvTZunvsEUE",
    title: "Nothing Ever Happens in Project Zomboid.",
    date: "Mar 1, 2026",
    views: "954",
    likes: "82",
    category: "Zomboid",
    host: "i2",
  },
  {
    id: "KoqMTbketvw",
    title: "You are Playing China WRONG",
    date: "Feb 25, 2026",
    views: "14K",
    likes: "818",
    category: "HOI4",
    host: "i4",
  },
  {
    id: "W7KmtBAnB7c",
    title: "Trolling everyone as Mengkukuo",
    date: "Feb 18, 2026",
    views: "13K",
    likes: "848",
    category: "HOI4",
    host: "i4",
  },
  {
    id: "6HVsrWEGMaI",
    title: "SECRET SURVIVAL BUNKER FOUND",
    date: "Feb 4, 2026",
    views: "851",
    likes: "85",
    category: "Zomboid",
    host: "i3",
  },
  {
    id: "Chz7HhRNCaM",
    title: "Infinite XP Exploit in HOI4",
    date: "Feb 1, 2026",
    views: "7.1K",
    likes: "464",
    category: "HOI4",
    host: "i4",
  },
  {
    id: "U8UoT227hCY",
    title: "NEW Infinite MANPOWER Exploit in HOI4",
    date: "Feb 1, 2026",
    views: "17K",
    likes: "961",
    category: "HOI4",
    host: "i2",
  },
  {
    id: "xZ4d0V2FsNc",
    title: "You can Recruit EVERYONE in Hearts of Iron 4",
    date: "Jan 28, 2026",
    views: "34K",
    likes: "2K",
    category: "HOI4",
    host: "i1",
  },
  {
    id: "lotU_k6eYJc",
    title: "FORAGING IS BROKEN!",
    date: "Jan 23, 2026",
    views: "2.1K",
    likes: "211",
    category: "Zomboid",
    host: "i1",
  },
  {
    id: "xTvKORkxDxg",
    title: "GTA San Andreas Facts That you Didn't Know",
    date: "Jan 5, 2026",
    views: "2.9K",
    likes: "320",
    category: "Other",
    host: "i1",
  },
];

const videoGrid = document.querySelector("#videoGrid");
const filterButtons = Array.from(document.querySelectorAll(".filter-button"));

function thumbnailUrl(video) {
  return `https://${video.host}.ytimg.com/vi/${video.id}/hqdefault.jpg`;
}

function videoUrl(video) {
  return `https://www.youtube.com/watch?v=${video.id}`;
}

function renderVideos(filter = "all") {
  const filteredVideos = filter === "all"
    ? videos
    : videos.filter((video) => video.category === filter);

  videoGrid.innerHTML = filteredVideos.map((video) => `
    <a class="video-card" href="${videoUrl(video)}" target="_blank" rel="noopener" aria-label="Watch ${video.title}">
      <figure>
        <img src="${thumbnailUrl(video)}" alt="Thumbnail for ${video.title}" loading="lazy">
        <span class="tag">${video.category}</span>
      </figure>
      <div class="video-card-content">
        <h3>${video.title}</h3>
        <div class="meta-line">
          <span><i data-lucide="calendar-days" aria-hidden="true"></i>${video.date}</span>
          <span><i data-lucide="eye" aria-hidden="true"></i>${video.views}</span>
          <span><i data-lucide="thumbs-up" aria-hidden="true"></i>${video.likes}</span>
        </div>
      </div>
    </a>
  `).join("");

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function hydrateIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const filter = button.dataset.filter;

    filterButtons.forEach((currentButton) => {
      const isActive = currentButton === button;
      currentButton.classList.toggle("active", isActive);
      currentButton.setAttribute("aria-selected", String(isActive));
    });

    renderVideos(filter);
  });
});

renderVideos();
hydrateIcons();
window.addEventListener("load", hydrateIcons);
