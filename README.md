# pubget

get public function from Class (also Object).

This is for [クソアプリ Advent Calendar 2019](https://qiita.com/advent-calendar/2019/kuso-app), day 19 [poem when build](https://qiita.com/sadnessOjisan/98619eaaef1da8d6545a)

## how to use

1. get this tool

```zsh
$ git clone https://github.com/sadnessOjisan/pubget
```

2. install target library.

```zsh
# it's ok -D option, because we do not use this library to develop application.
$ npm install -D react
```

3. inspect library

```zsh
# node index.js ${targetLibraryName}
$ node index.js react
```

4. result

```zsh
{ react: '',
  Children: '',
  createRef: '',
  Component: '',
  isReactComponent: '',
  setState: '',
  forceUpdate: '',
  PureComponent: '',
  constructor: '',
  isPureReactComponent: '',
  createContext: '',
  forwardRef: '',
  lazy: '',
  memo: '',
  useCallback: '',
  useContext: '',
  useEffect: '',
  useImperativeHandle: '',
  useDebugValue: '',
  useLayoutEffect: '',
  useMemo: '',
  useReducer: '',
  useRef: '',
  useState: '',
  Fragment: '',
  Profiler: '',
  StrictMode: '',
  Suspense: '',
  createElement: '',
  cloneElement: '',
  createFactory: '',
  isValidElement: '',
  version: '',
  __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: '' }
```

## why is result strange format?

This library is only for [js-word-kana](https://github.com/sadnessOjisan/js-word-kana). This is for support tool for build カタカナ dictionary.
