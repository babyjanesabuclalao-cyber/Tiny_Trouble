/* =========================
   HERO DROPDOWN
========================= */

const heroButton =
    document.getElementById("heroButton");

const heroDropdown =
    document.getElementById("heroDropdown");


/* =========================
   OPEN / CLOSE DROPDOWN
========================= */

heroButton.addEventListener(
    "click",
    function(event) {

        event.preventDefault();

        heroDropdown.classList.toggle("show");

    }
);


/* =========================
   CLOSE DROPDOWN
   WHEN CLICKING OUTSIDE
========================= */

document.addEventListener(
    "click",
    function(event) {

        if (
            !heroButton.contains(event.target) &&
            !heroDropdown.contains(event.target)
        ) {

            heroDropdown.classList.remove("show");

        }

    }
);


/* =========================
   MOJO JOJO EYES
========================= */

const pupils =
    document.querySelectorAll(".pupil");


document.addEventListener(
    "mousemove",
    function(event) {

        pupils.forEach(
            function(pupil) {

                const eye =
                    pupil.parentElement;


                const eyeRect =
                    eye.getBoundingClientRect();


                const eyeCenterX =
                    eyeRect.left +
                    eyeRect.width / 2;


                const eyeCenterY =
                    eyeRect.top +
                    eyeRect.height / 2;


                const angle =
                    Math.atan2(

                        event.clientY -
                        eyeCenterY,

                        event.clientX -
                        eyeCenterX

                    );


                const distance = 6;


                const x =
                    Math.cos(angle) *
                    distance;


                const y =
                    Math.sin(angle) *
                    distance;


                pupil.style.transform =
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    )`;

            }
        );

    }
);
