import React, { useEffect, useState } from "react";
import CardHeader from "../../components/common/CardHeader";
import { CardVideo, CardButton, CardDescription, CardMode, VisitorForm } from "./index";
import { liveStreamAction } from "../../store/action/index";
import { useDispatch, useSelector } from "react-redux";
import SocialFixed from '../../components/common/Social_fixed'

const LiveStream = () => {
  const [active, setActive] = useState(true);
  const dispatch = useDispatch();
  const live = useSelector((state) => state.liveStreamReducer);
  const liveListSuccess = live.listStreaming.success;
  const liveList = liveListSuccess ? live.listStreaming.detail : null;
  const [show,setShow] = useState(false)
  const [showChat, setShowChat] = useState(false)
  return (
    <div className="news">
      <div className="container container-sm container-md">
        <CardHeader label="Online Advisory" />
        <div className="row">
          <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="row_content">
              <CardVideo url = "https://www.youtube.com/watch?v=ysz5S6PUM-U"/>
              <div className="btn_service">
                <ul className="list-inline">
                  <CardButton label="TƯ VẤN TRỰC TUYẾN" icon="fas fa-comments icon" showModel ={()=> setShowChat(true)}/>
                  <CardButton label="ĐĂNG KÝ THAM QUAN" icon="fas fa-file-alt icon" showModel={()=>setShow(true)}/>
                </ul>
              </div>
              <CardDescription />
              <ul className="nav" id="myTab">
                <CardMode
                  title="DANH SÁCH ĐANG PHÁT"
                  mode={active}
                  switchMode={() => setActive(true)}
                />
                <CardMode
                  title="DANH SÁCH XEM LẠI"
                  mode={!active}
                  switchMode={() => setActive(false)}
                />
              </ul>
              <div className="row">
                {active ? (
                  <RowLive data={liveList} />
                ) : (
                  <RowLive data={liveList} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <VisitorForm show={show} closeModel = {()=> setShow(false)}/>
      <SocialFixed show={showChat}/>
    </div>
  );
};

const RowLive = (props) => {
  const { data } = props;
  return (
    <div className="latest_tuvan--content">
        {data && data.map((item) => (
        <div className="col-sm-6 col-lg-4 col-12">
            <div className="item">
              <figure className="img">
                <CardVideo url={item.videoURL} />
              </figure>
              <div className="box">
                <h4 className="tuvan_name">
                  <a href="#">{item.title}</a>
                </h4>
                <span className="time">
                  <i className="icon far fa-clock" />
                  Ngày đăng:{item.timePost} -{item.postAt}
                </span>
              </div>
            </div>
        </div>
          ))}
      </div>
  
  );
};

export default LiveStream;
