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
      // const decimalPerc = Number(customPerc) / 100;

      if (percBtn === 0) {
        setTipAmm((Number(bill) * Number(customPerc)) / 100);
      } else {
        setTipAmm((Number(bill) * percBtn) / 100);
      }
      setTotal(Number(bill) / Number(count) + Number(tipAmm));
    }
  }, [bill, count, customPerc, percBtn, tipAmm]);

  const handleReset = () => {
    setBill('');
    setCount('');
    setCustomPerc('');
    setTotal(0);
    setTipAmm(0);
    setPercBtn(0);
    setPercBtn(0);
  };

  const resetStatus = useMemo(() => {
    return bill.length > 0 || count.length > 0 || customPerc.length > 0;
  }, [bill, count, customPerc]);

  const roundedTotal = total.toFixed(2);
  const roundedTip = tipAmm.toFixed(2);

  return (
    <body className='body'>
      <main className='container'>
        {/* <Interactiveblock
          bill={bill}
          setBill={setBill}
          count={count}
          setCount={setCount}
          customPerc={customPerc}
          setCustomPerc={setCustomPerc}
          setPercBtn={setPercBtn}
          percBtn={percBtn}
        /> */}
        <button className='group11'>
          <div
            className={classNames('resetbtn', { notActive: !resetStatus })}
            onClick={handleReset}>
            reset
          </div>
          <div className='total'>${roundedTotal}</div>
          <div className='textblock'>
            <div className='tot'>
              Total<div className='person'>/person</div>
            </div>
          </div>

          <div className='tipAm'>${roundedTip}</div>
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
