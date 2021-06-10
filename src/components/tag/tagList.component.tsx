import { useRequest } from 'ahooks';
import TagAPI from '../../request/api/tag';
import { Empty, Skeleton } from 'antd';
import React from 'react';
// import { Status } from '../../interfaces/base';
import './less/tagList.less';

const TagList: React.FC = () => {
  // const loading = props.loading === Status.inProgress ? true : false;
  const { data, error, loading } = useRequest(() => {
    return TagAPI.getTagList();
  });
  return (
    <div>
      <div className="tag-container">
        <div className="tag-header">
          <span className="tag-title">标签</span>
        </div>
        <div className="tag-group">
          {data?.map((item, index) => {
            return (
              <div
                className="tag-item desc"
                key={item._id}
                style={{
                  background: item.tag_color, // '#' + Math.random().toString(16).slice(2, 8),
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
            {data?.length === 0 && !loading && (
              <Empty description={<span className="fs-xs empty">暂无标签......(～￣▽￣)～</span>} image={Empty.PRESENTED_IMAGE_SIMPLE} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// type Props = {
//   tagList: Array<any>;
//   loading: Status;
// };
export default React.memo(TagList);
