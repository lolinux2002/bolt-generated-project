let selectedValues = {
      section1: 'none',
      section2: 'none',
      section3: 'none'
    };

    document.querySelectorAll('.icon-group').forEach(group => {
      group.addEventListener('click', function(event) {
        if (event.target.closest('.icon-option')) {
          const clickedOption = event.target.closest('.icon-option');
          group.querySelectorAll('.icon-option').forEach(option => option.classList.remove('selected'));
          clickedOption.classList.add('selected');
          selectedValues[group.id] = clickedOption.dataset.value;
        }
      });
    });

    const generateButton = document.getElementById('generateButton');
    const responseSection = document.getElementById('responseSection');

    generateButton.addEventListener('click', function() {
      generateButton.textContent = 'Generation in progress...';
      responseSection.textContent = '';

      const url = new URL('https://lolinux2002.app.n8n.cloud/webhook/84513d9e-b037-47f4-8ccd-9763dd8ec3e1');
      Object.keys(selectedValues).forEach(key => url.searchParams.append(key, selectedValues[key]));

      fetch(url, {
        method: 'GET',
      })
      .then(response => {
        if (response.ok) {
          return response.text();
        } else {
          return response.text().then(text => {
            throw new Error(`Failed to send data. Status: ${response.status}, Response: ${text}`);
          });
        }
      })
      .then(data => {
        responseSection.textContent = data;
      })
      .catch(error => {
        console.error('Error sending data:', error);
        responseSection.textContent = `An error occurred: ${error.message}. Please try again.`;
      })
      .finally(() => {
        generateButton.textContent = 'Generate';
      });
    });
