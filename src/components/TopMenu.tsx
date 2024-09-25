import styled from "styled-components";
import { useMenuStore } from "../stores/useMenuStore";
import { Icon } from "./Icon";

export const TopMenu = () => {
  const { setVisible } = useMenuStore();

  const Li = styled.li`
    display: flex;
    align-items: center;
    padding: 8px 16px;
    margin-bottom: 6px;

    .icon {
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
  `;

  return (
    <div
      fixed
      top-0
      left-0
      w="70vw"
      h-screen
      bg-red
      z-1000
      flex
      flex-col
      b-3px
      onClick={() => setVisible(false)}
    >
      <div className="bg-[var(--welcome-bg-color)] w-full text-center text-[var(--text-color)] pt-32px pb-44px px-16px grow-0 shrink-0">
        <h2 text-24px>未登录用户</h2>
        <div className="text-[var(--text-color-light)]">点击这里登录</div>
      </div>
      <ul grow-1 shrink-1 bg-white text-20px py-16px>
        <Li>
          <Icon name="chart" />
          统计图表
        </Li>
        <Li>
          <Icon name="export" />
          导出数据
        </Li>
        <Li>
          <Icon name="category" />
          自定义分类
        </Li>
        <Li>
          <Icon name="noty" />
          记账提醒
        </Li>
      </ul>
    </div>
  );
};
