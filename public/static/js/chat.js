// Define global variable
var listImagesChatSelected=[];
var listFilesChatSelected=[];
let listMedia_format_SendMessage = [];
let webchat_enable = document.URL.includes('chat')
var userData, user_FullName,userAvatar,last_message_id,last_message_time, first_message_id, first_message_time;
var SERVICE_API_GET_MEDIA_ROOM_URL,GET_EMPLOYEE_INFO_URL,SERVICE_API_GET_MEDIA_URL
var is_LoadOldMessage_up=false
var is_LoadOldMessage_down = false
var is_CreateGroupChat=true
var is_searching = false
var can_load_older_message = true
var can_load_newer_message = false
var limit_all_get_in_tabImg = 30
var can_scroll = true
var Host_video_call = 'https://vcs.minerva.vn/'
let DEBUG = false //((document.location.hostname != "localhost") || (document.location.hostname != "127.0.0.1")) ? true : false;
let is_subscribe = false;
// End define globall variable
var Room = (function() {
    var instance;
    createInstance = function () {
        var id = undefined;
        var group_name = undefined;
        var type = undefined;
        var group_avatar = undefined;
        var last_time = undefined;
        var user_seen_message = [];
        var is_group = true;
        var last_message = "";
        var info_user = [];
        var user_admin = 0;
        var sender_id=undefined;
        var media = [];
        return {
            set_room_session: function (id, name, type, avatar){
                self.id = id;
                self.group_name = name;
                self.type = type;
                self.group_avatar = avatar;
            },
            get_id : function () {
                return parseInt(self.id);
            },
            get_name : function () {
                return self.group_name;
            },
            get_type_text : function () {
                return self.type;
            },
            get_avatar : function () {
                return self.group_avatar || ((self.type == 'group') ? "/static/img/logo.png" : "/static/img/default_avatar.svg");
            },
            set_data_first_log : function (_sender, _last_time, _message, _is_admin,_media){
                self.last_time = _last_time;
                self.sender_id = _sender;
                self.last_message = _message || "";
                self.user_admin = _is_admin;
                self.media = _media
            },
            set_seen_list : function (_seen_list){
                self.user_seen_message = _seen_list;
            },
            is_seen_message : function (){
                // TODO process check seen
                return self.user_seen_message.length>1
            },

            set_member_list : function (_list){
                self.info_user  = _list;
            },

            get_member_list : function (){
                return self.info_user;
            },

            get_user_admin : function(){
                return self.user_admin
            },
            
            get_time : function(){
                return self.last_time
            },

            get_sender : function(){
                return self.sender_id
            },

            get_last_message : function(){
                return self.last_message
            },

            get_sender_info : function(){
                return self.info_user.find(member => member._id === self.sender_id);
            },
            get_media : function(){
                return self.media
            },
            get_status : function(){
                if (self.info_user){
                    if (self.type == 'user'){
                        for (let i=0; i <self.info_user.length; i++){
                            if (self.info_user[i]._id != GetUserID())
                                return self.info_user[i].status_user
                        }
                    } else {
                        for (let i=0; i <self.info_user.length; i++){
                            if (self.info_user[i]._id != GetUserID())
                                if (self.info_user[i].status_user == "online")
                                    return self.info_user[i].status_user
                        }
                        return "offline"
                    }
                }
            }

        }
    }

    return {
        getInstance : function() {
            if (!instance) instance = createInstance();
            return instance;
        }
    }
})();



function Set_WorkInfo_user(user_id=null){
    $.get(
        GET_EMPLOYEE_INFO_URL,
        {
            userid: user_id,
        },
        function(){
        }
    )
    .done(function(data) {
        employee_info=''
        if (data['success']) {
            employee_info = data['data']
            if (employee_info.office)
                $('#chat_to_user_information_office').text( employee_info.office )
            if (employee_info.block)
                $('#chat_to_user_information_block').text( employee_info.block )
            if (employee_info.department)
                $('#chat_to_user_information_department').text( employee_info.department )
            if (employee_info.position)
                $('#chat_to_user_information_position').text( employee_info.position )
        }
    })
    .fail(function() {
        alert( "Error. Please Contact Admin" );
    })
}

function setting_feature_for_AdminUser(){
    if (GetUserID() != Room.getInstance().get_user_admin() ) {
        $('#chat_info')[0].querySelectorAll('[id=feature_for_admin]').forEach(element => {
            $(element).hide()
        })
    } else {
        $('#chat_info')[0].querySelectorAll('[id=feature_for_admin]').forEach(element => {
            $(element).show()
        })
    }
}

fn_readURL = function (input, className = null, callback=null) {
    className = "." + className + "";
    var reader = new FileReader();

    if (input.files && input.files[0]) {

        reader.onload = function (e) {
            if (callback){
                callback(reader.result)
            }
            if (className){
                $(className).attr('src', e.target.result);
            }
            
        }
        reader.readAsDataURL(input.files[0]);
    }
}
fn_Base64ToBlob = function (dataURL) {
    var array, binary, i;
    binary = atob(dataURL.split(',')[1]);
    array = [];
    i = 0;
    while (i < binary.length) {
        array.push(binary.charCodeAt(i));
        i++;
    }
    return new Blob([new Uint8Array(array)], {
        type: dataURL.split(',')[0].split(':')[1].split(';')[0]
    });
}
//load chat info mobile
loadChatInfo = function () {
    $(window).resize(function () {
        var windowWidth = $(window).width();
        var chatInfo = $('.chat-system .chat-info')
        var toggleIcon = $('.chat-system .chat-box .chat-meta-user #chat_info_toggleIcon');
        if (windowWidth < 1400) {
            if (chatInfo.hasClass('active') && toggleIcon.hasClass('active')) {
                chatInfo.removeClass('active');
                toggleIcon.removeClass('active')
            } else {
                return false;
            }
        }
    })
}
OnlineMessage = function () {
    $('.people .person').each(function () {
        var heightPerson = $(this).find('.meta-mes .preview');
        var minHeight = $('.people .person:last-child .meta-mes .preview');

        if (heightPerson.height() < minHeight.height()) {
            minHeight = heightPerson;
        }
        if (heightPerson.height() > minHeight.height()) {
            heightPerson.height(minHeight.height()).addClass('text-overflow')
        }
    })
}

