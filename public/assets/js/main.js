
$(document).ready(function () {

    //$('#test').append('HELLO WORLD?');

    $.get('/api/friends', function (data) {
        $('#test').append(data[2].name);
        console.log('success');
    });

});




/* for (let i = 0; i < people.length; i++) {
    $('#people-list').append(
        `<li class="mdl-list__item mdl-list__item--three-line">
            <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>Amazing people, always ready to help!</span>
                <span class="mdl-list__item-text-body">
                    ${people[i].name}, ${people[i].age}, ${people[i].favColor}
                </span>
            </span>
        </li>`
    );
} */