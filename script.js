// Namuna e'lonlar ma'lumoti
const announcements = [
    {
        id: 1,
        title: "Yangi 3 xonali kvartira",
        price: "85 000 000 so'm",
        description: "Yangi qurilgan binoda, 65 m², 3-xonali kvartira. Markaziy issiqlik, lift, yangi remont. Manzil: Yunusobod tumani.",
        category: "uy",
        date: "12.10.2023",
        views: 124
    },
    {
        id: 2,
        title: "Chevrolet Nexia R3",
        price: "125 000 000 so'm",
        description: "2022 yil, 1.5 L, avtomat karobka, abs, konditsioner, orqa kamera. 30 000 km yurgan. Bitta egasi.",
        category: "transport",
        date: "11.10.2023",
        views: 98
    },
    {
        id: 3,
        title: "iPhone 13 Pro Max",
        price: "8 500 000 so'm",
        description: "128 GB, kumush rang, 1 yil ishlatilgan, barcha aksessuarlar bilan, chet elka olib kelingan. Zafar ismli sotuvchi.",
        category: "elektronika",
        date: "10.10.2023",
        views: 156
    },
    {
        id: 4,
        title: "Erkaklar kiyimi to'plami",
        price: "450 000 so'm",
        description: "Yevropa sifat, yangi, hech qachon kiyilmagan. 3 ta ko'ylak, 2 ta shim, 1 ta kostyum. O'lcham M.",
        category: "kiyim",
        date: "09.10.2023",
        views: 76
    },
    {
        id: 5,
        title: "Samarqand mehmonxonasi",
        price: "350 000 so'm",
        description: "Samarqand markazida yangi ochilgan mehmonxona. 4 yulduzli, hamma qulayliklar mavjud. Bir kecha narxi.",
        category: "mehmonxona",
        date: "08.10.2023",
        views: 132
    },
    {
        id: 6,
        title: "Futbol to'plari va formalar",
        price: "200 000 so'm",
        description: "Adidas va Nike firmasining yangi futbol to'plari va formalari. Barcha o'lchamdagi formalar mavjud.",
        category: "sport",
        date: "07.10.2023",
        views: 54
    }
];

// DOM elementlari
const announcementList = document.getElementById('announcementList');
const loadMoreBtn = document.getElementById('loadMoreBtn');

// E'lonlarni ekranga chiqarish
function displayAnnouncements(announcementsToShow) {
    announcementList.innerHTML = '';
    
    announcementsToShow.forEach(announcement => {
        const card = document.createElement('div');
        card.className = 'announcement-card';
        
        card.innerHTML = `
            <div class="announcement-image">
                <i class="fas fa-image fa-3x"></i>
            </div>
            <div class="announcement-content">
                <h3 class="announcement-title">${announcement.title}</h3>
                <div class="announcement-price">${announcement.price}</div>
                <p class="announcement-description">${announcement.description}</p>
                <div class="announcement-meta">
                    <span>${announcement.date}</span>
                    <span><i class="fas fa-eye"></i> ${announcement.views}</span>
                </div>
            </div>
        `;
        
        announcementList.appendChild(card);
    });
}

// Dastlabki e'lonlarni ko'rsatish
displayAnnouncements(announcements);

// Ko'proq yuklash tugmasi
loadMoreBtn.addEventListener('click', () => {
    // Bu yerda keyingi e'lonlarni yuklash logikasi bo'ladi
    alert("Ko'proq e'lonlar yuklanmoqda...");
});

// Tilni o'zgartirish
const langButtons = document.querySelectorAll('.lang-btn');
langButtons.forEach(button => {
    button.addEventListener('click', () => {
        langButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        // Tilni o'zgartirish logikasi
        alert(`Til ${button.textContent} ga o'zgartirildi`);
    });
});

// Kategoriyalarni filtrlash
const categoryItems = document.querySelectorAll('.category-item');
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.querySelector('h3').textContent;
        // Filtrlash logikasi
        alert(`${category} kategoriyasi bo'yicha filtrlash`);
    });
});

// Qidiruv funksiyasi
const searchBox = document.querySelector('.search-box input');
const searchButton = document.querySelector('.search-box button');

searchButton.addEventListener('click', () => {
    performSearch(searchBox.value);
});

searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch(searchBox.value);
    }
});

function performSearch(query) {
    if (query.trim() === '') {
        displayAnnouncements(announcements);
        return;
    }
    
    const filteredAnnouncements = announcements.filter(announcement => 
        announcement.title.toLowerCase().includes(query.toLowerCase()) ||
        announcement.description.toLowerCase().includes(query.toLowerCase())
    );
    
    displayAnnouncements(filteredAnnouncements);
}

// Filtrlash funksiyasi
const filterButton = document.querySelector('.btn-filter');
filterButton.addEventListener('click', () => {
    const categorySelect = document.querySelector('.filters select:first-child');
    const citySelect = document.querySelector('.filters select:nth-child(2)');
    const priceFrom = document.querySelector('.filters input:nth-child(3)');
    const priceTo = document.querySelector('.filters input:nth-child(4)');
    
    // Bu yerda haqiqiy filtrlash logikasi bo'ladi
    alert(`Filtrlash: ${categorySelect.value}, ${citySelect.value}, ${priceFrom.value}-${priceTo.value}`);
});