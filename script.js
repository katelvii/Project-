const horoscopes = {
    aries: "Сьогодні ви відчуєте енергію та мотивацію для нових звершень. Це чудовий день для початку нового проекту.",
    taurus: "Час зосередитись на фінансових питаннях. Можливо, вам надійдуть цікаві пропозиції або несподіваний прибуток.",
    gemini: "Ви можете знайти нові цікаві знайомства або ідеї. Спілкування буде ключовим фактором успіху сьогодні.",
    cancer: "День буде наповнений гармонією в сімейних справах. Приділіть час рідним та близьким.",
    leo: "Сьогодні ви будете у центрі уваги. Ваша харизма допоможе вам досягти поставлених цілей.",
    virgo: "Це ідеальний час для аналізу та планування. Ваші організаційні навички будуть на висоті.",
    libra: "Спокій та врівноваженість допоможуть вам вирішити будь-які проблеми. Не спішіть робити висновки.",
    scorpio: "Ваша інтуїція сьогодні буде дуже сильною. Прислухайтесь до внутрішнього голосу.",
    sagittarius: "Це чудовий день для подорожей або відкриття чогось нового. Ваш дух пригод буде надзвичайно активним.",
    capricorn: "Ви будете зосереджені на кар'єрних питаннях. Можливо, сьогодні ви отримаєте важливу новину.",
    aquarius: "Ідеальний день для творчості. Сьогодні у вас буде багато нових ідей та натхнення.",
    pisces: "Це чудовий час для саморефлексії та духовних практик. Приділіть увагу власному внутрішньому світу."
};

function showHoroscope() {
    const zodiacSign = document.getElementById('zodiac-sign').value;
    
    if (zodiacSign) {
        const signName = document.getElementById('zodiac-sign').options[document.getElementById('zodiac-sign').selectedIndex].text;
        const horoscopeText = horoscopes[zodiacSign];

        document.getElementById('sign-name').textContent = signName;
        document.getElementById('horoscope-text').textContent = horoscopeText;
        
        document.getElementById('zodiac-selector').classList.add('hidden');
        document.getElementById('horoscope-result').classList.remove('hidden');
    } else {
        alert("Будь ласка, оберіть свій знак зодіаку.");
    }
}

function resetPage() {
    document.getElementById('zodiac-sign').value = "";
    document.getElementById('horoscope-result').classList.add('hidden');
    document.getElementById('zodiac-selector').classList.remove('hidden');
}
