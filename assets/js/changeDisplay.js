document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll('.checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const targetId = this.getAttribute('data-target');
            const targetSection = document.querySelector(`#${targetId}`);

            if (this.checked) {
                targetSection.style.display = 'block';
            } else {
                targetSection.style.display = 'none';
            }

            const checkboxStates = {};
            checkboxes.forEach(checkbox => {
                checkboxStates[checkbox.getAttribute('data-target')] = checkbox.checked;
            });
            localStorage.setItem('checkboxStates', JSON.stringify(checkboxStates));
        });
    });

    const savedCheckboxStates = JSON.parse(localStorage.getItem('checkboxStates'));
    if (savedCheckboxStates) {
        for (const targetId in savedCheckboxStates) {
            const targetSection = document.querySelector(`#${targetId}`);
            const checkbox = document.querySelector(`[data-target="${targetId}"]`);
            if (targetSection && checkbox) {
                if (savedCheckboxStates[targetId]) {
                    targetSection.style.display = 'block';
                    checkbox.checked = true;
                } else {
                    targetSection.style.display = 'none';
                    checkbox.checked = false;
                }
            }
        }
    }

    const panelDivs = ['recommandes', 'services', 'annonces', 'support', 'actions', 'widgets', 'hints'];

    panelDivs.forEach(divId => {
        const div = document.querySelector(`#${divId}`);
        const checkbox = document.querySelector(`[data-target="${divId}"]`);

        if (div && checkbox) {
            if (checkbox.checked) {
                div.style.display = 'block';
            } else {
                div.style.display = 'none';
            }
        }
    });
});