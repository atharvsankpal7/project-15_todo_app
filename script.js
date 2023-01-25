let input = document.getElementsByTagName("textarea")[0];
let add_button = document.getElementsByClassName("add_button")[0];
let notes_container = document.getElementsByClassName("notes_container")[0];

// check if notes exist in localstorage
if (localStorage.getItem("notes")) {
    notes_container.innerHTML += localStorage.getItem("notes");
}
function delete_note() {
    Array.from(notes_container.getElementsByClassName("delete_button")).forEach(
        (e) => {
            e.addEventListener("click", () => {
                console.log(e);
                e.parentElement.remove();
            });
        }
    );
}
add_button.addEventListener("click", () => {
    if (input.value !== "") {
        let note = document.createElement("div");
        note.classList.add("note");
        let icon = document.createElement("div");
        icon.classList.add("fa", "fa-remove", "delete_button");
        note.appendChild(icon);
        let note_body = document.createElement("div");
        note_body.classList.add("note_body");
        note_body.innerHTML = input.value;
        note.appendChild(note_body);
        notes_container.appendChild(note);
        input.value = "";
        delete_note();
    }
});
window.addEventListener("click", () => {
    localStorage.setItem("notes", notes_container.innerHTML);
});
delete_note();
