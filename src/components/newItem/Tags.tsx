import { styled } from "styled-components";
import { Icon } from "../common/Icon";

const Ol = styled.ol`
  display: grid;
  justify-content: center;
  gap: 24px 16px;
  padding: 16px 8px;
  grid-template-columns: repeat(auto-fit, minmax(48px, 1fr));
`;

export const Tags: React.FC = () => {
  const tags = Array.from({ length: 32 });
  return (
    <div>
      <Ol>
        <li>
          <span
            block
            w-48px
            h-48px
            rounded-full
            bg="#efefef"
            flex
            items-center
            justify-center
          >
            <Icon name="add" />
          </span>
        </li>
        {tags.map((tag, index) => (
          <li
            key={index}
            flex-col
            w-48px
            flex
            items-center
            justify-center
            gap-y-8px
          >
            <span
              block
              w-48px
              h-48px
              bg="#efefef"
              rounded-full
              flex
              items-center
              justify-center
              text-24px
              b-1px
              b-solid
              b="#d1d14a"
            >
              😶
            </span>
            <span text-12px text="#4a4a4a">
              标签
            </span>
          </li>
        ))}
      </Ol>
    </div>
  );
};
