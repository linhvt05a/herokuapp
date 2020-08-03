$('#myCarousel').carousel({
	pause: true,
	interval: false
});

// handles the carousel thumbnails
$('[id^=carousel-selector-]').click(function () {
	var id_selector = $(this).attr("id");
	var id = id_selector.substr(id_selector.length - 1);
	id = parseInt(id);
	$('#myCarousel').carousel(id);
	$('[id^=carousel-selector-]').removeClass('selected');
	$(this).addClass('selected');
});

// when the carousel slides, auto update
$('#myCarousel').on('slid.bs.carousel', function (e) {
	var id = $('.carousel-item.active').data('slide-number');
	id = parseInt(id);
	$('[id^=carousel-selector-]').removeClass('selected');
	$('[id=carousel-selector-' + id + ']').addClass('selected');
});


//                                   Upload File


//                                   Select Province District Ward


$(document).ready(function() {
    $('#id_province_2').change(function()
    {
        $.get(
            '/backend/location/getdistrict',
            {
                province_id: $(this).val(),
            },
            function(){
            }
        )
        .done(function(data) {
            $('#id_district_2').html('<option value>---------</option>');
            $.each(data, function(i, item) {
                $('#id_district_2').append('<option value="' + item.id + '">' + item.name + '</option>');
            })
            $('#id_ward_2').html('<option value>---------</option>');
        })
    });
});


$(document).ready(function() {
    $('#id_district_2').change(function()
    {
        $.get(
            '/backend/location/getward',
            {
                district_id: $(this).val(),
            },
            function(){
            }
        )
        .done(function(data) {
            $('#id_ward_2').html('<option value>---------</option>');
            $.each(data, function(i, item) {
                $('#id_ward_2').append('<option value="' + item.id + '">' + item.name + '</option>');
            })
        })
    });
});

let media_input = document.getElementById('file_upload');
let count_input_picture = document.querySelectorAll("div[image_name_upload='']").length;
let number_time = count_input_picture + 0;
var old_input_file = [];
let preview_media_img = () => {
	let box_show_images = document.getElementById('upload_box');
	let files = document.getElementById('file_upload').files;
	// let list_files = Object.values(files);

	function readAndPreview(file, callback) {
		if (/\.(jpe?g|png|bmp|tiff)$/i.test(file.name)) {
			let reader = new FileReader();
			let file_name = file['name'];
			reader.addEventListener("load", function () {
				let list = new DataTransfer();
				list.items.add(file);
				let file_here = list.files;
				old_input_file.push(file['name']);
				number_time += 1;
				let convert_string_old_input_file = old_input_file.join(' ');
				let regex_file_name_ole_input_file = new RegExp(file_name, 'g');
				let count_time_file_name = convert_string_old_input_file.match(regex_file_name_ole_input_file).length;
				file['upload_times'] = count_time_file_name;
				let image = new Image();
				image.classList.add('box_upload');
				image.title = file.name;
				image.src = this.result;
				let new_image_box = document.createElement('div');
				let box_wrapper_input_name_delete_box = document.createElement('div');
				let input_image = document.createElement("input");
				input_image.setAttribute('name', 'image_upload_single_input');
				input_image.setAttribute('hidden', '');
				input_image.setAttribute('type', 'file');
				input_image.setAttribute('accept', '.jfif,.jpg,.jpeg,.png,.gif');
				let input_name_image = document.createElement('input');
				let delete_box = document.createElement('div');
				box_wrapper_input_name_delete_box.classList.add('box_wrapper_input_name_delete_box');
				delete_box.classList.add('recycle_bin');
				delete_box.setAttribute('id', `delete_box_id${number_time}`)
				delete_box.insertAdjacentHTML('afterbegin', '<i class="fa fa-trash"></i>');
				input_name_image.setAttribute('class', 'input_name_image');
				input_name_image.setAttribute('required', "");
				input_name_image.setAttribute('data-parsley-required-message', 'Please Create Name Of Your Picture');
				input_name_image.setAttribute('id', `input_name_image_id_${number_time}`);
				input_name_image.setAttribute('name', `input_name_image_id_${number_time}`);
				input_name_image.setAttribute('type', 'text');
				input_name_image.setAttribute('placeholder', 'Create Image Name');
				input_name_image.setAttribute('image_name_upload', '');
				new_image_box.setAttribute('class', 'col-sm-2 col-md-2 col-lg-2 m-0 mt-2 mb-1 pl-1 pr-1 p-0 align-items-center justify-content-center h-100 no-gutters');
				new_image_box.setAttribute('id', `image_id_${number_time}`);
				new_image_box.appendChild(image);
				new_image_box.appendChild(input_image);
				box_wrapper_input_name_delete_box.appendChild(input_name_image);
				box_wrapper_input_name_delete_box.appendChild(delete_box);
				new_image_box.appendChild(box_wrapper_input_name_delete_box);
				box_show_images.insertAdjacentElement("afterbegin", new_image_box);
				input_image.files = file_here;
				delete_box.addEventListener("click", function () {
					new_image_box.remove();
				})
			}, false);
			reader.readAsDataURL(file);
		}
	}
	if (files) {
		let result = [].forEach.call(files, readAndPreview);
	}
};
media_input.addEventListener("change", preview_media_img);


