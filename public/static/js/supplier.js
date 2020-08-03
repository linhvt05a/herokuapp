$(document).ready(function () {

    ///////
    //START FUNCTION
    //////
    function createNewSupplierContact(ele) {
        default_id = $('#contact_default');
        $('select.select2').select2('destroy');
        new_ele = default_id.after(default_id.clone().removeAttr('id'));
        new_ele.find('input').val('')
        $('select.select2').select2();
        recountSupplierContact()
    }

    function recountSupplierContact() {
        $.each($('.number_supplier'), function (index, value) {
            value.textContent = index + 1
        });
    }

    function deleteSupplier(ele) {
        ele.preventDefault();
        if ($('.number_supplier').length !== 1) {
            ele.currentTarget.parentElement.parentElement.remove();
            recountSupplierContact();
        } else {
            $(ele.currentTarget.parentElement.parentElement).find('input').val('')
        }
    }


    ///////
    //END FUNCTION
    //////


    //////
    //START DETECT EVENT
    /////

    /*Detect click delete concurrently*/
    $(document).on('click', '.edit_supplier', function (ele) {
        editSupplier(ele)
    });

    /*Detect click delete supplier contact*/
    $(document).on('click', '.delete_supplier_contact', function (ele) {
        deleteSupplier(ele)
    });

    /*Detect click create user*/
    $('.add_supplier_contact').on('click', function (ele) {
        createNewSupplierContact(ele)
    });

    //////
    //END DETECT EVENT
    /////

    //AUTO CALL
});