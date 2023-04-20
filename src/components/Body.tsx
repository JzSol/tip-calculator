import { Interactiveblock } from './Interactiveblock';

import './body.scss';

export const Body = () => {
  return (
    <body className='body'>
      <main className='container'>
        <Interactiveblock />
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
