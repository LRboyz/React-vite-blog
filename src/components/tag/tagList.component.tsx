import { Empty, Skeleton } from 'antd';
import React from 'react';
import { Status } from '../../types/base';
import './less/tagList.less';

function TagList(props: Props) {
  const loading = props.loading === Status.inProgress ? true : false;
  return (
    <div>
      <div className="tag-container">
        <div className="tag-header">
          <span className="tag-title">标签</span>
        </div>
        <div className="tag-group">
          {props.tagList.map((item, index) => {
            return (
              <div
                className="tag-item desc"
                key={item._id}
                style={{
                  background: '#' + Math.random().toString(16).slice(2, 8),
                  opacity: 0.8,
                }}
              >
                {item.tag_name}
              </div>
            );
          })}
          <div style={{ width: '100%', paddingTop: '10px' }}>
            {loading && <Skeleton loading={loading} active title={false} />}
            {/* 空数据 */}
            {props.tagList.length === 0 && props.loading !== Status.inProgress && (
              <Empty description={<span className="fs-xs empty">暂无标签......(～￣▽￣)～</span>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

type Props = {
  tagList: Array<any>;
  loading: Status;
};
export default React.memo(TagList);
