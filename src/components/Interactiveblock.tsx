import './container1.scss';

type props = {
  bill: string;
  setBill: React.Dispatch<React.SetStateAction<string>>;
  count: string;
  setCount: React.Dispatch<React.SetStateAction<string>>;
  customPerc: string;
  setCustomPerc: React.Dispatch<React.SetStateAction<string>>;
  setPercBtn: React.Dispatch<React.SetStateAction<number>>;
};

export const Interactiveblock: React.FC<props> = ({
  bill,
  setBill,
  count,
  setCount,
  customPerc,
  setCustomPerc,
  setPercBtn,
}) => {
  const handleBillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBill(event.target.value);
  };

  const handlePeopleCount = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCount(event.target.value);
  };

  const handlePercentChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCustomPerc(event.target.value);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow only numbers to be entered
    const isNumber = /^[0-9]$/.test(event.key);
    const isDelete = event.key === 'Backspace' || event.key === 'Delete';
    if (!isNumber && !isDelete) {
      event.preventDefault();
    }
  };

  return (
    <div className='interactiveblock'>
      <div className='bill'>bill</div>

      <div className='inputbox '>
        <label>
          <input
            className='input activebill'
            type='text'
            placeholder={'0'}
            pattern='[0-9]'
            value={bill}
            onChange={handleBillChange}
            onKeyDown={handleKeyDown}
          />
          <div className='dollar'></div>
        </label>
      </div>

      <div className='percentage'>
        <div className='select'>Select Tip %</div>

        <div className='btnbox'>
          <button
            className='btn'
            onClick={() => setPercBtn(50)}>
            5%
          </button>
          <button
            className='btn'
            onClick={() => setPercBtn(250)}>
            25%
          </button>
          <button
            className='btn'
            onClick={() => setPercBtn(100)}>
            10%
          </button>
          <button
            className='btn'
            onClick={() => setPercBtn(500)}>
            50%
          </button>
          <button
            className='btn'
            onClick={() => setPercBtn(150)}>
            15%
          </button>
          <input
            className='custbtn'
            type='text'
            placeholder='Custom'
            value={customPerc}
            onChange={handlePercentChange}
            onKeyDown={handleKeyDown}
          />
        </div>
      </div>

      <div className='count'>
        <div className='peoplecount'>Number of People</div>

        <div className='input2'>
          <label>
            <input
              type='text'
              className='countinput'
              placeholder={'0'}
              pattern='[0-9]'
              value={count}
              onChange={handlePeopleCount}
              onKeyDown={handleKeyDown}
            />
            <div className='icon'></div>
          </label>
        </div>
      </div>
    </div>
  );
};
