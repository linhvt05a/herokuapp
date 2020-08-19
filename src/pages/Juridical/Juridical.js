import React from "react";
import { Link } from "react-router-dom";

import TopBanner from "../../components/common/TopBanner";

class Juridical extends React.Component {
    render() {
        return (
            <div className="projectPage">
                <TopBanner />
                <div
                    className="top_banner"
                    style={{
                        backgroundImage: "url(./assets/images/juridical.jpg)",
                    }}
                >
                    <h2 className="top_banner--heading">Nội dung pháp lý</h2>
                </div>
                <div className="juridical">
                    <div className="container container-sm container-md">
                        <h3 className="main_heading">
                            <span>Pháp lý</span>
                        </h3>
                        <div className="row">
                            <div className="col-sm-12 col-md-7 col-lg-8 col-xl-8">
                                <div className="juridical__content sales_collapse">
                                    <div className="card show">
                                        <div className="card-header">
                                            <h2 className="title">
                                                Các điều kiện và điều khoản dịch
                                                vụ
                                            </h2>
                                            <div className="icon_action">
                                                <i className="icon_collapse fas fa-plus" />
                                            </div>
                                        </div>
                                        <div className="collapse">
                                            <div className="intro">
                                                <p>
                                                    Chào mừng Quý khách đến với
                                                    chúng tôi, Sàn giao dịch
                                                    thương mại điện tử về Bất
                                                    động sản (“BĐS”). Sàn giao
                                                    dịch được thiết lập và sở
                                                    hữu bởi Công ty Cổ phần Đầu
                                                    tư và Phát triển VTP, thuộc
                                                    hệ thống tập đoàn đầu tư và
                                                    phát triển bất động sản
                                                    trong nước.
                                                </p>
                                                <p>
                                                    Trước khi sử dụng trang giao
                                                    dịch động sản VTP hoặc tạo
                                                    tài khoản tại các chi nhánh,
                                                    xin vui lòng đọc kỹ Điều
                                                    khoản và Điều kiện giao dịch
                                                    dưới đây, sau đây gọi là
                                                    ("Điều khoản và Điều kiện"),
                                                    trước khi thực hiện bất kỳ
                                                    giao dịch về BĐS nào trên
                                                    VTP, sau đây gọi là ("Sản
                                                    Phẩm"), và Quy chế hoạt động
                                                    của Sàn Giao dịch thương mại
                                                    điện tử VTP (“Quy chế”).
                                                </p>
                                                <p>
                                                    Quý khách vui lòng kiểm tra
                                                    thường xuyên để cập nhật
                                                    những thay đổi của chúng
                                                    tôi.
                                                </p>
                                            </div>
                                            <div className="content_detail">
                                                <div className="content_detail--title fw-medium">
                                                    <i className="fas fa-star-of-life" />
                                                    <span>
                                                        1.1 Phạm vi áp dụng
                                                    </span>
                                                </div>
                                                <div className="content_detail--detail">
                                                    <p>
                                                        - Điều khoản và Điều
                                                        kiện sẽ được áp dụng cho
                                                        Khách Hàng đặt cọc mua
                                                        Sản Phẩm trên VTP.
                                                    </p>
                                                    <br />
                                                    - Khách Hàng tham gia giao
                                                    dịch trên VTP bao gồm:
                                                    <p />
                                                    <div className="dots">
                                                        <div className="d-flex pb-2">
                                                            <span>
                                                                <i className="fas fa-circle" />
                                                            </span>
                                                            <span>
                                                                Cá nhân từ đủ 18
                                                                tuổi trở lên, có
                                                                năng lực hành vi
                                                                dân sự phù hợp
                                                                để thực hiện các
                                                                giao dịch trên
                                                                VTP. Đối với
                                                                người Việt Nam
                                                                định cư ở nước
                                                                ngoài thì phải
                                                                có thêm giấy tờ
                                                                theo quy định
                                                                sau:
                                                            </span>
                                                        </div>
                                                        <p>
                                                            _ Trường hợp mang hộ
                                                            chiếu Việt Nam thì
                                                            phải còn giá trị và
                                                            có đóng dấu kiểm
                                                            chứng nhập cảnh của
                                                            cơ quan quản lý
                                                            xuất, nhập cảnh Việt
                                                            Nam vào hộ chiếu;
                                                        </p>
                                                        <p>
                                                            _ Trường hợp mang hộ
                                                            chiếu nước ngoài thì
                                                            phải còn giá trị có
                                                            đóng dấu kiểm chứng
                                                            nhập cảnh của cơ
                                                            quan quản lý xuất,
                                                            nhập cảnh Việt Nam
                                                            vào hộ chiếu và kèm
                                                            theo giấy tờ chứng
                                                            minh còn quốc tịch
                                                            Việt Nam hoặc giấy
                                                            tờ xác nhận là người
                                                            gốc Việt Nam do Sở
                                                            Tư pháp các tỉnh,
                                                            thành phố trực thuộc
                                                            trung ương, cơ quan
                                                            đại diện Việt Nam ở
                                                            nước ngoài, cơ quan
                                                            quản lý về người
                                                            Việt Nam ở nước
                                                            ngoài cấp hoặc giấy
                                                            tờ khác theo quy
                                                            định của pháp luật
                                                            Việt Nam.
                                                        </p>
                                                    </div>
                                                    <div className="dots">
                                                        <div className="d-flex pb-2">
                                                            <span>
                                                                <i className="fas fa-circle" />
                                                            </span>
                                                            <span>
                                                                Tổ chức được
                                                                thành lập và
                                                                hoạt động hợp
                                                                pháp theo quy
                                                                định của pháp
                                                                luật Việt Nam.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_detail">
                                                <div className="content_detail--title fw-medium">
                                                    <i className="fas fa-star-of-life" />
                                                    <span>
                                                        1.2. Tài khoản Vinhomes
                                                        Online
                                                    </span>
                                                </div>
                                                <div className="content_detail--detail">
                                                    <p>
                                                        - Khi đăng ký tài khoản,
                                                        Quý khách phải đáp ứng
                                                        các điều kiện nêu tại
                                                        Mục 1.1. Quý khách có
                                                        thể chọn tạo một tài
                                                        khoản và cung cấp thông
                                                        tin nhất định, bao gồm
                                                        địa chỉ Email hợp lệ và
                                                        mật khẩu. Quý khách sẽ
                                                        phải đăng ký tài khoản
                                                        với thông tin xác thực
                                                        về bản thân và phải cập
                                                        nhật nếu có bất kỳ thay
                                                        đổi nào. Mỗi người truy
                                                        cập phải có trách nhiệm
                                                        với mật khẩu, tài khoản
                                                        và hoạt động của mình
                                                        trên Website. Hơn nữa,
                                                        Quý khách phải thông báo
                                                        cho Vinhomes Online biết
                                                        khi tài khoản bị truy
                                                        cập trái phép. Chúng tôi
                                                        không chịu bất kỳ trách
                                                        nhiệm nào, dù trực tiếp
                                                        hay gián tiếp, đối với
                                                        những thiệt hại hoặc mất
                                                        mát gây ra do Khách Hàng
                                                        không tuân thủ quy định,
                                                        hướng dẫn của chúng tôi.
                                                        Bằng cách cung cấp thông
                                                        tin của mình, Quý khách
                                                        đồng ý cho chúng tôi
                                                        liên hệ với Quý khách về
                                                        mối quan tâm của Quý
                                                        khách đối với chúng tôi
                                                        hoặc qua Email, điện
                                                        thoại hoặc thông qua bất
                                                        kỳ thông tin liên hệ nào
                                                        khác mà Quý khách đã
                                                        chọn để cung cấp.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="title">
                                                Miễn trừ trách nhiệm
                                            </h2>
                                            <div className="icon_action">
                                                <i className="icon_collapse fas fa-plus" />
                                            </div>
                                        </div>
                                        <div className="collapse">
                                            <div className="intro">
                                                <p>
                                                    Chào mừng Quý khách đến với
                                                    chúng tôi, Sàn giao dịch
                                                    thương mại điện tử về Bất
                                                    động sản (“BĐS”). Sàn giao
                                                    dịch được thiết lập và sở
                                                    hữu bởi Công ty Cổ phần Đầu
                                                    tư và Phát triển VTP, thuộc
                                                    hệ thống tập đoàn đầu tư và
                                                    phát triển bất động sản
                                                    trong nước.
                                                </p>
                                                <p>
                                                    Trước khi sử dụng trang giao
                                                    dịch động sản VTP hoặc tạo
                                                    tài khoản tại các chi nhánh,
                                                    xin vui lòng đọc kỹ Điều
                                                    khoản và Điều kiện giao dịch
                                                    dưới đây, sau đây gọi là
                                                    ("Điều khoản và Điều kiện"),
                                                    trước khi thực hiện bất kỳ
                                                    giao dịch về BĐS nào trên
                                                    VTP, sau đây gọi là ("Sản
                                                    Phẩm"), và Quy chế hoạt động
                                                    của Sàn Giao dịch thương mại
                                                    điện tử VTP (“Quy chế”).
                                                </p>
                                                <p>
                                                    Quý khách vui lòng kiểm tra
                                                    thường xuyên để cập nhật
                                                    những thay đổi của chúng
                                                    tôi.
                                                </p>
                                            </div>
                                            <div className="content_detail">
                                                <div className="content_detail--title fw-medium">
                                                    <i className="fas fa-star-of-life" />
                                                    <span>
                                                        1.1 Phạm vi áp dụng
                                                    </span>
                                                </div>
                                                <div className="content_detail--detail">
                                                    <p>
                                                        - Điều khoản và Điều
                                                        kiện sẽ được áp dụng cho
                                                        Khách Hàng đặt cọc mua
                                                        Sản Phẩm trên VTP.
                                                    </p>
                                                    <br />
                                                    - Khách Hàng tham gia giao
                                                    dịch trên VTP bao gồm:
                                                    <p />
                                                    <div className="dots">
                                                        <div className="d-flex pb-2">
                                                            <span>
                                                                <i className="fas fa-circle" />
                                                            </span>
                                                            <span>
                                                                Cá nhân từ đủ 18
                                                                tuổi trở lên, có
                                                                năng lực hành vi
                                                                dân sự phù hợp
                                                                để thực hiện các
                                                                giao dịch trên
                                                                VTP. Đối với
                                                                người Việt Nam
                                                                định cư ở nước
                                                                ngoài thì phải
                                                                có thêm giấy tờ
                                                                theo quy định
                                                                sau:
                                                            </span>
                                                        </div>
                                                        <p>
                                                            _ Trường hợp mang hộ
                                                            chiếu Việt Nam thì
                                                            phải còn giá trị và
                                                            có đóng dấu kiểm
                                                            chứng nhập cảnh của
                                                            cơ quan quản lý
                                                            xuất, nhập cảnh Việt
                                                            Nam vào hộ chiếu;
                                                        </p>
                                                        <p>
                                                            _ Trường hợp mang hộ
                                                            chiếu nước ngoài thì
                                                            phải còn giá trị có
                                                            đóng dấu kiểm chứng
                                                            nhập cảnh của cơ
                                                            quan quản lý xuất,
                                                            nhập cảnh Việt Nam
                                                            vào hộ chiếu và kèm
                                                            theo giấy tờ chứng
                                                            minh còn quốc tịch
                                                            Việt Nam hoặc giấy
                                                            tờ xác nhận là người
                                                            gốc Việt Nam do Sở
                                                            Tư pháp các tỉnh,
                                                            thành phố trực thuộc
                                                            trung ương, cơ quan
                                                            đại diện Việt Nam ở
                                                            nước ngoài, cơ quan
                                                            quản lý về người
                                                            Việt Nam ở nước
                                                            ngoài cấp hoặc giấy
                                                            tờ khác theo quy
                                                            định của pháp luật
                                                            Việt Nam.
                                                        </p>
                                                    </div>
                                                    <div className="dots">
                                                        <div className="d-flex pb-2">
                                                            <span>
                                                                <i className="fas fa-circle" />
                                                            </span>
                                                            <span>
                                                                Tổ chức được
                                                                thành lập và
                                                                hoạt động hợp
                                                                pháp theo quy
                                                                định của pháp
                                                                luật Việt Nam.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_detail">
                                                <div className="content_detail--title fw-medium">
                                                    <i className="fas fa-star-of-life" />
                                                    <span>
                                                        1.2. Tài khoản Vinhomes
                                                        Online
                                                    </span>
                                                </div>
                                                <div className="content_detail--detail">
                                                    <p>
                                                        - Khi đăng ký tài khoản,
                                                        Quý khách phải đáp ứng
                                                        các điều kiện nêu tại
                                                        Mục 1.1. Quý khách có
                                                        thể chọn tạo một tài
                                                        khoản và cung cấp thông
                                                        tin nhất định, bao gồm
                                                        địa chỉ Email hợp lệ và
                                                        mật khẩu. Quý khách sẽ
                                                        phải đăng ký tài khoản
                                                        với thông tin xác thực
                                                        về bản thân và phải cập
                                                        nhật nếu có bất kỳ thay
                                                        đổi nào. Mỗi người truy
                                                        cập phải có trách nhiệm
                                                        với mật khẩu, tài khoản
                                                        và hoạt động của mình
                                                        trên Website. Hơn nữa,
                                                        Quý khách phải thông báo
                                                        cho Vinhomes Online biết
                                                        khi tài khoản bị truy
                                                        cập trái phép. Chúng tôi
                                                        không chịu bất kỳ trách
                                                        nhiệm nào, dù trực tiếp
                                                        hay gián tiếp, đối với
                                                        những thiệt hại hoặc mất
                                                        mát gây ra do Khách Hàng
                                                        không tuân thủ quy định,
                                                        hướng dẫn của chúng tôi.
                                                        Bằng cách cung cấp thông
                                                        tin của mình, Quý khách
                                                        đồng ý cho chúng tôi
                                                        liên hệ với Quý khách về
                                                        mối quan tâm của Quý
                                                        khách đối với chúng tôi
                                                        hoặc qua Email, điện
                                                        thoại hoặc thông qua bất
                                                        kỳ thông tin liên hệ nào
                                                        khác mà Quý khách đã
                                                        chọn để cung cấp.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-header">
                                            <h2 className="title">
                                                Nội quy khác của giao dịch
                                            </h2>
                                            <div className="icon_action">
                                                <i className="icon_collapse fas fa-plus" />
                                            </div>
                                        </div>
                                        <div className="collapse">
                                            <div className="intro">
                                                <p>
                                                    Chào mừng Quý khách đến với
                                                    chúng tôi, Sàn giao dịch
                                                    thương mại điện tử về Bất
                                                    động sản (“BĐS”). Sàn giao
                                                    dịch được thiết lập và sở
                                                    hữu bởi Công ty Cổ phần Đầu
                                                    tư và Phát triển VTP, thuộc
                                                    hệ thống tập đoàn đầu tư và
                                                    phát triển bất động sản
                                                    trong nước.
                                                </p>
                                                <p>
                                                    Trước khi sử dụng trang giao
                                                    dịch động sản VTP hoặc tạo
                                                    tài khoản tại các chi nhánh,
                                                    xin vui lòng đọc kỹ Điều
                                                    khoản và Điều kiện giao dịch
                                                    dưới đây, sau đây gọi là
                                                    ("Điều khoản và Điều kiện"),
                                                    trước khi thực hiện bất kỳ
                                                    giao dịch về BĐS nào trên
                                                    VTP, sau đây gọi là ("Sản
                                                    Phẩm"), và Quy chế hoạt động
                                                    của Sàn Giao dịch thương mại
                                                    điện tử VTP (“Quy chế”).
                                                </p>
                                                <p>
                                                    Quý khách vui lòng kiểm tra
                                                    thường xuyên để cập nhật
                                                    những thay đổi của chúng
                                                    tôi.
                                                </p>
                                            </div>
                                            <div className="content_detail">
                                                <div className="content_detail--title fw-medium">
                                                    <i className="fas fa-star-of-life" />
                                                    <span>
                                                        1.1 Phạm vi áp dụng
                                                    </span>
                                                </div>
                                                <div className="content_detail--detail">
                                                    <p>
                                                        - Điều khoản và Điều
                                                        kiện sẽ được áp dụng cho
                                                        Khách Hàng đặt cọc mua
                                                        Sản Phẩm trên VTP.
                                                    </p>
                                                    <br />
                                                    - Khách Hàng tham gia giao
                                                    dịch trên VTP bao gồm:
                                                    <p />
                                                    <div className="dots">
                                                        <div className="d-flex pb-2">
                                                            <span>
                                                                <i className="fas fa-circle" />
                                                            </span>
                                                            <span>
                                                                Cá nhân từ đủ 18
                                                                tuổi trở lên, có
                                                                năng lực hành vi
                                                                dân sự phù hợp
                                                                để thực hiện các
                                                                giao dịch trên
                                                                VTP. Đối với
                                                                người Việt Nam
                                                                định cư ở nước
                                                                ngoài thì phải
                                                                có thêm giấy tờ
                                                                theo quy định
                                                                sau:
                                                            </span>
                                                        </div>
                                                        <p>
                                                            _ Trường hợp mang hộ
                                                            chiếu Việt Nam thì
                                                            phải còn giá trị và
                                                            có đóng dấu kiểm
                                                            chứng nhập cảnh của
                                                            cơ quan quản lý
                                                            xuất, nhập cảnh Việt
                                                            Nam vào hộ chiếu;
                                                        </p>
                                                        <p>
                                                            _ Trường hợp mang hộ
                                                            chiếu nước ngoài thì
                                                            phải còn giá trị có
                                                            đóng dấu kiểm chứng
                                                            nhập cảnh của cơ
                                                            quan quản lý xuất,
                                                            nhập cảnh Việt Nam
                                                            vào hộ chiếu và kèm
                                                            theo giấy tờ chứng
                                                            minh còn quốc tịch
                                                            Việt Nam hoặc giấy
                                                            tờ xác nhận là người
                                                            gốc Việt Nam do Sở
                                                            Tư pháp các tỉnh,
                                                            thành phố trực thuộc
                                                            trung ương, cơ quan
                                                            đại diện Việt Nam ở
                                                            nước ngoài, cơ quan
                                                            quản lý về người
                                                            Việt Nam ở nước
                                                            ngoài cấp hoặc giấy
                                                            tờ khác theo quy
                                                            định của pháp luật
                                                            Việt Nam.
                                                        </p>
                                                    </div>
                                                    <div className="dots">
                                                        <div className="d-flex pb-2">
                                                            <span>
                                                                <i className="fas fa-circle" />
                                                            </span>
                                                            <span>
                                                                Tổ chức được
                                                                thành lập và
                                                                hoạt động hợp
                                                                pháp theo quy
                                                                định của pháp
                                                                luật Việt Nam.
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="content_detail">
                                                <div className="content_detail--title fw-medium">
                                                    <i className="fas fa-star-of-life" />
                                                    <span>
                                                        1.2. Tài khoản Vinhomes
                                                        Online
                                                    </span>
                                                </div>
                                                <div className="content_detail--detail">
                                                    <p>
                                                        - Khi đăng ký tài khoản,
                                                        Quý khách phải đáp ứng
                                                        các điều kiện nêu tại
                                                        Mục 1.1. Quý khách có
                                                        thể chọn tạo một tài
                                                        khoản và cung cấp thông
                                                        tin nhất định, bao gồm
                                                        địa chỉ Email hợp lệ và
                                                        mật khẩu. Quý khách sẽ
                                                        phải đăng ký tài khoản
                                                        với thông tin xác thực
                                                        về bản thân và phải cập
                                                        nhật nếu có bất kỳ thay
                                                        đổi nào. Mỗi người truy
                                                        cập phải có trách nhiệm
                                                        với mật khẩu, tài khoản
                                                        và hoạt động của mình
                                                        trên Website. Hơn nữa,
                                                        Quý khách phải thông báo
                                                        cho Vinhomes Online biết
                                                        khi tài khoản bị truy
                                                        cập trái phép. Chúng tôi
                                                        không chịu bất kỳ trách
                                                        nhiệm nào, dù trực tiếp
                                                        hay gián tiếp, đối với
                                                        những thiệt hại hoặc mất
                                                        mát gây ra do Khách Hàng
                                                        không tuân thủ quy định,
                                                        hướng dẫn của chúng tôi.
                                                        Bằng cách cung cấp thông
                                                        tin của mình, Quý khách
                                                        đồng ý cho chúng tôi
                                                        liên hệ với Quý khách về
                                                        mối quan tâm của Quý
                                                        khách đối với chúng tôi
                                                        hoặc qua Email, điện
                                                        thoại hoặc thông qua bất
                                                        kỳ thông tin liên hệ nào
                                                        khác mà Quý khách đã
                                                        chọn để cung cấp.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <ul className="pagination">
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            Đầu
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            <i className="fas fa-angle-double-left " />
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            1
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link
                                            className="page-link active"
                                            to="#"
                                        >
                                            2
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            3
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            <i className="fas fa-angle-double-right " />
                                        </Link>
                                    </li>
                                    <li className="page-item">
                                        <Link className="page-link" to="#">
                                            Cuối
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-5 col-lg-4 col-xl-4">
                                <div className="options bg_white mb-45">
                                    <ul className="options__menu">
                                        <label className="options__menu-title">
                                            Mục pháp lý
                                        </label>
                                        <li className="options__menu-item">
                                            <Link to="#" className="active">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Nội qui giao dịch
                                            </Link>
                                        </li>
                                        <li className="options__menu-item">
                                            <Link to="#">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Hợp đồng mua bán
                                            </Link>
                                        </li>
                                        <li className="options__menu-item">
                                            <Link to="#">
                                                <i className="icon fas fa-angle-right mr-2" />
                                                Khác
                                            </Link>
                                        </li>
                                    </ul>
                                    <div className="options__search">
                                        <div className="text">Tìm kiếm</div>
                                        <i className="icon fas fa-search" />
                                        <div className="search form-group">
                                            <input
                                                type="text"
                                                className="w-100 form-control"
                                                placeholder="Nhập nội dung"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="juridical__advisory">
                                    <div className="juridical__advisory--title mb-2">
                                        Tư vấn
                                    </div>
                                    <input
                                        type="text"
                                        className="w-100"
                                        placeholder="Họ tên"
                                    />
                                    <input
                                        type="text"
                                        className="w-100"
                                        placeholder="Email"
                                    />
                                    <textarea
                                        type="text"
                                        className="w-100 mt-2"
                                        placeholder="Nhập nội dung"
                                        defaultValue={""}
                                    />
                                    <button className="btn btn_green text-uppercase w-100">
                                        Gửi câu hỏi
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Juridical;
