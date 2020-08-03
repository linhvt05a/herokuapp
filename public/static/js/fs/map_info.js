function initInfo(map, position = 'bottomleft', css = 'panel') {
    var info = L.control({position: 'bottomright'});
    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', css); // create a div with a class "info"
        this.update('');
        return this._div;
    };


    // method that we will use to update the control based on feature properties passed
    info.update = function (content) {
        if (content != '') {
            this._div.innerHTML = content;
        } else {
            this._div.innerHTML = '';
        }
    };

    return info;
}

function initInfoTopRight(map, position = 'topright', css = 'panel title-address') {
    var info = L.control({position: 'topright', });
    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', css); // create a div with a class "info"
        this.update('');
        return this._div;
    };


    // method that we will use to update the control based on feature properties passed
    info.update = function (content) {
        if (content != '') {
            this._div.innerHTML = content;
        } else {
            this._div.innerHTML = '';
        }
    };

    return info;
}


function initInfoBottomLeft(map) {
    var legend = L.control({position: 'bottomleft'});
    legend.onAdd = function (map) {
        this._div = L.DomUtil.create('div'); // create a div with a class "info"
        this.update('');
        return this._div;
    };


    // method that we will use to update the control based on feature properties passed
    legend.update = function (content) {
        if (content != '') {
            this._div.innerHTML = content;
        } else {
            this._div.innerHTML = '';
        }
    };

    return legend;
}

function initInfoCard(map) {
    var info = L.control();
    info.onAdd = function (map) {
        this._div = L.DomUtil.create('div', 'info'); // create a div with a class "info"
        return this._div;
    };


    // method that we will use to update the control based on feature properties passed
    info.update = function (strtitle, strcontent) {
        this._div.innerHTML = '';

        var card = L.DomUtil.create('div', 'portlet light ');
        this._div.appendChild(card)

        var header = L.DomUtil.create('div', 'portlet-title');
        card.appendChild(header)
        var title = L.DomUtil.create('div', 'caption');
        var text_in_title = L.DomUtil.create('span', 'caption-subject font-dark bold uppercase')


        var divicon = L.DomUtil.create('div', '');
        var icon = L.DomUtil.create('i', 'fa fa-close');

        header.appendChild(title)
        title.appendChild(text_in_title)

        header.appendChild(divicon)
        divicon.appendChild(icon)
        icon.addEventListener("click", function () {
            this.block.close();
        });

        var block = L.DomUtil.create('div', 'portlet-body');
        card.appendChild(block)

        text_in_title.innerHTML = strtitle;
        block.innerHTML = strcontent;
        icon.block = this;
    };

    info.updatelist = function (strtitle, strcontent) {
        this._div.innerHTML = '';

        var card = L.DomUtil.create('div', 'card');
        this._div.appendChild(card)

        var header = L.DomUtil.create('div', 'card-header bg-white');
        card.appendChild(header)

        var title = L.DomUtil.create('span', 'card-title');
        var divicon = L.DomUtil.create('span', 'float-right');
        var icon = L.DomUtil.create('i', 'fa fa-close');
        header.appendChild(title)
        header.appendChild(divicon)
        divicon.appendChild(icon)
        icon.addEventListener("click", function () {
            this.block.close();
        });

        var block = L.DomUtil.create('ul', 'list-group list-group-flush');
        card.appendChild(block)

        title.innerHTML = strtitle;
        block.innerHTML = strcontent;
        icon.block = this;
    };

    info.close = function () {
        this._div.innerHTML = '';
    }

    return info;
}