import {useEffect, DependencyList} from 'react';
import {Subject} from 'rxjs';

type EffectCallbackWithValue<T> = (value: T) => void;

const useSubjectAction = <T>(
  subject: Subject<T>,
  callback: EffectCallbackWithValue<T>,
  deps: DependencyList | undefined,
) => {
  useEffect(() => {
    const subscriber = subject.subscribe(values => callback(values));
    return () => subscriber.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
};

export default useSubjectAction;
