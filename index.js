/* 
This function enables a dropdown menu when hovering a button.
The button and the dropdown content need to be inside a div as 
siblings. dropdown button class and a class that makes the 
dropdown content visible need to be passed to the function
*/

function enableSimpleDropdownBehaviour(dropBtnClass, visibleClass) {
    const dropdownButtons = document.querySelectorAll(dropBtnClass);

    dropdownButtons.forEach((button) => {
        const dropdownContent = button.nextElementSibling;

        button.addEventListener("mouseover", () => {
            dropdownContent.classList.add(visibleClass);
        });

        button.addEventListener("mouseout", (event) => {
            if (!dropdownContent.contains(event.relatedTarget)) {
                dropdownContent.classList.remove(visibleClass);
            }
        });

        dropdownContent.addEventListener("mouseover", () => {
            dropdownContent.classList.add(visibleClass);
        });

        dropdownContent.addEventListener("mouseout", (event) => {
            if (!button.contains(event.relatedTarget)) {
                dropdownContent.classList.remove(visibleClass);
            }
        });
    });
}