function loadData(data) {
    var list_user_in_chat_view = ''
    var list_user_in_chat_popup = ''
    var count_unread_message = 0
    if (webchat_enable){
        for (let i = 0; i < data.length; i++) {
            if (Room.getInstance().get_id() == data[i].id){
                var _room_id    = data[i].id
                var _room_name  = data[i].name
                var _avatar     = data[i].group_avatar
                var _sender     = data[i].sender
                var _last_time  = data[i].time
                var _is_group   = (data[i].is_group) ? "group":"user"
                var _message    = data[i].message
                var _is_admin   = data[i].user_admin
                var _media      = data[i].media
                Room.getInstance().set_room_session(_room_id, _room_name, _is_group, _avatar)
                Room.getInstance().set_data_first_log(_sender, _last_time, _message, _is_admin, _media)
                Room.getInstance().set_seen_list(data[i].seen)
                Room.getInstance().set_member_list(data[i].info_user)
                LoadInfoAboutChat()
            } else if (Room.getInstance().get_id() && get_tab_active().attr('id') == "tab-contacts"){
                LoadInfoAboutChat()
                load_chat_room_header()
            }
        }
    }

    for (let i = 0; i < data.length; i++) {
        if (webchat_enable){
            list_user_in_chat_view += ParseRoomInList(data[i])
        }
        if (i<10)
            list_user_in_chat_popup += Parse_Room_to_ChatPopup(data[i])
        if (data[i].unread_number){
            if(data[i].id != Room.getInstance().get_id())
                count_unread_message +=1
        }
    }
    if (count_unread_message){
        $('#count_noti').show()
        $('#count_noti').text(count_unread_message)
    } else {
        $('#count_noti').hide()
    }
    if (webchat_enable){
        if (list_user_in_chat_view) 
            $('#list_person').html(list_user_in_chat_view)
        else 
            $('#list_person').html('<p class="pt-5 mt-5 text-center"><span class="text-noti">Add new chat</span></p>')
    }
    if (list_user_in_chat_popup)
        $('#popup_chat_notification').html(list_user_in_chat_popup)
    else 
        $('#popup_chat_notification').html('')

    room_active_id = localStorage.getItem('room_active_id')
    if (room_active_id && !Room.getInstance().get_id()){
        localStorage.setItem('room_active_id',"")
        Room_data = $("#list_person [data-chat="+room_active_id+"]").trigger('click')        
    }
}

function ParseRoomInList(data) {
    user = ""
    unread = ""
    has_message_class = ""
    seen_icon=""
    message = ""
    sender =""
    time = ""
    active = ""
    status = ""
    status_icon = ""
    today = get_time_chat_now_format(true)
    if (Room.getInstance().get_id() == data.id){
        load_active_group(today)
    } else {
        load_unactive_group(data,today)
    }

    if (status == "online")
        status_icon = "status_1"
    else 
        status_icon = "status_4"

    user = `<div class="person ${has_message_class} ${active}" ${attr_data_chat} >\
                <div class="user-info"> \
                    <div class="fa fa-circle f-status ${status_icon}" data-status="${status}"></div>\
                    <div class="f-head">\
                        <figure> \
                            <img id="chat_img" src="${avatar}" alt="avatar"> \
                        </figure> \
                    </div> \
                    <div class="f-body"> \
                        <div class="meta-info">\
                            <span class="user-name" data-name="${userName}">${userName}</span>\
                            <span class="user-meta-time">${seen_icon} ${time}</span> \
                        </div>\
                        <div class="meta-mes">\
                            <span class="preview pr-2">${message}</span>${unread}\
                        </div>\
                    </div>\
                </div>\
            </div>`
    return user
}
function Parse_Room_to_ChatPopup(data){
    attr_data_chat = (data.is_group) ? 'data-chat="group_'+ data.id +'"': 'data-chat="user_'+ data.id +'"'
    userName = data.name || "anonymous"
    
    avatar_default= (data.is_group)? "/static/img/logo.png" : "/static/img/default_avatar.svg"
    avatar  = data.group_avatar || avatar_default
    unread=''
    seen_icon=''
    has_message_class=''
    sender=''
    status = ""
    status_icon = ""
    
    list_user = data.info_user

    if (self.type == 'user'){
        for (let i=0; i <list_user.length; i++){
            if (list_user[i]._id != GetUserID())
                status =  list_user[i].status_user
        }
    } else {
        for (let i=0; i <list_user.length; i++){
            if (list_user[i]._id != GetUserID())
                if (list_user[i].status_user == "online")
                    status = "online"
        }
        if (status == ""){
            status = "offline"
        }
    }

    if (status == "online")
        status_icon = "status_1"
    else 
        status_icon = "status_4"


    if (data.sender == GetUserID()){
        sender = "You: "
        if (data.seen.length>1)
            seen_icon = '<i class="icon-read las la-check-double"></i>'
    } else {
        _sender_info=''
        if (data.is_group && data.sender){
            _sender_info = data.info_user.find(member => member._id === data.sender)
            if (_sender_info)
                sender = _sender_info.full_name + ': ';
            else 
                sender = "anonymous: "
        }
    }

    if ((data.id != Room.getInstance().get_id()) && data.unread_number){
        has_message_class = "unread"
        unread = '<span class="noti">'+ data.unread_number +'</span>'
        
    }
    _message = data.message
    if (_message == '[file]'){
        _message = (data.media.mimetype.split('/')[0] == 'image')? "sent a photo" : data.media.filename
    }
    if (_message){
        message=sender + _message
    }

    user = `<li class="message-item ${has_message_class}" ${attr_data_chat}>
                <a href="/backend/chat/"></a>
                <div class="message-child">
                    <div class="avatar">
                        <figure class="image">
                            <img src="${avatar}" alt="">
                        </figure>
                        <i class="fa fa-circle status ${status_icon}"></i>
                    </div>
                    <div class="info">
                        <span class="user-name" data-name="${userName}"><i class="name_detail">${userName} </i>${seen_icon}</span>
                        <span class="text d-inline-block text-truncate">${message}</span>
                    </div>
                    ${unread}
                </div>
            </li>`
    return user
}
function load_active_group(today)
{
    attr_data_chat = 'data-chat='+Room.getInstance().get_type_text()+'_'+Room.getInstance().get_id()
    active="active"
    if (Room.getInstance().get_sender() == GetUserID()){
        sender = "You: "
        if (Room.getInstance().is_seen_message()){
            seen_icon = '<i class="icon-read las la-check-double"></i>'
        }
    } else if (Room.getInstance().get_type_text()=="group" && Room.getInstance().get_sender()){
        sender = Room.getInstance().get_sender_info().full_name+': '
    }
    _message = Room.getInstance().get_last_message()
    if (_message == '[file]'){
        _message = (Room.getInstance().get_media().mimetype.split('/')[0] == 'image')? "sent a photo" : Room.getInstance().get_media().filename
    }
    if (_message)
        message = sender + _message
    userName = Room.getInstance().get_name() || "anonymous: "
    avatar= Room.getInstance().get_avatar()
    time = Room.getInstance().get_time()
    if (time){
        date = time.split(' ')[0]
        format_date = date.split('-')[2]+'-'+date.split('-')[1]+'-'+date.split('-')[0]
        if (format_date == today){
            time = formatTime(time.split(' ')[1])
        } else {
            time = date.split('-')[2]+'/'+date.split('-')[1]
        }
    }
    status = Room.getInstance().get_status()

    load_chat_room_header(userName, status)
}

