$(document).ready(function () {
    let notes = [];
    let isEdit = false;
    seedNotes();
    bindNotes();

    $('#btn-save').click(function () {
        var title = $('#title-field').val();
        var description = $('#body-field').val();
        if (title === '') {
            alert('Please add a title to your note.');
            return;
        }
        var created = new Date();
        // var color = $('notepad').css('background-color');
        createNote(title, description, created, "#ff0000");
        $('#title-field').attr("value", "");
        $('#body-field').attr("value", "");
        bindNotes();
    })

    function createNote(title, description, date, color) {
        notes.push({
            title,
            description,
            date,
            color
        })
    }

    function bindNotes() {
        $("note-list ul").empty();
        notes.forEach(n => {
            $("note-list ul").append(`
        <li>
            <a href="#">
                <h2>${n.title}</h2>
                <p>${n.description}</p>
            </a>
        </li>`)
        })

    }

    function seedNotes() {
        for (let i = 0; i < 1; i++) {
            notes.push({
                date: new Date(),
                title: "Buy coffee",
                description: "Lorem Ipsum is simply dummy text of",
                color: "#ff000"
            })
        }
    }
})