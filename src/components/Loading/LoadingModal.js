import FadeIn from 'react-fade-in';
import Lottie from 'react-lottie';

import * as legoData from './410-lego-loader.json';
import * as doneData from './1708-success.json';

const legoLoadOptions = {
  loop: true,
  autoplay: true,
  animationData: legoData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};

const checkmarkOptions = {
  loop: false,
  autoplay: true,
  animationData: doneData.default,
  rendererSettings: {
    preserveAspectRatio: 'xMidYMid slice'
  }
};


const LoadingModal = ({ isLoading, isDone, message }) => {

  return (
    <div className={(isLoading || isDone) ? 'loading loading--visible' : 'loading'}>
      <FadeIn className="loading__content" >
        {(isLoading || isDone) && <h1 className="loading-text">{message}</h1>}
        {isLoading && <Lottie options={legoLoadOptions} height={120} width={120} />}
        {isDone &&
          <div className="loading-done">
            <Lottie options={checkmarkOptions} height={80} width={80} />
          </div>
        }
      </FadeIn>
    </div>

    // <div>
    //   {!isDone ? (
    //     <FadeIn>
    //       <div>
    //         <h1>fetching pizza</h1>
    //         {!isLoading ? (
    //           <Lottie options={legoLoadOptions} height={120} width={120} />
    //         ) : (
    //             <Lottie options={checkmarkOptions} height={80} width={80} />
    //           )}
    //       </div>
    //     </FadeIn>
    //   ) : (
    //       <h1>hello world</h1>
    //     )}
    // </div>
  );
};

export default LoadingModal;