// Remove Picture

let recycle_bin_button = document.querySelectorAll('.attribute_recycle_bin');
recycle_bin_button.forEach(function (recycle_bin) {
	let url_confirm = recycle_bin.nextElementSibling.getAttribute('href')
	recycle_bin.addEventListener('click', function () {
		swal({
			title: "Bạn có chắc muốn xóa không?",
			text: "Dữ liệu đã xóa sẽ không thể khôi phục!",
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
					window.location.href = url_confirm
				} else {
					return false
				}
			});
	})
});


// Remove Project Member

function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = jQuery.trim(cookies[i]);
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

function removeFadeOut(element, speed) {
    let seconds = speed/1000;
    element.style.transition = "opacity "+seconds+"s ease";

    element.style.opacity = 0;
    setTimeout( () => {
        element.remove();
    }, speed);
}


let remove_member_button = document.querySelectorAll('a.remove_member');
let project_members = document.getElementById('configuration');
let add_member_project = document.getElementById('add_member_project');
remove_member_button.forEach(function (remove_member) {
	let base_url = '/backend/project/project_member/member_remove/'
	remove_member.addEventListener('click', function () {
		console.log(this, this.getAttribute('project_id'), this.getAttribute('employee_id'));
		let csrftoken = getCookie('csrftoken');
		let employee_id = this.getAttribute('employee_id');
		let project_id = this.getAttribute('project_id');
		let member_id = this.getAttribute('member_id');
/*
		let employee__id = remove_member.nextElementSibling.getAttribute('employee__id');
*/
/*
		console.log(employee__id)
*/
/*
		let member_full_name = remove_member.nextElementSibling.getAttribute('member_full_name');
*/
		swal({
			title: "Bạn có chắc muốn xóa không?",
			text: "Dữ liệu đã xóa sẽ không thể khôi phục!",
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
					closeModal: true
				}
			}
		})
			.then((isConfirm) => {
				if (isConfirm) {
					// window.location.href = url_confirm
					fetch(
						`${base_url + member_id}/`,
						{
							method: 'POST',
							mode: 'cors',
							cache: 'no-cache',
							credentials: 'same-origin',
							redirect: 'follow',
							referrer: 'no-referrer',
							referrerPolicy: 'no-referrer',
							headers: {
								// 'Accept': 'application/json',
								// 'Content-Type': 'application/json',
								'X-CSRFToken': csrftoken,
								"X-Requested-With": "XMLHttpRequest",
								'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
							},
						    body: {},
						}
					).then(
						(response) => {
							console.log(response);
							let member_id_row_remove = document.getElementById(`${ member_id }`);
							console.log(member_id_row_remove)
							removeFadeOut(member_id_row_remove, 1200);

							// member_id_row_remove.remove()
/*							let option_member = document.createElement('option');
							option_member.setAttribute('value', `${ employee__id }`);
							option_member.textContent = `${ member_full_name }`;
							console.log(`${ member_full_name }`, `${ employee__id }`);
							add_member_project.appendChild(option_member);
							member_id_row_remove.remove()*/
						}
					)
				} else {
					return false
				}
			});
	})
});


// Edit Member
let edit_member_saves = document.querySelectorAll('div[edit_member]');
edit_member_saves.forEach(function (edit_member_save) {
	let edit_url = '/backend/project/project_member/json_edit_member/';
	edit_member_save.addEventListener('click', function () {
		member_id = this.getAttribute('member_id');
		rule_id_selected = $(`#edit_select_rule_member__${ member_id }`).find(':selected')[0].value;
		console.log($(`#edit_select_rule_member__${ member_id }`).find(':selected')[0].value)
		let csrftoken = getCookie('csrftoken');
		let data = {
			member_id: `${ member_id }`,
			rule_id_selected: `${ rule_id_selected }`,
		};
		fetch(
			`${ edit_url }`, {
				method: 'POST',
				mode: 'cors',
				cache: 'no-cache',
				credentials: 'same-origin',
				redirect: 'follow',
				referrer: 'no-referrer',
				referrerPolicy: 'no-referrer',
				headers: {
					'Accept': 'application/json',
					'X-CSRFToken': csrftoken,
					"X-Requested-With": "XMLHttpRequest",
					"Content-Type": "application/json",
				},
				body: JSON.stringify(data),
			}
		)
			.then(
				response => response.json()
			)
			.then(
				data => {
					console.log(data)
				}
			)
	})
})



