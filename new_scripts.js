fetch('sm_library.json')
    .then(response => response.json()) // Convert the response to JSON
    .then(papers => {
        const resourcesContainer = document.getElementById("resources");

        // Loop through the papers and create dynamic content
        papers.forEach((paper, index) => {
            // Create container for each paper
            const paperDiv = document.createElement('div');
            paperDiv.style.marginBottom = "20px";

            // Add paper title and link
            const titleLink = document.createElement('a');
            // titleLink.href = paper.url;
            titleLink.target = "_blank";
            titleLink.innerHTML = `<b>${paper.author}</b><br>${paper.title}`;
            paperDiv.appendChild(titleLink);
            
            // Add optional code link if exists
            if (paper.code_url) {
                const codeLink = document.createElement('a');
                codeLink.href = paper.code_url;
                codeLink.target = "_blank";
                codeLink.innerHTML = `<br>[Explore the Code]`;
                paperDiv.appendChild(codeLink);
            }

            // Create "See Abstract" button
            const abstractButton = document.createElement('button');
            abstractButton.textContent = "See Abstract";
            abstractButton.style.marginTop = "10px";
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
            paperDiv.appendChild(abstractButton);

            // Create abstract section (hidden by default)
            const abstractDiv = document.createElement('div');
            abstractDiv.id = `abstract-${index}`;
            abstractDiv.style.display = "none";
            abstractDiv.style.marginTop = "10px";
            abstractDiv.innerHTML = `<div style="text-align: justify;font-size: smaller;">${paper.abstract}</div>`;
            paperDiv.appendChild(abstractDiv);

            // Append the paper entry to the resources section
            resourcesContainer.appendChild(paperDiv);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