function load_unactive_group(data,today){
    _sender_info=''
    attr_data_chat = (data.is_group) ? 'data-chat="group_'+ data.id +'"': 'data-chat="user_'+ data.id +'"'
    
    if (data.sender == GetUserID()){
        sender = "You: "
        if (data.seen.length>1)
            seen_icon = '<i class="icon-read las la-check-double"></i>'
    } else {
        if (data.is_group && data.sender) {
            _sender_info = data.info_user.find(member => member._id === data.sender)
            if (_sender_info) 
                sender = _sender_info.full_name+': ';
            else 
                sender = "anonymous: "
        }
    }

    if (data.unread_number){
        has_message_class = "has-message"
        unread = '<span class="number">'+ data.unread_number +'</span>'
        
    }
    _message = data.message
    if (_message == '[file]'){
        _message = (data.media.mimetype.split('/')[0] == 'image')? "sent a photo" : data.media.filename
    }
    if (_message){
        message=sender + _message
    }
    userName = data.name || "anonymous"
    
    avatar_default= (data.is_group)? "/static/img/logo.png" : "/static/img/default_avatar.svg"
    avatar  = data.group_avatar || avatar_default

    //---show time 
    if (data.time){
        date = data.time.split(' ')[0]
        format_date =date.split('-')[2]+'-'+date.split('-')[1]+'-'+date.split('-')[0]
        if (format_date == today){
            time = formatTime(data.time.split(' ')[1])
        } else {
            time = date.split('-')[2]+'/'+date.split('-')[1]
        }
    }
    list_user = data.info_user
    if (self.type == 'user'){
        for (let i=0; i <list_user.length; i++){
            if (list_user[i]._id != GetUserID())
                status =  list_user[i].status_user
        }
    } else {
        for (let i=0; i <list_user.length; i++){
            if (list_user[i]._id != GetUserID())
                if (list_user[i].status_user == "online")
                    status = "online"
        }
        if (status == ""){
            status = "offline"
        }
    }
}

function ShowMessageWarning(id, text)  {
    element = $("#" + id).text(text)
}

function CreateGroupChat(){
    name = $('#group_name').val()
    str_listUser = $('#list_user').val()
    listUser = []
    str_listUser.forEach(element => {
        listUser.push(parseInt(element))
    });

    if ((name == "") || (listUser.length <= 0))
        return ShowMessageWarning("chat_create_room_error", "Nhập đầy đủ tên nhóm và thành viên")

    ShowMessageWarning("chat_create_room_error", "")
    set_isCreateGroupChat(true)
    create_group(listUser, name)
}

function ListUserAddToGroup(list_user)  {
    name=''
    for (let i = 0; i< list_user.length - 1 ; i++){
            name += list_user[i].full_name || 'anonymous';
            name += ', ';
    }
    name += list_user[list_user.length - 1].full_name || 'anonymous';
    name += ' ';
    return name
}

function AddMemberToChat(){
    str_listUser = $('#list_user_add').val()
    listUser=[]
    str_listUser.forEach(element => {
        listUser.push(parseInt(element))
    });
    if (DEBUG){
        console.log(listUser)
    }
    if (listUser.length <= 0)
        return ShowMessageWarning("chat_add_member_room_error", "Không có thành viên được chọn để thêm vào nhóm")
    ShowMessageWarning("chat_add_member_room_error", "")
    add_member_to_group(listUser, Room.getInstance().get_id())
}

function HandleCreateRoomChat(room_id){
    if (isCreateGroupChat()) {
        $('#addNewChat').modal('hide');
        $("#list_user").val([]).change();
        $('#group_name').val('')
        $('#tab-chats').trigger('click')
        
    } else {
        $('#contacts .people .active').attr("data-chat","user_"+room_id)
        room_name   = $('#contacts .people .active').attr('data-name');
        room_avatar = $('#contacts .people .active #chat_img').attr('src');
        Room.getInstance().set_room_session(room_id, room_name, "user", room_avatar)
        recv()
        get_log_message(Room.getInstance().get_id())
        
    }
    
}

function handleChangeRoomInfo(room_id, group_name, group_avatar){
    room_active = $("[data-chat$='"+room_id+"']")
    room_active.find('.user-name').text(group_name)
    if (Room.getInstance().get_id() == room_id) {
        $("#chat_current_target .name").text(group_name)
        $("#show_name").text(group_name)
    }

    if (group_avatar.slice(-4) != "None")
    {
        room_active.find('#chat_img').attr('src', group_avatar)
    }
}

function out_group(){
    room_id = Room.getInstance().get_id()
    is_group = Room.getInstance().get_type_text() == 'group'? true:false
    Room.getInstance().set_room_session()
    if (is_group && isAdmin(room_id)){
        remove_room(room_id)
    } else {
        let listUser = []
        remove_member_in_group(listUser,is_group,room_id)
    }
    refreshChatWindows()
}


function MessageProcess(message_content, media, room_id, sender_id, time, message_type, list_user){
    if (DEBUG){
        console.log("Message :: " + data + " to " + room_id + " from " + sender_id + " at " + time)
    }
    if (room_id == Room.getInstance().get_id())
    {
        
        let data = {"time" : time, "sender": sender_id, "message": message_content, "media": media, 'message_type':message_type, 'list_user':list_user}
        
        if (get_firstMessage_time().split(' ')[0] != data.time.split(' ')[0] ){
            $('#chat_detail').append(conversationTime(data.time))   
        }
        LoadMessage(data)
        if (GetUserID() != sender_id)
            set_seen_message(room_id)
        let chat_windows = $('.chat-conversation .chat-conversation-box')

        if (($(chat_windows).scrollTop() + $(chat_windows).innerHeight() >= $(chat_windows)[0].scrollHeight-200) || (GetUserID() == sender_id))
            set_ScrollContainer_down()
            
        set_firstMessageID("",time)
        
    } else {
        // TODO: Need to stack message to show
    }
}

