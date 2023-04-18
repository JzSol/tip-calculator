import './body.scss';
import './container1.scss';

export const Body = () => {
  return (
    <body className='body'>
      <main className='container'>
        <div className='interactiveblock'>
          <div className='bill'>bill</div>

          <div className='inputbox'>
            <label>
              <input className='input' type='text' value={142.55}></input>

              <div className='dollar'></div>
            </label>
          </div>

          <div className='percentage'>
            <div className='select'>Select Tip %</div>

            <div className='btnbox'>
              <button className='btn'>
                <div className='btnper'>5% </div>
              </button>
              <button className='btn'>
                <div className='btnper'>25% </div>
              </button>
              <button className='btn'>
                <div className='btnper'>10% </div>
              </button>
              <button className='btn'>
                <div className='btnper'>50% </div>
              </button>
              <button className='btn'>
                <div className='btnper'>15% </div>
              </button>
              <button className='btncustom'>
                <div className='custom'>custom</div>
              </button>
            </div>
          </div>

          <div className='count'>
            <div className='peoplecount'>Number of People</div>

            <div className='input2'>
              <label>
                <input type='text' className='countinput' value={5}></input>
                <div className='icon'></div>
              </label>
            </div>
          </div>
        </div>

        <button className='group11'>
          <div className='resetbtn'>reset</div>
          <div className='total'>$32.79</div>
          <div className='textblock'>
            <div className='tot'>
              Total<div className='person'>/person</div>
            </div>
          </div>

          <div className='tipAm'>$4.27</div>
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
