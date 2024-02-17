/*
 * This script is responsible for managing the behavior of <details> elements 
 * when their associated <summary> elements are clicked. When a <summary> element 
 * is clicked, this script closes all other <details> elements on the page, 
 * ensuring only the clicked <details> element remains open.
 *
 * The closeOpenedDetails function is attached to each <summary> element's click 
 * event and iterates over all <summary> elements. For each <summary> element, it 
 * checks if its parent <details> element is different from the one that triggered 
 * the event. If they are different, it removes the 'open' attribute from the 
 * parent <details> element, effectively closing it.
 *
 * Date: 17/02/2024
 */

let allSummary = document.querySelectorAll("summary");

allSummary.forEach(summary => {
    summary.addEventListener('click', closeOpenedDetails);
});

function closeOpenedDetails() {
    allSummary.forEach((summary) => {
        let detail = summary.parentNode;

        if (detail != this) {
            detail.removeAttribute('open');
        }
    });
}