let step_count = 1;

function next() {
    step_count++;
    let next_fs = "#step" + step_count;
    $(next_fs).addClass('active');
}

// dropdown content not disappearing when click in
$(document).on('click', '#info-dropdown-content', function (e) {
    e.stopPropagation();
});

// 0 to expand, 1 to collapse
let collapsed = new Set();
let expanded = new Set();
let flag = 0;
function showHiddenRow(rowParent) {
    let $icon_arrow = $(rowParent).children().children();
    const href = $(rowParent).attr('href');

    // check if the parent row has collapsed or not
    for(const _href of collapsed){
        if(href === _href){
            flag = 0;
            break;
        }
    }
    // check if the parent row has expand or not
    for(const _href of expanded){
        if(href === _href){
            flag = 1;
            break;
        }
    }

    const class_name = '.' + href.split('#')[1];
    let $all_rows = $(class_name);
    if(flag === 0){
        // expand
        $all_rows.css('display', 'table-row');
        $icon_arrow.css('rotate', '90deg');
        expanded.add(href);
        collapsed.delete(href);
        flag = 1;
    }else{
        // collapse
        $all_rows.css('display', 'none');
        $icon_arrow.css('rotate', '-4deg');
        collapsed.add(href);
        expanded.delete(href);
        flag = 0;
    }
}