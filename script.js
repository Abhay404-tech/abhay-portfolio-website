 // Initialize the typed.js library
        var typed = new Typed('#element', {
            strings: [
                "Frontend Developer",
                "Java Learner",
                "Problem Solver"
            ],
            typeSpeed: 50,
            backSpeed: 50,
            loop: true
        });

        // EMAILJS CONTACT FORM
        (function () {
            emailjs.init("khSwofriEJqsxKGPm"); // Your EmailJS user ID
        })();

        const form = document.getElementById("contact-form");
        const status = document.getElementById("form-status");

        if (form) {
            form.addEventListener("submit", function (e) {
                e.preventDefault();

                status.textContent = "Sending...";
                status.style.color = "#c084fc";

                emailjs.sendForm(
                    "service_9s5f9bv",   // Your EmailJS service ID
                    "template_xht0d5e",  // Your EmailJS template ID
                    this
                ).then(
                    function () {
                        status.textContent = "✅ Message sent successfully!";
                        status.style.color = "#2ecc71";
                        form.reset();
                    },
                    function (error) {
                        status.textContent = "❌ Something went wrong. Try again.";
                        status.style.color = "#ef4444";
                        console.error("EmailJS Error:", error);
                    }
                );
            });
        }