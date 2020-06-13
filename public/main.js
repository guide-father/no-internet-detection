let state = "online";
    function updateIfRequire(currentState) {
        if (state !== currentState) {
            state = currentState;
            let ref = document.querySelector(".detect-div");
            ref.innerHTML = ""
            switch (state) {
                case "online":
                    ref.innerHTML = `<div class="uk-alert-success">
                                         <h1 class="uk-text-success">Online</h1>
                                    </div>`;
                    break;

                case "offline":
                    ref.innerHTML = `<div class="uk-alert-danger">
                                         <h1 class="uk-text-danger">offline</h1>
                                    </div>`
                    break;
            }

        }
    }