import Parser from 'html-react-parser';
import React from 'react';
import { Trans } from 'react-i18next';
import SliderInTab from '../TabsSlider/SliderInTab';
import {SliderSimple} from '../../../../components/common/Sliders';

const dataImgs = [
	{
		img: "./assets/images/bank02.jpg"
	},
	{
		img: "./assets/images/bank03.jpg"
	},
	{
		img: "./assets/images/bank04.jpg"
	},
	{
		img: "./assets/images/bank05.jpg"
	},
	{
		img: "./assets/images/bank06.jpg"
	},
	{
		img: "./assets/images/bank07.jpg"
	}
];



class AccordionItem extends React.Component {
	state = {
		opened: true
	};

	render() {
		const {
			props: {
				project_name,
				area_name,
				block_name,
				product_name,
				address_house,
				address,
				ward_name,
				district_name,
				province_name
			},
			state: { opened }
		} = this;

		const { data } = this.props;
		const { itemImg } = this.props;
		const MAX_SLIDES = 5;
		const infinite = itemImg ? itemImg.length > MAX_SLIDES : false;
		const settings = {
			slidesToShow: MAX_SLIDES,
			infinite: infinite,
			swipeToSlide: true,
			focusOnSelect: true
		}
		const { itemdata } = this.props;
		const dataLayout = this.props.itemdata.layout;
		const layout = itemdata.id === 2 ? [{ title: "2d", content: dataLayout.layout_2d }, { title: "3d", content: dataLayout.layout_3d }, { title: "ar", content: dataLayout.layout_ar }] : ""
		return (
			<div
				{...{
					className: `card ${opened && "show"}`
				}}
			>
				<div {...{ className: "card-header" }}>
					<h3 {...{ className: "title" }}><Trans>Vị trí</Trans></h3>
					<div {...{ onClick: () => { this.setState({ opened: !opened }); } }}>
						<i class="icon_collapse fas fa-plus"></i>
					</div>
				</div>
				<div {...{ className: "collapse" }}>
					{
						data &&
						<div className="list_style_01">
							<div className="row">
								<div className="col-12 col-sm-6 col-sm-6 col-md-4">
									<p className="list_style_01--item">
										Dự án: &nbsp;
                  <span className="value">{project_name}</span>
									</p>
									<p class="list_style_01--item">
										Khu : <span class="value">{area_name}</span>
									</p>
									<p class="list_style_01--item">
										Khối : <span class="value">{block_name}</span>
									</p>
								</div>
								<div class="col-12 col-sm-6 col-sm-6 col-md-4">
									<p class="list_style_01--item">
										Mã căn : <span class="value">{product_name}</span>
									</p>
									<p class="list_style_01--item">
										Số nhà : <span class="value">{address_house}</span>
									</p>
									<p class="list_style_01--item">
										Đường : <span class="value">{address}</span>
									</p>
								</div>
								<div class="col-12 col-sm-6 col-sm-6 col-md-4">
									<p class="list_style_01--item">
										Phường : <span class="value">{ward_name}</span>
									</p>
									<p class="list_style_01--item">
										Quận/Huyện : <span class="value">{district_name}</span>
									</p>
									<p class="list_style_01--item">
										Tỉnh/Thành phố : <span class="value">{province_name}</span>
									</p>
								</div>
							</div>
						</div>
					}
				</div>


				{/* DATA_SAMPLE */}
				<div {...{ className: "card-header" }}>
					<h3 {...{ className: "title" }}><Trans>Vị trí</Trans></h3>
					<div {...{ onClick: () => { this.setState({ opened: !opened }); } }}>
						<i class="icon_collapse fas fa-plus"></i>
					</div>
				</div>
				<div {...{ className: "collapse" }}>
					{
						itemdata.id === 2 ?
							<div className="list_style_02">
								<div className="row">
									<div className="col-sm-12 col-sm-12 col-md-12">
										{
											layout.map((itemlayout, index) => (
												<SliderInTab key={index} itemImg={itemlayout.content} />
											))
										}
									</div>
								</div>
							</div> :
							itemdata.id === 3 ?
								<div className="list_style_01">
									<div className="row">
										{
											itemdata.paragraph.map((item, index) => (
												<div className="col-sm-12 col-sm-12 col-md-12" key={index}>
													<p>{item.content}</p>
													<div class="embed-responsive embed-responsive-16by9">{Parser(item.video)}</div>
												</div>
											))
										}
									</div>
								</div> :
								itemdata.id === 4 ?
									<div className="list_style_01">
										<div className="row">
											{
												itemdata.paragraph.map((item, index) => (
													<div className="col-12 col-sm-6 col-sm-6 col-md-4" key={index}>
														<p className="list_style_02--item" key={index}>{item.content}</p>
													</div>
												))
											}
										</div>
									</div>
									:
									<div className="list_style_01">
										<div className="row">
											{
												itemdata.paragraph.map((item, index) => (
													<div className="col-sm-12 col-sm-12 col-md-12" key={index}>
														<p key={index}>{item.content}</p>
														<SliderSimple settings={settings} data={dataImgs} />
													</div>
												))
											}
										</div>
									</div>
					}
				</div>
			</div>
		);
	}
}
export default AccordionItem;