function LoadMessage(data, is_load_message_up = false){
    tab_active = get_tab_active().attr('id')
    name =''
    avatar=''
    if (tab_active == 'tab-chats'){

        member_in_group = Room.getInstance().get_member_list()

        if (member_in_group == null){
            return false
        }

        user_info = member_in_group.find(member => member._id === data.sender);
        if (user_info == null){
            return false
        }
        name = user_info.full_name || "Anonymous"
        avatar = user_info.avatar || "/static/img/minerva.png"
        
    } else if (tab_active == 'tab-contacts'){
        if (data.sender != GetUserID()){
            name = Room.getInstance().get_name()
            avatar = Room.getInstance().get_avatar()
        } else {
            name = GetUserFullName()
            avatar = Get_UserAvatar()
        }
    }

    if (Room.getInstance().get_type_text() == 'user')
        name=''
    
    date = data.time.split(' ')[0]    
    time = formatTime(data.time.split(' ')[1])

    if (data.sender == GetUserID()) {
        target = "me" 
    } else {
        target = "you"
    }
    _message = format_text(data.message)
    append_message_to_convertion(_message, data.media, name, time, avatar, target, is_load_message_up, data.message_type, data.list_user)
}
function get_old_message(is_Scroll_down = false){
    room_id = Room.getInstance().get_id()
    message_id = ""
    if (is_Scroll_down){
        message_id = get_firstMessageID()
    }
    else {
        message_id = get_lastMessageID()
    }
    
    get_log_message(room_id,message_id ,false ,is_Scroll_down)
    
    set_isLoadOldMessage_up(true)
}
function actionChat() {
    chatMessageValue = $('#chat_message').val();
    
    // TODO: need to implement if it supports sned mutil file.
    
    if (chatMessageValue === '' && listMedia_format_SendMessage === []) {
        return;
    }

    $('#chat_message').val('');
    room_id = Room.getInstance().get_id()
    if (chatMessageValue)
        send_message(chatMessageValue, parseInt(room_id))
    if (listMedia_format_SendMessage.length > 0 )
        send_message("", parseInt(room_id), listMedia_format_SendMessage)
    listMedia_format_SendMessage=[]
    set_isLoadOldMessage_up(false)

    $('.chat-load--file').hide();
    $('.chat-load--file .list .item').remove();
}




function append_message_to_convertion(message, media=[], name, time, image="/static/img/default_avatar.svg", target="me", is_load_message_up=false, message_type = 0, list_user = []){

    var content = '';
    var htmlBoxImages=''
    var img_messageHtml=''
    var messageHtml=''
    var noti_messageHtml=''
    if (message_type){
        noti_messageHtml = get_noti_message_html(message,name,message_type,list_user)
    } else {
        if( media && media.length ){
            for (let i=0; i< media.length; i++){
                if (media[i].mimetype.split('/')[0] == 'image'){ 
                    htmlBoxImages += '<div class="item img">' +
                                '<a data-fancybox="gallery" rel="gallery" href="'+ media[i].data +'">' +
                                '<figure>' +
                                '<img class="chat-uploads--type-images" src="' + media[i].data + '" alt="Images Upload">' +
                                '</figure>' +
                            '</div>';
                    
                } else if(media[i].mimetype == 'video/mp4'){ 
                    content +=   '<div class="item video">' +
                                    '<a class="d-flex align-items-center" data-fancybox="gallery" rel="gallery" href="'+ media[i].data +'">' +
                                    '<video class="w-100" src="' + media[i].data + '"></video>' +
                                    '</a>' +
                                '</div>';
                } else {
                    //--------load document
                    content +='<div class="item file">' +
                                '<a class="d-flex align-items-center" target="_blank" href="' + media[i].data + '" >' +
                                get_icon_for_File(media[i].filename) +
                                '<span class="name pl-1">' + media[i].filename + '</span>' +
                                '</a>' +
                            '</div>';
                }
            }
        } else {
            content = message;
        }
        align = 'right'
        if (target == 'me')
            align = 'right'
        else
            align = 'left'

        if (htmlBoxImages){
            box_images =''
            box_images = `<div class="box_images ${target}" style="margin-bottom: 10px;">
                            <div class="text">
                                <b class="name" style="text-align: ${align};">${name}</b>
                                ${htmlBoxImages}
                            </div>
                        </div>`
            img_messageHtml ='<div class="bubble '+target+'">' +
                            '<figure class="image"><img class="img-fluid" src= "'+ image +'" alt=""></figure>' + box_images +
                        '</div>';
        } 
        if (content){
            messageHtml =   '<div class="bubble '+target+'">' +
                                '<figure class="image"><img class="img-fluid" src= "'+ image +'" alt=""></figure>' +
                                '<div class="box">' +
                                    '<div class="text">' +
                                        '<b class="name">' + name + '</b>' + content +                            
                                    '</div>' +
                                    '<div class="time text-right">' + time + '</div>' +
                                '</div>' +
                            '</div>';
        }
    }

    if (is_load_message_up){
        if (noti_messageHtml)
            $('#load_old_message').after(noti_messageHtml);
        else {
            if (img_messageHtml)
                $('#load_old_message').after(img_messageHtml);
            if (messageHtml) 
                $('#load_old_message').after(messageHtml);
        }
    }
    else {
        if (noti_messageHtml)
            $('#chat_detail').append(noti_messageHtml);
        else {
            if (img_messageHtml)
                $('#chat_detail').append(img_messageHtml);
            if (messageHtml) 
                $('#chat_detail').append(messageHtml);
        }
    }

}


function get_user_ChatWithMe(){
    list_user_info = Room.getInstance().get_member_list()
    for (let user=0; user<list_user_info.length; user++){
        if (list_user_info[user]._id != GetUserID())
            return list_user_info[user]._id
    }
    return ''
}

function get_subTab_in_tabImg(){    
    return $('.chat-images .tab-content .active')
}


function onUploadImagesChat() {
    $('.chat-uploads--images input').change(function () {
        if (this.files) {
            for (let i = 0; i < this.files.length; i++) {
                var file = this.files[i];
                // if (file.size > 2500000){
                //     warning_popup("image")
                //     $('.chat-uploads--images input').val('')
                // } else {
                fn_UploadMedia(file);
                $('.chat-load--file').show()
                // }
            }
        }
        else {
            alert('No file is choose!')
        }
    })
}

function onUploadFilesChat() {
    $('.chat-uploads--file input').change(function () {
        var html;
        if (this.files) {
            for (let i = 0; i < this.files.length; i++) {
                var file = this.files[i];

                if (file.size > 1024000000){
                    warning_popup("file")
                    $('.chat-uploads--file input').val('')
                } else {
                    fn_UploadMedia(file)
                    $('.chat-load--file').show()
                }

            }
        }
    })
}
function fn_UploadMedia(file) {

    let resultImage, html, imageUrl;
    let reader = new FileReader();
    reader.onload = function (e) {
        resultImage = e.target.result;

        if (resultImage){
            let basend64result = resultImage.split(',')[1];
            let content_type = resultImage.split(',')[0].split(';')[0].split(':')[1];
            
            media = {
                "data" : basend64result,
                "mimetype" : content_type,
                "filename" : file.name,
            }
            listMedia_format_SendMessage.push(media)

            var blob = fn_Base64ToBlob(resultImage);
            imageUrl = URL.createObjectURL(blob);
            file_type = content_type.split('/')[0]
            if (file_type=='image'){
                html = '<div class="item img">' +
                            '<i class="icon-close las la-times"></i>' +
                            '<figure>' +
                            '<img class="chat-uploads--type-images" src="' + imageUrl + '" alt="Images Upload">' +
                            '</figure>' +
                        '</div>';
                listImagesChatSelected.push(html)

            } else {
                html ='<div class="item file">' +
                            '<i class="icon-close las la-times"></i>' +
                            get_icon_for_File(file.name,'pl-1 pt-2') +
                            '<span class="name pl-1 pt-2">' + file.name + '</span>' +
                            '</a>' +
                        '</div>';
                listFilesChatSelected.push(file.name)
            }
            $('.chat-load--file .list').append(html);
            // send_message("", parseInt(room_id), listMedia_format_SendMessage)
        }
                
    }
    reader.readAsDataURL(file);

}

