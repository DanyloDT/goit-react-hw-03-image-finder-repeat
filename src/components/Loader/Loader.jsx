import { RingLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <RingLoader
      size={50}
      color="#3f51b5"
      cssOverride={{
        // margin: ' 0 auto',
        // position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  );
};
