'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    document.title = "VŠE PRO STAVBY.CZ - Váš Partner pro Stavebnictví";

    const faviconSvg = `<svg width="100" height="100" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stop-color="#4F46E5" /><stop offset="100%" stop-color="#8B5CF6" /></linearGradient></defs><circle cx="50" cy="50" r="50" fill="url(#g)" /></svg>`;
    const faviconUrl = `data:image/svg+xml;base64,${btoa(faviconSvg)}`;

    let faviconLink = document.querySelector('link[rel="icon"]') as HTMLLinkElement | null;
    if (!faviconLink) {
      faviconLink = document.createElement('link');
      faviconLink.setAttribute('rel', 'icon');
      document.head.appendChild(faviconLink);
    }
    if (faviconLink) {
      faviconLink.href = faviconUrl;
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Navigation */}
      <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#hero" className="text-3xl font-extrabold text-indigo-600 tracking-tight transition-all duration-300 hover:text-indigo-700">
            VŠE PRO STAVBY.CZ
          </a>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">O nás</a>
            <a href="#services" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Služby</a>
            <a href="#portfolio" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Realizace</a>
            <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors duration-200">Kontakt</a>
          </div>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-600 hover:text-indigo-600 focus:outline-none focus:text-indigo-600">
              <svg className="h-8 w-8" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12"></path>
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16"></path>
                )}
              </svg>
            </button>
          </div>
        </nav>
        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white shadow-lg py-4`}>
          <a href="#about" onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">O nás</a>
          <a href="#services" onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">Služby</a>
          <a href="#portfolio" onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">Realizace</a>
          <a href="#contact" onClick={toggleMenu} className="block px-6 py-3 text-gray-700 hover:bg-gray-100 transition-colors duration-200">Kontakt</a>
        </div>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section id="hero" className="relative bg-gradient-to-r from-indigo-600 to-purple-700 text-white flex items-center justify-center min-h-[600px] text-center p-6 overflow-hidden">
          <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url(\'/images/gallery-tanvald-building.jpg\')' }}></div>
          <div className="relative z-10 max-w-4xl">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 animate-fade-in-up">
              Postavte Budoucnost s Námi: Kvalita a Inovace ve Stavebnictví
            </h1>
            <p className="text-xl md:text-2xl mb-10 opacity-90 animate-fade-in-up animation-delay-300">
              Vše Pro Stavby.cz – váš spolehlivý partner pro komplexní stavební řešení.<br /> Od <span className="font-semibold">základů po střechu</span>, s důrazem na preciznost, efektivitu a spokojenost zákazníka.
            </p>
            <a href="#contact" className="inline-block bg-white text-indigo-700 hover:bg-gray-100 px-10 py-4 rounded-full text-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105 animate-fade-in-up animation-delay-600">
              Získejte Konzultaci Zdarma
            </a>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Proč si vybrat VŠE PRO STAVBY.CZ?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              <div className="border-l-4 border-indigo-600 pl-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Na VŠE PRO STAVBY.CZ se pyšníme <span className="font-semibold text-indigo-600">desetiletím zkušeností</span> v oboru stavebnictví. Naším posláním je přinášet <span className="font-semibold text-indigo-600">inovativní a spolehlivá řešení</span>, která přesahují očekávání. Rozumíme, že každý projekt je jedinečný a vyžaduje individuální přístup. Proto klademe důraz na osobní komunikaci a detailní plánování.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Investujeme do <span className="font-semibold text-indigo-600">moderních technologií a neustálého vzdělávání</span> našeho týmu, abychom zajistili nejvyšší kvalitu a efektivitu. Vaše spokojenost je naší nejvyšší prioritou a snažíme se, aby každý projekt byl realizován <span className="font-semibold text-indigo-600">hladce, včas a v rámci rozpočtu</span>.
                </p>
              </div>
              <div className="relative h-72 md:h-96 w-full rounded-lg overflow-hidden shadow-xl">
                <img src="/images/content-family-house-reconstruction.jpg" alt="Rodinný dům po rekonstrukci" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-indigo-700 opacity-20"></div>
              </div>
            </div>

            <div className="mt-16 text-center">
              <h3 className="text-3xl font-bold text-gray-800 mb-8">Naše Klíčové Benefity:</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="p-8 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="text-indigo-600 mb-4 inline-block">
                    <svg className="w-12 h-12 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Prověřená Kvalita</h4>
                  <p className="text-gray-600">Zaručujeme nejvyšší standardy provedení a používáme pouze certifikované materiály.</p>
                </div>
                <div className="p-8 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="text-indigo-600 mb-4 inline-block">
                    <svg className="w-12 h-12 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Dodržování Termínů</h4>
                  <p className="text-gray-600">Projekty dokončujeme vždy v souladu s dohodnutými termíny a rozpočtem.</p>
                </div>
                <div className="p-8 bg-indigo-50 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <div className="text-indigo-600 mb-4 inline-block">
                    <svg className="w-12 h-12 mx-auto" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H2v-2a4 4 0 014-4h12v-2.653c0-1.68-.687-3.328-1.757-4.408C14.747 8.423 12.083 7.828 9.5 8h-1.586a1 1 0 01-.707-.293l-1.121-1.121A1 1 0 015.293 5.293L6.707 3.879A1 1 0 017.414 3h5.172a2 2 0 011.414.586l6.707 6.707a2 2 0 01-.586 1.414L19 14.586a2 2 0 01-1.414.586H17z"></path>
                    </svg>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-3">Individuální Přístup</h4>
                  <p className="text-gray-600">Každému klientovi se věnujeme s maximální péčí a připravujeme řešení na míru.</p>
                </div>
              </div>
            </div>

            <div className="mt-16 bg-gradient-to-r from-purple-600 to-indigo-700 text-white p-10 rounded-xl shadow-lg text-center">
              <h3 className="text-3xl font-bold mb-4">Přes 500 Spokojených Zákazníků</h3>
              <p className="text-lg opacity-90 mb-6">Důkazem naší práce jsou stovky úspěšně dokončených projektů a spokojených klientů po celé ČR.</p>
              <a href="#portfolio" className="inline-block bg-white text-purple-700 hover:bg-gray-100 px-8 py-3 rounded-full text-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                Prohlédněte si Naše Realizace
              </a>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-16 bg-gray-100">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Naše Komplexní Služby</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { title: 'Zemní práce a základy', description: 'Realizujeme veškeré zemní práce, výkopy, terénní úpravy a kompletní přípravu základů pro jakýkoli typ stavby.' },
                { title: 'Kompletní výstavba RD', description: 'Stavíme rodinné domy na klíč – od projektu a základové desky až po finální dokončovací práce a kolaudaci.' },
                { title: 'Rekonstrukce a modernizace', description: 'Provádíme rozsáhlé i menší rekonstrukce, modernizace bytových jader, adaptace prostor a zateplování fasád.' },
                { title: 'Zámkové dlažby a komunikace', description: 'Pokládka zámkové dlažby pro příjezdové cesty, chodníky, terasy a realizace zpevněných ploch a komunikací.' },
                { title: 'Bourací práce', description: 'Profesionální a bezpečné bourací práce, demolice objektů a odstraňování staveb s důrazem na recyklaci materiálu.' },
                { title: 'Inženýrské sítě', description: 'Kompletní realizace a připojení inženýrských sítí – voda, kanalizace, plyn, elektřina pro váš stavební projekt.' }
              ].map((service, index) => (
                <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1">
                  <h3 className="text-2xl font-semibold text-indigo-600 mb-4 flex items-center">
                    <svg className="w-7 h-7 mr-3 text-purple-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path>
                    </svg>
                    {service.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <a href="#contact" className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                Získejte Cenovou Nabídku Dnes
              </a>
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section id="portfolio" className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Naše Realizace: Příběhy Úspěchu</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
              {[
                { src: '/images/gallery-tanvald-building.jpg', alt: 'Dokončená stavba v Tanvaldu', title: 'Bytový Dům v Tanvaldu', description: 'Komplexní výstavba moderního bytového domu s důrazem na energetickou efektivitu a komfort bydlení.' },
                { src: '/images/content-family-house-reconstruction.jpg', alt: 'Rekonstruovaný rodinný dům', title: 'Rekonstrukce Rodinného Domu', description: 'Rozsáhlá rekonstrukce staršího rodinného domu na moderní a úsporné bydlení.' }
              ].map((project, index) => (
                <div key={index} className="relative bg-white rounded-lg shadow-xl overflow-hidden group transform transition-all duration-300 hover:scale-[1.02]">
                  <img src={project.src} alt={project.alt} className="w-full h-80 object-cover transform duration-300 group-hover:scale-105" />
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-2 mt-4 transition-colors duration-300 group-hover:text-indigo-600">{project.title}</h3>
                    <p className="text-gray-700 leading-relaxed">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-gray-700 mb-6 font-semibold">Máte vlastní představu? Rádi ji s vámi prodiskutujeme!</p>
              <a href="#contact" className="inline-block bg-purple-600 text-white hover:bg-purple-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105">
                Poptejte Svůj Projekt
              </a>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="py-16 bg-gradient-to-r from-indigo-50 to-purple-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Co o nás říkají klienti</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-indigo-600 transform transition-transform duration-300 hover:scale-[1.01]">
                <p className="text-gray-700 italic mb-6 text-lg">"VŠE PRO STAVBY.CZ odvedli perfektní práci na naší rekonstrukci. Vše proběhlo hladce, komunikace byla skvělá a výsledek předčil naše očekávání. Jsou profesionálové na svém místě!"
                </p>
                <p className="text-gray-900 font-bold">Jana Nováková</p>
                <p className="text-gray-600 text-sm">Majitelka RD, Praha</p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-lg border-t-4 border-purple-600 transform transition-transform duration-300 hover:scale-[1.01]">
                <p className="text-gray-700 italic mb-6 text-lg">"Potřebovali jsme rychlou a efektivní výstavbu základů pro náš nový dům. VŠE PRO STAVBY.CZ dodali vše v termínu a s precizností. Děkujeme za skvělou spolupráci!"
                </p>
                <p className="text-gray-900 font-bold">Petr Svoboda</p>
                <p className="text-gray-600 text-sm">Developer, Brno</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container mx-auto px-6 max-w-5xl">
            <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">Kontaktujte Nás Ještě Dnes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border-l-4 border-indigo-600">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Kde nás najdete:</h3>
                <div className="space-y-4 text-lg text-gray-700">
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-indigo-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8m-1 12H4a2 2 0 01-2-2V6a2 2 0 012-2h16a2 2 0 012 2v12a2 2 0 01-2 2z"></path>
                    </svg>
                    <a href="mailto:info@vseprostavby.cz" className="hover:underline">info@vseprostavby.cz</a>
                  </p>
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-indigo-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                    </svg>
                    <a href="tel:+420777123456" className="hover:underline">+420 777 123 456</a>
                  </p>
                  <p className="flex items-start">
                    <svg className="w-6 h-6 mr-3 text-indigo-600 flex-shrink-0" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                    </svg>
                    Masarykova 123, 110 00 Praha 1
                  </p>
                  <p className="text-base text-gray-600 pt-4">Jsme vám k dispozici Po-Pá: 8:00 - 17:00</p>
                </div>
              </div>
              <div className="bg-gray-50 p-8 rounded-lg shadow-md border-r-4 border-purple-600">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Nebo nám napište přímo:</h3>
                <p className="text-gray-700 leading-relaxed text-lg">
                  Máte dotazy, potřebujete cenovou nabídku nebo se chcete poradit? Neváhejte nás kontaktovat. Jsme připraveni vám pomoci s vaším stavebním projektem.
                </p>
                <p className="text-gray-700 leading-relaxed text-lg mt-4">
                  Odpovíme vám co nejdříve, obvykle do 24 hodin.
                </p>
                <a href="mailto:info@vseprostavby.cz" className="inline-block bg-indigo-600 text-white hover:bg-indigo-700 px-8 py-4 rounded-full text-lg font-bold shadow-lg transform transition-transform duration-300 hover:scale-105 mt-8">
                  Poslat E-mail
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 mt-12">
        <div className="container mx-auto px-6 text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} VŠE PRO STAVBY.CZ. Všechna práva vyhrazena.</p>
          <p className="mt-4 text-sm">
            Vytvořeno s láskou od <a href="https://digitalfusion.cz" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors duration-200">DigitalFusion</a>
          </p>
        </div>
      </footer>
    </div>
  );
}
