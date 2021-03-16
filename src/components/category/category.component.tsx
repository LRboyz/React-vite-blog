import React from 'react';
import { Avatar, Empty, Skeleton } from 'antd';
import { RightCircleTwoTone } from '@ant-design/icons';
import { CategoryData, Status } from '../../types/base';
import './less/category.less';

function Category(props: Props) {
  console.log(props.categoryList);
  const loading = props.loading === Status.inProgress ? true : false;
  return (
    <div className="category-container">
      <ul className="category-list">
        {props.categoryList.map((item, index) => {
          return (
            <li className="flex ai-center jc-between" key={index}>
              <Avatar shape="square" src={item.thumbnail} size="small" />
              <span className="fs-sm">{item.category_name}</span>
              <RightCircleTwoTone />
            </li>
          );
        })}
        {loading && (
          <div>
            {
              [1, 2, 3, 4].map((item, key) => {
                return (
                  <Skeleton
                  key={key}
                  className="mb-sm"
                  loading={loading}
                  active
                  avatar={{ size: 'small', shape: 'square' }}
                  title={false}
                  paragraph={{ rows: 1, width: 100 }}
                />
                )
              })
            }

          </div>
        )}
         {/* 空数据 */}
         {props.categoryList.length === 0 && props.loading !== Status.inProgress && (
              <Empty description={
                <span className="fs-xs empty">暂无分类......(～￣▽￣)～</span>
              } image={Empty.PRESENTED_IMAGE_SIMPLE}/>
            )}
      </ul>
    </div>
  );
}

type Props = {
  categoryList: Array<CategoryData>;
  loading: Status;
};

export default React.memo(Category);
