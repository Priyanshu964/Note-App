const addBtn = document.querySelector("#addNote");
const main = document.querySelector("#main");


// inserting savenotes into localStorage

const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);
    const data = [];

    notes.forEach(
        (note) => {
            data.push(note.value);
        }
    )
    if (data.length === 0) {
        localStorage.removeItem("notes")
    } else {
        localStorage.setItem("notes", JSON.stringify(data))
    }
    // console.log(data);
}
addBtn.addEventListener('click',
    function () {
        addNote()
    }

)
{/* <div class="Note">
            <div class="tool">
                <i class="fa-regular fa-floppy-disk"></i>
                <i class="fa-solid fa-trash"></i>
            </div>
            <textarea></textarea> */}

const addNote = (text = "") => {
    const note = document.createElement("div");
    note.classList.add("note")
    note.innerHTML = `
    <div class="tool">
                <i class="saveBtn fa-regular fa-floppy-disk"></i>
                <i class="deleteBtn fa-solid fa-trash"></i>
            </div>
            <textarea>${text}</textarea> `;
    note.querySelector(".deleteBtn").addEventListener('click',

        function () {
            note.remove();
            saveNotes();
        }
    )
    note.querySelector(".saveBtn").addEventListener('click',

        function () {
            saveNotes()
        }
    )
    note.querySelector("textarea").addEventListener('focusout',
    function(){
        saveNotes()
    }
    )
    main.appendChild(note);
    // also save empty notes too
    saveNotes();
}

(
    function () {
        const lsNotes = JSON.parse(localStorage.getItem("notes"));
        if (lsNotes === null) {
            addNote()
        } else {
            lsNotes.forEach(
                (lsNotes) => {
                    addNote(lsNotes)
                }
            )
        }
    }
)()
