'use scrict'

/*
File upload - Code by Zsolt Király
v1.0.4 - 2018-06-25
*/
var fileUpload = function() {

    var forEach = function (array, callback, scope) {
        var i = 0;
        for (; i < array.length; i++) {
            callback.call(scope, i, array[i]);
        }
    }

    function file() {

        function signatura() {
            if (window['console']) {
                const text = {
                    black: '%c     ',
                    blue: '%c   ',
                    author: '%c  Zsolt Király  ',
                    github: '%c  https://zsoltkiraly.com/'
                }

                const style = {
                    black: 'background: #282c34',
                    blue: 'background: #61dafb',
                    author: 'background: black; color: white',
                    github: ''
                }

                console.log(text.black + text.blue + text.author + text.github, style.black, style.blue, style.author, style.github);
            }
        }

        signatura();

        var fileInputs = document.querySelectorAll('.upload-container .upload-input input.file-input');

        forEach(fileInputs, function (index, fileInput) {
            fileInput.addEventListener('change', function() {

                var valueInput = this.value;
                var placeholder = this.previousElementSibling;

                if (valueInput.length > 0) {
                    var filename = valueInput.replace(/^.*\\/, "");
                    placeholder.innerHTML = filename;

                } else {
                    placeholder.innerHTML = 'No file selected';
                }

            }, false);


            fileInput.addEventListener('mouseover', function() {
                this.parentElement.classList.add('active');
            }, false);


            fileInput.addEventListener('mouseout', function() {
                this.parentElement.classList.remove('active');
            }, false);

        });
    }

    function app() {
        file();
    }

    return {
        app: app
    }
}();

window.addEventListener('load', function() {
    fileUpload.app();
}, false);