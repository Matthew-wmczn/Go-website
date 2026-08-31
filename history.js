// slide information container
const slideData = [
    {
        subtitle: "Ancient Origins and Legend",
        description: "Go is widely recognized as the oldest continuously played board game in human history, originating in China over 3,000 to 4,000 years ago under its original name, Weiqi (围棋, literally 'encircling game'). Legend attributes the creation of the game to the mythical Emperor Yao (c. 2200 BCE), who purportedly commissioned his counselor to design the game to enlighten and discipline his reckless son, Danzhu. Other historical accounts suggest the game evolved from ancient Chinese fortune-telling tools, astronomical star charts, or military strategy boards used by tribal warlords to map out territorial control. By the Zhou and Han dynasties, Weiqi had firmly entrenched itself within Chinese high culture. It was elevated to one of the Four Scholar Arts (Si Yi)—alongside the Qin (zither), Qi (Weiqi), Shu (calligraphy), and Hua (painting). Mastery of Weiqi was considered an essential prerequisite for any refined scholar, bureaucrat, or military commander. Unlike Western chess, which mirrors medieval feudal warfare with specialized social roles, Weiqi reflected classical Daoist and Confucian philosophies: starting from an empty universe, using identical, egalitarian pieces, and prioritizing long-term harmony, spatial efficiency, and flexible balance over brute destruction.",
        imageSrc: "images/ancient.png"
    },
    {
        subtitle: "The spread around east asia",
        description: "During the 5th and 7th centuries CE, Weiqi crossed maritime trade routes into Korea (where it became known as Baduk) and Japan (where it was named Igo, eventually shortened to Go). In Japan, the game enjoyed royal patronage from the imperial court and samurai aristocracy. The true golden age of Go structure began during the Tokugawa Shogunate in the early 17th century, when the military government established state funding for professional Go academies. The Shogunate recognized four primary Go academies—the Four Houses of Go (Honinbo, Hayashi, Inoue, and Yasui). These rival houses competed fiercely in annual state-sponsored tournaments known as Oshirogo (Castle Games), played directly in the presence of the Shogun. The highest-ranking grandmaster was appointed as the Meijin (God-like Player) and served as the Minister of Go. This intense institutional rivalries produced legendary strategic geniuses like Honinbo Shusaku (1829–1862), whose invincibility in Castle Games and pioneering opening techniques (Shusaku's Invincible Opening) established modern classical theory.",
        imageSrc: "images/jp-art.jpg"
    },
    {
        subtitle: "Modernisation and Global Competition",
        description: "Following the Meiji Restoration and the collapse of the Shogunate's financial support, Japanese Go reorganized itself into a modern professional system. In 1924, the Nihon Ki-in (Japanese Go Association) was founded, establishing standardized ranking systems (dan grades), regulated match timers, and formal tournament circuits. For most of the 20th century, Tokyo served as the global epicenter of high-level Go, attracting top talent from across East Asia. By the late 20th century, the international power dynamic shifted dramatically. China re-established strong national programs under players like Nie Weiping, while South Korea experienced an explosive Go renaissance led by prodigies like Cho Hun-hyun and Lee Chang-ho. Lee Chang-ho’s pragmatic, error-free endgame play dominated world championships throughout the 1990s and 2000s, turning South Korea into the world's premier Go superpower. Simultaneously, Western nations formed national federations, expanding Go from an East Asian cultural pillar into an internationally recognized competitive mind sport.",
        imageSrc: "images/goseigen.jpg"
    },
    {
        subtitle: "The Artificial Intelligence Revolution",
        description: "For decades, computer scientists regarded Go as the ultimate holy grail of Artificial Intelligence research. Because a $19 \times 19$ board offers more possible game states ($10^{170}$) than there are atoms in the observable universe, traditional brute-force computing algorithms that worked for chess were entirely incapable of handling Go's complex positional intuition. Most experts predicted it would take until the late 2030s before an AI could defeat a top human professional.That consensus was shattered in March 2016 when Google DeepMind’s AlphaGo defeated 18-time world champion Lee Sedol 4–1 in a historic match in Seoul. A year later, in May 2017 at the Future of Go Summit in Wuzhen, AlphaGo faced Ke Jie—the world’s top-ranked Chinese grandmaster renowned for his sharp, flexible fighting style. AlphaGo defeated Ke Jie 3–0, demonstrating complete strategic dominance. These matches unleashed moves—such as AlphaGo's famous early 3-3 point invasions—that overturned centuries of traditional human Go theory. Today, superhuman AI engines like KataGo and Leela Zero serve as standard daily training tools for human professionals, sparking a global renaissance in opening strategy and proving that Go remains an ever-evolving frontier of deep strategic thought.",
        imageSrc: "images/alphago.png"
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const subtitleEl = document.getElementById("slide-subtitle");
    const descriptionEl = document.getElementById("slide-description");
    const imageEl = document.getElementById("slide-image");
    const dots = document.querySelectorAll(".dot");

    // Function to update the slide content
    function updateSlide(index) {
        const data = slideData[index];
        if (!data) return;

        subtitleEl.textContent = data.subtitle;
        descriptionEl.textContent = data.description;
        imageEl.src = data.imageSrc;
        imageEl.alt = data.subtitle;

        // Update active dot styling
        dots.forEach(dot => dot.classList.remove("active"));
        dots[index].classList.add("active");
    }

    // click listeners for dots
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            updateSlide(index);
        });
    });
});