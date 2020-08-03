const fs_id = parseInt($('#frm_fs input[name=fs_id]').val());
const group_id = parseInt($('#frm_fs input[name=layout_group_id]').val());

const user_token = $('#user_token').val();

const url_get = $('#url_get').val();
const url_add_com = $('#url_add_com').val();
const url_del_com = $('#url_del_com').val();
const url_add_com_recal = $('#url_add_com_recal').val();
const url_edit_meta = $('#url_edit_meta').val();
const url_get_route = $('#url_get_route').val();
const current_url = $('#url_view_finacialstatement').val();
let unit_type_list = $('#unit_type_list').val();

const map_table = {
    2: "cost_timeline_table", 3: {
        1: {
            value: [1,2, 3, 4],
            id_name: "sale_income_table"
        },
        2: {
            value: [5, 6, 7, 8, 9, 10, 11, 12, 13, 14],
            id_name: "operation_income_table"
        },
        /*
        3: {
            value: [8,9,10,11,12],
            id_name: "other_income_table"
        },*/
    }, 4: "cash_flow_table"
};

const map_valid = {
    "usd": ' data-parsley-required="" data-parsley-type="digits"',
    "usd/m2": ' data-parsley-required="" data-parsley-type="digits"',
    "%": ' data-parsley-range="[0, 100]" data-parsley-type="digits"',
    "m2": ' data-parsley-required="" data-parsley-type="digits"',
    "floor": ' data-parsley-required="" data-parsley-type="digits"',
    "number": 'data-parsley-errors-messages-disabled="" data-parsley-required="" data-parsley-type="digits"',
    "0": 'data-parsley-errors-messages-disabled="" data-parsley-required="" ',
    "int": 'data-parsley-errors-messages-disabled="" data-parsley-required="" data-parsley-type="integer"',
    "float": 'data-parsley-errors-messages-disabled="" data-parsley-required="" data-parsley-type="digits"',
    "char": 'data-parsley-errors-messages-disabled="" data-parsley-required=""',
    "unit": 'data-parsley-errors-messages-disabled="" data-parsley-required="" data-parsley-type="integer"'
};