function show_arrow_down_button(e){
    if (Math.round($('.chat-conversation-box').scrollTop() + $('.chat-conversation-box').innerHeight()) == $('.chat-conversation-box')[0].scrollHeight) {
        $(".load_to_end").hide();    
        
    } else {
        $(".load_to_end").css('display','flex');
    }

    if (can_scroll && ($('#chat_detail').html() != '') && (parseInt($('.chat-conversation-box').scrollTop()) == 0) && can_load_older_message){
        
        can_scroll = false
        get_old_message()
    } else if (can_scroll && ($('#chat_detail').html() != '') && (Math.round($('.chat-conversation-box').scrollTop() + $('.chat-conversation-box').innerHeight()) == $('.chat-conversation-box')[0].scrollHeight)  && can_load_newer_message){
        
        can_scroll = false
        get_old_message(is_Scroll_down = true)
    }

}
function refreshChatWindows(){
    var chatInfo = $('.chat-system .chat-info')
    var toggleIcon = $('.chat-system .chat-box .chat-meta-user .icon');
    
    if (!chatInfo.hasClass('active') && !toggleIcon.hasClass('active')) {
        if ($(window).width() <= 767) {
            chatInfo.removeClass('active');
            toggleIcon.removeClass('active')
            return
        }
    }
    chatInfo.removeClass('active');
    toggleIcon.removeClass('active')
    $('.chat-system .chat-conversation').removeClass('active')
    
    $('.chat-meta-user').removeClass('chat-active');
    $('#list_person .active').removeClass('active')
    Room.getInstance().set_room_session()
    
    $('#chat_detail').html('')    
    $('.chat-system').find('.chat-box .chat-not-selected').show();
    
    $('.search input').val('')
    
}

function active_chat_room(chat_room){
    $(chat_room).parents('.chat-system').find('.chat-box .chat-box-inner').show();
    $(chat_room).parents('.chat-system').find('.chat-box .chat-not-selected').hide();
    $('.chat-box .chat-box-inner').css('height', '100%');
    $('.chat-meta-user').addClass('chat-active');
    $('.chat-footer').addClass('chat-active');
    $('.user-list-box .person').removeClass('active');
    $(chat_room).addClass('active');
}

function load_chat_room_header(room_name='', status = ''){
    
    $("#chat_current_target .status").removeClass('status_1')
    $("#chat_current_target .status").removeClass('status_4')

    if (room_name)
        $('#chat_current_target .name').html(room_name);
    else 
        room_name = get_chat_active().find('.user-name').attr('data-name')
        $('#chat_current_target .name').html(room_name);

    if (status)
        status_text = status
    else 
        status_text = $('#list_person .active .f-status').attr('data-status')

    if (status_text == "online")
        $("#chat_current_target .status").addClass('status_1')
    else 
        $("#chat_current_target .status").addClass('status_4')

    $("#chat_current_target .status").text(status_text)
}

function Create_PrivateRoom(chat_room){
    user_ID = $(chat_room).attr('id').split('_')[1]
    create_user_chat(parseInt(user_ID))
    set_isCreateGroupChat(false)
}
function onDeleteMediaGroup() {
    $('body').on('click', '.chat-load--file .icon-close--all', function () {
        $(this).closest('.chat-load--file').hide();
        $(this).closest('.chat-load--file').find('.list .item').remove();
        listMedia_format_SendMessage = []
    })
}


