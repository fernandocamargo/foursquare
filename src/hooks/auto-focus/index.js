import { useRef, useCallback, useEffect, createElement } from 'react';

export default type => {
  const ref = useRef();
  const component = useCallback(
    props => createElement(type, { ...props, ref }),
    [type]
  );

  useEffect(() => {
    ref.current.focus();
  }, []);

  return component;
};
