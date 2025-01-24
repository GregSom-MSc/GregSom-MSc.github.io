fetch('sm_Books.json')
    .then(response => response.json()) // Convert the response to JSON
    .then(papers => {
        const resourcesContainer = document.getElementById("resources");

        // Loop through the papers and create dynamic content
        papers.forEach((paper, index) => {
            // Create container for each paper with Flexbox to align items
            const paperDiv = document.createElement('div');
            paperDiv.style.display = "flex";
            paperDiv.style.justifyContent = "space-between";
            paperDiv.style.alignItems = "center";
            paperDiv.style.marginBottom = "20px";

            // Add paper title and author
            const paperInfoDiv = document.createElement('div');
            const titleLink = document.createElement('a');
            titleLink.href = paper.url;
            titleLink.target = "_blank";
            titleLink.innerHTML = `<b style="font-size: 14px;">${paper.author}</b><br><span style="font-size: 12px;">${paper.title}</span>`;
            paperInfoDiv.appendChild(titleLink);

            // Add optional code link if exists
            if (paper.code_url) {
                const codeLink = document.createElement('a');
                codeLink.href = paper.code_url;
                codeLink.target = "_blank";
                codeLink.innerHTML = `<br><span style="font-size: 12px;">[Code]</span>`;
                paperInfoDiv.appendChild(codeLink);
            }

            // Create "See summary" button, aligned to the right
            const summaryButton = document.createElement('button');
            summaryButton.textContent = "Summary";
            summaryButton.style.fontSize = "10px"; // Reduced font size
            summaryButton.style.marginLeft = "10px";
            summaryButton.style.backgroundColor = "#0E2442"; // Darker blue background, background-color, see comparison: #134074 #0E2442
            summaryButton.style.color = "white"; // White text ; color: white;
            summaryButton.style.cursor = "pointer"; // changes to pointer at hover
            summaryButton.style.padding = "10px 20px";
            summaryButton.style.borderRadius = "5px"; // Rounded corners
            summaryButton.onclick = () => {
                const summaryDiv = document.getElementById(`summary-${index}`);
                if (summaryDiv.style.display === "none") {
                    summaryDiv.style.display = "block";
                    summaryButton.textContent = "Hide Summary";
                } else {
                    summaryDiv.style.display = "none";
                    summaryButton.textContent = "Summary";
                }
            };

            // Create summary section (hidden by default)
            const summaryDiv = document.createElement('div');
            summaryDiv.id = `summary-${index}`;
            summaryDiv.style.display = "none";
            summaryDiv.style.marginTop = "10px";
            summaryDiv.style.marginBottom = "20px"; // Add space below the summary
            summaryDiv.innerHTML = `<div style="text-align: justify; font-size: smaller; max-width: 80%;">${paper.summary}</div>`;

            // Append the title, author, and button to the container
            paperDiv.appendChild(paperInfoDiv);
            paperDiv.appendChild(summaryButton);

            // Append the summary after the main container
            resourcesContainer.appendChild(paperDiv);
            resourcesContainer.appendChild(summaryDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