// on click delete a file/image
function onDeleteAMedia() {
    $('body').on('click', '.chat-load--file .icon-close', function () {
        $(this).closest('.item').remove();
        if ($('.chat-load--file .list').html() == '') {
            $('.chat-load--file').hide()
            listMedia_format_SendMessage = []
        }
    })
}
// ===== REGISTER EVENT DOM ====
function registerEvent () {
        
    $('.page-wrapper .footer').hide()
    
    $('#tab-images').click(function () {
        $('.chat-box').addClass('hide')
        $('.chat-images').addClass('show')

        if (get_subTab_in_tabImg().attr('id') == 'tab-images--1')
            ParseDocumentInTabImage(limit_all_get_in_tabImg, 1)

        if (get_subTab_in_tabImg().attr('id') == 'tab-images--2')
            ParseDocumentInTabImage(limit_all_get_in_tabImg, 2)

        if (get_subTab_in_tabImg().attr('id') == 'tab-images--3')
            ParseDocumentInTabImage(limit_all_get_in_tabImg, 3)

    })

    $('#show_all_img').click(function(){
        ParseDocumentInTabImage(limit_all_get_in_tabImg, 1)
    })

    $('#show_received_img').click(function(){
        ParseDocumentInTabImage(limit_all_get_in_tabImg, 2)
    })

    $('#show_sent_img').click(function(){
        ParseDocumentInTabImage(limit_all_get_in_tabImg, 3)
    })

    $(".load_to_end").click(function(){
        set_ScrollContainer_down()
    })

    $('.js_edit_name').click(function () {
        $(this).closest('.name').addClass('active')
        $('#id_group_name').attr('readonly', false)
    })

    
    // Edit Name Group
    $('#id_group_name').on('keyup', function (e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            if ($(this).val()){
                $('#id_group_name').attr('readonly', true);
                ShowMessageWarning("chat_change_group_name", "")
                
                group_new_name = $(this).val()
                $(this).closest('.name').find('.show_name').text(group_new_name)
                $('#chat_current_target .name').text(group_new_name)
                
                $(this).closest('.name').removeClass('active')
                config_group_setting(get_room_id(), group_new_name)
            } else {
                return ShowMessageWarning("chat_change_group_name", "Tên nhóm không được để trống")
            }
        }
    })

    //Event send message
    $('.js_send').click(function () {
        actionChat();
    })

    //Event open tab right 
    $('#chat_info_toggleIcon').click(function () {

        $(this).closest('.chat-system').find('.chat-info').toggleClass('active').show();
        $(this).toggleClass('active');
        $('.chat-system .chat-conversation').toggleClass('active').show();

    })

    //Event hamburger for mobile 
    $('.hamburger, .chat-system .chat-box .chat-not-selected p').on('click', function (event) {
        $(this).parents('.chat-system').find('.user-list-box').toggleClass('user-list-box-show')
    })

    
    // Event load images avatar group
    $('#chat_avatar_group_change').change(function () {
        fn_readURL(this, 'block_01--avatar-group', (image_base64) => {
            config_group_setting(get_room_id(), null, image_base64)
        });   
    })

    $(document.body).on("change", ".m_select_change", function () {
        this.dataset.chosen = this.value;
        $(this).closest('.form-group').find('.select2-selection__rendered').css({
            'font-style': 'normal',
            'color': '#333'
        });
    });
    // Search list chat
    $('.search > input').on('keyup', function (e) {
        if ($('#search_in_chat').hasClass('active')){
            e.preventDefault();
            if (e.keyCode === 13) {
                $('#room_search_result').html('')

                search_text($(this).val(), get_room_id())
                
            }
        }
        else {
            var rex = new RegExp($(this).val(), 'i');
            $('#list_person .person').hide();
            $('#list_person .person').filter(function () {
                return rex.test($(this).text());
            }).show();
        }   
    });
    
    // on typing for chat
    $('#chat_message').on('keyup', function (e) {
        e.preventDefault();
        if (e.keyCode === 13) {
            actionChat();
        }
    })


    $('.chat-system').on('click', '#list_person .person', function (event) {
        room_id     = $(this).attr('data-chat').split('_')[1] 
        room_type   = ($(this).attr('data-chat').split('_')[0] == "group") ? "group" : "user"
        room_name   = $(this).find('.user-name').attr('data-name');
        room_avatar = $(this).find('img').attr('src');

        localStorage.setItem('room_active_id',$(this).attr('data-chat'))

        var chatBox = $(this).closest('.chat-system').find('.chat-box');
        var chatImages = $(this).closest('.chat-system').find('.chat-images');
        if (chatBox.hasClass('hide')) {
            chatBox.removeClass('hide');
            chatImages.removeClass('show');
        }

        if (room_id) {
            Room.getInstance().set_room_session(room_id, room_name, room_type, room_avatar)
            recv()
            get_log_message(room_id)
            // recv() //Need to resync to save information of you in group before get logs message of room. It is MUST.
        } else {
            Create_PrivateRoom(this)
        }
        //for mobile view
        if ($(this).parents('.user-list-box').hasClass('user-list-box-show')) {
            $(this).parents('.user-list-box').removeClass('user-list-box-show');
        }

        if (DEBUG) {
            console.log("Room Id -- " + room_id + " -- type Id -- " + room_type + " -- name -- " + room_name)
        }
        
        set_isLoadOldMessage_up(false)

        active_chat_room(this)
        load_chat_room_header(room_name)
        $('#chat_message').val('');

        can_load_older_message = true
        set_lastMessageID()
        set_firstMessageID()
        //scroll to last message
        video_call_url = Host_video_call + Room.getInstance().get_id()
        $('#video_call').attr('href',video_call_url)
    });

    // scroll chat and show arrow down 
    $('.chat-conversation .chat-conversation-box').scroll(function(e){       
        show_arrow_down_button(this,e)
    })

    $('#memberingroup').on('click', '.delete', function(event){
        let listUser = []
        listUser.push(parseInt($(this).attr('data-btn').split('_')[1] ))
        deleted('remove_member', listUser)        
    });


    $('#tab-images').click(function(){
        $('.chat-box').addClass('hide')
        $('.chat-images').addClass('show')
        refreshChatWindows()
    })
    $('#tab-chats').click(function(){
        $('.chat-box').removeClass('hide')
        $('.chat-images').removeClass('show')
        refreshChatWindows()
        recv()
    })
    $('#tab-contacts').click(function(){
        $('.chat-box').removeClass('hide')
        $('.chat-images').removeClass('show')
        refreshChatWindows()
        
    })

    //hide group media when  null
    if ($('.chat-load--file .list').html() == '') {
        $('.chat-load--file').hide()
    }
    
    //--open search in room chat

    $('.chat-system .chat-meta-user .icon-search').click(function () {
        $(this).toggleClass('active');

        if( $(this).hasClass('active')){
            $('.peopleAll').hide();
            $('.on-searchUser').show();
            
            $('.search input').val('')
            
            $('#room_search_img').attr('src',Room.getInstance().get_avatar())
            $('#room_search_name').html(Room.getInstance().get_name())

        }else{
            $('.peopleAll').show();
            $('.on-searchUser').hide();
            $('.on-searchMess').hide();
            is_searching = false
        }

    })
    
    $('.person .close-user').click(function(){
        $('.chat-system .chat-meta-user .icon-search').removeClass('active')
        $('.peopleAll').show();
        $('.on-searchUser').hide();
        $('.on-searchMess').hide();

        $('.search input').val('')
        
        $('#room_search_result').html('')

        is_searching = false

    })

    $('.chat-system').on('click', '#room_search_result .person', function (event) {
        $('#room_search_result .person').removeClass('active')
        $(this).addClass('active')
        can_load_older_message = true
        can_load_newer_message = true
        is_searching = true
        set_isLoadOldMessage_up(false)
        $('#chat_detail').html('')
        set_firstMessageID()
        set_lastMessageID()
        get_log_message(get_room_id(),$(this).attr('data-searched'), false, true)
    })

    $("#addNewChat").on('hide.bs.modal', function(){
        $('#group_name').val('')
        $("#list_user").val([]).change()
    });
    
    $("#addMember").on('hide.bs.modal', function(){
        $("#list_user_add").val([]).change()
    });
}
// ===== END REGISTER EVENT DOM ====

$(window).on('load', function () {
    if (webchat_enable){
        registerEvent(); // register event
        onDeleteMediaGroup()
        onDeleteAMedia()
        loadChatInfo();
        OnlineMessage();
        onUploadImagesChat();
        onUploadFilesChat();
        document.body.addEventListener('dragover', function(e){
            e.preventDefault();
            e.stopPropagation();
        }, false);
        document.body.addEventListener('drop', function(e){
            e.preventDefault();
            e.stopPropagation();
        }, false);
    }
    GetChatHost_from_backend()
    $('.chatbox').on('click', '#popup_chat_notification .message-item', function (event) {
        // window.location.href = '{% url "view_chatsystem" %}'
        localStorage.setItem('room_active_id',$(this).attr('data-chat'))
    });
})
//------GET SET FORMAT DATA ---------

function format_text(text) {

    return (text || "").replace(
      /([^\S]|^)(((https?\:\/\/)|(www\.))(\S+))/gi,
      function(match, space, url){
        var hyperlink = url;
        if (!hyperlink.match('^https?:\/\/')) {
          hyperlink = 'http://' + hyperlink;
        }
        return space + '<a target="_blank" href="' + hyperlink + '">' + url + '</a>';
      }
    );
};

function get_room_id(){
    room_sesion = Room.getInstance()
    return room_sesion.get_id()
}

function setUserData(data){
    userData = data
}

function GetUserData(){
    return userData
}

function setCurrentUserInfo(name, avatar){
    user_FullName = name
    userAvatar = avatar
}

function GetUserFullName(){
    return user_FullName
}

function Get_UserAvatar(){
    return userAvatar
}

function get_tab_active(){
    return $('.tabs-action .active')
}

function get_chat_active(){
    tab_active = get_tab_active().attr('href').slice(1)
    return $('#'+tab_active+' #list_person').find('.active')
}

