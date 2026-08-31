// slide information container
const slideData = [
    {
        subtitle: "Ke Jie (柯洁)",
        description: "Born in Lishui, Zhejiang, Ke Jie emerged in the mid-2010s as the dominant leader of China's modern Go renaissance. Achieving 9-dan rank in 2015, he captured his first world title at just 17 years old and held the undisputed World No. 1 rating for over four consecutive years. Renowned for his razor-sharp tactical reading, exceptional spatial flexibility, and lightning-fast play style, Ke Jie became the youngest player in history to win eight international world titles, solidifying China's modern dominance in professional Go. In May 2017, at age 19, Ke Jie faced an upgraded master version of AlphaGo at the Future of Go Summit in Wuzhen, China. Although he ultimately lost the 3-game match 3-0, his courageous performance in Game 2 pushed the AI engine to its absolute limit, earning high praise from DeepMind developers. Rather than being discouraged by AI supremacy, Ke Jie fully embraced deep-learning tools, adapting neural-network opening strategies (such as early 3-3 point invasions) into human competitive play. Today, he continues to represent the absolute pinnacle of human professional performance in the modern AI-integrated era.",
        imageSrc: "images/kejie.jpg"
    },
    {
        subtitle: "Lee Sedol (李世乭)",
        description: "Lee Sedol is one of the most celebrated South Korean 9-dan professionals of all time, internationally famed for his creative genius and hyper-aggressive fighting style. Turning professional at age 12, Lee quickly became a formidable force, accumulating 18 international titles (second only to Lee Chang-ho) and dominating global leaderboards throughout the 2000s and 2010s. Unlike his predecessor's quiet positional play, Lee Sedol was renowned for launching complex, high-risk tactical battles, turning calm board positions into chaotic, deep-calculation skirmishes that overwhelmed his opponents' defensive reading. Lee Sedol entered global pop-culture history in March 2016 during the historic Google DeepMind Challenge Match in Seoul, where he faced the AI engine AlphaGo. After losing the first three games against the superhuman algorithm, Lee delivered his famous ‘Move 78’ in Game 4—a brilliant, unexpected tactical wedge dubbed ‘The Divine Move’—which broke AlphaGo's evaluation network and forced the AI to resign. To this day, Lee Sedol remains the only human player to ever record an official victory against AlphaGo in a competitive match, cementing his status as a legendary figure bridging the human and artificial intelligence eras.",
        imageSrc: "images/leesedol.jpg"
    },
    {
        subtitle: "Lee Chang-ho (李昌鎬)",
        description: "Hailing from South Korea, Lee Chang-ho is widely regarded as one of the most dominant competitive grandmasters in the history of the sport. Mentored by the legendary Cho Hun-hyun, Lee turned professional at just 11 years old and won his first international world title at age 16—remaining the youngest world champion in Go history. Throughout the 1990s and 2000s, he established an unprecedented reign over international competitions, winning a record 21 world titles and elevating South Korea into the world's undisputed Go superpower. Nicknamed the ‘Stone Buddha’ for his unshakeable facial composure and total emotional detachment during matches, Lee Chang-ho fundamentally revolutionized the strategic value of the endgame (yose). While traditional grandmasters favored aggressive middle-game attacking styles, Lee perfected an icy, risk-averse strategy built on near-flawless mathematical calculation. He consistently forced opponents into quiet positions where he would systematically gain micro-advantages in the final moves, winning matches by reliable, razor-thin margins. His pragmatic approach laid the blueprint for modern computer-assisted calculation standards.",
        imageSrc: "images/leechangho.jpg"
    },
    {
        subtitle: "Go Seigen (吳清源)",
        description: "Born Wu Qingyuan in Fujian, China, Go Seigen is universally recognized as the greatest Go player of the 20th century. After demonstrating extraordinary prodigy-level talent as a child, he moved to Japan in 1928 under the sponsorship of prominent masters. Alongside Kitani Minoru, Go Seigen revolutionized the game in the 1930s by introducing Shin Fuseki (‘New Opening Strategy’). This groundbreaking theory broke away from rigid classical opening patterns played along the edges, prioritizing high, speed-oriented moves toward the center of the board to maximize spatial influence and dynamic flexibility. From 1939 to 1955, Go Seigen dominated the golden era of Japanese Go through a series of legendary Jubango (ten-game head-to-head match series). Played under the brutal rule where losing by a certain margin resulted in a permanent reduction in rank status, Go Seigen defeated every top rival of his generation—including Honinbo Shusai, Takagawa Kaku, and Sakata Eio—forcing all of them into lower handicap rank status. His lightning-fast positional judgment, deep endgame precision, and spiritual devotion to the board reshaped how modern Go is understood and taught globally.",
        imageSrc: "images/goseigen.jpg"
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


    }

    // click listeners for dots
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"));
            updateSlide(index);
        });
    });
});