// Add Member
let add_member_button = document.getElementById('add_member');
let add_member_json_url = '/backend/project/project_member/json_add_member/';
let member_selected = document.getElementById('add_member_name');
var selected_employee_id = 0;
var selected_rule_id = 0;
let project_id = add_member_button.getAttribute('project_id');
let table_members = document.getElementById('members');
let members_count = document.querySelectorAll('td[page_id]').length + 1;
$('#add_member_name').on('select2:select', function (element) {
	selected_employee_id = element.params.data.id;
	let data = element.params.data.element;
});

$('#select_rule').on('select2:select', function (element) {
	selected_rule_id = element.params.data.id;
});

add_member_button.addEventListener("click", function () {
	let father_element = this.parentNode.parentNode;
	let csrftoken = getCookie('csrftoken')
	let data = {
		project_id: `${ project_id }`,
		add_employee_id: `${ selected_employee_id }`,
		add_rule_id: `${ selected_rule_id }`,
	};
	fetch(
		`${ add_member_json_url }`, {
			method: 'POST',
			mode: 'cors',
			cache: 'no-cache',
			credentials: 'same-origin',
			redirect: 'follow',
			referrer: 'no-referrer',
			referrerPolicy: 'no-referrer',
			headers: {
				'Accept': 'application/json',
				'X-CSRFToken': csrftoken,
				"X-Requested-With": "XMLHttpRequest",
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		}
	)
		.then(
		response => response.json()
	)
		.then(
		data => {
			// console.log(data)
			id = document.getElementById('add_member');
			// console.log($('#add_member_name').find(':selected'));
			$('#add_member_name').find(':selected').remove();
			let tr_tag = document.createElement('tr');
			tr_tag.setAttribute('class', 'project_member_info__table');
			tr_tag.setAttribute('id', data['new_member_id']);
			// console.log(tr_tag);

			let td_id = document.createElement('td');
			td_id.textContent = members_count ++
			let td_last_name = document.createElement('td');
			td_last_name.textContent = data['employee_information'][0]['last_name'];
			let td_first_name = document.createElement('td');
			td_first_name.textContent = data['employee_information'][0]['first_name'];
			let td_email = document.createElement('td');
			td_email.textContent = data['employee_information'][0]['email'];
			let td_group = document.createElement('td');
			td_group.textContent = '';
			let td_position = document.createElement('td');
			console.log($('#select_rule').find(':selected')[0].value)
			if ($('#select_rule').find(':selected')[0].value != 0) {
				td_position.textContent = $('#select_rule').find(':selected')[0].textContent;
			} else {
				td_position.textContent = '';
			}

			let td_status = document.createElement('td');
			td_status.textContent = '';

			// let add_member_button_clone = `<td class='setting_member'><span><span class='hide' data-toggle='dropdown'><i class='fa fa-ellipsis-h' style='font-size: 1.2rem'></i></span><div class='dropdown-menu fix_dropdown_member'><div class='option_box'><a class='dropdown-item' name='{{ forloop.counter }}' href='#'><i class='fa fa-edit fixing_option_project'</div><div class='option_box'><a class='dropdown-item remove_member' project_id='${ project_id }' member_id='${ data['new_member_id'] }' employee_id='${ selected_employee_id }'><i style='font-size: 1.2rem; font-weight: bold;' class='fa fa-trash'><span style='font-size: 0.8rem; margin-left: 17px;'>Remove Member</span></i></a></div></div></span></td>`
			let add_member_button_clone = `<td class="setting_member"><span><span class="hide" data-toggle="dropdown"><i class="fa fa-ellipsis-h" style="font-size: 1.2rem"></i></span><div class="dropdown-menu fix_dropdown_member"><div class="option_box"><a class="dropdown-item" name="{{ forloop.counter }}" href="#"><i class="fa fa-edit fixing_option_project" style="color: #0068b9; font-weight: bold; font-size: 1.2rem;"><span style="font-size: 0.8rem;  margin-left: 14px;">Edit</span></i></a></div><div class="option_box"><a class="dropdown-item remove_member" project_id="${ project_id }" member_id="${ data['new_member_id'] }" employee_id="${ selected_employee_id }"><i style="font-size: 1.2rem; font-weight: bold;" class="fa fa-trash"><span style="font-size: 0.8rem; margin-left: 17px;">Remove Member</span></i></a></div></div></span></td>`

			table_members.appendChild(tr_tag);
			tr_tag.appendChild(td_id);
			tr_tag.appendChild(td_last_name);
			tr_tag.appendChild(td_first_name);
			tr_tag.appendChild(td_email);
			tr_tag.appendChild(td_group);
			tr_tag.appendChild(td_position);
			tr_tag.appendChild(td_status);
			tr_tag.insertAdjacentHTML('beforeend', `${ add_member_button_clone }`);
			let new_remove_member_button = document.querySelectorAll('a.remove_member');
			new_remove_member_button.forEach(function (new_remove_member) {
				let base_url = '/backend/project/project_member/member_remove/'
				new_remove_member.addEventListener('click', function () {
					let csrftoken = getCookie('csrftoken');
					let employee_id = this.getAttribute('employee_id');
					let project_id = this.getAttribute('project_id');
					let member_id = this.getAttribute('member_id');
					swal({
						title: "Bạn có chắc muốn xóa không?",
						text: "Dữ liệu đã xóa sẽ không thể khôi phục!",
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
								closeModal: true
							}
						}
					})
						.then((isConfirm) => {
							if (isConfirm) {
								// window.location.href = url_confirm
								fetch(
									`${base_url + member_id}/`,
									{
										method: 'POST',
										mode: 'cors',
										cache: 'no-cache',
										credentials: 'same-origin',
										redirect: 'follow',
										referrer: 'no-referrer',
										referrerPolicy: 'no-referrer',
										headers: {
											// 'Accept': 'application/json',
											// 'Content-Type': 'application/json',
											'X-CSRFToken': csrftoken,
											"X-Requested-With": "XMLHttpRequest",
											'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
										},
										body: {},
									}
								).then(
									(response) => {
										console.log(response);
										let member_id_row_remove = document.getElementById(`${member_id}`);
										console.log(member_id_row_remove)
										removeFadeOut(member_id_row_remove, 1200);
									}
								)
							} else {
								return false
							}
						});
				})
			})
		}
	)
});


