import mitt from 'mitt';
import { EventBusAgGridOnFilterOpenedProps } from './eventBusTypes';

type Events = {
  'agGrid:onFilterOpened': EventBusAgGridOnFilterOpenedProps;
};

const eventBus = mitt<Events>();
export default eventBus;
