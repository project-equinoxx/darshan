// terminal.js

document.addEventListener('DOMContentLoaded', function() {
    const terminalInput = document.getElementById('terminal-input');
    const terminalOutput = document.getElementById('terminal-output');

    terminalInput.addEventListener('keypress', async function(event) {
        if (event.key === 'Enter') {
            const command = terminalInput.value;
            terminalInput.value = '';

            // Handle search functionality
            if (command.startsWith('search ')) {
                const searchTerm = command.substring(7).trim();
                if (searchTerm) {
                    terminalOutput.innerHTML += `<p>Searching for: ${searchTerm}</p>`;
                    try {
                        const searchResults = await searchOnWebsite(searchTerm); // Function to search on website
                        displaySearchResults(searchResults);
                    } catch (error) {
                        terminalOutput.innerHTML += `<p>Error searching: ${error.message}</p>`;
                    }
                } else {
                    terminalOutput.innerHTML += `<p>Please provide a search term.</p>`;
                }
            }

            // Handle Google search functionality
            else if (command.startsWith('google ')) {
                const query = command.substring(7).trim();
                if (query) {
                    terminalOutput.innerHTML += `<p>Searching Google for: ${query}</p>`;
                    try {
                        const googleResults = await searchGoogle(query); // Function to search Google
                        displayGoogleResults(googleResults);
                    } catch (error) {
                        terminalOutput.innerHTML += `<p>Error searching Google: ${error.message}</p>`;
                    }
                } else {
                    terminalOutput.innerHTML += `<p>Please provide a query to search on Google.</p>`;
                }
            }

            // Handle ChatGPT interaction
            else if (command.toLowerCase() === 'chat') {
                terminalOutput.innerHTML += `<p>Initializing ChatGPT...</p>`;
                try {
                    const response = await chatWithGPT(); // Function to interact with ChatGPT
                    terminalOutput.innerHTML += `<p>ChatGPT: ${response}</p>`;
                } catch (error) {
                    terminalOutput.innerHTML += `<p>Error interacting with ChatGPT: ${error.message}</p>`;
                }
            }

            // Handle unknown commands
            else {
                terminalOutput.innerHTML += `<p>'${command}' is not recognized as a command.</p>`;
            }

            terminalOutput.scrollTop = terminalOutput.scrollHeight;
        }
    });

    // Function to search on the website (hypothetical)
    async function searchOnWebsite(searchTerm) {
        // Example: Replace with actual search implementation on your website or backend
        return [
            { title: 'Result 1', url: 'https://example.com/result1' },
            { title: 'Result 2', url: 'https://example.com/result2' },
            { title: 'Result 3', url: 'https://example.com/result3' }
        ];
    }

    // Function to display search results
    function displaySearchResults(results) {
        results.forEach(result => {
            terminalOutput.innerHTML += `<p><a href="${result.url}" target="_blank">${result.title}</a></p>`;
        });
    }

    // Function to search Google (hypothetical, replace with actual API call)
    async function searchGoogle(query) {
        // Example: Replace with actual Google search API call
        const response = await fetch(`https://api.example.com/google-search?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Failed to fetch Google results');
        }
        const data = await response.json();
        return data.results;
    }

    // Function to display Google search results
    function displayGoogleResults(results) {
        results.forEach(result => {
            terminalOutput.innerHTML += `<p><a href="${result.link}" target="_blank">${result.title}</a><br>${result.snippet}</p>`;
        });
    }

    // Function to interact with ChatGPT (hypothetical, replace with actual API call)
    async function chatWithGPT() {
        // Example: Replace with actual ChatGPT API call
        const response = await fetch('https://api.example.com/chat-gpt', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: 'Hello, ChatGPT!' })
        });
        if (!response.ok) {
            throw new Error('Failed to chat with ChatGPT');
        }
        const data = await response.json();
        return data.response;
    }
});
