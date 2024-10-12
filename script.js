const horoscopes = {
    dima: "Сьогодні ви відчуєте енергію та мотивацію для нових звершень. Це чудовий день для початку нового проекту.",
    sasha: "Час зосередитись на фінансових питаннях. Можливо, вам надійдуть цікаві пропозиції або несподіваний прибуток.",
    roma: "Ви можете знайти нові цікаві знайомства або ідеї. Спілкування буде ключовим фактором успіху сьогодні.",
    matviy: "День буде наповнений гармонією в сімейних справах. Приділіть час рідним та близьким.",
    andriy: "Сьогодні ви будете у центрі уваги. Ваша харизма допоможе вам досягти поставлених цілей.",
    danya: "Це ідеальний час для аналізу та планування. Ваші організаційні навички будуть на висоті.",
    zahar: "Спокій та врівноваженість допоможуть вам вирішити будь-які проблеми. Не спішіть робити висновки.",
    oksana: "Ваша інтуїція сьогодні буде дуже сильною. Прислухайтесь до внутрішнього голосу.",
    volodimir: "Це чудовий день для подорожей або відкриття чогось нового. Ваш дух пригод буде надзвичайно активним.",
    katia: "Гроші однаково важливі й для тих, у кого вони є, і для тих, у кого їх немає.",
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
