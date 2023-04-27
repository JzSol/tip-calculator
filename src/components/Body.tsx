import { useEffect, useState, useMemo } from 'react';
import { Interactiveblock } from './Interactiveblock';
import './body.scss';
import classNames from 'classnames';

export const Body = () => {
  const [bill, setBill] = useState<string>('');
  const [count, setCount] = useState<string>('');
  const [customPerc, setCustomPerc] = useState<string>('');
  const [total, setTotal] = useState(0);
  const [tipAmm, setTipAmm] = useState(0);
  const [percBtn, setPercBtn] = useState(0);

  useEffect(() => {
    const inputCheck = bill.length > 0 && count.length > 0;
    if (inputCheck) {
      setTipAmm((Number(bill) * Number(customPerc) || percBtn) / 100);
      setTotal(Number(bill) / Number(count) + Number(tipAmm));
    }
  }, [bill, count, tipAmm, customPerc, percBtn]);

  const handleReset = () => {
    setBill('');
    setCount('');
    setCustomPerc('');
    setTotal(0);
    setTipAmm(0);
    setPercBtn(0);
  };

  const resetStatus = useMemo(() => {
    return bill.length > 0 || count.length > 0 || customPerc.length > 0;
  }, [bill, count, customPerc]);

  return (
    <body className='body'>
      <main className='container'>
        <Interactiveblock
          bill={bill}
          setBill={setBill}
          count={count}
          setCount={setCount}
          customPerc={customPerc}
          setCustomPerc={setCustomPerc}
          setPercBtn={setPercBtn}
        />
        <button className='group11'>
          <div
            className={classNames('resetbtn', { notActive: !resetStatus })}
            onClick={handleReset}>
            reset
          </div>
          <div className='total'>${total}</div>
          <div className='textblock'>
            <div className='tot'>
              Total<div className='person'>/person</div>
            </div>
          </div>

          <div className='tipAm'>${tipAmm}</div>
          <div className='textblock1'>
            <div className='tot1'>
              Tip Amount<div className='person1'>/person</div>
            </div>
          </div>
        </button>
      </main>
    </body>
  );
};
