fetch('sm_library.json')
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

            // Create "See Abstract" button, aligned to the right
            const abstractButton = document.createElement('button');
            abstractButton.textContent = "See Abstract";
            abstractButton.style.fontSize = "11px"; // Reduced font size
            abstractButton.style.marginLeft = "10px";
            abstractButton.style.backgroundColor = "#134074"; // Green background
            abstractButton.style.color = "white"; // White text background-color: #134074; color: white;
            abstractButton.style.cursor = "pointer"; // changes to pointer at hover
            abstractButton.style.padding = "5px 10px";
            abstractButton.style.borderRadius = "4px"; // Rounded corners
            abstractButton.onclick = () => {
                const abstractDiv = document.getElementById(`abstract-${index}`);
                if (abstractDiv.style.display === "none") {
                    abstractDiv.style.display = "block";
                    abstractButton.textContent = "Hide Abstract";
                } else {
                    abstractDiv.style.display = "none";
                    abstractButton.textContent = "See Abstract";
                }
            };

            // Create abstract section (hidden by default)
            const abstractDiv = document.createElement('div');
            abstractDiv.id = `abstract-${index}`;
            abstractDiv.style.display = "none";
            abstractDiv.style.marginTop = "10px";
            abstractDiv.style.marginBottom = "20px"; // Add space below the abstract
            abstractDiv.innerHTML = `<div style="text-align: justify; font-size: smaller;">${paper.abstract}</div>`;

            // Append the title, author, and button to the container
            paperDiv.appendChild(paperInfoDiv);
            paperDiv.appendChild(abstractButton);

            // Append the abstract after the main container
            resourcesContainer.appendChild(paperDiv);
            resourcesContainer.appendChild(abstractDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));

