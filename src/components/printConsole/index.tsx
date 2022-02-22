interface PrintConsoleProps<T> {
  title: string;
  data: T;
  isData: boolean;
}

const PrintConsole = <T extends {}>({
  title,
  data,
  isData,
}: PrintConsoleProps<T>) => {
  isData && console.log(`::::${title}: `, data);
  return <></>;
};

export default PrintConsole;
