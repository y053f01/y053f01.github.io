$(document).ready(function() {
    const description = $('#description');
    const inputLine = $('#input-line');
    const commandInput = $('#command-input');
    const outputDiv = $('#output');

    // Typewriter effect function
    function typeWriter(element, text, delay, callback) {
        let i = 0;
        function type() {
            if (i < text.length) {
                element.html(element.html() + text.charAt(i));
                i++;
                setTimeout(type, delay);
            } else if (callback) {
                callback();
            }
        }
        type();
    }

    // Function to sanitize input
    function sanitizeInput(input) {
        // Create a div element to use the browser's built-in text handling
        const div = document.createElement('div');
        div.appendChild(document.createTextNode(input));
        return div.innerHTML;
    }

    // Command history array
    let commandHistory = [];
    let historyIndex = -1;

    // Start the typewriter effect
    description.removeClass('hidden');
    typeWriter($('#welcome-text'), 'Welcome to My shellpage', 50, function() {
        typeWriter($('#instruction-text'), " Type 'help' to see the list of available commands.", 40, function() {
            inputLine.removeClass('hidden');
            commandInput.focus(); // Focus on the input field
        });
    });

    // Handle keydown events on the command input
    commandInput.on('keydown', function(event) {
        switch (event.key) {
            case 'Enter':
                handleEnterKey();
                break;
            case 'ArrowUp':
                navigateCommandHistory('up');
                break;
            case 'ArrowDown':
                navigateCommandHistory('down');
                break;
            default:
                // Reset history index when typing a new command
                historyIndex = -1;
        }
    });

    // Function to handle 'Enter' key press
    function handleEnterKey() {
        let input = commandInput.val().trim();
        let sanitizedInput = sanitizeInput(input);

        if (sanitizedInput !== '') {
            // Add command to history
            commandHistory.unshift(sanitizedInput);

            // Process command
            let output = '';
            switch (sanitizedInput.toLowerCase()) {
                case 'whoami':
                    output = '<div id="whoami">Hi, thanks to visit my shellpage, I am Yousef aka as y053f01 in social media, I am web developer as same as I am learning CyberSecurity, I love coding too much, I hope you find my shellpage interested to you. Also I leaved a copy of this project in "projects" command if you would like to use it. thanks and enjoy :)</div>';
                    break;
                case 'skills':
                    output = `
                    <div id="skills-a">I am very talented person, I have plenty of various skills in web development, including those web development languages. Like HTML,CSS, JavaScript and PHP, flask, and Python as same as .NET and many other languages. </div>
                    <div id="skills-b">Web Development:</div>
                    <div id="skills-c">[=========> ] 90%</div>
                    <div id="skills-a">My cyber security is also great, and I am still learning and moving another step forward everyday.</div>
                    <div id="skills-b">Cyber Security:</div>
                    <div id="skills-c">[====>      ] 40%</div>
                    <div id="skills-a">In the other thing, I have an awesome server in clouding, I have built a private cloud server, it really very awesome and great, I used flask application and python to make it.</div>
                    <div id="skills-b">Clouding experience:</div>
                    <div id="skills-c">[===>       ] 30%</div>
                    `;
                    break;
                case 'projects':
                    output = `
                        <div id="project-link">1. <a href="https://github.com/y053f01/python/blob/master/fh_xxxxxx.crack.py" target="_blank">fh_xxxxxx.crack.py</a> - Wifi crack for FiberHome Modem Model: HG6245N.</div>
                        <div id="project-link">2. <a href="#" target="_blank">phantomCloud v3.1</a> - A private cloud server, if you would like to use it, contact me on Instagram @y053f01.</div>
                        <div id="project-link">2. <a href="#" target="_blank">shellpage</a> - A free web page as shell command for you :)</div>
                    `;
                    break;
                case 'certificates':
                    output = `
                        <div class="certificates">
                            <div id="certs">
                                <div id="title">English</div>
                                <a href="images/cert1.jpg" target="_blank"><img src="images/cert1.jpg" alt="Certificate 4"></a>
                                <div id="descimg">Highest mark in English Foundation.
                                </div>
                            </div>
                            <div id="certs">
                                <div id="title">CyberMission (CTF)</div>
                                <a href="images/cert2.png" target="_blank"><img src="images/cert2.png" alt="Certificate 1"></a>
                                <div id="descimg">Joining an incredible cyber mission capture the flag competition.
                                </div>
                            </div>
                            <div id="certs">
                                <div id="title">TryHackMe</div>
                                <a href="images/THM-D0QDNQHIXR.png" target="_blank"><img src="images/THM-D0QDNQHIXR.png" alt="Certificate 2"></a>
                                <div id="descimg"> A certification from TryHackMe.com
                                </div>
                            </div>
                            <div id="certs">
                                <div id="title">TryHackMe</div>
                                <a href="images/THM-QO1L3NTVS6.png" target="_blank"><img src="images/THM-QO1L3NTVS6.png" alt="Certificate 3"></a>
                                <div id="descimg">A certification from TryHackMe.com
                                </div>
                            </div>
                        </div>
                    `;
                    break;
                case 'help':
                    output = '<div id="commands">Available commands:\n\nwhoami\nskills\nprojects\ncertificates\nhelp</div>';
                    break;
                default:
                    output = '<div id="command-error"> Command not found: ' + sanitizedInput + '</div>';
            }

            // Display command and output in terminal
            outputDiv.append(`<div class="executed-command">${$('#prompt').text()} ${sanitizedInput}</div><div>${output}</div>`);
        }

        // Clear input field
        commandInput.val('');

        // Reset history index after submitting command
        historyIndex = -1;
    }

    // Function to navigate command history
    function navigateCommandHistory(direction) {
        if (commandHistory.length === 0) {
            return;
        }

        if (direction === 'up') {
            // Move to previous command in history
            historyIndex = Math.min(historyIndex + 1, commandHistory.length - 1);
        } else if (direction === 'down') {
            // Move to next command in history
            historyIndex = Math.max(historyIndex - 1, -1);
        }

        // Update input field with history command
        if (historyIndex !== -1) {
            commandInput.val(commandHistory[historyIndex]);
        } else {
            commandInput.val(''); // Clear input if no history command found
        }
    }
});
