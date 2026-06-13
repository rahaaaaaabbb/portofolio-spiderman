'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function SpiderManUI() {
  const [activeTab, setActiveTab] = useState('SUMMARY');
  
  // State untuk mengontrol tumpukan Kontak (menggantikan Projects)
  const [isContactsExpanded, setIsContactsExpanded] = useState(false);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  
  const mainContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  const tabs = ['SUMMARY', 'EXPERIENCE', 'SKILLS', 'EDUCATION'];

  const backgrounds: Record<string, string> = {
    SUMMARY: '/bg-summary.jpg',
    EXPERIENCE: '/bg-experience.jpg',
    SKILLS: '/bg-skills.jpg',
    EDUCATION: '/bg-education.jpg',
  };

  // Data Kontak Baru
  const contacts = [
    { title: 'INSTAGRAM', role: '@rrabaahh', highlight: true, url: 'https://www.instagram.com/rrabaahh/' },
    { title: 'WHATSAPP', role: 'DIRECT MESSAGE', highlight: false, url: 'https://wa.me/6287728967883' },
    { title: 'TIKTOK', role: '@rahabb', highlight: false, url: 'https://www.tiktok.com/@rrabbahhh' },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.global-fade-in', { opacity: 0, duration: 1.5, ease: 'power3.out' });
      gsap.from('.slide-in-right', { x: 50, opacity: 0, duration: 1, ease: 'power3.out' });
      gsap.from('.contact-stack', { y: -50, opacity: 0, duration: 0.8, ease: 'back.out(1.5)', delay: 0.5 });
    }, mainContainerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;
    const ctx = gsap.context(() => {
      gsap.from('.tab-content-element', { y: 20, opacity: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out' });
    }, contentRef);
    return () => ctx.revert();
  }, [activeTab]);

  const renderContent = () => {
    switch (activeTab) {
      case 'SUMMARY':
        return (
          <>
            <div className="absolute top-1/4 right-10 md:right-32 w-[300px] md:w-[450px] tab-content-element pointer-events-none bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-900/30">
              <h2 className="text-3xl md:text-4xl font-black uppercase leading-[1.1] tracking-tighter text-right text-red-50 opacity-90 drop-shadow-2xl">
                "Membangun Solusi Digital Terintegrasi dengan Efisiensi Tinggi."
              </h2>
              <p className="mt-4 text-red-400 font-mono text-xs md:text-sm uppercase text-right tracking-widest">
                — Mahasiswa Manajemen Informatika
              </p>
            </div>
            <div className="flex flex-col gap-1 tab-content-element pointer-events-none absolute bottom-12 left-0 bg-black/40 backdrop-blur-sm p-6 rounded-xl border border-red-900/30">
              <p className="text-red-500 uppercase tracking-[0.4em] text-xs md:text-sm font-bold flex items-center gap-2">
                <span className="w-4 h-4 bg-red-600 flex items-center justify-center text-black text-[8px]">▶</span>
                PORTFOLIO / PROFILE :
              </p>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white leading-none mt-1 drop-shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                RIFA RABAH <br /> FALHAQ
              </h1>
              <p className="text-neutral-300 tracking-[0.2em] text-xs md:text-sm mt-3 uppercase font-semibold border-l-2 border-red-600 pl-3">
                FULL-STACK WEB & MOBILE DEVELOPER <br />
                <span className="text-red-400 text-xs">NEXT.JS • FLUTTER • R3F • GSAP</span>
              </p>
            </div>
          </>
        );
      case 'EXPERIENCE':
        const experienceData = [
          {
            id: "LOG-01",
            title: "PT PIRANTI TEKNIK",
            subtitle: "Manpower Staff (Autocutting) & Developer",
            description: "Merancang dan mengembangkan sistem manajemen inventaris berbasis web (Smart ERP) yang berfungsi melakukan analisis suplai material secara akurat pada proses autocutting.",
            features: ["Analisis Material", "Inventaris Web", "Automasi", "Troubleshooting"],
          },
          {
            id: "LOG-02",
            title: "BANTULULUS",
            subtitle: "Web Developer",
            description: "Membangun platform layanan akademik profesional. Mengintegrasikan animasi tingkat lanjut dan elemen 3D interaktif untuk menciptakan pengalaman UI/UX yang modern.",
            features: ["Next.js", "GSAP", "3D Interactive", "UI/UX"],
          },
          {
            id: "LOG-03",
            title: "SALERO MINANG",
            subtitle: "Freelance Developer",
            description: "Merancang dan mengimplementasikan sistem pemesanan berbasis kode QR (QR-based ordering) sekaligus manajer inventaris terpadu secara end-to-end.",
            features: ["QR Ordering", "Inventaris", "Next.js", "Transaksi"],
          },
          {
            id: "LOG-04",
            title: "COSYCOACH",
            subtitle: "Mobile App Developer",
            description: "Menginisiasi dan mengembangkan aplikasi mobile dari tahap awal setup environment hingga perancangan layar master data dan arsitektur aplikasi.",
            features: ["Flutter", "Setup Env", "Master Data", "Mobile App"],
          }
        ];

        return (
          <div className="w-full h-full flex flex-col md:flex-row gap-8 pb-4">
            <div className="w-full md:w-1/3 flex flex-col justify-start tab-content-element shrink-0">
              <div className="bg-[#0a0a0a] border-l-4 border-red-600 p-6 md:p-8 rounded-r-3xl shadow-[10px_0_30px_rgba(0,0,0,0.8)]">
                 <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-tighter text-white leading-[0.9] drop-shadow-lg">
                   MISSION <br/><span className="text-red-500">LOGS.</span>
                 </h2>
                 <p className="mt-6 text-sm text-neutral-400 font-light leading-relaxed">
                   Database riwayat operasi lapangan dan pengembangan sistem. Menampilkan rekam jejak penyelesaian tugas dari arsitektur ERP hingga integrasi layanan aplikasi mobile.
                 </p>
                 <div className="mt-8 flex items-center gap-3 border-t border-neutral-800 pt-5">
                   <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,0.8)]"></div>
                   <p className="text-red-500 font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase font-bold">
                     04 Records Available
                   </p>
                 </div>
              </div>
            </div>

            <div 
              className="w-full md:w-2/3 flex-1 overflow-y-auto pr-2 md:pr-6 pb-12 tab-content-element" 
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="flex flex-col gap-5">
                {experienceData.map((exp, index) => (
                  <div 
                    key={index} 
                    className="group relative bg-[#0f0f0f] border border-neutral-800 hover:border-red-600/80 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(220,38,38,0.5)]"
                  >
                     <div className="absolute top-0 right-0 px-4 py-1.5 bg-neutral-900 border-b border-l border-neutral-800 rounded-bl-2xl group-hover:bg-red-950 group-hover:border-red-900 transition-colors duration-300">
                       <span className="text-[10px] font-mono text-neutral-500 group-hover:text-red-400 tracking-[0.2em] font-bold">{exp.id}</span>
                     </div>

                     <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-wide mb-1 pr-16 drop-shadow-md">
                       {exp.title}
                     </h3>
                     <h4 className="text-red-500 font-mono text-xs md:text-sm uppercase tracking-widest mb-4">
                       {exp.subtitle}
                     </h4>
                     
                     <p className="text-sm md:text-base text-neutral-300 font-light leading-relaxed mb-6">
                       {exp.description}
                     </p>

                     <div className="flex flex-wrap gap-2">
                       {exp.features.map((feature, fIndex) => (
                         <span 
                           key={fIndex} 
                           className="px-3 py-1.5 bg-neutral-900/80 text-neutral-400 border border-neutral-800 rounded-full text-[10px] md:text-xs uppercase tracking-wider font-mono group-hover:border-red-900/50 group-hover:text-red-200 group-hover:bg-red-950/30 transition-all duration-300"
                         >
                           {feature}
                         </span>
                       ))}
                     </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
        );
      case 'SKILLS':
        return (
          <div className="flex flex-col gap-6 w-full max-w-3xl absolute bottom-12 left-0 z-20">
             <h2 className="text-4xl font-black uppercase text-red-50 tracking-widest border-b-2 border-red-600 pb-2 tab-content-element drop-shadow-lg">
              SUIT UPGRADES & TECH
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                { category: 'WEB CORE', tools: 'NEXT.JS, PHP, MYSQL' },
                { category: 'MOBILE DEV', tools: 'FLUTTER' },
                { category: 'INTERACTIVE UI', tools: 'GSAP, R3F, SPLINE' },
                { category: 'SYSTEM TACTICS', tools: 'TROUBLESHOOTING, DATA ANALYSIS' }
              ].map((skill, i) => (
                <div key={i} className="border border-red-600/50 bg-[#0a0a0a] p-4 tab-content-element flex flex-col justify-between h-24 rounded-lg shadow-xl">
                   <span className="text-red-400 font-mono text-xs uppercase tracking-widest">{skill.category}</span>
                   <span className="text-white font-bold uppercase tracking-wider text-lg">{skill.tools}</span>
                </div>
              ))}
            </div>
          </div>
        );
      case 'EDUCATION':
        return (
           <div className="flex flex-col gap-4 w-full max-w-xl absolute bottom-20 left-0 z-20">
             <h2 className="text-4xl font-black uppercase text-red-50 tracking-widest border-b-2 border-red-600 pb-2 tab-content-element drop-shadow-lg mb-2">
              BASE OF OPERATIONS
            </h2>
            
            <div className="bg-[#0a0a0a] p-6 border-l-4 border-red-600 tab-content-element rounded-r-xl shadow-xl">
                <h3 className="text-3xl font-black text-white uppercase tracking-widest">STMIK DCI</h3>
                <p className="text-red-400 font-mono text-sm uppercase tracking-widest mt-1">Program Studi Manajemen Informatika</p>
                <div className="mt-4 flex items-center gap-3 opacity-80">
                   <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(239,68,68,1)]"></div>
                   <span className="text-xs text-neutral-300 font-mono tracking-widest uppercase">Status: Active Training</span>
                </div>
            </div>

            <div className="bg-[#0a0a0a] p-6 border-l-4 border-neutral-600 tab-content-element rounded-r-xl opacity-80 shadow-xl">
                <h3 className="text-2xl font-black text-white uppercase tracking-widest">SMKN 1 Banjar</h3>
                <p className="text-red-400 font-mono text-sm uppercase tracking-widest mt-1">Rekayasa Perangkat Lunak</p>
                <div className="mt-4 flex items-center gap-3">
                   <div className="w-2 h-2 bg-neutral-500 rounded-full"></div>
                   <span className="text-xs text-neutral-400 font-mono tracking-widest uppercase">2019 - 2021</span>
                </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div ref={mainContainerRef} className="relative w-full h-screen bg-black overflow-hidden text-red-50 font-sans selection:bg-red-600 selection:text-white flex">
      
      {tabs.map((tab) => (
        <div
          key={tab}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out z-0 ${
            activeTab === tab ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url('${backgrounds[tab]}')` }}
        ></div>
      ))}

      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/60 to-transparent z-10 pointer-events-none"></div>

      <div className="absolute left-6 md:left-12 top-0 bottom-0 w-px bg-red-600/50 flex flex-col justify-between py-12 items-center global-fade-in z-20">
        <span className="rotate-90 -ml-6 text-xs tracking-widest text-red-400 font-mono">08:27</span>
        <div className="w-2 h-2 rounded-full bg-red-500 absolute top-1/3 -ml-[3px] shadow-[0_0_10px_rgba(239,68,68,1)]"></div>
        <div className="w-16 h-px bg-red-600/50 absolute top-1/3 right-0 -mr-16"></div>
        <span className="rotate-90 -ml-6 text-xs tracking-widest text-red-400 font-mono">2:30:15</span>
      </div>

      <nav 
        className={`absolute right-0 top-0 bottom-0 bg-black/90 border-l border-red-900/50 shadow-[-10px_0_30px_rgba(0,0,0,0.8)] z-40 flex flex-col items-center py-8 transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
          isMenuExpanded ? 'w-56' : 'w-20 md:w-24'
        }`}
      >
        <div 
          className="cursor-pointer z-50 flex flex-col items-center gap-2"
          onClick={() => setIsMenuExpanded(!isMenuExpanded)}
        >
          <img 
            src="/spider-logo.png" 
            alt="Spider Logo" 
            className="w-12 h-12 md:w-14 md:h-14 object-contain drop-shadow-[0_0_15px_rgba(220,38,38,0.8)] transition-transform duration-300 hover:scale-110" 
          />
          {!isMenuExpanded && (
             <span className="text-[10px] text-red-500 font-mono tracking-[0.2em] uppercase mt-2">Menu</span>
          )}
        </div>

        <div 
          className={`w-full flex flex-col gap-6 mt-16 transition-opacity duration-300 ${
            isMenuExpanded ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none absolute'
          }`}
        >
          {tabs.map((tab) => (
            <div
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setIsMenuExpanded(false); 
              }}
              className={`cursor-pointer uppercase tracking-widest text-sm font-bold text-center w-full py-4 border-l-4 transition-colors duration-300 ${
                activeTab === tab
                  ? 'border-red-500 text-white bg-red-900/30 shadow-[inset_10px_0_20px_rgba(220,38,38,0.2)]'
                  : 'border-transparent text-neutral-500 hover:text-red-400 hover:bg-white/5'
              }`}
            >
              {tab}
            </div>
          ))}
        </div>
      </nav>

      <main className="flex-1 w-full h-screen flex flex-col pl-20 md:pl-32 pr-20 md:pr-32 py-8 relative z-30 overflow-hidden">
        
        {/* Header Ruang Atas (Tumpukan Kartu Kontak) */}
        <div className="w-full shrink-0 flex justify-end h-24 md:h-28 z-50 relative">
          <div 
            className="relative w-44 h-16 md:w-56 md:h-20 contact-stack cursor-pointer mt-2"
          >
            {contacts.map((contact, i) => {
              const rightOffset = isContactsExpanded ? `calc(${i} * (100% + 16px))` : `${i * 8}px`;
              const topOffset = isContactsExpanded ? '0px' : `${i * 8}px`;

              return (
                <div
                  key={i}
                  onClick={() => {
                    // Jika belum terbuka, klik untuk membuka tumpukan.
                    // Jika sudah terbuka, buka link sosmed di tab baru.
                    if (!isContactsExpanded) {
                      setIsContactsExpanded(true);
                    } else if (contact.url !== '#') {
                      window.open(contact.url, '_blank');
                    }
                  }}
                  className={`absolute w-full h-full border rounded-md flex flex-col justify-end p-3 overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.25,1,0.5,1)] ${
                    contact.highlight
                      ? 'border-red-600 bg-red-950/90 shadow-[0_0_20px_rgba(220,38,38,0.5)]'
                      : 'border-neutral-800 bg-[#0a0a0a] hover:border-red-500/50'
                  }`}
                  style={{
                    right: rightOffset,
                    top: topOffset,
                    zIndex: contacts.length - i,
                  }}
                >
                  <div className={`absolute inset-0 opacity-40 ${contact.highlight ? 'bg-red-600' : 'bg-neutral-800'}`}></div>
                  
                  <div className="relative z-10 flex flex-col justify-end items-start w-full pointer-events-none">
                    <span className={`text-sm md:text-base font-black uppercase tracking-wider leading-tight ${contact.highlight ? 'text-white' : 'text-neutral-400'}`}>
                      {contact.title}
                    </span>
                    <span className="text-[10px] md:text-xs text-red-500 font-mono uppercase tracking-widest mt-1">
                      {contact.role}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Ruang Bawah: Konten Dinamis */}
        <div ref={contentRef} className="flex-1 w-full relative z-20 min-h-0 pt-4">
          {renderContent()}
        </div>
        
      </main>
    </div>
  );
}