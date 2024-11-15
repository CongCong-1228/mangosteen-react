export const DateTimePicker: React.FC = () => {
  return (
    <div bg="#fff" flex flex-col items-center w-full>
      <div shrink-0 grow-0 flex items-center justify-between w-full>
        <button text="#969799" text-14px px-12px b-none cursor-pointer>
          取消
        </button>
        <div
          text="#222d3a"
          text-16px
          px-12px
          font-700
          overflow-hidden
          whitespace-nowrap
          text-ellipsis
          max-w="50%"
        >
          选择年月日
        </div>
        <button text="#576b95" text-14px px-12px b-none cursor-pointer>
          确定
        </button>
      </div>
      <div shrink-1 grow-1 overflow-hidden>
        <ol
          flex
          flex-col
          children:text-14px
          children:px-12px
          children:py-8px
          children-cursor-grab
        >
          <li>2024</li>
          <li>2023</li>
          <li>2022</li>
          <li>2021</li>
          <li>2020</li>
          <li>2019</li>
          <li>2018</li>
          <li>2017</li>
          <li>2016</li>
          <li>2015</li>
          <li>2014</li>
          <li>2013</li>
          <li>2012</li>
          <li>2011</li>
          <li>2010</li>
        </ol>
      </div>
    </div>
  );
};