function conversationTime(DateTime){
    if (DateTime){
        date = DateTime.split(' ')[0]
        
        today = get_time_chat_now_format(true)
        format_date = date.split('-')[2]+'-'+date.split('-')[1]+'-'+date.split('-')[0]
        if (format_date == today)
            return conversation_Time = `<div class="conversation-time">
                                            <span>Today</span>
                                        </div>`
        return conversation_Time = `<div class="conversation-time">
                                        <span>${format_date}</span>
                                    </div>`
    }
    return ('')
}

function FormatMessage(message=""){
    TypeMessage = message
    if (message) {
        TypeMessage = message.split('|')[0].split(':')[1]
        message = message.slice(message.split('|')[0].length+1)
    }
    return {TypeMessage, message}
}

function formatTime(time) {
    _time = time.split(':')
    amOrPm= (_time[0]> 12) ? amOrPm = 'PM' : amOrPm = 'AM'
    return (_time[0]%12)+':'+_time[1]+' '+amOrPm
}

function get_time_chat_now_format(is_getDate =false){
    d = new Date();
    month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear();
    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    amORpm =''
    amORpm = (d.getHours()> 12) ? 'PM' : 'AM'

    chatTime = d.getHours() + ':' + d.getMinutes()+ ' '+amORpm;

    if (is_getDate) 
        return [day, month, year].join('-');
    return chatTime
}

function isAdmin(room_id){
    user_Data = GetUserData()
    room=[]
    for (let i = 0; i < user_Data.length; i++) {
        
        if (room_id == user_Data[i].id){
            room = user_Data[i]
            break;
        }
    }
    if (GetUserID() == room.user_admin){
        return true
    }
    return false
}   

function isLoadOldMessage_up(){
    return is_LoadOldMessage_up
}

function set_isLoadOldMessage_up(is_load_up){
    is_LoadOldMessage_up=is_load_up
}

function isCreateGroupChat(){
    return is_CreateGroupChat
}

function set_isCreateGroupChat(is_createGroup){
    
    is_CreateGroupChat=is_createGroup
}
function set_lastMessageID(messageID='',time=''){
    last_message_id = messageID
    last_message_time = time
}

function get_lastMessageID(){
    return last_message_id 
}

function get_lastMessage_time(){
    return last_message_time
}

function set_firstMessageID(messageID='',time=''){
    first_message_id = messageID
    first_message_time = time
}

function get_firstMessageID(){
    return first_message_id 
}

function get_firstMessage_time(){
    return first_message_time
}

function set_ScrollContainer_down(current_height=0)
{
    const getScrollContainer = document.querySelector('.chat-conversation-box');
    if (current_height)
        getScrollContainer.scrollTop = current_height;
    else {
        getScrollContainer.scrollTop = getScrollContainer.scrollHeight
    }
    
}

function get_icon_for_File(_fileName,style=''){
    if (_fileName){
        index = _fileName.lastIndexOf(".")
        _fileType = _fileName.substring(index+1)
        if (_fileType=='docx')
            return '<i class="las la-file-word '+style+'" style="font-size: 20px; ; color:#2b569a"></i>'

        if (_fileType=='xlsx')
            return '<i class="las la-file-excel '+style+'" style="font-size: 20px ; color:#387f55"></i>'

        if (_fileType=='pdf')
            return '<i class="las la-file-powerpoint '+style+'" style="font-size: 20px ; color:#900201"></i>'

        if (_fileType == 'pps')
            return '<i class="las la-file-powerpoint '+style+'" style="font-size: 20px; color: #d55600;"></i>'

        if (_fileType=='zip' || _fileType =='rar')
            return '<i class="las la-file-archive '+style+'" style="font-size: 20px; color:#907000"></i>'
    }
    return '<i class="las la-file '+style+'" style="font-size: 20px; color:#000000"></i>'
    
}

function load_result_search_message(data){
    
    $('.on-searchMess').show();
    
    for (let i = 0; i < data.length; i++) {

        user_ava = data[i].avatar
        user_name = data[i].full_name
        message_id = data[i]._id
        message_text = data[i].message

        if (data[i].time){
            date = data[i].time.split(' ')[0]
            format_date = date.split('-')[2]+'-'+date.split('-')[1]+'-'+date.split('-')[0]
            if (format_date == today){
                message_time = formatTime(data[i].time.split(' ')[1])
            } else {
                message_time = date.split('-')[2]+'/'+date.split('-')[1]
            }
        }

        searched_result =  `<div class="person" data-searched="${message_id}">
                                <div class="user-info">
                                    <div class="f-head">
                                        <figure> <img id="chat_img" src="${user_ava}" alt="avatar"> </figure>
                                    </div>
                                    <div class="f-body">
                                        <div class="meta-info"> 
                                            <span class="user-name" data-searched-sender ="${data[i].sender}">${user_name}</span> 
                                            <span class="user-meta-time" data-searched-time="${data[i].time}" >${message_time}</span>
                                        </div>
                                        <div class="meta-mes"> <span class="preview pr-2">${message_text}</span> </div>
                                    </div>
                                </div>
                            </div>`

        $('#room_search_result').append(searched_result)

    }
    
}
//------ END GET SET FORMAT DATA ---------
// ========= METHOD CHAT ==========
waitForSocketConnection = function (ws, callback = null) {
    setTimeout( () => {
        if ((ws.readyState === 1) && (is_subscribe)) {
            if (DEBUG){
                console.log("Connection is Open")
            }
            if (callback != null){
                callback();
            }
        } else {
            console.log("wait for connection...")
            waitForSocketConnection(ws, callback);
        }

    }, 15);
}

send_data = function (path, data){
    stomp_broker = client.getInstance();
    waitForSocketConnection( stomp_broker.get_ws(), () => {
        stomp_broker.send(path, data)
    })
}

get_document_group = function (service_url=SERVICE_API_GET_MEDIA_ROOM_URL, callback, last_id = null,limit=null,_mimetype=null){
    let data = {
        "room_id" : Room.getInstance().get_id()
    }

    if (last_id) {
        data["_id"] = last_id;
    }
    if (_mimetype) {
        data["mimetype"] = _mimetype;
    }
    if (limit) {
        data["limit"] = limit;
    }
    
    $.ajax({
        url: service_url,
        type: "GET",
        data: data,
        contentType : "application/json",
        success: callback, 
    });
}

get_document_of_user = function (service_url = SERVICE_API_GET_MEDIA_URL, callback, last_id=null, limit=150,type=1){
    $('#loading').show()
    $('.chat-images--center').hide()
    let data = {}
    data["_userID"] = GetUserID()
    if (last_id) {
        data["_id"] = last_id;
    }
    if (limit) {
        data["limit"] = limit;
    }
    if (type) {
        data["type"] = type;
    }
    
    $.ajax({
        url: service_url,
        type: "GET",
        data: data,
        contentType : "application/json",
        success: callback, 
    });
}

// ========= END METHOD CHAT  =================}
// ========= API  =================

