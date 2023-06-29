document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#sub').addEventListener('click', function() {

        document.querySelector('#divider').innerHTML = ':Your Review:';
        let parts = document.querySelectorAll('.parts');
        let user = document.querySelectorAll('.form-control');

        parts[0].innerHTML = user[2].value;
        parts[1].innerHTML = 'Rated - ' + user[3].value + '/10';
        parts[2].innerHTML = user[4].value;
        parts[3].innerHTML = 'by ' + user[0].value + ' ' + user[1].value;
    });
});