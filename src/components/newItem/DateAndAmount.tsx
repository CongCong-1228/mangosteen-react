import styled from "styled-components";
import { Icon } from "@/components/common/Icon";

const Div = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 56px);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  background-color: #ddd;
  grid-gap: 1px;
  border: 1px solid #ddd;
  border-left: none;
  border-right: none;
`;

export const DateAndAmount: React.FC<{ className?: string }> = ({
  className,
}) => {
  return (
    <div className={className}>
      <div
        flex
        items-center
        justify-between
        px-14px
        py-8px
        border-t-1px
        border-t-solid
        border-t="#ddd"
        bg="#fff"
      >
        <div flex items-center gap-8px shrink-0 grow-0>
          <Icon name="calendar" className="w-32px h-32px" />
          <span text-12px text="#999">
            2020-01-01
          </span>
        </div>
        <div grow-1 shrink-1 text="#53A867" text-20px text-align="right">
          123456789
        </div>
      </div>
      <Div children-bg="#fff">
        <button row-start-1 col-start-1 row-end-2 col-end-2>
          1
        </button>
        <button row-start-1 col-start-2 row-end-2 col-end-3>
          2
        </button>
        <button row-start-1 col-start-3 row-end-2 col-end-4>
          3
        </button>
        <button row-start-2 col-start-1 row-end-3 col-end-2>
          4
        </button>
        <button row-start-2 col-start-2 row-end-3 col-end-3>
          5
        </button>
        <button row-start-2 col-start-3 row-end-3 col-end-4>
          6
        </button>
        <button row-start-3 col-start-1 row-end-4 col-end-2>
          7
        </button>
        <button row-start-3 col-start-2 row-end-4 col-end-3>
          8
        </button>
        <button row-start-3 col-start-3 row-end-4 col-end-4>
          9
        </button>
        <button row-start-4 col-start-3 row-end-5 col-end-4>
          .
        </button>
        <button row-start-4 col-start-1 row-end-5 col-end-3>
          0
        </button>
        <button row-start-1 col-start-4 row-end-3 col-end-5>
          delete
        </button>
        <button row-start-3 col-start-4 row-end-5 col-end-5>
          OK
        </button>
      </Div>
    </div>
  );
};

// .div1 { grid-area: 1 / 1 / 2 / 2; }
// .div2 { grid-area: 1 / 2 / 2 / 3; }
// .div3 { grid-area: 1 / 3 / 2 / 4; }
// .div4 { grid-area: 2 / 1 / 3 / 2; }
// .div5 { grid-area: 2 / 2 / 3 / 3; }
// .div6 { grid-area: 2 / 3 / 3 / 4; }
// .div7 { grid-area: 3 / 1 / 4 / 2; }
// .div8 { grid-area: 3 / 2 / 4 / 3; }
// .div9 { grid-area: 3 / 3 / 4 / 4; }
// .div10 { grid-area: 4 / 1 / 5 / 3; }
// .div11 { grid-area: 4 / 3 / 5 / 4; }
// .div12 { grid-area: 1 / 4 / 3 / 5; }
// .div13 { grid-area: 3 / 4 / 5 / 5; }
