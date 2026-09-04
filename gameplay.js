// slide information container
const slideData = [
    {
        subtitle: "Fundamentals and Liberties",
        description: "Go is a strategic board game for two players played on a grid of intersecting lines. While standard competitive play takes place on a 19*19 grid, beginners frequently start on smaller 9*9 or 13*13 boards to master core tactical principles. Unlike games like chess, where pieces move across squares, Go players alternate turns placing black and white stones directly onto the intersections of the grid. Black always makes the opening move of the game. Once placed on an intersection, a stone remains completely stationary and is never moved across the board; it stays in place until it is either captured or the game ends.To remain active on the board, every stone or group of stones requires open space, known as liberties. A liberty is any empty intersection directly adjacent to a stone along a horizontal or vertical grid line (diagonal intersections do not count as liberties). A single stone placed in the middle of an empty board possesses exactly 4 liberties. When you place stones of the same color directly adjacent to one another along the grid lines, they form a single, connected group. Connected stones share their liberties collectively as a single entity: as long as at least one stone in the group touches an open intersection, every stone in that group remains fully active on the board.",
        imageSrc: "images/liberties.png"
    },
    {
        subtitle: "Capturing and Restrictions",
        description: "Capturing occurs when a player occupies the final remaining liberty of an opponent's stone or connected group. When surrounded on all orthogonal sides, the captured stones become physically incapacitated, are immediately removed from the board, and are kept by the capturing players as prisoners. If a stone or group has only one liberty remaining, it is in a critical state known as Atari—meaning it can be captured on the opponent’s very next move unless defensive action is taken immediately To maintain strategic fairness and prevent endless game loops, two fundamental rules restrict where stones can be placed. The Suicide Rule is that player is strictly prohibited from placing a stone on an intersection where it would have zero liberties, unless that move simultaneously completes the capture of an opponent's surrounding group. If the move results in a capture, the opponent's stones are removed instantly, which immediately frees up new liberties for the newly placed stone. The 'Ko' (meaning repetition) rule prevents an infinite loop where players repeatedly capture and recapture the exact same stone. If Player A captures a single stone and creates a board state identical to the previous turn, Player B cannot immediately recapture that stone on the next move. Player B must make a move elsewhere on the board first, giving Player A the choice to defend or trade control of another section of the board.",
        imageSrc: "images/ko.png"
    },
    {
        subtitle: "Life, Death and Two Eyes",
        description: "As the board fills with stones, groups naturally become surrounded by enemy forces. To avoid eventual capture and permanently secure a position on the board, a group must achieve unconditional life by constructing at least two separate internal spaces, known in Go terminology as eyes. An 'eye' is an empty intersection completely enclosed by your own living stones. Under the Suicide Rule, an opponent cannot play inside your eye because a stone placed there would have zero liberties. The only exception is if playing inside the eye instantly takes the final liberty of your entire surrounding group. However, if your group encloses two independent eyes, the opponent would need to play in both spaces at the exact same time to remove your final liberties—an absolute physical impossibility in a turn-based game. Therefore, a group with two distinct eyes can never be captured under any circumstances. Conversely, surrounded groups that fail to form two eyes before being cut off are declared 'dead' at the end of the game and are removed as prisoners without requiring the opponent to fill in every space manually.",
        imageSrc: "images/eyes.png"
    },
    {
        subtitle: "Scoring Methods and Victory",
        description: "A game of Go concludes when both players agree that no further profitable moves, tactical threats, or boundary defenses remain on the board. Both players consecutively declare a pass, and the game enters the scoring phase. Unlike many strategy games where the primary goal is capturing enemy units, the ultimate objective in Go is controlling spatial territory across the grid. Globally, two primary official rule sets are used to calculate the final winner, which are the Japanese rules and the Chinese Rules. Japanese Rules (Territory Scoring): A player's final score is calculated by counting the number of empty intersections completely enclosed by their living stones, plus the total number of prisoners captured from the opponent throughout the match. Dead stones remaining inside your territory at the end of the game are added directly to your prisoner total. Chinese Rules (Area Scoring): A player's final score is determined by the overall area they occupy across the board. This includes all empty intersections enclosed by their stones plus the actual living stones they physically have remaining on the grid. Prisoners are not counted directly because placing more living stones on the board naturally balances out the score. Because Black enjoys a distinct tactical advantage by moving first, White is granted a point compensation called Komi (typically 6.5 points under Japanese rules or 7.5 under Chinese rules). The half-point fraction guarantees that a match can never end in a draw.",
        imageSrc: "images/rule-example.png"
    } 
];

document.addEventListener("DOMContentLoaded", () => {
    const subtitleEl = document.getElementById("slide-subtitle");
    const descriptionEl = document.getElementById("slide-description");
    const imageEl = document.getElementById("slide-image");
    const dots = document.querySelectorAll(".dot");
    const slideshowContainer = document.querySelector(".slideshow-container");

    let isAnimating = false;

    function updateSlide(index) {
        const data = slideData[index];
        if (!data || isAnimating) return;

        isAnimating = true;

        // Fade Out
        slideshowContainer.classList.add("fading");

        // Update slide content
        setTimeout(() => {
            subtitleEl.textContent = data.subtitle;
            descriptionEl.textContent = data.description;
            imageEl.src = data.imageSrc;
            imageEl.alt = data.subtitle;

            // Update active dot styling
            dots.forEach(dot => dot.classList.remove("active"));
            if (dots[index]) {
                dots[index].classList.add("active");
            }

            // Fade In
            slideshowContainer.classList.remove("fading");
            
            setTimeout(() => {
                isAnimating = false;
            }, 300);
        }, 300);
    }

    // Click listeners for dots
    dots.forEach(dot => {
        dot.addEventListener("click", (e) => {
            const index = parseInt(e.target.getAttribute("data-index"), 10);
            updateSlide(index);
        });
    });
});