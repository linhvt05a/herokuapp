$('.select2').select2({
    width: 'resolve',
});
$('#metadatas').select2({
    width: 'resolve',
    placeholder: "--Lựa chọn--",
});
$('#click_add').click(function(){
    name = $("#name").val();
    code = $("#code").val();
    workflow = $("#workflow").val();
    fs = $("#fs").val();
    if (name =="" || code =="" | workflow =="" || fs=="")
    {
        swal({
        title: "Cảnh báo!",
        text: "Vui lòng điền đầy đủ thông tin !",
        icon: "error",
        timer: 1000,
        });
    }
    else {
    $('#form_project_type').submit();
    }
});
$('#click_add_metadata').click(function(){
    metadata = $("#metadatas").val();
    if (metadata == "")
    {
        swal({
        title: "Cảnh báo!",
        text: "Vui lòng chọn metadata !",
        icon: "error",
        timer: 1000,
        });
    }
    else {
        $('#formaddmetadata').submit();
    }
 });
function deleted(id) {
    name_metadata = $('#val_name_' + id).val();
    swal({
        title: "Bạn có chắc muốn xóa không?",
        text: name_metadata + " !",
        icon: "warning",
        buttons: {
            cancel: {
                text: "Không",
                value: null,
                visible: true,
                className: "",
                closeModal: true,
            },
            confirm: {
                text: "Có",
                value: true,
                visible: true,
                className: "",
                closeModal: false
            }
        }
    })
    .then((isConfirm) => {
        if (isConfirm) {
            $("#delete_metadata_"+id).click();
        } else {
            return false;
        }
    });
}
function click_add_metadata()
{
    $('#add_metadata').click();
}


