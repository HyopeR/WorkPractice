import {useEffect, useState} from 'react';
import {Subject} from 'rxjs';

const useSubjectState = <T>(state: T, subject: Subject<T>, deps = []) => {
  const [value, setValue] = useState(state);

  useEffect(() => {
    const subscriber = subject.subscribe(data => setValue(data));
    return () => subscriber.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [...deps]);

  return value;
};

export default useSubjectState;
