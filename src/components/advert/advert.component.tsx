import React from 'react';
import { Card, Carousel, Image } from 'antd';

const Advertisement: React.FC = () => {
  const contentStyle = {
    width: '100px',
    height: '40px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <div className="advert-container">
      <div className="box">
        <Carousel autoplay>
          <div>
            <Image src="https://surmon.me/images/mammon/jd-drug-532-178.jpg" preview={false} />
          </div>
          <div>
            <Image src="https://surmon.me/images/mammon/aliyun-2020-532-178.jpg" preview={false} />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default React.memo(Advertisement);
