function getCookie(name='csrftoken') {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function humanizeNumber(n) {
    if (!isNaN(n)) {
        n = n.toString().replace('.', '');
        while (true) {
            var n2 = n.replace(/\B(?=(\d{3})+\b)/g, ".")
            if (n == n2) break
            n = n2
        }
    }
    else {
        if (typeof n != 'undefined')
            if (n > 0 || n != '') {
                n = n.toString().replace(/\./g, '').replace(/\,/g, '.');
                if (!isNaN(n)) {
                    n = n.toString().replace('.', ',');
                    while (true) {
                        var n2 = n.replace(/\B(?=(\d{3})+\b)/g, ".")
                        if (n == n2) break
                        n = n2
                    }
                }
                else {
                    n = 0;
                }
            }
    }
    return n
}

function humanizePrice(n) {
    let value = humanizeNumber(n);

    if (value != "")
        value = value.replace('.', ',');
    return value
}