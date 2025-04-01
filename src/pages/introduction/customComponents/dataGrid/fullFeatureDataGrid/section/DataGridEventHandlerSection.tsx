import React from 'react';
import TypographyComp from '../../../../../../components/base/typography/Typography';
import DividerComp from '../../../../../../components/base/divider/Divider';
import GridComp from '../../../../../../components/base/grid/Grid';
import CardComp from '../../../../../../components/base/card/Card';
import CardContentComp from '../../../../../../components/base/cardContent/CardContent';
import BoxComp from '../../../../../../components/base/box/Box';
import ChipComp from '../../../../../../components/base/chip/Chip';
import FormControlLabelComp from '../../../../../../components/base/formControlLabel/FormControlLabel';
import SwitchComp from '../../../../../../components/base/switch/Switch';

interface EventHandlerParameter {
  name: string;
  value: unknown;
}

interface EventHandler {
  eventHandlerName: string;
  parameters: EventHandlerParameter[];
  description: string;
  enabled?: boolean;
}

export interface DataGridEventHandlers {
  [key: string]: EventHandler;
}

interface DataGridEventHandlerSectionProps {
  eventHandlers: DataGridEventHandlers;
  onEventHandlerToggle: (eventName: string, enabled: boolean) => void;
}

const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (_key: string, value: unknown) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return '[Circular Reference]';
      }
      seen.add(value);
    }
    // Filter DOM elements and functions
    if (value instanceof Element) return '[DOM Element]';
    if (typeof value === 'function') return '[Function]';
    return value;
  };
};

const safeStringify = (obj: unknown): string => {
  try {
    return JSON.stringify(obj, getCircularReplacer(), 2);
  } catch (error) {
    return '[Complex Object]';
  }
};

const DataGridEventHandlerSection: React.FC<DataGridEventHandlerSectionProps> = ({
  eventHandlers,
  onEventHandlerToggle,
}) => {
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h3" gutterBottom display="inline">
          introduction.eventHandlers
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <GridComp container spacing={5}>
        {Object.entries(eventHandlers).map(([key, handler]) => (
          <GridComp key={key} item xs={12} sm={4} md={3}>
            <CardComp>
              <CardContentComp>
                <BoxComp
                  display={'flex'}
                  flexDirection={'row'}
                  justifyContent={'space-between'}
                  gap={'5px'}
                  alignItems={'center'}
                >
                  <BoxComp>
                    <ChipComp color="success" label={handler.eventHandlerName} />
                  </BoxComp>

                  <BoxComp display={'flex'} gap={'5px'}>
                    {handler.parameters.map((param, index) => (
                      <ChipComp key={index} color="warning" label={param.name} />
                    ))}
                  </BoxComp>
                </BoxComp>

                <br />

                <BoxComp display="flex" justifyContent="space-between" alignItems="center">
                  <TypographyComp>{handler.description}</TypographyComp>
                  <FormControlLabelComp
                    control={
                      <SwitchComp
                        checked={handler.enabled || false}
                        onChange={(e) => onEventHandlerToggle(key, e.target.checked)}
                      />
                    }
                    label=""
                  />
                </BoxComp>

                <br />

                <TypographyComp variant="subtitle2" color="text.secondary" gutterBottom>
                  Parametre Değerleri:
                </TypographyComp>

                <BoxComp
                  sx={(theme) => ({
                    backgroundColor: theme.palette.background.default,
                    borderRadius: 1,
                    p: 2,
                    maxHeight: '200px',
                    overflow: 'auto',
                    border: `1px solid ${theme.palette.divider}`,
                  })}
                >
                  {handler.parameters.map((param, index) => (
                    <BoxComp key={index} mb={1}>
                      <TypographyComp component="span" variant="body2" color="primary">
                        {index + 1}- {param.name}:
                      </TypographyComp>

                      <TypographyComp
                        component="pre"
                        sx={(theme) => ({
                          backgroundColor: theme.palette.background.paper,
                          p: 1,
                          borderRadius: 0.5,
                          mt: 0.5,
                          fontSize: '0.75rem',
                          whiteSpace: 'pre-wrap',
                          wordBreak: 'break-all',
                          border: `1px solid ${theme.palette.divider}`,
                        })}
                      >
                        {safeStringify(param.value)}
                      </TypographyComp>
                    </BoxComp>
                  ))}
                </BoxComp>
              </CardContentComp>
            </CardComp>
          </GridComp>
        ))}
      </GridComp>
    </>
  );
};

export default DataGridEventHandlerSection;