var set_seen_message = function(room_id = 0){
    var data = {
        "key_message": "seen",
        "room_id": parseInt(room_id),
        "user_id": GetUserID()
    };

    send_data('/topic/', data)
}

var search_text = function(text = "", room_id = 0){
    var data = {
        "key_message": "search_text",
        "room_id": parseInt(room_id),
        "user_id": GetUserID(),
        "text": text
    };

    send_data('/topic/', data)
    
}

var send_message = function (text = "", receiver = 0, media = []) {
    var data = {
        "key_message": "message",
        "receiver": receiver,
        "sender": GetUserID(),
    };

    if (text != ""){
        data["message"] = text;

    }
    if (media.length != 0) {
        data["media"] = media;
    }

    send_data('/topic/', data)
};

// recv function:
// Đây là function bắt buộc phải được gọi trước khi thực hiện các thao tác khác của người dùng để đồng bộ thông tin.
// 
var recv = function () {
    var data = {
        "key_message": "first_log",
        "user_id": GetUserID(),
    };
    send_data('/topic/', data)
}

var create_group = function (list_user, name = "", avatar = "") {
    var data = {
        "key_message": "create_room",
        "user_id": GetUserID(),
        "list_user": list_user,
        "is_group": true,
        "group_name": name,
        "avatar": avatar
    };

    send_data('/topic/', data)
}

var add_member_to_group = function (list_user,room_id=0) {
    var data = {
        "key_message": "add_user_room",
        "list_user": list_user,
        "room_id": parseInt(room_id),
        "user_id": GetUserID(),
        "is_group": true
    };

    send_data('/topic/', data)
}

var remove_member_in_group = function(list_user,is_group,room_id=0){
    
    var data = {
        "key_message": "out_room",
        "room_id": parseInt(room_id),
        "user_id": GetUserID(),
        "is_group": is_group
    }
    if (list_user.length != 0){
        data["list_user"] = list_user;
    }
    send_data('/topic/', data)
}

var create_user_chat = function (add_user_id = 0) {
    var data = {
        "key_message": "create_room",
        "user_add": add_user_id,
        "user_id": GetUserID(),
        "is_group": false
    }
    send_data('/topic/', data)
}

var remove_room = function (room_id = "0") {
    var data = {
        "key_message": "remove_room",
        "room_id": parseInt(room_id),
        "user_id": GetUserID(),
        "is_group": true
    };

    send_data('/topic/', data)
}

var config_group_setting = function (room_id, name = null, image = null ) {
    var base64result = ''
    var content_type = ''
    if (image){
        base64result = image.split(',')[1];
        content_type = image.split(',')[0].split(';')[0].split(':')[1];
    }
    var data = {
        "key_message": "change_info_group",
        "room_id": parseInt(room_id),
        "user_id": GetUserID(),
        "group_name": name,
        "mimetype" : content_type,
        "image" : base64result
    };

    send_data('/topic/', data)
}

var get_log_message = function (room_id, lastID="", flag_search = false, scroll_down = false) {
    
    var data = {
        "key_message": "get_log",
        "user_id": GetUserID(),
        "room_id": parseInt(room_id),
        "last_id": lastID
    };
    if (flag_search){
        data["flag_search"] = flag_search;
    }
    if (scroll_down){
        data["flag_gte"] = scroll_down;
    }
    send_data('/topic/', data)
}

var sign_up = function (full_name, avatar) {
    setCurrentUserInfo(full_name, avatar) 
    var data = {
        "key_message": "sign_up",
        "user_id": GetUserID(),
        "full_name" : full_name, 
        "avatar": avatar,
    };
    send_data('/topic/', data)
}

var client = (function() {
    var instance;
    function init(_url) {
        let websocket = undefined;
        let user_id = undefined;
        let subscribe_id = undefined;
        let client = undefined;
        let ws = new WebSocket(_url);
        
        on_message =  function (e){
            
            let result = JSON.parse(e.body)
            data = result.data
            time = result.time
            message = result.message
            if (DEBUG){
                console.log("WEBSOCKET -- DEBUG -- ON_MESSAGE :: result.key_message " + result.key_message + " === data :: " + data)
            } 
            switch (result.key_message) {
                case "sign_up":
                    if (result.message == "success"){
                        recv()
                    }
                    break;
                    
                case "first_log":
                    setUserData(data)
                    loadData(data)
                    break;

                case "create_room":
                    HandleCreateRoomChat(result.room_id)
                    recv()
                    break;

                case "message":
                    list_user = result.list_user ? result.list_user : []
                    MessageProcess(result.message, result.media, result.receiver, result.sender, result.time, result.message_type, list_user)
                    recv()
                    break;

                case "get_log":

                    if (isLoadOldMessage_up())
                        LoadLogMessage_old(data, result.flag_gte)
                    else 
                        LoadLogMessage(data)

                    break;
                case "change_info_group": 
                    handleChangeRoomInfo(result.room_id, result.name, result.group_avatar)
                    break;                
                case "search_text":
                    load_result_search_message(data)
                    break;
                case "add_user_room":
                    if (result.list_user == [])
                        add_member_fail()
                    break;
                
                case "remove_user_room":
                case "out_room":

                default:
                    recv()
                    break;
            }
        }

        on_error = function (e){
            if (DEBUG) {
                console.log('ON_ERROR ==> ' + e);
            }
            setTimeout(() => {
                self.get_connection();
            }, 5000);
        }

        on_debug = function (e) {
            console.log("ON_DEBUG ==> " + e)
        }

        on_connect = function (){
            _subscribe=client.subscribe("/exchange/amq.direct/" + GetUserID(), on_message);
            subscribe_id = _subscribe.id
            is_subscribe = true
            sign_up(GetUserName(),GetUserAvatar())
        }
        
        get_connection = function(_ws) {
            client = Stomp.over(_ws);
            client.connect('stomp', 'st0mp', on_connect, on_error , GetChatHost() );
            
            // client.heartbeat.outgoing = 20000;
            // client.heartbeat.incoming = 0; 
            
            if (DEBUG) {
                client.debug = on_debug
            } else {
                client.debug = ""
            }
            return client
        }
                        
        get_connection(ws)

        return { 
            get_ws : function (){
                return ws
            },

            send : function (path, data){
                path = path + GetUserID()
                _data = JSON.stringify(data)

                if (DEBUG) {
                    console.log ("Send to path :: " + path + " with param ::" + _data)
                }

                var transaction = client.begin();
                var content_type =  "application/json"
                client.send(path, {
                        "content-type": content_type,
                        "transaction": transaction.id
                    }, _data)

                return  transaction.commit()
            },

            on_unsubscribe : function (){
                client.unsubscribe(subscribe_id)
                is_subscribe = false
            }

        };
    }
    return {
        getInstance : function() {
            if (!instance) instance = init("wss://mq.minerva.vn:3007/ws");
            return instance;
        }
    }
})();
// === END API ===
