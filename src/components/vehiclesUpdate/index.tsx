import { FC, useState } from 'react';
import Button from '../button';
import ErrorMessage from '../errorMessage';
import UpdateDataModal from './selectedUpdate';
import SelectDataModal from './selectData';
import './styles.css';

const VehiclesUpdate: FC = () => {
  const [id, setId] = useState<number | null>(null);
  const [isShowSelect, setIsShowSelect] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  const handleOnClick = (): void => {
    setIsShowSelect(true);
  };

  const handleOnIsShow = (_isShow: boolean): void => {
    setIsShowSelect(_isShow);
  };

  const handleOnId = (id: number): void => {
    setId(id);
  };

  const handleOnError = (_isError: boolean): void => {
    setIsError(_isError);
  };

  const handleOnResetId = () => {
    setId(null);
  }

  return (
    <div className="VehiclesUpdate__container">
      {/* ⚠️ Remove disabled */}
      <Button onClick={handleOnClick} disabled={true}>
        Vehícles Update 🧨
      </Button>
      <ErrorMessage isError={isError} />
      <SelectDataModal
        isShow={isShowSelect}
        onIsShow={handleOnIsShow}
        onId={handleOnId}
        onError={handleOnError}
      />
      {id && (
        <UpdateDataModal 
          id={id}
          onResetId={handleOnResetId}
        />
      )}
    </div>
  );
};

export default VehiclesUpdate;
