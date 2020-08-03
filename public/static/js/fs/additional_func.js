function IsJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function handleSelect(group_id) {
    if (parseInt(group_id) <= 2) {
        window.location.href = current_url + '?layout_fs_group_id=' + group_id + '&step=1';
    } else if (parseInt(group_id) >= 3) {
        window.location.href = current_url + '?layout_fs_group_id=' + group_id;
    }
}

function roundNFormatInput(value) {
	val = parseFloat(value);
	if (value == ""||isNaN(value) == true)
	{
		return value;
	}
	if(value<0)
	{
		let formatter = new Intl.NumberFormat('en-US');
		return formatter.format(parseFloat((val).toFixed(2)) * (1));
	}
	return roundNFormat(value)
}

function roundNFormat(value) {
    value = convertNullToBlank(value);
    let formatter = new Intl.NumberFormat('en-US');
    if (value !== "") {
        val = parseFloat(value);
        if (!isNaN(val)) {
            if (val >= 1000000000)
                return formatter.format(parseFloat((val).toFixed(2)));
            else if (val >= 1000000)
                return formatter.format(parseFloat((val).toFixed(2)));
            else if (val >= 1000)
                return formatter.format(parseFloat((val).toFixed(2)));
            else if (val >= 1)
                return formatter.format(parseFloat((val).toFixed(2)));
            else if (val < 0){
            	return  formatter.format(parseFloat((val).toFixed(2)) * (1)) ;
            }else
                return formatter.format(parseFloat((val).toFixed(2)));
        } else {
            return value
        }
    } else {
        return ""
    }
}

function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
        decimalCount = Math.abs(decimalCount);
        decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

        const negativeSign = amount < 0 ? "-" : "";

        let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
        let j = (i.length > 3) ? i.length % 3 : 0;

        return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
        console.log(e)
    }
}

function convertToRoman(num) {
    var roman = {M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1};
    var str = '';

    for (var i of Object.keys(roman)) {
        var q = Math.floor(num / roman[i]);
        num -= q * roman[i];
        str += i.repeat(q);
    }

    return str;
}

function convertNullToBlank(value) {
    return (value == null) ? "" : value
}

function reload(ele) {
    $(ele).closest(".card").block({
        message: '<div class="ft-refresh-cw icon-spin font-medium-2"></div>',
        timeout: 100,
        overlayCSS: {
            backgroundColor: "#FFF",
            cursor: "wait"
        },
        css: {
            border: 0,
            padding: 0,
            backgroundColor: "none"
        }
    });
}

function scrollStep() {

	var element = $(".-next").offset();
	if(!element)
	{
		element = $(".-previous").offset();
	}
	if(!element)
	{
		element = $("#step_").offset();

	}
    $('html,body').animate({
        scrollTop: element.top
    }, 'slow');
}

function loadUnit(value) {
    if (value === 'char') {
        return ''
    } else {
        return value
    }
}

function addClassStep(step) {
    step = parseInt(step);
    let tab_list = $('ul[role=tablist]');

    $(tab_list).find('li').removeClass('current done');

    $.each($(tab_list).find('li'), function () {
        let ele_a = $(this).find('a').first();
        let data_step = parseInt($(ele_a).attr('data-step'));

        if (data_step < step) {
            $(this).addClass('done');
        }

        if (data_step === step) {
            $(this).addClass('current').removeClass('done')
        }
    })
}

function openPopup() {
    $("#info_div").modal("show");
    $('#frm_add_component').parsley();
    $('#frm_add_component select[name=metadata_group]').trigger('change');
}

function getExactlyFormat(ele = null, value) {
    if (value !== "") {
        value = value.replace(/,/g, '');
    }
    if (ele !== null) {
        $(ele).val(value)
    } else {
        return value
    }
}

function onBlur(ele, value) {
    if ($(ele).parsley().isValid()) {
        value = roundNFormat(value);
        $(ele).val(value)
    } else {
        $(ele).val(roundNFormat($(ele).attr('orgv').replace(/,/g, '')));
        toastr.error("Nhập sai dữ liệu, vui lòng nhập lại")
    }

}
