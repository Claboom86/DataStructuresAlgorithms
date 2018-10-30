"use strict";
$(document).ready(function () {

    class Bug {
        constructor(title, description) {
            this.title = title;
            this.description = description;
        }
    }

    class BugList {
        constructor() {
            this.bugs = [];
        }
        add(info) {
            this.bugs.push(info);
        }
        delete(info) {
            this.bugs.shift(info);
            // this.display();
        }
        display() {
            $(".bug-container").html("");
            this.bugs.forEach((bug) => {
                $(".bug-container").append(`
                    <div class="bug">
                        <h3 class="display-title">${bug.title}</h3>
                        <p class="display-description">${bug.description}</p>
                        <button class="checked" type="button"></button>
                    </div>`);
            });

            $(".checked").on("click", (event) => {
                bugList.delete();
                bugList.display();
                console.log('hey');
            });
        }
    }

    let bugList = new BugList;

    $(document).on("click", ".submit", (event) => {
        let title = $(".input-title").val();
        let description = $(".input-description").val();
        bugList.add(new Bug(title, description));
        bugList.display();
    });

    $(document).on("click", ".checked", (event) => {
        bugList.delete();
    });


});