// Upload Investment Certificate
let investment_certificate_file_upload = document.getElementById('investment_certificate_file_upload');
let investment_certificate_label = document.getElementById('investment_certificate_file');
// console.log(investment_certificate_label);
let preview_investment_certificate_file = () => {
	let files = investment_certificate_file_upload.files;
	let preview_file = (file) => {
		if (/\.(jpe?g|png|bmp|tiff|pdf|doc?x)$/i.test(file.name)) {
			const reader = new FileReader();
			let file_type_icon = document.createElement('i');
			let file_name = document.createElement('span');
			// console.log(investment_certificate_label.children[0]);
			reader.addEventListener("load", function () {
				if (/\.(jpe?g|png|bmp|tiff)$/i.test(file.name)) {
					file_type_icon.setAttribute('class', 'fas fa-images fa fa-3x');
					file_type_icon.style.color = '#c4c4c4';
					file_type_icon.style.cursor = 'pointer'
				} else if (/\.(pdf)$/i.test(file.name)) {
					file_type_icon.setAttribute('class', 'fas fa-file-pdf fa-3x');
					file_type_icon.style.color = 'red';
					file_type_icon.style.cursor = 'pointer'
				} else {
					file_type_icon.setAttribute('class', 'fas fa-file-word fa-3x');
					file_type_icon.style.color = '#2749ff';
					file_type_icon.style.cursor = 'pointer'
				}
				investment_certificate_label.children[0].remove();
				investment_certificate_label.appendChild(file_type_icon);
				file_name.textContent = file.name;
				file_name.setAttribute('style','padding: 0 0 8px 8px; font-size: 1rem;  text-decoration: underline; color: #0a5fff !important')
				file_type_icon.appendChild(file_name);

			}, false);
			reader.readAsDataURL(file);
		}
	};
	if (files) {
		let result = [].forEach.call(files, preview_file);
	}
};
investment_certificate_file_upload.addEventListener("change", preview_investment_certificate_file);


// Controll Currency Of Project Parametor
let project_currency = document.getElementById('project_currency');
let project_parameters__currency = document.querySelectorAll('span[project_currency]');
// console.log(project_parameters__currency);
document.addEventListener('DOMContentLoaded', function () {
	project_currency.addEventListener("change", function () {
		currency_selected = project_currency.children[this.value].getAttribute('project_currency_code');
		project_parameters__currency.forEach(function (project_currency) {
			return project_currency.textContent = currency_selected
		})
	})
});


