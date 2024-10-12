const horoscopes = {
    dima: [
        "Сьогодні ви відчуєте енергію та мотивацію для нових звершень. Це чудовий день для початку нового проекту.",
        "Ви зможете досягти успіху, якщо будете наполегливо працювати.",
        "Цей день подарує вам багато можливостей для творчого самовираження."
    ],
    sasha: [
        "Час зосередитись на фінансових питаннях. Можливо, вам надійдуть цікаві пропозиції або несподіваний прибуток.",
        "Фінансові питання будуть вирішуватися успішно, якщо ви будете обережними.",
        "Ваші інвестиції можуть дати несподівані результати."
    ],
    // Інші знаки зодіаку теж можна оновити подібним чином
};

function showHoroscope() {
    const zodiacSign = document.getElementById('zodiac-sign').value;

    if (zodiacSign) {
        const signName = document.getElementById('zodiac-sign').options[document.getElementById('zodiac-sign').selectedIndex].text;
        const horoscopeArray = horoscopes[zodiacSign];
        const randomIndex = Math.floor(Math.random() * horoscopeArray.length); // Випадковий індекс
        const horoscopeText = horoscopeArray[randomIndex]; // Вибираємо передбачення

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
