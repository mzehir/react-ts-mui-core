import { AccordionProps } from '@mui/material/Accordion';

export interface AccordionCompProps extends AccordionProps {}

// @ts-expect-error: The 'children' property cannot be empty, but it is ignored here for default props.
// The 'children' component must always be provided for proper operation of the component.
export const accordionCompDefaultProps: AccordionCompProps = {};
