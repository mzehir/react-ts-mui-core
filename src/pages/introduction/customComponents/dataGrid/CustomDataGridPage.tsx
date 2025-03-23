import React from 'react';
import TypographyComp from '../../../../components/base/typography/Typography';
import DividerComp from '../../../../components/base/divider/Divider';

const CustomDataGridPage: React.FC = () => {
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.customDataGridComponent
        </TypographyComp>
      </DividerComp>
    </>
  );
};

export default CustomDataGridPage;
