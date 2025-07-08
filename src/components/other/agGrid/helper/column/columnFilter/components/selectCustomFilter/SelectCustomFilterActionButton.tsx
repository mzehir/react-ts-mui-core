import React from 'react';
import useLanguageContext from '../../../../../../../../hooks/useLanguageContext';

interface SelectCustomFilterActionButtonCompProps {
  label: string;
  onClick: () => void;
  isTranslation?: boolean;
}

const SelectCustomFilterActionButtonComp: React.FC<SelectCustomFilterActionButtonCompProps> = ({
  label,
  onClick,
  isTranslation = true,
}) => {
  const { translate } = useLanguageContext();

  return (
    <button className="ag-button ag-standard-button ag-filter-apply-panel-button" onClick={onClick}>
      {isTranslation ? translate(label) : label}
    </button>
  );
};

export default SelectCustomFilterActionButtonComp;
