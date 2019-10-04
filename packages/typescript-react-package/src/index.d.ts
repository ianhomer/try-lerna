import * as React from 'react';

export interface EyeCandyProps extends React.Props<EyeCandy> {
}

declare class EyeCandy extends React.Component<EyeCandyProps, any> {
}

declare module '@try-lerna/typescript-react-package' {
}

declare module '*.scss' {
  const content: {[className: string]: string};
  export = content;
}

export {
  EyeCandy
};