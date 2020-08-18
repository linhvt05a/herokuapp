import React from "react";

import { Link } from "react-router-dom";

function Chat(props) {
    let {active} = props;
    return (
        <div className={`chat_online chatOnline ${active == true ? "active" : ''}`}>
            <label className="chatLabel">
                Tư vấn trực tuyến
                <i className="close_chat fas fa-times-circle" />
            </label>
            <div className="send_info sendInfo">
                <form>
                    <input
                        type="text"
                        placeholder="Họ tên*"
                        className="form-control"
                    />
                    <input
                        type="text"
                        placeholder="Số điện thoại*"
                        className="form-control"
                    />
                    <input
                        type="text"
                        placeholder="Email*"
                        className="form-control"
                    />
                    <textarea
                        type="text"
                        placeholder="Nội dung cần giải đáp"
                        className="form-control"
                        defaultValue={""}
                    />
                    <div className="submit">
                        <button className="btn btn_green startConversation fw-500">
                            Bắt đầu trò chuyện
                        </button>
                    </div>
                </form>
            </div>
            <div className="start_chat startChat">
                <div className="chat">
                    <div className="chat--box chatBox section-scroll">
                        <div className="item you">Chào bạn,</div>
                        <div className="item me">
                            Căn chung cư A10 còn không bạn. Giá bán hiện tại
                            bao nhiêu vậy?
                        </div>
                        <div className="item you">nói tiếp đi</div>
                        <div className="item me">đợi tí nha!</div>
                        <div className="item you">Chào bạn,</div>
                        <div className="item me">
                            Căn chung cư A10 còn không bạn. Giá bán hiện tại
                            bao nhiêu vậy?
                        </div>
                        <div className="item you">nói tiếp đi</div>
                        <div className="item me">đợi tí nha!</div>
                        <div className="item you">Chào bạn,</div>
                        <div className="item me">
                            Căn chung cư A10 còn không bạn. Giá bán hiện tại
                            bao nhiêu vậy?
                        </div>
                        <div className="item you">nói tiếp đi</div>
                        <div className="item me">đợi tí nha!</div>
                        <div className="item you">Chào bạn,</div>
                        <div className="item me">
                            Căn chung cư A10 còn không bạn. Giá bán hiện tại
                            bao nhiêu vậy?
                        </div>
                        <div className="item you">nói tiếp đi</div>
                        <div className="item me">đợi tí nha!</div>
                    </div>
                    <div className="chat--input">
                        <input
                            className="typing"
                            type="text"
                            placeholder="Nhập nội dung và
                        Enter để gửi"
                        />
                        <span className="media">
                            <div className="chatFiles files">
                                <input type="file" />
                                <i className="fas fa-paperclip" />
                            </div>
                            <i className="far fa-smile chatEmoji emoji" />
                        </span>
                    </div>
                    <div className="list_emoji listEmoji">
                        <span role="img" aria-label="smile">
                            😀
                        </span>
                        <span role="img" aria-label="smile">
                            😄
                        </span>
                        <span role="img" aria-label="smile">
                            😁
                        </span>
                        <span role="img" aria-label="smile">
                            😆
                        </span>
                        <span role="img" aria-label="smile">
                            😅
                        </span>
                        <span role="img" aria-label="smile">
                            🤣
                        </span>
                        <span role="img" aria-label="smile">
                            😂
                        </span>
                        <span role="img" aria-label="smile">
                            🙂
                        </span>
                        <span role="img" aria-label="smile">
                            🙃
                        </span>
                        <span role="img" aria-label="smile">
                            😉
                        </span>
                        <span role="img" aria-label="smile">
                            😊
                        </span>
                        <span role="img" aria-label="smile">
                            😇
                        </span>
                        <span role="img" aria-label="smile">
                            🥰
                        </span>
                        <span role="img" aria-label="smile">
                            😍
                        </span>
                        <span role="img" aria-label="smile">
                            🤩
                        </span>
                        <span role="img" aria-label="smile">
                            😘
                        </span>
                        <span role="img" aria-label="smile">
                            😗
                        </span>
                        <span role="img" aria-label="smile">
                            😚
                        </span>
                        <span role="img" aria-label="smile">
                            😙
                        </span>
                        <span role="img" aria-label="smile">
                            😋
                        </span>
                        <span role="img" aria-label="smile">
                            😛
                        </span>
                        <span role="img" aria-label="smile">
                            🤪
                        </span>
                        <span role="img" aria-label="smile">
                            😝
                        </span>
                        <span role="img" aria-label="smile">
                            🤑
                        </span>
                        <span role="img" aria-label="smile">
                            🤗
                        </span>
                        <span role="img" aria-label="smile">
                            🤭
                        </span>
                        <span role="img" aria-label="smile">
                            🤫
                        </span>
                        <span role="img" aria-label="smile">
                            🤔
                        </span>
                        <span role="img" aria-label="smile">
                            🤐
                        </span>
                        <span role="img" aria-label="smile">
                            🤨
                        </span>
                        <span role="img" aria-label="smile">
                            😐
                        </span>
                        <span role="img" aria-label="smile">
                            😑
                        </span>
                        <span role="img" aria-label="smile">
                            😶
                        </span>
                        <span role="img" aria-label="smile">
                            😏
                        </span>
                        <span role="img" aria-label="smile">
                            😒
                        </span>
                        <span role="img" aria-label="smile">
                            🙄
                        </span>
                        <span role="img" aria-label="smile">
                            😬
                        </span>
                        <span role="img" aria-label="smile">
                            🤥
                        </span>
                        <span role="img" aria-label="smile">
                            😌
                        </span>
                        <span role="img" aria-label="smile">
                            😔
                        </span>
                        <span role="img" aria-label="smile">
                            😪
                        </span>
                        <span role="img" aria-label="smile">
                            🤤
                        </span>
                        <span role="img" aria-label="smile">
                            😴
                        </span>
                        <span role="img" aria-label="smile">
                            🥳
                        </span>
                        <span role="img" aria-label="smile">
                            😎
                        </span>
                        <span role="img" aria-label="smile">
                            👋
                        </span>
                        <span role="img" aria-label="smile">
                            👌
                        </span>
                        <span role="img" aria-label="smile">
                            ✌
                        </span>
                        <span role="img" aria-label="smile">
                            🖐
                        </span>
                        <span role="img" aria-label="smile">
                            🤘
                        </span>
                        <span role="img" aria-label="smile">
                            👈
                        </span>
                    </div>
                </div>
            </div>
            <div className="end_chat">
                <div className="heading">
                    Bạn muốn kết thúc trò chuyện ?
                    <span className="heading_sub">
                        Bạn có thực sự muốn kết thúc cuộc trò chuyện với
                        chúng tôi.
                    </span>
                </div>
                <div className="list_btn">
                    <Link to="/#" className="btn btn_red end_chat_all">
                        KẾT THÚC
                    </Link>
                    <Link to="/#" className="btn btn_green end_chat_back">
                        QUAY LẠI
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Chat;