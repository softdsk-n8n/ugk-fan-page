// UGK Fan Landing — i18n translations
// Keys match data-i18n attributes in components

export type Lang = "ru" | "en";

export const t: Record<Lang, Record<string, string>> = {
  ru: {
    // Nav
    "nav.about": "О группе",
    "nav.members": "Участники",
    "nav.discography": "Дискография",
    "nav.tracks": "Треки",
    "nav.timeline": "Хронология",
    "nav.legacy": "Наследие",
    "nav.gallery": "Галерея",
    "nav.lang": "EN",

    // Hero
    "hero.tag": "[ EST. 1992 / PORT ARTHUR, TX ]",
    "hero.title": "ПОДЗЕМНЫЕ\nКОРОЛИ",
    "hero.subtitle": "Порт-Артур, Техас. Два голоса. Одна легенда.",
    "hero.img.alt": "UGK — Bun B и Pimp C, легендарный дуэт из Порт-Артура, Техас",
    "hero.scroll": "/// SCROLL ///",

    // Intro
    "intro.heading": "/// UGK ///",
    "intro.p1": "Underground Kingz — хип-хоп дуэт из Порт-Артура, Техас, сформированный в 1992 году. Bun B и Pimp C создали фундамент грязного юга: медленные, тяжёлые биты, бас, пропитанный сиропом, и лирика улиц, которую цитировали от Scarface до Jay-Z.",
    "intro.p2": "Они не искали мейнстрим — мейнстрим пришёл к ним. «Ridin' Dirty» 1996 года до сих пор считается одним из величайших южных альбомов всех времён.",

    // Members
    "members.tag": "< TWO KINGS / ONE CROWN >",
    "members.bunb.realname": "Бернард Фримен",
    "members.bunb.role": "MC / Визуальный архитектор дуэта",
    "members.bunb.alt": "Bun B — Бернард Фримен, MC и визионер UGK",
    "members.bunb.bio": "Голос UGK — глубокий, авторитетный, размеренный. После ухода Pimp C продолжил сольную карьеру и стал преподавать хип-хоп в Университете Райса. Активист, наставник, живая легенда Порт-Артура.",
    "members.pimpc.realname": "Чад Батлер",
    "members.pimpc.role": "Продюсер / MC / Душа звучания",
    "members.pimpc.alt": "Pimp C — Чад Батлер, продюсер и архитектор звука UGK",
    "members.pimpc.bio": "Архитектор звука UGK. Создал фирменный «кантри-рэп» стиль: медленный грув, хьюстонский бас, вокал с хьюстонским акцентом. «Sweet James Jones» — его альтер-эго, символ хьюстонской ночи. Ушёл в 2007, но его влияние звучит в каждом южном треке.",

    // Discography
    "discography.label": "[ ДИСКОГРАФИЯ / 6 АЛЬБОМОВ / 1992—2009 ]",
    "discography.albums.0.note": "Дебют. Грубый, нефильтрованный Порт-Артур. «Pocket Full of Stones» — гимн улиц, который перепел Kanye.",
    "discography.albums.1.note": "Уточнение формулы. Более плотный бас, более уверенная лирика. «Front, Back & Side to Side» — клубная классика.",
    "discography.albums.2.note": "Шедевр. Без единого гостя — только два голоса и бесконечный бас. «One Day» — реквием по павшим. Альбом, определивший южный хип-хоп.",
    "discography.albums.3.note": "Возвращение после тюремного срока Pimp C. «Choppin' Blades» — возвращение к форме. Дуэт стал жёстче, голоднее.",
    "discography.albums.4.note": "Двойной альбом. №1 в Billboard 200. «International Players Anthem» с OutKast — один из величайших хип-хоп треков. Последний при жизни Pimp C.",
    "discography.albums.5.note": "Посвящение. Bun B завершил начатое. «Da Game Been Good to Me» — прощание с эпохой. Финальная глава дуэта.",
    "discography.cover.alt": "Обложка альбома UGK —",

    // Essential Tracks
    "tracks.label": "< 8 ESSENTIAL / YOUTUBE EMBED >",

    // Timeline
    "timeline.label": "[ ХРОНОЛОГИЯ / 1992 → 2009 ]",
    "timeline.events.0": "Формирование UGK в Порт-Артуре, Техас. Bun B и Pimp C объединяются.",
    "timeline.events.1": "Выход «Too Hard to Swallow» — дебютный альбом на Jive Records.",
    "timeline.events.2": "«Super Tight» — закрепление стиля и рост аудитории на Юге.",
    "timeline.events.3": "«Ridin' Dirty» — шедевр, определивший звучание грязного юга. Без единого гостя.",
    "timeline.events.4": "Pimp C осуждён и отправлен в тюрьму. Bun B держит имя UGK через фиты.",
    "timeline.events.5": "«Dirty Money» — возвращение. Pimp C на свободе, дуэт жёстче и голоднее.",
    "timeline.events.6": "Pimp C выходит из тюрьмы. Хьюстон ликует.",
    "timeline.events.7": "«Underground Kingz» — двойной альбом, №1 в Billboard 200. «International Players Anthem» — гимн поколения.",
    "timeline.events.8": "4 декабря. Pimp C найден мёртвым в отеле Mondrian, Лос-Анджелес. Ему было 33.",
    "timeline.events.9": "«UGK 4 Life» — финальный альбом. Bun B завершает наследие. Посвящение Чаду Батлеру.",

    // Legacy
    "legacy.heading": "НАСЛЕДИЕ",
    "legacy.label": "< НАСЛЕДИЕ / ВЕЧНО >",
    "legacy.p1": "UGK не просто выпускали музыку — они построили архитектуру южного хип-хопа. Их звучание — фундамент, на котором стоят Scarface, Z-Ro, Lil Wayne, Drake, Travis Scott.",
    "legacy.p2": "Pimp C создал «кантри-рэп» стиль, который стал хьюстонским звуком. Bun B доказал, что один человек может нести наследие двоих.",
    "legacy.p3": "Их влияние не ослабевает. Каждый трек с хьюстонским басом, каждый замедленный грув, каждый MC из Техаса — несёт в себе ДНК Underground Kingz.",
    "legacy.quote.0": "Pimp C был нашим QB. Он задал тон всему Югу.",
    "legacy.quote.1": "Без UGK не было бы моего звучания. Они — фундамент.",
    "legacy.quote.2": "Ridin' Dirty — это Библия южного хип-хопа.",

    // Gallery
    "gallery.heading": "ГАЛЕРЕЯ",
    "gallery.fairuse": "Все фотографии и обложки альбомов используются на условиях добросовестного использования (fair use) в образовательных и информационных целях на некоммерческой фан-странице.",

    // Footer
    "footer.disclaimer": "Данная страница является некоммерческим фан-проектом и не аффилирована с UGK, их наследниками или лейблами. Все обложки альбомов используются на условиях fair use. Музыка предоставлена через YouTube embed.",
    "footer.credits.photos": "Фотографии: предоставлены пользователем",
    "footer.credits.covers": "Обложки альбомов: Jive Records / RCA (fair use)",
    "footer.credits.music": "Музыка: YouTube / UMG (iframe embed)",

    // Meta
    "meta.title": "UGK — Подземные Короли Южного Хип-Хопа",
    "meta.description": "Фан-страница, посвящённая UGK (Underground Kingz) — легендарному дуэту из Порт-Артура, Техас. Bun B и Pimp C определили звучание грязного юга.",
  },

  en: {
    // Nav
    "nav.about": "About",
    "nav.members": "Members",
    "nav.discography": "Discography",
    "nav.tracks": "Tracks",
    "nav.timeline": "Timeline",
    "nav.legacy": "Legacy",
    "nav.gallery": "Gallery",
    "nav.lang": "RU",

    // Hero
    "hero.tag": "[ EST. 1992 / PORT ARTHUR, TX ]",
    "hero.title": "UNDERGROUND\nKINGZ",
    "hero.subtitle": "Port Arthur, Texas. Two voices. One legend.",
    "hero.img.alt": "UGK — Bun B and Pimp C, legendary duo from Port Arthur, Texas",
    "hero.scroll": "/// SCROLL ///",

    // Intro
    "intro.heading": "/// UGK ///",
    "intro.p1": "Underground Kingz — a hip-hop duo from Port Arthur, Texas, formed in 1992. Bun B and Pimp C built the foundation of Dirty South: slow, heavy beats, syrup-soaked bass, and street lyricism quoted from Scarface to Jay-Z.",
    "intro.p2": "They never chased the mainstream — the mainstream came to them. 1996's «Ridin' Dirty» is still considered one of the greatest Southern hip-hop albums of all time.",

    // Members
    "members.tag": "< TWO KINGS / ONE CROWN >",
    "members.bunb.realname": "Bernard Freeman",
    "members.bunb.role": "MC / Visual architect of the duo",
    "members.bunb.alt": "Bun B — Bernard Freeman, MC and visionary of UGK",
    "members.bunb.bio": "The voice of UGK — deep, authoritative, measured. After Pimp C's passing, he pursued a solo career and began teaching hip-hop at Rice University. Activist, mentor, living legend of Port Arthur.",
    "members.pimpc.realname": "Chad Butler",
    "members.pimpc.role": "Producer / MC / Soul of the sound",
    "members.pimpc.alt": "Pimp C — Chad Butler, producer and sound architect of UGK",
    "members.pimpc.bio": "The sound architect of UGK. Created the signature «country rap» style: slow groove, Houston bass, vocals with a Houston accent. «Sweet James Jones» — his alter ego, symbol of the Houston night. Passed in 2007, but his influence echoes in every Southern track.",

    // Discography
    "discography.label": "[ DISCOGRAPHY / 6 ALBUMS / 1992—2009 ]",
    "discography.albums.0.note": "The debut. Raw, unfiltered Port Arthur. «Pocket Full of Stones» — an anthem of the streets that Kanye later remade.",
    "discography.albums.1.note": "Refining the formula. Tighter bass, more confident lyrics. «Front, Back & Side to Side» — a club classic.",
    "discography.albums.2.note": "The masterpiece. Not a single guest — just two voices and endless bass. «One Day» — a requiem for the fallen. The album that defined Southern hip-hop.",
    "discography.albums.3.note": "The comeback after Pimp C's prison stint. «Choppin' Blades» — a return to form. The duo got harder, hungrier.",
    "discography.albums.4.note": "Double album. №1 on Billboard 200. «International Players Anthem» with OutKast — one of the greatest hip-hop tracks ever. The last released during Pimp C's lifetime.",
    "discography.albums.5.note": "A dedication. Bun B finished what they started. «Da Game Been Good to Me» — farewell to an era. The duo's final chapter.",
    "discography.cover.alt": "UGK album cover —",

    // Essential Tracks
    "tracks.label": "< 8 ESSENTIAL / YOUTUBE EMBED >",

    // Timeline
    "timeline.label": "[ TIMELINE / 1992 → 2009 ]",
    "timeline.events.0": "UGK formed in Port Arthur, Texas. Bun B and Pimp C unite.",
    "timeline.events.1": "Release of «Too Hard to Swallow» — debut album on Jive Records.",
    "timeline.events.2": "«Super Tight» — solidifying the style and growing the Southern audience.",
    "timeline.events.3": "«Ridin' Dirty» — the masterpiece that defined the Dirty South sound. Not a single guest feature.",
    "timeline.events.4": "Pimp C sentenced to prison. Bun B keeps the UGK name alive through features.",
    "timeline.events.5": "«Dirty Money» — the comeback. Pimp C is free, the duo is harder and hungrier.",
    "timeline.events.6": "Pimp C released from prison. Houston rejoices.",
    "timeline.events.7": "«Underground Kingz» — double album, №1 on Billboard 200. «International Players Anthem» — an anthem of a generation.",
    "timeline.events.8": "December 4. Pimp C found dead at the Mondrian Hotel, Los Angeles. He was 33.",
    "timeline.events.9": "«UGK 4 Life» — the final album. Bun B completes the legacy. Dedicated to Chad Butler.",

    // Legacy
    "legacy.heading": "LEGACY",
    "legacy.label": "< LEGACY / ETERNAL >",
    "legacy.p1": "UGK didn't just make music — they built the architecture of Southern hip-hop. Their sound is the foundation that Scarface, Z-Ro, Lil Wayne, Drake, and Travis Scott stand on.",
    "legacy.p2": "Pimp C created the «country rap» style that became the Houston sound. Bun B proved that one man can carry the legacy of two.",
    "legacy.p3": "Their influence doesn't fade. Every track with Houston bass, every slowed-down groove, every MC from Texas — carries the DNA of Underground Kingz.",
    "legacy.quote.0": "Pimp C was our QB. He set the tone for the entire South.",
    "legacy.quote.1": "Without UGK, there would be no my sound. They are the foundation.",
    "legacy.quote.2": "Ridin' Dirty is the Bible of Southern hip-hop.",

    // Gallery
    "gallery.heading": "GALLERY",
    "gallery.fairuse": "All photographs and album covers are used under fair use for educational and informational purposes on a non-commercial fan page.",

    // Footer
    "footer.disclaimer": "This page is a non-commercial fan project and is not affiliated with UGK, their estates, or labels. All album covers are used under fair use. Music is provided via YouTube embed.",
    "footer.credits.photos": "Photos: provided by user",
    "footer.credits.covers": "Album covers: Jive Records / RCA (fair use)",
    "footer.credits.music": "Music: YouTube / UMG (iframe embed)",

    // Meta
    "meta.title": "UGK — Underground Kingz of Southern Hip-Hop",
    "meta.description": "A fan page dedicated to UGK (Underground Kingz) — the legendary duo from Port Arthur, Texas. Bun B and Pimp C defined the Dirty South sound.",
  },
};

export function getLang(): Lang {
  if (typeof window === "undefined") return "en";
  return (localStorage.getItem("ugk-lang") as Lang) || "en";
}

export function setLang(lang: Lang): void {
  if (typeof window === "undefined") return;
  localStorage.setItem("ugk-lang", lang);
}
