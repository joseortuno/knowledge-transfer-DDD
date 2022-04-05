interface PrintConsoleProps<T> {
  title: string;
  data: T;
  isData: boolean;
}

const PrintConsole = <Type extends {}>({
  title,
  data,
  isData,
}: PrintConsoleProps<Type>) => {
  isData && console.log(`::::${title}: `, data);
  return <></>;
};

export default PrintConsole;
