export const ItemsSummary: React.FC = () => {
  return (
    <ol className="bg-#fff8e1 flex justify-between items-center m-16px rounded-8px py-12px px-16px gap-10px text-center">
      <li text="#ffab91">
        <p>收入</p>
        <p>1000</p>
      </li>
      <li text="#aed581">
        <p>支出</p>
        <p>1000</p>
      </li>
      <li text="var(--text-color)">
        <p>净收入</p>
        <p>1000</p>
      </li>
    </ol>
  );
};
