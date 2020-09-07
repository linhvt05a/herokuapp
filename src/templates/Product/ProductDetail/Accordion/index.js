import React, { Component } from 'react'


const Accordion = () => {
    const dataDemo = [
        {
            id: 2,
            title: "Mặt bằng tầng và mặt bằng dự án",
            layout: {
                "layout_2d": [
                    {
                        "name": "",
                        "image_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/project_image/image/feaa498b10d23362745d20200826084217.789016.jpg",
                        "image_id": 46057
                    },
                    {
                        "name": "",
                        "image_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/project_image/image/03271bddfbbc8d4a094e20200826084217.814692.png",
                        "image_id": 46058
                    }
                ],
                "layout_3d": [
                    {
                        "name": "",
                        "image_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/project_image/image/b76621962d4b8e17ddac20200826084217.860213.jpeg",
                        "image_id": 46059
                    },
                    {
                        "name": "",
                        "image_url": "https://cloudapi.minerva.vn/cdn/sunnyworld-sale-dev/project_image/image/44d5ee5068e6c6446c5820200826084217.878715.png",
                        "image_id": 46060
                    }
                ],
                "layout_ar": []
            },
    
        },
        {
            id: 3,
            title: "Giới thiệu dự án và tiến độ",
            paragraph: [
                {
                    content: "Khu VALLEN gồm 3 tòa căn hộ, được thiết kế hiện đại với 6 loại hình căn hộ từ 29 - 95m2, đáp ứng được mọi nhu cầu của khách hàng. Phân khu Sapphire 3 được đánh số thứ tự (tính từ tuyến đường sắt đô thị số 6 vào công viên trung tâm) lần lượt là S3.01, S3.02, S3.03.",
                    video: `<iframe class="embed-responsive-item" width="680" height="500" src="https://www.youtube.com/embed/P_TT76GGhbU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
                }
            ]
        },
        {
            id: 4,
            title: "Tiện ích nội khu",
            paragraph: [
                {
                    content: "Bể bơi người lớn"
                },
                {
                    content: "Bể bơi trẻ em"
                },
                {
                    content: "Đường dạo quanh bể bơi"
                },
                {
                    content: "Giàn hoa, ghế nghỉ"
                },
                {
                    content: "Vườn dưỡng sinh- chơi cờ"
                },
                {
                    content: "Vườn thiền"
                },
                {
                    content: "Thảm cỏ dưỡng sinh"
                },
                {
                    content: "Sân chơi trẻ em"
                },
                {
                    content: "Sân tập gym ngoài trời"
                },
                {
                    content: "Thảm cỏ đa năng"
                },
                {
                    content: "Chòi nghỉ cảnh quan"
                }
            ]
        },
        {
            id: 5,
            title: "Ngân hàng hổ trợ liên kết",
            paragraph: [
                {
                    content: "Các ngân hàng đầy uy tính đã liên kết với chúng tôi trong việc cho bạn vay những khoản tiền phù hợp, để mua những sản phẩm của chúng tôi :"
                }
            ]
        }
    
    ];
    return (
        <div className="wrapper">
            <div className="accordion-list">
                <div className="sales_collapse">
                    {
                        dataDemo &&
                        dataDemo.map((dataLayout, index) => (
                            <AccordionItem key={index} itemdata={dataLayout} {...data} data={data} />
                        ))
                    }
                </div>
            </div>
        </div> 
    )
}
export default Accordion;