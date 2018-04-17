Handlebars.registerHelper('formatTime', function(time) {
    var minutes = parseInt(time / 60),
        seconds = time - minutes * 60;

    minutes = minutes.toString().length === 1 ? '0' + minutes : minutes;
    seconds = seconds.toString().length === 1 ? '0' + seconds : seconds;

    return minutes + ':' + seconds;
});

Handlebars.registerHelper('formatDate', function(ts) {
    return new Date(ts * 1000).toLocaleString();
});

Handlebars.registerHelper('ifCond', function(v1, v2, options) {
  if(v1 === v2) {
    return options.fn(this);
  }
  return options.inverse(this);
});

results.addEventListener('click', e => {

    let sortMenu = document.querySelector('.sort-menu');

    if (sortMenu) {
        if (e.target.parentNode.classList.contains('sort-menu')) {

            if (!e.target.classList.contains('active')) {
                 e.target.classList.add('active');
            }

            for (let i=sortMenu.children.length-1; i>=0; i--) {
                if (e.target != sortMenu.children[i]) {
                    if (sortMenu.children[i].classList.contains('active')) {
                        sortMenu.children[i].classList.remove('active');
                    }
                }
            }

        }
    }
});

new Promise(function(resolve) {
    window.onload = resolve;
}).then(function() {
    return Model.login(5570714, 2 | 4 | 8 | 8192);
}).then(function() {
    return Model.getUser().then(function(users) {
        header.innerHTML = View.render('header', users[0]);
    });
}).catch(function(e) {
    console.error(e);
    alert('Ошибка: ' + e.message);
});

